(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[123],{192:function(n,i,v){"use strict";v.r(i),i.default="#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vpos;\nvarying float size;\n\nuniform float iTime;\nuniform float pSize;\n\nfloat hash12(vec2 p)\n{\n  vec3 p3  = fract(vec3(p.xyx) * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nvoid main()\n{\n    vUv = uv;\n    float t = iTime*1.0;\n\n    vpos = position;\n\n    // vpos.x += hash12(position.xy * 100.)*.05 - .025;\n    // vpos.y += hash12(position.xy * 200.)*.05 - .025;\n\n    float vv = (position.y + position.x)*2. + sin(t)*7.;\n\n    vv = (smoothstep(-3.0, 3.0, vv)) * 3.1415*.5;\n    vv =  sin(vv) * cos(vv);\n\n    vv *= .5;\n    vpos.xy += vv;\n\n    size = pSize;\n    gl_PointSize = pSize;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(vpos, 1.0);\n}\n"}}]);
//# sourceMappingURL=123.3452569e.chunk.js.map