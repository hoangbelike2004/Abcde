using UnityEngine;
using UnityEngine.Events;

public static class Observer
{
    public static UnityAction OnUseItemHint;

    public static UnityAction OnWinLevel;

    public static UnityAction OnResetLevel;

    public static UnityAction OnNextStepTutorial;

    public static UnityAction OnStopTutorialShape;

    public static UnityAction<int> OnSubmitScoreFireBase;
}
