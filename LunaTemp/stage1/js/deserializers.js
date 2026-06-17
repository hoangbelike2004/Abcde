var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.JointSpring' )
  var i2927 = data
  i2926.spring = i2927[0]
  i2926.damper = i2927[1]
  i2926.targetPosition = i2927[2]
  return i2926
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2928 = root || request.c( 'UnityEngine.JointMotor' )
  var i2929 = data
  i2928.m_TargetVelocity = i2929[0]
  i2928.m_Force = i2929[1]
  i2928.m_FreeSpin = i2929[2]
  return i2928
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2930 = root || request.c( 'UnityEngine.JointLimits' )
  var i2931 = data
  i2930.m_Min = i2931[0]
  i2930.m_Max = i2931[1]
  i2930.m_Bounciness = i2931[2]
  i2930.m_BounceMinVelocity = i2931[3]
  i2930.m_ContactDistance = i2931[4]
  i2930.minBounce = i2931[5]
  i2930.maxBounce = i2931[6]
  return i2930
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.JointDrive' )
  var i2933 = data
  i2932.m_PositionSpring = i2933[0]
  i2932.m_PositionDamper = i2933[1]
  i2932.m_MaximumForce = i2933[2]
  i2932.m_UseAcceleration = i2933[3]
  return i2932
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2934 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2935 = data
  i2934.m_Spring = i2935[0]
  i2934.m_Damper = i2935[1]
  return i2934
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2936 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2937 = data
  i2936.m_Limit = i2937[0]
  i2936.m_Bounciness = i2937[1]
  i2936.m_ContactDistance = i2937[2]
  return i2936
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2938 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2939 = data
  i2938.m_ExtremumSlip = i2939[0]
  i2938.m_ExtremumValue = i2939[1]
  i2938.m_AsymptoteSlip = i2939[2]
  i2938.m_AsymptoteValue = i2939[3]
  i2938.m_Stiffness = i2939[4]
  return i2938
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2941 = data
  i2940.m_LowerAngle = i2941[0]
  i2940.m_UpperAngle = i2941[1]
  return i2940
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2942 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2943 = data
  i2942.m_MotorSpeed = i2943[0]
  i2942.m_MaximumMotorTorque = i2943[1]
  return i2942
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2944 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2945 = data
  i2944.m_DampingRatio = i2945[0]
  i2944.m_Frequency = i2945[1]
  i2944.m_Angle = i2945[2]
  return i2944
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2947 = data
  i2946.m_LowerTranslation = i2947[0]
  i2946.m_UpperTranslation = i2947[1]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.width = i2949[1]
  i2948.height = i2949[2]
  i2948.mipmapCount = i2949[3]
  i2948.anisoLevel = i2949[4]
  i2948.filterMode = i2949[5]
  i2948.hdr = !!i2949[6]
  i2948.format = i2949[7]
  i2948.wrapMode = i2949[8]
  i2948.alphaIsTransparency = !!i2949[9]
  i2948.alphaSource = i2949[10]
  i2948.graphicsFormat = i2949[11]
  i2948.sRGBTexture = !!i2949[12]
  i2948.desiredColorSpace = i2949[13]
  i2948.wrapU = i2949[14]
  i2948.wrapV = i2949[15]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2950 = root || new pc.UnityMaterial()
  var i2951 = data
  i2950.name = i2951[0]
  request.r(i2951[1], i2951[2], 0, i2950, 'shader')
  i2950.renderQueue = i2951[3]
  i2950.enableInstancing = !!i2951[4]
  var i2953 = i2951[5]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2953[i + 0]) );
  }
  i2950.floatParameters = i2952
  var i2955 = i2951[6]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2955[i + 0]) );
  }
  i2950.colorParameters = i2954
  var i2957 = i2951[7]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2957[i + 0]) );
  }
  i2950.vectorParameters = i2956
  var i2959 = i2951[8]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2959[i + 0]) );
  }
  i2950.textureParameters = i2958
  var i2961 = i2951[9]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2961[i + 0]) );
  }
  i2950.materialFlags = i2960
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2965 = data
  i2964.name = i2965[0]
  i2964.value = i2965[1]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2969 = data
  i2968.name = i2969[0]
  i2968.value = new pc.Color(i2969[1], i2969[2], i2969[3], i2969[4])
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2973 = data
  i2972.name = i2973[0]
  i2972.value = new pc.Vec4( i2973[1], i2973[2], i2973[3], i2973[4] )
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2977 = data
  i2976.name = i2977[0]
  request.r(i2977[1], i2977[2], 0, i2976, 'value')
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2981 = data
  i2980.name = i2981[0]
  i2980.enabled = !!i2981[1]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2983 = data
  i2982.position = new pc.Vec3( i2983[0], i2983[1], i2983[2] )
  i2982.scale = new pc.Vec3( i2983[3], i2983[4], i2983[5] )
  i2982.rotation = new pc.Quat(i2983[6], i2983[7], i2983[8], i2983[9])
  return i2982
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i2984 = root || request.c( 'PoolManager' )
  var i2985 = data
  var i2987 = i2985[0]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('PoolAmount', i2987[i + 0]) );
  }
  i2984.poolAmounts = i2986
  return i2984
}

Deserializers["PoolAmount"] = function (request, data, root) {
  var i2990 = root || request.c( 'PoolAmount' )
  var i2991 = data
  i2990._name = i2991[0]
  i2990.amount = i2991[1]
  request.r(i2991[2], i2991[3], 0, i2990, 'prefab')
  request.r(i2991[4], i2991[5], 0, i2990, 'parent')
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2993 = data
  i2992.name = i2993[0]
  i2992.tagId = i2993[1]
  i2992.enabled = !!i2993[2]
  i2992.isStatic = !!i2993[3]
  i2992.layer = i2993[4]
  return i2992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2995 = data
  i2994.pivot = new pc.Vec2( i2995[0], i2995[1] )
  i2994.anchorMin = new pc.Vec2( i2995[2], i2995[3] )
  i2994.anchorMax = new pc.Vec2( i2995[4], i2995[5] )
  i2994.sizeDelta = new pc.Vec2( i2995[6], i2995[7] )
  i2994.anchoredPosition3D = new pc.Vec3( i2995[8], i2995[9], i2995[10] )
  i2994.rotation = new pc.Quat(i2995[11], i2995[12], i2995[13], i2995[14])
  i2994.scale = new pc.Vec3( i2995[15], i2995[16], i2995[17] )
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2997 = data
  i2996.cullTransparentMesh = !!i2997[0]
  return i2996
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.UI.Image' )
  var i2999 = data
  request.r(i2999[0], i2999[1], 0, i2998, 'm_Sprite')
  i2998.m_Type = i2999[2]
  i2998.m_PreserveAspect = !!i2999[3]
  i2998.m_FillCenter = !!i2999[4]
  i2998.m_FillMethod = i2999[5]
  i2998.m_FillAmount = i2999[6]
  i2998.m_FillClockwise = !!i2999[7]
  i2998.m_FillOrigin = i2999[8]
  i2998.m_UseSpriteMesh = !!i2999[9]
  i2998.m_PixelsPerUnitMultiplier = i2999[10]
  request.r(i2999[11], i2999[12], 0, i2998, 'm_Material')
  i2998.m_Maskable = !!i2999[13]
  i2998.m_Color = new pc.Color(i2999[14], i2999[15], i2999[16], i2999[17])
  i2998.m_RaycastTarget = !!i2999[18]
  i2998.m_RaycastPadding = new pc.Vec4( i2999[19], i2999[20], i2999[21], i2999[22] )
  return i2998
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3001 = data
  i3000.m_IgnoreLayout = !!i3001[0]
  i3000.m_MinWidth = i3001[1]
  i3000.m_MinHeight = i3001[2]
  i3000.m_PreferredWidth = i3001[3]
  i3000.m_PreferredHeight = i3001[4]
  i3000.m_FlexibleWidth = i3001[5]
  i3000.m_FlexibleHeight = i3001[6]
  i3000.m_LayoutPriority = i3001[7]
  return i3000
}

Deserializers["BorderUnit"] = function (request, data, root) {
  var i3002 = root || request.c( 'BorderUnit' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'rect')
  request.r(i3003[2], i3003[3], 0, i3002, 'borderImage')
  request.r(i3003[4], i3003[5], 0, i3002, 'backgroundImage')
  request.r(i3003[6], i3003[7], 0, i3002, 'rectContainerAmoutSellect')
  request.r(i3003[8], i3003[9], 0, i3002, 'imgContainerAmoutSellect')
  request.r(i3003[10], i3003[11], 0, i3002, 'txtAmoutSellect')
  request.r(i3003[12], i3003[13], 0, i3002, 'wrongPatternImage')
  request.r(i3003[14], i3003[15], 0, i3002, 'maskContainer')
  request.r(i3003[16], i3003[17], 0, i3002, 'fillCapImage')
  i3002.backgroundAlpha = i3003[18]
  i3002.poolType = i3003[19]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3005 = data
  i3004.planeDistance = i3005[0]
  i3004.referencePixelsPerUnit = i3005[1]
  i3004.isFallbackOverlay = !!i3005[2]
  i3004.renderMode = i3005[3]
  i3004.renderOrder = i3005[4]
  i3004.sortingLayerName = i3005[5]
  i3004.sortingOrder = i3005[6]
  i3004.scaleFactor = i3005[7]
  request.r(i3005[8], i3005[9], 0, i3004, 'worldCamera')
  i3004.overrideSorting = !!i3005[10]
  i3004.pixelPerfect = !!i3005[11]
  i3004.targetDisplay = i3005[12]
  i3004.overridePixelPerfect = !!i3005[13]
  i3004.enabled = !!i3005[14]
  return i3004
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3007 = data
  i3006.m_ShowMaskGraphic = !!i3007[0]
  return i3006
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3009 = data
  i3008.m_IgnoreReversedGraphics = !!i3009[0]
  i3008.m_BlockingObjects = i3009[1]
  i3008.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3009[2] )
  return i3008
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i3011 = data
  i3010.m_Padding = new pc.Vec4( i3011[0], i3011[1], i3011[2], i3011[3] )
  i3010.m_Softness = new pc.Vec2( i3011[4], i3011[5] )
  return i3010
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.UI.Text' )
  var i3013 = data
  i3012.m_FontData = request.d('UnityEngine.UI.FontData', i3013[0], i3012.m_FontData)
  i3012.m_Text = i3013[1]
  request.r(i3013[2], i3013[3], 0, i3012, 'm_Material')
  i3012.m_Maskable = !!i3013[4]
  i3012.m_Color = new pc.Color(i3013[5], i3013[6], i3013[7], i3013[8])
  i3012.m_RaycastTarget = !!i3013[9]
  i3012.m_RaycastPadding = new pc.Vec4( i3013[10], i3013[11], i3013[12], i3013[13] )
  return i3012
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3015 = data
  request.r(i3015[0], i3015[1], 0, i3014, 'm_Font')
  i3014.m_FontSize = i3015[2]
  i3014.m_FontStyle = i3015[3]
  i3014.m_BestFit = !!i3015[4]
  i3014.m_MinSize = i3015[5]
  i3014.m_MaxSize = i3015[6]
  i3014.m_Alignment = i3015[7]
  i3014.m_AlignByGeometry = !!i3015[8]
  i3014.m_RichText = !!i3015[9]
  i3014.m_HorizontalOverflow = i3015[10]
  i3014.m_VerticalOverflow = i3015[11]
  i3014.m_LineSpacing = i3015[12]
  return i3014
}

Deserializers["CellEffectUnit"] = function (request, data, root) {
  var i3016 = root || request.c( 'CellEffectUnit' )
  var i3017 = data
  i3016.poolType = i3017[0]
  return i3016
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3018 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3019 = data
  request.r(i3019[0], i3019[1], 0, i3018, 'skeletonDataAsset')
  i3018.initialSkinName = i3019[2]
  i3018.initialFlipX = !!i3019[3]
  i3018.initialFlipY = !!i3019[4]
  i3018.startingAnimation = i3019[5]
  i3018.startingLoop = !!i3019[6]
  i3018.timeScale = i3019[7]
  i3018.freeze = !!i3019[8]
  i3018.updateWhenInvisible = i3019[9]
  i3018.unscaledTime = !!i3019[10]
  i3018.allowMultipleCanvasRenderers = !!i3019[11]
  var i3021 = i3019[12]
  var i3020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3021.length; i += 2) {
  request.r(i3021[i + 0], i3021[i + 1], 1, i3020, '')
  }
  i3018.canvasRenderers = i3020
  i3018.enableSeparatorSlots = !!i3019[13]
  i3018.updateSeparatorPartLocation = !!i3019[14]
  var i3023 = i3019[15]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( i3023[i + 0] );
  }
  i3018.separatorSlotNames = i3022
  var i3025 = i3019[16]
  var i3024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3025.length; i += 2) {
  request.r(i3025[i + 0], i3025[i + 1], 1, i3024, '')
  }
  i3018.separatorParts = i3024
  i3018.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3019[17], i3018.meshGenerator)
  request.r(i3019[18], i3019[19], 0, i3018, 'm_Material')
  i3018.m_Maskable = !!i3019[20]
  i3018.m_Color = new pc.Color(i3019[21], i3019[22], i3019[23], i3019[24])
  i3018.m_RaycastTarget = !!i3019[25]
  i3018.m_RaycastPadding = new pc.Vec4( i3019[26], i3019[27], i3019[28], i3019[29] )
  return i3018
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3032 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3033 = data
  i3032.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3033[0], i3032.settings)
  return i3032
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3034 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3035 = data
  i3034.useClipping = !!i3035[0]
  i3034.zSpacing = i3035[1]
  i3034.pmaVertexColors = !!i3035[2]
  i3034.tintBlack = !!i3035[3]
  i3034.canvasGroupTintBlack = !!i3035[4]
  i3034.calculateTangents = !!i3035[5]
  i3034.addNormals = !!i3035[6]
  i3034.immutableTriangles = !!i3035[7]
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3037 = data
  request.r(i3037[0], i3037[1], 0, i3036, 'clip')
  request.r(i3037[2], i3037[3], 0, i3036, 'outputAudioMixerGroup')
  i3036.playOnAwake = !!i3037[4]
  i3036.loop = !!i3037[5]
  i3036.time = i3037[6]
  i3036.volume = i3037[7]
  i3036.pitch = i3037[8]
  i3036.enabled = !!i3037[9]
  return i3036
}

Deserializers["Sound"] = function (request, data, root) {
  var i3038 = root || request.c( 'Sound' )
  var i3039 = data
  request.r(i3039[0], i3039[1], 0, i3038, 'audioSource')
  i3038.poolType = i3039[2]
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3041 = data
  i3040.name = i3041[0]
  i3040.index = i3041[1]
  i3040.startup = !!i3041[2]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3043 = data
  i3042.aspect = i3043[0]
  i3042.orthographic = !!i3043[1]
  i3042.orthographicSize = i3043[2]
  i3042.backgroundColor = new pc.Color(i3043[3], i3043[4], i3043[5], i3043[6])
  i3042.nearClipPlane = i3043[7]
  i3042.farClipPlane = i3043[8]
  i3042.fieldOfView = i3043[9]
  i3042.depth = i3043[10]
  i3042.clearFlags = i3043[11]
  i3042.cullingMask = i3043[12]
  i3042.rect = i3043[13]
  request.r(i3043[14], i3043[15], 0, i3042, 'targetTexture')
  i3042.usePhysicalProperties = !!i3043[16]
  i3042.focalLength = i3043[17]
  i3042.sensorSize = new pc.Vec2( i3043[18], i3043[19] )
  i3042.lensShift = new pc.Vec2( i3043[20], i3043[21] )
  i3042.gateFit = i3043[22]
  i3042.commandBufferCount = i3043[23]
  i3042.cameraType = i3043[24]
  i3042.enabled = !!i3043[25]
  return i3042
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3044 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3045 = data
  i3044.m_UiScaleMode = i3045[0]
  i3044.m_ReferencePixelsPerUnit = i3045[1]
  i3044.m_ScaleFactor = i3045[2]
  i3044.m_ReferenceResolution = new pc.Vec2( i3045[3], i3045[4] )
  i3044.m_ScreenMatchMode = i3045[5]
  i3044.m_MatchWidthOrHeight = i3045[6]
  i3044.m_PhysicalUnit = i3045[7]
  i3044.m_FallbackScreenDPI = i3045[8]
  i3044.m_DefaultSpriteDPI = i3045[9]
  i3044.m_DynamicPixelsPerUnit = i3045[10]
  i3044.m_PresetInfoIsWorld = !!i3045[11]
  return i3044
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3046 = root || request.c( 'UIManager' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, 'parent')
  return i3046
}

Deserializers["CanvasGameplay"] = function (request, data, root) {
  var i3048 = root || request.c( 'CanvasGameplay' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'rectContainerLevel')
  request.r(i3049[2], i3049[3], 0, i3048, 'txtLevel')
  i3048.isdestroyOnClose = !!i3049[4]
  return i3048
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i3050 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i3051 = data
  i3050.m_Spacing = i3051[0]
  i3050.m_ChildForceExpandWidth = !!i3051[1]
  i3050.m_ChildForceExpandHeight = !!i3051[2]
  i3050.m_ChildControlWidth = !!i3051[3]
  i3050.m_ChildControlHeight = !!i3051[4]
  i3050.m_ChildScaleWidth = !!i3051[5]
  i3050.m_ChildScaleHeight = !!i3051[6]
  i3050.m_ReverseArrangement = !!i3051[7]
  i3050.m_Padding = UnityEngine.RectOffset.FromPaddings(i3051[8], i3051[9], i3051[10], i3051[11])
  i3050.m_ChildAlignment = i3051[12]
  return i3050
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3052 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3053 = data
  i3052.m_HorizontalFit = i3053[0]
  i3052.m_VerticalFit = i3053[1]
  return i3052
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3054 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3055 = data
  i3054.m_StartCorner = i3055[0]
  i3054.m_StartAxis = i3055[1]
  i3054.m_CellSize = new pc.Vec2( i3055[2], i3055[3] )
  i3054.m_Spacing = new pc.Vec2( i3055[4], i3055[5] )
  i3054.m_Constraint = i3055[6]
  i3054.m_ConstraintCount = i3055[7]
  i3054.m_Padding = UnityEngine.RectOffset.FromPaddings(i3055[8], i3055[9], i3055[10], i3055[11])
  i3054.m_ChildAlignment = i3055[12]
  return i3054
}

Deserializers["GridManager"] = function (request, data, root) {
  var i3056 = root || request.c( 'GridManager' )
  var i3057 = data
  i3056.width = i3057[0]
  i3056.height = i3057[1]
  var i3059 = i3057[2]
  var i3058 = new (System.Collections.Generic.List$1(Bridge.ns('ColorSetting')))
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.add(request.d('ColorSetting', i3059[i + 0]));
  }
  i3056.colorSettings = i3058
  i3056.borderPadding = i3057[3]
  i3056.wrongColor = new pc.Color(i3057[4], i3057[5], i3057[6], i3057[7])
  i3056.defaultDragColor = new pc.Color(i3057[8], i3057[9], i3057[10], i3057[11])
  i3056.standardSize = i3057[12]
  var i3061 = i3057[13]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('BorderUnit')))
  for(var i = 0; i < i3061.length; i += 2) {
  request.r(i3061[i + 0], i3061[i + 1], 1, i3060, '')
  }
  i3056.borderPoolList = i3060
  request.r(i3057[14], i3057[15], 0, i3056, 'canvasWin')
  request.r(i3057[16], i3057[17], 0, i3056, 'tutorial2')
  request.r(i3057[18], i3057[19], 0, i3056, 'cellOrientationSO')
  return i3056
}

Deserializers["ColorSetting"] = function (request, data, root) {
  var i3064 = root || request.c( 'ColorSetting' )
  var i3065 = data
  i3064.type = i3065[0]
  i3064.color = new pc.Color(i3065[1], i3065[2], i3065[3], i3065[4])
  return i3064
}

Deserializers["Level"] = function (request, data, root) {
  var i3068 = root || request.c( 'Level' )
  var i3069 = data
  return i3068
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i3070 = root || request.c( 'Tutorial' )
  var i3071 = data
  var i3073 = i3071[0]
  var i3072 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialStep')))
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.add(request.d('TutorialStep', i3073[i + 0]));
  }
  i3070.tutorialSteps = i3072
  request.r(i3071[1], i3071[2], 0, i3070, 'rectHand')
  request.r(i3071[3], i3071[4], 0, i3070, 'overlay')
  return i3070
}

Deserializers["TutorialStep"] = function (request, data, root) {
  var i3076 = root || request.c( 'TutorialStep' )
  var i3077 = data
  var i3079 = i3077[0]
  var i3078 = new (System.Collections.Generic.List$1(Bridge.ns('Cell')))
  for(var i = 0; i < i3079.length; i += 2) {
  request.r(i3079[i + 0], i3079[i + 1], 1, i3078, '')
  }
  i3076.targetCells = i3078
  request.r(i3077[1], i3077[2], 0, i3076, 'pos1')
  request.r(i3077[3], i3077[4], 0, i3076, 'pos2')
  return i3076
}

Deserializers["Tutorial2"] = function (request, data, root) {
  var i3082 = root || request.c( 'Tutorial2' )
  var i3083 = data
  request.r(i3083[0], i3083[1], 0, i3082, 'hand')
  request.r(i3083[2], i3083[3], 0, i3082, 'pos1')
  request.r(i3083[4], i3083[5], 0, i3082, 'pos2')
  i3082.moveDuration = i3083[6]
  return i3082
}

Deserializers["Cell"] = function (request, data, root) {
  var i3084 = root || request.c( 'Cell' )
  var i3085 = data
  i3084.gridX = i3085[0]
  i3084.gridY = i3085[1]
  i3084.numberValue = i3085[2]
  i3084.solutionID = i3085[3]
  i3084.colorType = i3085[4]
  i3084.orientationType = i3085[5]
  i3084.limitType = i3085[6]
  i3084.playType = i3085[7]
  i3084.isLocked = !!i3085[8]
  i3084.groupID = i3085[9]
  request.r(i3085[10], i3085[11], 0, i3084, 'cellImage')
  request.r(i3085[12], i3085[13], 0, i3084, 'numberText')
  request.r(i3085[14], i3085[15], 0, i3084, 'imgOrientation')
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3087 = data
  i3086.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3087[0], i3086.main)
  i3086.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3087[1], i3086.colorBySpeed)
  i3086.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3087[2], i3086.colorOverLifetime)
  i3086.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3087[3], i3086.emission)
  i3086.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3087[4], i3086.rotationBySpeed)
  i3086.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3087[5], i3086.rotationOverLifetime)
  i3086.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3087[6], i3086.shape)
  i3086.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3087[7], i3086.sizeBySpeed)
  i3086.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3087[8], i3086.sizeOverLifetime)
  i3086.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3087[9], i3086.textureSheetAnimation)
  i3086.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3087[10], i3086.velocityOverLifetime)
  i3086.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3087[11], i3086.noise)
  i3086.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3087[12], i3086.inheritVelocity)
  i3086.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3087[13], i3086.forceOverLifetime)
  i3086.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3087[14], i3086.limitVelocityOverLifetime)
  i3086.useAutoRandomSeed = !!i3087[15]
  i3086.randomSeed = i3087[16]
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3088 = root || new pc.ParticleSystemMain()
  var i3089 = data
  i3088.duration = i3089[0]
  i3088.loop = !!i3089[1]
  i3088.prewarm = !!i3089[2]
  i3088.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[3], i3088.startDelay)
  i3088.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[4], i3088.startLifetime)
  i3088.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[5], i3088.startSpeed)
  i3088.startSize3D = !!i3089[6]
  i3088.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[7], i3088.startSizeX)
  i3088.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[8], i3088.startSizeY)
  i3088.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[9], i3088.startSizeZ)
  i3088.startRotation3D = !!i3089[10]
  i3088.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[11], i3088.startRotationX)
  i3088.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[12], i3088.startRotationY)
  i3088.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[13], i3088.startRotationZ)
  i3088.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3089[14], i3088.startColor)
  i3088.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3089[15], i3088.gravityModifier)
  i3088.simulationSpace = i3089[16]
  request.r(i3089[17], i3089[18], 0, i3088, 'customSimulationSpace')
  i3088.simulationSpeed = i3089[19]
  i3088.useUnscaledTime = !!i3089[20]
  i3088.scalingMode = i3089[21]
  i3088.playOnAwake = !!i3089[22]
  i3088.maxParticles = i3089[23]
  i3088.emitterVelocityMode = i3089[24]
  i3088.stopAction = i3089[25]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3090 = root || new pc.MinMaxCurve()
  var i3091 = data
  i3090.mode = i3091[0]
  i3090.curveMin = new pc.AnimationCurve( { keys_flow: i3091[1] } )
  i3090.curveMax = new pc.AnimationCurve( { keys_flow: i3091[2] } )
  i3090.curveMultiplier = i3091[3]
  i3090.constantMin = i3091[4]
  i3090.constantMax = i3091[5]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3092 = root || new pc.MinMaxGradient()
  var i3093 = data
  i3092.mode = i3093[0]
  i3092.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3093[1], i3092.gradientMin)
  i3092.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3093[2], i3092.gradientMax)
  i3092.colorMin = new pc.Color(i3093[3], i3093[4], i3093[5], i3093[6])
  i3092.colorMax = new pc.Color(i3093[7], i3093[8], i3093[9], i3093[10])
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3095 = data
  i3094.mode = i3095[0]
  var i3097 = i3095[1]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3097[i + 0]) );
  }
  i3094.colorKeys = i3096
  var i3099 = i3095[2]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3099[i + 0]) );
  }
  i3094.alphaKeys = i3098
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3103 = data
  i3102.color = new pc.Color(i3103[0], i3103[1], i3103[2], i3103[3])
  i3102.time = i3103[4]
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3107 = data
  i3106.alpha = i3107[0]
  i3106.time = i3107[1]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3108 = root || new pc.ParticleSystemColorBySpeed()
  var i3109 = data
  i3108.enabled = !!i3109[0]
  i3108.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3109[1], i3108.color)
  i3108.range = new pc.Vec2( i3109[2], i3109[3] )
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3110 = root || new pc.ParticleSystemColorOverLifetime()
  var i3111 = data
  i3110.enabled = !!i3111[0]
  i3110.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3111[1], i3110.color)
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3112 = root || new pc.ParticleSystemEmitter()
  var i3113 = data
  i3112.enabled = !!i3113[0]
  i3112.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3113[1], i3112.rateOverTime)
  i3112.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3113[2], i3112.rateOverDistance)
  var i3115 = i3113[3]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3115[i + 0]) );
  }
  i3112.bursts = i3114
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3118 = root || new pc.ParticleSystemBurst()
  var i3119 = data
  i3118.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3119[0], i3118.count)
  i3118.cycleCount = i3119[1]
  i3118.minCount = i3119[2]
  i3118.maxCount = i3119[3]
  i3118.repeatInterval = i3119[4]
  i3118.time = i3119[5]
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3120 = root || new pc.ParticleSystemRotationBySpeed()
  var i3121 = data
  i3120.enabled = !!i3121[0]
  i3120.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3121[1], i3120.x)
  i3120.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3121[2], i3120.y)
  i3120.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3121[3], i3120.z)
  i3120.separateAxes = !!i3121[4]
  i3120.range = new pc.Vec2( i3121[5], i3121[6] )
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3122 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3123 = data
  i3122.enabled = !!i3123[0]
  i3122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[1], i3122.x)
  i3122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[2], i3122.y)
  i3122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3123[3], i3122.z)
  i3122.separateAxes = !!i3123[4]
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3124 = root || new pc.ParticleSystemShape()
  var i3125 = data
  i3124.enabled = !!i3125[0]
  i3124.shapeType = i3125[1]
  i3124.randomDirectionAmount = i3125[2]
  i3124.sphericalDirectionAmount = i3125[3]
  i3124.randomPositionAmount = i3125[4]
  i3124.alignToDirection = !!i3125[5]
  i3124.radius = i3125[6]
  i3124.radiusMode = i3125[7]
  i3124.radiusSpread = i3125[8]
  i3124.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[9], i3124.radiusSpeed)
  i3124.radiusThickness = i3125[10]
  i3124.angle = i3125[11]
  i3124.length = i3125[12]
  i3124.boxThickness = new pc.Vec3( i3125[13], i3125[14], i3125[15] )
  i3124.meshShapeType = i3125[16]
  request.r(i3125[17], i3125[18], 0, i3124, 'mesh')
  request.r(i3125[19], i3125[20], 0, i3124, 'meshRenderer')
  request.r(i3125[21], i3125[22], 0, i3124, 'skinnedMeshRenderer')
  i3124.useMeshMaterialIndex = !!i3125[23]
  i3124.meshMaterialIndex = i3125[24]
  i3124.useMeshColors = !!i3125[25]
  i3124.normalOffset = i3125[26]
  i3124.arc = i3125[27]
  i3124.arcMode = i3125[28]
  i3124.arcSpread = i3125[29]
  i3124.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[30], i3124.arcSpeed)
  i3124.donutRadius = i3125[31]
  i3124.position = new pc.Vec3( i3125[32], i3125[33], i3125[34] )
  i3124.rotation = new pc.Vec3( i3125[35], i3125[36], i3125[37] )
  i3124.scale = new pc.Vec3( i3125[38], i3125[39], i3125[40] )
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3126 = root || new pc.ParticleSystemSizeBySpeed()
  var i3127 = data
  i3126.enabled = !!i3127[0]
  i3126.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[1], i3126.x)
  i3126.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[2], i3126.y)
  i3126.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[3], i3126.z)
  i3126.separateAxes = !!i3127[4]
  i3126.range = new pc.Vec2( i3127[5], i3127[6] )
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3128 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3129 = data
  i3128.enabled = !!i3129[0]
  i3128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[1], i3128.x)
  i3128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[2], i3128.y)
  i3128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[3], i3128.z)
  i3128.separateAxes = !!i3129[4]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3130 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3131 = data
  i3130.enabled = !!i3131[0]
  i3130.mode = i3131[1]
  i3130.animation = i3131[2]
  i3130.numTilesX = i3131[3]
  i3130.numTilesY = i3131[4]
  i3130.useRandomRow = !!i3131[5]
  i3130.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[6], i3130.frameOverTime)
  i3130.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[7], i3130.startFrame)
  i3130.cycleCount = i3131[8]
  i3130.rowIndex = i3131[9]
  i3130.flipU = i3131[10]
  i3130.flipV = i3131[11]
  i3130.spriteCount = i3131[12]
  var i3133 = i3131[13]
  var i3132 = []
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 2, i3132, '')
  }
  i3130.sprites = i3132
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3136 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3137 = data
  i3136.enabled = !!i3137[0]
  i3136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[1], i3136.x)
  i3136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[2], i3136.y)
  i3136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[3], i3136.z)
  i3136.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[4], i3136.radial)
  i3136.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[5], i3136.speedModifier)
  i3136.space = i3137[6]
  i3136.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[7], i3136.orbitalX)
  i3136.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[8], i3136.orbitalY)
  i3136.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[9], i3136.orbitalZ)
  i3136.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[10], i3136.orbitalOffsetX)
  i3136.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[11], i3136.orbitalOffsetY)
  i3136.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[12], i3136.orbitalOffsetZ)
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3138 = root || new pc.ParticleSystemNoise()
  var i3139 = data
  i3138.enabled = !!i3139[0]
  i3138.separateAxes = !!i3139[1]
  i3138.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[2], i3138.strengthX)
  i3138.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[3], i3138.strengthY)
  i3138.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[4], i3138.strengthZ)
  i3138.frequency = i3139[5]
  i3138.damping = !!i3139[6]
  i3138.octaveCount = i3139[7]
  i3138.octaveMultiplier = i3139[8]
  i3138.octaveScale = i3139[9]
  i3138.quality = i3139[10]
  i3138.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[11], i3138.scrollSpeed)
  i3138.scrollSpeedMultiplier = i3139[12]
  i3138.remapEnabled = !!i3139[13]
  i3138.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[14], i3138.remapX)
  i3138.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[15], i3138.remapY)
  i3138.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[16], i3138.remapZ)
  i3138.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[17], i3138.positionAmount)
  i3138.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[18], i3138.rotationAmount)
  i3138.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[19], i3138.sizeAmount)
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3140 = root || new pc.ParticleSystemInheritVelocity()
  var i3141 = data
  i3140.enabled = !!i3141[0]
  i3140.mode = i3141[1]
  i3140.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3141[2], i3140.curve)
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3142 = root || new pc.ParticleSystemForceOverLifetime()
  var i3143 = data
  i3142.enabled = !!i3143[0]
  i3142.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[1], i3142.x)
  i3142.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[2], i3142.y)
  i3142.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[3], i3142.z)
  i3142.space = i3143[4]
  i3142.randomized = !!i3143[5]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3144 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3145 = data
  i3144.enabled = !!i3145[0]
  i3144.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[1], i3144.limit)
  i3144.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[2], i3144.limitX)
  i3144.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[3], i3144.limitY)
  i3144.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[4], i3144.limitZ)
  i3144.dampen = i3145[5]
  i3144.separateAxes = !!i3145[6]
  i3144.space = i3145[7]
  i3144.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[8], i3144.drag)
  i3144.multiplyDragByParticleSize = !!i3145[9]
  i3144.multiplyDragByParticleVelocity = !!i3145[10]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3147 = data
  request.r(i3147[0], i3147[1], 0, i3146, 'mesh')
  i3146.meshCount = i3147[2]
  i3146.activeVertexStreamsCount = i3147[3]
  i3146.alignment = i3147[4]
  i3146.renderMode = i3147[5]
  i3146.sortMode = i3147[6]
  i3146.lengthScale = i3147[7]
  i3146.velocityScale = i3147[8]
  i3146.cameraVelocityScale = i3147[9]
  i3146.normalDirection = i3147[10]
  i3146.sortingFudge = i3147[11]
  i3146.minParticleSize = i3147[12]
  i3146.maxParticleSize = i3147[13]
  i3146.pivot = new pc.Vec3( i3147[14], i3147[15], i3147[16] )
  request.r(i3147[17], i3147[18], 0, i3146, 'trailMaterial')
  i3146.applyActiveColorSpace = !!i3147[19]
  i3146.enabled = !!i3147[20]
  request.r(i3147[21], i3147[22], 0, i3146, 'sharedMaterial')
  var i3149 = i3147[23]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 2) {
  request.r(i3149[i + 0], i3149[i + 1], 2, i3148, '')
  }
  i3146.sharedMaterials = i3148
  i3146.receiveShadows = !!i3147[24]
  i3146.shadowCastingMode = i3147[25]
  i3146.sortingLayerID = i3147[26]
  i3146.sortingOrder = i3147[27]
  i3146.lightmapIndex = i3147[28]
  i3146.lightmapSceneIndex = i3147[29]
  i3146.lightmapScaleOffset = new pc.Vec4( i3147[30], i3147[31], i3147[32], i3147[33] )
  i3146.lightProbeUsage = i3147[34]
  i3146.reflectionProbeUsage = i3147[35]
  return i3146
}

Deserializers["CanvasWin"] = function (request, data, root) {
  var i3152 = root || request.c( 'CanvasWin' )
  var i3153 = data
  request.r(i3153[0], i3153[1], 0, i3152, 'txtWinLevel')
  var i3155 = i3153[2]
  var i3154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i3155.length; i += 2) {
  request.r(i3155[i + 0], i3155[i + 1], 1, i3154, '')
  }
  i3152.winParticles = i3154
  request.r(i3153[3], i3153[4], 0, i3152, 'skeletonGraphic')
  i3152.isdestroyOnClose = !!i3153[5]
  return i3152
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'm_FirstSelected')
  i3158.m_sendNavigationEvents = !!i3159[2]
  i3158.m_DragThreshold = i3159[3]
  return i3158
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3161 = data
  i3160.m_HorizontalAxis = i3161[0]
  i3160.m_VerticalAxis = i3161[1]
  i3160.m_SubmitButton = i3161[2]
  i3160.m_CancelButton = i3161[3]
  i3160.m_InputActionsPerSecond = i3161[4]
  i3160.m_RepeatDelay = i3161[5]
  i3160.m_ForceModuleActive = !!i3161[6]
  i3160.m_SendPointerHoverToParent = !!i3161[7]
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3163 = data
  i3162.ambientIntensity = i3163[0]
  i3162.reflectionIntensity = i3163[1]
  i3162.ambientMode = i3163[2]
  i3162.ambientLight = new pc.Color(i3163[3], i3163[4], i3163[5], i3163[6])
  i3162.ambientSkyColor = new pc.Color(i3163[7], i3163[8], i3163[9], i3163[10])
  i3162.ambientGroundColor = new pc.Color(i3163[11], i3163[12], i3163[13], i3163[14])
  i3162.ambientEquatorColor = new pc.Color(i3163[15], i3163[16], i3163[17], i3163[18])
  i3162.fogColor = new pc.Color(i3163[19], i3163[20], i3163[21], i3163[22])
  i3162.fogEndDistance = i3163[23]
  i3162.fogStartDistance = i3163[24]
  i3162.fogDensity = i3163[25]
  i3162.fog = !!i3163[26]
  request.r(i3163[27], i3163[28], 0, i3162, 'skybox')
  i3162.fogMode = i3163[29]
  var i3165 = i3163[30]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3165[i + 0]) );
  }
  i3162.lightmaps = i3164
  i3162.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3163[31], i3162.lightProbes)
  i3162.lightmapsMode = i3163[32]
  i3162.mixedBakeMode = i3163[33]
  i3162.environmentLightingMode = i3163[34]
  i3162.ambientProbe = new pc.SphericalHarmonicsL2(i3163[35])
  request.r(i3163[36], i3163[37], 0, i3162, 'customReflection')
  request.r(i3163[38], i3163[39], 0, i3162, 'defaultReflection')
  i3162.defaultReflectionMode = i3163[40]
  i3162.defaultReflectionResolution = i3163[41]
  i3162.sunLightObjectId = i3163[42]
  i3162.pixelLightCount = i3163[43]
  i3162.defaultReflectionHDR = !!i3163[44]
  i3162.hasLightDataAsset = !!i3163[45]
  i3162.hasManualGenerate = !!i3163[46]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3169 = data
  request.r(i3169[0], i3169[1], 0, i3168, 'lightmapColor')
  request.r(i3169[2], i3169[3], 0, i3168, 'lightmapDirection')
  request.r(i3169[4], i3169[5], 0, i3168, 'shadowMask')
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3170 = root || new UnityEngine.LightProbes()
  var i3171 = data
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3179 = data
  var i3181 = i3179[0]
  var i3180 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3181[i + 0]));
  }
  i3178.ShaderCompilationErrors = i3180
  i3178.name = i3179[1]
  i3178.guid = i3179[2]
  var i3183 = i3179[3]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.push( i3183[i + 0] );
  }
  i3178.shaderDefinedKeywords = i3182
  var i3185 = i3179[4]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3185[i + 0]) );
  }
  i3178.passes = i3184
  var i3187 = i3179[5]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3187[i + 0]) );
  }
  i3178.usePasses = i3186
  var i3189 = i3179[6]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3189[i + 0]) );
  }
  i3178.defaultParameterValues = i3188
  request.r(i3179[7], i3179[8], 0, i3178, 'unityFallbackShader')
  i3178.readDepth = !!i3179[9]
  i3178.hasDepthOnlyPass = !!i3179[10]
  i3178.isCreatedByShaderGraph = !!i3179[11]
  i3178.disableBatching = !!i3179[12]
  i3178.compiled = !!i3179[13]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3193 = data
  i3192.shaderName = i3193[0]
  i3192.errorMessage = i3193[1]
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3196 = root || new pc.UnityShaderPass()
  var i3197 = data
  i3196.id = i3197[0]
  i3196.subShaderIndex = i3197[1]
  i3196.name = i3197[2]
  i3196.passType = i3197[3]
  i3196.grabPassTextureName = i3197[4]
  i3196.usePass = !!i3197[5]
  i3196.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[6], i3196.zTest)
  i3196.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[7], i3196.zWrite)
  i3196.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[8], i3196.culling)
  i3196.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3197[9], i3196.blending)
  i3196.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3197[10], i3196.alphaBlending)
  i3196.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[11], i3196.colorWriteMask)
  i3196.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[12], i3196.offsetUnits)
  i3196.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[13], i3196.offsetFactor)
  i3196.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[14], i3196.stencilRef)
  i3196.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[15], i3196.stencilReadMask)
  i3196.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[16], i3196.stencilWriteMask)
  i3196.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[17], i3196.stencilOp)
  i3196.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[18], i3196.stencilOpFront)
  i3196.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[19], i3196.stencilOpBack)
  var i3199 = i3197[20]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3199[i + 0]) );
  }
  i3196.tags = i3198
  var i3201 = i3197[21]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( i3201[i + 0] );
  }
  i3196.passDefinedKeywords = i3200
  var i3203 = i3197[22]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3203[i + 0]) );
  }
  i3196.passDefinedKeywordGroups = i3202
  var i3205 = i3197[23]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3205[i + 0]) );
  }
  i3196.variants = i3204
  var i3207 = i3197[24]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3207[i + 0]) );
  }
  i3196.excludedVariants = i3206
  i3196.hasDepthReader = !!i3197[25]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3209 = data
  i3208.val = i3209[0]
  i3208.name = i3209[1]
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3211 = data
  i3210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[0], i3210.src)
  i3210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[1], i3210.dst)
  i3210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[2], i3210.op)
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3213 = data
  i3212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[0], i3212.pass)
  i3212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[1], i3212.fail)
  i3212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[2], i3212.zFail)
  i3212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[3], i3212.comp)
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.value = i3217[1]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3221 = data
  var i3223 = i3221[0]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( i3223[i + 0] );
  }
  i3220.keywords = i3222
  i3220.hasDiscard = !!i3221[1]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3227 = data
  i3226.passId = i3227[0]
  i3226.subShaderIndex = i3227[1]
  var i3229 = i3227[2]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( i3229[i + 0] );
  }
  i3226.keywords = i3228
  i3226.vertexProgram = i3227[3]
  i3226.fragmentProgram = i3227[4]
  i3226.exportedForWebGl2 = !!i3227[5]
  i3226.readDepth = !!i3227[6]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3233 = data
  request.r(i3233[0], i3233[1], 0, i3232, 'shader')
  i3232.pass = i3233[2]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3237 = data
  i3236.name = i3237[0]
  i3236.type = i3237[1]
  i3236.value = new pc.Vec4( i3237[2], i3237[3], i3237[4], i3237[5] )
  i3236.textureValue = i3237[6]
  i3236.shaderPropertyFlag = i3237[7]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3239 = data
  i3238.name = i3239[0]
  request.r(i3239[1], i3239[2], 0, i3238, 'texture')
  i3238.aabb = i3239[3]
  i3238.vertices = i3239[4]
  i3238.triangles = i3239[5]
  i3238.textureRect = UnityEngine.Rect.MinMaxRect(i3239[6], i3239[7], i3239[8], i3239[9])
  i3238.packedRect = UnityEngine.Rect.MinMaxRect(i3239[10], i3239[11], i3239[12], i3239[13])
  i3238.border = new pc.Vec4( i3239[14], i3239[15], i3239[16], i3239[17] )
  i3238.transparency = i3239[18]
  i3238.bounds = i3239[19]
  i3238.pixelsPerUnit = i3239[20]
  i3238.textureWidth = i3239[21]
  i3238.textureHeight = i3239[22]
  i3238.nativeSize = new pc.Vec2( i3239[23], i3239[24] )
  i3238.pivot = new pc.Vec2( i3239[25], i3239[26] )
  i3238.textureRectOffset = new pc.Vec2( i3239[27], i3239[28] )
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3241 = data
  i3240.name = i3241[0]
  i3240.ascent = i3241[1]
  i3240.originalLineHeight = i3241[2]
  i3240.fontSize = i3241[3]
  var i3243 = i3241[4]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3243[i + 0]) );
  }
  i3240.characterInfo = i3242
  request.r(i3241[5], i3241[6], 0, i3240, 'texture')
  i3240.originalFontSize = i3241[7]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3247 = data
  i3246.index = i3247[0]
  i3246.advance = i3247[1]
  i3246.bearing = i3247[2]
  i3246.glyphWidth = i3247[3]
  i3246.glyphHeight = i3247[4]
  i3246.minX = i3247[5]
  i3246.maxX = i3247[6]
  i3246.minY = i3247[7]
  i3246.maxY = i3247[8]
  i3246.uvBottomLeftX = i3247[9]
  i3246.uvBottomLeftY = i3247[10]
  i3246.uvBottomRightX = i3247[11]
  i3246.uvBottomRightY = i3247[12]
  i3246.uvTopLeftX = i3247[13]
  i3246.uvTopLeftY = i3247[14]
  i3246.uvTopRightX = i3247[15]
  i3246.uvTopRightY = i3247[16]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3249 = data
  i3248.name = i3249[0]
  i3248.bytes64 = i3249[1]
  i3248.data = i3249[2]
  return i3248
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i3250 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i3251 = data
  var i3253 = i3251[0]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 2) {
  request.r(i3253[i + 0], i3253[i + 1], 2, i3252, '')
  }
  i3250.atlasAssets = i3252
  i3250.scale = i3251[1]
  request.r(i3251[2], i3251[3], 0, i3250, 'skeletonJSON')
  i3250.isUpgradingBlendModeMaterials = !!i3251[4]
  i3250.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i3251[5], i3250.blendModeMaterials)
  var i3255 = i3251[6]
  var i3254 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i3255.length; i += 2) {
  request.r(i3255[i + 0], i3255[i + 1], 1, i3254, '')
  }
  i3250.skeletonDataModifiers = i3254
  var i3257 = i3251[7]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( i3257[i + 0] );
  }
  i3250.fromAnimation = i3256
  var i3259 = i3251[8]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( i3259[i + 0] );
  }
  i3250.toAnimation = i3258
  i3250.duration = i3251[9]
  i3250.defaultMix = i3251[10]
  request.r(i3251[11], i3251[12], 0, i3250, 'controller')
  return i3250
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i3262 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i3263 = data
  i3262.applyAdditiveMaterial = !!i3263[0]
  var i3265 = i3263[1]
  var i3264 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3265[i + 0]));
  }
  i3262.additiveMaterials = i3264
  var i3267 = i3263[2]
  var i3266 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3267[i + 0]));
  }
  i3262.multiplyMaterials = i3266
  var i3269 = i3263[3]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i3269[i + 0]));
  }
  i3262.screenMaterials = i3268
  i3262.requiresBlendModeMaterials = !!i3263[4]
  return i3262
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i3272 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i3273 = data
  i3272.pageName = i3273[0]
  request.r(i3273[1], i3273[2], 0, i3272, 'material')
  return i3272
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i3276 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i3277 = data
  request.r(i3277[0], i3277[1], 0, i3276, 'atlasFile')
  var i3279 = i3277[2]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 2) {
  request.r(i3279[i + 0], i3279[i + 1], 2, i3278, '')
  }
  i3276.materials = i3278
  return i3276
}

Deserializers["CellOrientationSO"] = function (request, data, root) {
  var i3280 = root || request.c( 'CellOrientationSO' )
  var i3281 = data
  var i3283 = i3281[0]
  var i3282 = new (System.Collections.Generic.List$1(Bridge.ns('CellOrientationData')))
  for(var i = 0; i < i3283.length; i += 1) {
    i3282.add(request.d('CellOrientationData', i3283[i + 0]));
  }
  i3280.cellOrientationDatas = i3282
  return i3280
}

Deserializers["CellOrientationData"] = function (request, data, root) {
  var i3286 = root || request.c( 'CellOrientationData' )
  var i3287 = data
  i3286.orientationType = i3287[0]
  i3286.colorType = i3287[1]
  request.r(i3287[2], i3287[3], 0, i3286, 'sprite')
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3289 = data
  var i3291 = i3289[0]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3291[i + 0]) );
  }
  i3288.files = i3290
  i3288.componentToPrefabIds = i3289[1]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3295 = data
  i3294.path = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'unityObject')
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3297 = data
  var i3299 = i3297[0]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3299[i + 0]) );
  }
  i3296.scriptsExecutionOrder = i3298
  var i3301 = i3297[1]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3301[i + 0]) );
  }
  i3296.sortingLayers = i3300
  var i3303 = i3297[2]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3303[i + 0]) );
  }
  i3296.cullingLayers = i3302
  i3296.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3297[3], i3296.timeSettings)
  i3296.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3297[4], i3296.physicsSettings)
  i3296.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3297[5], i3296.physics2DSettings)
  i3296.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3297[6], i3296.qualitySettings)
  i3296.enableRealtimeShadows = !!i3297[7]
  i3296.enableAutoInstancing = !!i3297[8]
  i3296.enableStaticBatching = !!i3297[9]
  i3296.enableDynamicBatching = !!i3297[10]
  i3296.usePreservativeDynamicBatching = !!i3297[11]
  i3296.lightmapEncodingQuality = i3297[12]
  i3296.desiredColorSpace = i3297[13]
  var i3305 = i3297[14]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( i3305[i + 0] );
  }
  i3296.allTags = i3304
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3309 = data
  i3308.name = i3309[0]
  i3308.value = i3309[1]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3313 = data
  i3312.id = i3313[0]
  i3312.name = i3313[1]
  i3312.value = i3313[2]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3317 = data
  i3316.id = i3317[0]
  i3316.name = i3317[1]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3319 = data
  i3318.fixedDeltaTime = i3319[0]
  i3318.maximumDeltaTime = i3319[1]
  i3318.timeScale = i3319[2]
  i3318.maximumParticleTimestep = i3319[3]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3321 = data
  i3320.gravity = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.defaultSolverIterations = i3321[3]
  i3320.bounceThreshold = i3321[4]
  i3320.autoSyncTransforms = !!i3321[5]
  i3320.autoSimulation = !!i3321[6]
  var i3323 = i3321[7]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3323[i + 0]) );
  }
  i3320.collisionMatrix = i3322
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.layerId = i3327[1]
  i3326.otherLayerId = i3327[2]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'material')
  i3328.gravity = new pc.Vec2( i3329[2], i3329[3] )
  i3328.positionIterations = i3329[4]
  i3328.velocityIterations = i3329[5]
  i3328.velocityThreshold = i3329[6]
  i3328.maxLinearCorrection = i3329[7]
  i3328.maxAngularCorrection = i3329[8]
  i3328.maxTranslationSpeed = i3329[9]
  i3328.maxRotationSpeed = i3329[10]
  i3328.baumgarteScale = i3329[11]
  i3328.baumgarteTOIScale = i3329[12]
  i3328.timeToSleep = i3329[13]
  i3328.linearSleepTolerance = i3329[14]
  i3328.angularSleepTolerance = i3329[15]
  i3328.defaultContactOffset = i3329[16]
  i3328.autoSimulation = !!i3329[17]
  i3328.queriesHitTriggers = !!i3329[18]
  i3328.queriesStartInColliders = !!i3329[19]
  i3328.callbacksOnDisable = !!i3329[20]
  i3328.reuseCollisionCallbacks = !!i3329[21]
  i3328.autoSyncTransforms = !!i3329[22]
  var i3331 = i3329[23]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3331[i + 0]) );
  }
  i3328.collisionMatrix = i3330
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.layerId = i3335[1]
  i3334.otherLayerId = i3335[2]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3337 = data
  var i3339 = i3337[0]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3339[i + 0]) );
  }
  i3336.qualityLevels = i3338
  var i3341 = i3337[1]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( i3341[i + 0] );
  }
  i3336.names = i3340
  i3336.shadows = i3337[2]
  i3336.anisotropicFiltering = i3337[3]
  i3336.antiAliasing = i3337[4]
  i3336.lodBias = i3337[5]
  i3336.shadowCascades = i3337[6]
  i3336.shadowDistance = i3337[7]
  i3336.shadowmaskMode = i3337[8]
  i3336.shadowProjection = i3337[9]
  i3336.shadowResolution = i3337[10]
  i3336.softParticles = !!i3337[11]
  i3336.softVegetation = !!i3337[12]
  i3336.activeColorSpace = i3337[13]
  i3336.desiredColorSpace = i3337[14]
  i3336.masterTextureLimit = i3337[15]
  i3336.maxQueuedFrames = i3337[16]
  i3336.particleRaycastBudget = i3337[17]
  i3336.pixelLightCount = i3337[18]
  i3336.realtimeReflectionProbes = !!i3337[19]
  i3336.shadowCascade2Split = i3337[20]
  i3336.shadowCascade4Split = new pc.Vec3( i3337[21], i3337[22], i3337[23] )
  i3336.streamingMipmapsActive = !!i3337[24]
  i3336.vSyncCount = i3337[25]
  i3336.asyncUploadBufferSize = i3337[26]
  i3336.asyncUploadTimeSlice = i3337[27]
  i3336.billboardsFaceCameraPosition = !!i3337[28]
  i3336.shadowNearPlaneOffset = i3337[29]
  i3336.streamingMipmapsMemoryBudget = i3337[30]
  i3336.maximumLODLevel = i3337[31]
  i3336.streamingMipmapsAddAllCameras = !!i3337[32]
  i3336.streamingMipmapsMaxLevelReduction = i3337[33]
  i3336.streamingMipmapsRenderersPerFrame = i3337[34]
  i3336.resolutionScalingFixedDPIFactor = i3337[35]
  i3336.streamingMipmapsMaxFileIORequests = i3337[36]
  i3336.currentQualityLevel = i3337[37]
  return i3336
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[24],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[24],"79":[80],"81":[82],"83":[82],"16":[8],"84":[85],"86":[87],"88":[85],"89":[8],"90":[8],"18":[16],"11":[9,8],"91":[8],"26":[16],"30":[8],"31":[8],"92":[8],"93":[8],"14":[8],"94":[8],"29":[8],"17":[8],"95":[8],"96":[9,8],"19":[8],"97":[8],"98":[8],"99":[8],"15":[9,8],"100":[8],"101":[42],"102":[42],"43":[42],"103":[42],"104":[24],"105":[24],"106":[107],"108":[24],"109":[8],"110":[111,80],"21":[9,8],"112":[113,111,80],"114":[111,80],"115":[80,111],"116":[57],"117":[65],"118":[119],"120":[121],"122":[8],"123":[80,8],"124":[8,9],"125":[8],"126":[9,8],"127":[80],"128":[9,8],"129":[8],"130":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","PoolManager","BorderUnit","CellEffectUnit","Sound","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.UI.LayoutElement","UnityEngine.UI.Text","UnityEngine.Canvas","UnityEngine.UI.Mask","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.RectMask2D","UnityEngine.Font","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.AudioSource","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.UI.CanvasScaler","UIManager","CanvasGameplay","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","GridManager","CanvasWin","Tutorial2","CellOrientationSO","Level","Tutorial","Cell","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "AdsNumberBlock";

Deserializers.lunaInitializationTime = "06/17/2026 13:43:30";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "abc";

Deserializers.lunaAppID = "39756";

Deserializers.projectId = "fec31873515bb48b5b78c96a463f1b8b";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1910";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4830";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "1d2fbc0f-b5f9-481c-b5e4-bf0472580264";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

