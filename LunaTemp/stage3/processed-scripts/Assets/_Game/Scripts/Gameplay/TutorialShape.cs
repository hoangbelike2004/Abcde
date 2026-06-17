using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class TutorialShape : MonoBehaviour
{
    [SerializeField] RectTransform rectCell;
    [SerializeField] RectTransform rectHand, rectPos1, rectPos2;

    [Header("Animation Settings")]
    [SerializeField] float moveDuration = 0.5f; // Thời gian di chuyển & zoom
    [SerializeField] float delayTime = 1.5f;    // Thời gian dừng lại ở giữa màn hình
    [SerializeField] float zoomScale = 1.5f;    // Tỉ lệ zoom to (VD: 1.5 lần)
    [SerializeField] float handDuration = 1f;   // Thời gian bàn tay di chuyển từ Pos1 -> Pos2

    // 🔥 BIẾN MỚI: Dùng để căn chỉnh vị trí khi bay ra giữa màn hình
    [SerializeField] Vector3 centerOffset = Vector3.zero;

    [SerializeField] Image overlay;

    private Vector2 originalCellAnchorPos;
    private Vector3 originalCellScale;

    void Start()
    {
        // 1. Lưu lại vị trí và scale gốc của ô Cell (Tọa độ local so với cha của nó)
        originalCellAnchorPos = rectCell.anchoredPosition;
        originalCellScale = rectCell.localScale;

        // Tạm ẩn bàn tay đi khi đang làm animation cho Cell
        if (rectHand != null) rectHand.gameObject.SetActive(false);
        rectCell.GetComponent<Canvas>().sortingOrder = 4;

        // Bắt đầu chuỗi animation
        PlayTutorialSequence();
    }

    private void PlayTutorialSequence()
    {
        Sequence seq = DOTween.Sequence();

        // Lấy Canvas cao nhất bọc toàn bộ UI để lấy đúng vị trí chính giữa màn hình (World Space)
        Canvas rootCanvas = rectCell.GetComponentInParent<Canvas>().rootCanvas;
        Vector3 screenCenterWorldPos = rootCanvas.transform.position;

        // 🔥 ÁP DỤNG OFFSET: Cộng thêm khoảng bù trừ vào vị trí tâm màn hình
        Vector3 targetPosition = screenCenterWorldPos + centerOffset;

        // Bước 1: Đưa ra vị trí đích (tâm + offset) và zoom to 
        seq.Append(rectCell.DOMove(targetPosition, moveDuration).SetEase(Ease.OutQuad));
        seq.Join(rectCell.DOScale(originalCellScale * zoomScale, moveDuration).SetEase(Ease.OutQuad));

        // Bước 2: Chờ 1 khoảng thời gian
        seq.AppendInterval(delayTime);

        // Bước 3: Đưa về vị trí cũ (vẫn dùng DOAnchorPos vì nó nhớ tọa độ local của cha nó) và thu nhỏ lại
        seq.Append(rectCell.DOAnchorPos(originalCellAnchorPos, moveDuration).SetEase(Ease.InOutQuad));
        seq.Join(rectCell.DOScale(originalCellScale, moveDuration).SetEase(Ease.InOutQuad));

        // Bước 4: Khi chuỗi trên kết thúc -> Bật bàn tay lên và cho di chuyển
        seq.OnComplete(() =>
        {
            rectCell.GetComponent<Canvas>().sortingOrder = 2;
            if (overlay != null) overlay.gameObject.SetActive(false);
            StartHandAnimation();
        });
    }

    private void StartHandAnimation()
    {
        if (rectHand == null || rectPos1 == null || rectPos2 == null) return;

        rectHand.gameObject.SetActive(true);

        // Đặt vị trí ban đầu của Hand ở Pos1
        rectHand.position = rectPos1.position;

        // Di chuyển đến Pos2, lặp lại vô hạn (-1) với kiểu Restart
        rectHand.DOMove(rectPos2.position, handDuration)
                .SetEase(Ease.Linear)
                .SetLoops(-1, LoopType.Restart);
    }

    // ==========================================
    // DÙNG ĐỂ TẮT HIỆU ỨNG BÀN TAY
    // ==========================================
    public void StopHandAnimation()
    {
        if (rectHand != null)
        {
            rectHand.DOKill();
            rectHand.gameObject.SetActive(false);
        }
    }

    private void OnDestroy()
    {
        if (rectCell != null) rectCell.DOKill();
        if (rectHand != null) rectHand.DOKill();
    }

    void OnEnable()
    {
        Observer.OnStopTutorialShape += StopHandAnimation;
    }

    void OnDisable()
    {
        Observer.OnStopTutorialShape -= StopHandAnimation;
    }
}