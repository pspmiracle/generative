(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[39,64,65],{197:function(n,e,i){"use strict";i.r(e),e.default="precision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vpos;\n\nuniform vec2 iResolution;\nuniform float iTime;\n\nvarying float fogDepth;\nvarying float size;\nuniform float fogDensity;\n\nuniform mat3 uvTransform;\n\n#define PI 3.1415926\n#define TAU 6.2831852\n#define BLACK_COL vec3(24,32,38)/255.\n\n#define rand1(p) fract(sin(p* 78.233)* 43758.5453)\n#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord){\n  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;\n\n  float g = length(uv) * size;\n\n  g = (size*.1) / smoothstep(.0, size*.5, g);\n\n  fragColor = vec4(hue(length(vpos) * size * .75).rgb * g, g*.75);\n}\n\nvarying vec2 vUv;\n\nvoid main() {\n  mainImage(gl_FragColor, vUv * iResolution.xy);\n}\n"},198:function(n,e,i){"use strict";i.r(e),e.default="#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\nvarying vec3 vpos;\nvarying float size;\n\nuniform float iTime;\nuniform float pSize;\n\nvoid main() {\n  vUv = uv;\n  float t = iTime*.025;\n\n  vpos = position;\n\n  vpos.xyz *= 1. + snoise(position*1.5 + vec3(iTime*.5))*.15;\n  vpos.xyz *= 1. + snoise(position*5.5 + vec3(iTime*.5))*.075;\n  vpos.xyz *= 1. + snoise(position*10.5 + vec3(iTime*.5))*.025;\n\n  size = pSize;\n  gl_PointSize = pSize + (length(vpos)-.75)*10.;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );\n}\n"},58:function(n,e,i){"use strict";i.r(e),function(n){var o=i(29),t=i(197),r=i(198),s=i(271);n.THREE=s,i(272);e.default={sketch:function(n){var e=n.context,i=new s.WebGLRenderer({canvas:e.canvas});i.setClearColor("hsl(100, 10%, 10%)",1);var v=new s.PerspectiveCamera(50,1,.01,100);v.position.set(2,-1.5,-1),v.lookAt(new s.Vector3);var a=new s.OrbitControls(v,e.canvas),c=new s.Scene,x=new s.OctahedronGeometry(1,7),p=s.ShaderLib.points,l=Object(o.a)({},p.uniforms,{iTime:{value:0},pSize:{value:4}}),d=new s.ShaderMaterial({uniforms:l,transparent:!0,depthWrite:!1,blending:s.AdditiveBlending,fragmentShader:t.default,vertexShader:r.default}),m=new s.Points(x,d);return m.sortParticles=!0,c.add(m),{resize:function(n){var e=n.pixelRatio,o=n.viewportWidth,t=n.viewportHeight;i.setPixelRatio(e),i.setSize(o,t,!1),v.aspect=o/t,v.updateProjectionMatrix()},render:function(n){var e=n.time;n.dimensions;d.uniforms.iTime.value=.75*e,a.update(),i.render(c,v)},unload:function(){a.dispose(),i.dispose()}}},settings:{animate:!0,context:"webgl"}}}.call(this,i(28))}}]);
//# sourceMappingURL=39.b2ffd186.chunk.js.map