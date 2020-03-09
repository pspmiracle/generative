(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[25,87],{220:function(e,n,r){"use strict";r.r(n),n.default="precision highp float;\n#define GLSLIFY 1\n\nuniform float iTime;\nuniform vec2 iResolution;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\n// --------- START-SHADER-TOY-CODE-HERE ------------\n\n// Original one hosted on https://www.shadertoy.com/view/Wts3DB\n\n#define COUNT 20.\n#define COL_BLACK vec3(23,32,38) / 255.0\n\n#define SF 1./min(iResolution.x,iResolution.y)\n#define SS(l,s) smoothstep(SF,-SF,l-s)\n#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)\n\n// Original noise code from https://www.shadertoy.com/view/4sc3z2\n#define MOD3 vec3(.1031,.11369,.13787)\n\nvec3 hash33(vec3 p3)\n{\n\tp3 = fract(p3 * MOD3);\n    p3 += dot(p3, p3.yxz+19.19);\n    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));\n}\n\nfloat simplex_noise(vec3 p)\n{\n    const float K1 = 0.333333333;\n    const float K2 = 0.166666667;\n\n    vec3 i = floor(p + (p.x + p.y + p.z) * K1);\n    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);\n\n    vec3 e = step(vec3(0.0), d0 - d0.yzx);\n\tvec3 i1 = e * (1.0 - e.zxy);\n\tvec3 i2 = 1.0 - e.zxy * (1.0 - e);\n\n    vec3 d1 = d0 - (i1 - 1.0 * K2);\n    vec3 d2 = d0 - (i2 - 2.0 * K2);\n    vec3 d3 = d0 - (1.0 - 3.0 * K2);\n\n    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);\n    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));\n\n    return dot(vec4(31.316), n);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n\n    vec2 uv = fragCoord/iResolution.y;\n\n    float m = 0.;\n    float t = iTime *.5;\n    vec3 col;\n    for(float i=COUNT; i>=0.; i-=1.){\n        float edge = simplex_noise(vec3(uv * vec2(2., 0.) + vec2(0, t + i*.15), 1.))*.2 + (.5/COUNT)*i + .25;\n        float mi = SS(edge, uv.y) - SS(edge + .005, uv.y);\n        m *= SS(edge, uv.y+.015);\n        m += mi;\n\n        if(mi > 0.){\n        \tcol = hue(i/COUNT).rgb;\n        }\n    }\n\n    col = mix(COL_BLACK, col, m);\n\n    fragColor = vec4(col,1.0);\n}\n\n// --------- END-SHADER-TOY-CODE-HERE ------------\n\nvoid main()\n{\n  mainImage(gl_FragColor, vUv * iResolution.xy);\n}\n"},253:function(e,n){e.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},254:function(e,n,r){var t=r(261),o=r(262),i=r(255),a=r(253);function c(e){return e&&!Array.isArray(e)&&"object"===typeof e}e.exports=function(e){if(!(e=e||{}).gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var n=e.gl,r={gl:n};"undefined"!==typeof e.extensions&&(r.extensions=e.extensions);"undefined"!==typeof e.optionalExtensions&&(r.optionalExtensions=e.optionalExtensions);"undefined"!==typeof e.profile&&(r.profile=e.profile);"undefined"!==typeof e.onDone&&(r.onDone=e.onDone);var s,l=t(r),u=o(),h=new Map,f=e.uniforms||{},d=Object.assign({},f);Object.keys(f).forEach((function(e){var n=f[e];"function"===typeof n?d[e]=function(e,r,t){var o=n.call(f,r,t);if(c(o))if(h.has(n)){var i=h.get(n);i(o),o=i}else{var a=l.texture(o);h.set(n,a),o=a}return o}:c(n)?d[e]=l.texture(n):d[e]=n}));try{s=l({scissor:!!e.scissor&&{enable:!0,box:{x:l.prop("scissorX"),y:l.prop("scissorY"),width:l.prop("scissorWidth"),height:l.prop("scissorHeight")}},uniforms:d,frag:e.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join("\n"),vert:e.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join("\n"),blend:!1!==e.blend?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:u.positions},elements:u.cells})}catch(w){b(w)}var g=a(e.clearColor,"black");if("string"===typeof g){var p=i(g);if(!p.rgb)throw new Error('Error parsing { clearColor } color string "'+g+'"');g=p.rgb.slice(0,3).map((function(e){return e/255}))}else if(g&&(!Array.isArray(g)||g.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var v=a(e.clearAlpha,1),y=!!g&&g.concat([v||0]);return{render:function(e){l.poll(),y&&l.clear({color:y,depth:1,stencil:0}),m(e),n.flush()},regl:l,drawQuad:m,unload:function(){h.clear(),l.destroy()}};function m(e){if(e=e||{},s)try{s(e)}catch(w){b(w)&&null==e&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function b(e){if(/^\(regl\)/.test(e.message))return!0;throw e}}},255:function(e,n,r){var t=r(256);e.exports=function(e){var n,r,o,i;if(n=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(e)){var a=n[1],c="cmyk"===(s=a.replace(/a$/,""))?4:3;r=t[s],o=n[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map((function(e,n){return/%$/.test(e)&&n===c?parseFloat(e)/100:(/%$/.test(e),parseFloat(e))})),a===s&&o.push(1),i=void 0===o[c]?1:o[c],o=o.slice(0,c),r[s]=function(){return o}}else if(/^#[A-Fa-f0-9]+$/.test(e)){var s;c=(s=e.replace(/^#/,"")).length;r=t.rgb,o=(o=s.split(3===c?/(.)/:/(..)/)).filter(Boolean).map((function(e){return 3===c?parseInt(e+e,16):parseInt(e,16)})),i=1,r.rgb=function(){return o},o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0)}else(r=t.keyword).keyword=function(){return e},o=e,i=1;var l={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{l.rgb=r.rgb(o)}catch(u){}try{l.hsl=r.hsl(o)}catch(u){}try{l.hsv=r.hsv(o)}catch(u){}try{l.cmyk=r.cmyk(o)}catch(u){}try{l.keyword=r.keyword(o)}catch(u){}return l.rgb&&(l.hex="#"+l.rgb.map((function(e){var n=e.toString(16);return 1===n.length?"0"+n:n})).join("")),l.rgb&&(l.rgba=l.rgb.concat(i)),l.hsl&&(l.hsla=l.hsl.concat(i)),l.hsv&&(l.hsva=l.hsv.concat(i)),l.cmyk&&(l.cmyka=l.cmyk.concat(i)),l}},256:function(e,n,r){var t=r(257),o=function(){return new l};for(var i in t){o[i+"Raw"]=function(e){return function(n){return"number"==typeof n&&(n=Array.prototype.slice.call(arguments)),t[e](n)}}(i);var a=/(\w+)2(\w+)/.exec(i),c=a[1],s=a[2];(o[c]=o[c]||{})[s]=o[i]=function(e){return function(n){"number"==typeof n&&(n=Array.prototype.slice.call(arguments));var r=t[e](n);if("string"==typeof r||void 0===r)return r;for(var o=0;o<r.length;o++)r[o]=Math.round(r[o]);return r}}(i)}var l=function(){this.convs={}};l.prototype.routeSpace=function(e,n){var r=n[0];return void 0===r?this.getValues(e):("number"==typeof r&&(r=Array.prototype.slice.call(n)),this.setValues(e,r))},l.prototype.setValues=function(e,n){return this.space=e,this.convs={},this.convs[e]=n,this},l.prototype.getValues=function(e){var n=this.convs[e];if(!n){var r=this.space,t=this.convs[r];n=o[r][e](t),this.convs[e]=n}return n},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(e){l.prototype[e]=function(n){return this.routeSpace(e,arguments)}})),e.exports=o},257:function(e,n){function t(e){var n,r,t=e[0]/255,o=e[1]/255,i=e[2]/255,a=Math.min(t,o,i),c=Math.max(t,o,i),s=c-a;return c==a?n=0:t==c?n=(o-i)/s:o==c?n=2+(i-t)/s:i==c&&(n=4+(t-o)/s),(n=Math.min(60*n,360))<0&&(n+=360),r=(a+c)/2,[n,100*(c==a?0:r<=.5?s/(c+a):s/(2-c-a)),100*r]}function o(e){var n,r,t=e[0],o=e[1],i=e[2],a=Math.min(t,o,i),c=Math.max(t,o,i),s=c-a;return r=0==c?0:s/c*1e3/10,c==a?n=0:t==c?n=(o-i)/s:o==c?n=2+(i-t)/s:i==c&&(n=4+(t-o)/s),(n=Math.min(60*n,360))<0&&(n+=360),[n,r,c/255*1e3/10]}function i(e){var n=e[0],r=e[1],o=e[2];return[t(e)[0],100*(1/255*Math.min(n,Math.min(r,o))),100*(o=1-1/255*Math.max(n,Math.max(r,o)))]}function a(e){var n,r=e[0]/255,t=e[1]/255,o=e[2]/255;return[100*((1-r-(n=Math.min(1-r,1-t,1-o)))/(1-n)||0),100*((1-t-n)/(1-n)||0),100*((1-o-n)/(1-n)||0),100*n]}function c(e){return z[JSON.stringify(e)]}function s(e){var n=e[0]/255,r=e[1]/255,t=e[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*n+.7152*r+.0722*t),100*(.0193*n+.1192*r+.9505*t)]}function l(e){var n=s(e),r=n[0],t=n[1],o=n[2];return t/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]}function u(e){var n,r,t,o,i,a=e[0]/360,c=e[1]/100,s=e[2]/100;if(0==c)return[i=255*s,i,i];n=2*s-(r=s<.5?s*(1+c):s+c-s*c),o=[0,0,0];for(var l=0;l<3;l++)(t=a+1/3*-(l-1))<0&&t++,t>1&&t--,i=6*t<1?n+6*(r-n)*t:2*t<1?r:3*t<2?n+(r-n)*(2/3-t)*6:n,o[l]=255*i;return o}function h(e){var n=e[0]/60,r=e[1]/100,t=e[2]/100,o=Math.floor(n)%6,i=n-Math.floor(n),a=255*t*(1-r),c=255*t*(1-r*i),s=255*t*(1-r*(1-i));t*=255;switch(o){case 0:return[t,s,a];case 1:return[c,t,a];case 2:return[a,t,s];case 3:return[a,c,t];case 4:return[s,a,t];case 5:return[t,a,c]}}function f(e){var n,t,o,i,a=e[0]/360,c=e[1]/100,s=e[2]/100,l=c+s;switch(l>1&&(c/=l,s/=l),o=6*a-(n=Math.floor(6*a)),0!=(1&n)&&(o=1-o),i=c+o*((t=1-s)-c),n){default:case 6:case 0:r=t,g=i,b=c;break;case 1:r=i,g=t,b=c;break;case 2:r=c,g=t,b=i;break;case 3:r=c,g=i,b=t;break;case 4:r=i,g=c,b=t;break;case 5:r=t,g=c,b=i}return[255*r,255*g,255*b]}function d(e){var n=e[0]/100,r=e[1]/100,t=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,t*(1-o)+o))]}function p(e){var n,r,t,o=e[0]/100,i=e[1]/100,a=e[2]/100;return r=-.9689*o+1.8758*i+.0415*a,t=.0557*o+-.204*i+1.057*a,n=(n=3.2406*o+-1.5372*i+-.4986*a)>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,[255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1))]}function v(e){var n=e[0],r=e[1],t=e[2];return r/=100,t/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]}function y(e){var n,r,t,o,i=e[0],a=e[1],c=e[2];return i<=8?o=(r=100*i/903.3)/100*7.787+16/116:(r=100*Math.pow((i+16)/116,3),o=Math.pow(r/100,1/3)),[n=n/95.047<=.008856?n=95.047*(a/500+o-16/116)/7.787:95.047*Math.pow(a/500+o,3),r,t=t/108.883<=.008859?t=108.883*(o-c/200-16/116)/7.787:108.883*Math.pow(o-c/200,3)]}function m(e){var n,r=e[0],t=e[1],o=e[2];return(n=360*Math.atan2(o,t)/2/Math.PI)<0&&(n+=360),[r,Math.sqrt(t*t+o*o),n]}function w(e){return p(y(e))}function k(e){var n,r=e[0],t=e[1];return n=e[2]/360*2*Math.PI,[r,t*Math.cos(n),t*Math.sin(n)]}function x(e){return M[e]}e.exports={rgb2hsl:t,rgb2hsv:o,rgb2hwb:i,rgb2cmyk:a,rgb2keyword:c,rgb2xyz:s,rgb2lab:l,rgb2lch:function(e){return m(l(e))},hsl2rgb:u,hsl2hsv:function(e){var n=e[0],r=e[1]/100,t=e[2]/100;if(0===t)return[0,0,0];return[n,100*(2*(r*=(t*=2)<=1?t:2-t)/(t+r)),100*((t+r)/2)]},hsl2hwb:function(e){return i(u(e))},hsl2cmyk:function(e){return a(u(e))},hsl2keyword:function(e){return c(u(e))},hsv2rgb:h,hsv2hsl:function(e){var n,r,t=e[0],o=e[1]/100,i=e[2]/100;return n=o*i,[t,100*(n=(n/=(r=(2-o)*i)<=1?r:2-r)||0),100*(r/=2)]},hsv2hwb:function(e){return i(h(e))},hsv2cmyk:function(e){return a(h(e))},hsv2keyword:function(e){return c(h(e))},hwb2rgb:f,hwb2hsl:function(e){return t(f(e))},hwb2hsv:function(e){return o(f(e))},hwb2cmyk:function(e){return a(f(e))},hwb2keyword:function(e){return c(f(e))},cmyk2rgb:d,cmyk2hsl:function(e){return t(d(e))},cmyk2hsv:function(e){return o(d(e))},cmyk2hwb:function(e){return i(d(e))},cmyk2keyword:function(e){return c(d(e))},keyword2rgb:x,keyword2hsl:function(e){return t(x(e))},keyword2hsv:function(e){return o(x(e))},keyword2hwb:function(e){return i(x(e))},keyword2cmyk:function(e){return a(x(e))},keyword2lab:function(e){return l(x(e))},keyword2xyz:function(e){return s(x(e))},xyz2rgb:p,xyz2lab:v,xyz2lch:function(e){return m(v(e))},lab2xyz:y,lab2rgb:w,lab2lch:m,lch2lab:k,lch2xyz:function(e){return y(k(e))},lch2rgb:function(e){return w(k(e))}};var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},z={};for(var S in M)z[JSON.stringify(M[S])]=S},70:function(e,n,r){"use strict";r.r(n);var t=r(254),o=r.n(t),i=r(220);n.default={sketch:function(e){var n=e.gl;e.time;return o()({gl:n,frag:i.default,uniforms:{iTime:function(e){return e.time},iResolution:function(e){return[e.width,e.height]}}})},settings:{context:"webgl",animate:!0}}}}]);
//# sourceMappingURL=25.43c17dec.chunk.js.map