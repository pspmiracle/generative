(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[79],{212:function(n,o,i){"use strict";i.r(o),o.default="#version 300 es\n#ifdef GL_ES\n    precision highp float;\n    precision highp int;\n    precision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n#define HW_PERFORMANCE 1\nuniform vec3      iResolution;\nuniform float     iTime;\nuniform float     iChannelTime[4];\nuniform vec4      iMouse;\nuniform vec4      iDate;\nuniform float     iSampleRate;\nuniform vec3      iChannelResolution[4];\nuniform int       iFrame;\nuniform float     iTimeDelta;\nuniform float     iFrameRate;\nstruct Channel {\n    vec3  resolution;\n    float time;\n};\nuniform Channel iChannel[4];\nuniform sampler2D iChannel0;\nuniform sampler2D iChannel1;\nuniform sampler2D iChannel2;\nuniform sampler2D iChannel3;\nvoid mainImage( out vec4 c, in vec2 f );\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n// Original one hosted on https://www.shadertoy.com/view/tdVGR1\n\nfloat rand(vec2 p)\n{\n    vec3 p3  = fract(vec3(p.xyx) * .1031);\n    p3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.x + p3.y) * p3.z);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n\tvec2 ouv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;\n\n    float fCol = 0.;\n    float t = iTime * 0.25;\n\n    float total = 7.;\n    for(float i=1.; i<total; i+=1.){\n        float iTotal = i/total;\n        float niTotal = 1. - i/total;\n\n        vec2 uv = ouv * (10. + i*1.) - vec2(0., t*(1.-i/total));\n        vec2 id = floor(uv) + vec2(i*1000.);\n        uv = fract(uv) - 0.5;\n\n        for(float y=-1.; y<=1.; y+=1.){\n            for(float x=-1.; x<=1.; x+=1.){\n\n                vec2 iuv = uv + vec2(x,y);\n                vec2 iid = id - vec2(x,y);\n\n                if(rand(iid * 200.) > .25){\n                    iuv.x += rand(iid)-.5;\n                    iuv.y += rand(vec2(rand(iid)))-.5;\n\n                    float l = length(iuv * (niTotal)*1.5);\n                    float size = rand(iid*5.)*.1 + .25 - .1;\n                    float force = rand(iid*10.)*.5+.5;\n                    fCol +=\n                        smoothstep(l, l + (iTotal)*.25, size) *\n                        niTotal *\n                        force;\n                }\n            }\n        }\n    }\n\n    fragColor = vec4(fCol);\n}\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nout vec4 outColor;\nvoid main( void ) {\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n    mainImage( color, gl_FragCoord.xy );\n    color.w = 1.0;\n    outColor = color;\n}\n\n"}}]);
//# sourceMappingURL=79.cbfa4fae.chunk.js.map