using System.Collections;
using UnityEngine;

// 1. CÁC TRẠNG THÁI CỦA GAME
public enum StateGame
{
    None,
    Menu,
    GamePlay,
    GameWin,
    GameLose,
    ReplayGame,
}

// 2. CLASS LƯU TRỮ DỮ LIỆU (BẮT BUỘC PHẢI CÓ SERIALIZABLE)
[System.Serializable]
public class PlayerData
{
    public int currentLevelIndex;
    public int oldLevel;
    public int leaderboardFetchCountCurrent; // 🔥 THÊM BIẾN MỚI
    public bool isMusicOn;
    public bool isSoundOn;

    public int amountHint;

    // Constructor cập nhật thêm tham số fetchCount
    public PlayerData(int levelIndex, int oldLevel, int fetchCount, bool musicOn, bool soundOn, int amountHint)
    {
        currentLevelIndex = levelIndex;
        this.oldLevel = oldLevel;
        leaderboardFetchCountCurrent = fetchCount; // 🔥 GÁN GIÁ TRỊ
        isMusicOn = musicOn;
        isSoundOn = soundOn;
        this.amountHint = amountHint;
    }

    // Constructor rỗng (Bắt buộc phải có để hệ thống Unity JSON hoạt động)
    public PlayerData() { }
}

// 3. CLASS GAME CONTROLLER CHÍNH
public class GameController : Singleton<GameController>
{
    [Header("Level Settings")]
    [SerializeField] float levelTransitionDelay = 1.5f;
    [SerializeField] int levelTest = 0;
    [SerializeField] int totalLevels = 5; // Tổng số level thực tế có trong thư mục Resources

    [SerializeField] int amoutHint = 1;

    [SerializeField] int currentLevelTutorial = 5;

    public int levelUnlockRank = 30;
    private LevelSO levelSO;

    private PlayerSO playerSO;
    private CanvasGameplay canvasGameplay;
    private GameSetting gameSetting;

    private StateGame currentState = StateGame.None;
    private Level currentlevel;

    private CanvasMenu canvasMenu;
    // Key lưu dữ liệu bằng JSON
    private const string SAVE_DATA_KEY = "PlayerSaveData";

    void Awake()
    {
        QualitySettings.vSyncCount = 0;
        Application.targetFrameRate = 60;

        // playerSO = Resources.Load<PlayerSO>(GameConstants.KEY_DATA_PLAYER_SO);
        // levelSO = Resources.Load<LevelSO>(GameConstants.KEY_PREFAB_GAME_LEVEL_SO);
        // gameSetting = Resources.Load<GameSetting>(GameConstants.KEY_DATA_GAME_SETTING);

        // 🔥 NẠP DỮ LIỆU LEVEL & SETTING NGAY KHI GAME VỪA BẬT LÊN
        //LoadData();
    }

    void Start()
    {
        //SetState(StateGame.Menu);

        // Bật nhạc nền nếu cài đặt cho phép
        // if (gameSetting != null && gameSetting.isMusic)
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Music);
        // }
    }

    // ==========================================
    // LOGIC QUẢN LÝ STATE
    // ==========================================
    public void SetState(StateGame newState)
    {
        if (currentState == newState) return;

        if (currentState == StateGame.GameWin && newState == StateGame.GameLose)
        {
            return;
        }

        if (currentState == StateGame.GameLose && newState == StateGame.GameWin)
        {
            return;
        }

        currentState = newState;
        ChangeState();
    }

    public void ChangeState()
    {
        switch (currentState)
        {
            case StateGame.Menu:
                OpenMenu();
                break;
            case StateGame.GamePlay:
                LoadLevel();
                break;
            case StateGame.GameWin:
                StartCoroutine(WaitForNextLevel());
                break;
            case StateGame.GameLose:
                break;
            case StateGame.ReplayGame:
                break;
        }
    }
    public void OpenMenu()
    {
        ClearLevel();
        canvasMenu = UIManager.Instance.OpenUI<CanvasMenu>();
    }
    // ==========================================
    // LOGIC QUẢN LÝ LEVEL
    // ==========================================
    public void LoadLevel()
    {
        if (playerSO == null) return;

        int prefabLevelIndex = playerSO.currentLevelIndex;

        if (levelTest != 0)
        {
            prefabLevelIndex = levelTest;
            playerSO.currentLevelIndex = levelTest;
        }
        else if (playerSO.currentLevelIndex > totalLevels)
        {
            // Xoay vòng lại các màn chơi nếu vượt quá tổng số lượng Prefab Level
            prefabLevelIndex = ((playerSO.currentLevelIndex - 1) % totalLevels) + 1;
        }

        string txtLevel = GameConstants.KEY_PREFAB_GAME_LEVEL + prefabLevelIndex;
        currentlevel = Resources.Load<Level>(txtLevel);

        if (currentlevel != null)
        {
            currentlevel = Instantiate(currentlevel);
            if (!UIManager.Instance.IsOpen<CanvasGameplay>())
            {
                canvasGameplay = UIManager.Instance.OpenUI<CanvasGameplay>();
            }
            canvasGameplay.SetActiveUI(!(playerSO.currentLevelIndex < currentLevelTutorial));

            canvasGameplay.Setuplevel(currentlevel, playerSO.currentLevelIndex);
            canvasGameplay.UpdateHintUI(amoutHint);
        }
        else
        {
            Debug.LogError($"Không tìm thấy Prefab Level tại: Resources/{txtLevel}");
        }
    }

    IEnumerator WaitForNextLevel()
    {
        canvasGameplay.SetActiveUI(false);
        yield return new WaitForSeconds(levelTransitionDelay);
        ClearLevel();

        if (playerSO != null)
        {
            playerSO.oldLevel = playerSO.currentLevelIndex;
            CanvasWin canvasWin = UIManager.Instance.OpenUI<CanvasWin>();
            //SoundManager.Instance.PlaySound(eAudioName.Audio_Win);
            canvasWin.ShowWinEffect();
            // Tăng vô hạn số màn chơi hiển thị cho UI
            // playerSO.currentLevelIndex++;
            // if (playerSO.currentLevelIndex == 2)
            // {
            //     Debug.Log("Hiển thị thông báo đánh giá");
            // }

            // if (playerSO.currentLevelIndex > currentLevelTutorial)
            // {
            //     CanvasWin canvasWin = UIManager.Instance.OpenUI<CanvasWin>();
            //     //SoundManager.Instance.PlaySound(eAudioName.Audio_Win);
            //     canvasWin.ShowWinEffect();
            // }
            // else
            // {
            //     SetState(StateGame.GamePlay);
            // }
        }
    }

    public void ClearLevel()
    {
        if (currentlevel != null)
        {
            currentlevel.Despawn();
            Destroy(currentlevel.gameObject);
            currentlevel = null;
        }
    }

    public void ReplayGame()
    {
        ClearLevel();
        SetState(StateGame.GamePlay);
    }

    public int GetCurrentLevel => playerSO != null ? playerSO.currentLevelIndex : 1;

    public bool OnUnlockRank => playerSO != null && playerSO.currentLevelIndex >= levelUnlockRank;
    public bool OnTutorialLevel => playerSO != null && playerSO.currentLevelIndex == currentLevelTutorial;

    // ==========================================
    // LOGIC SAVE / LOAD DATA BẰNG JSON
    // ==========================================
    public void SaveData()
    {
        // Tránh lưu đè data ảo nếu đang bật chế độ test bằng tay trên Inspector
        if (levelTest != 0)
        {
            Debug.LogWarning("Đang trong chế độ Test Level, sẽ không lưu tiến trình!");
            return;
        }

        // Đóng gói toàn bộ dữ liệu vào class PlayerData
        bool musicOn = gameSetting != null ? gameSetting.isMusic : true;
        bool soundOn = gameSetting != null ? gameSetting.isSound : true;

        int levelToSave = playerSO != null ? playerSO.currentLevelIndex : 1;
        int oldLevelToSave = playerSO != null ? playerSO.oldLevel : 1;
        int fetchCountToSave = playerSO != null ? playerSO.leaderboardFetchCountCurrent : 0; // 🔥 LẤY DATA MỚI

        PlayerData dataToSave = new PlayerData(levelToSave, oldLevelToSave, fetchCountToSave, musicOn, soundOn, amoutHint);

        // Chuyển class thành chuỗi JSON
        string jsonData = JsonUtility.ToJson(dataToSave);

        // Lưu xuống PlayerPrefs
        PlayerPrefs.SetString(SAVE_DATA_KEY, jsonData);
        PlayerPrefs.Save();
    }

    public void LoadData()
    {
        // Kiểm tra xem đã có file save cũ chưa
        if (PlayerPrefs.HasKey(SAVE_DATA_KEY))
        {
            string jsonData = PlayerPrefs.GetString(SAVE_DATA_KEY);
            PlayerData loadedData = JsonUtility.FromJson<PlayerData>(jsonData);

            if (playerSO != null)
            {
                playerSO.currentLevelIndex = loadedData.currentLevelIndex;
                playerSO.oldLevel = loadedData.oldLevel;
                playerSO.leaderboardFetchCountCurrent = loadedData.leaderboardFetchCountCurrent; // 🔥 NẠP DATA MỚI VÀO SO
            }

            amoutHint = loadedData.amountHint;
            if (gameSetting != null)
            {
                gameSetting.isMusic = loadedData.isMusicOn;
                gameSetting.isSound = loadedData.isSoundOn;
            }
        }
        else
        {
            // Lần đầu mở game: Thiết lập giá trị mặc định
            if (playerSO != null)
            {
                playerSO.currentLevelIndex = 1;
                playerSO.oldLevel = 1;
                playerSO.leaderboardFetchCountCurrent = 0; // 🔥 ĐẶT MẶC ĐỊNH LÀ 0
            }

            if (gameSetting != null)
            {
                gameSetting.isMusic = true;
                gameSetting.isSound = true;
            }
        }
    }
    public bool UseHint()
    {
        if (amoutHint <= 0)
        {
            return false;
        }
        amoutHint--;
        return true;
    }
    public void AddHint(int amout)
    {
        amoutHint += amout;
    }

    public int GetAmountHint => amoutHint;

    // ==========================================
    // APP LIFECYCLE - TỰ ĐỘNG LƯU TRÁNH MẤT DATA
    // ==========================================
    // private void OnApplicationQuit()
    // {
    //     SaveData();
    // }

    // private void OnApplicationPause(bool isPaused)
    // {
    //     if (isPaused)
    //     {
    //         SaveData();
    //     }
    // }
}