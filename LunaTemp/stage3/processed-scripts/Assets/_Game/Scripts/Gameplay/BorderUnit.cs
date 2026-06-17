using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class BorderUnit : GameUnit
{
    public RectTransform rect;

    [Header("UI References")]
    public Image borderImage;
    public Image backgroundImage;

    [Header("Amount Select UI")]
    public RectTransform rectContainerAmoutSellect;
    public Image imgContainerAmoutSellect;
    public Text txtAmoutSellect;

    [Header("Wrong Pattern (Hoa văn sai)")]
    public Image wrongPatternImage;

    [Header("Win Effect References")]
    public RectTransform maskContainer;
    public Image fillCapImage;

    [Header("Settings")]
    [Range(0f, 1f)] public float backgroundAlpha = 0.3f;
    private int orderInLayerDefault = 3;

    private Canvas canvasBorder, canvasBackground, canvasMask;

    void Awake()
    {
        canvasBorder = borderImage.GetComponent<Canvas>();
        canvasBackground = backgroundImage.GetComponent<Canvas>();
        canvasMask = maskContainer.GetComponent<Canvas>();
        if (maskContainer != null)
        {
            maskContainer.anchorMin = Vector2.zero;
            maskContainer.anchorMax = Vector2.one;
            maskContainer.pivot = new Vector2(0.5f, 0.5f);
            maskContainer.sizeDelta = Vector2.zero;
            maskContainer.anchoredPosition = Vector2.zero;
        }

        if (fillCapImage != null)
        {
            fillCapImage.rectTransform.localScale = Vector3.zero;
            fillCapImage.gameObject.SetActive(false);
        }

        if (wrongPatternImage != null)
        {
            wrongPatternImage.gameObject.SetActive(false);
            wrongPatternImage.rectTransform.anchorMin = Vector2.zero;
            wrongPatternImage.rectTransform.anchorMax = Vector2.one;
            wrongPatternImage.rectTransform.pivot = new Vector2(0.5f, 0.5f);
            wrongPatternImage.rectTransform.sizeDelta = Vector2.zero;
            wrongPatternImage.rectTransform.anchoredPosition = Vector2.zero;
            wrongPatternImage.raycastTarget = false;
        }

        if (rectContainerAmoutSellect != null)
        {
            rectContainerAmoutSellect.gameObject.SetActive(false);
        }
    }

    public void Despawn()
    {
        ResetSorttingLayer();
        SimplePool.Despawn(this);
    }

    public void SetSorttingLayer()
    {
        // 🔥 FIX FOR PLAYWORKS: Ép buộc tất cả Canvas con phải overrideSorting = true
        // và thực hiện tắt/bật nhanh để kích hoạt cơ chế Force Redraw trên trình duyệt web.

        if (canvasBorder != null)
        {
            canvasBorder.overrideSorting = true;
            canvasBorder.sortingOrder = 8;
            canvasBorder.enabled = false; canvasBorder.enabled = true;
        }

        if (canvasBackground != null)
        {
            canvasBackground.overrideSorting = true;
            canvasBackground.sortingOrder = 6;
            canvasBackground.enabled = false; canvasBackground.enabled = true;
        }

        if (canvasMask != null)
        {
            canvasMask.overrideSorting = true;
            canvasMask.sortingOrder = 7;
            canvasMask.enabled = false; canvasMask.enabled = true;
        }
    }

    public void ResetSorttingLayer()
    {
        // 🔥 FIX FOR PLAYWORKS: Trả các lớp về trạng thái mặc định an toàn khi quay lại Pool
        if (canvasBorder != null)
        {
            canvasBorder.overrideSorting = true;
            canvasBorder.sortingOrder = orderInLayerDefault;
            canvasBorder.enabled = false; canvasBorder.enabled = true;
        }

        if (canvasBackground != null)
        {
            canvasBackground.sortingOrder = 0;
            canvasBackground.overrideSorting = false; // Trả quyền quản lý sắp xếp về cho Canvas tổng của lưới Grid
            canvasBackground.enabled = false; canvasBackground.enabled = true;
        }

        if (canvasMask != null)
        {
            canvasMask.overrideSorting = true;
            canvasMask.sortingOrder = 3;
            canvasMask.enabled = false; canvasMask.enabled = true;
        }

        // ==========================================================
        // KHU VỰC RESET TÀI NGUYÊN (Giữ nguyên logic DOTween của bạn)
        // ==========================================================
        if (rect != null)
        {
            rect.DOKill();
            rect.localScale = Vector3.one;
        }

        if (borderImage != null) borderImage.DOKill();
        if (backgroundImage != null) backgroundImage.DOKill();

        if (fillCapImage != null)
        {
            fillCapImage.DOKill();
            fillCapImage.rectTransform.DOKill();
            Color resetColor = fillCapImage.color; resetColor.a = 0f; fillCapImage.color = resetColor;
            fillCapImage.rectTransform.sizeDelta = Vector2.zero;
            fillCapImage.rectTransform.localScale = Vector3.zero;
            fillCapImage.gameObject.SetActive(false);
        }

        if (wrongPatternImage != null)
        {
            wrongPatternImage.DOKill();
            wrongPatternImage.gameObject.SetActive(false);
            Color resetColor = wrongPatternImage.color; resetColor.a = 1f; wrongPatternImage.color = resetColor;
        }

        if (rectContainerAmoutSellect != null)
        {
            rectContainerAmoutSellect.DOKill();
            rectContainerAmoutSellect.gameObject.SetActive(false);
        }
    }
    public void SetWrongPattern(bool active)
    {
        if (wrongPatternImage == null) return;
        wrongPatternImage.gameObject.SetActive(active);
    }

    public void PlayWinEffect()
    {
        if (fillCapImage != null && maskContainer != null)
        {
            if (borderImage != null)
            {
                Color capColor = borderImage.color;
                capColor.a = 0f;
                fillCapImage.color = capColor;
            }

            int randomCorner = Random.Range(0, 4);
            Vector2 targetAnchor = Vector2.zero;

            switch (randomCorner)
            {
                case 0: targetAnchor = new Vector2(0f, 0f); break;
                case 1: targetAnchor = new Vector2(1f, 0f); break;
                case 2: targetAnchor = new Vector2(0f, 1f); break;
                case 3: targetAnchor = new Vector2(1f, 1f); break;
            }

            RectTransform capRect = fillCapImage.rectTransform;
            capRect.anchorMin = targetAnchor;
            capRect.anchorMax = targetAnchor;
            capRect.pivot = new Vector2(0.5f, 0.5f);
            capRect.anchoredPosition = Vector2.zero;

            fillCapImage.gameObject.SetActive(true);
            fillCapImage.DOKill();
            capRect.DOKill();

            float w = rect.rect.width;
            float h = rect.rect.height;

            if (w == 0 || h == 0)
            {
                w = rect.sizeDelta.x;
                h = rect.sizeDelta.y;
            }

            float diagonal = Mathf.Sqrt(w * w + h * h);
            float requiredDiameter = diagonal * 12f;

            capRect.sizeDelta = new Vector2(requiredDiameter, requiredDiameter);
            capRect.localScale = Vector3.zero;

            capRect.DOScale(Vector3.one, 4f).SetEase(Ease.Linear);
            fillCapImage.DOFade(1f, 1f).SetEase(Ease.Linear);
        }
    }
}