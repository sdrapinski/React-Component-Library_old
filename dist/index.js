"use strict";var e,r={exports:{}},t={exports:{}},n={};var o,a,i,c,u,f,s,p,l,y,d,m,b,v,g={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function h(){return a||(a=1,r=t,"production"===process.env.NODE_ENV?r.exports=function(){if(e)return n;e=1;var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case s:case p:case a:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case l:case b:case m:case u:return e;default:return r}}case o:return r}}}function w(e){return O(e)===p}return n.AsyncMode=s,n.ConcurrentMode=p,n.ContextConsumer=f,n.ContextProvider=u,n.Element=t,n.ForwardRef=l,n.Fragment=a,n.Lazy=b,n.Memo=m,n.Portal=o,n.Profiler=c,n.StrictMode=i,n.Suspense=y,n.isAsyncMode=function(e){return w(e)||O(e)===s},n.isConcurrentMode=w,n.isContextConsumer=function(e){return O(e)===f},n.isContextProvider=function(e){return O(e)===u},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return O(e)===l},n.isFragment=function(e){return O(e)===a},n.isLazy=function(e){return O(e)===b},n.isMemo=function(e){return O(e)===m},n.isPortal=function(e){return O(e)===o},n.isProfiler=function(e){return O(e)===c},n.isStrictMode=function(e){return O(e)===i},n.isSuspense=function(e){return O(e)===y},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===i||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===g||e.$$typeof===h||e.$$typeof===S||e.$$typeof===v)},n.typeOf=O,n}():r.exports=(o||(o=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var l=e.$$typeof;switch(l){case r:var m=e.type;switch(m){case u:case f:case n:case a:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case s:case d:case y:case i:return b;default:return l}}case t:return l}}}var O=u,w=f,x=c,E=i,$=r,j=s,T=n,P=d,k=y,C=t,_=a,N=o,I=p,R=!1;function A(e){return S(e)===f}g.AsyncMode=O,g.ConcurrentMode=w,g.ContextConsumer=x,g.ContextProvider=E,g.Element=$,g.ForwardRef=j,g.Fragment=T,g.Lazy=P,g.Memo=k,g.Portal=C,g.Profiler=_,g.StrictMode=N,g.Suspense=I,g.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||S(e)===u},g.isConcurrentMode=A,g.isContextConsumer=function(e){return S(e)===c},g.isContextProvider=function(e){return S(e)===i},g.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},g.isForwardRef=function(e){return S(e)===s},g.isFragment=function(e){return S(e)===n},g.isLazy=function(e){return S(e)===d},g.isMemo=function(e){return S(e)===y},g.isPortal=function(e){return S(e)===t},g.isProfiler=function(e){return S(e)===a},g.isStrictMode=function(e){return S(e)===o},g.isSuspense=function(e){return S(e)===p},g.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===f||e===a||e===o||e===p||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===b||e.$$typeof===v||e.$$typeof===h||e.$$typeof===m)},g.typeOf=S}()),g)),t.exports;var r}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function S(){if(f)return u;f=1;return u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function O(){return p?s:(p=1,s=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var w=h();r.exports=function(){if(m)return d;m=1;var e=h(),r=function(){if(c)return i;c=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}return i=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(o,a){for(var i,c,u=n(o),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(u[s]=i[s]);if(e){c=e(i);for(var p=0;p<c.length;p++)t.call(i,c[p])&&(u[c[p]]=i[c[p]])}}return u},i}(),t=S(),n=O(),o=function(){if(y)return l;y=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=S(),t={},n=O();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,a,i,c,u){if("production"!==process.env.NODE_ENV)for(var f in o)if(n(o,f)){var s;try{if("function"!=typeof o[f]){var p=Error((c||"React class")+": "+i+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=o[f](a,f,c,i,null,r)}catch(e){s=e}if(!s||s instanceof Error||e((c||"React class")+": type specification of "+i+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in t)){t[s.message]=!0;var l=u?u():"";e("Failed "+i+" type: "+s.message+(null!=l?l:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},l=o}(),a=function(){};function u(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),d=function(i,c){var f="function"==typeof Symbol&&Symbol.iterator,s="<<anonymous>>",p={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(u),arrayOf:function(e){return d((function(r,n,o,a,i){if("function"!=typeof e)return new y("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new y("Invalid "+a+" `"+i+"` of type `"+g(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,o,a,i+"["+u+"]",t);if(f instanceof Error)return f}return null}))},element:d((function(e,r,t,n,o){var a=e[r];return i(a)?null:new y("Invalid "+n+" `"+o+"` of type `"+g(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:d((function(r,t,n,o,a){var i=r[t];return e.isValidElementType(i)?null:new y("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(r,t,n,o,a){if(!(r[t]instanceof e)){var i=e.name||s;return new y("Invalid "+o+" `"+a+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:s)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:d((function(e,r,t,n,o){return v(e[r])?null:new y("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(r,o,a,i,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var u=r[o],f=g(u);if("object"!==f)return new y("Invalid "+i+" `"+c+"` of type `"+f+"` supplied to `"+a+"`, expected an object.");for(var s in u)if(n(u,s)){var p=e(u,s,a,i,c+"."+s,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),u;function r(r,t,n,o,a){for(var i=r[t],c=0;c<e.length;c++)if(l(i,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===h(r)?String(r):r}));return new y("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")}return d(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),u;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+r+"."),u}return d((function(r,o,a,i,c){for(var u=[],f=0;f<e.length;f++){var s=(0,e[f])(r,o,a,i,c,t);if(null==s)return null;s.data&&n(s.data,"expectedType")&&u.push(s.data.expectedType)}return new y("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return d((function(r,n,o,a,i){var c=r[n],u=g(c);if("object"!==u)return new y("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var f in e){var s=e[f];if("function"!=typeof s)return b(o,a,i,f,h(s));var p=s(c,f,o,a,i+"."+f,t);if(p)return p}return null}))},exact:function(e){return d((function(o,a,i,c,u){var f=o[a],s=g(f);if("object"!==s)return new y("Invalid "+c+" `"+u+"` of type `"+s+"` supplied to `"+i+"`, expected `object`.");var p=r({},o[a],e);for(var l in p){var d=e[l];if(n(e,l)&&"function"!=typeof d)return b(i,c,u,l,h(d));if(!d)return new y("Invalid "+c+" `"+u+"` key `"+l+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(f,l,i,c,u+"."+l,t);if(m)return m}return null}))}};function l(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function y(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function d(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,i,u,f,p,l,d){if(f=f||s,l=l||u,d!==t){if(c){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=f+":"+u;!r[b]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,n++)}}return null==i[u]?o?null===i[u]?new y("The "+p+" `"+l+"` is marked as required in `"+f+"`, but its value is `null`."):new y("The "+p+" `"+l+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(i,u,f,p,l)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return d((function(r,t,n,o,a,i){var c=r[t];return g(c)!==e?new y("Invalid "+o+" `"+a+"` of type `"+h(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new y((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||i(e))return!0;var r=function(e){var r=e&&(f&&e[f]||e["@@iterator"]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!v(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function g(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function h(e){if(null==e)return""+e;var r=g(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function S(e){var r=h(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return y.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},d}()(w.isElement,!0)}else r.exports=function(){if(v)return b;v=1;var e=S();function r(){}function t(){}return t.resetWarningCache=r,b=function(){function n(r,t,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a}}()();function x({label:e,backgroundColor:r="red",size:t="md",handleClick:n}){let o=1;"sm"===t&&(o=.75),"lg"===t&&(o=1.5);const a={backgroundColor:r,padding:`${.5*o}rem ${1*o}rem`,border:"none"};return React.createElement("button",{onClick:n,style:a},e)}x.propTypes={label:r.exports.string,backgroundColor:r.exports.string,size:r.exports.oneOf(["sm","md","lg"]),handleClick:r.exports.func};function E({children:e,spacing:r=2,direction:t="row",wrap:n=!1}){const o={display:"flex",gap:.25*r+"rem",flexWrap:n?"wrap":"nowrap",flexDirection:t};return React.createElement("div",{style:o},e)}E.propTypes={spacing:r.exports.number,wrap:r.exports.bool,direction:r.exports.oneOf(["row","column"])},exports.Button=x,exports.Requirements=()=>React.createElement("div",null,"Hello World"),exports.Stack=E;