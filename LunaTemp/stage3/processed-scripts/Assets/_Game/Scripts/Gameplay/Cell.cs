using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using System.Collections;

public enum CellLimitType
{
    Fixed,
    Unlimited
}

public enum CellPlayType
{
    Playable,
    Void
}

public enum CellColorType
{
    None, Pink, Dark_Green, Purple, Dark_Blue, Yellow, Red, Orange, Brown, Gray, Light_Green, Cyan, Light_Blue
}

public enum CellOrientationType
{
    HorizontalRectangle, VerticalRectangle, Square, HorizontalOrVerticalRectangle
}

public class Cell : MonoBehaviour, IPointerDownHandler, IPointerEnterHandler, IPointerUpHandler
{
    [Header("Data")]
    public int gridX;
    public int gridY;
    public int numberValue = 0;
    public int solutionID = 0;
    public CellColorType colorType = CellColorType.None;
    public CellOrientationType orientationType = CellOrientationType.HorizontalOrVerticalRectangle;
    public CellLimitType limitType = CellLimitType.Fixed;
    public CellPlayType playType = CellPlayType.Playable;

    public bool isLocked = false;
    public int groupID = 0;

    [Header("UI Components")]
    public Image cellImage;
    public Text numberText;
    public Image imgOrientation;

    private GridManager gridManager;
    private CellEffectUnit cellEffectUnit;

    public void Init(int x, int y, int number, GridManager manager, CellOrientationData cellOrientationData = null)
    {
        gridX = x;
        gridY = y;
        numberValue = number;
        gridManager = manager;

        if (playType == CellPlayType.Void)
        {
            if (cellImage != null)
            {
                cellEffectUnit = SimplePool.Spawn<CellEffectUnit>(GetCapyUnit((CellColorType)Random.Range(1, 13)), transform.position, Quaternion.identity);

                if (cellEffectUnit != null)
                {
                    cellEffectUnit.ShowEffect(this.transform);
                    cellEffectUnit.transform.SetAsFirstSibling();
                }
                imgOrientation.gameObject.SetActive(false);
            }
            if (numberText != null) numberText.text = "";
            return;
        }

        if (cellImage != null) cellImage.enabled = true;

        if (numberText != null)
        {
            if (number > 0)
            {
                numberText.text = (limitType == CellLimitType.Unlimited) ? "" : number.ToString();

                // if (number < 10)
                // {
                //     numberText.fontSizeMax = 50f;
                // }
                // else
                // {
                //     numberText.fontSizeMax = 35f;
                // }
            }
            else
            {
                numberText.text = "";
            }
        }

        imgOrientation.gameObject.SetActive(colorType != CellColorType.None);
        if (colorType != CellColorType.None)
        {
            if (cellOrientationData != null)
            {
                imgOrientation.sprite = cellOrientationData.sprite;
                // if (GameController.Instance.OnTutorialLevel)
                // {
                if (imgOrientation.GetComponent<GraphicRaycaster>() == null)
                    imgOrientation.gameObject.AddComponent<GraphicRaycaster>();

                Canvas cv = imgOrientation.GetComponent<Canvas>();
                if (cv != null) cv.sortingOrder = 8;
                //}
            }
            //SpawnEffect(colorType);
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (playType == CellPlayType.Void) return;

        bool wasLocked = isLocked;
        int clickedGroupID = groupID;

        if (wasLocked)
        {
            // 🔥 SỬA Ở ĐÂY: Dành riêng cho ô giới hạn 1x1
            if (limitType == CellLimitType.Fixed && numberValue == 1)
            {
                // Xóa tức thì (immediate = true) vùng chọn cũ để giải phóng ô này.
                // KHÔNG dùng return ở đây để hệ thống tiếp tục chạy xuống lệnh StartDrag bên dưới,
                // giúp bạn có thể giữ tay và kéo tiếp thành đường mới ngay lập tức.
                gridManager.DeleteGroup(clickedGroupID, true);
            }
            else if (limitType == CellLimitType.Unlimited)
            {
                // Xóa tức thì (immediate = true) vùng chọn cũ để giải phóng ô này.
                // KHÔNG dùng return ở đây để hệ thống tiếp tục chạy xuống lệnh StartDrag bên dưới,
                // giúp bạn có thể giữ tay và kéo tiếp thành đường mới ngay lập tức.
                gridManager.DeleteGroup(clickedGroupID, true);
            }
            else
            {
                // Với các ô không giới hạn (đường đi dài), xóa đường và bắt buộc nhả tay ra
                gridManager.ClearAllWrongGroups();
                gridManager.DeleteGroup(clickedGroupID);
                return;
            }
        }

        gridManager.ClearAllWrongGroups();

        // Bắt đầu kéo (với ô 1x1, nếu bạn chỉ click rồi nhả tay ra ngay, 
        // hàm EndDrag sẽ tự động xác nhận vùng chọn 1x1, khóa lại và kích hoạt Auto-Win)
        gridManager.StartDrag(this, eventData);
    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        if (playType == CellPlayType.Void) return;
        gridManager.HoverDrag(this, eventData);
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (playType == CellPlayType.Void) return;

        gridManager.EndDrag(eventData);
    }

    public void SetColor([Bridge.Ref] Color color)
    {
        if (cellImage != null) cellImage.color = color;
    }

    // ==========================================
    // LOGIC SPAWN & DESPAWN HIỆU ỨNG SPINE
    // ==========================================

    public void SpawnEffect(CellColorType cellColorType)
    {
        if (playType == CellPlayType.Void || cellEffectUnit != null) return;
        cellEffectUnit = SimplePool.Spawn<CellEffectUnit>(GetCapyUnit(cellColorType), transform.position, Quaternion.identity);

        if (cellEffectUnit != null)
        {
            cellEffectUnit.ShowEffect(this.transform);
            cellEffectUnit.transform.SetAsFirstSibling();
        }
        // if (GameController.Instance.OnTutorialLevel)
        // {
        if (cellEffectUnit == null) return;
        cellEffectUnit.SetSorttingLayer();
        //}
    }

    public PoolType GetCapyUnit(CellColorType cellColorType)
    {
        switch (cellColorType)
        {
            case CellColorType.Pink: return PoolType.Capy_Pink_Unit;
            case CellColorType.Dark_Green: return PoolType.Capy_Dark_Green_Unit;
            case CellColorType.Purple: return PoolType.Capy_Purple_Unit;
            case CellColorType.Dark_Blue: return PoolType.Capy_Dark_Blue_Unit;
            case CellColorType.Yellow: return PoolType.Capy_Yellow_Unit;
            case CellColorType.Red: return PoolType.Capy_Red_Unit;
            case CellColorType.Orange: return PoolType.Capy_Orange_Unit;
            case CellColorType.Brown: return PoolType.Capy_Brown_Unit;
            case CellColorType.Gray: return PoolType.Capy_Gray_Unit;
            case CellColorType.Light_Green: return PoolType.Capy_Light_Green_Unit;
            case CellColorType.Cyan: return PoolType.Capy_Cyan_Unit;
            case CellColorType.Light_Blue: return PoolType.Capy_Light_Blue_Unit;
            case CellColorType.None:
            default: return PoolType.Capy_Dark_Blue_Unit;
        }
    }

    public void OnActiveTutorial()
    {
        Canvas canvas = GetComponent<Canvas>();
        if (canvas != null) canvas.sortingOrder = 5;
    }

    public void OnDeactiveTutorial()
    {
        if (cellEffectUnit != null)
        {
            cellEffectUnit.ResetSorttingLayer();
        }
        Canvas canvas = GetComponent<Canvas>();
        if (canvas != null) canvas.enabled = false;
        Canvas cvw = imgOrientation.GetComponent<Canvas>();
        if (cvw != null)
        {
            cvw.sortingOrder = 2;
            cvw.enabled = false;
            StartCoroutine(WaitAndResetSortingLayer(cvw));
        }
    }

    IEnumerator WaitAndResetSortingLayer(Canvas canvas)
    {
        yield return new WaitForEndOfFrame();
        canvas.enabled = true;
    }

    public void DespawnEffectImmediate()
    {
        if (cellEffectUnit != null)
        {
            cellEffectUnit.HideEffectImmediate();
            cellEffectUnit = null;
        }
    }

    public void DespawnEffectWithTween()
    {
        if (colorType != CellColorType.None) return;
        if (cellEffectUnit != null)
        {
            cellEffectUnit.HideEffectWithTween();
            cellEffectUnit = null;
        }
    }

    public void ResetCell()
    {
        if (colorType != CellColorType.None) return;

        if (cellEffectUnit != null)
        {
            cellEffectUnit.HideEffectImmediate();
            cellEffectUnit = null;
        }
    }
}