(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[34],{259:function(r,n){r.exports=function(r,n,e){if("number"!==typeof n||"number"!==typeof e)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(n>e){var t=n;n=e,e=t}var a=e-n;if(0===a)return e;return r-a*Math.floor((r-n)/a)}},260:function(r,n,e){var t=e(253),a=e(259),o=Number.EPSILON;function u(r,n,e){return n<e?r<n?n:r>e?e:r:r<e?e:r>n?n:r}function i(r,n,e){return r*(1-e)+n*e}function f(r,n,e){return Math.abs(r-n)<o?0:(e-r)/(n-r)}function p(r,n){return n=t(n,0),"number"===typeof r&&isFinite(r)?r:n}function c(r){if("number"!==typeof r)throw new TypeError("Expected dims argument");return function(n,e){var a;e=t(e,0),null==n?a=e:"number"===typeof n&&isFinite(n)&&(a=n);var o,u=[];if(null==a)for(o=0;o<r;o++)u[o]=p(n[o],e);else for(o=0;o<r;o++)u[o]=a;return u}}function l(r,n,e,t){if(t=t||[],r.length!==n.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<r.length;a++)t[a]=i(r[a],n[a],e);return t}function h(r,n){if("number"!==typeof(r=t(r,0)))throw new TypeError("Expected n argument to be a number");for(var e=[],a=0;a<r;a++)e.push(n);return e}function s(r,n){return(r%n+n)%n}function m(r,n,e,t){return i(r,n,1-Math.exp(-e*t))}r.exports={mod:s,fract:function(r){return r-Math.floor(r)},sign:function(r){return r>0?1:r<0?-1:0},degToRad:function(r){return r*Math.PI/180},radToDeg:function(r){return 180*r/Math.PI},wrap:a,pingPong:function(r,n){return r=s(r,2*n),n-Math.abs(r-n)},linspace:function(r,n){if("number"!==typeof(r=t(r,0)))throw new TypeError("Expected n argument to be a number");"boolean"===typeof(n=n||{})&&(n={endpoint:!0});var e=t(n.offset,0);return n.endpoint?h(r).map((function(n,t){return r<=1?0:(t+e)/(r-1)})):h(r).map((function(n,t){return(t+e)/r}))},lerp:i,lerpArray:l,inverseLerp:f,lerpFrames:function(r,n,e){n=u(n,0,1);var t=r.length-1,a=n*t,o=Math.floor(a),f=a-o,p=Math.min(o+1,t),c=r[o%r.length],h=r[p%r.length];if("number"===typeof c&&"number"===typeof h)return i(c,h,f);if(Array.isArray(c)&&Array.isArray(h))return l(c,h,f,e);throw new TypeError("Mismatch in value type of two array elements: "+o+" and "+p)},clamp:u,clamp01:function(r){return u(r,0,1)},smoothstep:function(r,n,e){var t=u(f(r,n,e),0,1);return t*t*(3-2*t)},damp:m,dampArray:function(r,n,e,t,a){a=a||[];for(var o=0;o<r.length;o++)a[o]=m(r[o],n[o],e,t);return a},mapRange:function(r,n,e,t,a,u){if(Math.abs(n-e)<o)return t;var i=(r-n)/(e-n)*(a-t)+t;return u&&(a<t?i<a?i=a:i>t&&(i=t):i>a?i=a:i<t&&(i=t)),i},expand2D:c(2),expand3D:c(3),expand4D:c(4)}},44:function(r,n,e){"use strict";e.r(n);var t=e(260),a=e(258),o=e.n(a);n.default={sketch:function(r){for(var n=r.width,e=r.height,a=.1*n,u=function(r){return Object(t.lerp)(a,n-a,r)},i=function(r){return Object(t.lerp)(a,e-a,r)},f=[],p=0;p<1;p+=.01){for(var c=[],l=0;l<1;l+=.01)c.push([l+o.a.range(-.01,.01),p+o.a.range(-.01,.01),o.a.range(.7,1),o.a.range(.9,1),o.a.value()]);f.push(c)}return function(r){var n=r.context,e=r.width,t=r.height,a=r.time;a=a||0,n.fillStyle="hsl(0, 0%, 98%)",n.fillRect(0,0,e,t);var p=!0,c=!1,l=void 0;try{for(var h,s=f[Symbol.iterator]();!(p=(h=s.next()).done);p=!0){var m=h.value,y=!0,v=!1,d=void 0;try{for(var g,b=m[Symbol.iterator]();!(y=(g=b.next()).done);y=!0){var w=g.value,M=o.a.noise2D(w[0]+a/5,w[1],1.5)/2+.5,x=M*Math.PI*2*w[3],E=.05*e*w[2];n.beginPath(),n.lineWidth=(20+20*M)*e*5e-6*(w[4]>.5?1:1.18),n.moveTo(u(w[0]),i(w[1])),n.lineTo(u(w[0])+Math.cos(x)*E,i(w[1])+Math.sin(x)*E),n.stroke()}}catch(T){v=!0,d=T}finally{try{y||null==b.return||b.return()}finally{if(v)throw d}}}}catch(T){c=!0,l=T}finally{try{p||null==s.return||s.return()}finally{if(c)throw l}}}},settings:{dimensions:[512,512],animate:!0}}}}]);
//# sourceMappingURL=34.0b09e302.chunk.js.map