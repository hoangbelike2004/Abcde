using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

public enum MenuState
{
    None,
    Rank,
    Shop,
    Home,
}

public class CanvasMenu : UICanvas
{
    // [SerializeField] Button btnShop, btnHome, btnRank;
    // [SerializeField] RectTransform rectTxtHome, rectTxtShop, rectTxtRank;
    // [SerializeField] RectTransform rectSelect;
    // [SerializeField] TextMeshProUGUI txtUnlockRank;
    // [Header("Cấu hình Animation")]
    // [SerializeField] private float animDuration = 0.25f;
    // [SerializeField] private float iconMoveUpAmount = 20f;
    // [SerializeField] private float iconActiveScale = 1.2f;

    // private MenuState menuState = MenuState.None;

    // private RectTransform rectIconBtnShop, rectIconBtnHome, rectIconBtnRank;
    // private float originalIconY;

    // void Awake()
    // {
    //     // Lấy con đầu tiên của Button làm Icon
    //     rectIconBtnShop = btnShop.transform.GetChild(1).GetComponent<RectTransform>();
    //     rectIconBtnHome = btnHome.transform.GetChild(1).GetComponent<RectTransform>();
    //     rectIconBtnRank = btnRank.transform.GetChild(1).GetComponent<RectTransform>();

    //     if (rectIconBtnHome != null) originalIconY = rectIconBtnHome.anchoredPosition.y;

    //     btnHome.onClick.AddListener(() => SetState(MenuState.Home));
    //     btnShop.onClick.AddListener(() => SetState(MenuState.Shop));
    //     btnRank.onClick.AddListener(() => SetState(MenuState.Rank));

    //     if (rectTxtHome != null) rectTxtHome.gameObject.SetActive(false);
    //     if (rectTxtShop != null) rectTxtShop.gameObject.SetActive(false);
    //     if (rectTxtRank != null) rectTxtRank.gameObject.SetActive(false);

    //     // Đảm bảo Text thông báo bị ẩn đi lúc mới vào game
    //     if (txtUnlockRank != null) txtUnlockRank.gameObject.SetActive(false);
    // }

    // void OnEnable()
    // {
    //     menuState = MenuState.None;
    //     ResetIconAndTextImmediate(rectIconBtnShop, rectTxtShop);
    //     ResetIconAndTextImmediate(rectIconBtnRank, rectTxtRank);
    //     SetState(MenuState.Home);
    // }

    // void Start()
    // {
    //     if (txtUnlockRank != null)
    //     {
    //         txtUnlockRank.text = "Unlock level " + GameController.Instance.levelUnlockRank;
    //     }
    // }

    // public void SetState(MenuState newState)
    // {
    //     if (menuState == newState) return;

    //     // 🔥 KIỂM TRA ĐIỀU KIỆN MỞ KHÓA RANK TẠI ĐÂY
    //     if (newState == MenuState.Rank && !GameController.Instance.OnUnlockRank)
    //     {
    //         ShowUnlockRankWarning();
    //         return; // Chặn không cho đổi State
    //     }

    //     CloseStateOld();
    //     menuState = newState;
    //     ChangeState();
    // }

    // // ==========================================
    // // LOGIC THÔNG BÁO RANK CHƯA MỞ KHÓA
    // // ==========================================
    // private void ShowUnlockRankWarning()
    // {
    //     if (txtUnlockRank == null) return;

    //     // Reset và DOKill để tránh lỗi khi người chơi spam click liên tục
    //     txtUnlockRank.DOKill();
    //     txtUnlockRank.gameObject.SetActive(true);

    //     // Thiết lập giá trị ban đầu (Scale nhỏ, độ mờ = 0) để tạo hiệu ứng popup nảy lên
    //     txtUnlockRank.color = new Color(txtUnlockRank.color.r, txtUnlockRank.color.g, txtUnlockRank.color.b, 0f);
    //     txtUnlockRank.transform.localScale = Vector3.one * 0.8f;

    //     // Chuỗi Animation: Hiện lên -> Chờ 1.5s -> Mờ dần rồi tắt hẳn
    //     Sequence seq = DOTween.Sequence();
    //     seq.Append(txtUnlockRank.DOFade(1f, 0.2f));
    //     seq.Join(txtUnlockRank.transform.DOScale(1f, 0.2f).SetEase(Ease.OutBack));

    //     seq.AppendInterval(1.5f);

    //     seq.Append(txtUnlockRank.DOFade(0f, 0.2f));
    //     seq.OnComplete(() =>
    //     {
    //         txtUnlockRank.gameObject.SetActive(false);
    //     });
    // }

    // public void ChangeState()
    // {
    //     switch (menuState)
    //     {
    //         case MenuState.Home: OpenHome(); break;
    //         case MenuState.Rank: OpenRank(); break;
    //         case MenuState.Shop: OpenShop(); break;
    //     }
    // }

    // public void CloseStateOld()
    // {
    //     switch (menuState)
    //     {
    //         case MenuState.Home: CloseHome(); break;
    //         case MenuState.Rank: CloseRank(); break;
    //         case MenuState.Shop: CloseShop(); break;
    //     }
    // }

    // // ==========================================
    // // LOGIC ANIMATION MENU
    // // ==========================================
    // private void AnimateSelect(RectTransform icon, RectTransform textRect)
    // {
    //     // 1. Nút di chuyển lên và phóng to
    //     if (icon != null)
    //     {
    //         icon.DOKill();
    //         icon.DOAnchorPosY(originalIconY + iconMoveUpAmount, animDuration).SetEase(Ease.OutBack);
    //         icon.DOScale(iconActiveScale, animDuration).SetEase(Ease.OutBack);
    //     }

    //     // 2. Nền Select trượt sang
    //     if (icon != null && rectSelect != null)
    //     {
    //         rectSelect.DOKill();
    //         rectSelect.DOMoveX(icon.position.x, animDuration).SetEase(Ease.OutBack);
    //     }

    //     // 3. Text CHỈ XUẤT HIỆN (Đứng im 1 chỗ phóng to lên)
    //     if (textRect != null)
    //     {
    //         textRect.gameObject.SetActive(true);
    //         textRect.DOKill();
    //         textRect.localScale = Vector3.zero;
    //         textRect.DOScale(1f, animDuration).SetEase(Ease.OutQuad);
    //     }
    // }

    // private void AnimateDeselect(RectTransform icon, RectTransform textRect)
    // {
    //     if (icon != null)
    //     {
    //         icon.DOKill();
    //         icon.DOAnchorPosY(originalIconY, animDuration).SetEase(Ease.OutQuad);
    //         icon.DOScale(1f, animDuration).SetEase(Ease.OutQuad);
    //     }

    //     // Text thu nhỏ rồi tắt đi (Không chạm vào vị trí)
    //     if (textRect != null)
    //     {
    //         textRect.DOKill();
    //         textRect.DOScale(0f, animDuration * 0.8f).SetEase(Ease.OutQuad).OnComplete(() =>
    //         {
    //             textRect.gameObject.SetActive(false);
    //         });
    //     }
    // }

    // private void ResetIconAndTextImmediate(RectTransform icon, RectTransform textRect)
    // {
    //     if (icon != null)
    //     {
    //         icon.DOKill();
    //         icon.anchoredPosition = new Vector2(icon.anchoredPosition.x, originalIconY);
    //         icon.localScale = Vector3.one;
    //     }

    //     if (textRect != null)
    //     {
    //         textRect.DOKill();
    //         textRect.localScale = Vector3.zero;
    //         textRect.gameObject.SetActive(false);
    //     }
    // }

    // public void OpenShop()
    // {
    //     AnimateSelect(rectIconBtnShop, rectTxtShop);
    //     UIManager.Instance.OpenUI<CanvasShop>();
    // }
    // public void CloseShop()
    // {
    //     AnimateDeselect(rectIconBtnShop, rectTxtShop);
    //     UIManager.Instance.CloseUI<CanvasShop>(0);
    // }

    // public void OpenHome()
    // {
    //     AnimateSelect(rectIconBtnHome, rectTxtHome);
    //     UIManager.Instance.OpenUI<CanvasHome>();
    // }
    // public void CloseHome()
    // {
    //     AnimateDeselect(rectIconBtnHome, rectTxtHome);
    //     UIManager.Instance.CloseUI<CanvasHome>(0);
    // }

    // public void OpenRank()
    // {
    //     AnimateSelect(rectIconBtnRank, rectTxtRank);
    //     CanvasRank canvasRank = UIManager.Instance.OpenUI<CanvasRank>();
    //     FirestoreLeaderboardManager.Instance.SubmitScore();
    //     canvasRank.UpdateCup();
    // }
    // public void CloseRank()
    // {
    //     AnimateDeselect(rectIconBtnRank, rectTxtRank);
    //     UIManager.Instance.CloseUI<CanvasRank>(0);
    // }
}