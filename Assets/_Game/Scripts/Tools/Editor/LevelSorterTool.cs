using UnityEngine;
using UnityEditor;
using System.Collections.Generic;

public class LevelSorterTool : EditorWindow
{
    // Danh sách chứa các Prefab
    public List<GameObject> levelPrefabs = new List<GameObject>();

    private SerializedObject serializedObject;
    private SerializedProperty levelPrefabsProperty;

    [MenuItem("Tools/Level Sorter Tool")]
    public static void ShowWindow()
    {
        LevelSorterTool window = GetWindow<LevelSorterTool>("Level Sorter");
        window.minSize = new Vector2(300, 400);
    }

    private void OnEnable()
    {
        serializedObject = new SerializedObject(this);
        levelPrefabsProperty = serializedObject.FindProperty("levelPrefabs");
    }

    private void OnGUI()
    {
        serializedObject.Update();

        GUILayout.Label("LEVEL PREFAB SORTER", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("1. Kéo thả trực tiếp các Prefab Level vào danh sách.\n" +
                                "2. Nắm biểu tượng (=) ở đầu mỗi dòng để kéo thả, sắp xếp lại.\n" +
                                "3. Bấm Rename để đổi tên hàng loạt (ưu tiên đổi từ dưới lên để tránh trùng tên).", MessageType.Info);

        EditorGUILayout.Space();

        EditorGUILayout.PropertyField(levelPrefabsProperty, new GUIContent("Level Prefabs"), true);

        serializedObject.ApplyModifiedProperties();

        EditorGUILayout.Space();

        GUI.backgroundColor = Color.green;
        if (GUILayout.Button("Rename & Sort Levels (Level_1, Level_2...)", GUILayout.Height(40)))
        {
            RenameLevels();
        }
        GUI.backgroundColor = Color.white;

        EditorGUILayout.Space();

        GUI.backgroundColor = Color.red;
        if (GUILayout.Button("Clear List"))
        {
            levelPrefabs.Clear();
        }
        GUI.backgroundColor = Color.white;
    }

    private void RenameLevels()
    {
        int totalLevels = levelPrefabs.Count;

        if (totalLevels == 0)
        {
            Debug.LogWarning("Level Sorter: Danh sách đang trống!");
            return;
        }

        int successCount = 0;

        // 🔥 CẬP NHẬT: Lặp từ đằng sau về đằng trước (từ index cuối cùng lùi về 0)
        for (int i = totalLevels - 1; i >= 0; i--)
        {
            if (levelPrefabs[i] != null)
            {
                string assetPath = AssetDatabase.GetAssetPath(levelPrefabs[i]);

                if (!string.IsNullOrEmpty(assetPath))
                {
                    // Tên mới vẫn được gán đúng số thứ tự (index + 1)
                    string newName = "Level_" + (i + 1);

                    // Nếu tên hiện tại đã đúng rồi thì bỏ qua, đỡ tốn hiệu suất của Unity
                    if (levelPrefabs[i].name == newName)
                    {
                        successCount++;
                        continue;
                    }

                    string result = AssetDatabase.RenameAsset(assetPath, newName);

                    if (string.IsNullOrEmpty(result))
                    {
                        successCount++;
                    }
                    else
                    {
                        Debug.LogError($"Lỗi khi đổi tên {levelPrefabs[i].name} thành {newName}: {result}");
                    }
                }
            }
        }

        // Lưu và làm mới lại Project
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();

        Debug.Log($"<color=green>Đã đổi tên và sắp xếp thành công {successCount}/{totalLevels} Levels!</color>");
    }
}