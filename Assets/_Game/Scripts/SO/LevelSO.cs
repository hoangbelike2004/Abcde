using System;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "LevelSO", menuName = "Scriptable Objects/LevelSO")]
public class LevelSO : ScriptableObject
{
    public List<LevelData> levelDatas = new List<LevelData>();
}
[Serializable]
public class LevelData
{
    public float timer;
    public Level levelPrefab;
}
