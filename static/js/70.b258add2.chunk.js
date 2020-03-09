(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[70],{203:function(n,o,i){"use strict";i.r(o),o.default="precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 iResolution;\nuniform float iTime;\nuniform float pSize;\n\nuniform mat3 uvTransform;\n\n#define BLACK_COL vec3(24,32,38)/255.\n#define WHITE_COL vec3(245,248,250)/255.\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n  vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.y;\n\n  vec2 st = vec2(atan(uv.x, uv.y), length(uv));\n\n  st.x += iTime*.1 + floor(st.y * 5. - iTime*1.)*0.3925;\n\n  float g = st.x * 3.82 * 2.;\n  float b1 = fract(g);\n  float b2 = sin(st.y*100. - iTime * 10.) * .25 + .5;\n\n  float gf = floor(mod(g, 2.)) * .6;\n  float m = step(.125 - st.y*.25 * gf, abs(b2 - b1) );\n\n  m = (1.-m) * abs(1. - gf + .1);\n\n  vec3 col = mix(BLACK_COL, WHITE_COL, m);\n\n  fragColor = vec4(col, 1.0);\n}\n\nvarying vec2 vUv;\n\nvoid main() {\n  mainImage(gl_FragColor, vUv * iResolution.xy);\n}\n"}}]);
//# sourceMappingURL=70.b258add2.chunk.js.map