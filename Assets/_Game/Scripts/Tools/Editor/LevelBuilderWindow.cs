using UnityEngine;
using UnityEditor;

public class CellSetupData
{
    public int number = 0;
    public CellColorType colorType = CellColorType.None;
    public CellOrientationType orientation = CellOrientationType.HorizontalOrVerticalRectangle;
    public CellLimitType limitType = CellLimitType.Fixed;
    public CellPlayType playType = CellPlayType.Playable;

    public int markID = 0;
    public Color markColor = Color.clear;
    public int solutionID = 0;
}

public class LevelBuilderWindow : EditorWindow
{
    private GameObject levelPrefabToLoad;
    private GameObject templatePrefab;

    private int gridWidth = 5;
    private int gridHeight = 5;
    private GameObject cellPrefab;
    private string levelName = "Level_1";

    private GameObject corner1Prefab, corner2Prefab, corner3Prefab, corner4Prefab;
    private GameObject topPrefab, botPrefab, leftPrefab, rightPrefab;

    private CellSetupData[,] gridData;
    private Vector2 selectedCell = new Vector2(-1, -1);

    private bool isDragging = false;
    private Vector2 dragStart = new Vector2(-1, -1);
    private Vector2 dragEnd = new Vector2(-1, -1);
    private int markIDCounter = 1;

    [MenuItem("Tools/Tạo Level Shikaku")]
    public static void ShowWindow()
    {
        GetWindow<LevelBuilderWindow>("Level Builder");
    }

    private void OnEnable()
    {
        InitializeGridData();
    }

    private void InitializeGridData()
    {
        gridData = new CellSetupData[gridWidth, gridHeight];
        for (int x = 0; x < gridWidth; x++)
        {
            for (int y = 0; y < gridHeight; y++)
            {
                gridData[x, y] = new CellSetupData();
            }
        }
        selectedCell = new Vector2(-1, -1);
        isDragging = false;
        markIDCounter = 1;
    }

    private void OnGUI()
    {
        // ==========================================
        // KHU VỰC LOAD LEVEL CŨ
        // ==========================================
        GUI.backgroundColor = new Color(0.8f, 0.9f, 1f);
        EditorGUILayout.BeginVertical("box");
        GUILayout.Label("🛠️ TẢI & SỬA LEVEL CÓ SẴN", EditorStyles.boldLabel);
        EditorGUILayout.BeginHorizontal();
        levelPrefabToLoad = (GameObject)EditorGUILayout.ObjectField("Kéo Level Prefab vào đây:", levelPrefabToLoad, typeof(GameObject), false);
        if (GUILayout.Button("Tải Dữ Liệu", GUILayout.Width(100)))
        {
            LoadExistingLevel();
        }
        EditorGUILayout.EndHorizontal();
        EditorGUILayout.EndVertical();
        GUI.backgroundColor = Color.white;

        GUILayout.Space(10);

        // ==========================================
        // KHU VỰC CÀI ĐẶT CƠ BẢN
        // ==========================================
        GUILayout.Label("Cài đặt Cấu trúc Màn chơi", EditorStyles.boldLabel);

        EditorGUI.BeginChangeCheck();
        gridWidth = EditorGUILayout.IntField("Số Cột (Width)", gridWidth);
        gridHeight = EditorGUILayout.IntField("Số Hàng (Height)", gridHeight);
        if (EditorGUI.EndChangeCheck())
        {
            gridWidth = Mathf.Max(1, gridWidth);
            gridHeight = Mathf.Max(1, gridHeight);
            InitializeGridData();
        }

        cellPrefab = (GameObject)EditorGUILayout.ObjectField("Cell Prefab", cellPrefab, typeof(GameObject), false);
        templatePrefab = (GameObject)EditorGUILayout.ObjectField("Prefab Mẫu (Giữ List Màu)", templatePrefab, typeof(GameObject), false);
        levelName = EditorGUILayout.TextField("Tên Level", levelName);

        GUILayout.Space(10);
        GUILayout.Label("Cấu hình Viền (Border Prefabs)", EditorStyles.boldLabel);
        EditorGUILayout.BeginHorizontal();
        EditorGUILayout.BeginVertical();
        corner1Prefab = (GameObject)EditorGUILayout.ObjectField("Corner 1 (Top-Left)", corner1Prefab, typeof(GameObject), false);
        corner4Prefab = (GameObject)EditorGUILayout.ObjectField("Corner 4 (Bot-Left)", corner4Prefab, typeof(GameObject), false);
        leftPrefab = (GameObject)EditorGUILayout.ObjectField("Edge Left", leftPrefab, typeof(GameObject), false);
        topPrefab = (GameObject)EditorGUILayout.ObjectField("Edge Top", topPrefab, typeof(GameObject), false);
        EditorGUILayout.EndVertical();
        EditorGUILayout.BeginVertical();
        corner2Prefab = (GameObject)EditorGUILayout.ObjectField("Corner 2 (Top-Right)", corner2Prefab, typeof(GameObject), false);
        corner3Prefab = (GameObject)EditorGUILayout.ObjectField("Corner 3 (Bot-Right)", corner3Prefab, typeof(GameObject), false);
        rightPrefab = (GameObject)EditorGUILayout.ObjectField("Edge Right", rightPrefab, typeof(GameObject), false);
        botPrefab = (GameObject)EditorGUILayout.ObjectField("Edge Bottom", botPrefab, typeof(GameObject), false);
        EditorGUILayout.EndVertical();
        EditorGUILayout.EndHorizontal();

        GUILayout.Space(15);
        GUILayout.Label("BẢNG VẼ LƯỚI TRỰC QUAN (PLAYTEST MODE)", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("- Kéo vùng chọn BAO QUANH con số để đánh dấu nháp VÀ lưu Gợi Ý (Solution).\n- Click Chuột Phải vào vùng đã đánh dấu để XÓA gợi ý đó.", MessageType.Info);

        EditorGUILayout.BeginHorizontal();
        EditorGUILayout.BeginVertical("box", GUILayout.Width(350));
        DrawVisualGrid();
        EditorGUILayout.EndVertical();
        EditorGUILayout.BeginVertical("box");
        DrawCellEditor();
        EditorGUILayout.EndVertical();
        EditorGUILayout.EndHorizontal();

        GUILayout.Space(20);

        // ==========================================
        // KHU VỰC NÚT BẤM
        // ==========================================
        EditorGUILayout.BeginHorizontal();

        GUI.backgroundColor = Color.green;
        if (GUILayout.Button("=> TẠO PREFAB MỚI <=\n(Reset Bảng & Tăng số Level)", GUILayout.Height(50)))
        {
            BuildAndSavePrefab(true);
        }

        if (templatePrefab != null && templatePrefab.name == levelName)
        {
            GUI.backgroundColor = new Color(1f, 0.7f, 0f);
            if (GUILayout.Button("=> LƯU ĐÈ PREFAB CŨ <=\n(Giữ nguyên bảng vẽ để sửa tiếp)", GUILayout.Height(50)))
            {
                BuildAndSavePrefab(false);
            }
        }

        GUI.backgroundColor = Color.white;
        EditorGUILayout.EndHorizontal();
        GUILayout.Space(10);
    }

    private void LoadExistingLevel()
    {
        if (levelPrefabToLoad == null)
        {
            EditorUtility.DisplayDialog("Lỗi", "Bạn chưa kéo file Prefab Level nào vào ô cả!", "OK");
            return;
        }

        templatePrefab = levelPrefabToLoad;

        GridManager manager = levelPrefabToLoad.GetComponent<GridManager>();
        if (manager != null)
        {
            gridWidth = manager.width;
            gridHeight = manager.height;
        }

        levelName = levelPrefabToLoad.name;

        InitializeGridData();
        markIDCounter = 0;

        Cell[] cells = levelPrefabToLoad.GetComponentsInChildren<Cell>(true);
        foreach (Cell cell in cells)
        {
            string[] parts = cell.gameObject.name.Split('_');
            if (parts.Length == 3 && int.TryParse(parts[1], out int x) && int.TryParse(parts[2], out int y))
            {
                if (x >= 0 && x < gridWidth && y >= 0 && y < gridHeight)
                {
                    CellSetupData data = gridData[x, y];
                    data.number = cell.numberValue;
                    data.colorType = cell.colorType;
                    data.orientation = cell.orientationType;
                    data.limitType = cell.limitType;
                    data.playType = cell.playType;
                    data.solutionID = cell.solutionID;

                    if (data.solutionID > 0)
                    {
                        data.markID = data.solutionID;
                        if (data.solutionID > markIDCounter) markIDCounter = data.solutionID;
                    }
                }
            }
        }

        for (int i = 1; i <= markIDCounter; i++)
        {
            Color groupColor = new Color(0.5f, 0.5f, 0.5f, 0.5f);

            for (int x = 0; x < gridWidth; x++)
            {
                for (int y = 0; y < gridHeight; y++)
                {
                    if (gridData[x, y].solutionID == i && gridData[x, y].number > 0)
                    {
                        groupColor = GetEditorColor(gridData[x, y]);
                        groupColor.a = 0.5f;
                        break;
                    }
                }
            }

            for (int x = 0; x < gridWidth; x++)
            {
                for (int y = 0; y < gridHeight; y++)
                {
                    if (gridData[x, y].solutionID == i)
                    {
                        gridData[x, y].markColor = groupColor;
                    }
                }
            }
        }

        levelPrefabToLoad = null;

        Repaint();
        EditorUtility.DisplayDialog("Thành Công", $"Đã nạp thành công dữ liệu của {levelName}. Bạn có thể chỉnh sửa ngay bây giờ!", "OK");
    }

    private void DrawVisualGrid()
    {
        if (gridData == null) return;

        Event e = Event.current;

        GUIStyle centeredTextStyle = new GUIStyle(GUI.skin.label) { alignment = TextAnchor.MiddleCenter, fontStyle = FontStyle.Bold, fontSize = 14 };
        GUIStyle solutionIdStyle = new GUIStyle(GUI.skin.label) { alignment = TextAnchor.UpperRight, fontStyle = FontStyle.Bold, fontSize = 10 };
        solutionIdStyle.normal.textColor = new Color(0.2f, 0.2f, 0.2f, 1f);

        bool dragValid = false;
        Color dragColor = Color.clear;
        int dMinX = -1, dMaxX = -1, dMinY = -1, dMaxY = -1;

        if (isDragging)
        {
            dMinX = (int)Mathf.Min(dragStart.x, dragEnd.x);
            dMaxX = (int)Mathf.Max(dragStart.x, dragEnd.x);
            dMinY = (int)Mathf.Min(dragStart.y, dragEnd.y);
            dMaxY = (int)Mathf.Max(dragStart.y, dragEnd.y);

            int numCount = 0;
            CellSetupData targetData = null;

            for (int i = dMinX; i <= dMaxX; i++)
            {
                for (int j = dMinY; j <= dMaxY; j++)
                {
                    if (gridData[i, j].playType == CellPlayType.Void) numCount = 999;
                    else if (gridData[i, j].number > 0)
                    {
                        numCount++;
                        targetData = gridData[i, j];
                    }
                }
            }

            if (numCount == 1 && targetData != null)
            {
                int rectWidth = dMaxX - dMinX + 1;
                int rectHeight = dMaxY - dMinY + 1;
                int totalArea = rectWidth * rectHeight;

                bool isShapeValid = false;
                bool isAreaValid = (targetData.limitType == CellLimitType.Unlimited) ? true : (totalArea <= targetData.number);

                switch (targetData.orientation)
                {
                    case CellOrientationType.HorizontalRectangle: isShapeValid = (rectWidth > rectHeight); break;
                    case CellOrientationType.VerticalRectangle: isShapeValid = (rectHeight > rectWidth); break;
                    case CellOrientationType.Square: isShapeValid = (rectWidth == rectHeight); break;
                    case CellOrientationType.HorizontalOrVerticalRectangle: isShapeValid = true; break;
                }

                if (isShapeValid && isAreaValid)
                {
                    dragValid = true;
                    dragColor = GetEditorColor(targetData);
                    dragColor.a = 0.5f;
                }
                else
                {
                    dragValid = false;
                    dragColor = new Color(0.8f, 0.2f, 0.2f, 0.5f);
                }
            }
            else if (numCount > 1)
            {
                dragValid = false;
                dragColor = new Color(0.8f, 0.2f, 0.2f, 0.5f);
            }
            else
            {
                dragValid = false;
                dragColor = new Color(0.5f, 0.5f, 0.5f, 0.3f);
            }
        }

        for (int y = gridHeight - 1; y >= 0; y--)
        {
            EditorGUILayout.BeginHorizontal();
            GUILayout.FlexibleSpace();

            for (int x = 0; x < gridWidth; x++)
            {
                CellSetupData data = gridData[x, y];
                bool isSelected = (selectedCell.x == x && selectedCell.y == y);
                Rect rect = GUILayoutUtility.GetRect(50, 50);

                EditorGUI.DrawRect(rect, new Color(0.85f, 0.85f, 0.85f));

                bool isPreviewingHere = isDragging && x >= dMinX && x <= dMaxX && y >= dMinY && y <= dMaxY;
                if (isPreviewingHere)
                {
                    EditorGUI.DrawRect(rect, dragColor);
                }
                else if (data.markID > 0)
                {
                    EditorGUI.DrawRect(rect, data.markColor);
                }

                DrawBorder(rect, new Color(0.5f, 0.5f, 0.5f), 1);

                if (data.playType == CellPlayType.Void)
                {
                    EditorGUI.DrawRect(rect, Color.black);
                    centeredTextStyle.normal.textColor = Color.white;
                    GUI.Label(rect, "X", centeredTextStyle);
                }
                else if (data.number > 0)
                {
                    Color cellColor = GetEditorColor(data);
                    Rect shapeRect = rect;

                    if (data.orientation == CellOrientationType.HorizontalRectangle) shapeRect = new Rect(rect.x, rect.y + 15, rect.width, 20);
                    else if (data.orientation == CellOrientationType.VerticalRectangle) shapeRect = new Rect(rect.x + 15, rect.y, 20, rect.height);
                    else if (data.orientation == CellOrientationType.Square) shapeRect = new Rect(rect.x + 10, rect.y + 10, rect.width - 20, rect.height - 20);
                    else shapeRect = new Rect(rect.x + 5, rect.y + 5, rect.width - 10, rect.height - 10);

                    EditorGUI.DrawRect(shapeRect, cellColor);

                    bool isLightColor = (data.colorType == CellColorType.Yellow || data.colorType == CellColorType.Light_Green || data.colorType == CellColorType.Cyan || data.colorType == CellColorType.Light_Blue);
                    centeredTextStyle.normal.textColor = isLightColor ? Color.black : Color.white;

                    string displayString = (data.limitType == CellLimitType.Unlimited) ? "∞" : data.number.ToString();
                    GUI.Label(rect, displayString, centeredTextStyle);
                }

                if (data.solutionID > 0)
                {
                    Rect idRect = new Rect(rect.xMax - 22, rect.y + 2, 20, 15);
                    GUI.Label(idRect, data.solutionID.ToString(), solutionIdStyle);
                }

                if (rect.Contains(e.mousePosition))
                {
                    if (e.type == EventType.MouseDown && e.button == 0)
                    {
                        dragStart = new Vector2(x, y);
                        dragEnd = dragStart;
                        isDragging = true;
                        selectedCell = dragStart;

                        if (data.markID > 0) ClearMarkGroup(data.markID);

                        GUI.FocusControl(null);
                        e.Use();
                    }
                    else if (e.type == EventType.MouseDrag && e.button == 0 && isDragging)
                    {
                        if (dragEnd.x != x || dragEnd.y != y)
                        {
                            dragEnd = new Vector2(x, y);
                            Repaint();
                        }
                        e.Use();
                    }
                    else if (e.type == EventType.MouseDown && e.button == 1)
                    {
                        if (data.markID > 0) ClearMarkGroup(data.markID);
                        e.Use();
                        Repaint();
                    }
                }

                if (isSelected) DrawBorder(rect, Color.yellow, 4);
            }
            GUILayout.FlexibleSpace();
            EditorGUILayout.EndHorizontal();
        }

        if (e.rawType == EventType.MouseUp && e.button == 0 && isDragging)
        {
            isDragging = false;

            if (dragValid)
            {
                markIDCounter++;
                for (int i = dMinX; i <= dMaxX; i++)
                {
                    for (int j = dMinY; j <= dMaxY; j++)
                    {
                        gridData[i, j].markID = markIDCounter;
                        gridData[i, j].markColor = dragColor;
                        gridData[i, j].solutionID = markIDCounter;
                    }
                }
            }
            e.Use();
            Repaint();
        }
    }

    private void ClearMarkGroup(int id)
    {
        for (int x = 0; x < gridWidth; x++)
        {
            for (int y = 0; y < gridHeight; y++)
            {
                if (gridData[x, y].markID == id)
                {
                    gridData[x, y].markID = 0;
                    gridData[x, y].markColor = Color.clear;
                    gridData[x, y].solutionID = 0;
                }
            }
        }
    }

    private void DrawBorder(Rect rect, Color color, int thickness)
    {
        EditorGUI.DrawRect(new Rect(rect.x, rect.y, rect.width, thickness), color);
        EditorGUI.DrawRect(new Rect(rect.x, rect.yMax - thickness, rect.width, thickness), color);
        EditorGUI.DrawRect(new Rect(rect.x, rect.y, thickness, rect.height), color);
        EditorGUI.DrawRect(new Rect(rect.xMax - thickness, rect.y, thickness, rect.height), color);
    }

    private Color GetEditorColor(CellSetupData data)
    {
        switch (data.colorType)
        {
            case CellColorType.Pink: return new Color(1f, 0.5f, 0.8f);
            case CellColorType.Dark_Green: return new Color(0f, 0.4f, 0f);
            case CellColorType.Purple: return new Color(0.6f, 0.3f, 0.8f);
            case CellColorType.Dark_Blue: return new Color(0.3f, 0.5f, 1f);
            case CellColorType.Yellow: return Color.yellow;
            case CellColorType.Red: return new Color(1f, 0.4f, 0.4f);
            case CellColorType.Orange: return new Color(1f, 0.6f, 0f);
            case CellColorType.Brown: return new Color(0.4f, 0.25f, 0.15f);
            case CellColorType.Gray: return Color.gray;
            case CellColorType.Light_Green: return new Color(0.4f, 0.9f, 0.4f);
            case CellColorType.Cyan: return Color.cyan;
            case CellColorType.Light_Blue: return new Color(0.6f, 0.8f, 1f);
            case CellColorType.None:
            default: return Color.white;
        }
    }

    private void DrawCellEditor()
    {
        if (selectedCell.x < 0 || selectedCell.y < 0)
        {
            GUILayout.Label("Chưa chọn ô nào.\nHãy bấm vào một ô lưới bên cạnh.", EditorStyles.centeredGreyMiniLabel);
            return;
        }

        int x = (int)selectedCell.x;
        int y = (int)selectedCell.y;
        CellSetupData data = gridData[x, y];

        GUILayout.Label($"Cấu hình Ô tọa độ: ({x}, {y})", EditorStyles.boldLabel);
        GUILayout.Space(10);

        data.playType = (CellPlayType)EditorGUILayout.EnumPopup("Loại Ô", data.playType);

        if (data.playType == CellPlayType.Playable)
        {
            bool isRootCell = (data.number > 0);
            isRootCell = EditorGUILayout.ToggleLeft("Bật làm Ô Gốc (Chứa số)", isRootCell, EditorStyles.boldLabel);
            GUILayout.Space(5);

            if (isRootCell)
            {
                EditorGUILayout.BeginVertical("box");

                if (data.number <= 0) data.number = 1;

                data.limitType = (CellLimitType)EditorGUILayout.EnumPopup("Giới hạn số lượng", data.limitType);

                if (data.limitType == CellLimitType.Fixed)
                {
                    int maxCapacity = gridWidth * gridHeight;
                    data.number = EditorGUILayout.IntSlider("Số Lượng Ô", data.number, 1, maxCapacity);
                }
                else
                {
                    data.number = 1;
                    GUILayout.Label("Số lượng vô hạn (∞)", EditorStyles.helpBox);
                }

                GUILayout.Space(5);
                data.orientation = (CellOrientationType)EditorGUILayout.EnumPopup("Hướng Kéo Buộc", data.orientation);
                data.colorType = (CellColorType)EditorGUILayout.EnumPopup("Màu Sắc Khối", data.colorType);

                EditorGUILayout.EndVertical();
            }
            else
            {
                data.number = 0;
                data.colorType = CellColorType.None;
                data.limitType = CellLimitType.Fixed;
                data.orientation = CellOrientationType.HorizontalOrVerticalRectangle;
            }
        }
    }

    private void BuildAndSavePrefab(bool isSaveAsNew)
    {
        if (cellPrefab == null)
        {
            EditorUtility.DisplayDialog("Lỗi Hệ Thống", "Bạn chưa gán Cell Prefab vào ô cấu hình kìa!", "Quay lại gán");
            return;
        }

        GameObject rootObject = new GameObject(levelName);
        GridManager manager = rootObject.AddComponent<GridManager>();
        Level level = rootObject.AddComponent<Level>();
        UnityEngine.UI.GridLayoutGroup gridLayout = rootObject.AddComponent<UnityEngine.UI.GridLayoutGroup>();
        UnityEngine.UI.ContentSizeFitter contentSizeFitter = rootObject.AddComponent<UnityEngine.UI.ContentSizeFitter>();

        if (templatePrefab != null)
        {
            GridManager oldManager = templatePrefab.GetComponent<GridManager>();
            if (oldManager != null) EditorUtility.CopySerialized(oldManager, manager);

            Level oldLevel = templatePrefab.GetComponent<Level>();
            if (oldLevel != null) EditorUtility.CopySerialized(oldLevel, level);
        }

        manager.width = gridWidth;
        manager.height = gridHeight;

        float cellSizeValue = 200f;

        gridLayout.constraint = UnityEngine.UI.GridLayoutGroup.Constraint.FixedColumnCount;
        gridLayout.constraintCount = gridWidth;
        gridLayout.cellSize = new Vector2(cellSizeValue, cellSizeValue);
        gridLayout.spacing = new Vector2(0, 0);
        gridLayout.startCorner = UnityEngine.UI.GridLayoutGroup.Corner.LowerLeft;
        gridLayout.startAxis = UnityEngine.UI.GridLayoutGroup.Axis.Horizontal;
        gridLayout.childAlignment = TextAnchor.LowerLeft;

        contentSizeFitter.horizontalFit = UnityEngine.UI.ContentSizeFitter.FitMode.PreferredSize;
        contentSizeFitter.verticalFit = UnityEngine.UI.ContentSizeFitter.FitMode.PreferredSize;

        for (int y = 0; y < gridHeight; y++)
        {
            for (int x = 0; x < gridWidth; x++)
            {
                GameObject newCellObj = (GameObject)PrefabUtility.InstantiatePrefab(cellPrefab);
                newCellObj.transform.SetParent(rootObject.transform, false);
                newCellObj.name = $"Cell_{x}_{y}";

                Cell cellScript = newCellObj.GetComponent<Cell>();
                CellSetupData data = gridData[x, y];

                SerializedObject cellSO = new SerializedObject(cellScript);
                cellSO.FindProperty("numberValue").intValue = data.number;
                cellSO.FindProperty("colorType").enumValueIndex = (int)data.colorType;
                cellSO.FindProperty("orientationType").enumValueIndex = (int)data.orientation;
                cellSO.FindProperty("limitType").enumValueIndex = (int)data.limitType;
                cellSO.FindProperty("playType").enumValueIndex = (int)data.playType;
                cellSO.FindProperty("solutionID").intValue = data.solutionID;
                cellSO.ApplyModifiedProperties();

                PrefabUtility.RecordPrefabInstancePropertyModifications(cellScript);
            }
        }

        if (corner1Prefab && corner2Prefab && corner3Prefab && corner4Prefab && topPrefab && botPrefab && leftPrefab && rightPrefab)
        {
            float cornerWidth = corner1Prefab.GetComponent<RectTransform>().rect.width;
            float offset = cornerWidth - cellSizeValue;

            float startX = -(gridWidth * cellSizeValue) / 2f + (cellSizeValue / 2f);
            float startY = -(gridHeight * cellSizeValue) / 2f + (cellSizeValue / 2f);

            Vector2 cellBL = new Vector2(startX, startY);
            Vector2 cellBR = new Vector2(startX + (gridWidth - 1) * cellSizeValue, startY);
            Vector2 cellTL = new Vector2(startX, startY + (gridHeight - 1) * cellSizeValue);
            Vector2 cellTR = new Vector2(startX + (gridWidth - 1) * cellSizeValue, startY + (gridHeight - 1) * cellSizeValue);

            SpawnBorderItem(corner1Prefab, rootObject.transform, new Vector2(cellTL.x - offset, cellTL.y + offset), "Corner1");
            SpawnBorderItem(corner2Prefab, rootObject.transform, new Vector2(cellTR.x + offset, cellTR.y + offset), "Corner2");
            SpawnBorderItem(corner3Prefab, rootObject.transform, new Vector2(cellBR.x + offset, cellBR.y - offset), "Corner3");
            SpawnBorderItem(corner4Prefab, rootObject.transform, new Vector2(cellBL.x - offset, cellBL.y - offset), "Corner4");

            GameObject topObj = SpawnBorderItem(topPrefab, rootObject.transform, new Vector2(0, cellTL.y + offset), "Top");
            RectTransform topRt = topObj.GetComponent<RectTransform>();
            Undo.RecordObject(topRt, "Update Size");
            topRt.sizeDelta = new Vector2((gridWidth - 1) * cellSizeValue, topRt.sizeDelta.y);
            PrefabUtility.RecordPrefabInstancePropertyModifications(topRt);

            GameObject botObj = SpawnBorderItem(botPrefab, rootObject.transform, new Vector2(0, cellBL.y - offset), "Bottom");
            RectTransform botRt = botObj.GetComponent<RectTransform>();
            Undo.RecordObject(botRt, "Update Size");
            botRt.sizeDelta = new Vector2((gridWidth - 1) * cellSizeValue, botRt.sizeDelta.y);
            PrefabUtility.RecordPrefabInstancePropertyModifications(botRt);

            GameObject leftObj = SpawnBorderItem(leftPrefab, rootObject.transform, new Vector2(cellTL.x - offset, 0), "Left");
            RectTransform leftRt = leftObj.GetComponent<RectTransform>();
            Undo.RecordObject(leftRt, "Update Size");
            leftRt.sizeDelta = new Vector2(leftRt.sizeDelta.x, (gridHeight - 1) * cellSizeValue);
            PrefabUtility.RecordPrefabInstancePropertyModifications(leftRt);

            GameObject rightObj = SpawnBorderItem(rightPrefab, rootObject.transform, new Vector2(cellTR.x + offset, 0), "Right");
            RectTransform rightRt = rightObj.GetComponent<RectTransform>();
            Undo.RecordObject(rightRt, "Update Size");
            rightRt.sizeDelta = new Vector2(rightRt.sizeDelta.x, (gridHeight - 1) * cellSizeValue);
            PrefabUtility.RecordPrefabInstancePropertyModifications(rightRt);
        }

        if (!AssetDatabase.IsValidFolder("Assets/Resources")) AssetDatabase.CreateFolder("Assets", "Resources");
        if (!AssetDatabase.IsValidFolder("Assets/Resources/Levels")) AssetDatabase.CreateFolder("Assets/Resources", "Levels");

        string localPath = $"Assets/Resources/Levels/{levelName}.prefab";
        if (isSaveAsNew)
        {
            localPath = AssetDatabase.GenerateUniqueAssetPath(localPath);
        }

        // 🔥 CÚ CHỐT: Dùng SaveAsPrefabAsset thay vì AndConnect để ép Unity XÓA ruột cũ và GHI ĐÈ 100% ruột mới!
        GameObject savedPrefab = PrefabUtility.SaveAsPrefabAsset(rootObject, localPath, out bool prefabSuccess);
        DestroyImmediate(rootObject);

        if (prefabSuccess)
        {
            // 🔥 Ép Unity xóa Cache ảo và đọc lại file từ ổ cứng ngay lập tức
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();

            if (isSaveAsNew)
            {
                EditorUtility.DisplayDialog("Tạo Mới Thành Công", $"Đã đóng gói dữ liệu và tạo thành công Prefab tại:\n{localPath}", "Tuyệt vời");
                ResetFormAfterBuild();
            }
            else
            {
                // 🔥 Cập nhật lại thanh Load ở trên để nếu bấm Load lần nữa sẽ ra bản mới
                if (savedPrefab != null)
                {
                    templatePrefab = savedPrefab;
                    levelPrefabToLoad = savedPrefab;
                }
                EditorUtility.DisplayDialog("Lưu Đè Thành Công", $"Đã cập nhật lại dữ liệu cho {levelName}.\nBảng vẽ vẫn giữ nguyên để bạn kiểm tra!", "Tuyệt vời");
            }
        }
    }

    private GameObject SpawnBorderItem(GameObject prefab, Transform parent, Vector2 anchoredPos, string objName)
    {
        GameObject obj = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
        obj.name = objName;
        obj.transform.SetParent(parent, false);

        RectTransform rt = obj.GetComponent<RectTransform>();

        // 🔥 ĐÃ SỬA: Đánh dấu sự thay đổi tọa độ (Anchor/Pivot) của Border
        Undo.RecordObject(rt, "Update Border Transform");

        rt.anchorMin = new Vector2(0.5f, 0.5f);
        rt.anchorMax = new Vector2(0.5f, 0.5f);
        rt.pivot = new Vector2(0.5f, 0.5f);
        rt.anchoredPosition = anchoredPos;

        // Bắt buộc lưu thay đổi
        EditorUtility.SetDirty(rt);
        PrefabUtility.RecordPrefabInstancePropertyModifications(rt);

        return obj;
    }

    private void ResetFormAfterBuild()
    {
        InitializeGridData();

        string[] nameParts = levelName.Split('_');
        if (nameParts.Length > 1 && int.TryParse(nameParts[nameParts.Length - 1], out int currentLevelNum))
        {
            nameParts[nameParts.Length - 1] = (currentLevelNum + 1).ToString();
            levelName = string.Join("_", nameParts);
        }
        else
        {
            levelName += "_New";
        }

        Repaint();
    }
}