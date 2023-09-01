(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function rn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function c(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?rn(Object(a),!0).forEach(function(e){y(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):rn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wt(t)}function oa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function on(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function sa(t,n,a){return n&&on(t.prototype,n),a&&on(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Bt(t,n){return la(t)||ua(t,n)||In(t,n)||da()}function st(t){return fa(t)||ca(t)||In(t)||ma()}function fa(t){if(Array.isArray(t))return _t(t)}function la(t){if(Array.isArray(t))return t}function ca(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ua(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function In(t,n){if(t){if(typeof t=="string")return _t(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _t(t,n)}}function _t(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function ma(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function da(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sn=function(){},Gt={},Ln={},Tn=null,Mn={mark:sn,measure:sn};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(Ln=document),typeof MutationObserver<"u"&&(Tn=MutationObserver),typeof performance<"u"&&(Mn=performance)}catch{}var va=Gt.navigator||{},fn=va.userAgent,ln=fn===void 0?"":fn,F=Gt,b=Ln,cn=Tn,ct=Mn;F.document;var _=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",_n=~ln.indexOf("MSIE")||~ln.indexOf("Trident/"),ut,mt,dt,vt,gt,L="___FONT_AWESOME___",zt=16,zn="fa",Rn="svg-inline--fa",B="data-fa-i2svg",Rt="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",Xt="data-prefix",Vt="data-icon",un="fontawesome-i2svg",pa="async",ba=["HTML","HEAD","STYLE","SCRIPT"],Fn=function(){try{return!0}catch{return!1}}(),p="classic",h="sharp",qt=[p,h];function ft(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[p]}})}var at=ft((ut={},y(ut,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(ut,h,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ut)),et=ft((mt={},y(mt,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(mt,h,{solid:"fass",regular:"fasr",light:"fasl"}),mt)),rt=ft((dt={},y(dt,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(dt,h,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),dt)),ha=ft((vt={},y(vt,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(vt,h,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),vt)),ya=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Dn="fa-layers-text",ka=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wa=ft((gt={},y(gt,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(gt,h,{900:"fass",400:"fasr",300:"fasl"}),gt)),jn=[1,2,3,4,5,6,7,8,9,10],xa=jn.concat([11,12,13,14,15,16,17,18,19,20]),Aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},it=new Set;Object.keys(et[p]).map(it.add.bind(it));Object.keys(et[h]).map(it.add.bind(it));var Ea=[].concat(qt,st(it),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",U.GROUP,U.SWAP_OPACITY,U.PRIMARY,U.SECONDARY]).concat(jn.map(function(t){return"".concat(t,"x")})).concat(xa.map(function(t){return"w-".concat(t)})),Z=F.FontAwesomeConfig||{};function Sa(t){var n=b.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ca(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(b&&typeof b.querySelector=="function"){var Oa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Oa.forEach(function(t){var n=Bt(t,2),a=n[0],e=n[1],r=Ca(Sa(a));r!=null&&(Z[e]=r)})}var Yn={styleDefault:"solid",familyDefault:"classic",cssPrefix:zn,replacementClass:Rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var K=c(c({},Yn),Z);K.autoReplaceSvg||(K.observeMutations=!1);var m={};Object.keys(Yn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(a){K[t]=a,tt.forEach(function(e){return e(m)})},get:function(){return K[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){K.cssPrefix=n,tt.forEach(function(a){return a(m)})},get:function(){return K.cssPrefix}});F.FontAwesomeConfig=m;var tt=[];function Pa(t){return tt.push(t),function(){tt.splice(tt.indexOf(t),1)}}var R=zt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Na(t){if(!(!t||!_)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=b.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return b.head.insertBefore(n,e),t}}var Ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ot(){for(var t=12,n="";t-- >0;)n+=Ia[Math.random()*62|0];return n}function J(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function Kt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Hn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function La(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Hn(t[a]),'" ')},"").trim()}function Et(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function Jt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Ta(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ma(t){var n=t.transform,a=t.width,e=a===void 0?zt:a,r=t.height,i=r===void 0?zt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&_n?f+="translate(".concat(n.x/R-e/2,"em, ").concat(n.y/R-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):f+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),f+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var _a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $n(){var t=zn,n=Rn,a=m.cssPrefix,e=m.replacementClass,r=_a;if(a!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var mn=!1;function Nt(){m.autoAddCss&&!mn&&(Na($n()),mn=!0)}var za={mixout:function(){return{dom:{css:$n,insertCss:Nt}}},hooks:function(){return{beforeDOMElementCreation:function(){Nt()},beforeI2svg:function(){Nt()}}}},T=F||{};T[L]||(T[L]={});T[L].styles||(T[L].styles={});T[L].hooks||(T[L].hooks={});T[L].shims||(T[L].shims=[]);var O=T[L],Un=[],Ra=function t(){b.removeEventListener("DOMContentLoaded",t),xt=1,Un.map(function(n){return n()})},xt=!1;_&&(xt=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),xt||b.addEventListener("DOMContentLoaded",Ra));function Fa(t){_&&(xt?setTimeout(t,0):Un.push(t))}function lt(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Hn(t):"<".concat(n," ").concat(La(e),">").concat(i.map(lt).join(""),"</").concat(n,">")}function dn(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var Da=function(n,a){return function(e,r,i,o){return n.call(a,e,r,i,o)}},It=function(n,a,e,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Da(a,r):a,f,u,l;for(e===void 0?(f=1,l=n[i[0]]):(f=0,l=e);f<o;f++)u=i[f],l=s(l,n[u],u,n);return l};function ja(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=t.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Ft(t){var n=ja(t);return n.length===1?n[0].toString(16):null}function Ya(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function vn(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Dt(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=vn(n);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(t,vn(n)):O.styles[t]=c(c({},O.styles[t]||{}),i),t==="fas"&&Dt("fa",n)}var pt,bt,ht,X=O.styles,Ha=O.shims,$a=(pt={},y(pt,p,Object.values(rt[p])),y(pt,h,Object.values(rt[h])),pt),Qt=null,Wn={},Bn={},Gn={},Xn={},Vn={},Ua=(bt={},y(bt,p,Object.keys(at[p])),y(bt,h,Object.keys(at[h])),bt);function Wa(t){return~Ea.indexOf(t)}function Ba(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!Wa(r)?r:null}var qn=function(){var n=function(i){return It(X,function(o,s,f){return o[f]=It(s,i,{}),o},{})};Wn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Bn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Vn=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in X||m.autoFetchSvg,e=It(Ha,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Gn=e.names,Xn=e.unicodes,Qt=St(m.styleDefault,{family:m.familyDefault})};Pa(function(t){Qt=St(t.styleDefault,{family:m.familyDefault})});qn();function Zt(t,n){return(Wn[t]||{})[n]}function Ga(t,n){return(Bn[t]||{})[n]}function W(t,n){return(Vn[t]||{})[n]}function Kn(t){return Gn[t]||{prefix:null,iconName:null}}function Xa(t){var n=Xn[t],a=Zt("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return Qt}var tn=function(){return{prefix:null,iconName:null,rest:[]}};function St(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?p:a,r=at[e][t],i=et[e][t]||et[e][r],o=t in O.styles?t:null;return i||o||null}var gn=(ht={},y(ht,p,Object.keys(rt[p])),y(ht,h,Object.keys(rt[h])),ht);function Ct(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(n={},y(n,p,"".concat(m.cssPrefix,"-").concat(p)),y(n,h,"".concat(m.cssPrefix,"-").concat(h)),n),o=null,s=p;(t.includes(i[p])||t.some(function(u){return gn[p].includes(u)}))&&(s=p),(t.includes(i[h])||t.some(function(u){return gn[h].includes(u)}))&&(s=h);var f=t.reduce(function(u,l){var d=Ba(m.cssPrefix,l);if(X[l]?(l=$a[s].includes(l)?ha[s][l]:l,o=l,u.prefix=l):Ua[s].indexOf(l)>-1?(o=l,u.prefix=St(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[p]&&l!==i[h]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var v=o==="fa"?Kn(u.iconName):{},g=W(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||g||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},tn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===h&&(X.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=D()||"fas"),f}var Va=function(){function t(){oa(this,t),this.definitions={}}return sa(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),Dt(s,o[s]);var f=rt[p][s];f&&Dt(f,o[s]),qn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][f]=u}),a}}]),t}(),pn=[],V={},q={},qa=Object.keys(q);function Ka(t,n){var a=n.mixoutsTo;return pn=t,V={},Object.keys(q).forEach(function(e){qa.indexOf(e)===-1&&delete q[e]}),pn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),wt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){V[o]||(V[o]=[]),V[o].push(i[o])})}e.provides&&e.provides(q)}),a}function jt(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=V[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function G(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=V[t]||[];r.forEach(function(i){i.apply(null,a)})}function M(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,n):void 0}function Yt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||D();if(n)return n=W(a,n)||n,dn(Jn.definitions,a,n)||dn(O.styles,a,n)}var Jn=new Va,Ja=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},Qa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(G("beforeI2svg",n),M("pseudoElements2svg",n),M("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Fa(function(){te({autoReplaceSvgRoot:a}),G("watch",n)})}},Za={icon:function(n){if(n===null)return null;if(wt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=St(n[0]);return{prefix:e,iconName:W(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(ya))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||D(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=D();return{prefix:i,iconName:W(i,n)||n}}}},E={noAuto:Ja,config:m,dom:Qa,parse:Za,library:Jn,findIconDefinition:Yt,toHtml:lt},te=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?b:a;(Object.keys(O.styles).length>0||m.autoFetchSvg)&&_&&m.autoReplaceSvg&&E.dom.i2svg({node:e})};function Ot(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return lt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(_){var e=b.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ne(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Jt(o)&&a.found&&!e.found){var s=a.width,f=a.height,u={x:s/f/2,y:.5};r.style=Et(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ae(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:e}]}]}function nn(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,v=t.watchable,g=v===void 0?!1:v,w=e.found?e:a,S=w.width,C=w.height,P=r==="fak",k=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),x={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(C)})},N=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/C*16*.0625,"em")}:{};g&&(x.attributes[B]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||ot())},children:[f]}),delete x.attributes.title);var A=c(c({},x),{},{prefix:r,iconName:i,main:a,mask:e,maskId:u,transform:o,symbol:s,styles:c(c({},N),d.styles)}),Y=e.found&&a.found?M("generateAbstractMask",A)||{children:[],attributes:{}}:M("generateAbstractIcon",A)||{children:[],attributes:{}},H=Y.children,Pt=Y.attributes;return A.children=H,A.attributes=Pt,s?ae(A):ne(A)}function bn(t){var n=t.content,a=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[B]="");var l=c({},o.styles);Jt(r)&&(l.transform=Ma({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var d=Et(l);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ee(t){var n=t.content,a=t.title,e=t.extra,r=c(c(c({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=Et(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Lt=O.styles;function Ht(t){var n=t[0],a=t[1],e=t.slice(4),r=Bt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(U.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(U.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(U.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:o}}var re={found:!1,width:512,height:512};function ie(t,n){!Fn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function $t(t,n){var a=n;return n==="fa"&&m.styleDefault!==null&&(n=D()),new Promise(function(e,r){if(M("missingIconAbstract"),a==="fa"){var i=Kn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Lt[n]&&Lt[n][t]){var o=Lt[n][t];return e(Ht(o))}ie(t,n),e(c(c({},re),{},{icon:m.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var hn=function(){},Ut=m.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:hn,measure:hn},Q='FA "6.4.2"',oe=function(n){return Ut.mark("".concat(Q," ").concat(n," begins")),function(){return Qn(n)}},Qn=function(n){Ut.mark("".concat(Q," ").concat(n," ends")),Ut.measure("".concat(Q," ").concat(n),"".concat(Q," ").concat(n," begins"),"".concat(Q," ").concat(n," ends"))},an={begin:oe,end:Qn},yt=function(){};function yn(t){var n=t.getAttribute?t.getAttribute(B):null;return typeof n=="string"}function se(t){var n=t.getAttribute?t.getAttribute(Xt):null,a=t.getAttribute?t.getAttribute(Vt):null;return n&&a}function fe(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function le(){if(m.autoReplaceSvg===!0)return kt.replace;var t=kt[m.autoReplaceSvg];return t||kt.replace}function ce(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function ue(t){return b.createElement(t)}function Zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?ce:ue:a;if(typeof t=="string")return b.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Zn(o,{ceFn:e}))}),r}function me(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var kt={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(Zn(r),a)}),a.getAttribute(B)===null&&m.keepOriginalSource){var e=b.createComment(me(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~Kt(a).indexOf(m.replacementClass))return kt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return lt(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function kn(t){t()}function ta(t,n){var a=typeof n=="function"?n:yt;if(t.length===0)a();else{var e=kn;m.mutateApproach===pa&&(e=F.requestAnimationFrame||kn),e(function(){var r=le(),i=an.begin("mutate");t.map(r),i(),a()})}}var en=!1;function na(){en=!0}function Wt(){en=!1}var At=null;function wn(t){if(cn&&m.observeMutations){var n=t.treeCallback,a=n===void 0?yt:n,e=t.nodeCallback,r=e===void 0?yt:e,i=t.pseudoElementsCallback,o=i===void 0?yt:i,s=t.observeMutationsRoot,f=s===void 0?b:s;At=new cn(function(u){if(!en){var l=D();J(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!yn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&yn(d.target)&&~Aa.indexOf(d.attributeName))if(d.attributeName==="class"&&se(d.target)){var v=Ct(Kt(d.target)),g=v.prefix,w=v.iconName;d.target.setAttribute(Xt,g||l),w&&d.target.setAttribute(Vt,w)}else fe(d.target)&&r(d.target)})}}),_&&At.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function de(){At&&At.disconnect()}function ve(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function ge(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Ct(Kt(t));return r.prefix||(r.prefix=D()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ga(r.prefix,t.innerText)||Zt(r.prefix,Ft(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function pe(t){var n=J(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return m.autoA11y&&(a?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||ot()):(n["aria-hidden"]="true",n.focusable="false")),n}function be(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ge(t),e=a.iconName,r=a.prefix,i=a.rest,o=pe(t),s=jt("parseNodeAttributes",{},t),f=n.styleParser?ve(t):[];return c({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var he=O.styles;function aa(t){var n=m.autoReplaceSvg==="nest"?xn(t,{styleParser:!1}):xn(t);return~n.extra.classes.indexOf(Dn)?M("generateLayersText",t,n):M("generateSvgReplacementMutation",t,n)}var j=new Set;qt.map(function(t){j.add("fa-".concat(t))});Object.keys(at[p]).map(j.add.bind(j));Object.keys(at[h]).map(j.add.bind(j));j=st(j);function An(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=b.documentElement.classList,e=function(d){return a.add("".concat(un,"-").concat(d))},r=function(d){return a.remove("".concat(un,"-").concat(d))},i=m.autoFetchSvg?j:qt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(he));i.includes("fa")||i.push("fa");var o=[".".concat(Dn,":not([").concat(B,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=an.begin("onTree"),u=s.reduce(function(l,d){try{var v=aa(d);v&&l.push(v)}catch(g){Fn||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(v){ta(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),d(v)})})}function ye(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aa(t).then(function(a){a&&ta([a],n)})}function ke(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Yt(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Yt(r||{})),t(e,c(c({},a),{},{mask:r}))}}var we=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?I:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,u=a.maskId,l=u===void 0?null:u,d=a.title,v=d===void 0?null:d,g=a.titleId,w=g===void 0?null:g,S=a.classes,C=S===void 0?[]:S,P=a.attributes,k=P===void 0?{}:P,x=a.styles,N=x===void 0?{}:x;if(n){var A=n.prefix,Y=n.iconName,H=n.icon;return Ot(c({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:a}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||ot()):(k["aria-hidden"]="true",k.focusable="false")),nn({icons:{main:Ht(H),mask:f?Ht(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Y,transform:c(c({},I),r),symbol:o,title:v,maskId:l,titleId:w,extra:{attributes:k,styles:N,classes:C}})})}},xe={mixout:function(){return{icon:ke(we)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=An,a.nodeCallback=ye,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?b:e,i=a.callback,o=i===void 0?function(){}:i;return An(r,o)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,l=e.mask,d=e.maskId,v=e.extra;return new Promise(function(g,w){Promise.all([$t(r,s),l.iconName?$t(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var C=Bt(S,2),P=C[0],k=C[1];g([a,nn({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Et(s);f.length>0&&(r.style=f);var u;return Jt(o)&&(u=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},Ae={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Ot({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(st(i)).join(" ")},children:o}]})}}}},Ee={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,l=e.styles,d=l===void 0?{}:l;return Ot({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),ee({content:a.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(st(s))}})})}}}},Se={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?I:r,o=e.title,s=o===void 0?null:o,f=e.classes,u=f===void 0?[]:f,l=e.attributes,d=l===void 0?{}:l,v=e.styles,g=v===void 0?{}:v;return Ot({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),bn({content:a,transform:c(c({},I),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(st(u))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(_n){var u=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,bn({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ce=new RegExp('"',"ug"),En=[1105920,1112319];function Oe(t){var n=t.replace(Ce,""),a=Ya(n,0),e=a>=En[0]&&a<=En[1],r=n.length===2?n[0]===n[1]:!1;return{value:Ft(r?n[0]:n),isSecondary:e||r}}function Sn(t,n){var a="".concat(ga).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var i=J(t.children),o=i.filter(function(H){return H.getAttribute(Rt)===n})[0],s=F.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ka),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?h:p,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?et[v][f[2].toLowerCase()]:wa[v][u],w=Oe(d),S=w.value,C=w.isSecondary,P=f[0].startsWith("FontAwesome"),k=Zt(g,S),x=k;if(P){var N=Xa(S);N.iconName&&N.prefix&&(k=N.iconName,g=N.prefix)}if(k&&!C&&(!o||o.getAttribute(Xt)!==g||o.getAttribute(Vt)!==x)){t.setAttribute(a,x),o&&t.removeChild(o);var A=be(),Y=A.extra;Y.attributes[Rt]=n,$t(k,g).then(function(H){var Pt=nn(c(c({},A),{},{icons:{main:H,mask:tn()},prefix:g,iconName:x,extra:Y,watchable:!0})),z=b.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=Pt.map(function(ia){return lt(ia)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Pe(t){return Promise.all([Sn(t,"::before"),Sn(t,"::after")])}function Ne(t){return t.parentNode!==document.head&&!~ba.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Cn(t){if(_)return new Promise(function(n,a){var e=J(t.querySelectorAll("*")).filter(Ne).map(Pe),r=an.begin("searchPseudoElements");na(),Promise.all(e).then(function(){r(),Wt(),n()}).catch(function(){r(),Wt(),a()})})}var Ie={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Cn,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?b:e;m.searchPseudoElements&&Cn(r)}}},On=!1,Le={mixout:function(){return{dom:{unwatch:function(){na(),On=!0}}}},hooks:function(){return{bootstrap:function(){wn(jt("mutationObserverCallbacks",{}))},noAuto:function(){de()},watch:function(a){var e=a.observeMutationsRoot;On?Wt():wn(jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Pn=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Te={mixout:function(){return{parse:{transform:function(a){return Pn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=Pn(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:v};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c(c({},e.icon.attributes),g.path)}]}]}}}},Tt={x:0,y:0,width:"100%",height:"100%"};function Nn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Me(t){return t.tag==="g"?t.children:[t]}var _e={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):tn();return i.prefix||(i.prefix=D()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,u=i.width,l=i.icon,d=o.width,v=o.icon,g=Ta({transform:f,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:c(c({},Tt),{},{fill:"white"})},S=l.children?{children:l.children.map(Nn)}:{},C={tag:"g",attributes:c({},g.inner),children:[Nn(c({tag:l.tag,attributes:c(c({},l.attributes),g.path)},S))]},P={tag:"g",attributes:c({},g.outer),children:[C]},k="mask-".concat(s||ot()),x="clip-".concat(s||ot()),N={tag:"mask",attributes:c(c({},Tt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,P]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Me(v)},N]};return e.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},Tt)}),{children:e,attributes:r}}}},ze={provides:function(n){var a=!1;F.matchMedia&&(a=F.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Re={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Fe=[za,xe,Ae,Ee,Se,Ie,Le,Te,_e,ze,Re];Ka(Fe,{mixoutsTo:E});E.noAuto;E.config;var De=E.library,je=E.dom;E.parse;E.findIconDefinition;E.toHtml;E.icon;E.layer;E.text;E.counter;var Ye={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},He=Ye,$e={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},Ue={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},We={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},Be={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Ge={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Xe=Ge,Ve={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},qe=Ve,Ke={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Je={prefix:"fas",iconName:"user-large",icon:[512,512,["user-alt"],"f406","M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"]},Qe=Je;De.add(Qe,$e,Xe,Ke,qe,Be,Ue,We,He);je.watch();const $=document.getElementById("email"),nt=document.getElementById("password"),ea=document.getElementById("email-status"),Mt=document.getElementById("toggle-password"),Ze=document.getElementById("login-form"),tr=document.getElementById("submit-button"),ra=(t,n)=>{n.classList.toggle("text-customGreen",t),n.classList.toggle("text-customRed",!t),n.querySelector("svg").classList.toggle("fa-check",t),n.querySelector("svg").classList.toggle("fa-times",!t)};$.addEventListener("input",()=>{const t=$.value.length,n=$.checkValidity();$.classList.toggle("non-empty",t>0),ra(t>0&&n,ea),$.classList.toggle("verification-failed",!1)});nt.addEventListener("input",()=>{const t=nt.value.length;nt.classList.toggle("non-empty",t>0)});Mt.addEventListener("click",()=>{const t=nt.getAttribute("type");nt.setAttribute("type",t==="password"?"text":"password"),Mt.querySelector("svg").classList.toggle("fa-eye-slash"),Mt.querySelector("svg").classList.toggle("fa-eye")});Ze.addEventListener("submit",t=>{t.preventDefault();const n=$.value;fetch("https://us-central1-email-validation-2069.cloudfunctions.net/validateEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then(r=>{if(!r.ok)throw new Error("Email validation failed");return r.json()}).then(r=>{}).catch(r=>{ra(!1,ea),$.classList.toggle("verification-failed",!0),tr.textContent="Retry"})});
