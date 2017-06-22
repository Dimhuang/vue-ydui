/*! vue-ydui v0.6.9 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var o=r(46),a=n(o);t.Badge=a.default},1:function(e,t){e.exports=function(e,t,r,n){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var u=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}})}return{esModule:o,exports:a,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},3:function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(a(r.parts[o]));c[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(g)return h;n.parentNode.removeChild(n)}if(v){var a=p++;n=l||(l=o()),t=i.bind(null,n,a,!1),r=i.bind(null,n,a,!0)}else n=o(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,d=r(4),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,g=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){g=r;var o=d(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,r.push(s)}t?(o=d(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],d=a[3],c={id:e+":"+o,css:s,media:u,sourceMap:d};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),n=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||n.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},a=function(e,t){var r=e==window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-n,a=o+t.offsetHeight;return o>=0&&o<r||a>0&&a<=r},i=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){i(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(i(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(r,n,o){if(r!==n){var a=r+o>n?n:r+o;r>n&&(a=r-o<n?n:r-o),e===window?window.scrollTo(a,a):e.scrollTop=a,window.requestAnimationFrame(function(){return t(a,n,o)})}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var a=Math.abs(r-n),i=Math.ceil(a/o*50);t(r,n,i)};t.pageScroll=r,t.isColor=n,t.getScrollview=o,t.checkInview=a,t.addClass=s,t.removeClass=u,t.scrollTop=d},25:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.badge{color:#fff;font-size:12px;position:relative;display:inline-block;border-radius:1000px;line-height:1;padding:3px 6px;white-space:nowrap;background-color:#d0d0d0}.badge-radius{border-radius:2px}.badge-primary{background-color:#04be02;color:#fff}.badge-danger{background-color:#ef4f4f;color:#fff}.badge-warning{background-color:#ffb400;color:#fff}.badge-hollow{background-color:#fbfbfb;color:#b2b2b2}.badge-hollow:after{content:"";width:200%;height:200%;border:1px solid #b2b2b2;position:absolute;top:0;left:0;border-radius:50px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5)}.badge-radius:after{border-radius:2px}',""])},46:function(e,t,r){r(161);var n=r(1)(r(183),r(117),null,null);e.exports=n.exports},117:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"badge",class:e.typesClass,style:{backgroundColor:e.bgcolor,color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},161:function(e,t,r){var n=r(25);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);r(3)("f8205e70",n,!0)},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);t.default={name:"yd-badge",props:{type:{validator:function(e){return["primary","danger","warning","hollow"].indexOf(e)>-1}},shape:{validator:function(e){return["circle","square"].indexOf(e)>-1}},color:{validator:function(e){return!e||(0,n.isColor)(e)}},bgcolor:{validator:function(e){return!e||(0,n.isColor)(e)}}},computed:{typesClass:function(){return this.bgcolor?"square"==this.shape?" badge-radius":"":(this.type?"badge-"+this.type:"")+("square"==this.shape?" badge-radius":"")}}}}})});