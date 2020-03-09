(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[77],{210:function(n,i,e){"use strict";e.r(i),i.default="#version 300 es\n#ifdef GL_ES\n    precision highp float;\n    precision highp int;\n    precision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n#define HW_PERFORMANCE 1\nuniform vec3      iResolution;\nuniform float     iTime;\nuniform float     iChannelTime[4];\nuniform vec4      iMouse;\nuniform vec4      iDate;\nuniform float     iSampleRate;\nuniform vec3      iChannelResolution[4];\nuniform int       iFrame;\nuniform float     iTimeDelta;\nuniform float     iFrameRate;\nstruct Channel {\n    vec3  resolution;\n    float time;\n};\nuniform Channel iChannel[4];\nuniform sampler2D iChannel0;\nuniform sampler2D iChannel1;\nuniform sampler2D iChannel2;\nuniform sampler2D iChannel3;\nvoid mainImage( out vec4 c, in vec2 f );\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n// Original one hosted on https://www.shadertoy.com/view/wdGSzt\n\n#define PI\t\t3.14159265359\n\n#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)\n\nvoid rotate(in float angle, inout vec2 uv)\n{\n    float ca = cos(angle);\n    float sa = sin(angle);\n    uv *= mat2(ca, -sa, sa, ca);\n}\n\nfloat map(vec3 p)\n{\n    return length(mod(p, 2.0) - 1.0) - 1.375;\n}\n\nvec3 getNormal(vec3 p)\n{\n    float t = map(p);\n    vec2 d = vec2(.5, 0.0);\n    return normalize(vec3(t - map(p + d.xyy), t - map(p + d.yxy), t - map(p + d.yyx)));\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;\n    vec2 q = fragCoord.xy / iResolution.xy;\n\n    rotate(iTime*.5, uv);\n\n    float tZ = (sin(iTime) * 0.25 + 0.5) * 0.75 + .25;\n\n    vec3 camDir = normalize(vec3(uv*5. , 1.1));\n\n    // Compute the orientation of the camera\n\tfloat yawAngle = PI * (1.2 + 0.2 * cos (iTime * 0.5));\n\tfloat pitchAngle = PI * (0.1 * cos (iTime * 0.3) - 0.05);\n\n\tyawAngle += 4.0 * PI * iMouse.x / iResolution.x;\n\tpitchAngle += PI * 0.3 * (1.0 - iMouse.y / iResolution.y);\n\n    float cosYaw = cos (yawAngle);\n\tfloat sinYaw = sin (yawAngle);\n\tfloat cosPitch = cos (pitchAngle);\n\tfloat sinPitch = sin (pitchAngle);\n\n    mat3 cameraOrientation;\n\tcameraOrientation [0] = vec3 (cosYaw, 0.0, -sinYaw);\n\tcameraOrientation [1] = vec3 (sinYaw * sinPitch, cosPitch, cosYaw * sinPitch);\n\tcameraOrientation [2] = vec3 (sinYaw * cosPitch, -sinPitch, cosYaw * cosPitch);\n\n\tcamDir = cameraOrientation * camDir;\n\n    vec3 camPos = vec3(1.0, 1. , - iTime * 3.);\n\n    float t = 0.0;\n    for(int i = 0 ; i < 100; i += 1) {\n        t += map(camDir * t + camPos);\n    }\n    vec3 surf = camDir * t + camPos;\n    vec3 light = normalize(vec3(0.0, 0.0, 1.0)) ;\n    vec3 normal = getNormal(surf);\n\n    float cg = (camDir * t).x + (camDir * t).y + (camDir * t).z;\n\n    vec3 col = hue(cg*.05 - iTime * .2 ).rgb * clamp(dot(light, normal), .25, 1.);\n\n    // Border dark\n    col *= 0.2 + 0.8 * pow(32.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.3);\n\n    fragColor = vec4(col, 1.0);\n}\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nout vec4 outColor;\nvoid main( void ) {\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n    mainImage( color, gl_FragCoord.xy );\n    color.w = 1.0;\n    outColor = color;\n}\n"}}]);
//# sourceMappingURL=77.f249302a.chunk.js.map