(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[71],{205:function(n,i,e){"use strict";e.r(i),i.default="#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vpos;\n\nuniform float iTime;\nuniform float pSize;\nuniform vec3 camPosition;\n\nvoid main() {\n  vUv = uv;\n\n  vpos = position;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );\n}\n"}}]);
//# sourceMappingURL=71.dcc8680f.chunk.js.map