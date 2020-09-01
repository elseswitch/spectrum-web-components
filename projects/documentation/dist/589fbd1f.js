let e,t,n,o=e=>e;import{c as i,L as r,h as a,i as s,p as c}from"./d0c3fe1b.js";function l(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function p(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function f(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function d(e){var t=f(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function u(e){return e instanceof f(e).Element||e instanceof Element}function h(e){return e instanceof f(e).HTMLElement||e instanceof HTMLElement}function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return(u(e)?e.ownerDocument:e.document).documentElement}function y(e){return p(v(e)).left+d(e).scrollLeft}function g(e){return f(e).getComputedStyle(e)}function b(e){var t=g(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function w(e,t,n){void 0===n&&(n=!1);var o,i,r=v(t),a=p(e),s=h(t),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&(("body"!==m(t)||b(r))&&(c=(o=t)!==f(o)&&h(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:d(o)),h(t)?((l=p(t)).x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=y(r))),{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function O(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||e.host||v(e)}function j(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(m(t))>=0?t.ownerDocument.body:h(t)&&b(t)?t:e(x(t))}(e),o="body"===m(n),i=f(n),r=o?[i].concat(i.visualViewport||[],b(n)?n:[]):n,a=t.concat(r);return o?a:a.concat(j(x(r)))}function P(e){return["table","td","th"].indexOf(m(e))>=0}function C(e){if(!h(e)||"fixed"===g(e).position)return null;var t=e.offsetParent;if(t){var n=v(t);if("body"===m(t)&&"static"===g(t).position&&"static"!==g(n).position)return n}return t}function E(e){for(var t=f(e),n=C(e);n&&P(n)&&"static"===g(n).position;)n=C(n);return n&&"body"===m(n)&&"static"===g(n).position?t:n||function(e){for(var t=x(e);h(t)&&["html","body"].indexOf(m(t))<0;){var n=g(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var A="top",D="bottom",M="right",k="left",L=[A,D,M,k],T=L.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),S=[].concat(L,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function W(e){var t=new Map,n=new Set,o=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach((function(o){if(!n.has(o)){var i=t.get(o);i&&e(i)}})),o.push(i)}(e)})),o}function B(e){return e.split("-")[0]}function F(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function H(e,t){return"viewport"===t?q(function(e){var t=f(e),n=v(e),o=t.visualViewport,i=n.clientWidth,r=n.clientHeight,a=0,s=0;return o&&(i=o.width,r=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:i,height:r,x:a+y(e),y:s}}(e)):h(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):q(function(e){var t=v(e),n=d(e),o=e.ownerDocument.body,i=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),r=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+y(e),s=-n.scrollTop;return"rtl"===g(o||t).direction&&(a+=Math.max(t.clientWidth,o?o.clientWidth:0)-i),{width:i,height:r,x:a,y:s}}(v(e)))}function z(e,t,n){var o="clippingParents"===t?function(e){var t=j(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&h(e)?E(e):e;return u(n)?t.filter((function(e){return u(e)&&F(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),r=i[0],a=i.reduce((function(t,n){var o=H(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),H(e,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function N(e){return e.split("-")[1]}function I(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,o=e.element,i=e.placement,r=i?B(i):null,a=i?N(i):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(r){case A:t={x:s,y:n.y-o.height};break;case D:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:c};break;case k:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var l=r?I(r):null;if(null!=l){var p="y"===l?"height":"width";switch(a){case"start":t[l]=Math.floor(t[l])-Math.floor(n[p]/2-o[p]/2);break;case"end":t[l]=Math.floor(t[l])+Math.ceil(n[p]/2-o[p]/2)}}return t}function _(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function V(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function $(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,r=n.boundary,a=void 0===r?"clippingParents":r,s=n.rootBoundary,c=void 0===s?"viewport":s,l=n.elementContext,f=void 0===l?"popper":l,d=n.altBoundary,h=void 0!==d&&d,m=n.padding,y=void 0===m?0:m,g=_("number"!=typeof y?y:V(y,L)),b="popper"===f?"reference":"popper",w=e.elements.reference,O=e.rects.popper,x=e.elements[h?b:f],j=z(u(x)?x:x.contextElement||v(e.elements.popper),a,c),P=p(w),C=U({reference:P,element:O,strategy:"absolute",placement:i}),E=q(Object.assign(Object.assign({},O),C)),k="popper"===f?E:P,T={top:j.top-k.top+g.top,bottom:k.bottom-j.bottom+g.bottom,left:j.left-k.left+g.left,right:k.right-j.right+g.right},S=e.modifiersData.offset;if("popper"===f&&S){var R=S[i];Object.keys(T).forEach((function(e){var t=[M,D].indexOf(e)>=0?1:-1,n=[A,D].indexOf(e)>=0?"y":"x";T[e]+=R[n]*t}))}return T}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var K={passive:!0};var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,o=e.popperRect,i=e.placement,r=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,l=function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}(r),p=l.x,d=l.y,u=r.hasOwnProperty("x"),h=r.hasOwnProperty("y"),m=k,y=A,g=window;if(c){var b=E(n);b===f(n)&&(b=v(n)),i===A&&(y=D,d-=b.clientHeight-o.height,d*=s?1:-1),i===k&&(m=M,p-=b.clientWidth-o.width,p*=s?1:-1)}var w,O=Object.assign({position:a},c&&G);return s?Object.assign(Object.assign({},O),{},((w={})[y]=h?"0":"",w[m]=u?"0":"",w.transform=(g.devicePixelRatio||1)<2?"translate("+p+"px, "+d+"px)":"translate3d("+p+"px, "+d+"px, 0)",w)):Object.assign(Object.assign({},O),{},((t={})[y]=h?d+"px":"",t[m]=u?p+"px":"",t.transform="",t))}var Q=[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,r=void 0===i||i,a=o.resize,s=void 0===a||a,c=f(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&l.forEach((function(e){e.addEventListener("scroll",n.update,K)})),s&&c.addEventListener("resize",n.update,K),function(){r&&l.forEach((function(e){e.removeEventListener("scroll",n.update,K)})),s&&c.removeEventListener("resize",n.update,K)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=void 0===o||o,r=n.adaptive,a=void 0===r||r,s={placement:B(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),J(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),J(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];h(i)&&m(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});h(o)&&m(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]}],Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function oe(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=n.boundary,r=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?S:c,p=N(o),f=p?s?T:T.filter((function(e){return N(e)===p})):L,d=f.filter((function(e){return l.indexOf(e)>=0}));0===d.length&&(d=f);var u=d.reduce((function(t,n){return t[n]=$(e,{placement:n,boundary:i,rootBoundary:r,padding:a})[B(n)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}var ie={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,r=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,u=n.flipVariations,h=void 0===u||u,m=n.allowedAutoPlacements,v=t.options.placement,y=B(v),g=c||(y===v||!h?[ee(v)]:function(e){if("auto"===B(e))return[];var t=ee(e);return[ne(e),t,ne(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat("auto"===B(n)?oe(t,{placement:n,boundary:p,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,j=!0,P=b[0],C=0;C<b.length;C++){var E=b[C],L=B(E),T="start"===N(E),S=[A,D].indexOf(L)>=0,R=S?"width":"height",W=$(t,{placement:E,boundary:p,rootBoundary:f,altBoundary:d,padding:l}),F=S?T?M:k:T?D:A;w[R]>O[R]&&(F=ee(F));var q=ee(F),H=[];if(r&&H.push(W[L]<=0),s&&H.push(W[F]<=0,W[q]<=0),H.every((function(e){return e}))){P=E,j=!1;break}x.set(E,H)}if(j)for(var z=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},I=h?3:1;I>0;I--){if("break"===z(I))break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function re(e,t,n){return Math.max(e,Math.min(t,n))}var ae={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,i=n.mainAxis,r=void 0===i||i,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,u=void 0===d||d,h=n.tetherOffset,m=void 0===h?0:h,v=$(t,{boundary:c,rootBoundary:l,padding:f,altBoundary:p}),y=B(t.placement),g=N(t.placement),b=!g,w=I(y),x="x"===w?"y":"x",j=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,L="function"==typeof m?m(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):m,T={x:0,y:0};if(j){if(r){var S="y"===w?A:k,R="y"===w?D:M,W="y"===w?"height":"width",F=j[w],q=j[w]+v[S],H=j[w]-v[R],z=u?-C[W]/2:0,U="start"===g?P[W]:C[W],_="start"===g?-C[W]:-P[W],V=t.elements.arrow,X=u&&V?O(V):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=Y[S],G=Y[R],J=re(0,P[W],X[W]),Q=b?P[W]/2-z-J-K-L:U-J-K-L,Z=b?-P[W]/2+z+J+G+L:_+J+G+L,ee=t.elements.arrow&&E(t.elements.arrow),te=ee?"y"===w?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,oe=j[w]+Q-ne-te,ie=j[w]+Z-ne,ae=re(u?Math.min(q,oe):q,F,u?Math.max(H,ie):H);j[w]=ae,T[w]=ae-F}if(s){var se="x"===w?A:k,ce="x"===w?D:M,le=j[x],pe=re(le+v[se],le,le-v[ce]);j[x]=pe,T[x]=pe-le}t.modifiersData[o]=T}},requiresIfExists:["offset"]};var se={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,i=n.elements.arrow,r=n.modifiersData.popperOffsets,a=B(n.placement),s=I(a),c=[k,M].indexOf(a)>=0?"height":"width";if(i&&r){var l=n.modifiersData[o+"#persistent"].padding,p=O(i),f="y"===s?A:k,d="y"===s?D:M,u=n.rects.reference[c]+n.rects.reference[s]-r[s]-n.rects.popper[c],h=r[s]-n.rects.reference[s],m=E(i),v=m?"y"===s?m.clientHeight||0:m.clientWidth||0:0,y=u/2-h/2,g=l[f],b=v-p[c]-l[d],w=v/2-p[c]/2+y,x=re(g,w,b),j=s;n.modifiersData[o]=((t={})[j]=x,t.centerOffset=x-w,t)}},effect:function(e){var t=e.state,n=e.options,o=e.name,i=n.element,r=void 0===i?"[data-popper-arrow]":i,a=n.padding,s=void 0===a?0:a;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&F(t.elements.popper,r)&&(t.elements.arrow=r,t.modifiersData[o+"#persistent"]={padding:_("number"!=typeof s?s:V(s,L))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var ce={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,i=n.offset,r=void 0===i?[0,0]:i,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var o=B(e),i=[k,A].indexOf(o)>=0?-1:1,r="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=r[0],s=r[1];return a=a||0,s=(s||0)*i,[k,M].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,r),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=a}};const le={name:"computeArrowRotateStyles",enabled:!0,phase:"beforeWrite",requiresIfExists:["arrow"],fn:function(e){if(!e.state.styles||!e.state.styles.arrow)return;let t;switch(e.state.placement){case"bottom":case"bottom-start":case"bottom-end":t=180;break;case"top":case"top-start":case"top-end":return;case"left":case"left-start":case"left-end":t=270;break;case"right":case"right-start":case"right-end":t=90;break;default:return}e.state.styles.arrow.transform+=` rotate(${t}deg)`,e.state.styles.arrow.marginLeft="0",e.state.styles.arrow.marginTop="0"},data:{}};var pe={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(e){var t=e.state,n=e.name,o=$(t,e.options),i=t.modifiersData.preventOverflow||{x:0,y:0},r=i.x,a=i.y,s=t.rects.popper,c=s.width,l=s.height,p=t.placement.split("-")[0],f="left"===p?"left":"right",d="top"===p?"top":"bottom";t.modifiersData[n]={width:c-o[f]-r,height:l-o[d]-a}}};const fe=new WeakMap,de={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:e}){const{height:t}=e.modifiersData.maxSize;fe.has(e.elements.popper)||fe.set(e.elements.popper,e.rects.popper.height);const n=t<fe.get(e.elements.popper)?`${t}px`:"";e.styles.popper.maxHeight=n,e.styles.popper.height=n}},ue=function(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,r=void 0===i?X:i;return function(e,t,n){void 0===n&&(n=r);var i,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},X),r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,p={state:s,setOptions:function(n){f(),s.options=Object.assign(Object.assign(Object.assign({},r),s.options),n),s.scrollParents={reference:u(e)?j(e):e.contextElement?j(e.contextElement):[],popper:j(t)};var i,a,l=function(e){var t=W(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((i=[].concat(o,s.options.modifiers),a=i.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var r=i({state:s,name:t,instance:p,options:o});c.push(r||function(){})}})),p.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(Y(t,n)){s.rects={reference:w(t,E(n),"fixed"===s.options.strategy),popper:O(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var i=s.orderedModifiers[o],r=i.fn,a=i.options,c=void 0===a?{}:a,f=i.name;"function"==typeof r&&(s=r({state:s,options:c,name:f,instance:p})||s)}else s.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),l=!0}};if(!Y(e,t))return p;function f(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}({defaultModifiers:[...Q,ie,ae,se,ce,le]}),he=i(e||(e=o`@keyframes spOverlayFadeIn{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes spOverlayFadeOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{z-index:1000;position:absolute;display:inline-block;pointer-events:none}#contents,sp-theme{height:100%}#contents{display:inline-block;pointer-events:none;animation-duration:var(--spectrum-global-animation-duration-200,.16s);animation-timing-function:var(--spectrum-global-animation-ease-out,ease-out);opacity:1;visibility:visible}:host([data-popper-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75))}:host([data-popper-placement*=right]) #contents{--sp-overlay-from:translateX(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(-1*var(--spectrum-global-dimension-size-75)))}:host([data-popper-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}:host([animating]) ::slotted(*){pointer-events:none}#contents ::slotted(*){position:relative}`)),me={initial:"idle",states:{idle:{on:{active:"active"}},active:{on:{visible:"visible",hiding:"hiding",idle:"idle"}},visible:{on:{hiding:"hiding",idle:"idle"}},hiding:{on:{dispose:"dispose"}},dispose:{on:{disposed:"disposed"}},disposed:{on:{}}}},ve=(e,t)=>e?t&&me.states[e].on[t]||e:me.initial;class ye extends r{constructor(){super(),this.originalSlot=null,this._state=ve(),this.animating=!1,this.tabbingAway=!1,this.offset=6,this.interaction="hover",this.positionAnimationFrame=0,this.handleInlineTriggerKeydown=e=>{const{code:t,shiftKey:n}=e;if("Tab"===t){if(n)return this.tabbingAway=!0,void this.dispatchEvent(new Event("close"));e.stopPropagation(),e.preventDefault(),this.focus()}},this.stealOverlayContentPromise=Promise.resolve(),this.stealOverlayContentPromise=new Promise(e=>this.stealOverlayContentResolver=e)}get state(){return this._state}set state(e){const t=ve(this.state,e);t!==this.state&&(this._state=t,"active"===this.state||"visible"===this.state||"hiding"===this.state?this.setAttribute("state",this.state):this.removeAttribute("state"))}focus(){const e=this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');e?(e.focus(),this.removeAttribute("tabindex")):super.focus()}get hasTheme(){return!!this.color||!!this.scale}static get styles(){return[he]}feature(){this.tabIndex=0,"modal"===this.interaction&&(this.slot="open")}obscure(){"modal"===this.interaction&&this.removeAttribute("slot")}firstUpdated(e){super.firstUpdated(e),this.overlayContent&&(this.stealOverlayContent(this.overlayContent),this.overlayContent&&this.trigger&&this.shadowRoot&&(this.placement&&"none"!==this.placement&&(this.popper=ue(this.trigger,this,{placement:this.placement,modifiers:[pe,de,{name:"arrow",options:{element:this.overlayContentTip}},{name:"offset",options:{offset:[0,this.offset]}}]})),this.state="active",document.addEventListener("sp-update-overlays",()=>{this.updateOverlayPosition(),this.state="visible"}),this.feature(),this.updateOverlayPosition().then(()=>this.applyContentAnimation("spOverlayFadeIn")).then(()=>{this.receivesFocus&&this.focus()})))}updateOverlayPopperPlacement(){this.overlayContent&&(this.dataPopperPlacement?this.overlayContent.setAttribute("placement",this.dataPopperPlacement):this.originalPlacement?this.overlayContent.setAttribute("placement",this.originalPlacement):this.overlayContent.removeAttribute("placement"))}updated(e){e.has("dataPopperPlacement")&&this.updateOverlayPopperPlacement()}open(e){this.extractDetail(e)}extractDetail(e){this.overlayContent=e.content,this.overlayContentTip=e.contentTip,this.trigger=e.trigger,this.placement=e.placement,this.offset=e.offset,this.interaction=e.interaction,this.color=e.theme.color,this.scale=e.theme.scale,this.receivesFocus=e.receivesFocus}dispose(){"dispose"===this.state&&(this.timeout&&(clearTimeout(this.timeout),delete this.timeout),this.popper&&(this.popper.destroy(),this.popper=void 0),this.returnFocusElement&&(this.returnFocusElement.remove(),this.trigger.removeEventListener("keydown",this.handleInlineTriggerKeydown)),this.returnOverlayContent(),this.state="disposed")}stealOverlayContent(e){if(this.placeholder||!e)return;this.placeholder||(this.placeholder=document.createComment("placeholder for "+e.nodeName));const t=e.parentElement||e.getRootNode();t&&t.replaceChild(this.placeholder,e),this.overlayContent=e,this.originalSlot=this.overlayContent.getAttribute("slot"),this.overlayContent.setAttribute("slot","overlay"),this.appendChild(this.overlayContent),this.originalPlacement=this.overlayContent.getAttribute("placement"),this.stealOverlayContentResolver()}returnOverlayContent(){if(this.overlayContent){if(this.originalSlot?(this.overlayContent.setAttribute("slot",this.originalSlot),delete this.originalSlot):this.overlayContent.removeAttribute("slot"),this.placeholder){const e=this.placeholder.parentElement||this.placeholder.getRootNode();e&&(e.replaceChild(this.overlayContent,this.placeholder),this.overlayContent.dispatchEvent(new Event("sp-overlay-closed")))}this.originalPlacement&&(this.overlayContent.setAttribute("placement",this.originalPlacement),delete this.originalPlacement),delete this.placeholder}}async updateOverlayPosition(){this.popper&&await this.popper.update()}async hide(e=!0){this.state="hiding",e&&await this.applyContentAnimation("spOverlayFadeOut"),this.state="dispose"}schedulePositionUpdate(){cancelAnimationFrame(this.positionAnimationFrame),this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition())}onSlotChange(){this.schedulePositionUpdate()}connectedCallback(){super.connectedCallback(),this.schedulePositionUpdate()}applyContentAnimation(e){return new Promise((t,n)=>{if(!this.shadowRoot)return void n();const o=this.shadowRoot.querySelector("#contents"),i=n=>{e===n.animationName&&(o.removeEventListener("animationend",i),o.removeEventListener("animationcancel",i),this.animating=!1,t("animationcancel"===n.type))};o.addEventListener("animationend",i),o.addEventListener("animationcancel",i),o.style.animationName=e,this.animating=!0})}renderTheme(e){const{color:n,scale:i}=this;return a(t||(t=o` <sp-theme color="${0}" scale="${0}"> ${0} </sp-theme> `),s(n),s(i),e)}render(){const e=a(n||(n=o` <div id="contents"> <slot @slotchange="${0}" name="overlay"></slot> </div> `),this.onSlotChange);return this.hasTheme?this.renderTheme(e):e}static create(e){const t=new ye;return e.content&&t.open(e),t}async _getUpdateComplete(){await super._getUpdateComplete(),await this.stealOverlayContentPromise}}l([c()],ye.prototype,"_state",void 0),l([c({reflect:!0,type:Boolean})],ye.prototype,"animating",void 0),l([c({reflect:!0})],ye.prototype,"placement",void 0),l([c({attribute:!1})],ye.prototype,"color",void 0),l([c({attribute:!1})],ye.prototype,"receivesFocus",void 0),l([c({attribute:!1})],ye.prototype,"scale",void 0),l([c({attribute:"data-popper-placement"})],ye.prototype,"dataPopperPlacement",void 0),customElements.define("active-overlay",ye);export{ye as A,l as _};
//# sourceMappingURL=589fbd1f.js.map
