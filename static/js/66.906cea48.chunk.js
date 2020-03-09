(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[66],{200:function(n,o,i){"use strict";i.r(o),o.default="precision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vpos;\nvarying float hp;\nvarying float hp2;\nvarying float hp3;\n\nuniform vec2 iResolution;\nuniform float iTime;\nuniform float pSize;\n\nuniform mat3 uvTransform;\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord){\n  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;\n\n  float t = iTime*.5 + hp; // \u0414\u0435\u043b\u0430\u0435\u043c \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0442\u043e\u0447\u043a\u0438 \u0442\u0430\u043a\u043e\u0435 \u0436\u0435 \u043a\u0430\u043a \u0432 vertexShader\n\n  float g = length(uv) * pSize;\n  float gx = .05 / smoothstep(.0, pSize, g);\n\n  float tr = step(.3, hp2);\n  if(tr == 0.){\n    // \u0414\u043b\u044f \u043e\u0442\u0440\u044b\u0432\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0442\u043e\u0447\u043a\u0435 \u0431\u0443\u0434\u0435\u043c \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u0435\n    tr = 1. - fract(t);\n  }\n\n  // \u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0441\u0447\u0438\u0442\u0430\u0435\u043c \u043e\u0442 hp3 \u0447\u0442\u043e\u0431 \u0432\u0441\u0435 \u0442\u043e\u0447\u043a\u0438 \u0431\u044b\u043b\u0438 \u0441 \u0440\u0430\u0437\u043d\u043e\u0439 \u044f\u0440\u043a\u043e\u0441\u0442\u044c\u044e\n  fragColor = vec4(vec3(gx) / g, hp3 * tr);\n}\n\nvarying vec2 vUv;\n\nvoid main() {\n  mainImage(gl_FragColor, vUv * iResolution.xy);\n}\n"}}]);
//# sourceMappingURL=66.906cea48.chunk.js.map