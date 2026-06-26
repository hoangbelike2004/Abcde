using UnityEngine;
using UnityEngine.UI;

public class CanvasSetting : UICanvas
{
    [SerializeField] Button btnSound, btnMusic, btnClose;

    private Transform rectbuttonSoundActive, rectButtonSoundDisable, rectButtonMusicActive, rectButtonMusicDisable;

    private GameSetting gameSetting;
    void Awake()
    {
        gameSetting = Resources.Load<GameSetting>(GameConstants.KEY_DATA_GAME_SETTING);
        rectbuttonSoundActive = btnSound.transform.GetChild(0);
        rectButtonSoundDisable = btnSound.transform.GetChild(1);
        rectButtonMusicActive = btnMusic.transform.GetChild(0);
        rectButtonMusicDisable = btnMusic.transform.GetChild(1);
        UpdateButtonMusic();
        UpdateButtonSound();
    }
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        btnClose.onClick.AddListener(() =>
        {
            UIManager.Instance.CloseUI<CanvasSetting>(0);
        });

        btnSound.onClick.AddListener(OnClickButtonSound);

        btnMusic.onClick.AddListener(OnClickButtonMusic);
    }
    void OnClickButtonSound()
    {
        gameSetting.isSound = !gameSetting.isSound;
        UpdateButtonSound();
    }
    void OnClickButtonMusic()
    {
        gameSetting.isMusic = !gameSetting.isMusic;
        SoundManager.Instance.SetVolumnMusic(gameSetting.isMusic);
        UpdateButtonMusic();
    }
    void UpdateButtonSound()
    {
        rectbuttonSoundActive.gameObject.SetActive(gameSetting.isSound);
        rectButtonSoundDisable.gameObject.SetActive(!gameSetting.isSound);
    }

    void UpdateButtonMusic()
    {
        rectButtonMusicActive.gameObject.SetActive(gameSetting.isMusic);
        rectButtonMusicDisable.gameObject.SetActive(!gameSetting.isMusic);
    }
}