(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[35],{259:function(e,n){e.exports=function(e,n,r){if("number"!==typeof n||"number"!==typeof r)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(n>r){var t=n;n=r,r=t}var a=r-n;if(0===a)return r;return e-a*Math.floor((e-n)/a)}},260:function(e,n,r){var t=r(253),a=r(259),o=Number.EPSILON;function u(e,n,r){return n<r?e<n?n:e>r?r:e:e<r?r:e>n?n:e}function i(e,n,r){return e*(1-r)+n*r}function f(e,n,r){return Math.abs(e-n)<o?0:(r-e)/(n-e)}function s(e,n){return n=t(n,0),"number"===typeof e&&isFinite(e)?e:n}function p(e){if("number"!==typeof e)throw new TypeError("Expected dims argument");return function(n,r){var a;r=t(r,0),null==n?a=r:"number"===typeof n&&isFinite(n)&&(a=n);var o,u=[];if(null==a)for(o=0;o<e;o++)u[o]=s(n[o],r);else for(o=0;o<e;o++)u[o]=a;return u}}function c(e,n,r,t){if(t=t||[],e.length!==n.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<e.length;a++)t[a]=i(e[a],n[a],r);return t}function h(e,n){if("number"!==typeof(e=t(e,0)))throw new TypeError("Expected n argument to be a number");for(var r=[],a=0;a<e;a++)r.push(n);return r}function l(e,n){return(e%n+n)%n}function m(e,n,r,t){return i(e,n,1-Math.exp(-r*t))}e.exports={mod:l,fract:function(e){return e-Math.floor(e)},sign:function(e){return e>0?1:e<0?-1:0},degToRad:function(e){return e*Math.PI/180},radToDeg:function(e){return 180*e/Math.PI},wrap:a,pingPong:function(e,n){return e=l(e,2*n),n-Math.abs(e-n)},linspace:function(e,n){if("number"!==typeof(e=t(e,0)))throw new TypeError("Expected n argument to be a number");"boolean"===typeof(n=n||{})&&(n={endpoint:!0});var r=t(n.offset,0);return n.endpoint?h(e).map((function(n,t){return e<=1?0:(t+r)/(e-1)})):h(e).map((function(n,t){return(t+r)/e}))},lerp:i,lerpArray:c,inverseLerp:f,lerpFrames:function(e,n,r){n=u(n,0,1);var t=e.length-1,a=n*t,o=Math.floor(a),f=a-o,s=Math.min(o+1,t),p=e[o%e.length],h=e[s%e.length];if("number"===typeof p&&"number"===typeof h)return i(p,h,f);if(Array.isArray(p)&&Array.isArray(h))return c(p,h,f,r);throw new TypeError("Mismatch in value type of two array elements: "+o+" and "+s)},clamp:u,clamp01:function(e){return u(e,0,1)},smoothstep:function(e,n,r){var t=u(f(e,n,r),0,1);return t*t*(3-2*t)},damp:m,dampArray:function(e,n,r,t,a){a=a||[];for(var o=0;o<e.length;o++)a[o]=m(e[o],n[o],r,t);return a},mapRange:function(e,n,r,t,a,u){if(Math.abs(n-r)<o)return t;var i=(e-n)/(r-n)*(a-t)+t;return u&&(a<t?i<a?i=a:i>t&&(i=t):i>a?i=a:i<t&&(i=t)),i},expand2D:p(2),expand3D:p(3),expand4D:p(4)}},45:function(e,n,r){"use strict";r.r(n);var t=r(258),a=r(260).lerp;n.default={sketch:function(e){var n,r=e.width,o=e.height,u=.1*r,i=function(e){return a(u,r-u,e)},f=function(e){return a(u,o-u,e)},s=!0,p=t.range(3,5);return function(e){var r=e.context,a=e.width,o=e.height,u=e.time;u>p?u>p+3&&(p=p+3+t.range(3,8),s=!0):(s&&(r.fillStyle="hsl(0, 0%, 98%)",r.fillRect(0,0,a,o),n=new Array(200).fill(null).map((function(){return{x:t.gaussian()/t.range(5,10)+.5,y:t.gaussian()/t.range(5,10)+.5,mx:t.range(-1,1),my:t.range(-1,1),r:t.value(),speedC:t.range(200,500),seed:t.getRandomSeed(),seedX:t.range(.5,3),seedY:t.range(.5,3),seedR:t.range(.5,3),speedA:t.range(.5,3),seedA:t.range(-Math.PI,Math.PI),alpha:t.range(.3,.7),colorSpeed:t.range(20,60),maxR:1}})),s=!1),n.forEach((function(e,n){var o=e.seed,s=e.speedC,p=e.mx,c=e.my,h=e.seedX,l=e.seedY,m=e.seedR,d=e.seedA,g=e.speedA,y=e.colorSpeed,b=e.alpha;t.setSeed(o),e.x+=t.noise1D(u,h)/s+p/1e3,e.y+=t.noise1D(u+1e3,l)/s+c/1e3,e.r=t.noise1D(u+2e3,m);var v=i(e.x),w=f(e.y),x=Math.abs(e.r)*a*.01;r.beginPath(),r.arc(v,w,x,0,2*Math.PI,!1),r.fillStyle="hsla(".concat(10*n+u*y,", 80%, 50%, ").concat(b+.3*Math.cos(u*g+d),")"),r.fill()})))}},settings:{dimensions:[2048,2048],animate:!0}}}}]);
//# sourceMappingURL=35.2cad1832.chunk.js.map