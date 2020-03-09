(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[112],{245:function(n,e,i){"use strict";i.r(e),e.default="#define GLSLIFY 1\n#define SIZE 50.\n#define COL1 vec3(32, 43, 51) / 255.0\n#define COL2 vec3(235, 241, 245) / 255.0\n\n#define SF 1. / min(iResolution.x, iResolution.y) * SIZE\n#define SS(l, s) smoothstep(SF, -SF, l - s)\n\n#define MOD3 vec3(.1031, .11369, .13787)\n\nvec3 hash33(vec3 p3)\n{\n    p3 = fract(p3 * MOD3);\n    p3 += dot(p3, p3.yxz + 19.19);\n    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));\n}\n\nfloat snoise(vec3 p)\n{\n    const float K1 = 0.333333333;\n    const float K2 = 0.166666667;\n\n    vec3 i = floor(p + (p.x + p.y + p.z) * K1);\n    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);\n\n    vec3 e = step(vec3(0.0), d0 - d0.yzx);\n    vec3 i1 = e * (1.0 - e.zxy);\n    vec3 i2 = 1.0 - e.zxy * (1.0 - e);\n\n    vec3 d1 = d0 - (i1 - 1.0 * K2);\n    vec3 d2 = d0 - (i2 - 2.0 * K2);\n    vec3 d3 = d0 - (1.0 - 3.0 * K2);\n\n    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);\n    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));\n\n    return dot(vec4(31.316), n);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;\n\n    uv.y = uv.y * SIZE;\n    float yid = floor(uv.y);\n    uv.y = fract(uv.y) - .5;\n\n    float mask = 0.;\n\n    for (float ofs = -1.; ofs <= 1.; ofs += 1.) {\n        vec2 iuv = uv + vec2(0., ofs);\n\n        float iid = yid - ofs;\n\n        float fx = snoise(vec3(uv.x * 10. + iid * 100., iid, iTime));\n        float fx2 = snoise(vec3(uv.x * 10. + (iid - 1.) * 100., (iid - 1.), iTime));\n\n        float m = SS(abs(iuv.y + fx), .35);\n        mask = max(mask, m * (fx2 + iuv.y + .5));\n    }\n\n    mask = smoothstep(0., 1., mask * .75);\n\n    vec3 col = mix(COL1, COL2, mask);\n\n    fragColor = vec4(col, 1.0);\n}\n"}}]);
//# sourceMappingURL=112.fa72f7f4.chunk.js.map