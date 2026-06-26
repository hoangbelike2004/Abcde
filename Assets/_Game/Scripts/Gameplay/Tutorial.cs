using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using System.Collections; // Bắt buộc thêm thư viện này để dùng DOTween

// 1. CLASS LƯU TRỮ DỮ LIỆU CỦA TỪNG BƯỚC
[System.Serializable]
public class TutorialStep
{
    [Tooltip("Danh sách các ô Cell cần làm nổi bật ở bước này")]
    public List<Cell> targetCells = new List<Cell>();

    [Tooltip("Vị trí bắt đầu của bàn tay")]
    public RectTransform pos1;

    [Tooltip("Vị trí kết thúc của bàn tay")]
    public RectTransform pos2;
}

// 2. CLASS QUẢN LÝ TỔNG (Gắn vào một GameObject TutorialManager trên Scene)
public class Tutorial : MonoBehaviour
{
    [Header("Tutorial Data")]
    public List<TutorialStep> tutorialSteps = new List<TutorialStep>(); // Danh sách các bước theo thứ tự

    [Header("UI Components")]
    public RectTransform rectHand;
    public GameObject overlay;

    // Biến theo dõi đang ở bước thứ mấy (-1 nghĩa là chưa bắt đầu)
    private int currentStepIndex = -1;

    IEnumerator Start()
    {
        yield return new WaitForEndOfFrame(); // Đợi một chút để đảm bảo tất cả các component đã được khởi tạo
        StartTutorial();
    }

    /// <summary>
    /// Gọi hàm này khi bắt đầu màn chơi có Tutorial
    /// </summary>
    public void StartTutorial()
    {
        currentStepIndex = -1;

        if (overlay != null) overlay.SetActive(true);
        if (rectHand != null) rectHand.gameObject.SetActive(true);
        // Tự động gọi NextStep để kích hoạt luôn bước đầu tiên (Index 0)
        NextStep();
    }

    /// <summary>
    /// Gọi hàm này mỗi khi người chơi làm xong 1 thao tác (Ví dụ: Kéo thả Cell đúng luật)
    /// Nó sẽ tự động tắt Cell cũ, tăng bước và bật Cell mới.
    /// </summary>
    public void NextStep()
    {
        // 1. DỌN DẸP BƯỚC CŨ: Deactive các Cell của bước vừa làm xong
        if (currentStepIndex >= 0 && currentStepIndex < tutorialSteps.Count)
        {
            List<Cell> oldCells = tutorialSteps[currentStepIndex].targetCells;
            for (int i = 0; i < oldCells.Count; i++)
            {

                if (oldCells[i] != null) oldCells[i].OnDeactiveTutorial();
            }
        }

        // 2. TĂNG GIÁ TRỊ BƯỚC
        currentStepIndex++;

        // 3. KIỂM TRA BƯỚC MỚI: Xem còn bước nào để chạy tiếp không?
        if (currentStepIndex < tutorialSteps.Count)
        {
            // Vẫn còn bước -> Active các Cell của bước mới lên
            TutorialStep currentStep = tutorialSteps[currentStepIndex];
            List<Cell> newCells = currentStep.targetCells;
            for (int i = 0; i < newCells.Count; i++)
            {
                if (newCells[i] != null)
                {
                    newCells[i].OnActiveTutorial();
                }
            }

            // ==========================================
            // LOGIC DI CHUYỂN BÀN TAY BẰNG DOTWEEN
            // ==========================================
            if (rectHand != null)
            {
                // Dừng toàn bộ các hiệu ứng DOTween cũ đang chạy trên bàn tay
                rectHand.DOKill();

                if (currentStep.pos1 != null && currentStep.pos2 != null)
                {
                    rectHand.gameObject.SetActive(true);

                    // Đặt tay về vị trí bắt đầu (pos1)
                    rectHand.position = currentStep.pos1.position;

                    // Di chuyển tới pos2 trong 1 giây, lặp lại vô tận từ pos1 -> pos2
                    rectHand.DOMove(currentStep.pos2.position, 1f)
                            .SetEase(Ease.Linear)
                            .SetLoops(-1, LoopType.Restart);
                }
                else
                {
                    // Nếu bước này không set tọa độ tay thì tạm ẩn đi
                    rectHand.gameObject.SetActive(false);
                }
            }
        }
        else
        {
            // Hết mảng -> Đã hoàn thành toàn bộ khóa huấn luyện
            EndTutorial();
        }
    }

    /// <summary>
    /// Kết thúc Tutorial, ẩn giao diện
    /// </summary>
    private void EndTutorial()
    {
        if (overlay != null) overlay.SetActive(false);

        if (rectHand != null)
        {
            rectHand.DOKill(); // Bắt buộc kill Tween trước khi ẩn để tránh lỗi ngầm
            rectHand.gameObject.SetActive(false);
        }

        Debug.Log("[Tutorial] Tuyệt vời! Đã hoàn thành xong toàn bộ Tutorial.");
    }

    void OnEnable()
    {
        Observer.OnNextStepTutorial += NextStep;
    }
    void OnDisable()
    {
        Observer.OnNextStepTutorial -= NextStep;
    }
}