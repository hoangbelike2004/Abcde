using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using System.Collections.Generic;
using TMPro; // Bắt buộc thêm dòng này để dùng List

public class CanvasHome : UICanvas
{
    [SerializeField] Button btnPlayGame, btnSetting, btnNoAds, btnStreak;
    [SerializeField] TextMeshProUGUI txtStreak;
    [Header("Cấu hình Băng Chuyền Nền")]
    [SerializeField] private RectTransform img1;
    [SerializeField] private RectTransform img2;
    [Tooltip("Tốc độ di chuyển (Pixels trên giây)")]
    [SerializeField] private float speed = 100f;

    [Header("Cấu hình Item Tái Sử Dụng (Pool)")]
    [Tooltip("Kéo thả trực tiếp các Item CÓ SẴN trên Scene vào đây")]
    [SerializeField] private RectTransform[] itemsList;

    [Tooltip("Tọa độ X bắt đầu chạy (Bên phải màn hình)")]
    [SerializeField] private float startPosX = 800f;

    [Tooltip("Tọa độ X kết thúc (Bên trái màn hình)")]
    [SerializeField] private float endPosX = -800f;

    [Tooltip("Thời gian chờ tối thiểu để thả item")]
    [SerializeField] private float minSpawnTime = 1f;

    [Tooltip("Thời gian chờ tối đa để thả item")]
    [SerializeField] private float maxSpawnTime = 3f;

    private Tween spawnTween;

    void Start()
    {
        // btnPlayGame.onClick.AddListener(() =>
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
        //     GameController.Instance.SetState(StateGame.GamePlay);
        //     UIManager.Instance.CloseUI<CanvasMenu>(0);
        //     UIManager.Instance.CloseUI<CanvasHome>(0);
        // });

        // btnSetting.onClick.AddListener(() =>
        // {
        //     SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
        //     UIManager.Instance.OpenUI<CanvasSetting>();
        // });
        btnNoAds.onClick.AddListener(() =>
        {
            //gọi hàm hiển thị popup tắt thông báo
        });
        btnStreak.onClick.AddListener(() =>
        {
            UIManager.Instance.OpenUI<CanvasStreakUI>();
        });
    }

    private void OnEnable()
    {
        txtStreak.text = StreakManager.Instance.GetCurrentStreak.ToString();
        StartConveyor();
        StartItemPool();
    }

    private void OnDisable()
    {
        StopConveyor();
        StopItemPool();
    }

    // ==========================================
    // LOGIC NỀN BĂNG CHUYỀN
    // ==========================================
    private void StartConveyor()
    {
        if (img1 == null || img2 == null) return;

        StopConveyor();

        float width = img1.rect.width;
        float duration = width / speed;

        img1.anchoredPosition = new Vector2(0f, img1.anchoredPosition.y);
        img2.anchoredPosition = new Vector2(width, img2.anchoredPosition.y);

        img1.DOAnchorPosX(-width, duration).SetEase(Ease.Linear).SetLoops(-1, LoopType.Restart).SetLink(img1.gameObject);
        img2.DOAnchorPosX(0f, duration).SetEase(Ease.Linear).SetLoops(-1, LoopType.Restart).SetLink(img2.gameObject);
    }

    private void StopConveyor()
    {
        if (img1 != null) img1.DOKill();
        if (img2 != null) img2.DOKill();
    }

    // ==========================================
    // LOGIC ITEM TÁI SỬ DỤNG (OBJECT POOLING)
    // ==========================================
    private void StartItemPool()
    {
        if (itemsList == null || itemsList.Length == 0) return;

        // 🔥 FIX 1: Giết ngay cái đồng hồ cũ (nếu có) để chặn lỗi đẻ đúp 2 luồng song song
        spawnTween?.Kill();

        // Giấu toàn bộ các item có trong list đi và ngắt animation của chúng
        foreach (RectTransform item in itemsList)
        {
            if (item != null)
            {
                item.DOKill();
                item.gameObject.SetActive(false);
            }
        }

        // 🔥 FIX 2: Không thả item ngay lập tức ở giây 0 nữa. 
        // Bắt item đầu tiên cũng phải chờ một khoảng random rồi mới chạy ra.
        float firstSpawnDelay = Random.Range(minSpawnTime, maxSpawnTime);
        spawnTween = DOVirtual.DelayedCall(firstSpawnDelay, SendNextItem);
    }

    private void SendNextItem()
    {
        // 1. Tìm xem trong rổ có những món nào đang "rảnh" (đang bị tắt hiển thị)
        List<RectTransform> availableItems = new List<RectTransform>();
        foreach (RectTransform item in itemsList)
        {
            if (item != null && !item.gameObject.activeSelf)
            {
                availableItems.Add(item);
            }
        }

        // 2. Nếu có món rảnh rỗi, bốc random 1 món đem lên băng chuyền
        if (availableItems.Count > 0)
        {
            int randomIndex = Random.Range(0, availableItems.Count);
            RectTransform chosenItem = availableItems[randomIndex];

            // Bật nó lên và đặt vào vạch xuất phát
            chosenItem.gameObject.SetActive(true);
            chosenItem.anchoredPosition = new Vector2(startPosX, chosenItem.anchoredPosition.y);

            // Ngắt Tween di chuyển cũ nếu có
            chosenItem.DOKill(true);

            // ========================================================
            // LOGIC XOAY RANDOM (CHỈ ĐẶT GÓC TĨNH)
            // ========================================================

            // Đặt góc xoay Z ban đầu ngẫu nhiên từ 0 đến 360 độ và ĐỨNG IM
            float randomStartAngle = Random.Range(0f, 360f);
            chosenItem.localEulerAngles = new Vector3(0, 0, randomStartAngle);

            // ========================================================
            // LOGIC DI CHUYỂN
            // ========================================================
            float distance = Mathf.Abs(startPosX - endPosX);
            float duration = distance / speed;

            // Cho chạy sang trái. Xong việc thì tự động giấu mình đi
            chosenItem.DOAnchorPosX(endPosX, duration)
                .SetEase(Ease.Linear)
                .SetLink(chosenItem.gameObject)
                .OnComplete(() =>
                {
                    // Khi di chuyển xong, tắt Object đi để biến nó thành hàng "rảnh rỗi" chờ lượt sau
                    chosenItem.gameObject.SetActive(false);
                });
        }

        // 4. Hẹn giờ để check và thả món tiếp theo
        float nextSpawnTime = Random.Range(minSpawnTime, maxSpawnTime);
        spawnTween?.Kill();
        spawnTween = DOVirtual.DelayedCall(nextSpawnTime, SendNextItem);
    }

    private void StopItemPool()
    {
        // Dừng đồng hồ đếm ngược
        spawnTween?.Kill();

        // Dừng tất cả các item đang chạy và giấu chúng đi
        if (itemsList != null)
        {
            foreach (RectTransform item in itemsList)
            {
                if (item != null)
                {
                    item.DOKill();
                    item.gameObject.SetActive(false);
                }
            }
        }
    }
}