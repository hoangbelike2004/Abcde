using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ItemShop : MonoBehaviour
{
    [SerializeField] int amoutHint;
    [SerializeField] float price;
    [SerializeField] TextMeshProUGUI txtAmountHint, txtPrice;
    [SerializeField] Button btnBuy;
    void Start()
    {
        txtAmountHint.text = "x" + amoutHint.ToString();

        // Ví dụ: hiển thị "$1,000" (N0 là định dạng số có dấu phẩy hàng nghìn)
        txtPrice.text = $"${price:N0}";

        // Hoặc nếu muốn hiển thị "1.000 đ"
        // txtPrice.text = $"{price:N0} đ";

        btnBuy.onClick.AddListener(() =>
        {
            GameController.Instance.AddHint(amoutHint);
        });
    }
}
