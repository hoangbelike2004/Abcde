using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class CanvasStreakUI : UICanvas
{
    [SerializeField] Button btnPlay, btnExit;
    [SerializeField] private TextMeshProUGUI txtStreakCount;

    [Tooltip("Mảng chứa 7 cục icon ngày từ Chủ Nhật (0) đến Thứ 7 (6)")]
    [SerializeField] private Image[] dailyIcons;

    [SerializeField] private Sprite iconActive;   // Hình ngọn lửa (Nền cam)
    [SerializeField] private Sprite iconInactive; // Hình tròn xám (Nền xám)

    void Start()
    {
        btnPlay.onClick.AddListener(() =>
        {
            // SoundManager.Instance.PlaySound(eAudioName.Audio_Button);
            // GameController.Instance.SetState(StateGame.GamePlay);
            // UIManager.Instance.CloseUI<CanvasMenu>(0);
            // UIManager.Instance.CloseUI<CanvasHome>(0);
            // UIManager.Instance.CloseUI<CanvasStreakUI>(0);
        });

        btnExit.onClick.AddListener(() =>
        {
            UIManager.Instance.CloseUI<CanvasStreakUI>(0);
        });
    }

    private void OnEnable()
    {
        RefreshUI();
    }

    public void RefreshUI()
    {
        // Lấy toàn bộ dữ liệu đã được tính toán từ Manager
        StreakManager.StreakUIData data = StreakManager.Instance.GetStreakDataForUI();

        // 1. Gán con số tổng
        txtStreakCount.text = data.streakCount.ToString();

        // 2. Duyệt qua 7 ngày trong tuần để thay đổi Icon
        for (int i = 0; i < 7; i++)
        {
            if (dailyIcons[i] != null)
            {
                bool isToday = (i == data.todayIndex);
                bool isLogged = data.weekDaysStatus[i];

                // Lấy GameObject con (ngọn lửa/dấu tick)
                GameObject objCheck = dailyIcons[i].transform.GetChild(0).gameObject;

                if (isLogged)
                {
                    // Trường hợp 1: Đã hoàn thành điểm danh
                    // -> Nền cam, BẬT thằng con
                    dailyIcons[i].sprite = iconActive;
                    objCheck.SetActive(true);
                }
                else if (isToday)
                {
                    // Trường hợp 2: Hôm nay nhưng CHƯA chơi
                    // -> Nền cam (để vẫy gọi), TẮT thằng con
                    dailyIcons[i].sprite = iconActive;
                    objCheck.SetActive(false);
                }
                else
                {
                    // Trường hợp 3: Bỏ lỡ hoặc chưa tới ngày
                    // -> Nền xám, TẮT thằng con
                    dailyIcons[i].sprite = iconInactive;
                    objCheck.SetActive(false);
                }

                // Phóng to làm nổi bật cái icon của ngày HÔM NAY
                if (isToday)
                {
                    dailyIcons[i].rectTransform.localScale = new Vector3(1.2f, 1.2f, 1f);
                }
                else
                {
                    dailyIcons[i].rectTransform.localScale = Vector3.one;
                }
            }
        }
    }
}