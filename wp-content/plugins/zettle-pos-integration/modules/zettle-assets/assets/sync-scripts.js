/*! For license information please see sync-scripts.js.LICENSE.txt */
!function(){"use strict";function t(){var e={},r=!0,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(r=arguments[0],n++);for(var o=function(n){for(var o in n)n.hasOwnProperty(o)&&(r&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=t(e[o],n[o]):e[o]=n[o])};n<arguments.length;n++)o(arguments[n]);return e}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,s=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(){s=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),s=new x(n||[]);return o(a,"_invoke",{value:S(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function y(){}function v(){}function d(){}var g={};l(g,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(L([])));b&&b!==r&&n.call(b,a)&&(g=b);var w=d.prototype=y.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,r){function i(o,a,s,c){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==e(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){i(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=d,o(w,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(P.prototype),l(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new P(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))}}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}var h=function(){function e(r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._defaults={requestMethod:"GET",requestHeaders:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"},requestArguments:{types:{type:"array",active:!0,value:[]},executionTime:{type:"integer",active:!1,value:3},meta:{type:"object",active:!1,value:{}}},baseUrl:window.location.origin,preventDefault:!0,nonce:null,autoProceed:!0,selectors:{icon:".sync-progress-icon",cancelBtn:".sync-progress-action-cancel",backBtn:"button.btn-secondary",proceedBtn:"button.btn-primary",progressMessage:".sync-progress-message",progressStatus:".sync-progress-status"},messages:{error:"ERROR",confirmCancel:"CANCEL",finished:"FINISH",status:{prepare:"PREPARE",sync:"SYNC",cleanup:"CLEANUP"}},phases:["prepare","sync","cleanup"],jobTypes:{prepare:[],sync:[],cleanup:[]}},this.options=t(this._defaults,o,!0),this.jobsCompleted=0,this.el=r||null,this.url=n,this.currentPhase=0,this.init()}var n,o,a,c,f;return n=e,o=[{key:"init",value:function(){if(null===this.el)throw new Error("No valid Element was given.");if(null!==this.url&&null===this.options.nonce)throw new Error("No Nonce was given.");this.options.autoProceed&&this.setActionButtonVisibility(!1,this.options.selectors.proceedBtn),this.registerEvents()}},{key:"registerEvents",value:function(){var t=this;window.addEventListener("load",(function(){t.updateProgress(0,0),t.setActionButtonsState(!1),t.toggleSyncIconAnimation(),t.loop()})),this.addNavigationConfirmation();var e=this.el.querySelector(this.options.selectors.cancelBtn);e&&e.addEventListener("click",(function(e){if(!confirm(t.options.messages.confirmCancel))return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1;t.removeNavigationConfirmation()}))}},{key:"loop",value:(f=u(s().mark((function t(){var e,r,n,o,i,a,c,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.url,r=this.options.selectors,Object.keys(this.options.requestArguments).length>=1&&(e=this._buildRequestArguments(e)),t.prev=3,t.next=6,this.getJobs(e);case 6:if(n=t.sent,console.log("Queue response:",n),o=n.completed,i=n.remaining,a=n.meta,c=a.isFinished,this.updateProgress(o,i),!(!c||c&&this._advanceToNextPhase())){t.next=14;break}return t.next=14,this.loop();case 14:t.next=25;break;case 16:return t.prev=16,t.t0=t.catch(3),t.next=20,t.t0.data.json();case 20:u=t.sent,console.error(u),alert(this.options.messages.error),this.toggleSyncIconAnimation(),this.setActionButtonState(!0,r.backBtn);case 25:case"end":return t.stop()}}),t,this,[[3,16]])}))),function(){return f.apply(this,arguments)})},{key:"getJobs",value:(c=u(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,this._buildRequest());case 2:if(!(r=t.sent).ok){t.next=7;break}return t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 7:throw r;case 8:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"_currentPhase",value:function(){return this.options.phases[this.currentPhase]}},{key:"_advanceToNextPhase",value:function(){var t=this._currentPhase(),e=this.options.selectors;return t===this.options.phases.slice(-1).pop()?(this.setActionButtonState(!1,e.backBtn),this.setActionButtonState(!0,e.proceedBtn),this.toggleSyncIconAnimation(),this.setProgressMessage(this.options.messages.finished,""),this.removeNavigationConfirmation(),this.options.autoProceed&&this.submitActionButton(e.proceedBtn),!1):(this.currentPhase++,console.log("Switched from phase ".concat(t," to ").concat(this._currentPhase())),this.jobsCompleted=0,this.updateProgress(0,0),!0)}},{key:"updateProgress",value:function(t,e){this.jobsCompleted+=t;var r=this.jobsCompleted+e;this.setProgressMessage(this.options.messages.status[this._currentPhase()]||"...",r?"(".concat(this.jobsCompleted," / ").concat(r,")"):"...")}},{key:"setProgressMessage",value:function(t,e){var r=this.options.selectors,n=this.el.querySelector(r.progressMessage),o=this.el.querySelector(r.progressStatus);n.innerHTML=t,o.innerHTML=e}},{key:"getActionButton",value:function(t){return document.querySelector(".zettle-settings-onboarding-actions").querySelector(t)}},{key:"setActionButtonState",value:function(t,e){var r=this.getActionButton(e);null!==r?r.disabled=!t:console.log(e+" not found")}},{key:"setActionButtonsState",value:function(t){document.querySelector(".zettle-settings-onboarding-actions").querySelectorAll("button").forEach((function(e){return e.disabled=!t}))}},{key:"setActionButtonVisibility",value:function(t,e){var r=this.getActionButton(e);null!==r?r.style.display=t?"block":"none":console.log(e+" not found")}},{key:"submitActionButton",value:function(t){var e=this.getActionButton(t);null!==e?e.click():console.log(t+" not found")}},{key:"toggleSyncIconAnimation",value:function(){var t=this.el.querySelector(this.options.selectors.icon)||null;null!==t&&t.classList.toggle("animate")}},{key:"_buildRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.options.requestHeaders,r={"X-WP-Nonce":this.options.nonce};return{headers:e=i(i({},e),r),method:null!=t?t:this.options.requestMethod}}},{key:"_buildRequestArguments",value:function(e){for(var n=new URL(e,this.options.baseUrl),o=this._currentPhase(),i=this.options.jobTypes[o]||[],a=t(this.options.requestArguments,{types:{value:i},meta:{value:{phase:o}}}),s=function(){var t=r(u[c],2),e=t[0],o=t[1];if(o.active)switch(o.type){case"array":o.value.forEach((function(t){n.searchParams.append(e+"[]",t)}));break;case"object":for(var i=0,a=Object.entries(o.value);i<a.length;i++){var s=r(a[i],2),l=s[0],f=s[1];n.searchParams.append("".concat(e,"[").concat(l,"]"),f)}break;default:n.searchParams.append(e,o.value)}},c=0,u=Object.entries(a);c<u.length;c++)s();return n.toString()}},{key:"addNavigationConfirmation",value:function(){window.addEventListener("beforeunload",this.onBeforeUnload)}},{key:"removeNavigationConfirmation",value:function(){window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"onBeforeUnload",value:function(t){t.preventDefault(),t.returnValue=""}}],o&&l(n.prototype,o),a&&l(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();document.querySelectorAll('*[data-sync-progress="true"]').forEach((function(t){new h(t,zettleQueueProcessEndpoint.url,zettleQueueProcessEndpoint)}))}();