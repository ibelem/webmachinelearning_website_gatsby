(self.webpackChunkwebnn_website=self.webpackChunkwebnn_website||[]).push([[159],{32993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},35414:function(e,t,n){"use strict";var r,o,i,a,l=n(45697),c=n.n(l),s=n(24839),u=n.n(s),f=n(32993),m=n.n(f),p=n(67294),d=n(46494),h=n.n(d),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",E="href",k="http-equiv",T="innerHTML",N="itemprop",C="name",A="property",O="rel",S="src",L="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",M="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",D=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,v.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},Q=function(e){return J(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||n===O&&"canonical"===e[n].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==T&&l!==x&&l!==N||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=h()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,o),le(f,m);var p={baseTag:se(v.BASE,n),linkTags:se(v.LINK,i),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,l),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===T||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(v.BASE,t,r),bodyAttributes:me(y,n,r),htmlAttributes:me(g,o,r),link:me(v.LINK,i,r),meta:me(v.META,a,r),noscript:me(v.NOSCRIPT,l,r),script:me(v.SCRIPT,c,r),style:me(v.STYLE,s,r),title:me(v.TITLE,{title:f,titleAttributes:m},r)}},de=u()((function(e){return{baseTag:Z([E,L],e),bodyAttributes:V(y,e),defer:J(e,I),encode:J(e,M),htmlAttributes:V(g,e),linkTags:$(v.LINK,[O,E],e),metaTags:$(v.META,[C,w,k,A,N],e),noscriptTags:$(v.NOSCRIPT,[T],e),onChangeClientState:Q(e),scriptTags:$(v.SCRIPT,[S,T],e),styleTags:$(v.STYLE,[x],e),title:G(e),titleAttributes:V(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=de,a=i=function(e){function t(){return H(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},W(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind,t.Z=he},24839:function(e,t,n){"use strict";var r,o=n(67294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",l),f}}},65610:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),o=n(25444);function i(){return r.createElement("footer",{className:"footer text-white py-8 px-4"},r.createElement("div",{className:"mx-auto max-w-7xl container overflow-hidden flex flex-col lg:flex-row justify-between"},r.createElement(o.Link,{to:"/",className:"block ml-10 mt-2 flogo"},r.createElement("svg",{className:"logow h-8 sm:h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 462.53 138.63"},r.createElement("text",{className:"logo-1",transform:"translate(0 102.66)"},"WebNN"))),r.createElement("div",{className:"md:w-2/3 block sm:grid sm:grid-cols-2 md:grid-cols-4 text-sm mt-6 lg:mt-0 flist"},r.createElement("ul",{className:"list-none p-0 text-left"},r.createElement("li",{className:"inline-block py-2 font-light uppercase"},"Features"),r.createElement("li",null,r.createElement("a",{href:"#",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"WebNN Native")),r.createElement("li",null,r.createElement(o.Link,{to:"/demo/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Demo")),r.createElement("li",null,r.createElement(o.Link,{to:"/performance/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Performance")),r.createElement("li",null,r.createElement(o.Link,{to:"/benchmark/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Benchmark"))),r.createElement("ul",{className:"list-none p-0 text-left"},r.createElement("li",null,r.createElement(o.Link,{to:"/community/",className:"inline-block py-2 font-light uppercase"},"Community")),r.createElement("li",null,r.createElement(o.Link,{to:"/blog/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Blog")),r.createElement("li",null,r.createElement(o.Link,{to:"/community/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Spec & Contribution")),r.createElement("li",null,r.createElement(o.Link,{to:"/faq/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"FAQ"))),r.createElement("ul",{className:"list-none p-0 text-left"},r.createElement("li",{className:"inline-block py-2 font-light uppercase"},"Developers"),r.createElement("li",null,r.createElement(o.Link,{to:"/get-started/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Get Started")),r.createElement("li",null,r.createElement("a",{href:"#",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Developer API")),r.createElement("li",null,r.createElement(o.Link,{to:"/doc/",className:"link link--leda inline-block py-1 text-gray-100 hover:text-white no-underline"},"Documentation"))),r.createElement("div",{className:"followus"},r.createElement("div",{className:"inline-block py-2 px-3 font-light uppercase font-light"},"Follow Us"),r.createElement("div",{className:"flex pl-4 justify-start mt-2"},r.createElement("a",{className:"block flex items-center text-gray-100 hover:text-white mr-6 no-underline",href:"#"},r.createElement("svg",{viewBox:"0 0 24 24",className:"fill-current w-5 h-5",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"}))),r.createElement("a",{className:"block flex items-center text-gray-100 hover:text-white no-underline",href:"https://github.com/webmachinelearning"},r.createElement("svg",{viewBox:"0 0 24 24",className:"fill-current w-5 h-5",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))))))),r.createElement("div",{className:"mt-4 text-white-600 text-center"},"© 2021 Web Neural Network API"))}},37374:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),o=n(25444);function i(e){var t=(0,r.useState)(!1),n=t[0],i=t[1];return r.createElement("div",null,r.createElement("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8"},r.createElement("nav",{className:"relative flex lg:max-w-4xl items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},r.createElement("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},r.createElement("div",{className:"flex items-center justify-between w-full md:w-auto"},r.createElement(o.Link,{to:"/"},r.createElement("span",{className:"sr-only"},"WebNN"),r.createElement("svg",{className:"logo h-8 w-auto sm:h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 462.53 138.63"},r.createElement("text",{className:"logo-1",transform:"translate(0 102.66)"},"WebNN"))),r.createElement("div",{className:"mr-2 flex items-center md:hidden"},r.createElement("button",{type:"button",className:"bg-white p-2 inline-flex items-center justify-center text-white-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",id:"main-menu","aria-haspopup":"true"},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),r.createElement("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8"},r.createElement(o.Link,{to:"/get-started/",className:"link link--dia text-nn-tgray1 hover:text-nn-t1"},"Get Started"),r.createElement(o.Link,{to:"/demo/",className:"link link--dia text-nn-tgray1 hover:text-nn-t1"},"Demo"),r.createElement(o.Link,{to:"/performance/",className:"link link--dia text-nn-tgray1 hover:text-nn-t1"},"Performance"),r.createElement(o.Link,{to:"/blog/",className:"link link--dia text-nn-tgray1 hover:text-nn-t1"},"Blog"),r.createElement(o.Link,{to:"/community/",className:"link link--dia text-nn-tgray1 hover:text-nn-t1"},"Community"),r.createElement(o.Link,{to:"/faq",className:"faq link link--dia bg-nn-t1a text-white py-1 px-4 hover:bg-nn-t2a"},"FAQ")))),r.createElement("div",{className:"dpmenu absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden transition ease-"+(n?"out":"in")+" duration-"+(n?"150":"100")+" transform opacity-"+(n?"100":"0")+" scale-"+(n?"100":"95")},r.createElement("div",{className:"shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},r.createElement("div",{className:"px-5 pt-4 flex items-center justify-between"},r.createElement("div",null,r.createElement("svg",{className:"logo h-8 w-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 462.53 138.63"},r.createElement("text",{className:"logo-1",transform:"translate(0 102.66)"},"WebNN"))),r.createElement("div",{className:"mr-2"},r.createElement("button",{onClick:function(){i(!n),n=!n},type:"button",className:"bg-white p-2 inline-flex items-center justify-center text-white-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"},r.createElement("span",{className:"sr-only"},"Close"),r.createElement("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}))))),r.createElement("div",{role:"menu","aria-orientation":"vertical","aria-labelledby":"main-menu"},r.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1",role:"none"},r.createElement(o.Link,{to:"/get-started/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1",role:"menuitem"},"Get Started"),r.createElement(o.Link,{to:"/specs/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1",role:"menuitem"},"Specs"),r.createElement(o.Link,{to:"/performance/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1"},"Performance"),r.createElement(o.Link,{to:"/blog/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1"},"Blog"),r.createElement(o.Link,{to:"/community/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1",role:"menuitem"},"Community"),r.createElement(o.Link,{to:"/faq/",className:"block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1",role:"menuitem"},"FAQ"))))))}}}]);
//# sourceMappingURL=f1b1d752ab410e9a0141008a125894b2e64a17a3-7f6f897031e4a66ff250.js.map