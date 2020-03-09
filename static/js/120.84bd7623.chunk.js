(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[120],{190:function(n,i,o){"use strict";o.r(i),i.default="#define GLSLIFY 1\nuniform float iTime;\nuniform vec2 iResolution;\n\nvarying vec2 vUV;\n\n#define SIZE 500.\n#define LAYERS 10.\n\n#define SF SIZE/min(iResolution.x,iResolution.y)*1.5\n#define SS(l,s) smoothstep(SF,-SF,l-s)\n\n#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)\n#define rand1(p) fract(sin(p* 78.233)* 43758.5453)\n\nmat2 rot (float a){\n  float ca = cos(a);\n  float sa = sin(a);\n  return mat2(ca,-sa,sa,ca);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n  vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;\n  vec2 ouv = fragCoord/iResolution.xy;\n\n  vec3 col = vec3(0.);\n  for(float i=0.;i<LAYERS;i++){\n    vec2 iuv = uv;\n    iuv *= rot(iTime*(.5 + i*.1) );\n    // iuv *= rot(1.*(.5 + i*.1) );\n\n    vec2 guv = iuv*SIZE;\n    vec2 gid = floor(guv);\n\n    float iF = rand1(i);\n\n    vec2 offSet = vec2(rand1(gid.x*iF + gid.y*2000.*iF), rand1(gid.y*iF + gid.x*1000.*iF))*.5 -.25;\n\nguv = fract(guv) - .5 - offSet;\n\nfloat l = length(guv);\n\nfloat pSize = rand1(gid.x*iF + gid.y*7000.*iF)*.2;\nfloat showWeight = sqrt(length(uv))*.5;\nfloat showFactor = rand1(gid.x*100.*iF+gid.y*200.*iF) > showWeight ? 1. : 0.;\nfloat im = smoothstep(pSize, pSize-iF, l) * showFactor;\n\ncol += fract(rand1(gid.x*iF + gid.y*200.*iF)) * im;\n}\n\nfragColor = vec4(col,1.);\n}\n\nvoid main()\n{\n  mainImage(gl_FragColor, vUV * iResolution.xy);\n}\n"}}]);
//# sourceMappingURL=120.84bd7623.chunk.js.map