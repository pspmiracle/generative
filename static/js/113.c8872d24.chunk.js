(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[113],{248:function(n,e,o){"use strict";o.r(e),e.default="#define GLSLIFY 1\n// Noise pixel size\n#define SIZE 5.0\n// Lower - more flowing\n#define FLUENCY 2.85\n\nfloat rand(vec2 co) {\n  return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n  vec2 id = ceil(fragCoord/SIZE);\n  vec2 rid = vec2(rand(id), rand(id+iResolution.y));\n\n  float ridFactor = rid.x + rid.y;\n  float f = ridFactor + iTime * FLUENCY *  (ridFactor);\n  float fid = floor(f);\n  f = abs(fract(f) - mod(fid, 2.));\n  //fragColor = vec4(0.1/f);\n  fragColor = clamp(vec4(0.1/f), 0.0, 1.0);\n}\n"}}]);
//# sourceMappingURL=113.c8872d24.chunk.js.map