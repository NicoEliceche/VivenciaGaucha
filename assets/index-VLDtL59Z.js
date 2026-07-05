(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},no={},Lu={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),_f=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),jf=Symbol.for("react.provider"),Pf=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),If=Symbol.for("react.lazy"),os=Symbol.iterator;function Mf(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Ru={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Iu}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fu(){}Fu.prototype=Un.prototype;function la(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Iu}var aa=la.prototype=new Fu;aa.constructor=la;Mu(aa,Un.prototype);aa.isPureReactComponent=!0;var ls=Array.isArray,Ou=Object.prototype.hasOwnProperty,sa={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Ou.call(t,r)&&!Au.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ar,type:e,key:o,ref:l,props:i,_owner:sa.current}}function Rf(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Ff(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var as=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ff(""+e.key):t.toString(36)}function pi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case _f:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Co(l,0):r,ls(i)?(n="",e!=null&&(n=e.replace(as,"$&/")+"/"),pi(i,t,n,"",function(c){return c})):i!=null&&(ua(i)&&(i=Rf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(as,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ls(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Co(o,a);l+=pi(o,t,n,s,i)}else if(s=Mf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Co(o,a++),l+=pi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function br(e,t,n){if(e==null)return e;var r=[],i=0;return pi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},hi={transition:null},Af={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:hi,ReactCurrentOwner:sa};function Uu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Un;M.Fragment=Cf;M.Profiler=zf;M.PureComponent=la;M.StrictMode=Ef;M.Suspense=Tf;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;M.act=Uu;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=sa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ou.call(t,s)&&!Au.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ar,type:e.type,key:i,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jf,_context:e},e.Consumer=e};M.createElement=Du;M.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Nf,render:e}};M.isValidElement=ua;M.lazy=function(e){return{$$typeof:If,_payload:{_status:-1,_result:e},_init:Of}};M.memo=function(e,t){return{$$typeof:Lf,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};M.unstable_act=Uu;M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.3.1";Lu.exports=M;var ht=Lu.exports;const he=Sf(ht);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=ht,Uf=Symbol.for("react.element"),Wf=Symbol.for("react.fragment"),Bf=Object.prototype.hasOwnProperty,Hf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bf.call(t,r)&&!Vf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Uf,type:e,key:o,ref:l,props:i,_owner:Hf.current}}no.Fragment=Wf;no.jsx=Wu;no.jsxs=Wu;Tu.exports=no;var g=Tu.exports,il={},Bu={exports:{}},Te={},Hu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,P){var N=z.length;z.push(P);e:for(;0<N;){var U=N-1>>>1,F=z[U];if(0<i(F,P))z[U]=P,z[N]=F,N=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var P=z[0],N=z.pop();if(N!==P){z[0]=N;e:for(var U=0,F=z.length,re=F>>>1;U<re;){var X=2*(U+1)-1,ee=z[X],Ee=X+1,Ie=z[Ee];if(0>i(ee,N))Ee<F&&0>i(Ie,ee)?(z[U]=Ie,z[Ee]=N,U=Ee):(z[U]=ee,z[X]=N,U=X);else if(Ee<F&&0>i(Ie,N))z[U]=Ie,z[Ee]=N,U=Ee;else break e}}return P}function i(z,P){var N=z.sortIndex-P.sortIndex;return N!==0?N:z.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],p=1,h=null,m=3,x=!1,y=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=z)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function v(z){if($=!1,f(z),!y)if(n(s)!==null)y=!0,gt(_);else{var P=n(c);P!==null&&Bt(v,P.startTime-z)}}function _(z,P){y=!1,$&&($=!1,d(C),C=-1),x=!0;var N=m;try{for(f(P),h=n(s);h!==null&&(!(h.expirationTime>P)||z&&!b());){var U=h.callback;if(typeof U=="function"){h.callback=null,m=h.priorityLevel;var F=U(h.expirationTime<=P);P=e.unstable_now(),typeof F=="function"?h.callback=F:h===n(s)&&r(s),f(P)}else r(s);h=n(s)}if(h!==null)var re=!0;else{var X=n(c);X!==null&&Bt(v,X.startTime-P),re=!1}return re}finally{h=null,m=N,x=!1}}var E=!1,w=null,C=-1,A=5,T=-1;function b(){return!(e.unstable_now()-T<A)}function We(){if(w!==null){var z=e.unstable_now();T=z;var P=!0;try{P=w(!0,z)}finally{P?Y():(E=!1,w=null)}}else E=!1}var Y;if(typeof u=="function")Y=function(){u(We)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Wt=Be.port2;Be.port1.onmessage=We,Y=function(){Wt.postMessage(null)}}else Y=function(){L(We,0)};function gt(z){w=z,E||(E=!0,Y())}function Bt(z,P){C=L(function(){z(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,gt(_))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var N=m;m=P;try{return z()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,P){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var N=m;m=z;try{return P()}finally{m=N}},e.unstable_scheduleCallback=function(z,P,N){var U=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=N+F,z={id:p++,callback:P,priorityLevel:z,startTime:N,expirationTime:F,sortIndex:-1},N>U?(z.sortIndex=N,t(c,z),n(s)===null&&z===n(c)&&($?(d(C),C=-1):$=!0,Bt(v,N-U))):(z.sortIndex=F,t(s,z),y||x||(y=!0,gt(_))),z},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(z){var P=m;return function(){var N=m;m=P;try{return z.apply(this,arguments)}finally{m=N}}}})(Vu);Hu.exports=Vu;var bf=Hu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=ht,Ne=bf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bu=new Set,vr={};function on(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(vr[e]=t,e=0;e<t.length;e++)bu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ss={},us={};function Qf(e){return ol.call(us,e)?!0:ol.call(ss,e)?!1:Gf.test(e)?us[e]=!0:(ss[e]=!0,!1)}function Kf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yf(e,t,n,r){if(t===null||typeof t>"u"||Kf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,da);de[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,da);de[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,da);de[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function fa(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yf(t,n,i,r)&&(n=null),r||i===null?Qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),ha=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),ma=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Qu=Symbol.for("react.offscreen"),cs=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=cs&&e[cs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Eo;function er(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var zo=!1;function jo(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function Xf(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case ll:return"Profiler";case pa:return"StrictMode";case al:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case qu:return(e._context.displayName||"Context")+".Provider";case ha:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ma:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Zf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Jf(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ds(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&fa(e,"checked",t,!1)}function dl(e,t){Xu(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ps(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(tr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Zu(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var tp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,Sn=null,_n=null;function ms(e){if(e=Wr(e)){if(typeof vl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ao(t),vl(e.stateNode,e.type,t))}}function rc(e){Sn?_n?_n.push(e):_n=[e]:Sn=e}function ic(){if(Sn){var e=Sn,t=_n;if(_n=Sn=null,ms(e),t)for(e=0;e<t.length;e++)ms(t[e])}}function oc(e,t){return e(t)}function lc(){}var Po=!1;function ac(e,t,n){if(Po)return e(t,n);Po=!0;try{return oc(e,t,n)}finally{Po=!1,(Sn!==null||_n!==null)&&(lc(),ic())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var wl=!1;if(ct)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{wl=!1}function np(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var sr=!1,Ti=null,Li=!1,xl=null,rp={onError:function(e){sr=!0,Ti=e}};function ip(e,t,n,r,i,o,l,a,s){sr=!1,Ti=null,np.apply(rp,arguments)}function op(e,t,n,r,i,o,l,a,s){if(ip.apply(this,arguments),sr){if(sr){var c=Ti;sr=!1,Ti=null}else throw Error(k(198));Li||(Li=!0,xl=c)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gs(e){if(ln(e)!==e)throw Error(k(188))}function lp(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gs(i),e;if(o===r)return gs(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function uc(e){return e=lp(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var dc=Ne.unstable_scheduleCallback,ys=Ne.unstable_cancelCallback,ap=Ne.unstable_shouldYield,sp=Ne.unstable_requestPaint,J=Ne.unstable_now,up=Ne.unstable_getCurrentPriorityLevel,ya=Ne.unstable_ImmediatePriority,fc=Ne.unstable_UserBlockingPriority,Ii=Ne.unstable_NormalPriority,cp=Ne.unstable_LowPriority,pc=Ne.unstable_IdlePriority,ro=null,tt=null;function dp(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:hp,fp=Math.log,pp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(fp(e)/pp|0)|0}var Kr=64,Yr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=nr(a):(o&=l,o!==0&&(r=nr(o)))}else l=n&~i,l!==0?r=nr(l):o!==0&&(r=nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=mp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gc,wa,yc,vc,wc,$l=!1,Xr=[],zt=null,jt=null,Pt=null,kr=new Map,$r=new Map,$t=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function Gn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wr(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wp(e,t,n,r,i){switch(t){case"focusin":return zt=Gn(zt,e,t,n,r,i),!0;case"dragenter":return jt=Gn(jt,e,t,n,r,i),!0;case"mouseover":return Pt=Gn(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kr.set(o,Gn(kr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,Gn($r.get(o)||null,e,t,n,r,i)),!0}return!1}function xc(e){var t=qt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=Wr(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){mi(e)&&n.delete(t)}function xp(){$l=!1,zt!==null&&mi(zt)&&(zt=null),jt!==null&&mi(jt)&&(jt=null),Pt!==null&&mi(Pt)&&(Pt=null),kr.forEach(ws),$r.forEach(ws)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,xp)))}function Sr(e){function t(i){return Qn(i,e)}if(0<Xr.length){Qn(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Qn(zt,e),jt!==null&&Qn(jt,e),Pt!==null&&Qn(Pt,e),kr.forEach(t),$r.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)xc(n),n.blockedOn===null&&$t.shift()}var Cn=mt.ReactCurrentBatchConfig,Ri=!0;function kp(e,t,n,r){var i=D,o=Cn.transition;Cn.transition=null;try{D=1,xa(e,t,n,r)}finally{D=i,Cn.transition=o}}function $p(e,t,n,r){var i=D,o=Cn.transition;Cn.transition=null;try{D=4,xa(e,t,n,r)}finally{D=i,Cn.transition=o}}function xa(e,t,n,r){if(Ri){var i=Sl(e,t,n,r);if(i===null)Uo(e,t,r,Fi,n),vs(e,r);else if(wp(i,e,t,n,r))r.stopPropagation();else if(vs(e,r),t&4&&-1<vp.indexOf(e)){for(;i!==null;){var o=Wr(i);if(o!==null&&gc(o),o=Sl(e,t,n,r),o===null&&Uo(e,t,r,Fi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Uo(e,t,r,null,n)}}var Fi=null;function Sl(e,t,n,r){if(Fi=null,e=ga(r),e=qt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case ya:return 1;case fc:return 4;case Ii:case cp:return 16;case pc:return 536870912;default:return 16}default:return 16}}var _t=null,ka=null,gi=null;function $c(){if(gi)return gi;var e,t=ka,n=t.length,r,i="value"in _t?_t.value:_t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return gi=i.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function xs(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:xs,this.isPropagationStopped=xs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=Le(Wn),Ur=K({},Wn,{view:0,detail:0}),Sp=Le(Ur),To,Lo,Kn,io=K({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(To=e.screenX-Kn.screenX,Lo=e.screenY-Kn.screenY):Lo=To=0,Kn=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),ks=Le(io),_p=K({},io,{dataTransfer:0}),Cp=Le(_p),Ep=K({},Ur,{relatedTarget:0}),Io=Le(Ep),zp=K({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=Le(zp),Pp=K({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Np=Le(Pp),Tp=K({},Wn,{data:0}),$s=Le(Tp),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Sa(){return Rp}var Fp=K({},Ur,{key:function(e){if(e.key){var t=Lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Le(Fp),Ap=K({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=Le(Ap),Dp=K({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Up=Le(Dp),Wp=K({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Le(Wp),Hp=K({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Le(Hp),bp=[9,13,27,32],_a=ct&&"CompositionEvent"in window,ur=null;ct&&"documentMode"in document&&(ur=document.documentMode);var qp=ct&&"TextEvent"in window&&!ur,Sc=ct&&(!_a||ur&&8<ur&&11>=ur),_s=" ",Cs=!1;function _c(e,t){switch(e){case"keyup":return bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Gp(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(Cs=!0,_s);case"textInput":return e=t.data,e===_s&&Cs?null:e;default:return null}}function Qp(e,t){if(fn)return e==="compositionend"||!_a&&_c(e,t)?(e=$c(),gi=ka=_t=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Ec(e,t,n,r){rc(r),t=Oi(t,"onChange"),0<t.length&&(n=new $a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,_r=null;function Yp(e){Oc(e,0)}function oo(e){var t=mn(e);if(Yu(t))return e}function Xp(e,t){if(e==="change")return t}var zc=!1;if(ct){var Mo;if(ct){var Ro="oninput"in document;if(!Ro){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Ro=typeof zs.oninput=="function"}Mo=Ro}else Mo=!1;zc=Mo&&(!document.documentMode||9<document.documentMode)}function js(){cr&&(cr.detachEvent("onpropertychange",jc),_r=cr=null)}function jc(e){if(e.propertyName==="value"&&oo(_r)){var t=[];Ec(t,_r,e,ga(e)),ac(Yp,t)}}function Zp(e,t,n){e==="focusin"?(js(),cr=t,_r=n,cr.attachEvent("onpropertychange",jc)):e==="focusout"&&js()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(_r)}function eh(e,t){if(e==="click")return oo(t)}function th(e,t){if(e==="input"||e==="change")return oo(t)}function nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:nh;function Cr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rh(e){var t=Nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ns(n,o);var l=Ns(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ih=ct&&"documentMode"in document&&11>=document.documentMode,pn=null,_l=null,dr=null,Cl=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||pn==null||pn!==Ni(r)||(r=pn,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Cr(dr,r)||(dr=r,r=Oi(_l,"onSelect"),0<r.length&&(t=new $a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Fo={},Tc={};ct&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function lo(e){if(Fo[e])return Fo[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return Fo[e]=t[n];return e}var Lc=lo("animationend"),Ic=lo("animationiteration"),Mc=lo("animationstart"),Rc=lo("transitionend"),Fc=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Fc.set(e,t),on(t,[e])}for(var Oo=0;Oo<Ls.length;Oo++){var Ao=Ls[Oo],oh=Ao.toLowerCase(),lh=Ao[0].toUpperCase()+Ao.slice(1);At(oh,"on"+lh)}At(Lc,"onAnimationEnd");At(Ic,"onAnimationIteration");At(Mc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Rc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,op(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Is(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Is(i,a,c),o=s}}}if(Li)throw e=xl,Li=!1,xl=null,e}function B(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Ac(t,e,2,!1),n.add(r))}function Do(e,t,n){var r=0;t&&(r|=4),Ac(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ei]){e[ei]=!0,bu.forEach(function(n){n!=="selectionchange"&&(ah.has(n)||Do(n,!1,e),Do(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,Do("selectionchange",!1,t))}}function Ac(e,t,n,r){switch(kc(t)){case 1:var i=kp;break;case 4:i=$p;break;default:i=xa}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Uo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=qt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ac(function(){var c=o,p=ga(n),h=[];e:{var m=Fc.get(e);if(m!==void 0){var x=$a,y=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":x=Op;break;case"focusin":y="focus",x=Io;break;case"focusout":y="blur",x=Io;break;case"beforeblur":case"afterblur":x=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Up;break;case Lc:case Ic:case Mc:x=jp;break;case Rc:x=Bp;break;case"scroll":x=Sp;break;case"wheel":x=Vp;break;case"copy":case"cut":case"paste":x=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ss}var $=(t&4)!==0,L=!$&&e==="scroll",d=$?m!==null?m+"Capture":null:m;$=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=xr(u,d),v!=null&&$.push(zr(u,v,f)))),L)break;u=u.return}0<$.length&&(m=new x(m,y,null,n,p),h.push({event:m,listeners:$}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==yl&&(y=n.relatedTarget||n.fromElement)&&(qt(y)||y[dt]))break e;if((x||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?qt(y):null,y!==null&&(L=ln(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if($=ks,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&($=Ss,v="onPointerLeave",d="onPointerEnter",u="pointer"),L=x==null?m:mn(x),f=y==null?m:mn(y),m=new $(v,u+"leave",x,n,p),m.target=L,m.relatedTarget=f,v=null,qt(p)===c&&($=new $(d,u+"enter",y,n,p),$.target=f,$.relatedTarget=L,v=$),L=v,x&&y)t:{for($=x,d=y,u=0,f=$;f;f=an(f))u++;for(f=0,v=d;v;v=an(v))f++;for(;0<u-f;)$=an($),u--;for(;0<f-u;)d=an(d),f--;for(;u--;){if($===d||d!==null&&$===d.alternate)break t;$=an($),d=an(d)}$=null}else $=null;x!==null&&Ms(h,m,x,$,!1),y!==null&&L!==null&&Ms(h,L,y,$,!0)}}e:{if(m=c?mn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var _=Xp;else if(Es(m))if(zc)_=th;else{_=Jp;var E=Zp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=eh);if(_&&(_=_(e,c))){Ec(h,_,n,p);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&fl(m,"number",m.value)}switch(E=c?mn(c):window,e){case"focusin":(Es(E)||E.contentEditable==="true")&&(pn=E,_l=c,dr=null);break;case"focusout":dr=_l=pn=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Ts(h,n,p);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":Ts(h,n,p)}var w;if(_a)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else fn?_c(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Sc&&n.locale!=="ko"&&(fn||C!=="onCompositionStart"?C==="onCompositionEnd"&&fn&&(w=$c()):(_t=p,ka="value"in _t?_t.value:_t.textContent,fn=!0)),E=Oi(c,C),0<E.length&&(C=new $s(C,e,null,n,p),h.push({event:C,listeners:E}),w?C.data=w:(w=Cc(n),w!==null&&(C.data=w)))),(w=qp?Gp(e,n):Qp(e,n))&&(c=Oi(c,"onBeforeInput"),0<c.length&&(p=new $s("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=w))}Oc(h,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xr(e,n),o!=null&&r.unshift(zr(e,o,i)),o=xr(e,t),o!=null&&r.push(zr(e,o,i))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ms(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=xr(n,o),s!=null&&l.unshift(zr(n,s,a))):i||(s=xr(n,o),s!=null&&l.push(zr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sh=/\r\n?/g,uh=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(sh,`
`).replace(uh,"")}function ti(e,t,n){if(t=Rs(t),Rs(e)!==t&&n)throw Error(k(425))}function Ai(){}var El=null,zl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,ch=typeof clearTimeout=="function"?clearTimeout:void 0,Fs=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Fs<"u"?function(e){return Fs.resolve(null).then(e).catch(fh)}:Pl;function fh(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),et="__reactFiber$"+Bn,jr="__reactProps$"+Bn,dt="__reactContainer$"+Bn,Nl="__reactEvents$"+Bn,ph="__reactListeners$"+Bn,hh="__reactHandles$"+Bn;function qt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Os(e);e!==null;){if(n=e[et])return n;e=Os(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[et]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ao(e){return e[jr]||null}var Tl=[],gn=-1;function Dt(e){return{current:e}}function V(e){0>gn||(e.current=Tl[gn],Tl[gn]=null,gn--)}function W(e,t){gn++,Tl[gn]=e.current,e.current=t}var Ot={},ge=Dt(Ot),Se=Dt(!1),Zt=Ot;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Di(){V(Se),V(ge)}function As(e,t,n){if(ge.current!==Ot)throw Error(k(168));W(ge,t),W(Se,n)}function Dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Zf(e)||"Unknown",i));return K({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=ge.current,W(ge,e),W(Se,Se.current),!0}function Ds(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Dc(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(ge),W(ge,e)):V(Se),W(Se,n)}var lt=null,so=!1,Bo=!1;function Uc(e){lt===null?lt=[e]:lt.push(e)}function mh(e){so=!0,Uc(e)}function Ut(){if(!Bo&&lt!==null){Bo=!0;var e=0,t=D;try{var n=lt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,so=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),dc(ya,Ut),i}finally{D=t,Bo=!1}}return null}var yn=[],vn=0,Wi=null,Bi=0,Me=[],Re=0,Jt=null,at=1,st="";function Ht(e,t){yn[vn++]=Bi,yn[vn++]=Wi,Wi=e,Bi=t}function Wc(e,t,n){Me[Re++]=at,Me[Re++]=st,Me[Re++]=Jt,Jt=e;var r=at;e=st;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,at=1<<32-Qe(t)+i|n<<i|r,st=o+e}else at=1<<o|n<<i|r,st=e}function Ea(e){e.return!==null&&(Ht(e,1),Wc(e,1,0))}function za(e){for(;e===Wi;)Wi=yn[--vn],yn[vn]=null,Bi=yn[--vn],yn[vn]=null;for(;e===Jt;)Jt=Me[--Re],Me[Re]=null,st=Me[--Re],Me[Re]=null,at=Me[--Re],Me[Re]=null}var Pe=null,je=null,q=!1,Ge=null;function Bc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Us(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,je=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:at,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,je=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(q){var t=je;if(t){var n=t;if(!Us(e,t)){if(Ll(e))throw Error(k(418));t=Nt(n.nextSibling);var r=Pe;t&&Us(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,q=!1,Pe=e)}}else{if(Ll(e))throw Error(k(418));e.flags=e.flags&-4097|2,q=!1,Pe=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function ni(e){if(e!==Pe)return!1;if(!q)return Ws(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=je)){if(Ll(e))throw Hc(),Error(k(418));for(;t;)Bc(e,t),t=Nt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Pe?Nt(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=je;e;)e=Nt(e.nextSibling)}function Tn(){je=Pe=null,q=!1}function ja(e){Ge===null?Ge=[e]:Ge.push(e)}var gh=mt.ReactCurrentBatchConfig;function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bs(e){var t=e._init;return t(e._payload)}function Vc(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Mt(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,v){return u===null||u.tag!==6?(u=Ko(f,d.mode,v),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,v){var _=f.type;return _===dn?p(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xt&&Bs(_)===u.type)?(v=i(u,f.props),v.ref=Yn(d,u,f),v.return=d,v):(v=_i(f.type,f.key,f.props,null,d.mode,v),v.ref=Yn(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Yo(f,d.mode,v),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function p(d,u,f,v,_){return u===null||u.tag!==7?(u=Yt(f,d.mode,v,_),u.return=d,u):(u=i(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ko(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case qr:return f=_i(u.type,u.key,u.props,null,d.mode,f),f.ref=Yn(d,null,u),f.return=d,f;case cn:return u=Yo(u,d.mode,f),u.return=d,u;case xt:var v=u._init;return h(d,v(u._payload),f)}if(tr(u)||bn(u))return u=Yt(u,d.mode,f,null),u.return=d,u;ri(d,u)}return null}function m(d,u,f,v){var _=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return _!==null?null:a(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qr:return f.key===_?s(d,u,f,v):null;case cn:return f.key===_?c(d,u,f,v):null;case xt:return _=f._init,m(d,u,_(f._payload),v)}if(tr(f)||bn(f))return _!==null?null:p(d,u,f,v,null);ri(d,f)}return null}function x(d,u,f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,a(u,d,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qr:return d=d.get(v.key===null?f:v.key)||null,s(u,d,v,_);case cn:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,_);case xt:var E=v._init;return x(d,u,f,E(v._payload),_)}if(tr(v)||bn(v))return d=d.get(f)||null,p(u,d,v,_,null);ri(u,v)}return null}function y(d,u,f,v){for(var _=null,E=null,w=u,C=u=0,A=null;w!==null&&C<f.length;C++){w.index>C?(A=w,w=null):A=w.sibling;var T=m(d,w,f[C],v);if(T===null){w===null&&(w=A);break}e&&w&&T.alternate===null&&t(d,w),u=o(T,u,C),E===null?_=T:E.sibling=T,E=T,w=A}if(C===f.length)return n(d,w),q&&Ht(d,C),_;if(w===null){for(;C<f.length;C++)w=h(d,f[C],v),w!==null&&(u=o(w,u,C),E===null?_=w:E.sibling=w,E=w);return q&&Ht(d,C),_}for(w=r(d,w);C<f.length;C++)A=x(w,d,C,f[C],v),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?C:A.key),u=o(A,u,C),E===null?_=A:E.sibling=A,E=A);return e&&w.forEach(function(b){return t(d,b)}),q&&Ht(d,C),_}function $(d,u,f,v){var _=bn(f);if(typeof _!="function")throw Error(k(150));if(f=_.call(f),f==null)throw Error(k(151));for(var E=_=null,w=u,C=u=0,A=null,T=f.next();w!==null&&!T.done;C++,T=f.next()){w.index>C?(A=w,w=null):A=w.sibling;var b=m(d,w,T.value,v);if(b===null){w===null&&(w=A);break}e&&w&&b.alternate===null&&t(d,w),u=o(b,u,C),E===null?_=b:E.sibling=b,E=b,w=A}if(T.done)return n(d,w),q&&Ht(d,C),_;if(w===null){for(;!T.done;C++,T=f.next())T=h(d,T.value,v),T!==null&&(u=o(T,u,C),E===null?_=T:E.sibling=T,E=T);return q&&Ht(d,C),_}for(w=r(d,w);!T.done;C++,T=f.next())T=x(w,d,C,T.value,v),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?C:T.key),u=o(T,u,C),E===null?_=T:E.sibling=T,E=T);return e&&w.forEach(function(We){return t(d,We)}),q&&Ht(d,C),_}function L(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case qr:e:{for(var _=f.key,E=u;E!==null;){if(E.key===_){if(_=f.type,_===dn){if(E.tag===7){n(d,E.sibling),u=i(E,f.props.children),u.return=d,d=u;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===xt&&Bs(_)===E.type){n(d,E.sibling),u=i(E,f.props),u.ref=Yn(d,E,f),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===dn?(u=Yt(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=_i(f.type,f.key,f.props,null,d.mode,v),v.ref=Yn(d,u,f),v.return=d,d=v)}return l(d);case cn:e:{for(E=f.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Yo(f,d.mode,v),u.return=d,d=u}return l(d);case xt:return E=f._init,L(d,u,E(f._payload),v)}if(tr(f))return y(d,u,f,v);if(bn(f))return $(d,u,f,v);ri(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Ko(f,d.mode,v),u.return=d,d=u),l(d)):n(d,u)}return L}var Ln=Vc(!0),bc=Vc(!1),Hi=Dt(null),Vi=null,wn=null,Pa=null;function Na(){Pa=wn=Vi=null}function Ta(e){var t=Hi.current;V(Hi),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){Vi=e,Pa=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Pa!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Vi===null)throw Error(k(308));wn=e,Vi.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Gt=null;function La(e){Gt===null?Gt=[e]:Gt.push(e)}function qc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,La(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,La(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bi(e,t,n,r){var i=e.updateQueue;kt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,p=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,$=a;switch(m=t,x=n,$.tag){case 1:if(y=$.payload,typeof y=="function"){h=y.call(x,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=$.payload,m=typeof y=="function"?y.call(x,h,m):y,m==null)break e;h=K({},h,m);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=x,s=h):p=p.next=x,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=h}}function Vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Br={},nt=Dt(Br),Pr=Dt(Br),Nr=Dt(Br);function Qt(e){if(e===Br)throw Error(k(174));return e}function Ma(e,t){switch(W(Nr,t),W(Pr,e),W(nt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}V(nt),W(nt,t)}function In(){V(nt),V(Pr),V(Nr)}function Qc(e){Qt(Nr.current);var t=Qt(nt.current),n=hl(t,e.type);t!==n&&(W(Pr,e),W(nt,n))}function Ra(e){Pr.current===e&&(V(nt),V(Pr))}var G=Dt(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function Fa(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var wi=mt.ReactCurrentDispatcher,Vo=mt.ReactCurrentBatchConfig,en=0,Q=null,ie=null,ae=null,Gi=!1,fr=!1,Tr=0,yh=0;function fe(){throw Error(k(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,o){if(en=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?kh:$h,e=n(r,i),fr){o=0;do{if(fr=!1,Tr=0,25<=o)throw Error(k(301));o+=1,ae=ie=null,t.updateQueue=null,wi.current=Sh,e=n(r,i)}while(fr)}if(wi.current=Qi,t=ie!==null&&ie.next!==null,en=0,ae=ie=Q=null,Gi=!1,t)throw Error(k(300));return e}function Da(){var e=Tr!==0;return Tr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Q.memoizedState=ae=e:ae=ae.next=e,ae}function De(){if(ie===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?Q.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?Q.memoizedState=ae=e:ae=ae.next=e}return ae}function Lr(e,t){return typeof t=="function"?t(e):t}function bo(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var p=c.lane;if((en&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Q.lanes|=p,tn|=p}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Xe(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xe(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kc(){}function Yc(e,t){var n=Q,r=De(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Ua(Jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Ir(9,Zc.bind(null,n,r,i,t),void 0,null),se===null)throw Error(k(349));en&30||Xc(n,t,i)}return i}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,ed(t)&&td(e)}function Jc(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function td(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function bs(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=xh.bind(null,Q,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nd(){return De().memoizedState}function xi(e,t,n,r){var i=Je();Q.flags|=e,i.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(ie!==null){var l=ie.memoizedState;if(o=l.destroy,r!==null&&Oa(r,l.deps)){i.memoizedState=Ir(t,n,o,r);return}}Q.flags|=e,i.memoizedState=Ir(1|t,n,o,r)}function qs(e,t){return xi(8390656,8,e,t)}function Ua(e,t){return uo(2048,8,e,t)}function rd(e,t){return uo(4,2,e,t)}function id(e,t){return uo(4,4,e,t)}function od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,od.bind(null,t,e),n)}function Wa(){}function ad(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ud(e,t,n){return en&21?(Xe(n,t)||(n=hc(),Q.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function vh(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Vo.transition;Vo.transition={};try{e(!1),t()}finally{D=n,Vo.transition=r}}function cd(){return De().memoizedState}function wh(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))fd(t,n);else if(n=qc(e,t,n,r),n!==null){var i=ve();Ke(n,e,r,i),pd(n,t,r)}}function xh(e,t,n){var r=It(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))fd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,l)){var s=t.interleaved;s===null?(i.next=i,La(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=qc(e,t,i,r),n!==null&&(i=ve(),Ke(n,e,r,i),pd(n,t,r))}}function dd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function fd(e,t){fr=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var Qi={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},kh={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xi(4194308,4,od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return xi(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wh.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:bs,useDebugValue:Wa,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=bs(!1),t=e[0];return e=vh.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Je();if(q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));en&30||Xc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qs(Jc.bind(null,r,o,e),[e]),r.flags|=2048,Ir(9,Zc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=se.identifierPrefix;if(q){var n=st,r=at;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:Ae,useCallback:ad,useContext:Ae,useEffect:Ua,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:id,useMemo:sd,useReducer:bo,useRef:nd,useState:function(){return bo(Lr)},useDebugValue:Wa,useDeferredValue:function(e){var t=De();return ud(t,ie.memoizedState,e)},useTransition:function(){var e=bo(Lr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Yc,useId:cd,unstable_isNewReconciler:!1},Sh={readContext:Ae,useCallback:ad,useContext:Ae,useEffect:Ua,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:id,useMemo:sd,useReducer:qo,useRef:nd,useState:function(){return qo(Lr)},useDebugValue:Wa,useDeferredValue:function(e){var t=De();return ie===null?t.memoizedState=e:ud(t,ie.memoizedState,e)},useTransition:function(){var e=qo(Lr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Yc,useId:cd,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=It(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ke(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=It(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ke(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=It(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Ke(t,e,r,n),vi(t,e,r))}};function Gs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function hd(e,t,n){var r=!1,i=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=_e(t)?Zt:ge.current,r=t.contextTypes,o=(r=r!=null)?Nn(e,i):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ia(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=_e(t)?Zt:ge.current,i.context=Nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&co.enqueueReplaceState(i,i.state,null),bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=Xf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function md(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yi||(Yi=!0,Gl=r),Ol(e,t)},n}function gd(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ks(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _h;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ah.bind(null,e,t,n),t.then(e,e))}function Ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var Ch=mt.ReactCurrentOwner,$e=!1;function ye(e,t,n,r){t.child=e===null?bc(t,null,n,r):Ln(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var o=t.ref;return En(t,i),r=Aa(e,t,n,r,o,i),n=Da(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(q&&n&&Ea(t),t.flags|=1,ye(e,t,r,i),t.child)}function Js(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ka(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yd(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,pt(e,t,i)}return Al(e,t,n,r,i)}function vd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(kn,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(kn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(kn,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(kn,ze),ze|=r;return ye(e,t,i,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Al(e,t,n,r,i){var o=_e(n)?Zt:ge.current;return o=Nn(t,o),En(t,i),n=Aa(e,t,n,r,o,i),r=Da(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(q&&r&&Ea(t),t.flags|=1,ye(e,t,n,i),t.child)}function eu(e,t,n,r,i){if(_e(n)){var o=!0;Ui(t)}else o=!1;if(En(t,i),t.stateNode===null)ki(e,t),hd(t,n,r),Fl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=_e(n)?Zt:ge.current,c=Nn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Qs(t,l,r,c),kt=!1;var m=t.memoizedState;l.state=m,bi(t,r,l,i),s=t.memoizedState,a!==r||m!==s||Se.current||kt?(typeof p=="function"&&(Rl(t,n,p,r),s=t.memoizedState),(a=kt||Gs(t,n,a,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ve(t.type,a),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=_e(n)?Zt:ge.current,s=Nn(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Qs(t,l,r,s),kt=!1,m=t.memoizedState,l.state=m,bi(t,r,l,i);var y=t.memoizedState;a!==h||m!==y||Se.current||kt?(typeof x=="function"&&(Rl(t,n,x,r),y=t.memoizedState),(c=kt||Gs(t,n,c,r,m,y,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,o,i)}function Dl(e,t,n,r,i,o){wd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ds(t,n,!1),pt(e,t,o);r=t.stateNode,Ch.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ln(t,e.child,null,o),t.child=Ln(t,null,a,o)):ye(e,t,a,o),t.memoizedState=r.state,i&&Ds(t,n,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),Ma(e,t.containerInfo)}function tu(e,t,n,r,i){return Tn(),ja(i),t.flags|=256,ye(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,i=G.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(G,i&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ho(l,r,0,null),e=Yt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wl(n),t.memoizedState=Ul,e):Ba(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eh(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mt(a,o):(o=Yt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Wl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ii(e,t,n,r){return r!==null&&ja(r),Ln(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(k(422))),ii(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ho({mode:"visible",children:r.children},i,0,null),o=Yt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ln(t,e.child,null,l),t.child.memoizedState=Wl(l),t.memoizedState=Ul,o);if(!(t.mode&1))return ii(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Go(o,r,void 0),ii(e,t,l,r)}if(a=(l&e.childLanes)!==0,$e||a){if(r=se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Ke(r,e,i,-1))}return Qa(),r=Go(Error(k(421))),ii(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,je=Nt(i.nextSibling),Pe=t,q=!0,Ge=null,e!==null&&(Me[Re++]=at,Me[Re++]=st,Me[Re++]=Jt,at=e.id,st=e.overflow,Jt=t),t=Ba(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Qo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $d(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qo(t,!0,n,null,o);break;case"together":Qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zh(e,t,n){switch(t.tag){case 3:xd(t),Tn();break;case 5:Qc(t);break;case 1:_e(t.type)&&Ui(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Hi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?kd(e,t,n):(W(G,G.current&1),e=pt(e,t,n),e!==null?e.sibling:null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $d(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,n)}return pt(e,t,n)}var Sd,Bl,_d,Cd;Sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};_d=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qt(nt.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}ml(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&B("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jh(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return _e(t.type)&&Di(),pe(t),null;case 3:return r=t.stateNode,In(),V(Se),V(ge),Fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(Yl(Ge),Ge=null))),Bl(e,t),pe(t),null;case 5:Ra(t);var i=Qt(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Qt(nt.current),ni(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[jr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<rr.length;i++)B(rr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ds(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":ps(r,o),B("invalid",r)}ml(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",""+a]):vr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Gr(r),fs(r,o,!0);break;case"textarea":Gr(r),hs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[jr]=r,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(l=gl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<rr.length;i++)B(rr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ds(e,r),i=cl(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":ps(e,r),i=pl(e,r),B("invalid",e);break;default:i=r}ml(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?nc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ec(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&B("scroll",e):s!=null&&fa(e,o,s,l))}switch(n){case"input":Gr(e),fs(e,r,!1);break;case"textarea":Gr(e),hs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$n(e,!!r.multiple,o,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Qt(Nr.current),Qt(nt.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return pe(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&je!==null&&t.mode&1&&!(t.flags&128))Hc(),Tn(),t.flags|=98560,o=!1;else if(o=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[et]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Ge!==null&&(Yl(Ge),Ge=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):Qa())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return In(),Bl(e,t),e===null&&Er(t.stateNode.containerInfo),pe(t),null;case 10:return Ta(t.type._context),pe(t),null;case 17:return _e(t.type)&&Di(),pe(t),null;case 19:if(V(G),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Xn(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=qi(e),l!==null){for(t.flags|=128,Xn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Rn&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=qi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!q)return pe(t),null}else 2*J()-o.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=G.current,W(G,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Ph(e,t){switch(za(t),t.tag){case 1:return _e(t.type)&&Di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),V(Se),V(ge),Fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ra(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return In(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Ga(),null;case 24:return null;default:return null}}var oi=!1,me=!1,Nh=typeof WeakSet=="function"?WeakSet:Set,j=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var ru=!1;function Th(e,t){if(El=Ri,e=Nc(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++p===r&&(s=l),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Ri=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var $=y.memoizedProps,L=y.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ve(t.type,$),L);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=ru,ru=!1,y}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hl(t,n,o)}i=i.next}while(i!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[jr],delete t[Nl],delete t[ph],delete t[hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var ue=null,be=!1;function vt(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:me||xn(n,t);case 6:var r=ue,i=be;ue=null,vt(e,t,n),ue=r,be=i,ue!==null&&(be?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(be?(e=ue,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Sr(e)):Wo(ue,n.stateNode));break;case 4:r=ue,i=be,ue=n.stateNode.containerInfo,be=!0,vt(e,t,n),ue=r,be=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Hl(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!me&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,vt(e,t,n),me=r):vt(e,t,n);break;default:vt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nh),t.forEach(function(r){var i=Uh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,be=!1;break e;case 3:ue=a.stateNode.containerInfo,be=!0;break e;case 4:ue=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(ue===null)throw Error(k(160));jd(o,l,i),ue=null,be=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{pr(3,e,e.return),fo(3,e)}catch($){Z(e,e.return,$)}try{pr(5,e,e.return)}catch($){Z(e,e.return,$)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{wr(i,"")}catch($){Z(e,e.return,$)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Xu(i,o),gl(a,l);var c=gl(a,o);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?nc(i,h):p==="dangerouslySetInnerHTML"?ec(i,h):p==="children"?wr(i,h):fa(i,p,h,c)}switch(a){case"input":dl(i,o);break;case"textarea":Zu(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?$n(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?$n(i,!!o.multiple,o.defaultValue,!0):$n(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch($){Z(e,e.return,$)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch($){Z(e,e.return,$)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch($){Z(e,e.return,$)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ba=J())),r&4&&ou(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||p,He(t,e),me=c):He(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(h=j=p;j!==null;){switch(m=j,x=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:xn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch($){Z(r,n,$)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){au(h);continue}}x!==null?(x.return=m,j=x):au(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=tc("display",l))}catch($){Z(e,e.return,$)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch($){Z(e,e.return,$)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),Ze(e),r&4&&ou(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wr(i,""),r.flags&=-33);var o=iu(e);ql(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=iu(e);bl(e,a,l);break;default:throw Error(k(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lh(e,t,n){j=e,Nd(e)}function Nd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||oi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||me;a=oi;var c=me;if(oi=l,(me=s)&&!c)for(j=i;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?su(i):s!==null?(s.return=l,j=s):su(i);for(;o!==null;)j=o,Nd(o),o=o.sibling;j=i,oi=a,me=c}lu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):lu(e)}}function lu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vs(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&Vl(t)}catch(m){Z(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function au(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function su(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(s){Z(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Z(t,i,s)}}var o=t.return;try{Vl(t)}catch(s){Z(t,o,s)}break;case 5:var l=t.return;try{Vl(t)}catch(s){Z(t,l,s)}}}catch(s){Z(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Ih=Math.ceil,Ki=mt.ReactCurrentDispatcher,Ha=mt.ReactCurrentOwner,Oe=mt.ReactCurrentBatchConfig,R=0,se=null,ne=null,ce=0,ze=0,kn=Dt(0),le=0,Mr=null,tn=0,po=0,Va=0,hr=null,ke=null,ba=0,Rn=1/0,it=null,Yi=!1,Gl=null,Lt=null,li=!1,Ct=null,Xi=0,mr=0,Ql=null,$i=-1,Si=0;function ve(){return R&6?J():$i!==-1?$i:$i=J()}function It(e){return e.mode&1?R&2&&ce!==0?ce&-ce:gh.transition!==null?(Si===0&&(Si=hc()),Si):(e=D,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e):1}function Ke(e,t,n,r){if(50<mr)throw mr=0,Ql=null,Error(k(185));Dr(e,n,r),(!(R&2)||e!==se)&&(e===se&&(!(R&2)&&(po|=n),le===4&&St(e,ce)),Ce(e,r),n===1&&R===0&&!(t.mode&1)&&(Rn=J()+500,so&&Ut()))}function Ce(e,t){var n=e.callbackNode;gp(e,t);var r=Mi(e,e===se?ce:0);if(r===0)n!==null&&ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ys(n),t===1)e.tag===0?mh(uu.bind(null,e)):Uc(uu.bind(null,e)),dh(function(){!(R&6)&&Ut()}),n=null;else{switch(mc(r)){case 1:n=ya;break;case 4:n=fc;break;case 16:n=Ii;break;case 536870912:n=pc;break;default:n=Ii}n=Ad(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if($i=-1,Si=0,R&6)throw Error(k(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Mi(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zi(e,r);else{t=r;var i=R;R|=2;var o=Id();(se!==e||ce!==t)&&(it=null,Rn=J()+500,Kt(e,t));do try{Fh();break}catch(a){Ld(e,a)}while(!0);Na(),Ki.current=o,R=i,ne!==null?t=0:(se=null,ce=0,t=le)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Kl(e,i))),t===1)throw n=Mr,Kt(e,0),St(e,r),Ce(e,J()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mh(i)&&(t=Zi(e,r),t===2&&(o=kl(e),o!==0&&(r=o,t=Kl(e,o))),t===1))throw n=Mr,Kt(e,0),St(e,r),Ce(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Vt(e,ke,it);break;case 3:if(St(e,r),(r&130023424)===r&&(t=ba+500-J(),10<t)){if(Mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Vt.bind(null,e,ke,it),t);break}Vt(e,ke,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ih(r/1960))-r,10<r){e.timeoutHandle=Pl(Vt.bind(null,e,ke,it),r);break}Vt(e,ke,it);break;case 5:Vt(e,ke,it);break;default:throw Error(k(329))}}}return Ce(e,J()),e.callbackNode===n?Td.bind(null,e):null}function Kl(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Zi(e,t),e!==2&&(t=ke,ke=n,t!==null&&Yl(t)),e}function Yl(e){ke===null?ke=e:ke.push.apply(ke,e)}function Mh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Va,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(R&6)throw Error(k(327));zn();var t=Mi(e,0);if(!(t&1))return Ce(e,J()),null;var n=Zi(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=Mr,Kt(e,0),St(e,t),Ce(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,ke,it),Ce(e,J()),null}function qa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Rn=J()+500,so&&Ut())}}function nn(e){Ct!==null&&Ct.tag===0&&!(R&6)&&zn();var t=R;R|=1;var n=Oe.transition,r=D;try{if(Oe.transition=null,D=1,e)return e()}finally{D=r,Oe.transition=n,R=t,!(R&6)&&Ut()}}function Ga(){ze=kn.current,V(kn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ch(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:In(),V(Se),V(ge),Fa();break;case 5:Ra(r);break;case 4:In();break;case 13:V(G);break;case 19:V(G);break;case 10:Ta(r.type._context);break;case 22:case 23:Ga()}n=n.return}if(se=e,ne=e=Mt(e.current,null),ce=ze=t,le=0,Mr=null,Va=po=tn=0,ke=hr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Gt=null}return e}function Ld(e,t){do{var n=ne;try{if(Na(),wi.current=Qi,Gi){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gi=!1}if(en=0,ae=ie=Q=null,fr=!1,Tr=0,Ha.current=null,n===null||n.return===null){le=1,Mr=t,ne=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Ys(l);if(x!==null){x.flags&=-257,Xs(x,l,a,o,t),x.mode&1&&Ks(o,c,t),t=x,s=c;var y=t.updateQueue;if(y===null){var $=new Set;$.add(s),t.updateQueue=$}else y.add(s);break e}else{if(!(t&1)){Ks(o,c,t),Qa();break e}s=Error(k(426))}}else if(q&&a.mode&1){var L=Ys(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Xs(L,l,a,o,t),ja(Mn(s,a));break e}}o=s=Mn(s,a),le!==4&&(le=2),hr===null?hr=[o]:hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=md(o,s,t);Hs(o,d);break e;case 1:a=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lt===null||!Lt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=gd(o,a,t);Hs(o,v);break e}}o=o.return}while(o!==null)}Rd(n)}catch(_){t=_,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Id(){var e=Ki.current;return Ki.current=Qi,e===null?Qi:e}function Qa(){(le===0||le===3||le===2)&&(le=4),se===null||!(tn&268435455)&&!(po&268435455)||St(se,ce)}function Zi(e,t){var n=R;R|=2;var r=Id();(se!==e||ce!==t)&&(it=null,Kt(e,t));do try{Rh();break}catch(i){Ld(e,i)}while(!0);if(Na(),R=n,Ki.current=r,ne!==null)throw Error(k(261));return se=null,ce=0,le}function Rh(){for(;ne!==null;)Md(ne)}function Fh(){for(;ne!==null&&!ap();)Md(ne)}function Md(e){var t=Od(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Rd(e):ne=t,Ha.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ph(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ne=null;return}}else if(n=jh(n,t,ze),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);le===0&&(le=5)}function Vt(e,t,n){var r=D,i=Oe.transition;try{Oe.transition=null,D=1,Oh(e,t,n,r)}finally{Oe.transition=i,D=r}return null}function Oh(e,t,n,r){do zn();while(Ct!==null);if(R&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(yp(e,o),e===se&&(ne=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,Ad(Ii,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var l=D;D=1;var a=R;R|=4,Ha.current=null,Th(e,n),Pd(n,e),rh(zl),Ri=!!El,zl=El=null,e.current=n,Lh(n),sp(),R=a,D=l,Oe.transition=o}else e.current=n;if(li&&(li=!1,Ct=e,Xi=i),o=e.pendingLanes,o===0&&(Lt=null),dp(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yi)throw Yi=!1,e=Gl,Gl=null,e;return Xi&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Ql?mr++:(mr=0,Ql=e):mr=0,Ut(),null}function zn(){if(Ct!==null){var e=mc(Xi),t=Oe.transition,n=D;try{if(Oe.transition=null,D=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Xi=0,R&6)throw Error(k(331));var i=R;for(R|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:pr(8,p,o)}var h=p.child;if(h!==null)h.return=p,j=h;else for(;j!==null;){p=j;var m=p.sibling,x=p.return;if(Ed(p),p===c){j=null;break}if(m!==null){m.return=x,j=m;break}j=x}}}var y=o.alternate;if(y!==null){var $=y.child;if($!==null){y.child=null;do{var L=$.sibling;$.sibling=null,$=L}while($!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break e}j=o.return}}var u=e.current;for(j=u;j!==null;){l=j;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,j=f;else e:for(l=u;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fo(9,a)}}catch(_){Z(a,a.return,_)}if(a===l){j=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,j=v;break e}j=a.return}}if(R=i,Ut(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{D=n,Oe.transition=t}}return!1}function cu(e,t,n){t=Mn(n,t),t=md(e,t,1),e=Tt(e,t,1),t=ve(),e!==null&&(Dr(e,1,t),Ce(e,t))}function Z(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Mn(n,e),e=gd(t,e,1),t=Tt(t,e,1),e=ve(),t!==null&&(Dr(t,1,e),Ce(t,e));break}}t=t.return}}function Ah(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(le===4||le===3&&(ce&130023424)===ce&&500>J()-ba?Kt(e,0):Va|=n),Ce(e,t)}function Fd(e,t){t===0&&(e.mode&1?(t=Yr,Yr<<=1,!(Yr&130023424)&&(Yr=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Dr(e,t,n),Ce(e,n))}function Dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fd(e,n)}function Uh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Fd(e,n)}var Od;Od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,zh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,q&&t.flags&1048576&&Wc(t,Bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var i=Nn(t,ge.current);En(t,n),i=Aa(null,t,r,e,i,n);var o=Da();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Ui(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ia(t),i.updater=co,t.stateNode=i,i._reactInternals=t,Fl(t,r,e,n),t=Dl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Ea(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bh(r),e=Ve(r,e),i){case 0:t=Al(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=Js(null,t,r,Ve(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),eu(e,t,r,i,n);case 3:e:{if(xd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gc(e,t),bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mn(Error(k(423)),t),t=tu(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(k(424)),t),t=tu(e,t,r,n,i);break e}else for(je=Nt(t.stateNode.containerInfo.firstChild),Pe=t,q=!0,Ge=null,n=bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Qc(t),e===null&&Il(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,jl(r,i)?l=null:o!==null&&jl(r,o)&&(t.flags|=32),wd(e,t),ye(e,t,l,n),t.child;case 6:return e===null&&Il(t),null;case 13:return kd(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Zs(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(Hi,r._currentValue),r._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===i.children&&!Se.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ut(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ml(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ml(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=Ae(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),Js(e,t,r,i,n);case 15:return yd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),ki(e,t),t.tag=1,_e(r)?(e=!0,Ui(t)):e=!1,En(t,n),hd(t,r,i),Fl(t,r,i,n),Dl(null,t,r,!0,e,n);case 19:return $d(e,t,n);case 22:return vd(e,t,n)}throw Error(k(156,t.tag))};function Ad(e,t){return dc(e,t)}function Wh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Wh(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bh(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ha)return 11;if(e===ma)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Yt(n.children,i,o,t);case pa:l=8,i|=8;break;case ll:return e=Fe(12,n,t,i|2),e.elementType=ll,e.lanes=o,e;case al:return e=Fe(13,n,t,i),e.elementType=al,e.lanes=o,e;case sl:return e=Fe(19,n,t,i),e.elementType=sl,e.lanes=o,e;case Qu:return ho(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qu:l=10;break e;case Gu:l=9;break e;case ha:l=11;break e;case ma:l=14;break e;case xt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function ho(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Qu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Yo(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,r,i,o,l,a,s){return e=new Hh(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(o),e}function Vh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dd(e){if(!e)return Ot;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(_e(n))return Dc(e,n,t)}return t}function Ud(e,t,n,r,i,o,l,a,s){return e=Ya(n,r,!0,e,i,o,l,a,s),e.context=Dd(null),n=e.current,r=ve(),i=It(n),o=ut(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,Dr(e,i,r),Ce(e,r),e}function mo(e,t,n,r){var i=t.current,o=ve(),l=It(i);return n=Dd(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(Ke(e,i,l,o),vi(e,i,l)),l}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function bh(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}go.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));mo(e,t,null,null)};go.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){mo(null,e,null,null)}),t[dt]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=vc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&xc(e)}};function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function qh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ji(l);o.call(c)}}var l=Ud(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=l,e[dt]=l.current,Er(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ji(s);a.call(c)}}var s=Ya(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=s,e[dt]=s.current,Er(e.nodeType===8?e.parentNode:e),nn(function(){mo(t,s,n,r)}),s}function vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Ji(l);a.call(s)}}mo(t,l,e,i)}else l=qh(n,t,e,i,r);return Ji(l)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(va(t,n|1),Ce(t,J()),!(R&6)&&(Rn=J()+500,Ut()))}break;case 13:nn(function(){var r=ft(e,1);if(r!==null){var i=ve();Ke(r,e,1,i)}}),Xa(e,1)}};wa=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Ke(t,e,134217728,n)}Xa(e,134217728)}};yc=function(e){if(e.tag===13){var t=It(e),n=ft(e,t);if(n!==null){var r=ve();Ke(n,e,t,r)}Xa(e,t)}};vc=function(){return D};wc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};vl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ao(r);if(!i)throw Error(k(90));Yu(r),dl(r,i)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};oc=qa;lc=nn;var Gh={usingClientEntryPoint:!1,Events:[Wr,mn,ao,rc,ic,qa]},Zn={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{ro=ai.inject(Qh),tt=ai}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gh;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ja(t))throw Error(k(200));return Vh(e,t,null,n)};Te.createRoot=function(e,t){if(!Ja(e))throw Error(k(299));var n=!1,r="",i=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Za(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return nn(e)};Te.hydrate=function(e,t,n){if(!yo(t))throw Error(k(200));return vo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ja(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ud(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new go(t)};Te.render=function(e,t,n){if(!yo(t))throw Error(k(200));return vo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!yo(e))throw Error(k(40));return e._reactRootContainer?(nn(function(){vo(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Te.unstable_batchedUpdates=qa;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return vo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),Bu.exports=Te;var Kh=Bu.exports,pu=Kh;il.createRoot=pu.createRoot,il.hydrateRoot=pu.hydrateRoot;var H="-ms-",gr="-moz-",O="-webkit-",Hd="comm",wo="rule",es="decl",Yh="@import",Xh="@namespace",Vd="@keyframes",Zh="@layer",bd=Math.abs,ts=String.fromCharCode,Xl=Object.assign;function Jh(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function qd(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Ci(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function rn(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Gd(e){return e.length}function ir(e,t){return t.push(e),e}function em(e,t){return e.map(t).join("")}function hu(e,t){return e.filter(function(n){return!ot(n,t)})}var xo=1,Fn=1,Qd=0,Ue=0,te=0,Hn="";function ko(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:xo,column:Fn,length:l,return:"",siblings:a}}function wt(e,t){return Xl(ko("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sn(e){for(;e.root;)e=wt(e.root,{children:[e]});ir(e,e.siblings)}function tm(){return te}function nm(){return te=Ue>0?oe(Hn,--Ue):0,Fn--,te===10&&(Fn=1,xo--),te}function Ye(){return te=Ue<Qd?oe(Hn,Ue++):0,Fn++,te===10&&(Fn=1,xo++),te}function Et(){return oe(Hn,Ue)}function Ei(){return Ue}function $o(e,t){return rn(Hn,e,t)}function Rr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rm(e){return xo=Fn=1,Qd=qe(Hn=e),Ue=0,[]}function im(e){return Hn="",e}function Xo(e){return qd($o(Ue-1,Zl(e===91?e+2:e===40?e+1:e)))}function om(e){for(;(te=Et())&&te<33;)Ye();return Rr(e)>2||Rr(te)>3?"":" "}function lm(e,t){for(;--t&&Ye()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return $o(e,Ei()+(t<6&&Et()==32&&Ye()==32))}function Zl(e){for(;Ye();)switch(te){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Zl(te);break;case 40:e===41&&Zl(e);break;case 92:Ye();break}return Ue}function am(e,t){for(;Ye()&&e+te!==57;)if(e+te===84&&Et()===47)break;return"/*"+$o(t,Ue-1)+"*"+ts(e===47?e:Ye())}function sm(e){for(;!Rr(Et());)Ye();return $o(e,Ue)}function um(e){return im(zi("",null,null,null,[""],e=rm(e),0,[0],e))}function zi(e,t,n,r,i,o,l,a,s){for(var c=0,p=0,h=l,m=0,x=0,y=0,$=1,L=1,d=1,u=0,f="",v=i,_=o,E=r,w=f;L;)switch(y=u,u=Ye()){case 40:if(y!=108&&oe(w,h-1)==58){Ci(w+=I(Xo(u),"&","&\f"),"&\f",bd(c?a[c-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:w+=Xo(u);break;case 9:case 10:case 13:case 32:w+=om(y);break;case 92:w+=lm(Ei()-1,7);continue;case 47:switch(Et()){case 42:case 47:ir(cm(am(Ye(),Ei()),t,n,s),s),(Rr(y||1)==5||Rr(Et()||1)==5)&&qe(w)&&rn(w,-1,void 0)!==" "&&(w+=" ");break;default:w+="/"}break;case 123*$:a[c++]=qe(w)*d;case 125*$:case 59:case 0:switch(u){case 0:case 125:L=0;case 59+p:d==-1&&(w=I(w,/\f/g,"")),x>0&&(qe(w)-h||$===0&&y===47)&&ir(x>32?gu(w+";",r,n,h-1,s):gu(I(w," ","")+";",r,n,h-2,s),s);break;case 59:w+=";";default:if(ir(E=mu(w,t,n,c,p,i,a,f,v=[],_=[],h,o),o),u===123)if(p===0)zi(w,t,E,E,v,o,h,a,_);else{switch(m){case 99:if(oe(w,3)===110)break;case 108:if(oe(w,2)===97)break;default:p=0;case 100:case 109:case 115:}p?zi(e,E,E,r&&ir(mu(e,E,E,0,0,i,a,f,i,v=[],h,_),_),i,_,h,a,r?v:_):zi(w,E,E,E,[""],_,0,a,_)}}c=p=x=0,$=d=1,f=w="",h=l;break;case 58:h=1+qe(w),x=y;default:if($<1){if(u==123)--$;else if(u==125&&$++==0&&nm()==125)continue}switch(w+=ts(u),u*$){case 38:d=p>0?1:(w+="\f",-1);break;case 44:a[c++]=(qe(w)-1)*d,d=1;break;case 64:Et()===45&&(w+=Xo(Ye())),m=Et(),p=h=qe(f=w+=sm(Ei())),u++;break;case 45:y===45&&qe(w)==2&&($=0)}}return o}function mu(e,t,n,r,i,o,l,a,s,c,p,h){for(var m=i-1,x=i===0?o:[""],y=Gd(x),$=0,L=0,d=0;$<r;++$)for(var u=0,f=rn(e,m+1,m=bd(L=l[$])),v=e;u<y;++u)(v=qd(L>0?x[u]+" "+f:I(f,/&\f/g,x[u])))&&(s[d++]=v);return ko(e,t,n,i===0?wo:a,s,c,p,h)}function cm(e,t,n,r){return ko(e,t,n,Hd,ts(tm()),rn(e,2,-2),0,r)}function gu(e,t,n,r,i){return ko(e,t,n,es,rn(e,0,r),rn(e,r+1,-1),r,i)}function Kd(e,t,n){switch(Jh(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return gr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+gr+e+H+e+e;case 5936:switch(oe(e,t+11)){case 114:return O+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+H+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+H+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+H+e+e;case 6165:return O+e+H+"flex-"+e+e;case 5187:return O+e+I(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return O+e+H+"flex-item-"+I(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":H+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return O+e+H+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+H+I(e,"shrink","negative")+e;case 5292:return O+e+H+I(e,"basis","preferred-size")+e;case 6060:return O+"box-"+I(e,"-grow","")+O+e+H+I(e,"grow","positive")+e;case 4554:return O+I(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+H+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!ot(e,/flex-|baseline/))return H+"grid-column-align"+rn(e,t)+e;break;case 2592:case 3360:return H+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ot(r.props,/grid-\w+-end/)})?~Ci(e+(n=n[t].value),"span",0)?e:H+I(e,"-start","")+e+H+"grid-row-span:"+(~Ci(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":H+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:H+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+gr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ci(e,"stretch",0)?Kd(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return H+i+":"+o+c+(l?H+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(oe(e,t+6)===121)return I(e,":",":"+O)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(oe(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+H+"$2box$3")+e;case 100:return I(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function eo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function dm(e,t,n,r){switch(e.type){case Zh:if(e.children.length)break;case Yh:case Xh:case es:return e.return=e.return||e.value;case Hd:return"";case Vd:return e.return=e.value+"{"+eo(e.children,r)+"}";case wo:if(!qe(e.value=e.props.join(",")))return""}return qe(n=eo(e.children,r))?e.return=e.value+"{"+n+"}":""}function fm(e){var t=Gd(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function pm(e){return function(t){t.root||(t=t.return)&&e(t)}}function hm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case es:e.return=Kd(e.value,e.length,n);return;case Vd:return eo([wt(e,{value:I(e.value,"@","@"+O)})],r);case wo:if(e.length)return em(n=e.props,function(i){switch(ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(wt(e,{props:[I(i,/:(read-\w+)/,":"+gr+"$1")]})),sn(wt(e,{props:[i]})),Xl(e,{props:hu(n,r)});break;case"::placeholder":sn(wt(e,{props:[I(i,/:(plac\w+)/,":"+O+"input-$1")]})),sn(wt(e,{props:[I(i,/:(plac\w+)/,":"+gr+"$1")]})),sn(wt(e,{props:[I(i,/:(plac\w+)/,H+"input-$1")]})),sn(wt(e,{props:[i]})),Xl(e,{props:hu(n,r)});break}return""})}}var jn={},Zo,Jo;const On=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",Yd="active",Xd="data-styled-version",So="6.4.2",ns=`/*!sc*/
`,yr=typeof window<"u"&&typeof document<"u";function yu(e){if(typeof process<"u"&&jn!==void 0){const t=jn[e];if(t!==void 0&&t!=="")return t!=="false"}}const mm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Jo=(Zo=yu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Zo!==void 0?Zo:yu("SC_DISABLE_SPEEDY"))!==null&&Jo!==void 0?Jo:typeof process<"u"&&jn!==void 0&&!1),gm="sc-keyframes-",ym={};function An(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let ji=new Map,to=new Map,Pi=1;const si=e=>{if(ji.has(e))return ji.get(e);for(;to.has(Pi);)Pi++;const t=Pi++;return ji.set(e,t),to.set(t,e),t},vm=e=>to.get(e),wm=(e,t)=>{Pi=t+1,ji.set(e,t),to.set(t,e)},rs=Object.freeze([]),Dn=Object.freeze({});function Zd(e,t,n=Dn){return e.theme!==n.theme&&e.theme||t||n.theme}const xm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,km=/(^-|-$)/g;function Jd(e){return e.replace(xm,"-").replace(km,"")}const $m=/(a)(d)/gi,vu=e=>String.fromCharCode(e+(e>25?39:97));function ef(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=vu(t%52)+n;return(vu(t%52)+n).replace($m,"$1-$2")}const Jl=5381,Xt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},tf=e=>Xt(Jl,e);function nf(e){return ef(tf(e)>>>0)}function Sm(e){return e.displayName||e.name||"Component"}function ea(e){return typeof e=="string"&&!0}function _m(e){return ea(e)?`styled.${e}`:`Styled(${Sm(e)})`}const rf=Symbol.for("react.memo"),Cm=Symbol.for("react.forward_ref"),Em={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},zm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},of={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jm={[Cm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[rf]:of};function wu(e){return("type"in(t=e)&&t.type.$$typeof)===rf?of:"$$typeof"in e?jm[e.$$typeof]:Em;var t}const Pm=Object.defineProperty,Nm=Object.getOwnPropertyNames,Tm=Object.getOwnPropertySymbols,Lm=Object.getOwnPropertyDescriptor,Im=Object.getPrototypeOf,Mm=Object.prototype;function lf(e,t,n){if(typeof t!="string"){const r=Im(t);r&&r!==Mm&&lf(e,r,n);const i=Nm(t).concat(Tm(t)),o=wu(e),l=wu(t);for(let a=0;a<i.length;++a){const s=i[a];if(!(s in zm||n&&n[s]||l&&s in l||o&&s in o)){const c=Lm(t,s);try{Pm(e,s,c)}catch{}}}}return e}function Vn(e){return typeof e=="function"}const Rm=Symbol.for("react.forward_ref");function is(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Rm&&"styledComponentId"in e}function or(e,t){return e&&t?e+" "+t:e||t||""}function ta(e,t){return e.join("")}function Fr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function na(e,t,n=!1){if(!n&&!Fr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=na(e[r],t[r]);else if(Fr(t))for(const r in t)e[r]=na(e[r],t[r]);return e}function af(e,t){Object.defineProperty(e,"toString",{value:t})}const Fm=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const i=this.groupSizes,o=i.length;let l=o;for(;e>=l;)if(l<<=1,l<0)throw An(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(let a=o;a<l;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,o=t.length;i<o;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let o=r;o<i;o++)t+=this.tag.getRule(o)+ns;return t}},Om=`style[${On}][${Xd}="${So}"]`,Am=new RegExp(`^${On}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),xu=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ra=e=>{if(!e)return document;if(xu(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(xu(t))return t}return document},Dm=(e,t,n)=>{const r=n.split(",");let i;for(let o=0,l=r.length;o<l;o++)(i=r[o])&&e.registerName(t,i)},Um=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ns),i=[];for(let o=0,l=r.length;o<l;o++){const a=r[o].trim();if(!a)continue;const s=a.match(Am);if(s){const c=0|parseInt(s[1],10),p=s[2];c!==0&&(wm(p,c),Dm(e,p,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}},el=e=>{const t=ra(e.options.target).querySelectorAll(Om);for(let n=0,r=t.length;n<r;n++){const i=t[n];i&&i.getAttribute(On)!==Yd&&(Um(e,i),i.parentNode&&i.parentNode.removeChild(i))}};let Jn=!1;function Wm(){if(Jn!==!1)return Jn;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Jn=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Jn=t.getAttribute("content")||void 0}return Jn=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const sf=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),o=(s=>{const c=Array.from(s.querySelectorAll(`style[${On}]`));return c[c.length-1]})(r),l=o!==void 0?o.nextSibling:null;i.setAttribute(On,Yd),i.setAttribute(Xd,So);const a=t||Wm();return a&&i.setAttribute("nonce",a),r.insertBefore(i,l),i},Bm=class{constructor(e,t){this.element=sf(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let o=0,l=i.length;o<l;o++){const a=i[o];if(a.ownerNode===n)return a}throw An(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Hm=class{constructor(e,t){this.element=sf(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let ku=yr;const Vm={isServer:!yr,useCSSOMInjection:!mm};class Hr{static registerId(t){return si(t)}constructor(t=Dn,n={},r){this.options=Object.assign(Object.assign({},Vm),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&yr&&ku&&(ku=!1,el(this)),af(this,()=>(i=>{const o=i.getTag(),{length:l}=o;let a="";for(let s=0;s<l;s++){const c=vm(s);if(c===void 0)continue;const p=i.names.get(c);if(p===void 0||!p.size)continue;const h=o.getGroup(s);if(h.length===0)continue;const m=On+".g"+s+'[id="'+c+'"]';let x="";for(const y of p)y.length>0&&(x+=y+",");a+=h+m+'{content:"'+x+'"}'+ns}return a})(this))}rehydrate(){!this.server&&yr&&el(this)}reconstructWithOptions(t,n=!0){const r=new Hr(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&yr&&t.target!==this.options.target&&ra(this.options.target)!==ra(t.target)&&el(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:i})=>n?new Bm(r,i):new Hm(r,i))(this.options),new Fm(t)));var t}hasNameForId(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i}registerName(t,n){si(t),t.startsWith(gm)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(si(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(si(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const uf=new WeakSet,bm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qm(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in bm||e.startsWith("--")?String(t).trim():t+"px"}const bt=47;function $u(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Gm=Symbol.for("sc-keyframes");function Qm(e){return typeof e=="object"&&e!==null&&Gm in e}function cf(e){return Vn(e)&&!(e.prototype&&e.prototype.isReactComponent)}const df=e=>e==null||e===!1||e==="",Km=Symbol.for("react.client.reference");function Su(e){return e.$$typeof===Km}function ff(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!df(r)&&(Array.isArray(r)&&uf.has(r)||Vn(r)?t.push($u(n)+":",r,";"):Fr(r)?(t.push(n+" {"),ff(r,t),t.push("}")):t.push($u(n)+": "+qm(n,r)+";"))}}function Rt(e,t,n,r,i=[]){if(df(e))return i;const o=typeof e;if(o==="string")return i.push(e),i;if(o==="function"){if(Su(e))return i;if(cf(e)&&t){const l=e(t);return Rt(l,t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Rt(e[l],t,n,r,i);return i}return is(e)?(i.push(`.${e.styledComponentId}`),i):Qm(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Su(e)?i:Fr(e)?e.toString!==Object.prototype.toString?(i.push(e.toString()),i):(ff(e,i),i):(i.push(e.toString()),i)}const Ym=tf(So);class Xm{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=Xt(Ym,n),this.baseStyle=r,Hr.registerId(n)}generateAndInjectStyles(t,n,r){let i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let o="";for(let l=0;l<this.rules.length;l++){const a=this.rules[l];if(typeof a=="string")o+=a;else if(a)if(cf(a)){const s=a(t);typeof s=="string"?o+=s:s!=null&&s!==!1&&(o+=ta(Rt(s,t,n,r)))}else o+=ta(Rt(a,t,n,r))}if(o){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+o:o;let a=this.dynamicNameCache.get(l);if(!a){if(a=ef(Xt(Xt(this.baseHash,r.hash),o)>>>0),this.dynamicNameCache.size>=200){const s=this.dynamicNameCache.keys().next().value;s!==void 0&&this.dynamicNameCache.delete(s)}this.dynamicNameCache.set(l,a)}if(!n.hasNameForId(this.componentId,a)){const s=r(o,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=or(i,a)}}return i}}const Zm=/&/g;function pf(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function tl(e){const t=e.length;let n="",r=0,i=0,o=0,l=!1,a=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(o!==0||l||c!==bt||e.charCodeAt(s+1)!==42)if(l)c===42&&e.charCodeAt(s+1)===bt&&(l=!1,s++);else if(c!==34&&c!==39||pf(e,s)){if(o===0)if(c===123)i++;else if(c===125){if(i--,i<0){a=!0;let p=s+1;for(;p<t;){const h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,i=0,s=p-1,r=p;continue}i===0&&(n+=e.substring(r,s+1),r=s+1)}else c===59&&i===0&&(n+=e.substring(r,s+1),r=s+1)}else o===0?o=c:o===c&&(o=0);else l=!0,s++}return a||i!==0||o!==0?(r<t&&i===0&&o===0&&(n+=e.substring(r)),n):e}function hf(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const o=e[i];if(o.type==="rule"){o.value=(n+o.value).replaceAll(",",r);const l=o.props,a=[];for(let s=0;s<l.length;s++)a[s]=n+l[s];o.props=a}Array.isArray(o.children)&&o.type!=="@keyframes"&&hf(o.children,t)}return e}function Jm({options:e=Dn,plugins:t=rs}=Dn){let n,r,i;const o=(m,x,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:m,l=t.slice();l.push(m=>{m.type===wo&&m.value.includes("&")&&(i||(i=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(Zm,r).replace(i,o))}),e.prefix&&l.push(hm),l.push(dm);let a=[];const s=fm(l.concat(pm(m=>a.push(m)))),c=(m,x="",y="",$="&")=>{n=$,r=x,i=void 0;const L=function(u){const f=u.indexOf("//")!==-1,v=u.indexOf("}")!==-1;if(!f&&!v)return u;if(!f)return tl(u);const _=u.length;let E="",w=0,C=0,A=0,T=0,b=0,We=!1;for(;C<_;){const Y=u.charCodeAt(C);if(Y!==34&&Y!==39||pf(u,C))if(A===0)if(Y===bt&&C+1<_&&u.charCodeAt(C+1)===42){for(C+=2;C+1<_&&(u.charCodeAt(C)!==42||u.charCodeAt(C+1)!==bt);)C++;C+=2}else if(Y!==40)if(Y!==41)if(T>0)C++;else if(Y===42&&C+1<_&&u.charCodeAt(C+1)===bt)E+=u.substring(w,C),C+=2,w=C,We=!0;else if(Y===bt&&C+1<_&&u.charCodeAt(C+1)===bt){for(E+=u.substring(w,C);C<_&&u.charCodeAt(C)!==10;)C++;w=C,We=!0}else Y===123?b++:Y===125&&b--,C++;else T>0&&T--,C++;else T++,C++;else C++;else A===0?A=Y:A===Y&&(A=0),C++}return We?(w<_&&(E+=u.substring(w)),b===0?E:tl(E)):b===0?u:tl(u)}(m);let d=um(y||x?y+" "+x+" { "+L+" }":L);return e.namespace&&(d=hf(d,e.namespace)),a=[],eo(d,s),a},p=e;let h=Jl;for(let m=0;m<t.length;m++)t[m].name||An(15),h=Xt(h,t[m].name);return p!=null&&p.namespace&&(h=Xt(h,p.namespace)),p!=null&&p.prefix&&(h=Xt(h,"p")),c.hash=h!==Jl?h.toString():"",c}const eg=new Hr,tg=Jm(),mf=he.createContext({shouldForwardProp:void 0,styleSheet:eg,stylis:tg,stylisPlugins:void 0});mf.Consumer;function gf(){return he.useContext(mf)}const Or=he.createContext(void 0);Or.Consumer;function ng(e){const t=he.useContext(Or),n=he.useMemo(()=>function(r,i){if(!r)throw An(14);if(Vn(r))return r(i);if(Array.isArray(r)||typeof r!="object")throw An(8);return i?Object.assign(Object.assign({},i),r):r}(e.theme,t),[e.theme,t]);return e.children?he.createElement(Or.Provider,{value:n},e.children):null}const _u=Object.prototype.hasOwnProperty,nl={};function rg(e,t){const n=typeof e!="string"?"sc":Jd(e);nl[n]=(nl[n]||0)+1;const r=n+"-"+nf(So+n+nl[n]);return t?t+"-"+r:r}function ig(e,t,n){const r=is(e),i=e,o=!ea(e),{attrs:l=rs,componentId:a=rg(t.displayName,t.parentComponentId),displayName:s=_m(e)}=t,c=t.displayName&&t.componentId?Jd(t.displayName)+"-"+t.componentId:t.componentId||a,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:h}=t;if(r&&i.shouldForwardProp){const $=i.shouldForwardProp;if(t.shouldForwardProp){const L=t.shouldForwardProp;h=(d,u)=>$(d,u)&&L(d,u)}else h=$}const m=new Xm(n,c,r?i.componentStyle:void 0);function x($,L){return function(d,u,f){const{attrs:v,componentStyle:_,defaultProps:E,foldedComponentIds:w,styledComponentId:C,target:A}=d,T=he.useContext(Or),b=gf(),We=d.shouldForwardProp||b.shouldForwardProp,Y=Zd(u,T,E)||Dn;let Be,Wt;{const P=he.useRef(null),N=P.current;if(N!==null&&N[1]===Y&&N[2]===b.styleSheet&&N[3]===b.stylis&&N[7]===_&&function(U,F,re){const X=U,ee=F;let Ee=0;for(const Ie in ee)if(_u.call(ee,Ie)&&(Ee++,X[Ie]!==ee[Ie]))return!1;return Ee===re}(N[0],u,N[4]))Be=N[5],Wt=N[6];else{Be=function(F,re,X){const ee=Object.assign(Object.assign({},re),{className:void 0,theme:X}),Ee=F.length>1;for(let Ie=0;Ie<F.length;Ie++){const _o=F[Ie],Vr=Vn(_o)?_o(Ee?Object.assign({},ee):ee):_o;for(const yt in Vr)yt==="className"?ee.className=or(ee.className,Vr[yt]):yt==="style"?ee.style=Object.assign(Object.assign({},ee.style),Vr[yt]):yt in re&&re[yt]===void 0||(ee[yt]=Vr[yt])}return"className"in re&&typeof re.className=="string"&&(ee.className=or(ee.className,re.className)),ee}(v,u,Y),Wt=function(F,re,X,ee){return F.generateAndInjectStyles(re,X,ee)}(_,Be,b.styleSheet,b.stylis);let U=0;for(const F in u)_u.call(u,F)&&U++;P.current=[u,Y,b.styleSheet,b.stylis,U,Be,Wt,_]}}const gt=Be.as||A,Bt=function(P,N,U,F){const re={};for(const X in P)P[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&P.theme===U||(X==="forwardedAs"?re.as=P.forwardedAs:F&&!F(X,N)||(re[X]=P[X]));return re}(Be,gt,Y,We);let z=or(w,C);return Wt&&(z+=" "+Wt),Be.className&&(z+=" "+Be.className),Bt[ea(gt)&&gt.includes("-")?"class":"className"]=z,f&&(Bt.ref=f),ht.createElement(gt,Bt)}(y,$,L)}x.displayName=s;let y=he.forwardRef(x);return y.attrs=p,y.componentStyle=m,y.displayName=s,y.shouldForwardProp=h,y.foldedComponentIds=r?or(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=c,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=r?function(L,...d){for(const u of d)na(L,u,!0);return L}({},i.defaultProps,$):$}}),af(y,()=>`.${y.styledComponentId}`),o&&lf(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var og=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Cu(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const Eu=e=>(uf.add(e),e);function yf(e,...t){if(Vn(e)||Fr(e))return Eu(Rt(Cu(rs,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Rt(n):Eu(Rt(Cu(n,t)))}function ia(e,t,n=Dn){if(!t)throw An(1,t);const r=(i,...o)=>e(t,n,yf(i,...o));return r.attrs=i=>ia(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)})),r.withConfig=i=>ia(e,t,Object.assign(Object.assign({},n),i)),r}const vf=e=>ia(ig,e),S=vf;og.forEach(e=>{S[e]=vf(e)});class lg{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let i=0;i<r.length;i+=1){const o=r[i];if(Vn(o)&&!is(o))return!1}return!0}(t),Hr.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,i){const o=this.componentId;if(this.isStatic){if(r.hasNameForId(o,o+t))this.instanceRules.has(t)||this.computeRules(t,n,r,i);else{const a=this.computeRules(t,n,r,i);r.insertRules(o,a.name,a.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,i),!r.server&&l){const a=l.rules,s=this.instanceRules.get(t).rules;if(a.length===s.length){let c=!0;for(let p=0;p<a.length;p++)if(a[p]!==s[p]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,i){const o=ta(Rt(this.rules,n,r,i)),l={name:this.componentId+t,rules:i(o,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function ag(e,...t){const n=yf(e,...t),r=`sc-global-${nf(JSON.stringify(n))}`,i=new lg(n,r),o=a=>{const s=gf(),c=he.useContext(Or);let p;{const h=he.useRef(null);h.current===null&&(h.current=s.styleSheet.allocateGSInstance(r)),p=h.current}s.styleSheet.server&&l(p,a,s.styleSheet,c,s.stylis);{const h=i.isStatic?[p,s.styleSheet,i]:[p,a,s.styleSheet,c,s.stylis,i],m=he.useRef(i);he.useLayoutEffect(()=>{s.styleSheet.server||(m.current!==i&&(s.styleSheet.clearRules(r),m.current=i),l(p,a,s.styleSheet,c,s.stylis))},h),he.useLayoutEffect(()=>()=>{s.styleSheet.server||i.removeStyles(p,s.styleSheet)},[p,s.styleSheet,i])}return s.styleSheet.server&&i.instanceRules.delete(p),null};function l(a,s,c,p,h){if(i.isStatic)i.renderStyles(a,ym,c,h);else{const m=Object.assign(Object.assign({},s),{theme:Zd(s,p,o.defaultProps)});i.renderStyles(a,m,c,h)}}return he.memo(o)}const un={color:{primary:"#2C1E16",primaryLight:"#4A3525",primaryDark:"#1A120D",accent:"#C19A6B",accentLight:"#D4B591",accentDark:"#A88154",leather:"#8B5A2B",light:"#F4EFEA",success:"#2E7D32",error:"#D32F2F",warning:"#ED6C02",info:"#0288D1",neutral:{0:"#FFFFFF",50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},background:"#F4EFEA",surface:"#FFFFFF",overlay:"rgba(0, 0, 0, 0.4)",border:"rgba(193, 154, 107, 0.4)",text:"#2C1E16",textSecondary:"#4A3525",textTertiary:"#616161",textInverse:"#FFFFFF"},typography:{fontFamily:{title:"'Milonga', serif",sans:"'Inter', sans-serif"},size:{xxs:"0.625rem",xs:"0.6875rem",sm:"0.8125rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","2xlMinus2":"1.375rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.2,snug:1.375,normal:1.5}},radius:{sm:"6px",md:"10px",lg:"14px",xl:"20px","2xl":"28px",full:"9999px"},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},layout:{screenPaddingH:"1.25rem",maxContentWidth:"80rem",headerHeight:"72px"},breakpoints:{xs:"340px",sm:"480px",md:"768px",lg:"1024px",xl:"1280px"}},sg={color:un.color,radius:un.radius,typography:un.typography,spacing:un.spacing,layout:un.layout,breakpoints:un.breakpoints},ug=ag`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme:e})=>e.color.background};
    color: ${({theme:e})=>e.color.text};
    font-family: ${({theme:e})=>e.typography.fontFamily.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ::selection {
    background-color: ${({theme:e})=>e.color.leather};
    color: white;
  }
`,cg=({children:e})=>g.jsxs(ng,{theme:sg,children:[g.jsx(ug,{}),e]}),dg={nav_experience:{es:"La Experiencia",en:"The Experience"},nav_location:{es:"Ubicación",en:"Location"},nav_reserve:{es:"Reservar Ahora",en:"Book Now"},hero_badge:{es:"Magdalena, Buenos Aires",en:"Magdalena, Buenos Aires"},hero_title_1:{es:"Viví una",en:"Live a"},hero_title_2:{es:"experiencia criolla",en:"cultural criollo"},hero_title_3:{es:"cultural en Magdalena",en:"experience in Magdalena"},hero_desc:{es:"Traslado opcional desde tu hotel o residencia, costillar al asador, fotos con caballos, destreza gaucha y folclore.",en:"Optional round-trip transfer from your hotel or residence, traditional asado, photos with horses, gaucho skills and folklore."},hero_cta:{es:"Asegurá tu lugar",en:"Secure your spot"},hero_cta_subtext:{es:"Experimentá un día criollo en una posta tradicional de Magdalena",en:"Experience a traditional criollo day at a Magdalena posta"},services_title:{es:"¿Qué incluye la jornada?",en:"What is included?"},services_subtitle:{es:"Una experiencia inmersiva de principio a fin. Mimetizate con el verdadero gaucho argentino tradicional.",en:"An immersive experience from start to finish. Immerse yourself in the life of a true traditional Argentine gaucho."},service_tradition_title:{es:"Historia y Tradición",en:"History & Tradition"},service_tradition_desc:{es:"Compartimos la historia de los gauchos y de Magdalena, ciudad con raíz de pueblo, para entender la tradición antes de vivir la posta.",en:"We share the history of the gauchos and Magdalena, a city with town roots, so guests understand the tradition before living the posta."},service_horse_title:{es:"Foto a Caballo",en:"Horse Photo"},service_horse_desc:{es:"Montá para sacarte fotos vestido de gaucho/a y, si el equipo lo habilita, dar unos pasos guiados en el predio.",en:"Mount a horse for photos in gaucho attire and, if the team allows it, take a few guided steps on the grounds."},service_asado_title:{es:"El Gran Asado",en:"The Great Barbecue"},service_asado_desc:{es:"Gauchos cocinando costillar al asador al estilo criollo, bien campero y tradicional. Vas a poder ver la preparación y el fuego de cerca.",en:"Gauchos cook ribs on the asador in a rustic, traditional criollo style. Guests can watch the preparation and the fire up close."},service_folklore_title:{es:"Folclore",en:"Folklore"},service_folklore_desc:{es:"Escuchá música, mirá bailar e intentá algunos pasos de folclore con la ayuda de los gauchos.",en:"Listen to the music, watch the dancing, and try a few folklore steps with help from the gauchos."},service_dress_title:{es:"Vestirse de gaucho/a",en:"Dress as a Gaucho"},service_dress_desc:{es:"Te prestamos prendas criollas para sacarte fotos en la posta, junto a gauchos reales y montado/a a caballo.",en:"Wear traditional criollo clothing and take photos at the posta, alongside real gauchos and mounted on a horse."},service_skills_title:{es:"Destreza gaucha",en:"Gaucho Skills"},service_skills_desc:{es:"Demostraciones de habilidades gauchas con el caballo realizadas por el equipo local, en un entorno controlado y sin cabalgata.",en:"Watch local gauchos demonstrate horse-handling skills in a controlled setting, without a trail ride."},service_media_title:{es:"Fotos y dron",en:"Photos & Drone"},service_media_desc:{es:"En las actividades al aire libre vamos a registrar ciertos momentos con dron y compartir el material por Google Drive.",en:"During outdoor activities, we capture selected moments with a drone and share the media through Google Drive."},multimedia_title:{es:"Tus recuerdos, desde el aire.",en:"Your memories, from above."},multimedia_text:{es:"Sabemos que es una experiencia única. Por eso, documentamos tu día con calidad cinematográfica para que te quede de recuerdo para siempre.",en:"We know this is a unique experience. That's why we document your day with cinematic quality so you can have a forever memory."},multimedia_item_1:{es:"Fotógrafo profesional cubriendo toda la jornada.",en:"Professional photographer covering the whole day."},multimedia_item_2:{es:"Filmaciones con dron de momentos al aire libre, según clima y condiciones.",en:"Drone footage of outdoor moments, depending on weather and conditions."},multimedia_item_3:{es:"Edición premium lista a los pocos días.",en:"Premium editing ready within a few days."},multimedia_item_4:{es:"Carpeta pública en Google Drive para descargar y compartir.",en:"Public Google Drive folder to download and share."},multimedia_visual_title:{es:"Contenido listo para brillar",en:"Content ready to shine"},multimedia_visual_subtitle:{es:"Material en alta calidad directo a tu Google Drive, ideal para redes sociales.",en:"High-quality material direct to your Google Drive, ideal for social media."},location_title_intro:{es:"Vas a pasar tu día en la",en:"You will spend your day at"},location_title_place:{es:'"Agrupación Tradicionalista Gauchos de Magdalena"',en:'"Agrupación Tradicionalista Gauchos de Magdalena"'},location_cta:{es:"Abrir en Google Maps",en:"Open in Google Maps"},pricing_title:{es:"Asegurá tu experiencia",en:"Secure your experience"},pricing_subtitle:{es:"Servicio completo con actividades criollas, almuerzo, multimedia y traslado opcional.",en:"A complete service with criollo activities, lunch, media coverage, and optional transfer."},pricing_badge:{es:"Paquete Único",en:"Single Package"},pricing_card_title:{es:"Experiencia Gaucha Criolla",en:"Gaucho Criollo Experience"},pricing_card_venue:{es:"Agrupación Tradicionalista Gauchos de Magdalena",en:"Agrupación Tradicionalista Gauchos de Magdalena"},pricing_feature_1:{es:"Traslado ida y vuelta desde hotel o residencia disponible como opcional.",en:"Optional round-trip transfer from your hotel or residence."},pricing_feature_2:{es:"Almuerzo libre: Costillar y bebidas.",en:"Open lunch: Traditional BBQ and drinks."},pricing_feature_3:{es:"Historia, folclore, vestimenta criolla, fotos a caballo y destreza gaucha.",en:"History, folklore, criollo attire, horse photos, and gaucho skills."},pricing_feature_4:{es:"Pack de Fotos y Dron vía Google Drive.",en:"Photo & Drone pack via Google Drive."},pricing_cta:{es:"Consultar Disponibilidad",en:"Check Availability"},floating_cta:{es:"Ver experiencia y opciones",en:"View experience options"},cta_roots:{es:"No dejes pasar la oportunidad de conectar con tus raíces.",en:"Don't miss the opportunity to connect with your roots."},cta_magic:{es:"Viví la verdadera magia de una posta gaucha argentina.",en:"Experience the true magic of an Argentine gaucho posta."},cta_history:{es:"Tu lugar en la historia te espera.",en:"Your place in history awaits you."},cta_join_us:{es:"Un día inolvidable te está esperando, ¿te sumás?",en:"An unforgettable day is waiting for you, will you join us?"},reviews_title:{es:"Voces de nuestra tierra",en:"Voices from our land"},review_1_text:{es:'"Una experiencia única. El costillar al asador fue lo mejor que probé en mi vida y las fotos vestidos de gaucho quedaron increíbles."',en:`"A unique experience. The barbecue was the best I've ever had and the photos in gaucho attire were incredible."`},review_1_author:{es:"Juan Manuel - Buenos Aires",en:"Juan Manuel - Buenos Aires"},review_2_text:{es:'"Llevamos a unos amigos del exterior y quedaron fascinados. La atención de los gauchos y el show de folclore son de primer nivel."',en:`"We took some friends from abroad and they were fascinated. The gauchos' attention and the folklore show are top-notch."`},review_2_author:{es:"Elena R. - Emprendedora",en:"Elena R. - Entrepreneur"},review_3_text:{es:'"Lo que más me gustó fue el material del dron. Tener un video profesional de la jornada es un recuerdo para siempre."',en:'"What I liked most was the drone footage. Having a professional video of the day is a memory for a lifetime."'},review_3_author:{es:"Ricardo G. - Turista",en:"Ricardo G. - Tourist"},faq_title:{es:"Preguntas Frecuentes",en:"Frequently Asked Questions"},faq_q1:{es:"¿Qué pasa si llueve o hay mal clima?",en:"What happens if it rains or the weather is bad?"},faq_a1:{es:"La prioridad es la seguridad. Si el clima impide las actividades al aire libre, reprogramamos o adaptamos la jornada según disponibilidad.",en:"Safety comes first. If weather prevents outdoor activities, we reschedule or adapt the day depending on availability."},faq_q2:{es:"¿Cuánto dura la experiencia completa?",en:"How long does the full experience last?"},faq_a2:{es:"Es una jornada de día completo. Si contratás traslado, calculá salir por la mañana y volver al atardecer.",en:"It is a full-day outing. If you book the transfer, expect a morning departure and an evening return."},faq_q3:{es:"¿Desde dónde salen los traslados?",en:"Where do transfers depart from?"},faq_a3:{es:"Coordinamos pickup en hotel, residencia o punto de encuentro según el grupo. Te confirmamos horario y dirección al reservar.",en:"We coordinate pickup at a hotel, residence, or meeting point depending on the group. Time and address are confirmed when booking."},faq_q4:{es:"¿La experiencia incluye ida y vuelta?",en:"Is round-trip transfer included?"},faq_a4:{es:"Ofrecemos traslado ida y vuelta como opción. Si venís por tu cuenta, lo coordinamos y evitás pagar ese servicio.",en:"We offer round-trip transfer as an option. If you arrive on your own, we coordinate it and you avoid paying for that service."},faq_q5:{es:"¿Necesito experiencia previa con caballos?",en:"Do I need previous experience with horses?"},faq_a5:{es:"No. No es una cabalgata: la actividad a caballo es para fotos y, como máximo, unos pasos guiados dentro del predio.",en:"No. This is not a trail ride: the horse activity is for photos and, at most, a few guided steps within the grounds."},faq_q6:{es:"¿Puedo participar si no quiero montar a caballo?",en:"Can I join if I do not want to ride?"},faq_a6:{es:"Sí. Podés mirar, sacarte fotos junto al caballo y sumarte al resto de las actividades.",en:"Yes. You can watch, take photos beside the horse, and join the rest of the activities."},faq_q7:{es:"¿La actividad con caballos es segura para niños?",en:"Is the horse activity safe for children?"},faq_a7:{es:"Sí, se adapta a la edad y al criterio del equipo. Los menores participan acompañados y con supervisión.",en:"Yes, it is adapted by age and staff judgment. Children participate accompanied and supervised."},faq_q8:{es:"¿Es apto para adultos mayores?",en:"Is it suitable for older adults?"},faq_a8:{es:"Sí, si pueden pasar un día al aire libre. Recomendamos avisar cualquier necesidad de movilidad, rodilla o espalda.",en:"Yes, if they are comfortable spending a day outdoors. Please mention mobility, knee, or back needs in advance."},faq_q9:{es:"¿Es accesible para silla de ruedas?",en:"Is it wheelchair accessible?"},faq_a9:{es:"El predio tiene terreno irregular. Consultanos antes de reservar para evaluar asistencia y recorrido posible.",en:"The grounds have uneven terrain. Please ask before booking so we can evaluate assistance and possible routes."},faq_q10:{es:"¿Qué ropa conviene llevar?",en:"What should I wear?"},faq_a10:{es:"Ropa cómoda que pueda ensuciarse, abrigo liviano por si refresca y calzado cerrado.",en:"Wear comfortable clothes that can get dusty, a light layer in case it cools down, and closed-toe shoes."},faq_q11:{es:"¿Hace falta llevar protector solar o repelente?",en:"Should I bring sunscreen or insect repellent?"},faq_a11:{es:"Sí. Recomendamos protector solar, gorra o sombrero, lentes y repelente, especialmente en primavera y verano.",en:"Yes. We recommend sunscreen, a cap or hat, sunglasses, and repellent, especially in spring and summer."},faq_q12:{es:"¿Incluye vestimenta criolla?",en:"Is traditional criollo clothing included?"},faq_a12:{es:"Sí, durante la jornada te prestamos elementos tradicionales como boina, faja y alpargatas según disponibilidad y talle.",en:"Yes, during the day we lend traditional items such as a beret, sash, and espadrilles depending on availability and size."},faq_q13:{es:"¿Qué incluye el almuerzo?",en:"What does lunch include?"},faq_a13:{es:"Asado criollo con costillar, acompañamientos y bebidas. Confirmamos el menú final al reservar.",en:"Traditional asado with ribs, sides, and drinks. We confirm the final menu when booking."},faq_q14:{es:"¿Hay opciones vegetarianas, veganas o sin TACC?",en:"Are vegetarian, vegan, or gluten-free options available?"},faq_a14:{es:"Sí. Avisanos al reservar para preparar una alternativa adecuada.",en:"Yes. Let us know when booking so we can prepare a suitable alternative."},faq_q15:{es:"¿Pueden adaptar el menú por alergias?",en:"Can the menu be adapted for allergies?"},faq_a15:{es:"Sí, necesitamos saberlo con anticipación. Si la alergia es severa, coordinamos detalles antes de confirmar.",en:"Yes, we need to know in advance. For severe allergies, we coordinate details before confirming."},faq_q16:{es:"¿Se sirve alcohol?",en:"Is alcohol served?"},faq_a16:{es:"Puede haber vino u otras bebidas para mayores de edad. También hay opciones sin alcohol.",en:"Wine or other drinks may be available for adults. Non-alcoholic options are also available."},faq_q17:{es:"¿En qué idiomas se realiza?",en:"What languages are available?"},faq_a17:{es:"Podemos acompañar en español e inglés. Para otros idiomas, consultanos disponibilidad.",en:"We can host in Spanish and English. For other languages, please ask about availability."},faq_q18:{es:"¿Tengo que llevar documentación?",en:"Do I need to bring ID?"},faq_a18:{es:"Para la experiencia local normalmente alcanza con la reserva. Turistas deben llevar su documentación personal de viaje.",en:"For the local experience, the booking is usually enough. Travelers should carry their personal travel documents."},faq_q19:{es:"¿Puedo llevar cámara o celular?",en:"Can I bring a camera or phone?"},faq_a19:{es:"Sí. También incluimos registro fotográfico y dron cuando el clima y la normativa lo permiten.",en:"Yes. We also include photo coverage and drone footage when weather and regulations allow it."},faq_q20:{es:"¿Cuándo recibo las fotos y videos?",en:"When will I receive the photos and videos?"},faq_a20:{es:"Te compartimos el material editado por Google Drive dentro de los días posteriores a la experiencia.",en:"We share the edited material via Google Drive in the days following the experience."},faq_q21:{es:"¿La experiencia puede ser privada?",en:"Can the experience be private?"},faq_a21:{es:"Sí, podemos personalizar horarios, traslados y dinámica para grupos privados.",en:"Yes, we can personalize schedules, transfers, and activities for private groups."},faq_q22:{es:"¿Cuál es la mejor época del año?",en:"What is the best time of year?"},faq_a22:{es:"Primavera y otoño suelen ser ideales por temperatura, pero la experiencia se puede disfrutar todo el año.",en:"Spring and fall are usually ideal for weather, but the experience can be enjoyed year-round."},faq_q23:{es:"¿Hay baños y lugar para cambiarse?",en:"Are restrooms and changing areas available?"},faq_a23:{es:"Sí, hay instalaciones básicas para pasar el día con comodidad.",en:"Yes, basic facilities are available so you can spend the day comfortably."},faq_q24:{es:"¿Cómo reservo y pago?",en:"How do I book and pay?"},faq_a24:{es:"Consultanos disponibilidad por WhatsApp. Te indicamos seña, medios de pago y confirmación de la fecha.",en:"Ask us about availability on WhatsApp. We will explain the deposit, payment methods, and date confirmation."},faq_q25:{es:"¿Qué pasa si necesito cancelar?",en:"What if I need to cancel?"},faq_a25:{es:"Avisanos cuanto antes. Las condiciones dependen de la anticipación y del tamaño del grupo.",en:"Let us know as soon as possible. Conditions depend on notice period and group size."},faq_q26:{es:"¿Puedo ir con equipaje?",en:"Can I bring luggage?"},faq_a26:{es:"Mejor viajar liviano. Si venís con valijas, avisanos antes para confirmar espacio en el traslado.",en:"It is best to travel light. If you have luggage, let us know in advance so we can confirm transfer space."}},wf=ht.createContext(void 0),fg=({children:e})=>{const[t,n]=ht.useState("es"),r=()=>{n(o=>o==="es"?"en":"es")},i=o=>{var l;return((l=dg[o])==null?void 0:l[t])||o};return g.jsx(wf.Provider,{value:{language:t,toggleLanguage:r,t:i},children:e})},rt=()=>{const e=ht.useContext(wf);if(e===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return e},pg="/VivenciaGaucha/assets/D%C3%8DA_DE_GAUCHO_160p-B8yKqdTS.png",hg=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
  flex: 1;
  margin-left: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    margin-left: 0;
  }
`,mg=S.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 50px;
    height: 50px;
  }
`,gg=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: 0;
  color: ${({theme:e})=>e.color.primary};
  min-width: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.xs}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
    letter-spacing: 0.05em;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,zu=S.span`
  display: block;
  white-space: nowrap;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,ju=S.span`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
    white-space: nowrap;
  }
`,xf=()=>g.jsxs(hg,{children:[g.jsx(mg,{src:pg,alt:"Agrupación Tradicionalista Gauchos de Magdalena"}),g.jsxs(gg,{children:[g.jsx(zu,{children:"Agrupación Tradicionalista"}),g.jsx(zu,{children:"Gauchos de Magdalena"}),g.jsx(ju,{children:"Agrupación Tradicionalista Gauchos"}),g.jsx(ju,{children:"de Magdalena"})]})]}),yg=S.header`
  background-color: ${({theme:e})=>`${e.color.background}F2`}; // 95% opacity
  backdrop-filter: blur(8px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,vg=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[2]}`};
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[2]};
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[6]}`};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[12]}`};
  }
`,wg=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,xg=S.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.primary};
  min-width: ${({theme:e})=>e.spacing[10]};
  min-height: calc(${({theme:e})=>e.spacing[8]} - ${({theme:e})=>e.spacing[1]});
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[2]}`};
  border-radius: ${({theme:e})=>e.radius.md};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: ${({theme:e})=>e.color.leather};
    color: ${({theme:e})=>e.color.leather};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
    padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,kg=S.span`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,$g=S.span`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: inline;
  }
`,Sg=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  margin-right: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,_g=S.nav`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
    gap: ${({theme:e})=>e.spacing[4]};
    align-items: center;
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,oa=S.a`
  text-decoration: none;
  color: ${({theme:e})=>e.color.primaryLight};
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: ${({theme:e})=>e.color.leather};
  }
`,kf=S.a`
  text-decoration: none;
  background-color: ${({theme:e})=>e.color.leather};
  color: ${({theme:e})=>e.color.textInverse};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.radius.md};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  white-space: nowrap;

  &:hover {
    background-color: ${({theme:e})=>e.color.primary};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[6]}`};
  }
`,Cg=S.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.color.background};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${({$isOpen:e})=>e?"400px":"0"};
  padding: ${({$isOpen:e,theme:t})=>e?`${t.spacing[6]} 0`:"0"};
  opacity: ${({$isOpen:e})=>e?"1":"0"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Eg=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding: 0 ${({theme:e})=>e.spacing[6]};
`,Pu=S(oa)`
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  padding-bottom: ${({theme:e})=>e.spacing[2]};
`,zg=S(kf)`
  text-align: center;
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.lg};
  
  &:active {
    transform: scale(0.95);
  }
`,jg=()=>{const[e,t]=ht.useState(!1),{language:n,toggleLanguage:r,t:i}=rt();return g.jsxs(yg,{children:[g.jsxs(vg,{children:[g.jsx(xf,{}),g.jsxs(wg,{children:[g.jsxs(xg,{onClick:r,"aria-label":"Cambiar idioma",children:[g.jsx(kg,{children:n==="es"?"EN":"ES"}),g.jsx($g,{children:n==="es"?"INGLÉS / ENGLISH":"ESPAÑOL / SPANISH"})]}),g.jsx(Sg,{onClick:()=>t(!e),"aria-label":"Abrir menú",children:g.jsx("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),g.jsxs(_g,{children:[g.jsx(oa,{href:"#experiencia",children:i("nav_experience")}),g.jsx(oa,{href:"#ubicacion",children:i("nav_location")}),g.jsx(kf,{href:"#reserva",children:i("nav_reserve")})]})]})]}),g.jsx(Cg,{$isOpen:e,children:g.jsxs(Eg,{children:[g.jsx(Pu,{href:"#experiencia",onClick:()=>t(!1),children:i("nav_experience")}),g.jsx(Pu,{href:"#ubicacion",onClick:()=>t(!1),children:i("nav_location")}),g.jsx(zg,{href:"#reserva",onClick:()=>t(!1),children:i("nav_reserve")})]})})]})},Pg="/VivenciaGaucha/assets/gaucho_background-vKtRrTMs.jpg",Ng=S.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({theme:e})=>`${e.spacing[20]} ${e.spacing[4]} ${e.spacing[10]}`};
  background-image: url(${Pg});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`,Tg=S.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Lg=S.span`
  color: ${({theme:e})=>e.color.neutral[0]};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.size.sm};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.neutral[0]};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[4]}`};
  border-radius: ${({theme:e})=>e.radius.full};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.base};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }
`,Ig=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.textInverse};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.1;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.size["4xl"]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["6xl"]};
  }
`,Mg=S.p`
  font-size: ${({theme:e})=>e.typography.size.lg};
  color: ${({theme:e})=>e.color.neutral[200]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  max-width: 42rem;
  font-weight: ${({theme:e})=>e.typography.weight.regular};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
  }
`,Rg=S.a`
  text-decoration: none;
  width: 100%;
  background-color: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.lg};
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;

  &:hover {
    background-color: ${({theme:e})=>e.color.neutral[0]};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: auto;
    padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[8]}`};
  }
`,Fg=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  color: ${({theme:e})=>e.color.textInverse};
  margin-top: ${({theme:e})=>e.spacing[6]};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  max-width: 42rem;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["4xl"]};
    margin-top: ${({theme:e})=>e.spacing[8]};
  }
`,Og=()=>{const{t:e}=rt();return g.jsx(Ng,{children:g.jsxs(Tg,{children:[g.jsx(Lg,{children:e("hero_badge")}),g.jsxs(Ig,{children:[e("hero_title_1")," ",g.jsx("br",{}),e("hero_title_2")," ",g.jsx("br",{}),e("hero_title_3")]}),g.jsx(Mg,{children:e("hero_desc")}),g.jsx(Rg,{href:"#reserva",children:e("hero_cta")}),g.jsx(Fg,{children:e("hero_cta_subtext")})]})})},Ag="/VivenciaGaucha/assets/tradicion-Cu9tyOwn.png",Nu="/VivenciaGaucha/assets/montando-eDBdKZ86.jpg",Dg="/VivenciaGaucha/assets/asado-gaucho-CU4oQUzu.png",lr="/VivenciaGaucha/assets/mate-CCVJ-M93.png",Ug="/VivenciaGaucha/assets/boina-CsrbcVef.jpg",Wg=S.section`
  padding: ${({theme:e})=>`${e.spacing[20]} ${e.spacing[4]}`};
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  scroll-margin-top: 4rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing[24]} ${e.spacing[12]}`};
  }
`,Bg=S.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing[12]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: ${({theme:e})=>e.spacing[16]};
  }
`,Hg=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.primary};
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,Vg=S.p`
  font-size: ${({theme:e})=>e.typography.size.lg};
  color: ${({theme:e})=>e.color.neutral[600]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,bg=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[10]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,qg=S.div`
  position: relative;
  background-image: url(${({$bgImage:e})=>e});
  background-size: cover;
  background-position: ${({$bgPosition:e})=>e||"center"};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border-top: 4px solid ${({theme:e})=>e.color.leather};
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[10]};
  }
`,Gg=S.div`
  position: relative;
  z-index: 2;
`,Qg=S.h3`
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.textInverse};
  margin-bottom: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
  }
`,Kg=S.p`
  font-size: ${({theme:e})=>e.typography.size.sm};
  color: ${({theme:e})=>e.color.neutral[200]};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Yg=[{titleKey:"service_tradition_title",descKey:"service_tradition_desc",image:Ag},{titleKey:"service_asado_title",descKey:"service_asado_desc",image:Dg},{titleKey:"service_folklore_title",descKey:"service_folklore_desc",image:lr},{titleKey:"service_dress_title",descKey:"service_dress_desc",image:Ug},{titleKey:"service_skills_title",descKey:"service_skills_desc",image:Nu,bgPosition:"center 20%"},{titleKey:"service_media_title",descKey:"service_media_desc",image:Nu,bgPosition:"center 20%"}],Xg=()=>{const{t:e}=rt();return g.jsxs(Wg,{id:"experiencia",children:[g.jsxs(Bg,{children:[g.jsx(Hg,{children:e("services_title")}),g.jsx(Vg,{children:e("services_subtitle")})]}),g.jsx(bg,{children:Yg.map(t=>g.jsx(qg,{$bgImage:t.image,$bgPosition:t.bgPosition,children:g.jsxs(Gg,{children:[g.jsx(Qg,{children:e(t.titleKey)}),g.jsx(Kg,{children:e(t.descKey)})]})},t.titleKey))})]})},Zg="/VivenciaGaucha/assets/gauchos_dron_1080p-KG9CyVf8.mp4",Jg=S.section`
  background-color: ${({theme:e})=>e.color.primary};
  color: ${({theme:e})=>e.color.textInverse};
  padding: ${({theme:e})=>`${e.spacing[20]} ${e.spacing[4]}`};
  scroll-margin-top: 4rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing[24]} ${e.spacing[12]}`};
  }
`,ey=S.div`
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[12]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[16]};
  }
`,ty=S.div`
  width: 100%;
  order: 2; /* Title first on mobile */
  background-color: #000;
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  border: 1px solid ${({theme:e})=>`${e.color.accent}4D`}; // 30% opacity
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  aspect-ratio: 16 / 9;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 50%;
    order: 2; /* Video on right on desktop */
  }
`,ny=S.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`,ry=S.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing[6]};
  z-index: 2;
`,iy=S.p`
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.lg};
  color: white;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,oy=S.p`
  font-size: ${({theme:e})=>e.typography.size.xs};
  color: ${({theme:e})=>e.color.neutral[300]};
  margin-top: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,ly=S.div`
  width: 100%;
  order: 1; /* Title first on mobile */
  text-align: center; /* Centered by default for mobile */

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 50%;
    order: 1; /* Title on left on desktop */
    text-align: left; /* Left aligned for desktop */
  }
`,ay=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.accent};
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,sy=S.p`
  font-size: ${({theme:e})=>e.typography.size.base};
  color: ${({theme:e})=>e.color.neutral[300]};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`,uy=S.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.regular};
  text-align: left; /* Keep list items left aligned for readability */
  max-width: 28rem;
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
    margin: 0;
  }
`,ui=S.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`,ci=S.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: 1;
`,cy=()=>{const{t:e}=rt();return g.jsx(Jg,{id:"multimedia",children:g.jsxs(ey,{children:[g.jsxs(ty,{children:[g.jsx(ny,{src:Zg,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),g.jsxs(ry,{children:[g.jsx(iy,{children:e("multimedia_visual_title")}),g.jsx(oy,{children:e("multimedia_visual_subtitle")})]})]}),g.jsxs(ly,{children:[g.jsx(ay,{children:e("multimedia_title")}),g.jsx(sy,{children:e("multimedia_text")}),g.jsxs(uy,{children:[g.jsxs(ui,{children:[g.jsx(ci,{children:"✓"})," ",g.jsx("span",{children:e("multimedia_item_1")})]}),g.jsxs(ui,{children:[g.jsx(ci,{children:"✓"})," ",g.jsx("span",{children:e("multimedia_item_2")})]}),g.jsxs(ui,{children:[g.jsx(ci,{children:"✓"})," ",g.jsx("span",{children:e("multimedia_item_3")})]}),g.jsxs(ui,{children:[g.jsx(ci,{children:"✓"})," ",g.jsx("span",{children:e("multimedia_item_4")})]})]})]})]})})},dy=S.section`
  padding: ${({theme:e})=>`${e.spacing[16]} ${e.spacing[4]}`};
  background-color: ${({theme:e})=>e.color.primary};
  text-align: center;
`,fy=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.accent};
  margin-bottom: ${({theme:e})=>e.spacing[12]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,py=S.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[8]};
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,hy=S.div`
  background-color: ${({theme:e})=>e.color.primaryLight};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,my=S.p`
  color: ${({theme:e})=>e.color.neutral[100]};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  font-style: italic;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  &::before {
    content: '"';
    font-family: ${({theme:e})=>e.typography.fontFamily.title};
    font-size: 2rem;
    color: ${({theme:e})=>e.color.accent};
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`,gy=S.span`
  color: ${({theme:e})=>e.color.accent};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.base};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,yy=()=>{const{t:e}=rt(),t=[{text:e("review_1_text"),author:e("review_1_author")},{text:e("review_2_text"),author:e("review_2_author")},{text:e("review_3_text"),author:e("review_3_author")}];return g.jsxs(dy,{children:[g.jsx(fy,{children:e("reviews_title")}),g.jsx(py,{children:t.map((n,r)=>g.jsxs(hy,{children:[g.jsx(my,{children:n.text.replace(/^"|"$/g,"")}),g.jsx(gy,{children:n.author})]},r))})]})},vy=S.section`
  padding: ${({theme:e})=>`${e.spacing[20]} ${e.spacing[4]}`};
  width: 100%;
  margin: 0 auto;
  scroll-margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing[24]} ${e.spacing[12]}`};
  }
`,wy=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  color: ${({theme:e})=>e.color.primary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,$f=S.span`
  display: block;
`,xy=S($f)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: inherit;
  }
`,ky=S.div`
  width: 100%;
  height: 300px;
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  border: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 75vw;
    max-width: 1200px;
    height: 450px;
  }
`,$y=S.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`,Sy=S.a`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  text-decoration: none;
  background-color: ${({theme:e})=>e.color.leather};
  color: white;
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[8]}`};
  border-radius: ${({theme:e})=>e.radius.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({theme:e})=>e.color.primary};
    transform: translateY(-2px);
  }
`,_y=()=>{const{t:e}=rt();return g.jsxs(vy,{id:"ubicacion",children:[g.jsxs(wy,{children:[g.jsx(xy,{children:e("location_title_intro")}),g.jsx($f,{children:e("location_title_place")})]}),g.jsx(ky,{children:g.jsx($y,{src:"https://www.google.com/maps?q=Asociaci%C3%B3n%20Tradicionalista%20Gauchos%20de%20Magdalena%2C%20-35.0868873%2C%20-57.5054844&z=17&output=embed",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Ubicación Agrupación Tradicionalista Gauchos de Magdalena"})}),g.jsx(Sy,{href:"https://www.google.com/maps/place/Asociaci%C3%B3n+Tradicionalista+Gauchos+de+Magdalena/@-35.0868829,-57.5080593,17z/data=!4m14!1m7!3m6!1s0x95a265816e5a0717:0x80227442925809df!2sAsociaci%C3%B3n+Tradicionalista+Gauchos+de+Magdalena!8m2!3d-35.0868873!4d-57.5054844!16s%2Fg%2F11qzxc2c0s!3m5!1s0x95a265816e5a0717:0x80227442925809df!8m2!3d-35.0868873!4d-57.5054844!16s%2Fg%2F11qzxc2c0s?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:e("location_cta")})]})},Cy=S.section`
  padding: ${({theme:e})=>`${e.spacing[20]} ${e.spacing[4]}`};
  background-color: ${({theme:e})=>e.color.primaryDark};
  text-align: center;
  scroll-margin-top: ${({theme:e})=>e.spacing[16]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing[24]} ${e.spacing[12]}`};
  }
`,Ey=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.accentLight};
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,zy=S.p`
  font-size: ${({theme:e})=>e.typography.size.lg};
  max-width: 42rem;
  margin: 0 auto ${({theme:e})=>e.spacing[12]};
  color: ${({theme:e})=>e.color.neutral[100]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,jy=S.div`
  max-width: 28rem;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.color.surface};
  border: 2px solid ${({theme:e})=>e.color.leather};
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  padding: ${({theme:e})=>e.spacing[8]};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[10]};
  }
`,Py=S.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.primary};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[6]}`};
  border-radius: ${({theme:e})=>e.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: ${({theme:e})=>e.typography.size.xs};
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,Ny=S.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  color: ${({theme:e})=>e.color.primary};
  margin-top: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
    margin-top: ${({theme:e})=>e.spacing[4]};
  }
`,Ty=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  color: ${({theme:e})=>e.color.primaryLight};
  margin-bottom: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["2xlMinus2"]};
  }
`,Ly=S.div`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["5xl"]};
  color: ${({theme:e})=>e.color.leather};
  margin: ${({theme:e})=>e.spacing[6]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["6xl"]};
    margin: ${({theme:e})=>e.spacing[8]} 0;
  }
`,Iy=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.size.xl};
  color: ${({theme:e})=>e.color.neutral[500]};
  font-weight: ${({theme:e})=>e.typography.weight.regular};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
  }
`,My=S.ul`
  text-align: left;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.color.primaryLight};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[5]};
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,di=S.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,fi=S.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid ${({theme:e})=>e.color.leather};
`,Ry=S.a`
  text-decoration: none;
  width: 100%;
  background-color: ${({theme:e})=>e.color.primary};
  color: white;
  font-size: ${({theme:e})=>e.typography.size.lg};
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;

  &:hover {
    background-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,Fy=()=>{const{t:e}=rt();return g.jsxs(Cy,{id:"reserva",children:[g.jsx(Ey,{children:e("pricing_title")}),g.jsx(zy,{children:e("pricing_subtitle")}),g.jsxs(jy,{children:[g.jsx(Py,{children:e("pricing_badge")}),g.jsx(Ny,{children:e("pricing_card_title")}),g.jsx(Ty,{children:e("pricing_card_venue")}),g.jsxs(Ly,{children:["$250 ",g.jsx(Iy,{children:"USD"})]}),g.jsxs(My,{children:[g.jsxs(di,{children:[g.jsx(fi,{src:lr,alt:"Mate argentino"}),g.jsx("span",{children:e("pricing_feature_1")})]}),g.jsxs(di,{children:[g.jsx(fi,{src:lr,alt:"Mate argentino"}),g.jsx("span",{children:e("pricing_feature_2")})]}),g.jsxs(di,{children:[g.jsx(fi,{src:lr,alt:"Mate argentino"}),g.jsx("span",{children:e("pricing_feature_3")})]}),g.jsxs(di,{children:[g.jsx(fi,{src:lr,alt:"Mate argentino"}),g.jsx("span",{children:e("pricing_feature_4")})]})]}),g.jsx(Ry,{href:"https://wa.me/5492223671098?text=Hola!%20Me%20interesa%20reservar%20mi%20lugar%20para%20el%20Día%20de%20Gaucho.",target:"_blank",rel:"noopener noreferrer",children:e("pricing_cta")})]})]})},Oy=S.section`
  padding: ${({theme:e})=>`${e.spacing[16]} ${e.spacing[4]}`};
  background-color: ${({theme:e})=>e.color.background};
  max-width: 48rem;
  margin: 0 auto;
`,Ay=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  color: ${({theme:e})=>e.color.primary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing[12]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["5xl"]};
  }
`,Dy=S.div`
  --faq-question-min-height: ${({theme:e})=>e.spacing[16]};

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  max-height: calc(
    var(--faq-question-min-height) +
    var(--faq-question-min-height) +
    var(--faq-question-min-height) +
    var(--faq-question-min-height) +
    var(--faq-question-min-height) +
    ${({theme:e})=>e.spacing[4]} +
    ${({theme:e})=>e.spacing[4]} +
    ${({theme:e})=>e.spacing[4]} +
    ${({theme:e})=>e.spacing[4]}
  );
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: ${({theme:e})=>e.spacing[2]};
  scrollbar-color: ${({theme:e})=>`${e.color.accent} ${e.color.light}`};
  scrollbar-gutter: stable;
  scrollbar-width: thin;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    --faq-question-min-height: ${({theme:e})=>e.spacing[20]};
    padding-right: ${({theme:e})=>e.spacing[1]};
  }

  &::-webkit-scrollbar {
    width: ${({theme:e})=>e.spacing[2]};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({theme:e})=>e.color.light};
    border-radius: ${({theme:e})=>e.radius.full};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.color.accent};
    border-radius: ${({theme:e})=>e.radius.full};
  }
`,Uy=S.div`
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Wy=S.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--faq-question-min-height);
  padding: ${({theme:e})=>`${e.spacing[4]} 0`};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size.lg};
  color: ${({theme:e,isOpen:t})=>t?e.color.accent:e.color.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.color.accent};
  }

  &::after {
    content: '${({isOpen:e})=>e?"−":"+"}';
    font-size: 1.5rem;
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    margin-left: ${({theme:e})=>e.spacing[4]};
  }
`,By=S.div`
  max-height: ${({isOpen:e})=>e?"500px":"0"};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  padding-bottom: ${({theme:e,isOpen:t})=>t?e.spacing[6]:"0"};
  opacity: ${({isOpen:e})=>e?"1":"0"};
`,Hy=()=>{const{t:e}=rt(),[t,n]=ht.useState(null),r=Array.from({length:26},(o,l)=>{const a=l+1;return{q:e(`faq_q${a}`),a:e(`faq_a${a}`)}}),i=o=>{n(t===o?null:o)};return g.jsxs(Oy,{id:"faq",children:[g.jsx(Ay,{children:e("faq_title")}),g.jsx(Dy,{children:r.map((o,l)=>g.jsxs(Uy,{children:[g.jsx(Wy,{isOpen:t===l,onClick:()=>i(l),"aria-expanded":t===l,children:o.q}),g.jsx(By,{isOpen:t===l,children:o.a})]},l))})]})},Vy=S.section`
  padding: ${({theme:e})=>`${e.spacing[16]} ${e.spacing[4]}`};
  background-color: ${({theme:e})=>e.color.leather};
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[6]};
`,by=S.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.title};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  max-width: 40rem;
  line-height: 1.2;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size["4xl"]};
  }
`,qy=S.a`
  text-decoration: none;
  background-color: white;
  color: ${({theme:e})=>e.color.leather};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[8]}`};
  border-radius: ${({theme:e})=>e.radius.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background-color: ${({theme:e})=>e.color.neutral[100]};
  }
`,rl=({titleKey:e})=>{const{t}=rt();return g.jsxs(Vy,{children:[g.jsx(by,{children:t(e)}),g.jsx(qy,{href:"#reserva",children:t("nav_reserve")})]})},Gy=S.footer`
  background-color: ${({theme:e})=>e.color.primary};
  color: ${({theme:e})=>e.color.neutral[400]};
  padding: ${({theme:e})=>`${e.spacing[10]} ${e.spacing[4]}`};
  text-align: center;
  border-top: 1px solid ${({theme:e})=>`${e.color.accent}33`}; // 20% opacity

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing[12]} ${e.spacing[4]}`};
  }
`,Qy=S.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  /* Mobile layout: Stacked with separate backgrounds */
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
    background: transparent;
    padding: 0;
    box-shadow: none;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      flex: 0 1 auto;
      flex-direction: row;
      background-color: white;
      padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[8]}`};
      border-radius: ${({theme:e})=>e.radius.full};
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      gap: ${({theme:e})=>e.spacing[4]};
    }
  }

  /* Image styling with conditional white background on mobile */
  img {
    width: 80px;
    height: 80px;
    background-color: white;
    padding: ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.full};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      width: 80px;
      height: 80px;
      padding: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }

  /* Brand name styling */
  span {
    color: white !important; /* White on mobile dark background */
    font-size: ${({theme:e})=>e.typography.size["2xl"]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      color: ${({theme:e})=>e.color.primary} !important; /* Dark on desktop white background */
      font-size: ${({theme:e})=>e.typography.size["3xl"]};
    }
  }
`,Ky=S.p`
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Yy=()=>g.jsxs(Gy,{children:[g.jsx(Qy,{children:g.jsx(xf,{})}),g.jsxs(Ky,{children:["© ",new Date().getFullYear()," Experiencia Gaucha Criolla. Magdalena, Buenos Aires, Argentina."]})]}),Xy=S.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({theme:e})=>e.spacing[4]};
  background: linear-gradient(to top, ${({theme:e})=>e.color.background}, transparent);
  display: flex;
  justify-content: center;
  z-index: 40;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Zy=S.a`
  text-decoration: none;
  background-color: ${({theme:e})=>e.color.leather};
  color: white;
  width: 100%;
  max-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 52px;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`,Jy=()=>{const{t:e}=rt();return g.jsx(Xy,{children:g.jsx(Zy,{href:"#reserva",children:e("floating_cta")})})},e0=S.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: #128c7e;
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: 20px;
    right: 20px;
    width: 54px;
    height: 54px;
  }
`,t0=()=>g.jsx(e0,{href:"https://wa.me/5492223671098?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre%20el%20Día%20de%20Gaucho.",target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp",children:g.jsx("svg",{width:"35",height:"35",fill:"currentColor",viewBox:"0 0 448 512",children:g.jsx("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.4-.3-8.3 2.4-11.1 2.4-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})})}),n0=S.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`,r0=S.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: ${({theme:e})=>e.spacing[16]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: 0;
  }
`,i0=()=>g.jsxs(r0,{children:[g.jsx(jg,{}),g.jsxs(n0,{children:[g.jsx(Og,{}),g.jsx(Xg,{}),g.jsx(cy,{}),g.jsx(yy,{}),g.jsx(rl,{titleKey:"cta_roots"}),g.jsx(_y,{}),g.jsx(rl,{titleKey:"cta_magic"}),g.jsx(Fy,{}),g.jsx(Hy,{}),g.jsx(rl,{titleKey:"cta_join_us"})]}),g.jsx(Yy,{}),g.jsx(Jy,{}),g.jsx(t0,{})]}),o0=()=>g.jsx(i0,{}),l0=()=>g.jsx(cg,{children:g.jsx(fg,{children:g.jsx(o0,{})})});il.createRoot(document.getElementById("root")).render(g.jsx(he.StrictMode,{children:g.jsx(l0,{})}));
