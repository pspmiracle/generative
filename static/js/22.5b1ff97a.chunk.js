(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[22],{253:function(t,e){t.exports=function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}},259:function(t,e){t.exports=function(t,e,r){if("number"!==typeof e||"number"!==typeof r)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(e>r){var n=e;e=r,r=n}var a=r-e;if(0===a)return r;return t-a*Math.floor((t-e)/a)}},260:function(t,e,r){var n=r(253),a=r(259),i=Number.EPSILON;function o(t,e,r){return e<r?t<e?e:t>r?r:t:t<r?r:t>e?e:t}function s(t,e,r){return t*(1-r)+e*r}function l(t,e,r){return Math.abs(t-e)<i?0:(r-t)/(e-t)}function u(t,e){return e=n(e,0),"number"===typeof t&&isFinite(t)?t:e}function c(t){if("number"!==typeof t)throw new TypeError("Expected dims argument");return function(e,r){var a;r=n(r,0),null==e?a=r:"number"===typeof e&&isFinite(e)&&(a=e);var i,o=[];if(null==a)for(i=0;i<t;i++)o[i]=u(e[i],r);else for(i=0;i<t;i++)o[i]=a;return o}}function h(t,e,r,n){if(n=n||[],t.length!==e.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<t.length;a++)n[a]=s(t[a],e[a],r);return n}function f(t,e){if("number"!==typeof(t=n(t,0)))throw new TypeError("Expected n argument to be a number");for(var r=[],a=0;a<t;a++)r.push(e);return r}function p(t,e){return(t%e+e)%e}function d(t,e,r,n){return s(t,e,1-Math.exp(-r*n))}t.exports={mod:p,fract:function(t){return t-Math.floor(t)},sign:function(t){return t>0?1:t<0?-1:0},degToRad:function(t){return t*Math.PI/180},radToDeg:function(t){return 180*t/Math.PI},wrap:a,pingPong:function(t,e){return t=p(t,2*e),e-Math.abs(t-e)},linspace:function(t,e){if("number"!==typeof(t=n(t,0)))throw new TypeError("Expected n argument to be a number");"boolean"===typeof(e=e||{})&&(e={endpoint:!0});var r=n(e.offset,0);return e.endpoint?f(t).map((function(e,n){return t<=1?0:(n+r)/(t-1)})):f(t).map((function(e,n){return(n+r)/t}))},lerp:s,lerpArray:h,inverseLerp:l,lerpFrames:function(t,e,r){e=o(e,0,1);var n=t.length-1,a=e*n,i=Math.floor(a),l=a-i,u=Math.min(i+1,n),c=t[i%t.length],f=t[u%t.length];if("number"===typeof c&&"number"===typeof f)return s(c,f,l);if(Array.isArray(c)&&Array.isArray(f))return h(c,f,l,r);throw new TypeError("Mismatch in value type of two array elements: "+i+" and "+u)},clamp:o,clamp01:function(t){return o(t,0,1)},smoothstep:function(t,e,r){var n=o(l(t,e,r),0,1);return n*n*(3-2*n)},damp:d,dampArray:function(t,e,r,n,a){a=a||[];for(var i=0;i<t.length;i++)a[i]=d(t[i],e[i],r,n);return a},mapRange:function(t,e,r,n,a,o){if(Math.abs(e-r)<i)return n;var s=(t-e)/(r-e)*(a-n)+n;return o&&(a<n?s<a?s=a:s>n&&(s=n):s>a?s=a:s<n&&(s=n)),s},expand2D:c(2),expand3D:c(3),expand4D:c(4)}},264:function(t,e,r){"use strict";function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.beginPath();for(var n=0;n<e.length;n+=1){var a=e[n];0===n?t.moveTo(a[0],a[1]):t.lineTo(a[0],a[1])}r&&t.closePath()}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}));var a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n(t,e,r),t.stroke()}},274:function(t,e,r){"use strict";var n,a="protocol hostname host pathname port search hash href".split(" ");function i(t){n||(n=document.createElement("a"));var e={};n.href=t||"";for(var r=0,i=a.length;r<i;r++){var o=a[r];e[o]=n[o]}return e}function o(t,e,r){var n=i(t),a=/\?(?:.*)$/.test(n.search)?"&":"?";return n.protocol+"//"+n.host+n.port+n.pathname+n.search+a+e+"="+r+n.hash}function s(t,e){if(!(this instanceof s))return new s(t,e);t||e||console.info("SoundCloud API requires clientId or custom apiUrl"),this._events={},this._clientId=t,this._baseUrl=e||"https://api.soundcloud.com",this.playing=!1,this.duration=0,this.audio=document.createElement("audio")}s.prototype.resolve=function(t,e){var r=this._baseUrl+"/resolve.json?url="+encodeURIComponent(t);this._clientId&&(r=o(r,"client_id",this._clientId)),this._json(r,function(r){if(this.cleanData(),Array.isArray(r)&&(r={tracks:r}),r.tracks)r.tracks=r.tracks.map(this._transformTrack.bind(this)),this._playlist=r;else{this._track=this._transformTrack(r);var n=i(t);this._track.stream_url+=n.hash}this.duration=r.duration&&!isNaN(r.duration)?r.duration/1e3:0,e(r)}.bind(this))},s.prototype._jsonp=function(t,e){var r=document.getElementsByTagName("script")[0]||document.head,n=document.createElement("script"),a="jsonp_callback_"+(new Date).valueOf()+Math.floor(1e3*Math.random());window[a]=function(t){n.parentNode&&n.parentNode.removeChild(n),window[a]=function(){},e(t)},n.src=o(t,"callback",a),r.parentNode.insertBefore(n,r)},s.prototype._json=function(t,e){var r=new XMLHttpRequest;r.open("GET",t),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var t={};try{t=JSON.parse(r.responseText)}catch(n){}e(t)}},r.send(null)},s.prototype._transformTrack=function(t){return"https://api.soundcloud.com"!==this._baseUrl&&(t.original_stream_url=t.stream_url,t.stream_url=t.stream_url.replace("https://api.soundcloud.com",this._baseUrl)),t},s.prototype.on=function(t,e){this._events[t]=e,this.audio.addEventListener(t,e,!1)},s.prototype.off=function(t,e){this._events[t]=null,this.audio.removeEventListener(t,e)},s.prototype.unbindAll=function(){for(var t in this._events){var e=this._events[t];e&&this.off(t,e)}},s.prototype.preload=function(t,e){this._track={stream_url:t},e&&(this.audio.preload=e),this.audio.src=this._clientId?o(t,"client_id",this._clientId):t},s.prototype.play=function(t){var e;if((t=t||{}).streamUrl)e=t.streamUrl;else if(this._playlist){var r=this._playlist.tracks.length;if(r){if(void 0===t.playlistIndex?this._playlistIndex=this._playlistIndex||0:this._playlistIndex=t.playlistIndex,this._playlistIndex>=r||this._playlistIndex<0)return void(this._playlistIndex=0);e=this._playlist.tracks[this._playlistIndex].stream_url}}else this._track&&(e=this._track.stream_url);if(!e)throw new Error("There is no tracks to play, use `streamUrl` option or `load` method");return this._clientId&&(e=o(e,"client_id",this._clientId)),e!==this.audio.src&&(this.audio.src=e),this.playing=e,this.audio.play()},s.prototype.pause=function(){this.audio.pause(),this.playing=!1},s.prototype.stop=function(){this.audio.pause(),this.audio.currentTime=0,this.playing=!1},s.prototype.next=function(t){t=t||{};var e=this._playlist.tracks.length;if(this._playlistIndex>=e-1){if(!t.loop)return;this._playlistIndex=-1}if(this._playlist&&e)return this.play({playlistIndex:++this._playlistIndex})},s.prototype.previous=function(){if(!(this._playlistIndex<=0))return this._playlist&&this._playlist.tracks.length?this.play({playlistIndex:--this._playlistIndex}):void 0},s.prototype.seek=function(t){if(!this.audio.readyState)return!1;var e=t.offsetX/t.target.offsetWidth||(t.layerX-t.target.offsetLeft)/t.target.offsetWidth;this.audio.currentTime=e*(this.audio.duration||0)},s.prototype.cleanData=function(){this._track=void 0,this._playlist=void 0},s.prototype.setVolume=function(t){this.audio.readyState&&(this.audio.volume=t)},s.prototype.setTime=function(t){this.audio.readyState&&(this.audio.currentTime=t)},t.exports=s},297:function(t,e){var r=window.AudioContext||window.webkitAudioContext;function n(t,e,a){if(!(this instanceof n))return new n(t,e,a);if(e instanceof r||(a=e,e=null),a=a||{},this.ctx=e=e||new r,t instanceof AudioNode||(t=t instanceof Audio||t instanceof HTMLAudioElement?e.createMediaElementSource(t):e.createMediaStreamSource(t)),this.analyser=e.createAnalyser(),this.stereo=!!a.stereo,this.audible=!1!==a.audible,this.wavedata=null,this.freqdata=null,this.splitter=null,this.merger=null,this.source=t,this.stereo){this.analyser=[this.analyser],this.analyser.push(e.createAnalyser()),this.splitter=e.createChannelSplitter(2),this.merger=e.createChannelMerger(2),this.output=this.merger,this.source.connect(this.splitter);for(var i=0;i<2;i++)this.splitter.connect(this.analyser[i],i,0),this.analyser[i].connect(this.merger,0,i);this.audible&&this.merger.connect(e.destination)}else this.output=this.source,this.source.connect(this.analyser),this.audible&&this.analyser.connect(e.destination)}t.exports=n,n.prototype.waveform=function(t,e){return t||(t=this.wavedata||(this.wavedata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount))),(this.stereo?this.analyser[e||0]:this.analyser).getByteTimeDomainData(t),t},n.prototype.frequencies=function(t,e){return t||(t=this.freqdata||(this.freqdata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount))),(this.stereo?this.analyser[e||0]:this.analyser).getByteFrequencyData(t),t}},85:function(t,e,r){"use strict";r.r(e);var n=r(21),a=r.n(n),i=r(27),o=r(260),s=r(274),l=r.n(s),u=r(297),c=r.n(u);function h(t,e){var r;if(void 0===e){var n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;null!=l&&(r<l||void 0===r&&l>=l)&&(r=l)}}catch(v){a=!0,i=v}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}else{var u=-1,c=!0,h=!1,f=void 0;try{for(var p,d=t[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var y=p.value;null!=(y=e(y,++u,t))&&(r<y||void 0===r&&y>=y)&&(r=y)}}catch(v){h=!0,f=v}finally{try{c||null==d.return||d.return()}finally{if(h)throw f}}}return r}function f(t,e){var r;if(void 0===e){var n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;null!=l&&(r>l||void 0===r&&l>=l)&&(r=l)}}catch(v){a=!0,i=v}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}else{var u=-1,c=!0,h=!1,f=void 0;try{for(var p,d=t[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var y=p.value;null!=(y=e(y,++u,t))&&(r>y||void 0===r&&y>=y)&&(r=y)}}catch(v){h=!0,f=v}finally{try{c||null==d.return||d.return()}finally{if(h)throw f}}}return r}var p=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN};function d(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}var y=a.a.mark(v);function v(t,e){var r,n,i,o,s,l,u,c,h,f,p,d,v;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==e){a.next=30;break}r=!0,n=!1,i=void 0,a.prev=4,o=t[Symbol.iterator]();case 6:if(r=(s=o.next()).done){a.next=14;break}if(!(null!=(l=s.value)&&(l=+l)>=l)){a.next=11;break}return a.next=11,l;case 11:r=!0,a.next=6;break;case 14:a.next=20;break;case 16:a.prev=16,a.t0=a.catch(4),n=!0,i=a.t0;case 20:a.prev=20,a.prev=21,r||null==o.return||o.return();case 23:if(a.prev=23,!n){a.next=26;break}throw i;case 26:return a.finish(23);case 27:return a.finish(20);case 28:a.next=58;break;case 30:u=-1,c=!0,h=!1,f=void 0,a.prev=34,p=t[Symbol.iterator]();case 36:if(c=(d=p.next()).done){a.next=44;break}if(v=d.value,!(null!=(v=e(v,++u,t))&&(v=+v)>=v)){a.next=41;break}return a.next=41,v;case 41:c=!0,a.next=36;break;case 44:a.next=50;break;case 46:a.prev=46,a.t1=a.catch(34),h=!0,f=a.t1;case 50:a.prev=50,a.prev=51,c||null==p.return||p.return();case 53:if(a.prev=53,!h){a.next=56;break}throw f;case 56:return a.finish(53);case 57:return a.finish(50);case 58:case"end":return a.stop()}}),y,null,[[4,16,20,28],[21,,23,27],[34,46,50,58],[51,,53,57]])}function m(t,e,r){if(n=(t=Float64Array.from(v(t,r))).length){if((e=+e)<=0||n<2)return f(t);if(e>=1)return h(t);var n,a=(n-1)*e,i=Math.floor(a),o=h(function t(e,r){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:p;a>n;){if(a-n>600){var o=a-n+1,s=r-n+1,l=Math.log(o),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(o-u)/o)*(s-o/2<0?-1:1),h=Math.max(n,Math.floor(r-s*u/o+c)),f=Math.min(a,Math.floor(r+(o-s)*u/o+c));t(e,r,h,f,i)}var y=e[r],v=n,m=a;for(d(e,n,r),i(e[a],y)>0&&d(e,n,a);v<m;){for(d(e,v,m),++v,--m;i(e[v],y)<0;)++v;for(;i(e[m],y)>0;)--m}0===i(e[n],y)?d(e,n,m):d(e,++m,a),m<=r&&(n=m+1),r<=m&&(a=m-1)}return e}(t,i).subarray(0,i+1));return o+(f(t.subarray(i+1))-o)*(a-i)}}function b(t,e){for(var r=[],n=Math.floor(t.length/e),a=0;a<e;a+=1){for(var i=0,o=0;o<n;o+=1)i+=t[a*n+o];r.push(i/n)}return r}var _=r(264),g=function(){var t=Object(i.a)(a.a.mark((function t(e){var r,n,i,s,u,h,f,p,d,y;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.width,n=e.height,i=e.canvas,s=.1*r,u=function(t){return Object(o.lerp)(s,r-s,t)},h=function(t){return Object(o.lerp)(s,n-s,t)},f=!1,d=[],y=new l.a("b95f61a90da961736c03f659c03cb0cc"),i.addEventListener("click",(function(){f||(f=!0,y.resolve("https://soundcloud.com/lil_peep/spotlight-1",(function(t){y.play();var e=y.audio;e.crossOrigin="Anonymous",e.autoplay=!0,e.play(),p=c()(e,{stereo:!1})})))})),t.abrupt("return",{render:function(t){var e=t.context,r=t.width,n=t.height,a=t.time;if(!f)return e.fillStyle="hsla(0, 0%, 98%, 1)",e.fillRect(0,0,r,n),e.save(),e.translate(r/2,n/2),e.rotate(Math.cos(4*a)/5),e.font="bold 90px Arial",e.textAlign="center",e.fillStyle="hsl(0, 0%, 20%)",e.fillText("Click to start",0,0),void e.restore();if(!p)return e.fillStyle="hsla(0, 0%, 98%, 1)",void e.fillRect(0,0,r,n);e.fillStyle="hsla(0, 0%, 98%, 0.08)",e.fillRect(0,0,r,n);var i=p.frequencies();d=b(i,1e3).slice(50,650);for(var s,l=m(i,.5,s),c=[],y=Math.floor(d.length/15),v=0;v<15;v+=1){for(var g=d.slice(v*y,(v+1)*y),x=[],w=0;w<2*Math.PI;w+=.1){var k=Math.floor(w/(2*Math.PI)*g.length),M=Object(o.lerp)(1-.8/15*(v+1),1-.8/15*v,g[k]/63.75);x.push([M*Math.cos(w+a*Math.sqrt(v)/2)/2+.5,M*Math.sin(w+a*Math.sqrt(v)/2)/2+.5])}c.push(x)}c.forEach((function(t,r){var n=t.map((function(t){return[u(t[0]),h(t[1])]}));e.strokeStyle="hsl(".concat(2*l+10*r+30*a,", 50%,50%)"),Object(_.a)(e,n,!0)}))},unload:function(){y.stop()}});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default={sketch:g,settings:{dimensions:[1024,1024],animate:!0}}}}]);
//# sourceMappingURL=22.5b1ff97a.chunk.js.map