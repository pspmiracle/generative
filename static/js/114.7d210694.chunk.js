(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[114],{249:function(n,e,s){"use strict";s.r(e),e.default="#define GLSLIFY 1\n#define PI 3.1415926\n#define PI_2 1.5707963\n#define PI_4 0.78539815\n\nfloat roundedRect(vec2 p, float size ){\n  float mask =\n  smoothstep(size, size-.1, abs(p.x)) *\n  smoothstep(size, size-.1, abs(p.y));\n\n  return smoothstep(.45, .5, mask);\n}\n\nfloat roundedCross(vec2 p, float size ){\n  vec2 rp = p;\n  float result = 0.;\n\n  for(float i= -1.; i<=1.; i+=2.){\n    vec2 rp = p;\n    rp *= mat2(cos( sin(PI_2 * i*sin(iTime)) + vec4(0,33,11,0)));\n\n    float mask =\n    smoothstep(size*2., size*2.0-.05, abs(rp.x))  *\n    smoothstep(size, size-.05, abs(rp.y));\n\n    result += smoothstep(.40, .5, mask);\n  }\n\n  return result;\n}\n\nfloat evilEye(vec2 p, float dir){\n  float result = 0.;\n  float l = length(p);\n  result += smoothstep(.05, .045, l);\n\n  result -= smoothstep(0.01, 0.02, p.x*dir+p.y*2.);\n\n  return clamp(result, 0., 1.);\n}\n\nfloat mouth(vec2 p, float size){\n  float l = length(p);\n  float mask = smoothstep(.1*size,.1*size - .005, l);\n  p.y -=0.05*size;\n  p.x *= .6;\n  l = length(p);\n  mask -= smoothstep(.09, .085, l);\n\n  return clamp(mask, 0., 1.);\n}\n\nfloat smile(vec2 p){\n  float result = 0.;\n\n  //Mouth\n  vec2 mP = p;\n  mP.y += .03;\n  float mask = mouth(mP,1.15) - mouth(mP,1.0);\n\n  result += clamp(mask, 0., 1.);\n\n  //Teeth\n  vec2 zP = p;\n  zP.y += .1 + sin(zP.x*300.)*(.02 - abs(zP.x*.11)) - abs(zP.x*.3);\n  result += smoothstep(0.01, 0.001, abs(zP.y)) * step(abs(zP.x), .09);\n\n  return result;\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n  vec2 ouv = fragCoord/iResolution.xy;\n  vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;\n\n  uv *= (sin(iTime *0.33)*.5+.5)*.2 + 0.8;\n\n  float mask = 0.;\n\n  for(float i= -1.; i<=1.; i+=2.){\n    vec2 ruv = uv + vec2(.30,0.) * i;\n\n    ruv.y +=sin(iTime)*.02*i;\n    ruv *= mat2(cos( (sin(iTime+i*1.5))*.1 + vec4(0,33,11,0)));\n\n    mask += roundedRect(ruv, .25);\n    mask -= roundedRect(ruv*1.25, .25);\n\n    for(float i= -1.; i<=1.; i+=2.){\n      vec2 euv = ruv;\n      euv.x += .08*i;\n      euv.y -= .05;\n      mask += evilEye(euv, i);\n    }\n\n    mask += smile(ruv);\n  }\n\n  mask += roundedCross(uv, .05);\n\n  vec3 back = texture(iChannel0, ouv).rgb + .8;\n  vec3 col = mix(back, vec3(0.), mask);\n\n  fragColor = vec4(col,1.0);\n}\n"}}]);
//# sourceMappingURL=114.7d210694.chunk.js.map