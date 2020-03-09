(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[55,57],{117:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r}));var s=i(37),n=i(2),a=i(3),h=i(258),o=i.n(h),r=function(){function e(t){Object(n.a)(this,e);for(var i=0,a=Object.entries(t);i<a.length;i++){var h=Object(s.a)(a[i],2),r=h[0],c=h[1];this[r]=c}this.color=o.a.pick(["#4b86b4","#adcbe3","#63ace5"]),this.size=this.baseOptions.fieldSize/100,this.speed=this.baseOptions.fieldSize/100*this.initSpeedFactor}return Object(a.a)(e,[{key:"update",value:function(){var e=this,t=this.moveAngle,i=this.game.enemies;this.bX=this.x,this.bY=this.y,this.speed+=-.1,this.speed<=0?(this.draw(!0),this.destroy()):(this.x+=Math.cos(t)*this.speed,this.y+=Math.sin(t)*this.speed),(this.x<-100||this.x>this.baseOptions.width+100||this.y<-100||this.y>this.baseOptions.height+100)&&this.destroy(),i.items.forEach((function(t){t.live&&(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))<t.size&&(t.explode(),e.destroy()))}))}},{key:"draw",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.baseOptions,s=i.context,n=i.backgroundContext,a=this.x,h=this.y;(e=t?n:s).lineWidth=this.size/10;var o=Math.min(this.size*Math.max(this.speed,1),5*this.size);e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.x+Math.cos(this.moveAngle-Math.PI)*o,this.y+Math.sin(this.moveAngle-Math.PI)*o),e.stroke(),e.fillStyle=this.color,e.beginPath(),e.arc(a,h,this.size/2,0,2*Math.PI),e.fill(),e.stroke()}},{key:"destroy",value:function(){this.game.bullets.remove(this)}}]),e}()},119:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return d}));var s=i(37),n=i(2),a=i(3),h=i(267),o=i(258),r=i.n(o),c=i(117),d=function(){function e(t){Object(n.a)(this,e);for(var i=0,a=Object.entries(t);i<a.length;i++){var h=Object(s.a)(a[i],2),o=h[0],r=h[1];this[o]=r}this.deadTime=0,this.size=this.baseOptions.fieldSize/50,document.addEventListener("keydown",this.handleKeyPress.bind(this)),document.addEventListener("keyup",this.handleKeyUp.bind(this)),this.baseOptions.canvas.addEventListener("mousemove",this.handleMouseMove.bind(this)),this.baseOptions.canvas.addEventListener("mousedown",this.handleMouseDown.bind(this)),this.cursorX=0,this.cursorY=0,this.moveDirection={up:!1,right:!1,down:!1,left:!1},this.gunAngle=Math.PI}return Object(a.a)(e,[{key:"fire",value:function(){if(!this.game.running)return this.game.ship.deadTime=this.game.time,this.game.running=!0,void Object(h.a)(r.a.pick([100]),"sine",1,.5);if(!this.dead){var e=this.baseOptions,t=this.game;Object(h.a)(r.a.pick([311.1,370,415.3]),"sawtooth",.1,.5),Object(h.a)(r.a.pick([155.6,185,207.7]),"sine",.2,.5);for(var i=0;i<8;i+=1){var s=new c.default({baseOptions:e,game:t,x:this.gunTipCoord[0],y:this.gunTipCoord[1],moveAngle:this.gunAngle+r.a.range(-Math.PI/32,Math.PI/32),initSpeedFactor:r.a.range(.8,1.2)});t.bullets.add(s)}}}},{key:"explode",value:function(){Object(h.a)(87.31,"triangle",.1);var e=this.x,t=this.y,i=this.baseOptions,s=this.game;this.dead=!0,this.deadTime=s.time;for(var n=-Math.PI;n<Math.PI;n+=Math.PI/50){var a=new c.default({baseOptions:i,game:s,x:e,y:t,moveAngle:n,initSpeedFactor:r.a.range(.8,1.2)});s.bullets.add(a)}}},{key:"handleMouseDown",value:function(e){this.fire()}},{key:"handleMouseMove",value:function(e){var t=e.movementX,i=e.movementY;this.cursorX+=t,this.cursorY+=i,this.gunAngle=Math.atan2(this.cursorY,this.cursorX),this.cursorX=200*Math.cos(this.gunAngle),this.cursorY=200*Math.sin(this.gunAngle)}},{key:"handleKeyPress",value:function(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveDirection.up=!0;break;case"ArrowRight":case"KeyD":this.moveDirection.right=!0;break;case"ArrowDown":case"KeyS":this.moveDirection.down=!0;break;case"ArrowLeft":case"KeyA":this.moveDirection.left=!0}}},{key:"handleKeyUp",value:function(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveDirection.up=!1;break;case"ArrowRight":case"KeyD":this.moveDirection.right=!1;break;case"ArrowDown":case"KeyS":this.moveDirection.down=!1;break;case"ArrowLeft":case"KeyA":this.moveDirection.left=!1}}},{key:"update",value:function(){if(this.dead)this.game.time-this.deadTime>1&&(this.dead=!1);else{var e=this.baseOptions.fieldSize/300;this.moveDirection.up&&(this.y+=-e),this.moveDirection.right&&(this.x+=e),this.moveDirection.down&&(this.y+=e),this.moveDirection.left&&(this.x-=e),this.x=Math.max(Math.min(this.baseOptions.width,this.x),0),this.y=Math.max(Math.min(this.baseOptions.height,this.y),0)}}},{key:"draw",value:function(){var e=this.baseOptions.context,t=this.x,i=this.y,s=this.gunAngle;if(!this.dead){e.fillStyle="#96ceb4",e.lineWidth=this.size/10,e.beginPath(),e.arc(t,i,this.size/2,0,2*Math.PI),e.fill(),e.stroke(),e.beginPath();var n=Math.cos(s)*this.size/2,a=Math.sin(s)*this.size/2,h=Math.cos(s)*this.size*1.5,o=Math.sin(s)*this.size*1.5;this.gunTipCoord=[t+h,i+o],e.moveTo(t+n,i+a),e.lineTo(t+h,i+o),e.stroke()}}}]),e}()},267:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=new(window.AudioContext||window.webkitAudioContext);function n(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=s.createOscillator(),h=s.createGain();a.connect(h),a.type=t,h.connect(s.destination),a.frequency.value=e,a.start(),h.gain.value=n,h.gain.exponentialRampToValueAtTime(1e-5,s.currentTime+i),setTimeout((function(){a.stop(),a.disconnect()}),1e3*(i+.5))}}}]);
//# sourceMappingURL=55.5a2c866a.chunk.js.map