using UnityEngine;

[CreateAssetMenu(fileName = "PlayerSO", menuName = "Scriptable Objects/PlayerSO")]
public class PlayerSO : ScriptableObject
{
    public int oldLevel;
    public int currentLevelIndex = 1;
    [Header("Chỉ set leaderboardFetchCountMax khi muốn tăng số lần request để update leaderboard, ví dụ: 5, 10, 15...")]
    public int leaderboardFetchCountCurrent = 0;

    public int leaderboardFetchCountMax = 5;
}
