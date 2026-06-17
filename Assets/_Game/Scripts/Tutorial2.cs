using UnityEngine;
using DG.Tweening;
using System.Collections; // Thêm thư viện này để dùng Coroutine

public class Tutorial2 : MonoBehaviour
{
    [Header("UI References")]
    public RectTransform hand;
    public RectTransform pos1;
    public RectTransform pos2;

    [Header("Settings")]
    public float moveDuration = 1.5f;

    void Start()
    {
        // SỬA: Không gọi trực tiếp nữa, mà gọi qua Coroutine để chờ UI load xong
        StartCoroutine(InitTutorialDelayed());
    }

    private IEnumerator InitTutorialDelayed()
    {
        // Chờ đến cuối Frame đầu tiên để Canvas tính toán xong toàn bộ tọa độ
        yield return new WaitForEndOfFrame();
        ShowTutorial();
    }

    public void ShowTutorial()
    {
        if (hand == null || pos1 == null || pos2 == null) return;

        hand.gameObject.SetActive(true);
        hand.DOKill();

        hand.position = pos1.position;

        hand.DOMove(pos2.position, moveDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Restart)
            .SetUpdate(true); // SỬA: Đưa SetUpdate(true) trở lại để chống lỗi Time.timeScale = 0
    }

    public void HideTutorial()
    {
        if (hand != null)
        {
            hand.DOKill();
            hand.gameObject.SetActive(false);
        }
    }

    private void OnDisable()
    {
        HideTutorial();
    }
}