(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[44,97,98],{230:function(n,e,i){"use strict";i.r(e),e.default="#version 300 es\n#ifdef GL_ES\n    precision highp float;\n    precision highp int;\n    precision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n#define HW_PERFORMANCE 1\nuniform vec3      iResolution;\nuniform float     iTime;\nuniform float     iChannelTime[4];\nuniform vec4      iMouse;\nuniform vec4      iDate;\nuniform float     iSampleRate;\nuniform vec3      iChannelResolution[4];\nuniform int       iFrame;\nuniform float     iTimeDelta;\nuniform float     iFrameRate;\nstruct Channel {\n    vec3  resolution;\n    float time;\n};\nuniform Channel iChannel[4];\nuniform sampler2D iChannel0;\nuniform sampler2D iChannel1;\nuniform sampler2D iChannel2;\nuniform sampler2D iChannel3;\nvoid mainImage( out vec4 c, in vec2 f );\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)\n\nvec2 rand( vec2 p ) {\n    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    vec2 ouv = fragCoord/iResolution.xy;\n    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;\n    vec2 luv = uv;\n\n    uv *= 10. + sin(iTime*.5)*3.;\n\n    vec2 iuv = floor(uv);\n    vec2 guv = fract(uv);\n\n    float mDist = 1.0;\n\n    vec3 col = vec3(0.);\n\n    for (float y= -1.; y <= 1.; y++) {\n        for (float x= -1.; x <= 1.; x++) {\n            vec2 neighbor = vec2(x, y);\n            vec2 point = rand(iuv + neighbor);\n            point = 0.5 + 0.5*sin(iTime*2. + 6.2831*point);\n            vec2 diff = neighbor + point - guv;\n            float dist = length(diff);\n\n            mDist = min(mDist, dist);\n        }\n    }\n\n    float l = length(luv);\n    col = hue(fract(mDist*.95 + iTime*.1 + l)).rgb;\n\n    // fragColor = vec4(col,1.0)*.05 + texture(iChannel0, ouv)*.95;\n    fragColor = vec4(col,1.0)*.05 + texture(iChannel0, ouv)*.95;\n}\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nout vec4 outColor;\nvoid main( void ) {\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n    mainImage( color, gl_FragCoord.xy );\n    color.w = 1.0;\n    outColor = color;\n}\n"},231:function(n,e,i){"use strict";i.r(e),e.default="#version 300 es\n#ifdef GL_ES\n    precision highp float;\n    precision highp int;\n    precision mediump sampler3D;\n#define GLSLIFY 1\n#endif\nlayout(location = 0) in vec3 position;\nvoid main() {\n    gl_Position = vec4(position.xy, 0.0, 1.0);\n}\n"},76:function(n,e,i){"use strict";i.r(e);var o=i(261),t=i.n(o),r=i(262),a=i.n(r),l=i(230),u=i(231);e.default={sketch:function(n){var e=n.gl,i=(n.update,n.render,n.pause,t()({gl:e})),o=a()(),r=i.texture({copy:!0,min:"linear",mag:"linear"}),c=i({frag:l.default,vert:u.default,uniforms:{iTime:i.prop("iTime"),iResolution:i.prop("iResolution"),iChannel0:r},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},attributes:{position:o.positions},elements:i.elements(o.cells)});return{render:function(n){var o=n.context,t=n.time,a=n.width,l=n.height;i.poll(),c({iTime:t,iResolution:[a,l,1],iChannel0:i.texture(o)}),r({copy:!0,min:"linear",mag:"linear"}),e.flush()}}},settings:{context:"webgl2",animate:!0}}}}]);
//# sourceMappingURL=44.2d170682.chunk.js.map