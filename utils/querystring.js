"use strict";exports.decode=exports.parse=function(e,n,r,t){function o(e,n){return Object.prototype.hasOwnProperty.call(e,n)}n=n||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(n);var c=1e3;t&&"number"==typeof t.maxKeys&&(c=t.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var p=0;u>p;++p){var i,f,d,y,m=e[p].replace(a,"%20"),l=m.indexOf(r);l>=0?(i=m.substr(0,l),f=m.substr(l+1)):(i=m,f=""),d=decodeURIComponent(i),y=decodeURIComponent(f),o(s,d)?Array.isArray(s[d])?s[d].push(y):s[d]=[s[d],y]:s[d]=y}return s},exports.encode=exports.stringify=function(e,n,r,t){var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};return n=n||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(t){var s=encodeURIComponent(o(t))+r;return Array.isArray(e[t])?e[t].map(function(e){return s+encodeURIComponent(o(e))}).join(n):s+encodeURIComponent(o(e[t]))}).join(n):t?encodeURIComponent(o(t))+r+encodeURIComponent(o(e)):""};