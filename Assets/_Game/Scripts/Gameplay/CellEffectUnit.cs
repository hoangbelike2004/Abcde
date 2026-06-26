using Spine.Unity;
using UnityEngine;
using DG.Tweening;
using System.Collections;

public class CellEffectUnit : GameUnit
{
    private SkeletonGraphic skeletonGraphic;
    private RectTransform rect;

    // Thay mảng random bằng tên animation cố định
    private const string PLAY_ANIM = "action1";
    private const string IDLE_ANIM = "action2";
    private const string WIN_ANIM = "action3";

    private int orderInLayerDefault = 1;

    private Canvas canvas;

    void Awake()
    {
        skeletonGraphic = transform.GetChild(0).GetComponent<SkeletonGraphic>();
        rect = GetComponent<RectTransform>();
        canvas = GetComponent<Canvas>();
    }

    // ==========================================
    // 1. HÀM XUẤT HIỆN (SPAWN & PLAY)
    // ==========================================
    public void ShowEffect(Transform parentNode)
    {
        transform.SetParent(parentNode, false);
        canvas.sortingOrder = orderInLayerDefault;
        rect.anchoredPosition = Vector3.zero;

        // 🔥 Reset Scale về 1 ngay lập tức để không bị tàng hình khi lấy từ Pool
        rect.DOKill();
        rect.localScale = Vector3.one;

        // SPINE: Chạy trực tiếp animation cố định
        skeletonGraphic.AnimationState.SetAnimation(0, PLAY_ANIM, false);

        // Nối tiếp sang Idle
        skeletonGraphic.AnimationState.AddAnimation(0, IDLE_ANIM, true, 0f);
    }

    // ==========================================
    // 2. BỘ 3 HÀM BẮT ĐẦU BIẾN MẤT (HIDE)
    // ==========================================

    // Cách 1: Ẩn và thu hồi NGAY LẬP TỨC (Dùng khi clear toàn bộ bảng, đổi level)
    public void HideEffectImmediate()
    {
        rect.DOKill(); // Chặn mọi hiệu ứng Tween đang dở dang
        Despawn();
    }

    // Cách 2: Ẩn bằng DOTWEEN (Thu nhỏ dần rồi mới thu hồi)
    public void HideEffectWithTween()
    {
        rect.DOKill();
        rect.DOScale(Vector3.zero, 0.25f).SetEase(Ease.InBack).OnComplete(Despawn);
    }

    // ==========================================
    // 3. CÁC HÀM KHÁC
    // ==========================================
    public void WinAnimation()
    {
        skeletonGraphic.AnimationState.SetAnimation(0, WIN_ANIM, true);
    }

    private void Despawn()
    {
        if (skeletonGraphic != null && skeletonGraphic.AnimationState != null)
        {
            skeletonGraphic.AnimationState.ClearTracks();
            skeletonGraphic.Skeleton.SetToSetupPose();
        }

        SimplePool.Despawn(this);
    }
    public void SetSorttingLayer()
    {
        canvas.sortingOrder = 7;
    }
    public void ResetSorttingLayer()
    {
        canvas.sortingOrder = orderInLayerDefault;
        canvas.enabled = false;
        StartCoroutine(WaitAndResetSortingLayer());
    }
    IEnumerator WaitAndResetSortingLayer()
    {
        yield return new WaitForEndOfFrame();
        canvas.enabled = true;
    }
    void OnEnable()
    {
        Observer.OnWinLevel += WinAnimation;
    }
    void OnDisable()
    {
        Observer.OnWinLevel -= WinAnimation;
    }
}