(self.webpackChunknext_lms=self.webpackChunknext_lms||[]).push([[930],{381:(t,e,n)=>{var i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,v=function(){return c.Date.now()};function b(t,e,n){var r,o,s,u,l,f,a=0,c=!1,p=!1,b=!0;if("function"!=typeof t)throw new TypeError(i);function m(e){var n=r,i=o;return r=o=void 0,a=e,u=t.apply(i,n)}function w(t){var n=t-f;return void 0===f||n>=e||n<0||p&&t-a>=s}function O(){var t=v();if(w(t))return j(t);l=setTimeout(O,function(t){var n=e-(t-f);return p?h(n,s-(t-a)):n}(t))}function j(t){return l=void 0,b&&r?m(t):(r=o=void 0,u)}function C(){var t=v(),n=w(t);if(r=arguments,o=this,f=t,n){if(void 0===l)return function(t){return a=t,l=setTimeout(O,e),c?m(t):u}(f);if(p)return l=setTimeout(O,e),m(f)}return void 0===l&&(l=setTimeout(O,e)),u}return e=g(e)||0,y(n)&&(c=!!n.leading,s=(p="maxWait"in n)?d(g(n.maxWait)||0,e):s,b="trailing"in n?!!n.trailing:b),C.cancel=function(){void 0!==l&&clearTimeout(l),a=0,r=f=o=l=void 0},C.flush=function(){return void 0===l?u:j(v())},C}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=s.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}},2501:(t,e,n)=>{"use strict";e.__esModule=!0,e.default=void 0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(5043)),r=u(n(5173)),o=u(n(381)),s=u(n(4943));function u(t){return t&&t.__esModule?t:{default:t}}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l.apply(this,arguments)}var f=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isVisible=function(t,e,i){var r=t.top,o=t.left,s=t.bottom,u=t.right,l=t.width,f=t.height,a=n.props,c=a.offset,p=a.partialVisibility;if(r+u+s+o===0)return!1;var d=0-c,h=0-c,v=e+c,b=i+c;return p?r+f>=d&&o+l>=h&&s-f<=b&&u-l<=v:r>=d&&o>=h&&s<=b&&u<=v},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var t=document.documentElement,e=n.props.once,i=n.nodeRef.getBoundingClientRect(),r=window.innerWidth||t.clientWidth,o=window.innerHeight||t.clientHeight,s=n.isVisible(i,r,o);s&&e&&n.removeListener(),n.setState({isVisible:s})}}),0)},n.setNodeRef=function(t){return n.nodeRef=t},n.ownProps=Object.keys(r.propTypes),n.state={isVisible:!1},n.throttleCb=(0,o.default)(n.isComponentVisible,n.props.throttleInterval),e.nodeRef&&n.setNodeRef(e.nodeRef),n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var u=r.prototype;return u.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},u.componentDidUpdate=function(t){(0,s.default)(this.getChildProps(this.props),this.getChildProps(t))||this.isComponentVisible()},u.componentWillUnmount=function(){this.removeListener()},u.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},u.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},u.getChildProps=function(t){var e=this;void 0===t&&(t=this.props);var n={};return Object.keys(t).forEach((function(i){-1===e.ownProps.indexOf(i)&&(n[i]=t[i])})),n},u.getChildren=function(){var t=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):i.default.Children.map(this.props.children,(function(e){return i.default.cloneElement(e,l({},t.getChildProps(),{isVisible:t.state.isVisible}))}))},u.render=function(){var t=this.props,e=t.className,n=t.style,r=t.nodeRef,o=t.tag,s=l({},e&&{className:e},n&&{style:n});return i.default.createElement(o,l({ref:!r&&this.setNodeRef},s),this.getChildren())},r}(i.PureComponent);e.default=f,f.propTypes={once:r.default.bool,throttleInterval:function(t,e,n){var i=t[e];return!Number.isInteger(i)||i<0?new Error("The "+e+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:r.default.oneOfType([r.default.func,r.default.element,r.default.arrayOf(r.default.element)]),style:r.default.object,className:r.default.string,offset:r.default.number,partialVisibility:r.default.bool,nodeRef:r.default.object,tag:r.default.string},f.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(t,e,n)=>{"use strict";var i;e.A=void 0;var r=((i=n(2501))&&i.__esModule?i:{default:i}).default;e.A=r},4943:t=>{t.exports=function(t,e,n,i){var r=n?n.call(i,t,e):void 0;if(void 0!==r)return!!r;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var o=Object.keys(t),s=Object.keys(e);if(o.length!==s.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),l=0;l<o.length;l++){var f=o[l];if(!u(f))return!1;var a=t[f],c=e[f];if(!1===(r=n?n.call(i,a,c,f):void 0)||void 0===r&&a!==c)return!1}return!0}}}]);
//# sourceMappingURL=930.974d5e87.chunk.js.map