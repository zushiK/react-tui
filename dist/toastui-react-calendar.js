module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("tui-calendar")},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(0),o=n.n(r),i=n(1),u=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function l(e,t){if(e===t)return!0;if(e instanceof Function)return e.toString()===t.toString();if(e&&t&&"object"===c(e)&&"object"===c(t)){var n;if(e.constructor!==t.constructor)return!1;if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(var r=0;r<n;r+=1)if(!l(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var o=Object.keys(e);if((n=o.length)!==Object.keys(t).length)return!1;for(var i=0;i<n;i+=1){var u=o[i];if(!a(t,u)||!l(e[u],t[u]))return!1}return!0}return e!=e&&t!=t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=["schedules","view"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=["disableDblClick","isReadOnly","month","scheduleView","taskView","theme","timezones","week","template"],P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,r,i=O(c);function c(){var e;b(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return w(g(e=i.call.apply(i,[this].concat(n))),"rootEl",o.a.createRef()),w(g(e),"calendarInst",null),w(g(e),"bindEventHandlers",(function(t){Object.keys(t).filter((function(e){return/^on[A-Z][a-zA-Z]+/.test(e)})).forEach((function(n){var r=n[2].toLowerCase()+n.slice(3);e.calendarInst.off(r),e.calendarInst.on(r,t[n])}))})),e}return t=c,(n=[{key:"componentDidMount",value:function(){console.log("stitch calendar component mounted");var e=this.props,t=e.schedules,n=void 0===t?[]:t,r=e.view,o=h(e,s),i=this.getRootElement();this.calendarInst=new u.a(i,y(y({},o),{},{defaultView:r})),i.style.height=this.props.height,this.setSchedules(n),this.bindEventHandlers(o)}},{key:"shouldComponentUpdate",value:function(e){var t=this,n=this.props,r=n.calendars,o=n.height,i=n.schedules,u=n.theme,c=n.view;return l(o,e.height)||(this.getRootElement().style.height=e.height),l(r,e.calendars)||this.setCalendars(e.calendars),l(i,e.schedules)||(this.calendarInst.clear(),this.setSchedules(e.schedules)),l(u,e.theme)||this.calendarInst.setTheme(this.cloneData(e.theme)),l(c,e.view)||this.calendarInst.changeView(e.view),S.forEach((function(n){l(t.props[n],e[n])||t.setOptions(n,e[n])})),this.bindEventHandlers(this.props),!1}},{key:"componentWillUnmount",value:function(){this.calendarInst.destroy()}},{key:"cloneData",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"setCalendars",value:function(e){e&&e.length&&this.calendarInst.setCalendars(e)}},{key:"setSchedules",value:function(e){if(e&&e.length){var t=this.cloneData(e);this.calendarInst.createSchedules(t)}}},{key:"setOptions",value:function(e,t){this.calendarInst.setOptions(w({},e,t),!0)}},{key:"getInstance",value:function(){return this.calendarInst}},{key:"getRootElement",value:function(){return this.rootEl.current}},{key:"render",value:function(){return o.a.createElement("div",{className:"tui-calendar-react-root",ref:this.rootEl})}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);w(P,"defaultProps",{height:"800px",view:"week"})}]);