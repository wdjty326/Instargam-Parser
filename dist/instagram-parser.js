exports.InstagramParser=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(1));e.parse=function(t){return new Promise((function(e,n){t=t.substr(0,t.indexOf("?")-1);/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/p\/([A-Za-z0-9-_\.]+)/im.test(t)?function t(e){return new Promise((function(n,r){var u=o.default.get(e,{headers:{"Content-Type":"text/html; charset=utf-8"},timeout:8e3},(function(e){if(301!==e.statusCode){e.setEncoding("utf8");var o="";e.on("data",(function(t){o+=t})),e.on("end",(function(){n(o)})),e.on("error",(function(t){r(new Error(e.statusMessage))}))}else t(e.headers.location).then((function(t){return n(t)})).catch((function(t){return r(t)}))})).on("error",(function(t){u.abort(),r(t)})).on("timeout",(function(){u.abort(),r()}))}))}(t).then((function(t){var n=(t=t.replace(/(\s|\n|\r)/gi,"")).substr(t.indexOf("window._sharedData")+"window._sharedData".length+1);n=n.substr(0,n.indexOf("<\/script>")-1),e(JSON.parse(n))})).catch((function(t){n(t)})):n(new Error("only Instagram URI"))}))}},function(t,e){t.exports=require("https")}]);