using System;
using UnityEngine;

public class StreakManager : Singleton<StreakManager>
{
    private const string PREF_STREAK_COUNT = "Streak_Count";
    private const string PREF_LAST_LOGIN = "Streak_LastLogin";

    private int currentStreak = 0;
    private DateTime lastLoginDate;

    // Cấu trúc dữ liệu đóng gói để ném sang cho UI hiển thị
    public struct StreakUIData
    {
        public int streakCount;
        public bool[] weekDaysStatus; // Mảng 7 phần tử: 0 = Chủ Nhật, 1 = Thứ 2... 6 = Thứ 7
        public int todayIndex;        // Chỉ mục của ngày hôm nay (0-6) để UI biết đang ở ngày nào
    }

    void Awake()
    {
        LoadData();
    }

    // ==========================================
    // LOGIC LOAD & SAVE DATA
    // ==========================================
    private void LoadData()
    {
        currentStreak = PlayerPrefs.GetInt(PREF_STREAK_COUNT, 0);

        string lastLoginString = PlayerPrefs.GetString(PREF_LAST_LOGIN, "");
        if (!string.IsNullOrEmpty(lastLoginString))
        {
            DateTime.TryParse(lastLoginString, out lastLoginDate);
        }
        else
        {
            lastLoginDate = DateTime.MinValue;
        }
    }

    private void SaveData()
    {
        PlayerPrefs.SetInt(PREF_STREAK_COUNT, currentStreak);
        PlayerPrefs.SetString(PREF_LAST_LOGIN, lastLoginDate.ToString("yyyy-MM-dd"));
        PlayerPrefs.Save();
    }

    // ==========================================
    // LOGIC KIỂM TRA CHUỖI (GỌI KHI MỞ GAME)
    // ==========================================
    public void CheckAndUpdateStreak()
    {
        DateTime today = DateTime.Now.Date;

        if (currentStreak == 0 || lastLoginDate == DateTime.MinValue)
        {
            // Lần đầu tiên chơi game
            currentStreak = 1;
        }
        else
        {
            TimeSpan timePassed = today - lastLoginDate;

            if (timePassed.Days == 1)
            {
                // Đăng nhập liên tiếp ngày hôm sau
                currentStreak++;
            }
            else if (timePassed.Days > 1)
            {
                // Đã bỏ lỡ ít nhất 1 ngày -> Hủy chuỗi, làm lại từ đầu
                currentStreak = 1;
            }
            // Nếu timePassed.Days == 0 tức là đã đăng nhập hôm nay rồi -> Không làm gì cả
        }

        lastLoginDate = today;
        SaveData();
    }

    // ==========================================
    // HÀM LẤY DỮ LIỆU ĐỂ HIỂN THỊ LÊN UI (TÍCH HỢP DỰ ĐOÁN)
    // ==========================================
    public StreakUIData GetStreakDataForUI()
    {
        DateTime today = DateTime.Now.Date;

        // --- BƯỚC 1: KIỂM TRA NGẦM (PREVIEW) ---
        // Tạo một biến tạm để vẽ UI, tránh làm thay đổi data gốc khi chưa chơi xong
        int displayStreak = currentStreak;

        if (lastLoginDate != DateTime.MinValue)
        {
            TimeSpan timePassed = today - lastLoginDate;

            // Nếu đã bỏ lỡ ít nhất 1 ngày -> Chuỗi UI hiển thị phải đứt (về 0)
            if (timePassed.Days > 1)
            {
                displayStreak = 0;
            }
        }

        // --- BƯỚC 2: TÍNH TOÁN HIỂN THỊ ---
        int currentDayOfWeek = (int)today.DayOfWeek;
        DateTime startOfWeek = today.AddDays(-currentDayOfWeek);

        // Suy ra ngày bắt đầu chuỗi dựa trên biến tạm displayStreak
        DateTime streakStartDate = DateTime.MinValue;
        if (displayStreak > 0)
        {
            streakStartDate = lastLoginDate.AddDays(-displayStreak + 1);
        }

        bool[] status = new bool[7];

        for (int i = 0; i < 7; i++)
        {
            DateTime dayToCheck = startOfWeek.AddDays(i);

            // Chỉ bật sáng ngày nếu chuỗi chưa đứt (displayStreak > 0) 
            // và ngày đó nằm trong khoảng đã điểm danh
            if (displayStreak > 0 && dayToCheck >= streakStartDate && dayToCheck <= lastLoginDate)
            {
                status[i] = true;
            }
            else
            {
                status[i] = false; // Tắt (màu xám)
            }
        }

        return new StreakUIData
        {
            streakCount = displayStreak,
            weekDaysStatus = status,
            todayIndex = currentDayOfWeek
        };
    }

    // ==========================================
    // CẬP NHẬT PROPERTY LẤY STREAK (Để text hiển thị số trên UI cũng chuẩn)
    // ==========================================
    public int GetCurrentStreak
    {
        get
        {
            // Nếu các script UI khác hỏi "Streak hiện tại là bao nhiêu?" trước khi chơi,
            // ta cũng phải dự đoán và trả về 0 nếu đã lỡ ngày, thay vì trả về giá trị cũ.
            if (lastLoginDate != DateTime.MinValue && (DateTime.Now.Date - lastLoginDate).Days > 1)
            {
                return 0; // (Hoặc trả về 1 nếu UI của bạn quy định ngày đầu đứt chuỗi là 1)
            }
            return currentStreak;
        }
    }
}