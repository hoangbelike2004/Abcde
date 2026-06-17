var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointSpring' )
  var i2091 = data
  i2090.spring = i2091[0]
  i2090.damper = i2091[1]
  i2090.targetPosition = i2091[2]
  return i2090
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.JointMotor' )
  var i2093 = data
  i2092.m_TargetVelocity = i2093[0]
  i2092.m_Force = i2093[1]
  i2092.m_FreeSpin = i2093[2]
  return i2092
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.JointLimits' )
  var i2095 = data
  i2094.m_Min = i2095[0]
  i2094.m_Max = i2095[1]
  i2094.m_Bounciness = i2095[2]
  i2094.m_BounceMinVelocity = i2095[3]
  i2094.m_ContactDistance = i2095[4]
  i2094.minBounce = i2095[5]
  i2094.maxBounce = i2095[6]
  return i2094
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.JointDrive' )
  var i2097 = data
  i2096.m_PositionSpring = i2097[0]
  i2096.m_PositionDamper = i2097[1]
  i2096.m_MaximumForce = i2097[2]
  i2096.m_UseAcceleration = i2097[3]
  return i2096
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2099 = data
  i2098.m_Spring = i2099[0]
  i2098.m_Damper = i2099[1]
  return i2098
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2101 = data
  i2100.m_Limit = i2101[0]
  i2100.m_Bounciness = i2101[1]
  i2100.m_ContactDistance = i2101[2]
  return i2100
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2103 = data
  i2102.m_ExtremumSlip = i2103[0]
  i2102.m_ExtremumValue = i2103[1]
  i2102.m_AsymptoteSlip = i2103[2]
  i2102.m_AsymptoteValue = i2103[3]
  i2102.m_Stiffness = i2103[4]
  return i2102
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2105 = data
  i2104.m_LowerAngle = i2105[0]
  i2104.m_UpperAngle = i2105[1]
  return i2104
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2107 = data
  i2106.m_MotorSpeed = i2107[0]
  i2106.m_MaximumMotorTorque = i2107[1]
  return i2106
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2109 = data
  i2108.m_DampingRatio = i2109[0]
  i2108.m_Frequency = i2109[1]
  i2108.m_Angle = i2109[2]
  return i2108
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2111 = data
  i2110.m_LowerTranslation = i2111[0]
  i2110.m_UpperTranslation = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2113 = data
  i2112.name = i2113[0]
  i2112.width = i2113[1]
  i2112.height = i2113[2]
  i2112.mipmapCount = i2113[3]
  i2112.anisoLevel = i2113[4]
  i2112.filterMode = i2113[5]
  i2112.hdr = !!i2113[6]
  i2112.format = i2113[7]
  i2112.wrapMode = i2113[8]
  i2112.alphaIsTransparency = !!i2113[9]
  i2112.alphaSource = i2113[10]
  i2112.graphicsFormat = i2113[11]
  i2112.sRGBTexture = !!i2113[12]
  i2112.desiredColorSpace = i2113[13]
  i2112.wrapU = i2113[14]
  i2112.wrapV = i2113[15]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2114 = root || new pc.UnityMaterial()
  var i2115 = data
  i2114.name = i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'shader')
  i2114.renderQueue = i2115[3]
  i2114.enableInstancing = !!i2115[4]
  var i2117 = i2115[5]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2117[i + 0]) );
  }
  i2114.floatParameters = i2116
  var i2119 = i2115[6]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2119[i + 0]) );
  }
  i2114.colorParameters = i2118
  var i2121 = i2115[7]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2121[i + 0]) );
  }
  i2114.vectorParameters = i2120
  var i2123 = i2115[8]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2123[i + 0]) );
  }
  i2114.textureParameters = i2122
  var i2125 = i2115[9]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2125[i + 0]) );
  }
  i2114.materialFlags = i2124
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.value = i2129[1]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.value = new pc.Color(i2133[1], i2133[2], i2133[3], i2133[4])
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.value = new pc.Vec4( i2137[1], i2137[2], i2137[3], i2137[4] )
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2141 = data
  i2140.name = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'value')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2145 = data
  i2144.name = i2145[0]
  i2144.enabled = !!i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2147 = data
  i2146.position = new pc.Vec3( i2147[0], i2147[1], i2147[2] )
  i2146.scale = new pc.Vec3( i2147[3], i2147[4], i2147[5] )
  i2146.rotation = new pc.Quat(i2147[6], i2147[7], i2147[8], i2147[9])
  return i2146
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i2148 = root || request.c( 'PoolManager' )
  var i2149 = data
  var i2151 = i2149[0]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('PoolAmount', i2151[i + 0]) );
  }
  i2148.poolAmounts = i2150
  return i2148
}

Deserializers["PoolAmount"] = function (request, data, root) {
  var i2154 = root || request.c( 'PoolAmount' )
  var i2155 = data
  i2154._name = i2155[0]
  i2154.amount = i2155[1]
  request.r(i2155[2], i2155[3], 0, i2154, 'prefab')
  request.r(i2155[4], i2155[5], 0, i2154, 'parent')
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.tagId = i2157[1]
  i2156.enabled = !!i2157[2]
  i2156.isStatic = !!i2157[3]
  i2156.layer = i2157[4]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2159 = data
  i2158.pivot = new pc.Vec2( i2159[0], i2159[1] )
  i2158.anchorMin = new pc.Vec2( i2159[2], i2159[3] )
  i2158.anchorMax = new pc.Vec2( i2159[4], i2159[5] )
  i2158.sizeDelta = new pc.Vec2( i2159[6], i2159[7] )
  i2158.anchoredPosition3D = new pc.Vec3( i2159[8], i2159[9], i2159[10] )
  i2158.rotation = new pc.Quat(i2159[11], i2159[12], i2159[13], i2159[14])
  i2158.scale = new pc.Vec3( i2159[15], i2159[16], i2159[17] )
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2161 = data
  i2160.cullTransparentMesh = !!i2161[0]
  return i2160
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.Image' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'm_Sprite')
  i2162.m_Type = i2163[2]
  i2162.m_PreserveAspect = !!i2163[3]
  i2162.m_FillCenter = !!i2163[4]
  i2162.m_FillMethod = i2163[5]
  i2162.m_FillAmount = i2163[6]
  i2162.m_FillClockwise = !!i2163[7]
  i2162.m_FillOrigin = i2163[8]
  i2162.m_UseSpriteMesh = !!i2163[9]
  i2162.m_PixelsPerUnitMultiplier = i2163[10]
  request.r(i2163[11], i2163[12], 0, i2162, 'm_Material')
  i2162.m_Maskable = !!i2163[13]
  i2162.m_Color = new pc.Color(i2163[14], i2163[15], i2163[16], i2163[17])
  i2162.m_RaycastTarget = !!i2163[18]
  i2162.m_RaycastPadding = new pc.Vec4( i2163[19], i2163[20], i2163[21], i2163[22] )
  return i2162
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2165 = data
  i2164.m_IgnoreLayout = !!i2165[0]
  i2164.m_MinWidth = i2165[1]
  i2164.m_MinHeight = i2165[2]
  i2164.m_PreferredWidth = i2165[3]
  i2164.m_PreferredHeight = i2165[4]
  i2164.m_FlexibleWidth = i2165[5]
  i2164.m_FlexibleHeight = i2165[6]
  i2164.m_LayoutPriority = i2165[7]
  return i2164
}

Deserializers["BorderUnit"] = function (request, data, root) {
  var i2166 = root || request.c( 'BorderUnit' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'rect')
  request.r(i2167[2], i2167[3], 0, i2166, 'borderImage')
  request.r(i2167[4], i2167[5], 0, i2166, 'backgroundImage')
  request.r(i2167[6], i2167[7], 0, i2166, 'rectContainerAmoutSellect')
  request.r(i2167[8], i2167[9], 0, i2166, 'imgContainerAmoutSellect')
  request.r(i2167[10], i2167[11], 0, i2166, 'txtAmoutSellect')
  request.r(i2167[12], i2167[13], 0, i2166, 'wrongPatternImage')
  request.r(i2167[14], i2167[15], 0, i2166, 'maskContainer')
  request.r(i2167[16], i2167[17], 0, i2166, 'fillCapImage')
  i2166.backgroundAlpha = i2167[18]
  i2166.poolType = i2167[19]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2169 = data
  i2168.planeDistance = i2169[0]
  i2168.referencePixelsPerUnit = i2169[1]
  i2168.isFallbackOverlay = !!i2169[2]
  i2168.renderMode = i2169[3]
  i2168.renderOrder = i2169[4]
  i2168.sortingLayerName = i2169[5]
  i2168.sortingOrder = i2169[6]
  i2168.scaleFactor = i2169[7]
  request.r(i2169[8], i2169[9], 0, i2168, 'worldCamera')
  i2168.overrideSorting = !!i2169[10]
  i2168.pixelPerfect = !!i2169[11]
  i2168.targetDisplay = i2169[12]
  i2168.overridePixelPerfect = !!i2169[13]
  i2168.enabled = !!i2169[14]
  return i2168
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2171 = data
  i2170.m_ShowMaskGraphic = !!i2171[0]
  return i2170
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2173 = data
  i2172.m_IgnoreReversedGraphics = !!i2173[0]
  i2172.m_BlockingObjects = i2173[1]
  i2172.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2173[2] )
  return i2172
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i2175 = data
  i2174.m_Padding = new pc.Vec4( i2175[0], i2175[1], i2175[2], i2175[3] )
  i2174.m_Softness = new pc.Vec2( i2175[4], i2175[5] )
  return i2174
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.UI.Text' )
  var i2177 = data
  i2176.m_FontData = request.d('UnityEngine.UI.FontData', i2177[0], i2176.m_FontData)
  i2176.m_Text = i2177[1]
  request.r(i2177[2], i2177[3], 0, i2176, 'm_Material')
  i2176.m_Maskable = !!i2177[4]
  i2176.m_Color = new pc.Color(i2177[5], i2177[6], i2177[7], i2177[8])
  i2176.m_RaycastTarget = !!i2177[9]
  i2176.m_RaycastPadding = new pc.Vec4( i2177[10], i2177[11], i2177[12], i2177[13] )
  return i2176
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'm_Font')
  i2178.m_FontSize = i2179[2]
  i2178.m_FontStyle = i2179[3]
  i2178.m_BestFit = !!i2179[4]
  i2178.m_MinSize = i2179[5]
  i2178.m_MaxSize = i2179[6]
  i2178.m_Alignment = i2179[7]
  i2178.m_AlignByGeometry = !!i2179[8]
  i2178.m_RichText = !!i2179[9]
  i2178.m_HorizontalOverflow = i2179[10]
  i2178.m_VerticalOverflow = i2179[11]
  i2178.m_LineSpacing = i2179[12]
  return i2178
}

Deserializers["CellEffectUnit"] = function (request, data, root) {
  var i2180 = root || request.c( 'CellEffectUnit' )
  var i2181 = data
  i2180.poolType = i2181[0]
  return i2180
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i2182 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'skeletonDataAsset')
  i2182.initialSkinName = i2183[2]
  i2182.initialFlipX = !!i2183[3]
  i2182.initialFlipY = !!i2183[4]
  i2182.startingAnimation = i2183[5]
  i2182.startingLoop = !!i2183[6]
  i2182.timeScale = i2183[7]
  i2182.freeze = !!i2183[8]
  i2182.updateWhenInvisible = i2183[9]
  i2182.unscaledTime = !!i2183[10]
  i2182.allowMultipleCanvasRenderers = !!i2183[11]
  var i2185 = i2183[12]
  var i2184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i2185.length; i += 2) {
  request.r(i2185[i + 0], i2185[i + 1], 1, i2184, '')
  }
  i2182.canvasRenderers = i2184
  i2182.enableSeparatorSlots = !!i2183[13]
  i2182.updateSeparatorPartLocation = !!i2183[14]
  var i2187 = i2183[15]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( i2187[i + 0] );
  }
  i2182.separatorSlotNames = i2186
  var i2189 = i2183[16]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 1, i2188, '')
  }
  i2182.separatorParts = i2188
  i2182.meshGenerator = request.d('Spine.Unity.MeshGenerator', i2183[17], i2182.meshGenerator)
  request.r(i2183[18], i2183[19], 0, i2182, 'm_Material')
  i2182.m_Maskable = !!i2183[20]
  i2182.m_Color = new pc.Color(i2183[21], i2183[22], i2183[23], i2183[24])
  i2182.m_RaycastTarget = !!i2183[25]
  i2182.m_RaycastPadding = new pc.Vec4( i2183[26], i2183[27], i2183[28], i2183[29] )
  return i2182
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i2196 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i2197 = data
  i2196.settings = request.d('Spine.Unity.MeshGenerator+Settings', i2197[0], i2196.settings)
  return i2196
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i2198 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i2199 = data
  i2198.useClipping = !!i2199[0]
  i2198.zSpacing = i2199[1]
  i2198.pmaVertexColors = !!i2199[2]
  i2198.tintBlack = !!i2199[3]
  i2198.canvasGroupTintBlack = !!i2199[4]
  i2198.calculateTangents = !!i2199[5]
  i2198.addNormals = !!i2199[6]
  i2198.immutableTriangles = !!i2199[7]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'clip')
  request.r(i2201[2], i2201[3], 0, i2200, 'outputAudioMixerGroup')
  i2200.playOnAwake = !!i2201[4]
  i2200.loop = !!i2201[5]
  i2200.time = i2201[6]
  i2200.volume = i2201[7]
  i2200.pitch = i2201[8]
  i2200.enabled = !!i2201[9]
  return i2200
}

Deserializers["Sound"] = function (request, data, root) {
  var i2202 = root || request.c( 'Sound' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'audioSource')
  i2202.poolType = i2203[2]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.index = i2205[1]
  i2204.startup = !!i2205[2]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2207 = data
  i2206.aspect = i2207[0]
  i2206.orthographic = !!i2207[1]
  i2206.orthographicSize = i2207[2]
  i2206.backgroundColor = new pc.Color(i2207[3], i2207[4], i2207[5], i2207[6])
  i2206.nearClipPlane = i2207[7]
  i2206.farClipPlane = i2207[8]
  i2206.fieldOfView = i2207[9]
  i2206.depth = i2207[10]
  i2206.clearFlags = i2207[11]
  i2206.cullingMask = i2207[12]
  i2206.rect = i2207[13]
  request.r(i2207[14], i2207[15], 0, i2206, 'targetTexture')
  i2206.usePhysicalProperties = !!i2207[16]
  i2206.focalLength = i2207[17]
  i2206.sensorSize = new pc.Vec2( i2207[18], i2207[19] )
  i2206.lensShift = new pc.Vec2( i2207[20], i2207[21] )
  i2206.gateFit = i2207[22]
  i2206.commandBufferCount = i2207[23]
  i2206.cameraType = i2207[24]
  i2206.enabled = !!i2207[25]
  return i2206
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2209 = data
  i2208.m_UiScaleMode = i2209[0]
  i2208.m_ReferencePixelsPerUnit = i2209[1]
  i2208.m_ScaleFactor = i2209[2]
  i2208.m_ReferenceResolution = new pc.Vec2( i2209[3], i2209[4] )
  i2208.m_ScreenMatchMode = i2209[5]
  i2208.m_MatchWidthOrHeight = i2209[6]
  i2208.m_PhysicalUnit = i2209[7]
  i2208.m_FallbackScreenDPI = i2209[8]
  i2208.m_DefaultSpriteDPI = i2209[9]
  i2208.m_DynamicPixelsPerUnit = i2209[10]
  i2208.m_PresetInfoIsWorld = !!i2209[11]
  return i2208
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2210 = root || request.c( 'UIManager' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'parent')
  return i2210
}

Deserializers["CanvasGameplay"] = function (request, data, root) {
  var i2212 = root || request.c( 'CanvasGameplay' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'rectContainerLevel')
  request.r(i2213[2], i2213[3], 0, i2212, 'txtLevel')
  i2212.isdestroyOnClose = !!i2213[4]
  return i2212
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2215 = data
  i2214.m_Spacing = i2215[0]
  i2214.m_ChildForceExpandWidth = !!i2215[1]
  i2214.m_ChildForceExpandHeight = !!i2215[2]
  i2214.m_ChildControlWidth = !!i2215[3]
  i2214.m_ChildControlHeight = !!i2215[4]
  i2214.m_ChildScaleWidth = !!i2215[5]
  i2214.m_ChildScaleHeight = !!i2215[6]
  i2214.m_ReverseArrangement = !!i2215[7]
  i2214.m_Padding = UnityEngine.RectOffset.FromPaddings(i2215[8], i2215[9], i2215[10], i2215[11])
  i2214.m_ChildAlignment = i2215[12]
  return i2214
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2217 = data
  i2216.m_HorizontalFit = i2217[0]
  i2216.m_VerticalFit = i2217[1]
  return i2216
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2219 = data
  i2218.m_StartCorner = i2219[0]
  i2218.m_StartAxis = i2219[1]
  i2218.m_CellSize = new pc.Vec2( i2219[2], i2219[3] )
  i2218.m_Spacing = new pc.Vec2( i2219[4], i2219[5] )
  i2218.m_Constraint = i2219[6]
  i2218.m_ConstraintCount = i2219[7]
  i2218.m_Padding = UnityEngine.RectOffset.FromPaddings(i2219[8], i2219[9], i2219[10], i2219[11])
  i2218.m_ChildAlignment = i2219[12]
  return i2218
}

Deserializers["GridManager"] = function (request, data, root) {
  var i2220 = root || request.c( 'GridManager' )
  var i2221 = data
  i2220.width = i2221[0]
  i2220.height = i2221[1]
  var i2223 = i2221[2]
  var i2222 = new (System.Collections.Generic.List$1(Bridge.ns('ColorSetting')))
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.add(request.d('ColorSetting', i2223[i + 0]));
  }
  i2220.colorSettings = i2222
  i2220.borderPadding = i2221[3]
  i2220.wrongColor = new pc.Color(i2221[4], i2221[5], i2221[6], i2221[7])
  i2220.defaultDragColor = new pc.Color(i2221[8], i2221[9], i2221[10], i2221[11])
  i2220.standardSize = i2221[12]
  var i2225 = i2221[13]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('BorderUnit')))
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 1, i2224, '')
  }
  i2220.borderPoolList = i2224
  request.r(i2221[14], i2221[15], 0, i2220, 'canvasWin')
  request.r(i2221[16], i2221[17], 0, i2220, 'tutorial2')
  request.r(i2221[18], i2221[19], 0, i2220, 'cellOrientationSO')
  return i2220
}

Deserializers["ColorSetting"] = function (request, data, root) {
  var i2228 = root || request.c( 'ColorSetting' )
  var i2229 = data
  i2228.type = i2229[0]
  i2228.color = new pc.Color(i2229[1], i2229[2], i2229[3], i2229[4])
  return i2228
}

Deserializers["Level"] = function (request, data, root) {
  var i2232 = root || request.c( 'Level' )
  var i2233 = data
  return i2232
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i2234 = root || request.c( 'Tutorial' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialStep')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('TutorialStep', i2237[i + 0]));
  }
  i2234.tutorialSteps = i2236
  request.r(i2235[1], i2235[2], 0, i2234, 'rectHand')
  request.r(i2235[3], i2235[4], 0, i2234, 'overlay')
  return i2234
}

Deserializers["TutorialStep"] = function (request, data, root) {
  var i2240 = root || request.c( 'TutorialStep' )
  var i2241 = data
  var i2243 = i2241[0]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('Cell')))
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 1, i2242, '')
  }
  i2240.targetCells = i2242
  request.r(i2241[1], i2241[2], 0, i2240, 'pos1')
  request.r(i2241[3], i2241[4], 0, i2240, 'pos2')
  return i2240
}

Deserializers["Tutorial2"] = function (request, data, root) {
  var i2246 = root || request.c( 'Tutorial2' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'hand')
  request.r(i2247[2], i2247[3], 0, i2246, 'pos1')
  request.r(i2247[4], i2247[5], 0, i2246, 'pos2')
  i2246.moveDuration = i2247[6]
  return i2246
}

Deserializers["Cell"] = function (request, data, root) {
  var i2248 = root || request.c( 'Cell' )
  var i2249 = data
  i2248.gridX = i2249[0]
  i2248.gridY = i2249[1]
  i2248.numberValue = i2249[2]
  i2248.solutionID = i2249[3]
  i2248.colorType = i2249[4]
  i2248.orientationType = i2249[5]
  i2248.limitType = i2249[6]
  i2248.playType = i2249[7]
  i2248.isLocked = !!i2249[8]
  i2248.groupID = i2249[9]
  request.r(i2249[10], i2249[11], 0, i2248, 'cellImage')
  request.r(i2249[12], i2249[13], 0, i2248, 'numberText')
  request.r(i2249[14], i2249[15], 0, i2248, 'imgOrientation')
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2251 = data
  i2250.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2251[0], i2250.main)
  i2250.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2251[1], i2250.colorBySpeed)
  i2250.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2251[2], i2250.colorOverLifetime)
  i2250.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2251[3], i2250.emission)
  i2250.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2251[4], i2250.rotationBySpeed)
  i2250.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2251[5], i2250.rotationOverLifetime)
  i2250.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2251[6], i2250.shape)
  i2250.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2251[7], i2250.sizeBySpeed)
  i2250.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2251[8], i2250.sizeOverLifetime)
  i2250.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2251[9], i2250.textureSheetAnimation)
  i2250.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2251[10], i2250.velocityOverLifetime)
  i2250.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2251[11], i2250.noise)
  i2250.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2251[12], i2250.inheritVelocity)
  i2250.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2251[13], i2250.forceOverLifetime)
  i2250.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2251[14], i2250.limitVelocityOverLifetime)
  i2250.useAutoRandomSeed = !!i2251[15]
  i2250.randomSeed = i2251[16]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemMain()
  var i2253 = data
  i2252.duration = i2253[0]
  i2252.loop = !!i2253[1]
  i2252.prewarm = !!i2253[2]
  i2252.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.startDelay)
  i2252.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[4], i2252.startLifetime)
  i2252.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[5], i2252.startSpeed)
  i2252.startSize3D = !!i2253[6]
  i2252.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[7], i2252.startSizeX)
  i2252.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[8], i2252.startSizeY)
  i2252.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[9], i2252.startSizeZ)
  i2252.startRotation3D = !!i2253[10]
  i2252.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[11], i2252.startRotationX)
  i2252.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[12], i2252.startRotationY)
  i2252.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[13], i2252.startRotationZ)
  i2252.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2253[14], i2252.startColor)
  i2252.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[15], i2252.gravityModifier)
  i2252.simulationSpace = i2253[16]
  request.r(i2253[17], i2253[18], 0, i2252, 'customSimulationSpace')
  i2252.simulationSpeed = i2253[19]
  i2252.useUnscaledTime = !!i2253[20]
  i2252.scalingMode = i2253[21]
  i2252.playOnAwake = !!i2253[22]
  i2252.maxParticles = i2253[23]
  i2252.emitterVelocityMode = i2253[24]
  i2252.stopAction = i2253[25]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2254 = root || new pc.MinMaxCurve()
  var i2255 = data
  i2254.mode = i2255[0]
  i2254.curveMin = new pc.AnimationCurve( { keys_flow: i2255[1] } )
  i2254.curveMax = new pc.AnimationCurve( { keys_flow: i2255[2] } )
  i2254.curveMultiplier = i2255[3]
  i2254.constantMin = i2255[4]
  i2254.constantMax = i2255[5]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2256 = root || new pc.MinMaxGradient()
  var i2257 = data
  i2256.mode = i2257[0]
  i2256.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2257[1], i2256.gradientMin)
  i2256.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2257[2], i2256.gradientMax)
  i2256.colorMin = new pc.Color(i2257[3], i2257[4], i2257[5], i2257[6])
  i2256.colorMax = new pc.Color(i2257[7], i2257[8], i2257[9], i2257[10])
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2259 = data
  i2258.mode = i2259[0]
  var i2261 = i2259[1]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2261[i + 0]) );
  }
  i2258.colorKeys = i2260
  var i2263 = i2259[2]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2263[i + 0]) );
  }
  i2258.alphaKeys = i2262
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2267 = data
  i2266.color = new pc.Color(i2267[0], i2267[1], i2267[2], i2267[3])
  i2266.time = i2267[4]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2271 = data
  i2270.alpha = i2271[0]
  i2270.time = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2272 = root || new pc.ParticleSystemColorBySpeed()
  var i2273 = data
  i2272.enabled = !!i2273[0]
  i2272.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2273[1], i2272.color)
  i2272.range = new pc.Vec2( i2273[2], i2273[3] )
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemColorOverLifetime()
  var i2275 = data
  i2274.enabled = !!i2275[0]
  i2274.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2275[1], i2274.color)
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2276 = root || new pc.ParticleSystemEmitter()
  var i2277 = data
  i2276.enabled = !!i2277[0]
  i2276.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[1], i2276.rateOverTime)
  i2276.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[2], i2276.rateOverDistance)
  var i2279 = i2277[3]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2279[i + 0]) );
  }
  i2276.bursts = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemBurst()
  var i2283 = data
  i2282.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[0], i2282.count)
  i2282.cycleCount = i2283[1]
  i2282.minCount = i2283[2]
  i2282.maxCount = i2283[3]
  i2282.repeatInterval = i2283[4]
  i2282.time = i2283[5]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemRotationBySpeed()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[1], i2284.x)
  i2284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[2], i2284.y)
  i2284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[3], i2284.z)
  i2284.separateAxes = !!i2285[4]
  i2284.range = new pc.Vec2( i2285[5], i2285[6] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[1], i2286.x)
  i2286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[2], i2286.y)
  i2286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[3], i2286.z)
  i2286.separateAxes = !!i2287[4]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemShape()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.shapeType = i2289[1]
  i2288.randomDirectionAmount = i2289[2]
  i2288.sphericalDirectionAmount = i2289[3]
  i2288.randomPositionAmount = i2289[4]
  i2288.alignToDirection = !!i2289[5]
  i2288.radius = i2289[6]
  i2288.radiusMode = i2289[7]
  i2288.radiusSpread = i2289[8]
  i2288.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[9], i2288.radiusSpeed)
  i2288.radiusThickness = i2289[10]
  i2288.angle = i2289[11]
  i2288.length = i2289[12]
  i2288.boxThickness = new pc.Vec3( i2289[13], i2289[14], i2289[15] )
  i2288.meshShapeType = i2289[16]
  request.r(i2289[17], i2289[18], 0, i2288, 'mesh')
  request.r(i2289[19], i2289[20], 0, i2288, 'meshRenderer')
  request.r(i2289[21], i2289[22], 0, i2288, 'skinnedMeshRenderer')
  i2288.useMeshMaterialIndex = !!i2289[23]
  i2288.meshMaterialIndex = i2289[24]
  i2288.useMeshColors = !!i2289[25]
  i2288.normalOffset = i2289[26]
  i2288.arc = i2289[27]
  i2288.arcMode = i2289[28]
  i2288.arcSpread = i2289[29]
  i2288.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[30], i2288.arcSpeed)
  i2288.donutRadius = i2289[31]
  i2288.position = new pc.Vec3( i2289[32], i2289[33], i2289[34] )
  i2288.rotation = new pc.Vec3( i2289[35], i2289[36], i2289[37] )
  i2288.scale = new pc.Vec3( i2289[38], i2289[39], i2289[40] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemSizeBySpeed()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.x)
  i2290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.y)
  i2290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[3], i2290.z)
  i2290.separateAxes = !!i2291[4]
  i2290.range = new pc.Vec2( i2291[5], i2291[6] )
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[1], i2292.x)
  i2292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[2], i2292.y)
  i2292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[3], i2292.z)
  i2292.separateAxes = !!i2293[4]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.mode = i2295[1]
  i2294.animation = i2295[2]
  i2294.numTilesX = i2295[3]
  i2294.numTilesY = i2295[4]
  i2294.useRandomRow = !!i2295[5]
  i2294.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[6], i2294.frameOverTime)
  i2294.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[7], i2294.startFrame)
  i2294.cycleCount = i2295[8]
  i2294.rowIndex = i2295[9]
  i2294.flipU = i2295[10]
  i2294.flipV = i2295[11]
  i2294.spriteCount = i2295[12]
  var i2297 = i2295[13]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.sprites = i2296
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[1], i2300.x)
  i2300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.y)
  i2300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.z)
  i2300.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[4], i2300.radial)
  i2300.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[5], i2300.speedModifier)
  i2300.space = i2301[6]
  i2300.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[7], i2300.orbitalX)
  i2300.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[8], i2300.orbitalY)
  i2300.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[9], i2300.orbitalZ)
  i2300.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[10], i2300.orbitalOffsetX)
  i2300.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[11], i2300.orbitalOffsetY)
  i2300.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[12], i2300.orbitalOffsetZ)
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemNoise()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.separateAxes = !!i2303[1]
  i2302.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[2], i2302.strengthX)
  i2302.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[3], i2302.strengthY)
  i2302.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[4], i2302.strengthZ)
  i2302.frequency = i2303[5]
  i2302.damping = !!i2303[6]
  i2302.octaveCount = i2303[7]
  i2302.octaveMultiplier = i2303[8]
  i2302.octaveScale = i2303[9]
  i2302.quality = i2303[10]
  i2302.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[11], i2302.scrollSpeed)
  i2302.scrollSpeedMultiplier = i2303[12]
  i2302.remapEnabled = !!i2303[13]
  i2302.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[14], i2302.remapX)
  i2302.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[15], i2302.remapY)
  i2302.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[16], i2302.remapZ)
  i2302.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[17], i2302.positionAmount)
  i2302.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[18], i2302.rotationAmount)
  i2302.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[19], i2302.sizeAmount)
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemInheritVelocity()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.mode = i2305[1]
  i2304.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.curve)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemForceOverLifetime()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.space = i2307[4]
  i2306.randomized = !!i2307[5]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[1], i2308.limit)
  i2308.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.limitX)
  i2308.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[3], i2308.limitY)
  i2308.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[4], i2308.limitZ)
  i2308.dampen = i2309[5]
  i2308.separateAxes = !!i2309[6]
  i2308.space = i2309[7]
  i2308.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[8], i2308.drag)
  i2308.multiplyDragByParticleSize = !!i2309[9]
  i2308.multiplyDragByParticleVelocity = !!i2309[10]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'mesh')
  i2310.meshCount = i2311[2]
  i2310.activeVertexStreamsCount = i2311[3]
  i2310.alignment = i2311[4]
  i2310.renderMode = i2311[5]
  i2310.sortMode = i2311[6]
  i2310.lengthScale = i2311[7]
  i2310.velocityScale = i2311[8]
  i2310.cameraVelocityScale = i2311[9]
  i2310.normalDirection = i2311[10]
  i2310.sortingFudge = i2311[11]
  i2310.minParticleSize = i2311[12]
  i2310.maxParticleSize = i2311[13]
  i2310.pivot = new pc.Vec3( i2311[14], i2311[15], i2311[16] )
  request.r(i2311[17], i2311[18], 0, i2310, 'trailMaterial')
  i2310.applyActiveColorSpace = !!i2311[19]
  i2310.enabled = !!i2311[20]
  request.r(i2311[21], i2311[22], 0, i2310, 'sharedMaterial')
  var i2313 = i2311[23]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2310.sharedMaterials = i2312
  i2310.receiveShadows = !!i2311[24]
  i2310.shadowCastingMode = i2311[25]
  i2310.sortingLayerID = i2311[26]
  i2310.sortingOrder = i2311[27]
  i2310.lightmapIndex = i2311[28]
  i2310.lightmapSceneIndex = i2311[29]
  i2310.lightmapScaleOffset = new pc.Vec4( i2311[30], i2311[31], i2311[32], i2311[33] )
  i2310.lightProbeUsage = i2311[34]
  i2310.reflectionProbeUsage = i2311[35]
  return i2310
}

Deserializers["CanvasWin"] = function (request, data, root) {
  var i2316 = root || request.c( 'CanvasWin' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'txtWinLevel')
  var i2319 = i2317[2]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 1, i2318, '')
  }
  i2316.winParticles = i2318
  request.r(i2317[3], i2317[4], 0, i2316, 'skeletonGraphic')
  i2316.isdestroyOnClose = !!i2317[5]
  return i2316
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_FirstSelected')
  i2322.m_sendNavigationEvents = !!i2323[2]
  i2322.m_DragThreshold = i2323[3]
  return i2322
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2325 = data
  i2324.m_HorizontalAxis = i2325[0]
  i2324.m_VerticalAxis = i2325[1]
  i2324.m_SubmitButton = i2325[2]
  i2324.m_CancelButton = i2325[3]
  i2324.m_InputActionsPerSecond = i2325[4]
  i2324.m_RepeatDelay = i2325[5]
  i2324.m_ForceModuleActive = !!i2325[6]
  i2324.m_SendPointerHoverToParent = !!i2325[7]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2327 = data
  i2326.ambientIntensity = i2327[0]
  i2326.reflectionIntensity = i2327[1]
  i2326.ambientMode = i2327[2]
  i2326.ambientLight = new pc.Color(i2327[3], i2327[4], i2327[5], i2327[6])
  i2326.ambientSkyColor = new pc.Color(i2327[7], i2327[8], i2327[9], i2327[10])
  i2326.ambientGroundColor = new pc.Color(i2327[11], i2327[12], i2327[13], i2327[14])
  i2326.ambientEquatorColor = new pc.Color(i2327[15], i2327[16], i2327[17], i2327[18])
  i2326.fogColor = new pc.Color(i2327[19], i2327[20], i2327[21], i2327[22])
  i2326.fogEndDistance = i2327[23]
  i2326.fogStartDistance = i2327[24]
  i2326.fogDensity = i2327[25]
  i2326.fog = !!i2327[26]
  request.r(i2327[27], i2327[28], 0, i2326, 'skybox')
  i2326.fogMode = i2327[29]
  var i2329 = i2327[30]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2329[i + 0]) );
  }
  i2326.lightmaps = i2328
  i2326.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2327[31], i2326.lightProbes)
  i2326.lightmapsMode = i2327[32]
  i2326.mixedBakeMode = i2327[33]
  i2326.environmentLightingMode = i2327[34]
  i2326.ambientProbe = new pc.SphericalHarmonicsL2(i2327[35])
  request.r(i2327[36], i2327[37], 0, i2326, 'customReflection')
  request.r(i2327[38], i2327[39], 0, i2326, 'defaultReflection')
  i2326.defaultReflectionMode = i2327[40]
  i2326.defaultReflectionResolution = i2327[41]
  i2326.sunLightObjectId = i2327[42]
  i2326.pixelLightCount = i2327[43]
  i2326.defaultReflectionHDR = !!i2327[44]
  i2326.hasLightDataAsset = !!i2327[45]
  i2326.hasManualGenerate = !!i2327[46]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'lightmapColor')
  request.r(i2333[2], i2333[3], 0, i2332, 'lightmapDirection')
  request.r(i2333[4], i2333[5], 0, i2332, 'shadowMask')
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2334 = root || new UnityEngine.LightProbes()
  var i2335 = data
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2345[i + 0]));
  }
  i2342.ShaderCompilationErrors = i2344
  i2342.name = i2343[1]
  i2342.guid = i2343[2]
  var i2347 = i2343[3]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2342.shaderDefinedKeywords = i2346
  var i2349 = i2343[4]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2349[i + 0]) );
  }
  i2342.passes = i2348
  var i2351 = i2343[5]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2351[i + 0]) );
  }
  i2342.usePasses = i2350
  var i2353 = i2343[6]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2353[i + 0]) );
  }
  i2342.defaultParameterValues = i2352
  request.r(i2343[7], i2343[8], 0, i2342, 'unityFallbackShader')
  i2342.readDepth = !!i2343[9]
  i2342.hasDepthOnlyPass = !!i2343[10]
  i2342.isCreatedByShaderGraph = !!i2343[11]
  i2342.disableBatching = !!i2343[12]
  i2342.compiled = !!i2343[13]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2357 = data
  i2356.shaderName = i2357[0]
  i2356.errorMessage = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2360 = root || new pc.UnityShaderPass()
  var i2361 = data
  i2360.id = i2361[0]
  i2360.subShaderIndex = i2361[1]
  i2360.name = i2361[2]
  i2360.passType = i2361[3]
  i2360.grabPassTextureName = i2361[4]
  i2360.usePass = !!i2361[5]
  i2360.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[6], i2360.zTest)
  i2360.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[7], i2360.zWrite)
  i2360.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[8], i2360.culling)
  i2360.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2361[9], i2360.blending)
  i2360.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2361[10], i2360.alphaBlending)
  i2360.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[11], i2360.colorWriteMask)
  i2360.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[12], i2360.offsetUnits)
  i2360.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[13], i2360.offsetFactor)
  i2360.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[14], i2360.stencilRef)
  i2360.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[15], i2360.stencilReadMask)
  i2360.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[16], i2360.stencilWriteMask)
  i2360.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2361[17], i2360.stencilOp)
  i2360.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2361[18], i2360.stencilOpFront)
  i2360.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2361[19], i2360.stencilOpBack)
  var i2363 = i2361[20]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2363[i + 0]) );
  }
  i2360.tags = i2362
  var i2365 = i2361[21]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( i2365[i + 0] );
  }
  i2360.passDefinedKeywords = i2364
  var i2367 = i2361[22]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2367[i + 0]) );
  }
  i2360.passDefinedKeywordGroups = i2366
  var i2369 = i2361[23]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2369[i + 0]) );
  }
  i2360.variants = i2368
  var i2371 = i2361[24]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2371[i + 0]) );
  }
  i2360.excludedVariants = i2370
  i2360.hasDepthReader = !!i2361[25]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2373 = data
  i2372.val = i2373[0]
  i2372.name = i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2375 = data
  i2374.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[0], i2374.src)
  i2374.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[1], i2374.dst)
  i2374.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[2], i2374.op)
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2377 = data
  i2376.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[0], i2376.pass)
  i2376.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[1], i2376.fail)
  i2376.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[2], i2376.zFail)
  i2376.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2377[3], i2376.comp)
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.value = i2381[1]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2385 = data
  var i2387 = i2385[0]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( i2387[i + 0] );
  }
  i2384.keywords = i2386
  i2384.hasDiscard = !!i2385[1]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2391 = data
  i2390.passId = i2391[0]
  i2390.subShaderIndex = i2391[1]
  var i2393 = i2391[2]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( i2393[i + 0] );
  }
  i2390.keywords = i2392
  i2390.vertexProgram = i2391[3]
  i2390.fragmentProgram = i2391[4]
  i2390.exportedForWebGl2 = !!i2391[5]
  i2390.readDepth = !!i2391[6]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'shader')
  i2396.pass = i2397[2]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2401 = data
  i2400.name = i2401[0]
  i2400.type = i2401[1]
  i2400.value = new pc.Vec4( i2401[2], i2401[3], i2401[4], i2401[5] )
  i2400.textureValue = i2401[6]
  i2400.shaderPropertyFlag = i2401[7]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2403 = data
  i2402.name = i2403[0]
  request.r(i2403[1], i2403[2], 0, i2402, 'texture')
  i2402.aabb = i2403[3]
  i2402.vertices = i2403[4]
  i2402.triangles = i2403[5]
  i2402.textureRect = UnityEngine.Rect.MinMaxRect(i2403[6], i2403[7], i2403[8], i2403[9])
  i2402.packedRect = UnityEngine.Rect.MinMaxRect(i2403[10], i2403[11], i2403[12], i2403[13])
  i2402.border = new pc.Vec4( i2403[14], i2403[15], i2403[16], i2403[17] )
  i2402.transparency = i2403[18]
  i2402.bounds = i2403[19]
  i2402.pixelsPerUnit = i2403[20]
  i2402.textureWidth = i2403[21]
  i2402.textureHeight = i2403[22]
  i2402.nativeSize = new pc.Vec2( i2403[23], i2403[24] )
  i2402.pivot = new pc.Vec2( i2403[25], i2403[26] )
  i2402.textureRectOffset = new pc.Vec2( i2403[27], i2403[28] )
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2405 = data
  i2404.name = i2405[0]
  i2404.ascent = i2405[1]
  i2404.originalLineHeight = i2405[2]
  i2404.fontSize = i2405[3]
  var i2407 = i2405[4]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2407[i + 0]) );
  }
  i2404.characterInfo = i2406
  request.r(i2405[5], i2405[6], 0, i2404, 'texture')
  i2404.originalFontSize = i2405[7]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2411 = data
  i2410.index = i2411[0]
  i2410.advance = i2411[1]
  i2410.bearing = i2411[2]
  i2410.glyphWidth = i2411[3]
  i2410.glyphHeight = i2411[4]
  i2410.minX = i2411[5]
  i2410.maxX = i2411[6]
  i2410.minY = i2411[7]
  i2410.maxY = i2411[8]
  i2410.uvBottomLeftX = i2411[9]
  i2410.uvBottomLeftY = i2411[10]
  i2410.uvBottomRightX = i2411[11]
  i2410.uvBottomRightY = i2411[12]
  i2410.uvTopLeftX = i2411[13]
  i2410.uvTopLeftY = i2411[14]
  i2410.uvTopRightX = i2411[15]
  i2410.uvTopRightY = i2411[16]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.bytes64 = i2413[1]
  i2412.data = i2413[2]
  return i2412
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2414 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 2, i2416, '')
  }
  i2414.atlasAssets = i2416
  i2414.scale = i2415[1]
  request.r(i2415[2], i2415[3], 0, i2414, 'skeletonJSON')
  i2414.isUpgradingBlendModeMaterials = !!i2415[4]
  i2414.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2415[5], i2414.blendModeMaterials)
  var i2419 = i2415[6]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 1, i2418, '')
  }
  i2414.skeletonDataModifiers = i2418
  var i2421 = i2415[7]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( i2421[i + 0] );
  }
  i2414.fromAnimation = i2420
  var i2423 = i2415[8]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2414.toAnimation = i2422
  i2414.duration = i2415[9]
  i2414.defaultMix = i2415[10]
  request.r(i2415[11], i2415[12], 0, i2414, 'controller')
  return i2414
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2426 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2427 = data
  i2426.applyAdditiveMaterial = !!i2427[0]
  var i2429 = i2427[1]
  var i2428 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2429[i + 0]));
  }
  i2426.additiveMaterials = i2428
  var i2431 = i2427[2]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2431[i + 0]));
  }
  i2426.multiplyMaterials = i2430
  var i2433 = i2427[3]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2433[i + 0]));
  }
  i2426.screenMaterials = i2432
  i2426.requiresBlendModeMaterials = !!i2427[4]
  return i2426
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2436 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2437 = data
  i2436.pageName = i2437[0]
  request.r(i2437[1], i2437[2], 0, i2436, 'material')
  return i2436
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2440 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'atlasFile')
  var i2443 = i2441[2]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2440.materials = i2442
  return i2440
}

Deserializers["CellOrientationSO"] = function (request, data, root) {
  var i2444 = root || request.c( 'CellOrientationSO' )
  var i2445 = data
  var i2447 = i2445[0]
  var i2446 = new (System.Collections.Generic.List$1(Bridge.ns('CellOrientationData')))
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.add(request.d('CellOrientationData', i2447[i + 0]));
  }
  i2444.cellOrientationDatas = i2446
  return i2444
}

Deserializers["CellOrientationData"] = function (request, data, root) {
  var i2450 = root || request.c( 'CellOrientationData' )
  var i2451 = data
  i2450.orientationType = i2451[0]
  i2450.colorType = i2451[1]
  request.r(i2451[2], i2451[3], 0, i2450, 'sprite')
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2453 = data
  var i2455 = i2453[0]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2455[i + 0]) );
  }
  i2452.files = i2454
  i2452.componentToPrefabIds = i2453[1]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2459 = data
  i2458.path = i2459[0]
  request.r(i2459[1], i2459[2], 0, i2458, 'unityObject')
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2463[i + 0]) );
  }
  i2460.scriptsExecutionOrder = i2462
  var i2465 = i2461[1]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2465[i + 0]) );
  }
  i2460.sortingLayers = i2464
  var i2467 = i2461[2]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2467[i + 0]) );
  }
  i2460.cullingLayers = i2466
  i2460.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2461[3], i2460.timeSettings)
  i2460.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2461[4], i2460.physicsSettings)
  i2460.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2461[5], i2460.physics2DSettings)
  i2460.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2461[6], i2460.qualitySettings)
  i2460.enableRealtimeShadows = !!i2461[7]
  i2460.enableAutoInstancing = !!i2461[8]
  i2460.enableStaticBatching = !!i2461[9]
  i2460.enableDynamicBatching = !!i2461[10]
  i2460.usePreservativeDynamicBatching = !!i2461[11]
  i2460.lightmapEncodingQuality = i2461[12]
  i2460.desiredColorSpace = i2461[13]
  var i2469 = i2461[14]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2460.allTags = i2468
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.value = i2473[1]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2477 = data
  i2476.id = i2477[0]
  i2476.name = i2477[1]
  i2476.value = i2477[2]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2481 = data
  i2480.id = i2481[0]
  i2480.name = i2481[1]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2483 = data
  i2482.fixedDeltaTime = i2483[0]
  i2482.maximumDeltaTime = i2483[1]
  i2482.timeScale = i2483[2]
  i2482.maximumParticleTimestep = i2483[3]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2485 = data
  i2484.gravity = new pc.Vec3( i2485[0], i2485[1], i2485[2] )
  i2484.defaultSolverIterations = i2485[3]
  i2484.bounceThreshold = i2485[4]
  i2484.autoSyncTransforms = !!i2485[5]
  i2484.autoSimulation = !!i2485[6]
  var i2487 = i2485[7]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2487[i + 0]) );
  }
  i2484.collisionMatrix = i2486
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2491 = data
  i2490.enabled = !!i2491[0]
  i2490.layerId = i2491[1]
  i2490.otherLayerId = i2491[2]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'material')
  i2492.gravity = new pc.Vec2( i2493[2], i2493[3] )
  i2492.positionIterations = i2493[4]
  i2492.velocityIterations = i2493[5]
  i2492.velocityThreshold = i2493[6]
  i2492.maxLinearCorrection = i2493[7]
  i2492.maxAngularCorrection = i2493[8]
  i2492.maxTranslationSpeed = i2493[9]
  i2492.maxRotationSpeed = i2493[10]
  i2492.baumgarteScale = i2493[11]
  i2492.baumgarteTOIScale = i2493[12]
  i2492.timeToSleep = i2493[13]
  i2492.linearSleepTolerance = i2493[14]
  i2492.angularSleepTolerance = i2493[15]
  i2492.defaultContactOffset = i2493[16]
  i2492.autoSimulation = !!i2493[17]
  i2492.queriesHitTriggers = !!i2493[18]
  i2492.queriesStartInColliders = !!i2493[19]
  i2492.callbacksOnDisable = !!i2493[20]
  i2492.reuseCollisionCallbacks = !!i2493[21]
  i2492.autoSyncTransforms = !!i2493[22]
  var i2495 = i2493[23]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2495[i + 0]) );
  }
  i2492.collisionMatrix = i2494
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2499 = data
  i2498.enabled = !!i2499[0]
  i2498.layerId = i2499[1]
  i2498.otherLayerId = i2499[2]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2501 = data
  var i2503 = i2501[0]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2503[i + 0]) );
  }
  i2500.qualityLevels = i2502
  var i2505 = i2501[1]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( i2505[i + 0] );
  }
  i2500.names = i2504
  i2500.shadows = i2501[2]
  i2500.anisotropicFiltering = i2501[3]
  i2500.antiAliasing = i2501[4]
  i2500.lodBias = i2501[5]
  i2500.shadowCascades = i2501[6]
  i2500.shadowDistance = i2501[7]
  i2500.shadowmaskMode = i2501[8]
  i2500.shadowProjection = i2501[9]
  i2500.shadowResolution = i2501[10]
  i2500.softParticles = !!i2501[11]
  i2500.softVegetation = !!i2501[12]
  i2500.activeColorSpace = i2501[13]
  i2500.desiredColorSpace = i2501[14]
  i2500.masterTextureLimit = i2501[15]
  i2500.maxQueuedFrames = i2501[16]
  i2500.particleRaycastBudget = i2501[17]
  i2500.pixelLightCount = i2501[18]
  i2500.realtimeReflectionProbes = !!i2501[19]
  i2500.shadowCascade2Split = i2501[20]
  i2500.shadowCascade4Split = new pc.Vec3( i2501[21], i2501[22], i2501[23] )
  i2500.streamingMipmapsActive = !!i2501[24]
  i2500.vSyncCount = i2501[25]
  i2500.asyncUploadBufferSize = i2501[26]
  i2500.asyncUploadTimeSlice = i2501[27]
  i2500.billboardsFaceCameraPosition = !!i2501[28]
  i2500.shadowNearPlaneOffset = i2501[29]
  i2500.streamingMipmapsMemoryBudget = i2501[30]
  i2500.maximumLODLevel = i2501[31]
  i2500.streamingMipmapsAddAllCameras = !!i2501[32]
  i2500.streamingMipmapsMaxLevelReduction = i2501[33]
  i2500.streamingMipmapsRenderersPerFrame = i2501[34]
  i2500.resolutionScalingFixedDPIFactor = i2501[35]
  i2500.streamingMipmapsMaxFileIORequests = i2501[36]
  i2500.currentQualityLevel = i2501[37]
  return i2500
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

Deserializers.buildID = "bd61146a-8b22-46e6-882d-7d7d53c4a47b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

