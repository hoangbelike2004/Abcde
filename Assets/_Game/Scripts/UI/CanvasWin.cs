using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using Spine.Unity;

public class CanvasWin : UICanvas
{
    [SerializeField] private Text txtWinLevel;
    [SerializeField] private List<ParticleSystem> winParticles;
    //[SerializeField] Button btnNextLevel;
    [SerializeField] SkeletonGraphic skeletonGraphic;

    private List<string> winMessages = new List<string>()
    {
        "PERFECT",
        "EXCELLENT",
        "AWESOME",
        "GREAT JOB",
        "BRILLIANT",
        "AMAZING",
        "VICTORY"
    };

    // 🔥 THÊM MỚI: Mảng chứa tên các animation
    private readonly string[] spineWinAnims = { "action1", "action2", "action3" };

    private Coroutine winParticleCoroutine;

    void Start()
    {
        // btnNextLevel.onClick.AddListener(() =>
        // {
        //     GameController.Instance.SetState(StateGame.GamePlay);
        //     UIManager.Instance.CloseUI<CanvasWin>(0);
        // });
    }

    /// <summary>
    /// Hàm này được gọi khi bạn muốn hiển thị màn hình Win
    /// </summary>
    public void ShowWinEffect(string message = "")
    {
        // Luôn dọn dẹp trạng thái cũ trước khi bật màn mới
        ResetWinEffect();

        // 🔥 THÊM MỚI: Random và chạy Animation Spine
        if (skeletonGraphic != null && skeletonGraphic.AnimationState != null)
        {
            int randomAnimIndex = Random.Range(0, spineWinAnims.Length);
            string chosenAnim = spineWinAnims[randomAnimIndex];

            // SetAnimation (track 0, tên anim, loop = true)
            skeletonGraphic.AnimationState.SetAnimation(0, chosenAnim, true);
        }

        if (txtWinLevel == null) return;

        if (string.IsNullOrEmpty(message))
        {
            int randomIndex = Random.Range(0, winMessages.Count);
            message = winMessages[randomIndex];
        }

        txtWinLevel.text = message;
        txtWinLevel.gameObject.SetActive(true);

        // Đặt trạng thái ban đầu để chuẩn bị phóng to
        txtWinLevel.transform.localScale = Vector3.zero;
        //txtWinLevel.alpha = 0f;

        // Chạy hiệu ứng Text
        txtWinLevel.transform.DOScale(Vector3.one, 0.6f).SetEase(Ease.OutBack).SetUpdate(true);
        //txtWinLevel.DOFade(1f, 0.4f).SetUpdate(true);

        // Chạy hiệu ứng Particle
        PlayWinParticles();
    }

    private void PlayWinParticles()
    {
        if (winParticleCoroutine != null)
        {
            StopCoroutine(winParticleCoroutine);
        }
        winParticleCoroutine = StartCoroutine(PlayWinParticlesRoutine());
    }

    private IEnumerator PlayWinParticlesRoutine()
    {
        if (winParticles == null || winParticles.Count == 0) yield break;

        for (int i = 0; i < winParticles.Count; i++)
        {
            if (winParticles[i] != null)
            {
                winParticles[i].Play();
            }
            yield return new WaitForSeconds(0.5f);
        }
    }

    /// <summary>
    /// Dọn dẹp Text, xóa Particle cũ và reset Spine
    /// </summary>
    private void ResetWinEffect()
    {
        if (txtWinLevel != null)
        {
            txtWinLevel.transform.DOKill();
            txtWinLevel.DOKill();
            txtWinLevel.gameObject.SetActive(false);
        }

        if (winParticleCoroutine != null)
        {
            StopCoroutine(winParticleCoroutine);
            winParticleCoroutine = null;
        }

        if (winParticles != null)
        {
            foreach (var particle in winParticles)
            {
                if (particle != null)
                {
                    particle.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
                }
            }
        }

        // 🔥 THÊM MỚI: Reset lại Spine về trạng thái gốc khi ẩn UI đi
        if (skeletonGraphic != null && skeletonGraphic.AnimationState != null)
        {
            skeletonGraphic.AnimationState.ClearTracks();
            skeletonGraphic.Skeleton.SetToSetupPose();
        }
    }

    // Tự động dọn dẹp rác khi Canvas này bị đóng/ẩn đi
    private void OnDisable()
    {
        ResetWinEffect();
    }
}