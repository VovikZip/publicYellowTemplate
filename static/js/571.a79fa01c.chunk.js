"use strict";(self.webpackChunknext_lms=self.webpackChunknext_lms||[]).push([[571],{4705:(e,t,n)=>{n.d(t,{As:()=>Z,IT:()=>ne,IZ:()=>ee,SR:()=>X,nD:()=>N});var r=n(5043);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=c((function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,i=t.allowMultipleExpanded,c=void 0!==i&&i,u=t.allowZeroExpanded,s=void 0!==u&&u;l(this,e),d(this,"expanded",void 0),d(this,"allowMultipleExpanded",void 0),d(this,"allowZeroExpanded",void 0),d(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(g(n.expanded),[e]):[e]})})),d(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),d(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),d(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),d(this,"getHeadingAttributes",(function(){return{role:"heading"}})),d(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),o=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":o,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),d(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),d(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),d(this,"augment",(function(t){return new e(a({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=c,this.allowZeroExpanded=s})),w=(0,r.createContext)(null),A=function(e){s(n,e);var t=h(n);function n(){var e;l(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return d(m(e=t.call.apply(t,[this].concat(o))),"state",new x({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),d(m(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),d(m(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),d(m(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),d(m(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),d(m(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),d(m(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return c(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return(0,r.createElement)(w.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(r.PureComponent);d(A,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var I,C=function(e){s(n,e);var t=h(n);function n(){var e;l(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return d(m(e=t.call.apply(t,[this].concat(o))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return c(n,[{key:"render",value:function(){return(0,r.createElement)(w.Consumer,null,this.renderChildren)}}]),n}(r.PureComponent),O=["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"],N=function(e){var t=e.className,n=void 0===t?"accordion":t,o=e.allowMultipleExpanded,a=e.allowZeroExpanded,l=e.onChange,i=e.preExpanded,c=b(e,O);return(0,r.createElement)(A,{preExpanded:i,allowMultipleExpanded:o,allowZeroExpanded:a,onChange:l},(0,r.createElement)("div",u({"data-accordion-component":"Accordion",className:n},c)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(I||(I={}));var P=I,j=0;var T=r.useId||function(){var e=j;return j+=1,"raa-".concat(e)},R=/[\u0009\u000a\u000c\u000d\u0020]/g;function D(e){return""!==e&&!R.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var S=(0,r.createContext)(null),k=function(e){var t=e.children,n=e.uuid,o=e.accordionContext,a=e.dangerouslySetExpanded,l=function(){o.toggleExpanded(n)},i=function(e){var o=null!==a&&void 0!==a?a:e.isItemExpanded(n),i=e.isItemDisabled(n),c=e.getPanelAttributes(n,a),d=e.getHeadingAttributes(n),u=e.getButtonAttributes(n,a);return(0,r.createElement)(S.Provider,{value:{uuid:n,expanded:o,disabled:i,toggleExpanded:l,panelAttributes:c,headingAttributes:d,buttonAttributes:u}},t)};return(0,r.createElement)(C,null,i)},_=function(e){return(0,r.createElement)(C,null,(function(t){return(0,r.createElement)(k,u({},e,{accordionContext:t}))}))},M=function(e){var t=e.children,n=function(e){return e?t(e):null};return(0,r.createElement)(S.Consumer,null,n)},B=["uuid","dangerouslySetExpanded","className","activeClassName"],Z=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,o=e.className,a=void 0===o?"accordion__item":o,l=e.activeClassName,i=b(e,B),c=y((0,r.useState)(T()),1)[0],d=null!==t&&void 0!==t?t:c,s=function(e){var t=e.expanded&&l?l:a;return(0,r.createElement)("div",u({"data-accordion-component":"AccordionItem",className:t},i))};return D(d.toString()),i.id&&D(i.id),(0,r.createElement)(_,{uuid:d,dangerouslySetExpanded:n},(0,r.createElement)(M,null,s))};function H(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:H(e.parentElement))}function L(e){var t=H(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}Z.displayName=P.AccordionItem;var $="End",K="Enter",U="Home",F=" ",V="Spacebar",q="ArrowUp",z="ArrowDown",W="ArrowLeft",G="ArrowRight",J=["toggleExpanded","className"],Q=function(e){var t=e.toggleExpanded,n=e.className,o=void 0===n?"accordion__button":n,a=b(e,J);return a.id&&D(a.id),(0,r.createElement)("div",u({className:o},a,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==K&&n!==F&&n!==V||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case U:e.preventDefault(),function(e){var t=(L(e)||[])[0];t&&t.focus()}(e.target);break;case $:e.preventDefault(),function(e){var t=L(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case W:case q:e.preventDefault(),function(e){var t=L(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case G:case z:e.preventDefault(),function(e){var t=L(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},X=function(e){return(0,r.createElement)(M,null,(function(t){var n=t.toggleExpanded,o=t.buttonAttributes;return(0,r.createElement)(Q,u({toggleExpanded:n},e,o))}))},Y=function(e){s(n,e);var t=h(n);function n(){var e;l(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return d(m(e=t.call.apply(t,[this].concat(o))),"ref",void 0),d(m(e),"setRef",(function(t){e.ref=t})),e}return c(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return(0,r.createElement)("div",u({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(r.PureComponent);d(Y,"defaultProps",{className:"accordion__heading","aria-level":3});var ee=function(e){return(0,r.createElement)(M,null,(function(t){var n=t.headingAttributes;return e.id&&D(e.id),(0,r.createElement)(Y,u({},e,n))}))};ee.displayName=P.AccordionItemHeading;var te=["className","region","id"],ne=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,o=e.region,l=e.id,i=b(e,te),c=function(e){var t=e.panelAttributes;l&&D(l);var c=a(a({},t),{},{"aria-labelledby":o?t["aria-labelledby"]:void 0});return(0,r.createElement)("div",u({"data-accordion-component":"AccordionItemPanel",className:n},i,c,{role:o?"region":void 0}))};return(0,r.createElement)(M,null,c)}},4297:(e,t,n)=>{n.d(t,{oz:()=>j,wb:()=>C,Kp:()=>S,tU:()=>w});var r=n(5043);function o(e){return t=>!!t.type&&t.type.tabsRole===e}const a=o("Tab"),l=o("TabList"),i=o("TabPanel");function c(e,t){return r.Children.map(e,(e=>null===e?null:function(e){return a(e)||l(e)||i(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,{...e.props,children:c(e.props.children,t)}):e))}function d(e,t){return r.Children.forEach(e,(e=>{null!==e&&(a(e)||i(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(l(e)&&t(e),d(e.props.children,t)))}))}function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const s=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r};function f(e){let t=0;return d(e,(e=>{a(e)&&t++})),t}function p(e){return e&&"getAttribute"in e}function b(e){return p(e)&&e.getAttribute("data-rttab")}function m(e){return p(e)&&"true"===e.getAttribute("aria-disabled")}let h;const y={className:"react-tabs",focus:!1},g=e=>{let t=(0,r.useRef)([]),n=(0,r.useRef)([]);const o=(0,r.useRef)();function d(t,n){if(t<0||t>=g())return;const{onSelect:r,selectedIndex:o}=e;r(t,o,n)}function u(e){const t=g();for(let n=e+1;n<t;n++)if(!m(v(n)))return n;for(let n=0;n<e;n++)if(!m(v(n)))return n;return e}function p(e){let t=e;for(;t--;)if(!m(v(t)))return t;for(t=g();t-- >e;)if(!m(v(t)))return t;return e}function g(){const{children:t}=e;return f(t)}function v(e){return t.current[`tabs-${e}`]}function E(e){let t=e.target;do{if(x(t)){if(m(t))return;return void d([].slice.call(t.parentNode.children).filter(b).indexOf(t),e)}}while(null!=(t=t.parentNode))}function x(e){if(!b(e))return!1;let t=e.parentElement;do{if(t===o.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}const{children:w,className:A,disabledTabClassName:I,domRef:C,focus:O,forceRenderTabPanel:N,onSelect:P,selectedIndex:j,selectedTabClassName:T,selectedTabPanelClassName:R,environment:D,disableUpDownKeys:S,disableLeftRightKeys:k,..._}={...y,...e};return r.createElement("div",Object.assign({},_,{className:s(A),onClick:E,onKeyDown:function(t){const{direction:n,disableUpDownKeys:r,disableLeftRightKeys:o}=e;if(x(t.target)){let{selectedIndex:a}=e,l=!1,i=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(l=!0,i=!1,E(t)),(o||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(o||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(a=function(){let e=g();for(;e--;)if(!m(v(e)))return e;return null}(),l=!0,i=!0):36!==t.keyCode&&"Home"!==t.code||(a=function(){const e=g();for(let t=0;t<e;t++)if(!m(v(t)))return t;return null}(),l=!0,i=!0):(a="rtl"===n?p(a):u(a),l=!0,i=!0):(a="rtl"===n?u(a):p(a),l=!0,i=!0),l&&t.preventDefault(),i&&d(a,t)}},ref:e=>{o.current=e,C&&C(e)},"data-rttabs":!0}),function(){let o=0;const{children:d,disabledTabClassName:u,focus:s,forceRenderTabPanel:f,selectedIndex:p,selectedTabClassName:b,selectedTabPanelClassName:m,environment:y}=e;n.current=n.current||[];let E=n.current.length-g();const x=(0,r.useId)();for(;E++<0;)n.current.push(`${x}${n.current.length}`);return c(d,(e=>{let d=e;if(l(e)){let o=0,l=!1;null==h&&function(e){const t=e||("undefined"!==typeof window?window:void 0);try{h=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){h=!1}}(y);const i=y||("undefined"!==typeof window?window:void 0);h&&i&&(l=r.Children.toArray(e.props.children).filter(a).some(((e,t)=>i.document.activeElement===v(t)))),d=(0,r.cloneElement)(e,{children:c(e.props.children,(e=>{const a=`tabs-${o}`,i=p===o,c={tabRef:e=>{t.current[a]=e},id:n.current[o],selected:i,focus:i&&(s||l)};return b&&(c.selectedClassName=b),u&&(c.disabledClassName=u),o++,(0,r.cloneElement)(e,c)}))})}else if(i(e)){const t={id:n.current[o],selected:p===o};f&&(t.forceRender=f),m&&(t.selectedClassName=m),o++,d=(0,r.cloneElement)(e,t)}return d}))}())};g.propTypes={};const v=g,E={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},x=e=>{const{children:t,defaultFocus:n,defaultIndex:o,focusTabOnClick:a,onSelect:l,...i}={...E,...e},[c,d]=(0,r.useState)(n),[u]=(0,r.useState)((e=>null===e.selectedIndex?1:0)(i)),[s,p]=(0,r.useState)(1===u?o||0:null);if((0,r.useEffect)((()=>{d(!1)}),[]),1===u){const e=f(t);(0,r.useEffect)((()=>{if(null!=s){const t=Math.max(0,e-1);p(Math.min(s,t))}}),[e])}let b={...e,...i};return b.focus=c,b.onSelect=(e,t,n)=>{"function"===typeof l&&!1===l(e,t,n)||(a&&d(!0),1===u&&p(e))},null!=s&&(b.selectedIndex=s),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,r.createElement(v,b,t)};x.propTypes={},x.tabsRole="Tabs";const w=x,A={className:"react-tabs__tab-list"},I=e=>{const{children:t,className:n,...o}={...A,...e};return r.createElement("ul",Object.assign({},o,{className:s(n),role:"tablist"}),t)};I.tabsRole="TabList",I.propTypes={};const C=I,O="react-tabs__tab",N={className:O,disabledClassName:`${O}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${O}--selected`},P=e=>{let t=(0,r.useRef)();const{children:n,className:o,disabled:a,disabledClassName:l,focus:i,id:c,selected:d,selectedClassName:u,tabIndex:f,tabRef:p,...b}={...N,...e};return(0,r.useEffect)((()=>{d&&i&&t.current.focus()}),[d,i]),r.createElement("li",Object.assign({},b,{className:s(o,{[u]:d,[l]:a}),ref:e=>{t.current=e,p&&p(e)},role:"tab",id:`tab${c}`,"aria-selected":d?"true":"false","aria-disabled":a?"true":"false","aria-controls":`panel${c}`,tabIndex:f||(d?"0":null),"data-rttab":!0}),n)};P.propTypes={},P.tabsRole="Tab";const j=P,T="react-tabs__tab-panel",R={className:T,forceRender:!1,selectedClassName:`${T}--selected`},D=e=>{const{children:t,className:n,forceRender:o,id:a,selected:l,selectedClassName:i,...c}={...R,...e};return r.createElement("div",Object.assign({},c,{className:s(n,{[i]:l}),role:"tabpanel",id:`panel${a}`,"aria-labelledby":`tab${a}`}),o||l?t:null)};D.tabsRole="TabPanel",D.propTypes={};const S=D}}]);
//# sourceMappingURL=571.a79fa01c.chunk.js.map