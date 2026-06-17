using UnityEngine;
using UnityEngine.UI;

public class CanvasGameplay : UICanvas
{
    [SerializeField] RectTransform rectContainerLevel;
    //[SerializeField] Button btnHint, btnSetting, btnResetLevel, btnGoHome;
    [SerializeField] Text txtLevel;//, txtAmountHint;
    // [SerializeField] RectTransform rectAdsHint, rectAmountHint;
    // [SerializeField] GameObject containerButton;
    private LevelData levelData;

    private bool isCanUseHint = false;
    void Start()
    {
        // btnHint.onClick.AddListener(() =>
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
        //     if (!isCanUseHint) return;
        //     if (GameController.Instance.UseHint())
        //     {
        //         Observer.OnUseItemHint?.Invoke();
        //     }
        //     else
        //     {
        //         Observer.OnUseItemHint?.Invoke();
        //         //cho người chơi xem quảng cảo và + hint
        //         //GameController.Instance.AddHint(1);
        //     }
        //     UpdateHintUI(GameController.Instance.GetAmountHint);
        // });
        // btnSetting.onClick.AddListener(() =>
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
        //     UIManager.Instance.OpenUI<CanvasSetting>();
        // });
        // btnResetLevel.onClick.AddListener(() =>
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
        //     Observer.OnResetLevel?.Invoke();
        // });

        // btnGoHome.onClick.AddListener(() =>
        // {
        //     GameController.Instance.SetState(StateGame.Menu);
        //     UIManager.Instance.CloseUI<CanvasGameplay>(0);
        // });
    }

    public void Setuplevel(Level level, int levelIndex)
    {
        level.SetData(rectContainerLevel);
        txtLevel.text = $"Level {levelIndex}";
        isCanUseHint = true;
    }

    // ==========================================
    // 🔥 HÀM CẬP NHẬT GIAO DIỆN HINT
    // ==========================================
    public void UpdateHintUI(int hintAmount)
    {
        // if (hintAmount <= 0)
        // {
        //     // Hết Hint: Bật chế độ xem Ads, tắt phần hiển thị số lượng
        //     if (rectAdsHint != null) rectAdsHint.gameObject.SetActive(true);
        //     if (rectAmountHint != null) rectAmountHint.gameObject.SetActive(false);
        // }
        // else
        // {
        //     // Còn Hint: Tắt chế độ xem Ads, bật hiển thị số lượng và cập nhật Text
        //     if (rectAdsHint != null) rectAdsHint.gameObject.SetActive(false);
        //     if (rectAmountHint != null) rectAmountHint.gameObject.SetActive(true);

        //     if (txtAmountHint != null)
        //     {
        //         txtAmountHint.text = hintAmount.ToString();
        //     }
        // }
    }
    //khi mà game đã win thì không cho chạy nhấn hint
    public void SetisCanUseHint()
    {
        isCanUseHint = false;
    }
    public void SetActiveUI(bool isActive)
    {
        //containerButton.SetActive(isActive);
    }
    void OnEnable()
    {
        Observer.OnWinLevel += SetisCanUseHint;
    }
    void OnDisable()
    {
        Observer.OnWinLevel -= SetisCanUseHint;
    }
}