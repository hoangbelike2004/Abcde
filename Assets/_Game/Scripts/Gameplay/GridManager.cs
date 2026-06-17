using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using System.Collections;

[System.Serializable]
public struct ColorSetting
{
    public CellColorType type;
    public Color color;
}

public class GridManager : MonoBehaviour
{
    [Header("Grid Data")]
    public int width = 5;
    public int height = 5;
    public Cell[,] gridCells;

    [Header("Color Dictionary (Bảng màu)")]
    public List<ColorSetting> colorSettings;

    [Header("Border Settings (Cấu hình viền)")]
    public float borderPadding = -15f;
    public Color wrongColor = new Color(0.8f, 0.2f, 0.2f, 1f);
    public Color defaultDragColor = new Color(0.5f, 0.5f, 0.5f, 1f);

    [Header("Scale Settings")]
    public int standardSize = 5;

    // 🔥 THÊM VÀO TỪ BẢN CŨ: Mảng chứa viền kéo sẵn bằng tay
    [Header("Border Pool (Kéo sẵn khoảng 12-15 đối tượng vào đây)")]
    public List<BorderUnit> borderPoolList;

    public CanvasWin canvasWin;

    public Tutorial2 tutorial2;
    private bool isDragging = false;
    private int currentPointerId = -999;

    private Cell startCell;
    private Cell currentHoverCell;
    private List<Cell> currentSelectedCells = new List<Cell>();
    private int currentGroupID = 0;

    private BorderUnit previewBorderUnit;
    private Color currentDragColor;

    private List<int> wrongGroupIDs = new List<int>();
    private Dictionary<int, BorderUnit> activeBorders = new Dictionary<int, BorderUnit>();
    private Dictionary<Cell, BorderUnit> initialBorders = new Dictionary<Cell, BorderUnit>();

    private Dictionary<int, Cell> groupStartCells = new Dictionary<int, Cell>();

    private bool isGameFinished = false;

    [SerializeField] private CellOrientationSO cellOrientationSO;
    private Transform borderPoolParent;

    private bool isTutorial = false, isTutorial2 = false;


    // ==========================================
    // CẤU HÌNH OFFSET ĐỂ CÁCH GÓC RA
    // ==========================================
    private Vector2 amountSelectOffset = new Vector2(20f, 20f); // Khoảng cách x, y so với góc

    void Awake()
    {
        Input.multiTouchEnabled = false;

        GameObject poolObj = GameObject.Find("Pool/Borders");
        if (poolObj != null) borderPoolParent = poolObj.transform;

        cellOrientationSO = Resources.Load<CellOrientationSO>(GameConstants.KEY_DATA_CELL_ORIENTATION_SO);
        gridCells = new Cell[width, height];
        Cell[] allChildCells = GetComponentsInChildren<Cell>();

        if (allChildCells.Length != width * height) return;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int index = y * width + x;
                Cell cell = allChildCells[index];
                gridCells[x, y] = cell;
                if (cell.colorType != CellColorType.None)
                {
                    CellOrientationData cellOrientationData = cellOrientationSO.GetCellOrientationData(cell.orientationType, cell.colorType);
                    cell.Init(x, y, cell.numberValue, this, cellOrientationData);
                }
                else
                    cell.Init(x, y, cell.numberValue, this);
            }
        }
    }

    void Start()
    {
        // 🔥 TỪ BẢN CŨ: Tắt các border lúc mới vào game
        if (borderPoolList != null)
        {
            for (int i = 0; i < borderPoolList.Count; i++)
            {
                if (borderPoolList[i] != null) borderPoolList[i].gameObject.SetActive(false);
            }
        }

        AdjustGridScale();
        // 🔥 TỪ BẢN CŨ: Dùng Coroutine delay 0.1s
        StartCoroutine(InitBordersDelayed());
    }

    private IEnumerator InitBordersDelayed()
    {
        yield return null;
        yield return null;
        yield return new WaitForSeconds(0.1f);
        SpawnInitialBorders();
    }

    // ==========================================
    // HÀM TÍNH BOUNDS TÙY CHỈNH (CỦA BẢN MỚI)
    // ==========================================
    private Bounds GetRelativeBounds(Transform root, Transform child)
    {
        RectTransform childRT = child.GetComponent<RectTransform>();
        if (childRT == null) return new Bounds(Vector3.zero, Vector3.zero);

        Rect rect = childRT.rect;
        Vector3[] corners = new Vector3[4];
        corners[0] = new Vector3(rect.xMin, rect.yMin, 0f);
        corners[1] = new Vector3(rect.xMin, rect.yMax, 0f);
        corners[2] = new Vector3(rect.xMax, rect.yMax, 0f);
        corners[3] = new Vector3(rect.xMax, rect.yMin, 0f);

        Vector3 min = root.InverseTransformPoint(child.TransformPoint(corners[0]));
        Vector3 max = min;

        for (int i = 1; i < 4; i++)
        {
            Vector3 pt = root.InverseTransformPoint(child.TransformPoint(corners[i]));
            min = Vector3.Min(min, pt);
            max = Vector3.Max(max, pt);
        }

        return new Bounds((min + max) / 2f, max - min);
    }

    // 🔥 TỪ BẢN CŨ: Hàm lấy Border từ List
    private BorderUnit GetAvailableBorderFromList()
    {
        if (borderPoolList == null) return null;

        for (int i = 0; i < borderPoolList.Count; i++)
        {
            if (borderPoolList[i] != null && !borderPoolList[i].gameObject.activeSelf)
            {
                borderPoolList[i].gameObject.SetActive(true);
                return borderPoolList[i];
            }
        }

        Debug.LogError("⚠️ Không đủ BorderUnit trong mảng borderPoolList! Tạo thêm clone ở Hierarchy và kéo thêm vào mảng.");
        return null;
    }

    // 🔥 TỪ BẢN CŨ: Hàm huỷ/tắt Border
    private void DeactivateBorder(BorderUnit border)
    {
        if (border == null) return;
        if (border.borderImage != null) border.borderImage.DOKill();
        if (border.backgroundImage != null) border.backgroundImage.DOKill();

        if (border.rectContainerAmoutSellect != null) border.rectContainerAmoutSellect.gameObject.SetActive(false);

        border.gameObject.SetActive(false);
    }

    private void SpawnInitialBorders()
    {
        Canvas.ForceUpdateCanvases();
        initialBorders.Clear();
        groupStartCells.Clear();

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                if (c.colorType != CellColorType.None)
                {
                    Color cellColor = GetColorByType(c.colorType);

                    if (c.numberValue == 1 && c.limitType == CellLimitType.Fixed)
                    {
                        currentGroupID++;
                        BorderUnit permanentBorder = GetAvailableBorderFromList();
                        if (permanentBorder == null) continue;

                        if (permanentBorder.transform.parent != transform)
                            permanentBorder.transform.SetParent(transform, false);
                        permanentBorder.transform.SetAsLastSibling();
                        permanentBorder.SetSorttingLayer();
                        permanentBorder.ResetSorttingLayer();

                        Bounds bounds = GetRelativeBounds(transform, c.transform);
                        SetBorderBounds(permanentBorder.rect, bounds);

                        if (permanentBorder.borderImage != null)
                        {
                            permanentBorder.borderImage.raycastTarget = false;
                            permanentBorder.borderImage.DOKill();
                            permanentBorder.borderImage.color = cellColor;
                        }
                        if (permanentBorder.backgroundImage != null)
                        {
                            permanentBorder.backgroundImage.raycastTarget = false;
                            permanentBorder.backgroundImage.DOKill();
                            permanentBorder.backgroundImage.color = new Color(cellColor.r, cellColor.g, cellColor.b, permanentBorder.backgroundAlpha);
                        }

                        activeBorders.Add(currentGroupID, permanentBorder);
                        groupStartCells.Add(currentGroupID, c);
                        c.isLocked = true;
                        c.groupID = currentGroupID;

                        BorderUnit initialBorder = GetAvailableBorderFromList();
                        if (initialBorder == null) continue;

                        if (initialBorder.transform.parent != transform)
                            initialBorder.transform.SetParent(transform, false);
                        initialBorder.transform.SetAsLastSibling();
                        initialBorder.SetSorttingLayer();

                        SetBorderBounds(initialBorder.rect, bounds);

                        if (initialBorder.borderImage != null)
                        {
                            initialBorder.borderImage.raycastTarget = false;
                            initialBorder.borderImage.color = cellColor;
                        }
                        if (initialBorder.backgroundImage != null)
                        {
                            initialBorder.backgroundImage.raycastTarget = false;
                            initialBorder.backgroundImage.color = new Color(cellColor.r, cellColor.g, cellColor.b, initialBorder.backgroundAlpha);
                        }

                        initialBorders.Add(c, initialBorder);
                        initialBorder.gameObject.SetActive(false);
                    }
                    else if (c.limitType == CellLimitType.Unlimited)
                    {
                        bool isShapeValidFor1x1 = true;
                        if (c.orientationType == CellOrientationType.HorizontalRectangle || c.orientationType == CellOrientationType.VerticalRectangle)
                        {
                            isShapeValidFor1x1 = false;
                        }

                        currentGroupID++;
                        BorderUnit permanentBorder = GetAvailableBorderFromList();
                        if (permanentBorder == null) continue;

                        if (permanentBorder.transform.parent != transform)
                            permanentBorder.transform.SetParent(transform, false);
                        permanentBorder.transform.SetAsLastSibling();
                        permanentBorder.SetSorttingLayer();
                        permanentBorder.ResetSorttingLayer();

                        Bounds bounds = GetRelativeBounds(transform, c.transform);
                        SetBorderBounds(permanentBorder.rect, bounds);

                        if (permanentBorder.borderImage != null)
                        {
                            permanentBorder.borderImage.raycastTarget = false;
                            permanentBorder.borderImage.DOKill();
                            permanentBorder.borderImage.color = cellColor;
                        }
                        if (permanentBorder.backgroundImage != null)
                        {
                            permanentBorder.backgroundImage.raycastTarget = false;
                            permanentBorder.backgroundImage.DOKill();
                            permanentBorder.backgroundImage.color = new Color(cellColor.r, cellColor.g, cellColor.b, permanentBorder.backgroundAlpha);
                        }

                        permanentBorder.SetWrongPattern(false);

                        if (!isShapeValidFor1x1)
                        {
                            wrongGroupIDs.Add(currentGroupID);
                        }

                        activeBorders.Add(currentGroupID, permanentBorder);
                        groupStartCells.Add(currentGroupID, c);
                        c.isLocked = true;
                        c.groupID = currentGroupID;

                        BorderUnit initialBorder = GetAvailableBorderFromList();
                        if (initialBorder == null) continue;

                        if (initialBorder.transform.parent != transform)
                            initialBorder.transform.SetParent(transform, false);
                        initialBorder.transform.SetAsLastSibling();
                        initialBorder.SetSorttingLayer();

                        SetBorderBounds(initialBorder.rect, bounds);

                        if (initialBorder.borderImage != null)
                        {
                            initialBorder.borderImage.raycastTarget = false;
                            initialBorder.borderImage.color = cellColor;
                        }
                        if (initialBorder.backgroundImage != null)
                        {
                            initialBorder.backgroundImage.raycastTarget = false;
                            initialBorder.backgroundImage.color = new Color(cellColor.r, cellColor.g, cellColor.b, initialBorder.backgroundAlpha);
                        }

                        initialBorders.Add(c, initialBorder);
                        initialBorder.gameObject.SetActive(false);
                    }
                    else
                    {
                        BorderUnit initialBorder = GetAvailableBorderFromList();
                        if (initialBorder == null) continue;

                        if (initialBorder.transform.parent != transform)
                            initialBorder.transform.SetParent(transform, false);
                        initialBorder.transform.SetAsLastSibling();
                        initialBorder.SetSorttingLayer();

                        Bounds bounds = GetRelativeBounds(transform, c.transform);
                        SetBorderBounds(initialBorder.rect, bounds);

                        if (initialBorder.borderImage != null)
                        {
                            initialBorder.borderImage.raycastTarget = false;
                            initialBorder.borderImage.DOKill();
                            initialBorder.borderImage.color = cellColor;
                        }

                        if (initialBorder.backgroundImage != null)
                        {
                            initialBorder.backgroundImage.raycastTarget = false;
                            initialBorder.backgroundImage.DOKill();
                            initialBorder.backgroundImage.color = new Color(cellColor.r, cellColor.g, cellColor.b, initialBorder.backgroundAlpha);
                        }

                        initialBorders.Add(c, initialBorder);
                    }
                }
            }
        }
        CheckWinCondition();
    }

    private void RefreshBordersVisibility()
    {
        if (isDragging && previewBorderUnit != null)
        {
            Color previewColor = currentDragColor;
            foreach (Cell c in currentSelectedCells)
            {
                if (c.colorType != CellColorType.None)
                {
                    previewColor = GetColorByType(c.colorType);
                    break;
                }
            }

            if (previewBorderUnit.borderImage != null)
                previewBorderUnit.borderImage.color = new Color(previewColor.r, previewColor.g, previewColor.b, previewBorderUnit.borderImage.color.a);
            if (previewBorderUnit.backgroundImage != null)
                previewBorderUnit.backgroundImage.color = new Color(previewColor.r, previewColor.g, previewColor.b, previewBorderUnit.backgroundImage.color.a);
        }

        foreach (var kvp in activeBorders)
        {
            int gID = kvp.Key;
            BorderUnit border = kvp.Value;
            bool shouldHideActive = false;

            if (isDragging)
            {
                foreach (Cell c in currentSelectedCells)
                {
                    if (c.groupID == gID)
                    {
                        shouldHideActive = true;
                        break;
                    }
                }
            }

            if (shouldHideActive && border.gameObject.activeSelf)
                border.gameObject.SetActive(false);
            else if (!shouldHideActive && !border.gameObject.activeSelf)
                border.gameObject.SetActive(true);
        }

        foreach (var kvp in initialBorders)
        {
            Cell c = kvp.Key;
            BorderUnit border = kvp.Value;

            if (border == null) continue;

            if (border == previewBorderUnit || activeBorders.ContainsValue(border))
            {
                if (border == previewBorderUnit)
                {
                    if (!border.gameObject.activeSelf) border.gameObject.SetActive(true);
                }
                continue;
            }

            bool shouldHideInitial = (isDragging && currentSelectedCells.Contains(c)) || c.isLocked;

            if (shouldHideInitial && border.gameObject.activeSelf)
            {
                border.gameObject.SetActive(false);
            }
            else if (!shouldHideInitial && !border.gameObject.activeSelf)
            {
                border.gameObject.SetActive(true);
            }
        }
    }

    private void AdjustGridScale()
    {
        int maxDimension = Mathf.Max(width, height);
        if (maxDimension > standardSize)
        {
            float scaleFactor = (float)standardSize / maxDimension;
            transform.localScale = new Vector3(scaleFactor, scaleFactor, 1f);
        }
        else
        {
            transform.localScale = Vector3.one;
        }
    }

    public Color GetColorByType(CellColorType type)
    {
        for (int i = 0; i < colorSettings.Count; i++)
        {
            if (colorSettings[i].type == type) return colorSettings[i].color;
        }
        return defaultDragColor;
    }

    public void StartDrag(Cell cell, UnityEngine.EventSystems.PointerEventData eventData)
    {
        if (isGameFinished || isDragging) return;
        if (!isTutorial)
        {
            Observer.OnStopTutorialShape?.Invoke();
            isTutorial = true;
        }
        if (isTutorial2 == false)
        {
            tutorial2.HideTutorial();
            isTutorial2 = true;
        }
        isDragging = true;
        currentPointerId = eventData.pointerId;

        startCell = cell;
        currentHoverCell = null;

        currentDragColor = (cell.colorType != CellColorType.None) ? GetColorByType(cell.colorType) : defaultDragColor;

        if (initialBorders.ContainsKey(startCell))
        {
            previewBorderUnit = initialBorders[startCell];
            previewBorderUnit.gameObject.SetActive(true);
            previewBorderUnit.transform.SetAsLastSibling();

            previewBorderUnit.rect.DOKill();
            if (previewBorderUnit.borderImage != null) previewBorderUnit.borderImage.DOKill();
            if (previewBorderUnit.backgroundImage != null) previewBorderUnit.backgroundImage.DOKill();
        }
        else
        {
            previewBorderUnit = GetAvailableBorderFromList();
            if (previewBorderUnit == null) return;

            if (previewBorderUnit.transform.parent != transform)
                previewBorderUnit.transform.SetParent(transform, false);
            previewBorderUnit.transform.SetAsLastSibling();
            previewBorderUnit.SetSorttingLayer();

            Canvas.ForceUpdateCanvases();
            Bounds bounds = GetRelativeBounds(transform, startCell.transform);
            SetBorderBounds(previewBorderUnit.rect, bounds);
        }

        if (previewBorderUnit.borderImage != null)
        {
            previewBorderUnit.borderImage.raycastTarget = false;
            previewBorderUnit.borderImage.color = new Color(currentDragColor.r, currentDragColor.g, currentDragColor.b, previewBorderUnit.borderImage.color.a);
            previewBorderUnit.borderImage.DOFade(currentDragColor.a, 0.2f);
        }

        if (previewBorderUnit.backgroundImage != null)
        {
            previewBorderUnit.backgroundImage.raycastTarget = false;
            previewBorderUnit.backgroundImage.color = new Color(currentDragColor.r, currentDragColor.g, currentDragColor.b, previewBorderUnit.backgroundImage.color.a);
            previewBorderUnit.backgroundImage.DOFade(previewBorderUnit.backgroundAlpha, 0.2f);
        }

        HoverDrag(cell, eventData);
    }

    public void HoverDrag(Cell cell, UnityEngine.EventSystems.PointerEventData eventData)
    {
        if (isGameFinished || !isDragging || eventData.pointerId != currentPointerId || currentHoverCell == cell) return;

        int minX = Mathf.Min(startCell.gridX, cell.gridX);
        int maxX = Mathf.Max(startCell.gridX, cell.gridX);
        int minY = Mathf.Min(startCell.gridY, cell.gridY);
        int maxY = Mathf.Max(startCell.gridY, cell.gridY);

        int numberCount = 0;
        int targetGroupID = 0;
        bool hitInvalidCell = false;

        for (int x = minX; x <= maxX; x++)
        {
            for (int y = minY; y <= maxY; y++)
            {
                Cell c = gridCells[x, y];
                if (c.colorType != CellColorType.None)
                {
                    numberCount++;

                    if (c == startCell)
                    {
                        targetGroupID = c.groupID;
                    }
                    else if (startCell.colorType == CellColorType.None)
                    {
                        if (c.limitType == CellLimitType.Fixed && c.numberValue == 1)
                        {
                            targetGroupID = c.groupID;
                        }
                        else if (c.limitType == CellLimitType.Unlimited)
                        {
                            int groupCellCount = 0;
                            for (int checkX = 0; checkX < width; checkX++)
                            {
                                for (int checkY = 0; checkY < height; checkY++)
                                {
                                    if (gridCells[checkX, checkY].groupID == c.groupID && c.groupID != 0)
                                    {
                                        groupCellCount++;
                                    }
                                }
                            }

                            if (groupCellCount <= 1)
                            {
                                targetGroupID = c.groupID;
                            }
                        }
                    }
                }
            }
        }
        if (numberCount > 1) return;

        for (int x = minX; x <= maxX; x++)
        {
            for (int y = minY; y <= maxY; y++)
            {
                Cell c = gridCells[x, y];
                bool isObstacle = false;

                var playTypeField = c.GetType().GetField("playType");
                if (playTypeField != null && (int)playTypeField.GetValue(c) == 1)
                {
                    isObstacle = true;
                }

                if (c.isLocked)
                {
                    if (targetGroupID != 0 && c.groupID == targetGroupID)
                    {
                        // Cho qua
                    }
                    else
                    {
                        isObstacle = true;
                    }
                }

                if (isObstacle) hitInvalidCell = true;
            }
        }

        if (hitInvalidCell) return;

        currentHoverCell = cell;
        UpdateSelectionPreview();
    }

    private void UpdateSelectionPreview()
    {
        if (previewBorderUnit == null) return;

        int minX = Mathf.Min(startCell.gridX, currentHoverCell.gridX);
        int maxX = Mathf.Max(startCell.gridX, currentHoverCell.gridX);
        int minY = Mathf.Min(startCell.gridY, currentHoverCell.gridY);
        int maxY = Mathf.Max(startCell.gridY, currentHoverCell.gridY);

        currentSelectedCells.Clear();

        Color previewColor = currentDragColor;

        for (int x = minX; x <= maxX; x++)
        {
            for (int y = minY; y <= maxY; y++)
            {
                Cell c = gridCells[x, y];
                currentSelectedCells.Add(c);

                if (c.colorType != CellColorType.None)
                {
                    previewColor = GetColorByType(c.colorType);
                }
            }
        }

        Bounds bounds = GetRelativeBounds(transform, gridCells[minX, minY].transform);
        bounds.Encapsulate(GetRelativeBounds(transform, gridCells[maxX, maxY].transform));

        SmoothSetBorderBounds(previewBorderUnit.rect, bounds);
        RefreshBordersVisibility();

        UpdateBorderAmountText(previewBorderUnit, minX, maxX, minY, maxY, previewColor);
    }

    private void UpdateBorderAmountText(BorderUnit border, int minX, int maxX, int minY, int maxY, Color themeColor)
    {
        if (border == null || border.rectContainerAmoutSellect == null) return;

        int totalCells = (maxX - minX + 1) * (maxY - minY + 1);

        Cell bottomLeft = gridCells[minX, minY];
        Cell bottomRight = gridCells[maxX, minY];
        Cell topLeft = gridCells[minX, maxY];
        Cell topRight = gridCells[maxX, maxY];

        Vector2 chosenAnchor = Vector2.one;
        bool foundValidCorner = false;

        if (topRight.colorType == CellColorType.None)
        {
            chosenAnchor = new Vector2(1f, 1f);
            foundValidCorner = true;
        }
        else if (topLeft.colorType == CellColorType.None)
        {
            chosenAnchor = new Vector2(0f, 1f);
            foundValidCorner = true;
        }
        else if (bottomRight.colorType == CellColorType.None)
        {
            chosenAnchor = new Vector2(1f, 0f);
            foundValidCorner = true;
        }
        else if (bottomLeft.colorType == CellColorType.None)
        {
            chosenAnchor = new Vector2(0f, 0f);
            foundValidCorner = true;
        }

        if (!foundValidCorner)
        {
            border.rectContainerAmoutSellect.gameObject.SetActive(false);
            return;
        }

        border.rectContainerAmoutSellect.gameObject.SetActive(true);

        if (border.imgContainerAmoutSellect != null)
        {
            border.imgContainerAmoutSellect.color = new Color(themeColor.r, themeColor.g, themeColor.b, 1f);
        }

        if (border.txtAmoutSellect != null)
        {
            border.txtAmoutSellect.text = totalCells.ToString();
            border.txtAmoutSellect.color = Color.Lerp(themeColor, Color.black, 0.3f);
        }

        border.rectContainerAmoutSellect.anchorMin = chosenAnchor;
        border.rectContainerAmoutSellect.anchorMax = chosenAnchor;
        border.rectContainerAmoutSellect.pivot = chosenAnchor;

        float finalOffsetX = (chosenAnchor.x == 0) ? amountSelectOffset.x : -amountSelectOffset.x;
        float finalOffsetY = (chosenAnchor.y == 0) ? amountSelectOffset.y : -amountSelectOffset.y;
        border.rectContainerAmoutSellect.anchoredPosition = new Vector2(finalOffsetX, finalOffsetY);
    }

    private void SetBorderBounds(RectTransform rt, Bounds bounds)
    {
        if (rt == null) return;
        rt.anchorMin = new Vector2(0.5f, 0.5f);
        rt.anchorMax = new Vector2(0.5f, 0.5f);
        rt.pivot = new Vector2(0.5f, 0.5f);
        rt.localScale = Vector3.one;

        rt.anchoredPosition = new Vector2(bounds.center.x, bounds.center.y);

        Vector3 pos = rt.localPosition;
        pos.z = 0f;
        rt.localPosition = pos;

        rt.sizeDelta = new Vector2(bounds.size.x + borderPadding, bounds.size.y + borderPadding);
    }

    private void SmoothSetBorderBounds(RectTransform rt, Bounds bounds)
    {
        if (rt == null) return;
        rt.anchorMin = new Vector2(0.5f, 0.5f);
        rt.anchorMax = new Vector2(0.5f, 0.5f);
        rt.pivot = new Vector2(0.5f, 0.5f);

        rt.DOKill();

        Vector2 targetPos = new Vector2(bounds.center.x, bounds.center.y);
        Vector2 targetSize = new Vector2(bounds.size.x + borderPadding, bounds.size.y + borderPadding);

        rt.DOAnchorPos(targetPos, 0.06f).SetEase(Ease.OutQuad);
        rt.DOSizeDelta(targetSize, 0.06f).SetEase(Ease.OutQuad);
    }

    public void EndDrag(UnityEngine.EventSystems.PointerEventData eventData)
    {
        if (isGameFinished || !isDragging || eventData.pointerId != currentPointerId) return;

        isDragging = false;
        currentPointerId = -999;

        int minX = Mathf.Min(startCell.gridX, currentHoverCell.gridX);
        int maxX = Mathf.Max(startCell.gridX, currentHoverCell.gridX);
        int minY = Mathf.Min(startCell.gridY, currentHoverCell.gridY);
        int maxY = Mathf.Max(startCell.gridY, currentHoverCell.gridY);

        int totalArea = currentSelectedCells.Count;
        int numberCount = 0;
        int targetNumber = 0;
        Color numberCellColor = defaultDragColor;

        CellOrientationType targetOrientation = CellOrientationType.HorizontalOrVerticalRectangle;
        CellColorType targetColorType = CellColorType.None;
        CellLimitType targetLimitType = CellLimitType.Fixed;

        for (int i = 0; i < currentSelectedCells.Count; i++)
        {
            Cell c = currentSelectedCells[i];

            if (c.colorType != CellColorType.None)
            {
                numberCount++;
                targetNumber = c.numberValue;
                numberCellColor = GetColorByType(c.colorType);
                targetOrientation = c.orientationType;
                targetColorType = c.colorType;
                targetLimitType = c.limitType;
            }
        }

        if (numberCount == 1)
        {
            Cell coreCell = null;
            for (int i = 0; i < currentSelectedCells.Count; i++)
            {
                if (currentSelectedCells[i].colorType != CellColorType.None) { coreCell = currentSelectedCells[i]; break; }
            }

            if (coreCell != null && coreCell.isLocked && coreCell.groupID != 0)
            {
                DeleteGroup(coreCell.groupID);
            }

            currentGroupID++;
            Color finalColor = numberCellColor;

            bool isShapeValid = false;
            bool isAreaValid = (targetLimitType == CellLimitType.Unlimited) ? true : (totalArea == targetNumber);

            int rectWidth = maxX - minX + 1;
            int rectHeight = maxY - minY + 1;

            switch (targetOrientation)
            {
                case CellOrientationType.HorizontalRectangle: isShapeValid = (rectWidth > rectHeight); break;
                case CellOrientationType.VerticalRectangle: isShapeValid = (rectHeight > rectWidth); break;
                case CellOrientationType.Square: isShapeValid = (rectWidth == rectHeight); break;
                case CellOrientationType.HorizontalOrVerticalRectangle: isShapeValid = true; break;
            }

            BorderUnit permanentBorderUnit;

            if (previewBorderUnit != null && initialBorders.ContainsKey(coreCell) && previewBorderUnit != initialBorders[coreCell])
            {
                DeactivateBorder(previewBorderUnit);
                permanentBorderUnit = initialBorders[coreCell];
                permanentBorderUnit.gameObject.SetActive(true);
                permanentBorderUnit.transform.SetAsLastSibling();
            }
            else
            {
                permanentBorderUnit = previewBorderUnit;
            }

            permanentBorderUnit.rect.transform.DOKill();
            permanentBorderUnit.rect.transform.localScale = Vector3.one;

            if (isShapeValid && isAreaValid)
            {
                if (currentSelectedCells.Count > 1)
                {
                    Cell targetEffectCell = currentHoverCell != null ? currentHoverCell : startCell;

                    if (targetEffectCell != null && targetEffectCell.colorType != CellColorType.None)
                    {
                        Cell bottomLeft = gridCells[minX, minY];
                        Cell bottomRight = gridCells[maxX, minY];
                        Cell topLeft = gridCells[minX, maxY];
                        Cell topRight = gridCells[maxX, maxY];

                        if (topRight.colorType == CellColorType.None) targetEffectCell = topRight;
                        else if (topLeft.colorType == CellColorType.None) targetEffectCell = topLeft;
                        else if (bottomRight.colorType == CellColorType.None) targetEffectCell = bottomRight;
                        else if (bottomLeft.colorType == CellColorType.None) targetEffectCell = bottomLeft;
                    }

                    if (targetEffectCell != null)
                    {
                        targetEffectCell.SpawnEffect(targetColorType);
                    }
                }

                Observer.OnNextStepTutorial?.Invoke();
            }
            else
            {
                wrongGroupIDs.Add(currentGroupID);
                permanentBorderUnit.rect.transform.DOShakePosition(0.3f, new Vector3(8f, 0f, 0f), 15, 90f);
            }

            previewBorderUnit = null;

            permanentBorderUnit.SetSorttingLayer();
            if (isShapeValid && isAreaValid) permanentBorderUnit.ResetSorttingLayer();

            Bounds bounds = GetRelativeBounds(transform, gridCells[minX, minY].transform);
            bounds.Encapsulate(GetRelativeBounds(transform, gridCells[maxX, maxY].transform));
            SetBorderBounds(permanentBorderUnit.rect, bounds);

            UpdateBorderAmountText(permanentBorderUnit, minX, maxX, minY, maxY, finalColor);

            if (permanentBorderUnit.borderImage != null)
                permanentBorderUnit.borderImage.DOColor(finalColor, .3f).SetEase(Ease.Linear);

            if (permanentBorderUnit.backgroundImage != null)
            {
                float targetAlpha = permanentBorderUnit.backgroundAlpha;
                Color endBgColor = new Color(finalColor.r, finalColor.g, finalColor.b, targetAlpha);
                permanentBorderUnit.backgroundImage.DOColor(endBgColor, .3f).SetEase(Ease.Linear);
            }

            if (isShapeValid && isAreaValid)
            {
                permanentBorderUnit.SetWrongPattern(false);
            }
            else
            {
                permanentBorderUnit.SetWrongPattern(true);
            }

            activeBorders.Add(currentGroupID, permanentBorderUnit);
            groupStartCells.Add(currentGroupID, coreCell != null ? coreCell : startCell);

            for (int i = 0; i < currentSelectedCells.Count; i++)
            {
                Cell c = currentSelectedCells[i];
                c.isLocked = true;
                c.groupID = currentGroupID;
            }
        }

        if (previewBorderUnit != null)
        {
            if (previewBorderUnit.rectContainerAmoutSellect != null)
            {
                previewBorderUnit.rectContainerAmoutSellect.gameObject.SetActive(false);
            }

            previewBorderUnit.rect.DOKill();
            if (previewBorderUnit.borderImage != null) previewBorderUnit.borderImage.DOKill();
            if (previewBorderUnit.backgroundImage != null) previewBorderUnit.backgroundImage.DOKill();

            Canvas.ForceUpdateCanvases();
            Bounds bounds = GetRelativeBounds(transform, startCell.transform);

            Vector2 targetSize = new Vector2(bounds.size.x + borderPadding, bounds.size.y + borderPadding);
            Vector2 targetPos = new Vector2(bounds.center.x, bounds.center.y);

            previewBorderUnit.rect.DOSizeDelta(targetSize, 0.2f).SetEase(Ease.OutQuad);
            previewBorderUnit.rect.DOAnchorPos(targetPos, 0.2f).SetEase(Ease.OutQuad);

            bool isFromInitial = initialBorders.ContainsKey(startCell) && initialBorders[startCell] == previewBorderUnit;

            if (isFromInitial)
            {
                Color originalColor = GetColorByType(startCell.colorType);
                if (previewBorderUnit.borderImage != null) previewBorderUnit.borderImage.DOColor(originalColor, 0.2f);
                if (previewBorderUnit.backgroundImage != null) previewBorderUnit.backgroundImage.DOColor(new Color(originalColor.r, originalColor.g, originalColor.b, previewBorderUnit.backgroundAlpha), 0.2f);
            }
            else
            {
                if (previewBorderUnit.borderImage != null) previewBorderUnit.borderImage.DOFade(0f, 0.2f);
                if (previewBorderUnit.backgroundImage != null) previewBorderUnit.backgroundImage.DOFade(0f, 0.2f);
                BorderUnit toDespawn = previewBorderUnit;
                DOVirtual.DelayedCall(0.2f, () => DeactivateBorder(toDespawn));
            }
            previewBorderUnit = null;
        }

        currentSelectedCells.Clear();
        RefreshBordersVisibility();
        CheckWinCondition();
    }

    public void DeleteGroup(int groupID, bool immediate = false)
    {
        if (isGameFinished) return;

        if (activeBorders.ContainsKey(groupID))
        {
            BorderUnit borderToDespawn = activeBorders[groupID];
            Cell originCell = groupStartCells.ContainsKey(groupID) ? groupStartCells[groupID] : null;

            borderToDespawn.rect.DOKill();
            if (borderToDespawn.borderImage != null) borderToDespawn.borderImage.DOKill();
            if (borderToDespawn.backgroundImage != null) borderToDespawn.backgroundImage.DOKill();

            borderToDespawn.SetWrongPattern(false);
            if (borderToDespawn.rectContainerAmoutSellect != null)
            {
                borderToDespawn.rectContainerAmoutSellect.gameObject.SetActive(false);
            }

            if (originCell != null && initialBorders.ContainsKey(originCell))
            {
                initialBorders[originCell].SetWrongPattern(false);
            }

            bool isFromInitial = originCell != null && initialBorders.ContainsKey(originCell) && initialBorders[originCell] == borderToDespawn;

            if (immediate)
            {
                if (isFromInitial)
                {
                    Color originalColor = GetColorByType(originCell.colorType);
                    if (borderToDespawn.borderImage != null) borderToDespawn.borderImage.color = originalColor;
                    if (borderToDespawn.backgroundImage != null) borderToDespawn.backgroundImage.color = new Color(originalColor.r, originalColor.g, originalColor.b, borderToDespawn.backgroundAlpha);

                    Bounds bounds = GetRelativeBounds(transform, originCell.transform);
                    SetBorderBounds(borderToDespawn.rect, bounds);
                }
                else
                {
                    DeactivateBorder(borderToDespawn);
                }
            }
            else
            {
                if (originCell != null)
                {
                    Canvas.ForceUpdateCanvases();
                    Bounds bounds = GetRelativeBounds(transform, originCell.transform);

                    Vector2 targetSize = new Vector2(bounds.size.x + borderPadding, bounds.size.y + borderPadding);
                    Vector2 targetPos = new Vector2(bounds.center.x, bounds.center.y);

                    borderToDespawn.rect.DOSizeDelta(targetSize, 0.25f).SetEase(Ease.OutQuad);
                    borderToDespawn.rect.DOAnchorPos(targetPos, 0.25f).SetEase(Ease.OutQuad);

                    if (isFromInitial)
                    {
                        Color originalColor = GetColorByType(originCell.colorType);
                        if (borderToDespawn.borderImage != null) borderToDespawn.borderImage.DOColor(originalColor, 0.25f);
                        if (borderToDespawn.backgroundImage != null) borderToDespawn.backgroundImage.DOColor(new Color(originalColor.r, originalColor.g, originalColor.b, borderToDespawn.backgroundAlpha), 0.25f);
                    }
                    else
                    {
                        borderToDespawn.transform.SetAsLastSibling();
                        if (borderToDespawn.backgroundImage != null) borderToDespawn.backgroundImage.DOFade(0f, 0.25f);
                        DOVirtual.DelayedCall(0.25f, () => DeactivateBorder(borderToDespawn));
                    }
                }
                else
                {
                    Sequence seq = DOTween.Sequence();
                    seq.SetLink(borderToDespawn.gameObject);
                    if (borderToDespawn.borderImage != null) seq.Join(borderToDespawn.borderImage.DOFade(0f, 0.25f));
                    if (borderToDespawn.backgroundImage != null) seq.Join(borderToDespawn.backgroundImage.DOFade(0f, 0.25f));
                    seq.OnComplete(() => DeactivateBorder(borderToDespawn));
                }
            }

            activeBorders.Remove(groupID);
            if (groupStartCells.ContainsKey(groupID)) groupStartCells.Remove(groupID);
        }

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                if (c.groupID == groupID)
                {
                    c.isLocked = false;
                    c.groupID = 0;
                    c.DespawnEffectWithTween();
                }
            }
        }

        if (wrongGroupIDs.Contains(groupID))
        {
            wrongGroupIDs.Remove(groupID);
        }

        RefreshBordersVisibility();
    }

    public void ClearAllWrongGroups()
    {
        if (isGameFinished) return;
        if (wrongGroupIDs.Count == 0) return;

        List<int> idsToDelete = new List<int>(wrongGroupIDs);
        for (int i = 0; i < idsToDelete.Count; i++)
        {
            DeleteGroup(idsToDelete[i]);
        }
    }

    public void CheckWinCondition()
    {
        if (wrongGroupIDs.Count > 0) return;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                var playTypeField = c.GetType().GetField("playType");
                if (playTypeField != null && c.numberValue == 1) continue;
                if (c.playType == CellPlayType.Void) continue;
                if (!c.isLocked) return;
            }
        }

        BorderUnit[] allBordersInGrid = GetComponentsInChildren<BorderUnit>(false);
        for (int i = 0; i < allBordersInGrid.Length; i++)
        {
            allBordersInGrid[i].PlayWinEffect();
        }

        isGameFinished = true;
        Observer.OnWinLevel?.Invoke();
        StartCoroutine(WaitForWinEffect());
    }

    IEnumerator WaitForWinEffect()
    {
        yield return new WaitForSeconds(2f);
        if (canvasWin != null)
        {
            canvasWin.gameObject.SetActive(true);
            canvasWin.ShowWinEffect();
        }
    }

    public void ClearAllBorders()
    {
        BorderUnit[] allBordersInGrid = GetComponentsInChildren<BorderUnit>(true);
        for (int i = allBordersInGrid.Length - 1; i >= 0; i--)
        {
            BorderUnit border = allBordersInGrid[i];
            if (border != null)
            {
                border.ResetSorttingLayer();
                DeactivateBorder(border);
            }
        }

        activeBorders.Clear();
        initialBorders.Clear();
        groupStartCells.Clear();
        previewBorderUnit = null;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                c.isLocked = false;
                c.groupID = 0;
                c.DespawnEffectImmediate();
            }
        }

        wrongGroupIDs.Clear();
        currentGroupID = 0;
        isDragging = false;
        currentPointerId = -999;
        isGameFinished = false;
    }

    public void ShowHint()
    {
        if (isGameFinished || isDragging) return;
        HideHint();

        List<int> unsolvedSolutionIDs = new List<int>();
        Dictionary<int, Color> hintColors = new Dictionary<int, Color>();

        Dictionary<int, List<Cell>> cellsBySolution = new Dictionary<int, List<Cell>>();

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                if (c.solutionID > 0)
                {
                    if (!cellsBySolution.ContainsKey(c.solutionID))
                        cellsBySolution[c.solutionID] = new List<Cell>();

                    cellsBySolution[c.solutionID].Add(c);
                }
            }
        }

        foreach (var kvp in cellsBySolution)
        {
            int solID = kvp.Key;
            List<Cell> cells = kvp.Value;
            bool isSolved = true;

            int firstGroupID = cells[0].groupID;

            Color hintColor = defaultDragColor;
            foreach (Cell c in cells)
            {
                if (c.colorType != CellColorType.None)
                {
                    hintColor = GetColorByType(c.colorType);
                    break;
                }
            }

            foreach (Cell c in cells)
            {
                if (!c.isLocked || wrongGroupIDs.Contains(c.groupID) || c.groupID == 0 || c.groupID != firstGroupID)
                {
                    isSolved = false;
                    break;
                }
            }

            if (isSolved && firstGroupID != 0)
            {
                for (int y = 0; y < height; y++)
                {
                    for (int x = 0; x < width; x++)
                    {
                        Cell c = gridCells[x, y];
                        if (c.groupID == firstGroupID && c.solutionID != solID)
                        {
                            isSolved = false;
                            break;
                        }
                    }
                    if (!isSolved) break;
                }
            }

            if (!isSolved)
            {
                if (!unsolvedSolutionIDs.Contains(solID))
                {
                    unsolvedSolutionIDs.Add(solID);
                    if (!hintColors.ContainsKey(solID))
                    {
                        hintColors.Add(solID, hintColor);
                    }
                }
            }
        }

        if (unsolvedSolutionIDs.Count == 0) return;

        int randomIndex = UnityEngine.Random.Range(0, unsolvedSolutionIDs.Count);
        int targetSolutionID = unsolvedSolutionIDs[randomIndex];
        Color targetColor = hintColors[targetSolutionID];

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                if (c.solutionID == targetSolutionID)
                {
                    if (c.cellImage != null)
                    {
                        c.cellImage.color = Color.white;
                        c.cellImage.DOColor(targetColor, 0.5f).SetLoops(-1, LoopType.Yoyo).SetId("CellHint");
                    }
                }
            }
        }
        DOVirtual.DelayedCall(3f, HideHint).SetId("HintTimer");
    }

    public void HideHint()
    {
        DOTween.Kill("CellHint");
        DOTween.Kill("HintTimer");
        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                if (c.cellImage != null) c.cellImage.color = Color.white;
            }
        }
    }

    public void ResetLevel()
    {
        HideHint();

        BorderUnit[] allBordersInGrid = GetComponentsInChildren<BorderUnit>(true);
        foreach (BorderUnit border in allBordersInGrid)
        {
            if (border != null)
            {
                border.ResetSorttingLayer();
                DeactivateBorder(border);
            }
        }

        activeBorders.Clear();
        initialBorders.Clear();
        groupStartCells.Clear();
        previewBorderUnit = null;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Cell c = gridCells[x, y];
                c.isLocked = false;
                c.groupID = 0;
                c.ResetCell();
            }
        }

        wrongGroupIDs.Clear();
        currentGroupID = 0;
        isDragging = false;
        currentPointerId = -999;
        isGameFinished = false;

        startCell = null;
        currentHoverCell = null;

        SpawnInitialBorders();
    }

    void OnEnable()
    {
        Observer.OnUseItemHint += ShowHint;
        Observer.OnResetLevel += ResetLevel;
    }

    void OnDisable()
    {
        Observer.OnUseItemHint -= ShowHint;
        Observer.OnResetLevel -= ResetLevel;
    }
}