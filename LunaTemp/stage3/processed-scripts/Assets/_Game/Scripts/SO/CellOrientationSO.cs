using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "CellOrientationSO", menuName = "Scriptable Objects/CellOrientationSO")]
public class CellOrientationSO : ScriptableObject
{
    public List<CellOrientationData> cellOrientationDatas = new List<CellOrientationData>();

    /// <summary>
    /// Lấy Sprite tương ứng dựa vào hướng (Orientation) và màu (Color)
    /// </summary>
    public CellOrientationData GetCellOrientationData(CellOrientationType orientation, CellColorType color)
    {
        for (int i = 0; i < cellOrientationDatas.Count; i++)
        {
            if (cellOrientationDatas[i].orientationType == orientation &&
                cellOrientationDatas[i].colorType == color)
            {
                return cellOrientationDatas[i];
            }
        }

        // Báo lỗi nhẹ ở Console nếu không tìm thấy dữ liệu khớp
        Debug.LogWarning($"[CellOrientationSO] Không tìm thấy Sprite cho Orientation: {orientation} và Color: {color}");
        return null;
    }
}

[Serializable]
public class CellOrientationData
{
    public CellOrientationType orientationType;
    public CellColorType colorType;
    public Sprite sprite;
}