/*! For license information please see admin-scripts.js.LICENSE.txt */
!function(){"use strict";function t(){var e={},r=!0,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(r=arguments[0],n++);for(var o=function(n){for(var o in n)n.hasOwnProperty(o)&&(r&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=t(e[o],n[o]):e[o]=n[o])};n<arguments.length;n++)o(arguments[n]);return e}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(i,"string"),"symbol"===e(a)?a:String(a)),o)}var i,a}String.prototype.format=function(){return Array.prototype.slice.call(arguments).reduce((function(t,e){return t.replace(/%s/,e)}),this)};var i=function(){function e(r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._defaults={activeCls:"active",disabledCls:"disabled",triggerElSelector:".form-choice-selector",radioButtonSelector:'input[type="radio"]'},this._defaults.triggerElSelector="%s:not(.%s)".format(this._defaults.triggerElSelector,this._defaults.disabledCls),this.options=t(this._defaults,n),this.el=r||null,null!==this.el&&this.init()}var n,i,a;return n=e,i=[{key:"init",value:function(){this.registerEvents()}},{key:"registerEvents",value:function(){var t=this,e=this.el.querySelectorAll(this.options.triggerElSelector);window.addEventListener("load",(function(){return t.onLoad(e)})),e.forEach((function(e){e.addEventListener("click",(function(r){t.onClick(r,e)}))}))}},{key:"onLoad",value:function(t){var e=this,n=r(t).some((function(t){return t.classList.contains(e.options.activeCls)}));t.length>1&&!n&&this.setActiveFromSelect(t),t.forEach((function(t){null!==(t.querySelector('input[type="radio"]:checked')||null)&&t.classList.add(e.options.activeCls)}))}},{key:"onClick",value:function(t,e){e.classList.contains(this.options.activeCls)||e.classList.contains(this.options.disabledCls)||this.triggerEl(e)}},{key:"triggerEl",value:function(t){var e=this;this.el.querySelectorAll(this.options.triggerElSelector).forEach((function(t){t.classList.contains(e.options.activeCls)&&t.classList.remove(e.options.activeCls)})),t.classList.add(this.options.activeCls),this.toggleRadioInput(t)}},{key:"toggleRadioInput",value:function(t){var e=this;this.el.querySelectorAll(this.options.triggerElSelector).forEach((function(t){t.querySelectorAll(e.options.radioButtonSelector).forEach((function(t){t.removeAttribute("checked"),t.checked=!1}))}));var r=t.querySelector(this.options.radioButtonSelector)||null;null!==r&&(r.checked=!0,r.setAttribute("checked",""))}},{key:"setActiveFromSelect",value:function(t){var e=this,r=t.item(0).querySelector("input"),n=document.querySelector('select[name="'+r.name+'"]')||null;if(null!==n){var o=n.options[n.options.selectedIndex];t.forEach((function(t){var r=t.querySelector(e.options.radioButtonSelector)||null;null!==r&&r.value===o.value&&(r.checked=!0,r.setAttribute("checked",""))}))}}},{key:"setElementActive",value:function(t){var e=t.querySelector(this.options.radioButtonSelector)||null;null!==e&&(e.checked=!0,e.setAttribute("checked",""))}}],i&&o(n.prototype,i),a&&o(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===a(i)?i:String(i)),n)}var o,i}var l=function(){function e(r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._defaults={url:null,target:"_blank",features:{height:900,width:900,toolbar:0,location:0,menubar:0},preventDefault:!1},this.options=t(this._defaults,n),this.el=r||null,null!==this.el&&this.init()}var r,n,o;return r=e,n=[{key:"init",value:function(){this.registerEvents()}},{key:"registerEvents",value:function(){var t=this;this.el.addEventListener("click",(function(e){return t.onClick(e,t.el)}))}},{key:"onClick",value:function(t,e){this.el instanceof HTMLAnchorElement&&t.preventDefault(),this.options.preventDefault&&t.preventDefault(),window.open(this.options.url,this.options.target,this._buildWindowFeatures())}},{key:"_buildWindowFeatures",value:function(){var t=this,e=Object.keys(this.options.features),r="",n=",";return e.forEach((function(o,i){var a=t.options.features[o];i+1===e.length&&(n=""),r=r.concat(o+"="+a)+n})),r}}],n&&c(r.prototype,n),o&&c(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function u(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:k(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function v(){}function p(){}function y(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=y.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(S.prototype),l(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),l(w,c,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}function y(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=m(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function m(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===f(i)?i:String(i)),n)}var o,i}var w=function(){function e(r,n,o){var i=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._defaults={proceedActionButtonSelector:"button.btn-primary[name='save']",errorLabel:{class:"validation-error",position:{type:e.POSITION_AFTER_INPUT_FIELD}},baseUrl:window.location.origin},this.options=t(this._defaults,o),this.el=r,this.el){this.rules=n,this.isValid=null;var a=this.getActionButton(this.options.proceedActionButtonSelector);a?a.addEventListener("click",(function(t){return i.onClick(t,i.el)})):console.log(this.options.proceedActionButtonSelector+" not found")}}var r,n,o,i,a;return r=e,n=[{key:"onClick",value:function(t,e){var r=this;this.isValid||(t.preventDefault(),this.validate().then((function(t){if(!t.length)return r.isValid=!0,void r.submitActionButton(r.options.proceedActionButtonSelector);r.isValid=!1,r.removeErrorLabels(r.el);var e,n=y(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;r.addErrorLabel(o.element,o.rule.parameters.message)}}catch(t){n.e(t)}finally{n.f()}t[0].element.focus()})).catch((function(t){console.error(t),r.isValid=!0,r.submitActionButton(r.options.proceedActionButtonSelector)})))}},{key:"validate",value:(a=p(h().mark((function t(){var e,r,n,o,i,a,c,l,s,f,v,p=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h=Object.entries(this.rules).map((function(t){var e=d(t,2),r=e[0],n=e[1];return p.getValidatableElements(r).map((function(t){return{element:t,rules:n}}))})),m=void 0,e=(m=[]).concat.apply(m,u(h)),r=[],n=function(t,e){return{element:t,rule:e}},o=function(t){return{id:t[0],parameters:t[1]}},i=y(e),t.prev=5,i.s();case 7:if((a=i.n()).done){t.next=36;break}c=a.value,l=this.getElementValue(c.element),s=y(Object.entries(c.rules).map(o)),t.prev=11,s.s();case 13:if((f=s.n()).done){t.next=26;break}if("required"!==(v=f.value).id){t.next=19;break}if(this.validateRequired(l)){t.next=19;break}return r.push(n(c.element,v)),t.abrupt("break",26);case 19:if("remote"!==v.id){t.next=24;break}return t.next=22,this.validateRemote(l,v.parameters);case 22:if(t.sent){t.next=24;break}r.push(n(c.element,v));case 24:t.next=13;break;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(11),s.e(t.t0);case 31:return t.prev=31,s.f(),t.finish(31);case 34:t.next=7;break;case 36:t.next=41;break;case 38:t.prev=38,t.t1=t.catch(5),i.e(t.t1);case 41:return t.prev=41,i.f(),t.finish(41);case 44:return t.abrupt("return",r);case 45:case"end":return t.stop()}var h,m}),t,this,[[5,38,41,44],[11,28,31,34]])}))),function(){return a.apply(this,arguments)})},{key:"getValidatableElements",value:function(t){return Array.from(this.el.querySelectorAll('*[name="'.concat(t,'"]'))).filter(this.isElementVisible)}},{key:"isElementVisible",value:function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}},{key:"getElementValue",value:function(t){return t.value}},{key:"validateRequired",value:function(t){return Boolean(t)}},{key:"validateRemote",value:(i=p(h().mark((function e(r,n){var o,i,a,c,l;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t({url:null,valueParamName:"value",requestMethod:"GET",requestHeaders:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"},resultPropertyName:"result",errorPropertyName:"error",skippedErrors:[],nonce:null},n),o=n.requestHeaders,n.nonce&&(o["X-WP-Nonce"]=n.nonce),(i=new URL(n.url,this.options.baseUrl)).searchParams.append(n.valueParamName,r),e.next=7,fetch(i.toString(),{headers:o,method:n.requestMethod});case 7:if((a=e.sent).ok){e.next=10;break}throw new Error("Status Code: ".concat(a.status," Message: ").concat(a.statusText));case 10:return e.next=12,a.json();case 12:return c=e.sent,l=Boolean(c[n.resultPropertyName]),e.abrupt("return",l||n.skippedErrors.includes(c[n.errorPropertyName]));case 15:case"end":return e.stop()}}),e,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"addErrorLabel",value:function(t,r){var n='<p class="'.concat(this.options.errorLabel.class,'">').concat(r,"</p>");switch(this.options.errorLabel.position.type){case e.POSITION_IN_CLOSEST_SELECTOR:var o=t.closest(this.options.errorLabel.position.selector);if(!o)return void console.error("".concat(this.options.errorLabel.position.selector," not found"));o.insertAdjacentHTML("beforeend",n);break;default:console.warn("Unknown position type: ".concat(this.options.errorLabel.position.type));case e.POSITION_AFTER_INPUT_FIELD:t.insertAdjacentHTML("afterend",n)}}},{key:"removeErrorLabels",value:function(t){var e,r=y(t.querySelectorAll(".".concat(this.options.errorLabel.class)));try{for(r.s();!(e=r.n()).done;)e.value.remove()}catch(t){r.e(t)}finally{r.f()}}},{key:"getActionButton",value:function(t){return this.el.querySelector(t)}},{key:"submitActionButton",value:function(t){var e=this.getActionButton(t);e?e.click():console.log(t+" not found")}}],o=[{key:"POSITION_AFTER_INPUT_FIELD",get:function(){return"after_input_field"}},{key:"POSITION_IN_CLOSEST_SELECTOR",get:function(){return"closest"}}],n&&b(r.prototype,n),o&&b(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var L,x,A,O,j,_=(L=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],x=function(){function t(e){var r=e.targetModal,n=e.triggers,o=void 0===n?[]:n,i=e.onShow,a=void 0===i?function(){}:i,c=e.onClose,l=void 0===c?function(){}:c,u=e.openTrigger,s=void 0===u?"data-micromodal-trigger":u,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,d=e.openClass,v=void 0===d?"is-open":d,p=e.disableScroll,y=void 0!==p&&p,m=e.disableFocus,g=void 0!==m&&m,b=e.awaitCloseAnimation,w=void 0!==b&&b,E=e.awaitOpenAnimation,k=void 0!==E&&E,L=e.debugMode,x=void 0!==L&&L;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(r),this.config={debugMode:x,disableScroll:y,openTrigger:s,closeTrigger:h,openClass:v,onShow:a,onClose:l,awaitCloseAnimation:w,awaitOpenAnimation:k,disableFocus:g},o.length>0&&this.registerTriggers.apply(this,S(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var e,r;return e=t,(r=[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){return t.showModal(e)}))}))}},{key:"showModal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){this.modal.addEventListener("animationend",(function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()}),!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,t),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",(function t(){e.classList.remove(r),e.removeEventListener("animationend",t,!1)}),!1)}else e.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:""});break;case"disable":Object.assign(e.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){(t.target.hasAttribute(this.config.closeTrigger)||t.target.parentNode.hasAttribute(this.config.closeTrigger))&&(t.preventDefault(),t.stopPropagation(),this.closeModal(t))}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.retainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(L);return Array.apply(void 0,S(t))}},{key:"setFocusToFirstNode",value:function(){var t=this;if(!this.config.disableFocus){var e=this.getFocusableNodes();if(0!==e.length){var r=e.filter((function(e){return!e.hasAttribute(t.config.closeTrigger)}));r.length>0&&r[0].focus(),0===r.length&&e[0].focus()}}}},{key:"retainFocus",value:function(t){var e=this.getFocusableNodes();if(0!==e.length)if(e=e.filter((function(t){return null!==t.offsetParent})),this.modal.contains(document.activeElement)){var r=e.indexOf(document.activeElement);t.shiftKey&&0===r&&(e[e.length-1].focus(),t.preventDefault()),!t.shiftKey&&e.length>0&&r===e.length-1&&(e[0].focus(),t.preventDefault())}else e[0].focus()}}])&&E(e.prototype,r),t}(),A=null,O=function(t){if(!document.getElementById(t))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(t,'"></div>')),!1},j=function(t,e){if(function(t){t.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(t),!e)return!0;for(var r in e)O(r);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),r=S(document.querySelectorAll("[".concat(e.openTrigger,"]"))),n=function(t,e){var r=[];return t.forEach((function(t){var n=t.attributes[e].value;void 0===r[n]&&(r[n]=[]),r[n].push(t)})),r}(r,e.openTrigger);if(!0!==e.debugMode||!1!==j(r,n))for(var o in n){var i=n[o];e.targetModal=o,e.triggers=S(i),A=new x(e)}},show:function(t,e){var r=e||{};r.targetModal=t,!0===r.debugMode&&!1===O(t)||(A&&A.removeEventListeners(),(A=new x(r)).showModal())},close:function(t){t?A.closeModalById(t):A.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=_);var T=_;function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(){P=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new x(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function d(){}function v(){}var p={};l(p,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(A([])));m&&m!==e&&r.call(m,i)&&(p=m);var g=v.prototype=h.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==C(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),l(g,c,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function I(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function N(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){I(i,n,o,a,c,"next",t)}function c(t){I(i,n,o,a,c,"throw",t)}a(void 0)}))}}document.querySelectorAll(".form-choice-selection").forEach((function(t){new i(t)}));var F=document.querySelector(".zettle-settings-onboarding");F&&new w(F,zettleOnboardingValidationRules,{errorLabel:{position:{type:w.POSITION_IN_CLOSEST_SELECTOR,selector:".zettle-settings-onboarding-fields"}}});var M=document.querySelectorAll('*[data-popup="true"]');M.length>=1&&M.forEach((function(t){new l(t,{url:zettleAPIKeyCreation.url})})),document.querySelectorAll('.zettle-settings-onboarding-actions [type="submit"]').forEach((function(t){t.addEventListener("click",(function(){window.onbeforeunload=null}))})),T.init();var q=document.querySelector("#".concat(zettleDisconnection.dialogId,' button[name="delete"]'));q&&q.addEventListener("click",N(P().mark((function t(){var e,r,n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(zettleDisconnection.url,{method:"post",headers:{"X-WP-Nonce":zettleDisconnection.nonce}});case 2:if(e=t.sent,r=function(t){var e="Disconnect request error: ".concat(t,". Check WC logs for more details.");console.error(e),alert(e)},e.ok){t.next=8;break}r(e.status),t.next=12;break;case 8:return t.next=10,e.json();case 10:(n=t.sent).result.success||r(n.result.error);case 12:window.location.reload();case 13:case"end":return t.stop()}}),t)}))))}();