(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[109],{242:function(n,i,o){"use strict";o.r(i),i.default="#define GLSLIFY 1\n// Original one hosted on https://www.shadertoy.com/view/tljSWz\n\n#define BLACK_COL vec3(16, 22, 26) / 255.\n#define WHITE_COL vec3(235, 241, 245) / 255.\n\nfloat rand1(float p)\n{\n    p = fract(p * 0.1031);\n    p *= p + 33.33;\n    p *= p + p;\n    return fract(p);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 ouv = (fragCoord - iResolution.xy * .5) / iResolution.y;\n\n    float angle = 3.1415926 + sin(iTime * .5) * .25;\n    ouv *= mat2(cos(angle + vec4(0, 33, 11, 0)));\n\n    float sf = .1 + abs(ouv.y);\n\n    float SIZE = 5. + (sin(iTime * .25) * .5 + .5) * 2.5;\n\n    float m = 0.;\n    for (float n = -1.; n <= 1.; n += 1.) {\n        vec2 uv = ouv * vec2(1., 1. + .025 * n) * (2. + sin(iTime * .25) * .2);\n        uv.y += iTime * .1;\n\n        float foo = 12.22;\n\n        uv = uv * SIZE;\n        vec2 gid = floor(uv);\n        vec2 guv = fract(uv) - .5;\n\n        for (float y = -1.; y <= 1.; y += 1.) {\n            for (float x = -1.; x <= 1.; x += 1.) {\n                vec2 iuv = guv + vec2(x, y);\n                vec2 iid = gid - vec2(x, y);\n\n                float angle = rand1(iid.x * 25. + iid.y * 41.) * 10. + (iTime * (rand1(iid.x * 10. + iid.y * 60.) + 1.5));\n\n                float ca = cos(angle);\n                float sa = sin(angle);\n                iuv *= mat2(ca, -sa, sa, ca);\n\n                float size = rand1(iid.x * 50. + iid.y * 25.) * .2 + .5;\n                float weight = size * .02;\n\n                float swp = size - weight;\n                float m1 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)\n                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);\n\n                swp = size + weight;\n                float m2 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)\n                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);\n\n                float rr = rand1(iid.x * 128. + iid.y * 213.);\n                m1 *= rr > .075 ? 1.0 : (1. - rr * 5.);\n\n                m += clamp(m2 - m1, 0., 1.);\n            }\n        }\n    }\n\n    vec3 col = mix(BLACK_COL, WHITE_COL, m);\n\n    fragColor = vec4(col, 1.);\n}\n"}}]);
//# sourceMappingURL=109.7c81069e.chunk.js.map