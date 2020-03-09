(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[8,110,111,112],{243:function(n,e,r){"use strict";r.r(e),e.default="#version 300 es\n\n#ifdef GL_ES\nprecision highp float;\nprecision highp int;\nprecision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n\n#define HW_PERFORMANCE 1\n\nuniform vec3 iResolution;\nuniform float iTime;\nuniform float iChannelTime[4];\nuniform vec4 iMouse;\nuniform vec4 iDate;\nuniform float iSampleRate;\nuniform vec3 iChannelResolution[4];\nuniform int iFrame;\nuniform float iTimeDelta;\nuniform float iFrameRate;\nstruct Channel {\n    vec3 resolution;\n    float time;\n};\nuniform Channel iChannel[4];\nuniform sampler2D iChannel0;\nuniform sampler2D iChannel1;\nuniform sampler2D iChannel2;\nuniform sampler2D iChannel3;\nvoid mainImage(out vec4 c, in vec2 f);\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n#pragma includeScene\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nout vec4 outColor;\nvoid main(void)\n{\n    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);\n    mainImage(color, gl_FragCoord.xy);\n    color.w = 1.0;\n    outColor = color;\n}\n"},244:function(n,e,r){"use strict";r.r(e),e.default="#version 300 es\n\n#ifdef GL_ES\nprecision highp float;\nprecision highp int;\nprecision mediump sampler3D;\n#define GLSLIFY 1\n#endif\n\nlayout(location = 0) in vec3 position;\nvoid main()\n{\n    gl_Position = vec4(position.xy, 0.0, 1.0);\n}\n"},245:function(n,e,r){"use strict";r.r(e),e.default="#define GLSLIFY 1\n#define SIZE 50.\n#define COL1 vec3(32, 43, 51) / 255.0\n#define COL2 vec3(235, 241, 245) / 255.0\n\n#define SF 1. / min(iResolution.x, iResolution.y) * SIZE\n#define SS(l, s) smoothstep(SF, -SF, l - s)\n\n#define MOD3 vec3(.1031, .11369, .13787)\n\nvec3 hash33(vec3 p3)\n{\n    p3 = fract(p3 * MOD3);\n    p3 += dot(p3, p3.yxz + 19.19);\n    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));\n}\n\nfloat snoise(vec3 p)\n{\n    const float K1 = 0.333333333;\n    const float K2 = 0.166666667;\n\n    vec3 i = floor(p + (p.x + p.y + p.z) * K1);\n    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);\n\n    vec3 e = step(vec3(0.0), d0 - d0.yzx);\n    vec3 i1 = e * (1.0 - e.zxy);\n    vec3 i2 = 1.0 - e.zxy * (1.0 - e);\n\n    vec3 d1 = d0 - (i1 - 1.0 * K2);\n    vec3 d2 = d0 - (i2 - 2.0 * K2);\n    vec3 d3 = d0 - (1.0 - 3.0 * K2);\n\n    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);\n    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));\n\n    return dot(vec4(31.316), n);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;\n\n    uv.y = uv.y * SIZE;\n    float yid = floor(uv.y);\n    uv.y = fract(uv.y) - .5;\n\n    float mask = 0.;\n\n    for (float ofs = -1.; ofs <= 1.; ofs += 1.) {\n        vec2 iuv = uv + vec2(0., ofs);\n\n        float iid = yid - ofs;\n\n        float fx = snoise(vec3(uv.x * 10. + iid * 100., iid, iTime));\n        float fx2 = snoise(vec3(uv.x * 10. + (iid - 1.) * 100., (iid - 1.), iTime));\n\n        float m = SS(abs(iuv.y + fx), .35);\n        mask = max(mask, m * (fx2 + iuv.y + .5));\n    }\n\n    mask = smoothstep(0., 1., mask * .75);\n\n    vec3 col = mix(COL1, COL2, mask);\n\n    fragColor = vec4(col, 1.0);\n}\n"},253:function(n,e){n.exports=function(){for(var n=0;n<arguments.length;n++)if(void 0!==arguments[n])return arguments[n]}},254:function(n,e,r){var t=r(261),o=r(262),i=r(255),a=r(253);function s(n){return n&&!Array.isArray(n)&&"object"===typeof n}n.exports=function(n){if(!(n=n||{}).gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var e=n.gl,r={gl:e};"undefined"!==typeof n.extensions&&(r.extensions=n.extensions);"undefined"!==typeof n.optionalExtensions&&(r.optionalExtensions=n.optionalExtensions);"undefined"!==typeof n.profile&&(r.profile=n.profile);"undefined"!==typeof n.onDone&&(r.onDone=n.onDone);var c,l=t(r),u=o(),h=new Map,f=n.uniforms||{},d=Object.assign({},f);Object.keys(f).forEach((function(n){var e=f[n];"function"===typeof e?d[n]=function(n,r,t){var o=e.call(f,r,t);if(s(o))if(h.has(e)){var i=h.get(e);i(o),o=i}else{var a=l.texture(o);h.set(e,a),o=a}return o}:s(e)?d[n]=l.texture(e):d[n]=e}));try{c=l({scissor:!!n.scissor&&{enable:!0,box:{x:l.prop("scissorX"),y:l.prop("scissorY"),width:l.prop("scissorWidth"),height:l.prop("scissorHeight")}},uniforms:d,frag:n.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join("\n"),vert:n.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join("\n"),blend:!1!==n.blend?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:u.positions},elements:u.cells})}catch(w){b(w)}var p=a(n.clearColor,"black");if("string"===typeof p){var v=i(p);if(!v.rgb)throw new Error('Error parsing { clearColor } color string "'+p+'"');p=v.rgb.slice(0,3).map((function(n){return n/255}))}else if(p&&(!Array.isArray(p)||p.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var g=a(n.clearAlpha,1),m=!!p&&p.concat([g||0]);return{render:function(n){l.poll(),m&&l.clear({color:m,depth:1,stencil:0}),y(n),e.flush()},regl:l,drawQuad:y,unload:function(){h.clear(),l.destroy()}};function y(n){if(n=n||{},c)try{c(n)}catch(w){b(w)&&null==n&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function b(n){if(/^\(regl\)/.test(n.message))return!0;throw n}}},255:function(n,e,r){var t=r(256);n.exports=function(n){var e,r,o,i;if(e=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(n)){var a=e[1],s="cmyk"===(c=a.replace(/a$/,""))?4:3;r=t[c],o=e[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map((function(n,e){return/%$/.test(n)&&e===s?parseFloat(n)/100:(/%$/.test(n),parseFloat(n))})),a===c&&o.push(1),i=void 0===o[s]?1:o[s],o=o.slice(0,s),r[c]=function(){return o}}else if(/^#[A-Fa-f0-9]+$/.test(n)){var c;s=(c=n.replace(/^#/,"")).length;r=t.rgb,o=(o=c.split(3===s?/(.)/:/(..)/)).filter(Boolean).map((function(n){return 3===s?parseInt(n+n,16):parseInt(n,16)})),i=1,r.rgb=function(){return o},o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0)}else(r=t.keyword).keyword=function(){return n},o=n,i=1;var l={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{l.rgb=r.rgb(o)}catch(u){}try{l.hsl=r.hsl(o)}catch(u){}try{l.hsv=r.hsv(o)}catch(u){}try{l.cmyk=r.cmyk(o)}catch(u){}try{l.keyword=r.keyword(o)}catch(u){}return l.rgb&&(l.hex="#"+l.rgb.map((function(n){var e=n.toString(16);return 1===e.length?"0"+e:e})).join("")),l.rgb&&(l.rgba=l.rgb.concat(i)),l.hsl&&(l.hsla=l.hsl.concat(i)),l.hsv&&(l.hsva=l.hsv.concat(i)),l.cmyk&&(l.cmyka=l.cmyk.concat(i)),l}},256:function(n,e,r){var t=r(257),o=function(){return new l};for(var i in t){o[i+"Raw"]=function(n){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),t[n](e)}}(i);var a=/(\w+)2(\w+)/.exec(i),s=a[1],c=a[2];(o[s]=o[s]||{})[c]=o[i]=function(n){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var r=t[n](e);if("string"==typeof r||void 0===r)return r;for(var o=0;o<r.length;o++)r[o]=Math.round(r[o]);return r}}(i)}var l=function(){this.convs={}};l.prototype.routeSpace=function(n,e){var r=e[0];return void 0===r?this.getValues(n):("number"==typeof r&&(r=Array.prototype.slice.call(e)),this.setValues(n,r))},l.prototype.setValues=function(n,e){return this.space=n,this.convs={},this.convs[n]=e,this},l.prototype.getValues=function(n){var e=this.convs[n];if(!e){var r=this.space,t=this.convs[r];e=o[r][n](t),this.convs[n]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(n){l.prototype[n]=function(e){return this.routeSpace(n,arguments)}})),n.exports=o},257:function(n,e){function t(n){var e,r,t=n[0]/255,o=n[1]/255,i=n[2]/255,a=Math.min(t,o,i),s=Math.max(t,o,i),c=s-a;return s==a?e=0:t==s?e=(o-i)/c:o==s?e=2+(i-t)/c:i==s&&(e=4+(t-o)/c),(e=Math.min(60*e,360))<0&&(e+=360),r=(a+s)/2,[e,100*(s==a?0:r<=.5?c/(s+a):c/(2-s-a)),100*r]}function o(n){var e,r,t=n[0],o=n[1],i=n[2],a=Math.min(t,o,i),s=Math.max(t,o,i),c=s-a;return r=0==s?0:c/s*1e3/10,s==a?e=0:t==s?e=(o-i)/c:o==s?e=2+(i-t)/c:i==s&&(e=4+(t-o)/c),(e=Math.min(60*e,360))<0&&(e+=360),[e,r,s/255*1e3/10]}function i(n){var e=n[0],r=n[1],o=n[2];return[t(n)[0],100*(1/255*Math.min(e,Math.min(r,o))),100*(o=1-1/255*Math.max(e,Math.max(r,o)))]}function a(n){var e,r=n[0]/255,t=n[1]/255,o=n[2]/255;return[100*((1-r-(e=Math.min(1-r,1-t,1-o)))/(1-e)||0),100*((1-t-e)/(1-e)||0),100*((1-o-e)/(1-e)||0),100*e]}function s(n){return C[JSON.stringify(n)]}function c(n){var e=n[0]/255,r=n[1]/255,t=n[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*e+.7152*r+.0722*t),100*(.0193*e+.1192*r+.9505*t)]}function l(n){var e=c(n),r=e[0],t=e[1],o=e[2];return t/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]}function u(n){var e,r,t,o,i,a=n[0]/360,s=n[1]/100,c=n[2]/100;if(0==s)return[i=255*c,i,i];e=2*c-(r=c<.5?c*(1+s):c+s-c*s),o=[0,0,0];for(var l=0;l<3;l++)(t=a+1/3*-(l-1))<0&&t++,t>1&&t--,i=6*t<1?e+6*(r-e)*t:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e,o[l]=255*i;return o}function h(n){var e=n[0]/60,r=n[1]/100,t=n[2]/100,o=Math.floor(e)%6,i=e-Math.floor(e),a=255*t*(1-r),s=255*t*(1-r*i),c=255*t*(1-r*(1-i));t*=255;switch(o){case 0:return[t,c,a];case 1:return[s,t,a];case 2:return[a,t,c];case 3:return[a,s,t];case 4:return[c,a,t];case 5:return[t,a,s]}}function f(n){var e,t,o,i,a=n[0]/360,s=n[1]/100,c=n[2]/100,l=s+c;switch(l>1&&(s/=l,c/=l),o=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(o=1-o),i=s+o*((t=1-c)-s),e){default:case 6:case 0:r=t,g=i,b=s;break;case 1:r=i,g=t,b=s;break;case 2:r=s,g=t,b=i;break;case 3:r=s,g=i,b=t;break;case 4:r=i,g=s,b=t;break;case 5:r=t,g=s,b=i}return[255*r,255*g,255*b]}function d(n){var e=n[0]/100,r=n[1]/100,t=n[2]/100,o=n[3]/100;return[255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,t*(1-o)+o))]}function p(n){var e,r,t,o=n[0]/100,i=n[1]/100,a=n[2]/100;return r=-.9689*o+1.8758*i+.0415*a,t=.0557*o+-.204*i+1.057*a,e=(e=3.2406*o+-1.5372*i+-.4986*a)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1))]}function v(n){var e=n[0],r=n[1],t=n[2];return r/=100,t/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(e-r),200*(r-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]}function m(n){var e,r,t,o,i=n[0],a=n[1],s=n[2];return i<=8?o=(r=100*i/903.3)/100*7.787+16/116:(r=100*Math.pow((i+16)/116,3),o=Math.pow(r/100,1/3)),[e=e/95.047<=.008856?e=95.047*(a/500+o-16/116)/7.787:95.047*Math.pow(a/500+o,3),r,t=t/108.883<=.008859?t=108.883*(o-s/200-16/116)/7.787:108.883*Math.pow(o-s/200,3)]}function y(n){var e,r=n[0],t=n[1],o=n[2];return(e=360*Math.atan2(o,t)/2/Math.PI)<0&&(e+=360),[r,Math.sqrt(t*t+o*o),e]}function w(n){return p(m(n))}function k(n){var e,r=n[0],t=n[1];return e=n[2]/360*2*Math.PI,[r,t*Math.cos(e),t*Math.sin(e)]}function x(n){return M[n]}n.exports={rgb2hsl:t,rgb2hsv:o,rgb2hwb:i,rgb2cmyk:a,rgb2keyword:s,rgb2xyz:c,rgb2lab:l,rgb2lch:function(n){return y(l(n))},hsl2rgb:u,hsl2hsv:function(n){var e=n[0],r=n[1]/100,t=n[2]/100;if(0===t)return[0,0,0];return[e,100*(2*(r*=(t*=2)<=1?t:2-t)/(t+r)),100*((t+r)/2)]},hsl2hwb:function(n){return i(u(n))},hsl2cmyk:function(n){return a(u(n))},hsl2keyword:function(n){return s(u(n))},hsv2rgb:h,hsv2hsl:function(n){var e,r,t=n[0],o=n[1]/100,i=n[2]/100;return e=o*i,[t,100*(e=(e/=(r=(2-o)*i)<=1?r:2-r)||0),100*(r/=2)]},hsv2hwb:function(n){return i(h(n))},hsv2cmyk:function(n){return a(h(n))},hsv2keyword:function(n){return s(h(n))},hwb2rgb:f,hwb2hsl:function(n){return t(f(n))},hwb2hsv:function(n){return o(f(n))},hwb2cmyk:function(n){return a(f(n))},hwb2keyword:function(n){return s(f(n))},cmyk2rgb:d,cmyk2hsl:function(n){return t(d(n))},cmyk2hsv:function(n){return o(d(n))},cmyk2hwb:function(n){return i(d(n))},cmyk2keyword:function(n){return s(d(n))},keyword2rgb:x,keyword2hsl:function(n){return t(x(n))},keyword2hsv:function(n){return o(x(n))},keyword2hwb:function(n){return i(x(n))},keyword2cmyk:function(n){return a(x(n))},keyword2lab:function(n){return l(x(n))},keyword2xyz:function(n){return c(x(n))},xyz2rgb:p,xyz2lab:v,xyz2lch:function(n){return y(v(n))},lab2xyz:m,lab2rgb:w,lab2lch:y,lch2lab:k,lch2xyz:function(n){return m(k(n))},lch2rgb:function(n){return w(k(n))}};var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var E in M)C[JSON.stringify(M[E])]=E},82:function(n,e,r){"use strict";r.r(e);var t=r(254),o=r.n(t),i=r(243),a=r(244),s=r(245);e.default={sketch:function(n){var e=n.gl;n.time;return o()({gl:e,frag:i.default.replace("#pragma includeScene",s.default),vert:a.default,uniforms:{iTime:function(n){return n.time},iResolution:function(n){return[n.width,n.height,1]}}})},settings:{context:"webgl2",animate:!0}}}}]);
//# sourceMappingURL=8.4682dcc9.chunk.js.map