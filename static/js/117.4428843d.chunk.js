(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[117],{250:function(n,o,e){"use strict";e.r(o),o.default="#define GLSLIFY 1\n// Original one hosted on https://www.shadertoy.com/view/WtsGW4\n\n#define rand1(p) fract(sin(p* 78.233)* 43758.5453)\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n  vec2 ouv = fragCoord/iResolution.xy;\n\n  float ofstM = .002 * sin(ouv.y*5. + iTime) * rand1(iTime + floor(ouv.y*100.));\n  vec3 col = texture(iChannel0, ouv + ofstM).rgb;\n\n  float ofstR = .01 * sin(iTime*5.) * rand1(iTime + floor(ouv.y*10.));\n\n  col.r = texture(iChannel0, ouv-vec2(ofstR, 0.)).r;\n\n  fragColor = vec4(col,1.0);\n}\n"}}]);
//# sourceMappingURL=117.4428843d.chunk.js.map