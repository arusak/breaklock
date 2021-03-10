!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=function(t,e){for(var n=Math.abs(t)+"",i=t<0,s=e-n.length;s>0;s--)n="0"+n;return(i?"-":"")+n},s={create:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e=-1===s.SVG_ELEMENTS.indexOf(t)?document.createElement(t):document.createElementNS(s.SVG_NAMESPACE,t),n.constructor===String)e.setAttribute("class",n);else for(var a in n)e.setAttribute(a,n[a]);if(i instanceof Array)for(var r=0;r<i.length;r++)e.appendChild(i[r]);else e.textContent=i;return e},icon:function(t){var e=s.create("use");return e.setAttributeNS(s.XLINK_NAMESPACE,"href","#icon-"+t),s.create("svg",{class:"icon"},[e])},clear:function(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e].remove()},SVG_NAMESPACE:"http://www.w3.org/2000/svg",XLINK_NAMESPACE:"http://www.w3.org/1999/xlink",SVG_ELEMENTS:["svg","g","circle","line","path","use","rect"]},a=s;function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(0);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate()}var e,n,s;return e=t,(n=[{key:"setupTemplate",value:function(){this.counterEl=a.create("span","countdown-counter"),this.barEl=a.create("span","countdown-content");var t=a.create("span","countdown-container",[this.barEl]);return this.el=a.create("div","countdown",[this.counterEl,t]),this.el}},{key:"setTimer",value:function(t,e){this.duration=t,this.remaining=t,this.endCallback=e,this.render()}},{key:"start",value:function(){this.interval||(this.interval=window.setInterval(this.decrement.bind(this),1e3))}},{key:"stop",value:function(){window.clearInterval(this.interval),this.interval=null}},{key:"decrement",value:function(){this.remaining--,this.render()}},{key:"render",value:function(){this.remaining=this.remaining>0?this.remaining:0,this.el.classList[this.remaining>10?"remove":"add"]("alert"),this.counterEl.textContent=i(this.remaining,3),this.barEl.style.width=this.remaining/this.duration*100+"%",0==this.remaining&&(this.stop(),this.endCallback&&this.endCallback())}}])&&r(e.prototype,n),s&&r(e,s),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(1);var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cancelCallback=e,this.counterVal=null,this.setupTemplate()}var e,n,s;return e=t,(n=[{key:"setupTemplate",value:function(){return this.cancelBtnEl=a.create("button","status-bar-cancel","خروج"),this.counterEl=a.create("span","status-bar-info"),this.countdown=new o,this.countdownEl=this.countdown.el,this.countdownEl.setAttribute("class","status-bar-info"),this.el=a.create("div","status-bar",[this.cancelBtnEl,this.counterEl,this.countdownEl]),this.el}},{key:"init",value:function(){var t=this;this.cancelBtnEl.addEventListener("click",(function(){t.cancelCallback(0)}))}},{key:"setCounter",value:function(t){this.counterEl.style.display="inherit",this.countdownEl.style.display="none",this.counterVal=t,this.updateCounter()}},{key:"updateCounter",value:function(){return this.counterEl.textContent=i(this.counterVal,3),this.counterVal}},{key:"decrementCounter",value:function(){return this.counterVal--,this.updateCounter()}},{key:"incrementCounter",value:function(){return this.counterVal++,this.updateCounter()}},{key:"setCountdown",value:function(t){var e=this;this.counterEl.style.display="none",this.countdownEl.style.display="inherit",this.countdown.setTimer(t,(function(){e.cancelCallback(1)})),this.countdown.start()}},{key:"stopCountdown",value:function(){this.countdown.stop()}}])&&l(e.prototype,n),s&&l(e,s),t}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(2);var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastPattern=null,this.setupTemplate()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){return this.containerEl=a.create("div","history-container",""),this.el=a.create("div","history scrollbarlesque",[this.containerEl]),this.el}},{key:"stackPattern",value:function(t){this.lastPattern?this.containerEl.insertBefore(t,this.lastPattern):this.containerEl.appendChild(t),this.lastPattern=t,this.scrollToStart()}},{key:"scrollToStart",value:function(){var t=this.el.scrollLeft;this.el.scrollLeft=(Math.max(t/4,4),0),this.el.scrollLeft>0&&window.requestAnimationFrame(this.scrollToStart.bind(this))}},{key:"clear",value:function(t){this.lastPattern=null,this.containerEl.remove(),this.containerEl=a.create("div",{class:"history-container","data-helper":t}),this.el.appendChild(this.containerEl)}}])&&c(e.prototype,n),i&&c(e,i),t}();function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dotLength=e,this.suite=[]}var e,n,i;return e=t,(n=[{key:"fillRandomly",value:function(){for(;!this.isComplete();)this.addDot(Math.floor(9*Math.random()))}},{key:"addDot",value:function(t){if(this.isComplete()||~this.suite.indexOf(t))return[];var e=this.suite[this.suite.length-1],n=(e+t)/2;if(null!=e&&n>>0===n&&e%3-n%3==n%3-t%3&&Math.floor(e/3)-Math.floor(n/3)==Math.floor(n/3)-Math.floor(t/3)){var i=this.addDot(n);return this.isComplete()||(this.suite.push(t),i.push(t)),i}return this.suite.push(t),[t]}},{key:"isComplete",value:function(){return this.suite.length>=this.dotLength}},{key:"gotDot",value:function(t){return~this.suite.indexOf(t)}},{key:"compare",value:function(t){for(var e=0,n=0,i=0;i<this.dotLength;i++){this.suite[i]===t.suite[i]&&e++;for(var s=0;s<this.dotLength;s++)this.suite[s]===t.suite[i]&&n++}return[e,n-e,this.dotLength-n]}},{key:"reset",value:function(){this.suite=[]}}])&&d(e.prototype,n),i&&d(e,i),t}();function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=a.create("svg",{viewBox:"0 0 "+this.SVG_WIDTH+" "+this.SVG_WIDTH})}var e,n,i;return e=t,(n=[{key:"addBackgroundLayer",value:function(){var t=a.create("rect",{fill:"#fff","fill-opacity":"0",width:this.SVG_WIDTH,height:this.SVG_WIDTH});return this.el.appendChild(t),t}},{key:"addPattern",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff",i=[];n=n instanceof Array?n:[n];for(var s=1;s<t.suite.length;s++)i.push(a.create("line",{x1:t.suite[s-1]%3*this.GRID_GUTTER+this.SVG_MARGIN,y1:Math.floor(t.suite[s-1]/3)*this.GRID_GUTTER+this.SVG_MARGIN,x2:t.suite[s]%3*this.GRID_GUTTER+this.SVG_MARGIN,y2:Math.floor(t.suite[s]/3)*this.GRID_GUTTER+this.SVG_MARGIN,stroke:n[Math.min(n.length,s)-1]}));var r=t.suite[t.suite.length-1];return i.push(a.create("circle",{cx:r%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(r/3)*this.GRID_GUTTER+this.SVG_MARGIN,fill:n[0],r:e/4})),this.addGroup({"stroke-width":e,"stroke-linecap":"round"},i)}},{key:"addDots",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];e.fill=e.fill||"#fff";for(var i=0;i<9;i++)n.push(a.create("circle",{cx:i%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(i/3)*this.GRID_GUTTER+this.SVG_MARGIN,rel:i,r:t}));return this.addGroup(e,n)}},{key:"addGroup",value:function(t,e){var n=a.create("g",t,e);return this.el.appendChild(n),n}},{key:"addCombinaison",value:function(t,e,n){var i=t+e+n,s=Math.min(Math.floor(this.SVG_WIDTH/i),this.SVG_COMB_EXP),r=Math.floor(.75*s),o=r+Math.floor(.25*s),l=Math.floor((this.SVG_WIDTH-(i-1)*o)/2),u=this.SVG_WIDTH+Math.floor(this.SVG_COMB_EXP/2);this.el.setAttribute("viewBox","0 0 "+this.SVG_WIDTH+" "+(this.SVG_WIDTH+this.SVG_COMB_EXP));for(var c=[],h=0;h<i;h++)c.push(a.create("circle",{cx:l+h*o,cy:u,r:(r-this.DOT_BORDER)/2,"stroke-width":this.DOT_BORDER,fill:h<t?"#fff":"#000",stroke:h<t+e?"#fff":"#000","fill-opacity":h<t?"1":".25","stroke-opacity":h<t+e?"1":".25"}));return this.addGroup({},c)}},{key:"getSVG",value:function(){return this.el}}])&&p(e.prototype,n),i&&p(e,i),t}();v.prototype.SVG_NAMESPACE="http://www.w3.org/2000/svg",v.prototype.SVG_WIDTH=100,v.prototype.SVG_COMB_EXP=20,v.prototype.SVG_MARGIN=15,v.prototype.GRID_GUTTER=35,v.prototype.DOT_BORDER=2,v.prototype.DOT_MAGNET=6;var m=v,y={GAME:{DIFFICULTY:{EASY:4,MEDIUM:5,HARD:6},TYPE:{PRACTICE:1,CHALLENGE:2,COUNTDOWN:3},ACTIONS:{CONTINUE:1,NEW_GAME:2,BACK_HOME:3}},SOCIAL:{PLATFORMS:{FB:{NAME:"Facebook",ICON:"facebook",URL:function(t){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(t))}},TWITTER:{NAME:"Twitter",ICON:"twitter",URL:function(t,e,n){return"http://twitter.com/"+(t?"share?":"intent/tweet?")+(e?"text=".concat(encodeURI(e),"&"):"")+(t?"url=".concat(encodeURI(t),"&"):"")+(n?"hashtags=".concat(encodeURI(n.join(","))):"")}}},MESSAGE:"I wasted my time on BreakLock, it's pointless, don't try it.",TAGS:["breaklock"]},URL:"https://maxwellito.github.io/breaklock/",COLORS:{BRIGHT:"#ffffff",DARK:"#14171b",SUCCESS:"#116699",ERROR:"#ff0000"},PATTERN:{HEX_COLOR_START:"66",HEX_COLOR_END:"FF"}};function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(3);var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentLine=null,this.onNewPattern=e,this.setupTemplate()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){var t=new m;return t.addBackgroundLayer(),this.el=t.getSVG(),this.el.setAttribute("class","lock"),this.patternEl=t.addGroup({"stroke-width":"2",stroke:y.COLORS.BRIGHT,"stroke-linecap":"round"}),this.bigDotsEl=t.addDots(9,{class:"lock-flashdots"}),t.addDots(2),this.el}},{key:"init",value:function(){this.el.addEventListener("touchstart",this.touchStart.bind(this)),this.el.addEventListener("touchmove",this.touchUpdate.bind(this)),this.el.addEventListener("touchend",this.touchEnd.bind(this)),this.el.addEventListener("mousedown",this.mouseStart.bind(this))}},{key:"setDotLength",value:function(t){this.dotLength=t,this.pattern=new f(this.dotLength)}},{key:"mouseStart",value:function(t){this.reset(),this.mouseUpdateBind=this.mouseUpdate.bind(this),this.mouseEndBind=this.mouseEnd.bind(this),this.el.addEventListener("mousemove",this.mouseUpdateBind),window.addEventListener("mouseleave",this.mouseEndBind),window.addEventListener("mouseup",this.mouseEndBind),this.mouseUpdate(t)}},{key:"mouseUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(m.prototype.SVG_WIDTH,Math.round(m.prototype.SVG_WIDTH/e.width*(t.pageX-e.left)))),i=Math.max(0,Math.min(m.prototype.SVG_WIDTH,Math.round(m.prototype.SVG_WIDTH/e.height*(t.pageY-e.top))));this.updatePoint(n,i)}},{key:"mouseEnd",value:function(t){this.isPendingReset||this.reset(),this.el.removeEventListener("mousemove",this.mouseUpdateBind),window.removeEventListener("mouseout",this.mouseEndBind),window.removeEventListener("mouseup",this.mouseEndBind)}},{key:"touchStart",value:function(t){this.reset(),this.touchUpdate(t)}},{key:"touchUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(m.prototype.SVG_WIDTH,Math.round(m.prototype.SVG_WIDTH/e.width*(t.targetTouches[0].pageX-e.left)))),i=Math.max(0,Math.min(m.prototype.SVG_WIDTH,Math.round(m.prototype.SVG_WIDTH/e.height*(t.targetTouches[0].pageY-e.top))));this.updatePoint(n,i)}},{key:"touchEnd",value:function(){this.isPendingReset||this.reset()}},{key:"updatePoint",value:function(t,e){if(!this.isPendingReset){for(var n,i,s,a=0;a<3;a++){var r=m.prototype.GRID_GUTTER*a+m.prototype.SVG_MARGIN-m.prototype.DOT_MAGNET,o=m.prototype.GRID_GUTTER*a+m.prototype.SVG_MARGIN+m.prototype.DOT_MAGNET;n=r<=t&&o>=t?a:n,i=r<=e&&o>=e?a:i}if(void 0!==n&&null!=i){var l=3*i+n;s=this.triggerDot(l)}return s||this.updateLine(t,e),!0}}},{key:"triggerDot",value:function(t){var e=this;if(!this.pattern.gotDot(t)){var n=this.pattern.addDot(t);navigator.vibrate&&navigator.vibrate(20),n.forEach((function(t,i){var s=m.prototype.GRID_GUTTER*(t%3)+m.prototype.SVG_MARGIN,a=m.prototype.GRID_GUTTER*Math.floor(t/3)+m.prototype.SVG_MARGIN;if(e.closeLine(s,a),e.bigDotsEl.childNodes[t].classList.add("active"),i+1===n.length&&e.pattern.isComplete())return e.checkPattern();e.startLine(s,a)}))}}},{key:"reset",value:function(){clearTimeout(this.isPendingReset),this.isPendingReset=null,this.pattern.reset(),this.currentLine=null;for(var t=0;t<9;t++)this.bigDotsEl.childNodes[t].classList.remove("active");for(var e=this.patternEl.childNodes.length-1;e>=0;e--)this.patternEl.childNodes[e].remove();this.patternEl.setAttribute("stroke",y.COLORS.BRIGHT)}},{key:"checkPattern",value:function(){var t=this.onNewPattern(this.pattern);return this.isPendingReset=setTimeout(this.reset.bind(this),1e3),this.patternEl.setAttribute("stroke",t?y.COLORS.SUCCESS:y.COLORS.ERROR),t}},{key:"startLine",value:function(t,e){this.currentLine=a.create("line",{x1:t,y1:e}),this.patternEl.appendChild(this.currentLine)}},{key:"updateLine",value:function(t,e){this.currentLine&&(this.currentLine.setAttribute("x2",t),this.currentLine.setAttribute("y2",e))}},{key:"closeLine",value:function(t,e){this.updateLine(t,e),this.currentLine=null}}])&&E(e.prototype,n),i&&E(e,i),t}(),g=[{min:1,max:3,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:2,max:4,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:1,max:2,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:2,max:5,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:1,max:4,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:2,max:5,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:8,max:10,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:4,max:8,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:7,max:10,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:9,max:10,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:11,max:50,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:11,max:50,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:11,max:50,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:11,max:50,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:11,max:50,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:41,max:403,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:404,max:404,text:"شانس خالص بود. نه هیچ چیز دیگه."},{min:405,max:999,text:"شانس خالص بود. نه هیچ چیز دیگه."}],T=["من مطمئنم که دفعه بعدی می تونی.","بازی رو فهمیدی؟ به خودت نگیر. من بد توضیح دادم.","یه روزی بالاخره می تونی.","برای تو جالب نبود، ولی برای من هست :)","استرس نگیر. بالاخره می تونی.","اگه می خوای شکست نخوری می تونی بازی نکنی :)","شکست مقدمه پیروزیست.","تلیت! یه سکه دیگه بنداز و دوباره بازی کن."];var k=function(t,e){var n,i;return t?(n="قفل در ".concat(e," تلاش پیدا شد. "),i=g.filter((function(t){return t.min<=e&&t.max>=e})).map((function(t){return t.text}))):(n="متاسفم. شما شکست خوردید. ",i=T),n+i[Math.floor(i.length*Math.random())]},w=[];function C(t){for(var e=w.length-1;e>=0;e--)if(w[e].el===t)return w.splice(e,1)[0]}function _(t){var e;t.nextFrame=(e=function(){L(t)},window.setTimeout(e,60))}function L(t){if(t.counter-=1,t.counter<=0)return t.el.textContent=t.originalText,void C(t.el);var e=Math.floor(t.originalLength-t.counter/3);t.el.textContent=t.originalText.substr(0,e)+function(t){var e="";if(t<=0)return e;for(var n=0;n<t;n++)e+="ابپتثجچحخدذرضسشصضطظعغفقکلمنوهی".charAt(Math.floor(Math.random()*"ابپتثجچحخدذرضسشصضطظعغفقکلمنوهی".length));return e}(Math.min(t.originalLength-e,3)),_(t)}var G=function(t,e){var n,i=C(t);i&&(n=i.nextFrame,window.clearTimeout(n));var s={el:t,counter:3*e.length,originalLength:e.length,originalText:e,nextFrame:null};L(s),w.push(s)};function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(4);var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAction=e,this.setupTemplate(),this.init()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){return this.successBtn=a.create("button",{class:"summary-action-button"},[a.icon("continue"),a.create("span",{},"ПОЛУЧИТЬ ТАЙНОЕ ЗНАНИЕ")]),this.failureBtn=a.create("button",{class:"summary-action-button",rel:y.GAME.ACTIONS.NEW_GAME},[a.icon("continue"),a.create("span",{},"ПОПРОБОВАТЬ ЕЩЁ РАЗ")]),this.actionButtons=[this.successBtn,this.failureBtn],this.socialButtons=[],this.titleEl=a.create("h1","summary-title highlight"),this.detailsEl=a.create("p","summary-details"),this.revealEl=a.create("p","summary-reveal","ادامه بده تا نتیجه رو ببینی"),this.actionsEl=a.create("div","summary-actions bloc",this.actionButtons),this.el=a.create("div","summary view",[a.create("div","view-bloc",[this.titleEl,this.detailsEl,this.revealEl]),a.create("div","view-bloc",[this.actionsEl])]),this.el}},{key:"init",value:function(){var t=this;this.successBtn.addEventListener("click",(function(){return document.getElementById("reveal").className="shown"})),this.failureBtn.addEventListener("click",(function(e){return t.triggerAction(e)}))}},{key:"setContent",value:function(t,e){this.titleEl.classList.remove("fail"),this.titleEl.classList.remove("success"),this.titleEl.classList.add(t?"success":"fail"),G(this.titleEl,t?"پیروزی!":"شکست!"),this.detailsEl.textContent=k(t,e),this.revealEl.classList[t?"add":"remove"]("hide"),t?(this.failureBtn.classList.add("hidden"),this.successBtn.classList.remove("hidden")):(this.failureBtn.classList.remove("hidden"),this.successBtn.classList.add("hidden")),this.updateSocialLinks(),this.toggle(!0)}},{key:"toggle",value:function(t){t=null!=t?t:!this.el.classList.contains("active"),this.el.classList[t?"add":"remove"]("active")}},{key:"triggerAction",value:function(t){var e=parseInt(t.currentTarget.getAttribute("rel")||0,10);this.onAction(e)}},{key:"updateSocialLinks",value:function(){this.socialButtons.forEach((function(t){var e=t.getAttribute("platform"),n=y.SOCIAL.PLATFORMS[e];t.setAttribute("href",n.URL(y.URL,y.SOCIAL.MESSAGE,y.SOCIAL.TAGS))}))}}])&&S(e.prototype,n),i&&S(e,i),t}(),A={greydient:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t="string"==typeof t?parseInt(t,16):t,e="string"==typeof e?parseInt(e,16):e,t=Math.min(255,Math.max(0,t));for(var i=[],s=((e=Math.min(255,Math.max(0,e)))-t)/++n,a=0;a<=n;a++){var r=Math.round(t+a*s),o=r.toString(16);i.push("#"+o+o+o)}return i}};function I(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(5);var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.statusBar=new u(this.abort.bind(this)),this.history=new h,this.lock=new b(this.newAttempt.bind(this)),this.summary=new x(this.action.bind(this)),this.pattern=null,this.type=null,this.isEnded=!1,this.onEnd=e,this.statusBar.init(),this.lock.init(),this.setupTemplate()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=a.create("div","game-layout view",[a.create("div","view-bloc game-layout-dashboard",[this.statusBar.el,a.create("div","history-wrap",[this.history.el])]),a.create("div","view-bloc game-layout-lock",[this.lock.el]),this.summary.el]),this.el}},{key:"start",value:function(t,e){switch(this.type=t,this.difficulty=e,this.lock.setDotLength(e),this.pattern=new f(e),this.pattern.fillRandomly(),this.history.clear(" "+e+" نقطه را وصل کنید"),this.count=0,this.isEnded=!1,t){case y.GAME.TYPE.PRACTICE:return this.statusBar.setCounter(0);case y.GAME.TYPE.CHALLENGE:return this.statusBar.setCounter(10);case y.GAME.TYPE.COUNTDOWN:return this.statusBar.setCountdown(60)}}},{key:"newAttempt",value:function(t){var e=this.pattern.compare(t),n=this.buildPatternSVG(t,e),i=e[0]===this.pattern.dotLength;if(this.count++,this.isEnded)this.statusBar.incrementCounter();else if(i)this.type===y.GAME.TYPE.COUNTDOWN&&this.statusBar.stopCountdown(),this.isEnded=n,this.summary.setContent(!0,this.count);else switch(this.type){case y.GAME.TYPE.PRACTICE:this.statusBar.incrementCounter();break;case y.GAME.TYPE.CHALLENGE:0===this.statusBar.decrementCounter()&&(this.isEnded=!0,this.summary.setContent(!1,this.count))}return this.history.stackPattern(n),i}},{key:"abort",value:function(t){t?(this.isEnded=!0,this.statusBar.stopCountdown(),this.summary.setContent(!1,this.count)):this.onEnd()}},{key:"action",value:function(t){switch(t){case y.GAME.ACTIONS.NEW_GAME:this.start(this.type,this.difficulty);break;case y.GAME.ACTIONS.BACK_HOME:this.abort();break;case y.GAME.ACTIONS.CONTINUE:if(!0===this.isEnded){var e=this.pattern.compare(this.pattern),n=this.buildPatternSVG(this.pattern,e);this.history.stackPattern(n)}this.statusBar.setCounter(this.count)}this.summary.toggle()}},{key:"buildPatternSVG",value:function(t,e){var n=new m;n.addDots(1),n.addPattern(t,14,A.greydient(y.PATTERN.HEX_COLOR_START,y.PATTERN.HEX_COLOR_END,t.dotLength-3)),e&&m.prototype.addCombinaison.apply(n,e);var i=n.getSVG();return e[0]===t.dotLength&&i.classList.add("success"),i}}])&&I(e.prototype,n),i&&I(e,i),t}();function R(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(6);var O=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.content=n,this.isExpanded=i,this.setupTemplate()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this.content instanceof String?this.content:[this.content];return this.buttonEl=a.create("button","extender-button",this.title),this.contentEl=a.create("div","extender-content",t),this.el=a.create("div","extender small-only",[this.buttonEl,this.contentEl]),this.render(),this.el}},{key:"init",value:function(){this.buttonEl.addEventListener("click",this.toggle.bind(this))}},{key:"toggle",value:function(t){this.isExpanded=t instanceof Boolean?t:!this.isExpanded,this.render()}},{key:"render",value:function(){this.el.classList[this.isExpanded?"add":"remove"]("active")}}])&&R(e.prototype,n),i&&R(e,i),t}();function D(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(7);var P=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices(e)}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=a.create("div","selectbox"),this.el}},{key:"setChoices",value:function(t){var e=this,n=this.selectListener.bind(this);t.forEach((function(t,i){var s=a.create("span",{class:"selectbox-item",rel:t.value},t.label);return s.addEventListener("click",n),s.addEventListener("touchstart",n),e.el.appendChild(s),t.default&&e.selectFromTag(s),s})),this.el.classList.add("selectbox-"+t.length)}},{key:"selectListener",value:function(t){t.preventDefault(),t.stopPropagation(),this.selectFromTag(t.currentTarget)}},{key:"selectFromTag",value:function(t){this.selectedTag&&this.selectedTag.classList.remove("active"),this.selectedTag=t,this.selectedTag.classList.add("active"),this.selectedValue=window.parseInt(t.getAttribute("rel"),10)}},{key:"getValue",value:function(){return this.selectedValue}}])&&D(e.prototype,n),i&&D(e,i),t}();function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(8);var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectionIndex=0,this.setupTemplate(),this.setChoices(e)}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){return this.btnLeft=a.create("span","selectbox-item active selector-left","<"),this.btnRight=a.create("span","selectbox-item active selector-right",">"),this.labelEl=a.create("span","selectbox-item selector-label"),this.el=a.create("div","selector selectbox",[this.btnLeft,this.btnRight,this.labelEl]),this.el}},{key:"init",value:function(){this.btnLeft.addEventListener("click",this.previous.bind(this)),this.btnLeft.addEventListener("touchstart",this.previous.bind(this)),this.btnRight.addEventListener("click",this.next.bind(this)),this.btnRight.addEventListener("touchstart",this.next.bind(this))}},{key:"setChoices",value:function(t){this.choices=t;for(var e=this.choices.length-1;e>=0;e--)this.selectionIndex=this.choices[e].default?e:this.selectionIndex;this.selectionIndex=this.selectionIndex||0,this.updateLabel()}},{key:"updateLabel",value:function(){this.selectionIndex=(this.selectionIndex+this.choices.length)%this.choices.length;var t=this.choices[this.selectionIndex];return this.labelEl.textContent=t.label,this.selectCallback&&this.selectCallback(this.choices[this.selectionIndex]),this.selectionIndex}},{key:"next",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex++,this.updateLabel()}},{key:"previous",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex--,this.updateLabel()}},{key:"onSelect",value:function(t){this.selectCallback=t,this.updateLabel()}},{key:"getValue",value:function(){var t=this.choices[this.selectionIndex];return t&&t.value}}])&&N(e.prototype,n),i&&N(e,i),t}();function V(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(9);var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices([{value:"en",label:"English"},{value:"fa",label:"فارسی"}])}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this;return this.el=a.create("div","lang-selector disabled"),this.el.onclick=function(){return t.el.classList.toggle("disabled")},this.el}},{key:"setChoices",value:function(t){var e=a.create("div");t.forEach((function(t){var n=a.create("a",{href:t.value},t.label);e.appendChild(n),e.appendChild(a.create("br"))})),this.el.appendChild(e)}}])&&V(e.prototype,n),i&&V(e,i),t}();function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(10);var q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onStart=e,this.setupTemplate()}var e,n,i;return e=t,(n=[{key:"setupTemplate",value:function(){var t=a.create("h1","menu-title highlight unselectable","قفل شکن"),e=a.create("p","menu-intro");this.title=t,this.typeHelpEl=a.create("p",{},"Future info about the challenge"),this.btnStarlEl=a.create("button","action-btn","شروع_"),G(t,"قفل شکن");var n=new O("آموزش",document.getElementById("instructions-template"));n.init(),this.difficultyOption=new P([{value:y.GAME.DIFFICULTY.EASY,label:"آسان",default:!0},{value:y.GAME.DIFFICULTY.MEDIUM,label:"متوسط"},{value:y.GAME.DIFFICULTY.HARD,label:"سخت"}]),this.typeSelector=new B([{value:y.GAME.TYPE.PRACTICE,label:"تمرین",description:"بدون فشار، می تونی تمرین کنی و بازی رو یاد بگیری"},{value:y.GAME.TYPE.CHALLENGE,label:"چالش",description:"توی چالش شما ده بار می تونید برای پیدا کردن الگو تلاش کنید"},{value:y.GAME.TYPE.COUNTDOWN,label:"شمارش معکوس",description:"توی یک دقیقه زمان، بدون محدودیت تعداد تلاش، قفل رو پیدا کن",default:!0}]);var i=function(){for(var t=window.location.pathname.split("/");;){var e=t.pop();if(void 0===e)return"EN";if(2===e.length)return e.toUpperCase()}}(),s=a.create("button","lang-button",i),r=new U;return s.onclick=function(){r.el.classList.toggle("disabled")},this.el=a.create("div","menu-layout view",[a.create("div","view-bloc menu-layout-instructions",[a.create("div","",[t,s]),e,r.el,n.el,this.btnStarlEl]),a.create("div","view-bloc menu-layout-form",[this.difficultyOption.el,this.typeSelector.el,this.typeHelpEl])]),this.el}},{key:"init",value:function(){this.typeSelector.init(),this.typeSelector.onSelect(this.typeChange.bind(this)),this.btnStarlEl.addEventListener("click",this.start.bind(this)),this.title.addEventListener("dblclick",this.triggerEasterEgg.bind(this))}},{key:"start",value:function(){this.onStart(this.typeSelector.getValue(),this.difficultyOption.getValue())}},{key:"typeChange",value:function(t){this.typeHelpEl.textContent=t.description}},{key:"triggerEasterEgg",value:function(){localStorage.getItem("isDeepBlack")?(localStorage.setItem("isDeepBlack",""),document.body.classList.remove("deepblack")):(localStorage.setItem("isDeepBlack","on"),document.body.classList.add("deepblack"))}}])&&H(e.prototype,n),i&&H(e,i),t}();n(11),window.addEventListener("load",(function(){window.setTimeout((function(){var t=document.getElementById("app-intro");t&&t.remove();var e=document.body,n=new M((function(){i.el.style.display="",n.el.style.display="none"}));e.appendChild(n.el);var i=new q((function(t,e){n.start(t,e),i.el.style.display="none",n.el.style.display=""}));i.init(),e.appendChild(i.el),n.el.style.display="none",window.scrollTo(0,0)}),2e3)}))}]);