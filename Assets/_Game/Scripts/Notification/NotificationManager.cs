using System;
using UnityEngine;
#if UNITY_ANDROID
using Unity.Notifications.Android;
#endif

public class NotificationManager : MonoBehaviour
{
    public static NotificationManager Instance;

    private const string CHANNEL_ID = "game_reminder_channel";
    private const string FIRST_PLAY_KEY = "FirstPlayDate";

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
            InitializeNotifications();
            CheckFirstPlay();
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void CheckFirstPlay()
    {
        // If it's the first time opening the game, save the current date and time
        if (!PlayerPrefs.HasKey(FIRST_PLAY_KEY))
        {
            PlayerPrefs.SetString(FIRST_PLAY_KEY, DateTime.Now.ToString("O")); // Save in ISO 8601 format
            PlayerPrefs.Save();
        }
    }

    private void InitializeNotifications()
    {
#if UNITY_ANDROID
        var channel = new AndroidNotificationChannel()
        {
            Id = CHANNEL_ID,
            Name = "Game Reminders",
            Importance = Importance.Default,
            Description = "Notifications to remind the player to return to the game"
        };
        AndroidNotificationCenter.RegisterNotificationChannel(channel);
#endif
    }

    void OnApplicationPause(bool isPaused)
    {
        if (isPaused)
        {
            // Player left the game -> Schedule the whole chain of notifications
            ScheduleNotifications();
        }
        else
        {
            // Player returned -> Cancel all pending notifications to avoid spam
#if UNITY_ANDROID
            AndroidNotificationCenter.CancelAllNotifications();
#endif
        }
    }

    private void ScheduleNotifications()
    {
#if UNITY_ANDROID
        AndroidNotificationCenter.CancelAllNotifications();

        // Read the first play date
        DateTime firstPlayDate = DateTime.Parse(PlayerPrefs.GetString(FIRST_PLAY_KEY, DateTime.Now.ToString("O")));
        bool isFirstDay = (DateTime.Now - firstPlayDate).TotalHours <= 24;

        int notificationId = 1; // Use a sequential ID to send multiple independent notifications

        // ==========================================
        // 1. FIRST DAY: Notify every 6 hours
        // ==========================================
        if (isFirstDay)
        {
            // Schedule 4 milestones: 6h, 12h, 18h, 24h
            for (int i = 1; i <= 4; i++)
            {
                ScheduleSingleNotification(
                    id: notificationId++,
                    title: "The puzzles are waiting! 🧩",
                    text: "Where did you go? Come back and solve some puzzles!",
                    fireTime: DateTime.Now.AddHours(6 * i)
                );
            }
        }

        // ==========================================
        // 2. FOLLOWING DAYS: Cycle of 2 days, 3 days, 7 days repeating
        // ==========================================
        // We calculate the cumulative days from the current time to create the repeating chain:
        // Cycle 1: +2 days, +5 days (2+3), +12 days (5+7)
        // Cycle 2: +14 days (12+2), +17 days (14+3), +24 days (17+7)
        // Cycle 3: +26 days (24+2), +29 days (26+3), +36 days (29+7)
        int[] sequenceDays = { 2, 5, 12, 14, 17, 24, 26, 29, 36 };

        for (int i = 0; i < sequenceDays.Length; i++)
        {
            ScheduleSingleNotification(
                id: notificationId++,
                title: "The animals miss you! 🐾",
                text: "It's been a while! Jump back into the game to complete the challenges!",
                fireTime: DateTime.Now.AddDays(sequenceDays[i])
            );
        }
#endif
    }

    private void ScheduleSingleNotification(int id, string title, string text, DateTime fireTime)
    {
#if UNITY_ANDROID
        var notification = new AndroidNotification()
        {
            Title = title,
            Text = text,
            FireTime = fireTime,
            SmallIcon = "icon_small",
            LargeIcon = "icon_large"
        };

        // It is mandatory to use SendNotificationWithExplicitID to schedule multiple notifications at once
        AndroidNotificationCenter.SendNotificationWithExplicitID(notification, CHANNEL_ID, id);
#endif
    }
}