using UnityEngine;

public class Level : MonoBehaviour
{
    private GridManager gridManager;
    private RectTransform rect;
    void Awake()
    {
        gridManager = GetComponent<GridManager>();
        rect = GetComponent<RectTransform>();
    }
    public void SetData(Transform parent)
    {
        transform.SetParent(parent);
        transform.localScale = Vector3.one;
        rect.anchoredPosition = Vector3.zero;
    }
    public void Despawn()
    {
        gridManager.ClearAllBorders();
    }
}
