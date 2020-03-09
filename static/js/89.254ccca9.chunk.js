(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[89],{222:function(n,e,i){"use strict";i.r(e),e.default="#version 300 es\n#ifdef GL_ES\n    precision highp float;\n    precision highp int;\n    precision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n#define HW_PERFORMANCE 1\nuniform vec3      iResolution;\nuniform float     iTime;\nuniform float     iChannelTime[4];\nuniform vec4      iMouse;\nuniform vec4      iDate;\nuniform float     iSampleRate;\nuniform vec3      iChannelResolution[4];\nuniform int       iFrame;\nuniform float     iTimeDelta;\nuniform float     iFrameRate;\nstruct Channel {\n    vec3  resolution;\n    float time;\n};\nuniform Channel iChannel[4];\nuniform sampler2D iChannel0;\nuniform sampler2D iChannel1;\nuniform sampler2D iChannel2;\nuniform sampler2D iChannel3;\nvoid mainImage( out vec4 c, in vec2 f );\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n// Original one hosted on https://www.shadertoy.com/view/3ld3zN\n\n#define BLACK_COL vec3(16,22,26)/255.\n#define WHITE_COL vec3(235,241,245)/255.\n#define RED_COL vec3(245, 73, 139)/255.\n\n#define SF 1./min(iResolution.x,iResolution.y)\n\n#define MOD3 vec3(.1031,.11369,.13787)\n\nvec3 hash33(vec3 p3)\n{\n\tp3 = fract(p3 * MOD3);\n    p3 += dot(p3, p3.yxz+19.19);\n    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));\n}\n\nfloat simplex_noise(vec3 p)\n{\n    const float K1 = 0.333333333;\n    const float K2 = 0.166666667;\n\n    vec3 i = floor(p + (p.x + p.y + p.z) * K1);\n    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);\n\n    vec3 e = step(vec3(0.0), d0 - d0.yzx);\n\tvec3 i1 = e * (1.0 - e.zxy);\n\tvec3 i2 = 1.0 - e.zxy * (1.0 - e);\n\n    vec3 d1 = d0 - (i1 - 1.0 * K2);\n    vec3 d2 = d0 - (i2 - 2.0 * K2);\n    vec3 d3 = d0 - (1.0 - 3.0 * K2);\n\n    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);\n    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));\n\n    return dot(vec4(31.316), n);\n}\n\nfloat tsin()\n{\n    float t = iTime * 1.25;\n\treturn sin(t + cos(t*2.))*.5 + .5;\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    vec2 ouv = (fragCoord - iResolution.xy*.5)/iResolution.y;\n    vec2 q = fragCoord.xy / iResolution.xy;\n\n    float COUNT = floor(iResolution.y / 8.);\n    float wSize = 5.;\n\n    float sf = SF * COUNT * .75;\n\n    vec2 uv = ouv * vec2(1., COUNT);\n    vec2 gid = vec2(uv.x, floor(uv.y));\n    vec2 guv = vec2(uv.x, fract(uv.y))  - vec2(0., .5);\n\n    float g = 1.;\n    for(float i=-wSize; i<=wSize; i+=1.)\n    {\n        vec2 iuv = guv + vec2(0,i);\n        vec2 iid = gid - vec2(0,i);\n\n        vec2 nuv = iid / vec2(1., COUNT/5.);\n        vec2 uv = iuv + simplex_noise(vec3(nuv*COUNT/20., iTime*.5))*wSize/4. - vec2(0., wSize*.5);\n\n        float itsin = tsin()*.3;\n        float sss =\n            smoothstep(.1 + itsin,.2 + itsin, length(iid / vec2(1., COUNT)));\n        uv += vec2(0., sss )* wSize*1.25 ;\n\n        g *= smoothstep(abs(uv.y), .0 , sf*0.75);\n    }\n\n    float ctsin = tsin()*.3;\n    vec3 backCol = mix(BLACK_COL, RED_COL, smoothstep(.15+ctsin+SF, .15+ctsin, length(ouv)));\n\n    vec3 col = mix(WHITE_COL, backCol, g);\n\n    //-----------------------------------------------------\n    // postprocessing\n    //-----------------------------------------------------\n\n    // Border dark\n    col *= 0.2 + 0.8 * pow(32.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.3);\n\n    // Fade in\n    col *= smoothstep(0.0, 1.0, iTime);\n\n    fragColor = vec4(col, 1.);\n}\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nout vec4 outColor;\nvoid main( void ) {\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n    mainImage( color, gl_FragCoord.xy );\n    color.w = 1.0;\n    outColor = color;\n}\n"}}]);
//# sourceMappingURL=89.254ccca9.chunk.js.map