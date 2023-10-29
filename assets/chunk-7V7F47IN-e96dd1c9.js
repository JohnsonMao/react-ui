import{n as Lt,l as pt,b as et,_ as Ce}from"./chunk-FD4M6EBV-ed0da2b7.js";import{a as Ae,m as Te,_ as ke}from"./chunk-JRLSWQMA-6fe1e456.js";import{R as G,r as R}from"./index-2812c619.js";import{R as $e,r as je}from"./index-62c31eed.js";const{global:De}=__STORYBOOK_MODULE_GLOBAL__;var We=ke({"../../node_modules/react-fast-compare/index.js"(t,e){var r=typeof Element<"u",o=typeof Map=="function",n=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function c(u,a){if(u===a)return!0;if(u&&a&&typeof u=="object"&&typeof a=="object"){if(u.constructor!==a.constructor)return!1;var i,f,p;if(Array.isArray(u)){if(i=u.length,i!=a.length)return!1;for(f=i;f--!==0;)if(!c(u[f],a[f]))return!1;return!0}var l;if(o&&u instanceof Map&&a instanceof Map){if(u.size!==a.size)return!1;for(l=u.entries();!(f=l.next()).done;)if(!a.has(f.value[0]))return!1;for(l=u.entries();!(f=l.next()).done;)if(!c(f.value[1],a.get(f.value[0])))return!1;return!0}if(n&&u instanceof Set&&a instanceof Set){if(u.size!==a.size)return!1;for(l=u.entries();!(f=l.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(a)){if(i=u.length,i!=a.length)return!1;for(f=i;f--!==0;)if(u[f]!==a[f])return!1;return!0}if(u.constructor===RegExp)return u.source===a.source&&u.flags===a.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof a.valueOf=="function")return u.valueOf()===a.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof a.toString=="function")return u.toString()===a.toString();if(p=Object.keys(u),i=p.length,i!==Object.keys(a).length)return!1;for(f=i;f--!==0;)if(!Object.prototype.hasOwnProperty.call(a,p[f]))return!1;if(r&&u instanceof Element)return!1;for(f=i;f--!==0;)if(!((p[f]==="_owner"||p[f]==="__v"||p[f]==="__o")&&u.$$typeof)&&!c(u[p[f]],a[p[f]]))return!1;return!0}return u!==u&&a!==a}e.exports=function(u,a){try{return c(u,a)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}}}),Gt=function(t){return t.reduce(function(e,r){var o=r[0],n=r[1];return e[o]=n,e},{})},Jt=typeof window<"u"&&window.document&&window.document.createElement?R.useLayoutEffect:R.useEffect,W="top",N="bottom",V="right",B="left",jt="auto",ht=[W,N,V,B],it="start",mt="end",Be="clippingParents",ue="viewport",lt="popper",Pe="reference",Kt=ht.reduce(function(t,e){return t.concat([e+"-"+it,e+"-"+mt])},[]),fe=[].concat(ht,[jt]).reduce(function(t,e){return t.concat([e,e+"-"+it,e+"-"+mt])},[]),Me="beforeRead",He="read",_e="afterRead",Ne="beforeMain",Ve="main",qe="afterMain",Ue="beforeWrite",ze="write",Ie="afterWrite",Ye=[Me,He,_e,Ne,Ve,qe,Ue,ze,Ie];function z(t){return t?(t.nodeName||"").toLowerCase():null}function M(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function nt(t){var e=M(t).Element;return t instanceof e||t instanceof Element}function _(t){var e=M(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Dt(t){if(typeof ShadowRoot>"u")return!1;var e=M(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Xe(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},s=e.elements[r];!_(s)||!z(s)||(Object.assign(s.style,o),Object.keys(n).forEach(function(c){var u=n[c];u===!1?s.removeAttribute(c):s.setAttribute(c,u===!0?"":u)}))})}function Fe(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],s=e.attributes[o]||{},c=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),u=c.reduce(function(a,i){return a[i]="",a},{});!_(n)||!z(n)||(Object.assign(n.style,u),Object.keys(s).forEach(function(a){n.removeAttribute(a)}))})}}var Ge={name:"applyStyles",enabled:!0,phase:"write",fn:Xe,effect:Fe,requires:["computeStyles"]};function U(t){return t.split("-")[0]}var rt=Math.max,St=Math.min,at=Math.round;function kt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ce(){return!/^((?!chrome|android).)*safari/i.test(kt())}function st(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,s=1;e&&_(t)&&(n=t.offsetWidth>0&&at(o.width)/t.offsetWidth||1,s=t.offsetHeight>0&&at(o.height)/t.offsetHeight||1);var c=nt(t)?M(t):window,u=c.visualViewport,a=!ce()&&r,i=(o.left+(a&&u?u.offsetLeft:0))/n,f=(o.top+(a&&u?u.offsetTop:0))/s,p=o.width/n,l=o.height/s;return{width:p,height:l,top:f,right:i+p,bottom:f+l,left:i,x:i,y:f}}function Wt(t){var e=st(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function le(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Dt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function X(t){return M(t).getComputedStyle(t)}function Je(t){return["table","td","th"].indexOf(z(t))>=0}function J(t){return((nt(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ct(t){return z(t)==="html"?t:t.assignedSlot||t.parentNode||(Dt(t)?t.host:null)||J(t)}function Qt(t){return!_(t)||X(t).position==="fixed"?null:t.offsetParent}function Ke(t){var e=/firefox/i.test(kt()),r=/Trident/i.test(kt());if(r&&_(t)){var o=X(t);if(o.position==="fixed")return null}var n=Ct(t);for(Dt(n)&&(n=n.host);_(n)&&["html","body"].indexOf(z(n))<0;){var s=X(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function yt(t){for(var e=M(t),r=Qt(t);r&&Je(r)&&X(r).position==="static";)r=Qt(r);return r&&(z(r)==="html"||z(r)==="body"&&X(r).position==="static")?e:r||Ke(t)||e}function Bt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function dt(t,e,r){return rt(t,St(e,r))}function Qe(t,e,r){var o=dt(t,e,r);return o>r?r:o}function pe(){return{top:0,right:0,bottom:0,left:0}}function de(t){return Object.assign({},pe(),t)}function ve(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var Ze=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,de(typeof t!="number"?t:ve(t,ht))};function tr(t){var e,r=t.state,o=t.name,n=t.options,s=r.elements.arrow,c=r.modifiersData.popperOffsets,u=U(r.placement),a=Bt(u),i=[B,V].indexOf(u)>=0,f=i?"height":"width";if(!(!s||!c)){var p=Ze(n.padding,r),l=Wt(s),v=a==="y"?W:B,h=a==="y"?N:V,d=r.rects.reference[f]+r.rects.reference[a]-c[a]-r.rects.popper[f],O=c[a]-r.rects.reference[a],x=yt(s),T=x?a==="y"?x.clientHeight||0:x.clientWidth||0:0,k=d/2-O/2,y=p[v],b=T-l[f]-p[h],m=T/2-l[f]/2+k,S=dt(y,m,b),E=a;r.modifiersData[o]=(e={},e[E]=S,e.centerOffset=S-m,e)}}function er(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||le(e.elements.popper,n)&&(e.elements.arrow=n))}var rr={name:"arrow",enabled:!0,phase:"main",fn:tr,effect:er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ut(t){return t.split("-")[1]}var nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function or(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:at(r*n)/n||0,y:at(o*n)/n||0}}function Zt(t){var e,r=t.popper,o=t.popperRect,n=t.placement,s=t.variation,c=t.offsets,u=t.position,a=t.gpuAcceleration,i=t.adaptive,f=t.roundOffsets,p=t.isFixed,l=c.x,v=l===void 0?0:l,h=c.y,d=h===void 0?0:h,O=typeof f=="function"?f({x:v,y:d}):{x:v,y:d};v=O.x,d=O.y;var x=c.hasOwnProperty("x"),T=c.hasOwnProperty("y"),k=B,y=W,b=window;if(i){var m=yt(r),S="clientHeight",E="clientWidth";if(m===M(r)&&(m=J(r),X(m).position!=="static"&&u==="absolute"&&(S="scrollHeight",E="scrollWidth")),m=m,n===W||(n===B||n===V)&&s===mt){y=N;var w=p&&m===b&&b.visualViewport?b.visualViewport.height:m[S];d-=w-o.height,d*=a?1:-1}if(n===B||(n===W||n===N)&&s===mt){k=V;var L=p&&m===b&&b.visualViewport?b.visualViewport.width:m[E];v-=L-o.width,v*=a?1:-1}}var A=Object.assign({position:u},i&&nr),D=f===!0?or({x:v,y:d},M(r)):{x:v,y:d};if(v=D.x,d=D.y,a){var j;return Object.assign({},A,(j={},j[y]=T?"0":"",j[k]=x?"0":"",j.transform=(b.devicePixelRatio||1)<=1?"translate("+v+"px, "+d+"px)":"translate3d("+v+"px, "+d+"px, 0)",j))}return Object.assign({},A,(e={},e[y]=T?d+"px":"",e[k]=x?v+"px":"",e.transform="",e))}function ir(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,s=r.adaptive,c=s===void 0?!0:s,u=r.roundOffsets,a=u===void 0?!0:u,i={placement:U(e.placement),variation:ut(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Zt(Object.assign({},i,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:a})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Zt(Object.assign({},i,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ir,data:{}},xt={passive:!0};function sr(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,s=n===void 0?!0:n,c=o.resize,u=c===void 0?!0:c,a=M(e.elements.popper),i=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&i.forEach(function(f){f.addEventListener("scroll",r.update,xt)}),u&&a.addEventListener("resize",r.update,xt),function(){s&&i.forEach(function(f){f.removeEventListener("scroll",r.update,xt)}),u&&a.removeEventListener("resize",r.update,xt)}}var ur={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:sr,data:{}},fr={left:"right",right:"left",bottom:"top",top:"bottom"};function Et(t){return t.replace(/left|right|bottom|top/g,function(e){return fr[e]})}var cr={start:"end",end:"start"};function te(t){return t.replace(/start|end/g,function(e){return cr[e]})}function Pt(t){var e=M(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Mt(t){return st(J(t)).left+Pt(t).scrollLeft}function lr(t,e){var r=M(t),o=J(t),n=r.visualViewport,s=o.clientWidth,c=o.clientHeight,u=0,a=0;if(n){s=n.width,c=n.height;var i=ce();(i||!i&&e==="fixed")&&(u=n.offsetLeft,a=n.offsetTop)}return{width:s,height:c,x:u+Mt(t),y:a}}function pr(t){var e,r=J(t),o=Pt(t),n=(e=t.ownerDocument)==null?void 0:e.body,s=rt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=rt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),u=-o.scrollLeft+Mt(t),a=-o.scrollTop;return X(n||r).direction==="rtl"&&(u+=rt(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:c,x:u,y:a}}function Ht(t){var e=X(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function me(t){return["html","body","#document"].indexOf(z(t))>=0?t.ownerDocument.body:_(t)&&Ht(t)?t:me(Ct(t))}function vt(t,e){var r;e===void 0&&(e=[]);var o=me(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),s=M(o),c=n?[s].concat(s.visualViewport||[],Ht(o)?o:[]):o,u=e.concat(c);return n?u:u.concat(vt(Ct(c)))}function $t(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function dr(t,e){var r=st(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ee(t,e,r){return e===ue?$t(lr(t,r)):nt(e)?dr(e,r):$t(pr(J(t)))}function vr(t){var e=vt(Ct(t)),r=["absolute","fixed"].indexOf(X(t).position)>=0,o=r&&_(t)?yt(t):t;return nt(o)?e.filter(function(n){return nt(n)&&le(n,o)&&z(n)!=="body"}):[]}function mr(t,e,r,o){var n=e==="clippingParents"?vr(t):[].concat(e),s=[].concat(n,[r]),c=s[0],u=s.reduce(function(a,i){var f=ee(t,i,o);return a.top=rt(f.top,a.top),a.right=St(f.right,a.right),a.bottom=St(f.bottom,a.bottom),a.left=rt(f.left,a.left),a},ee(t,c,o));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function ge(t){var e=t.reference,r=t.element,o=t.placement,n=o?U(o):null,s=o?ut(o):null,c=e.x+e.width/2-r.width/2,u=e.y+e.height/2-r.height/2,a;switch(n){case W:a={x:c,y:e.y-r.height};break;case N:a={x:c,y:e.y+e.height};break;case V:a={x:e.x+e.width,y:u};break;case B:a={x:e.x-r.width,y:u};break;default:a={x:e.x,y:e.y}}var i=n?Bt(n):null;if(i!=null){var f=i==="y"?"height":"width";switch(s){case it:a[i]=a[i]-(e[f]/2-r[f]/2);break;case mt:a[i]=a[i]+(e[f]/2-r[f]/2);break}}return a}function gt(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,s=r.strategy,c=s===void 0?t.strategy:s,u=r.boundary,a=u===void 0?Be:u,i=r.rootBoundary,f=i===void 0?ue:i,p=r.elementContext,l=p===void 0?lt:p,v=r.altBoundary,h=v===void 0?!1:v,d=r.padding,O=d===void 0?0:d,x=de(typeof O!="number"?O:ve(O,ht)),T=l===lt?Pe:lt,k=t.rects.popper,y=t.elements[h?T:l],b=mr(nt(y)?y:y.contextElement||J(t.elements.popper),a,f,c),m=st(t.elements.reference),S=ge({reference:m,element:k,strategy:"absolute",placement:n}),E=$t(Object.assign({},k,S)),w=l===lt?E:m,L={top:b.top-w.top+x.top,bottom:w.bottom-b.bottom+x.bottom,left:b.left-w.left+x.left,right:w.right-b.right+x.right},A=t.modifiersData.offset;if(l===lt&&A){var D=A[n];Object.keys(L).forEach(function(j){var P=[V,N].indexOf(j)>=0?1:-1,g=[W,N].indexOf(j)>=0?"y":"x";L[j]+=D[g]*P})}return L}function gr(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,s=r.rootBoundary,c=r.padding,u=r.flipVariations,a=r.allowedAutoPlacements,i=a===void 0?fe:a,f=ut(o),p=f?u?Kt:Kt.filter(function(h){return ut(h)===f}):ht,l=p.filter(function(h){return i.indexOf(h)>=0});l.length===0&&(l=p);var v=l.reduce(function(h,d){return h[d]=gt(t,{placement:d,boundary:n,rootBoundary:s,padding:c})[U(d)],h},{});return Object.keys(v).sort(function(h,d){return v[h]-v[d]})}function hr(t){if(U(t)===jt)return[];var e=Et(t);return[te(t),e,te(e)]}function yr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,c=r.altAxis,u=c===void 0?!0:c,a=r.fallbackPlacements,i=r.padding,f=r.boundary,p=r.rootBoundary,l=r.altBoundary,v=r.flipVariations,h=v===void 0?!0:v,d=r.allowedAutoPlacements,O=e.options.placement,x=U(O),T=x===O,k=a||(T||!h?[Et(O)]:hr(O)),y=[O].concat(k).reduce(function(Z,Y){return Z.concat(U(Y)===jt?gr(e,{placement:Y,boundary:f,rootBoundary:p,padding:i,flipVariations:h,allowedAutoPlacements:d}):Y)},[]),b=e.rects.reference,m=e.rects.popper,S=new Map,E=!0,w=y[0],L=0;L<y.length;L++){var A=y[L],D=U(A),j=ut(A)===it,P=[W,N].indexOf(D)>=0,g=P?"width":"height",C=gt(e,{placement:A,boundary:f,rootBoundary:p,altBoundary:l,padding:i}),$=P?j?V:B:j?N:W;b[g]>m[g]&&($=Et($));var I=Et($),q=[];if(s&&q.push(C[D]<=0),u&&q.push(C[$]<=0,C[I]<=0),q.every(function(Z){return Z})){w=A,E=!1;break}S.set(A,q)}if(E)for(var K=h?3:1,Q=function(Z){var Y=y.find(function(wt){var ct=S.get(wt);if(ct)return ct.slice(0,Z).every(function(ot){return ot})});if(Y)return w=Y,"break"},ft=K;ft>0;ft--){var bt=Q(ft);if(bt==="break")break}e.placement!==w&&(e.modifiersData[o]._skip=!0,e.placement=w,e.reset=!0)}}var br={name:"flip",enabled:!0,phase:"main",fn:yr,requiresIfExists:["offset"],data:{_skip:!1}};function re(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ne(t){return[W,V,N,B].some(function(e){return t[e]>=0})}function wr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,s=e.modifiersData.preventOverflow,c=gt(e,{elementContext:"reference"}),u=gt(e,{altBoundary:!0}),a=re(c,o),i=re(u,n,s),f=ne(a),p=ne(i);e.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:i,isReferenceHidden:f,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}var Or={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:wr};function xr(t,e,r){var o=U(t),n=[B,W].indexOf(o)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=s[0],u=s[1];return c=c||0,u=(u||0)*n,[B,V].indexOf(o)>=0?{x:u,y:c}:{x:c,y:u}}function Er(t){var e=t.state,r=t.options,o=t.name,n=r.offset,s=n===void 0?[0,0]:n,c=fe.reduce(function(f,p){return f[p]=xr(p,e.rects,s),f},{}),u=c[e.placement],a=u.x,i=u.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=i),e.modifiersData[o]=c}var Rr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Er};function Sr(t){var e=t.state,r=t.name;e.modifiersData[r]=ge({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Lr={name:"popperOffsets",enabled:!0,phase:"read",fn:Sr,data:{}};function Cr(t){return t==="x"?"y":"x"}function Ar(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,s=n===void 0?!0:n,c=r.altAxis,u=c===void 0?!1:c,a=r.boundary,i=r.rootBoundary,f=r.altBoundary,p=r.padding,l=r.tether,v=l===void 0?!0:l,h=r.tetherOffset,d=h===void 0?0:h,O=gt(e,{boundary:a,rootBoundary:i,padding:p,altBoundary:f}),x=U(e.placement),T=ut(e.placement),k=!T,y=Bt(x),b=Cr(y),m=e.modifiersData.popperOffsets,S=e.rects.reference,E=e.rects.popper,w=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,L=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),A=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(m){if(s){var j,P=y==="y"?W:B,g=y==="y"?N:V,C=y==="y"?"height":"width",$=m[y],I=$+O[P],q=$-O[g],K=v?-E[C]/2:0,Q=T===it?S[C]:E[C],ft=T===it?-E[C]:-S[C],bt=e.elements.arrow,Z=v&&bt?Wt(bt):{width:0,height:0},Y=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:pe(),wt=Y[P],ct=Y[g],ot=dt(0,S[C],Z[C]),we=k?S[C]/2-K-ot-wt-L.mainAxis:Q-ot-wt-L.mainAxis,Oe=k?-S[C]/2+K+ot+ct+L.mainAxis:ft+ot+ct+L.mainAxis,At=e.elements.arrow&&yt(e.elements.arrow),xe=At?y==="y"?At.clientTop||0:At.clientLeft||0:0,Nt=(j=A==null?void 0:A[y])!=null?j:0,Ee=$+we-Nt-xe,Re=$+Oe-Nt,Vt=dt(v?St(I,Ee):I,$,v?rt(q,Re):q);m[y]=Vt,D[y]=Vt-$}if(u){var qt,Se=y==="x"?W:B,Le=y==="x"?N:V,tt=m[b],Ot=b==="y"?"height":"width",Ut=tt+O[Se],zt=tt-O[Le],Tt=[W,B].indexOf(x)!==-1,It=(qt=A==null?void 0:A[b])!=null?qt:0,Yt=Tt?Ut:tt-S[Ot]-E[Ot]-It+L.altAxis,Xt=Tt?tt+S[Ot]+E[Ot]-It-L.altAxis:zt,Ft=v&&Tt?Qe(Yt,tt,Xt):dt(v?Yt:Ut,tt,v?Xt:zt);m[b]=Ft,D[b]=Ft-tt}e.modifiersData[o]=D}}var Tr={name:"preventOverflow",enabled:!0,phase:"main",fn:Ar,requiresIfExists:["offset"]};function kr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function $r(t){return t===M(t)||!_(t)?Pt(t):kr(t)}function jr(t){var e=t.getBoundingClientRect(),r=at(e.width)/t.offsetWidth||1,o=at(e.height)/t.offsetHeight||1;return r!==1||o!==1}function Dr(t,e,r){r===void 0&&(r=!1);var o=_(e),n=_(e)&&jr(e),s=J(e),c=st(t,n,r),u={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((z(e)!=="body"||Ht(s))&&(u=$r(e)),_(e)?(a=st(e,!0),a.x+=e.clientLeft,a.y+=e.clientTop):s&&(a.x=Mt(s))),{x:c.left+u.scrollLeft-a.x,y:c.top+u.scrollTop-a.y,width:c.width,height:c.height}}function Wr(t){var e=new Map,r=new Set,o=[];t.forEach(function(s){e.set(s.name,s)});function n(s){r.add(s.name);var c=[].concat(s.requires||[],s.requiresIfExists||[]);c.forEach(function(u){if(!r.has(u)){var a=e.get(u);a&&n(a)}}),o.push(s)}return t.forEach(function(s){r.has(s.name)||n(s)}),o}function Br(t){var e=Wr(t);return Ye.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function Pr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Mr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var oe={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Hr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,s=n===void 0?oe:n;return function(c,u,a){a===void 0&&(a=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},oe,s),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},f=[],p=!1,l={state:i,setOptions:function(d){var O=typeof d=="function"?d(i.options):d;h(),i.options=Object.assign({},s,i.options,O),i.scrollParents={reference:nt(c)?vt(c):c.contextElement?vt(c.contextElement):[],popper:vt(u)};var x=Br(Mr([].concat(o,i.options.modifiers)));return i.orderedModifiers=x.filter(function(T){return T.enabled}),v(),l.update()},forceUpdate:function(){if(!p){var d=i.elements,O=d.reference,x=d.popper;if(ie(O,x)){i.rects={reference:Dr(O,yt(x),i.options.strategy==="fixed"),popper:Wt(x)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(E){return i.modifiersData[E.name]=Object.assign({},E.data)});for(var T=0;T<i.orderedModifiers.length;T++){if(i.reset===!0){i.reset=!1,T=-1;continue}var k=i.orderedModifiers[T],y=k.fn,b=k.options,m=b===void 0?{}:b,S=k.name;typeof y=="function"&&(i=y({state:i,options:m,name:S,instance:l})||i)}}}},update:Pr(function(){return new Promise(function(d){l.forceUpdate(),d(i)})}),destroy:function(){h(),p=!0}};if(!ie(c,u))return l;l.setOptions(a).then(function(d){!p&&a.onFirstUpdate&&a.onFirstUpdate(d)});function v(){i.orderedModifiers.forEach(function(d){var O=d.name,x=d.options,T=x===void 0?{}:x,k=d.effect;if(typeof k=="function"){var y=k({state:i,name:O,instance:l,options:T}),b=function(){};f.push(y||b)}})}function h(){f.forEach(function(d){return d()}),f=[]}return l}}var _r=[ur,Lr,ar,Ge,Rr,br,Tr,rr,Or],Nr=Hr({defaultModifiers:_r}),Vr=Ae(We()),qr=[],Ur=function(t,e,r){r===void 0&&(r={});var o=R.useRef(null),n={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||qr},s=R.useState({styles:{popper:{position:n.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=s[0],u=s[1],a=R.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var l=p.state,v=Object.keys(l.elements);je.flushSync(function(){u({styles:Gt(v.map(function(h){return[h,l.styles[h]||{}]})),attributes:Gt(v.map(function(h){return[h,l.attributes[h]]}))})})},requires:["computeStyles"]}},[]),i=R.useMemo(function(){var p={onFirstUpdate:n.onFirstUpdate,placement:n.placement,strategy:n.strategy,modifiers:[].concat(n.modifiers,[a,{name:"applyStyles",enabled:!1}])};return(0,Vr.default)(o.current,p)?o.current||p:(o.current=p,p)},[n.onFirstUpdate,n.placement,n.strategy,n.modifiers,a]),f=R.useRef();return Jt(function(){f.current&&f.current.setOptions(i)},[i]),Jt(function(){if(!(t==null||e==null)){var p=r.createPopper||Nr,l=p(t,e,i);return f.current=l,function(){l.destroy(),f.current=null}}},[t,e,r.createPopper]),{state:f.current?f.current.state:null,styles:c.styles,attributes:c.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};function he(t){var e=R.useRef(t);return e.current=t,R.useCallback(function(){return e.current},[])}var zr=function(){};function Ir(t){var e=t.initial,r=t.value,o=t.onChange,n=o===void 0?zr:o;if(e===void 0&&r===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var s=R.useState(e),c=s[0],u=s[1],a=he(c),i=R.useCallback(function(p){var l=a(),v=typeof p=="function"?p(l):p;typeof v.persist=="function"&&v.persist(),u(v),typeof n=="function"&&n(v)},[a,n]),f=r!==void 0;return[f?r:c,f?n:i]}function ye(t,e){return t===void 0&&(t=0),e===void 0&&(e=0),function(){return{width:0,height:0,top:e,right:t,bottom:e,left:t,x:0,y:0,toJSON:function(){return null}}}}var Yr=["styles","attributes"],ae={getBoundingClientRect:ye()},se={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function Xr(t,e){var r,o,n;t===void 0&&(t={}),e===void 0&&(e={});var s=Object.keys(se).reduce(function(g,C){var $;return et({},g,($={},$[C]=g[C]!==void 0?g[C]:se[C],$))},t),c=R.useMemo(function(){return[{name:"offset",options:{offset:s.offset}}]},Array.isArray(s.offset)?s.offset:[]),u=et({},e,{placement:e.placement||s.placement,modifiers:e.modifiers||c}),a=R.useState(null),i=a[0],f=a[1],p=R.useState(null),l=p[0],v=p[1],h=Ir({initial:s.defaultVisible,value:s.visible,onChange:s.onVisibleChange}),d=h[0],O=h[1],x=R.useRef();R.useEffect(function(){return function(){return clearTimeout(x.current)}},[]);var T=Ur(s.followCursor?ae:i,l,u),k=T.styles,y=T.attributes,b=Ce(T,Yr),m=b.update,S=he({visible:d,triggerRef:i,tooltipRef:l,finalConfig:s}),E=R.useCallback(function(g){return Array.isArray(s.trigger)?s.trigger.includes(g):s.trigger===g},Array.isArray(s.trigger)?s.trigger:[s.trigger]),w=R.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return O(!1)},s.delayHide)},[s.delayHide,O]),L=R.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return O(!0)},s.delayShow)},[s.delayShow,O]),A=R.useCallback(function(){S().visible?w():L()},[S,w,L]);R.useEffect(function(){if(S().finalConfig.closeOnOutsideClick){var g=function(C){var $,I=S(),q=I.tooltipRef,K=I.triggerRef,Q=(C.composedPath==null||($=C.composedPath())==null?void 0:$[0])||C.target;Q instanceof Node&&q!=null&&K!=null&&!q.contains(Q)&&!K.contains(Q)&&w()};return document.addEventListener("mousedown",g),function(){return document.removeEventListener("mousedown",g)}}},[S,w]),R.useEffect(function(){if(!(i==null||!E("click")))return i.addEventListener("click",A),function(){return i.removeEventListener("click",A)}},[i,E,A]),R.useEffect(function(){if(!(i==null||!E("double-click")))return i.addEventListener("dblclick",A),function(){return i.removeEventListener("dblclick",A)}},[i,E,A]),R.useEffect(function(){if(!(i==null||!E("right-click"))){var g=function(C){C.preventDefault(),A()};return i.addEventListener("contextmenu",g),function(){return i.removeEventListener("contextmenu",g)}}},[i,E,A]),R.useEffect(function(){if(!(i==null||!E("focus")))return i.addEventListener("focus",L),i.addEventListener("blur",w),function(){i.removeEventListener("focus",L),i.removeEventListener("blur",w)}},[i,E,L,w]),R.useEffect(function(){if(!(i==null||!E("hover")))return i.addEventListener("mouseenter",L),i.addEventListener("mouseleave",w),function(){i.removeEventListener("mouseenter",L),i.removeEventListener("mouseleave",w)}},[i,E,L,w]),R.useEffect(function(){if(!(l==null||!E("hover")||!S().finalConfig.interactive))return l.addEventListener("mouseenter",L),l.addEventListener("mouseleave",w),function(){l.removeEventListener("mouseenter",L),l.removeEventListener("mouseleave",w)}},[l,E,L,w,S]);var D=b==null||(r=b.state)==null||(o=r.modifiersData)==null||(n=o.hide)==null?void 0:n.isReferenceHidden;R.useEffect(function(){s.closeOnTriggerHidden&&D&&w()},[s.closeOnTriggerHidden,w,D]),R.useEffect(function(){if(!s.followCursor||i==null)return;function g(C){var $=C.clientX,I=C.clientY;ae.getBoundingClientRect=ye($,I),m==null||m()}return i.addEventListener("mousemove",g),function(){return i.removeEventListener("mousemove",g)}},[s.followCursor,i,m]),R.useEffect(function(){if(!(l==null||m==null||s.mutationObserverOptions==null)){var g=new MutationObserver(m);return g.observe(l,s.mutationObserverOptions),function(){return g.disconnect()}}},[s.mutationObserverOptions,l,m]);var j=function(g){return g===void 0&&(g={}),et({},g,{style:et({},g.style,k.popper)},y.popper,{"data-popper-interactive":s.interactive})},P=function(g){return g===void 0&&(g={}),et({},g,y.arrow,{style:et({},g.style,k.arrow),"data-popper-arrow":!0})};return et({getArrowProps:P,getTooltipProps:j,setTooltipRef:v,setTriggerRef:f,tooltipRef:l,triggerRef:i,visible:d},b)}var H=Te(1e3)((t,e,r,o=0)=>e.split("-")[0]===t?r:o),F=8,Fr=Lt.div({position:"absolute",borderStyle:"solid"},({placement:t})=>{let e=0,r=0;switch(!0){case(t.startsWith("left")||t.startsWith("right")):{r=8;break}case(t.startsWith("top")||t.startsWith("bottom")):{e=8;break}}return{transform:`translate3d(${e}px, ${r}px, 0px)`}},({theme:t,color:e,placement:r})=>({bottom:`${H("top",r,`${F*-1}px`,"auto")}`,top:`${H("bottom",r,`${F*-1}px`,"auto")}`,right:`${H("left",r,`${F*-1}px`,"auto")}`,left:`${H("right",r,`${F*-1}px`,"auto")}`,borderBottomWidth:`${H("top",r,"0",F)}px`,borderTopWidth:`${H("bottom",r,"0",F)}px`,borderRightWidth:`${H("left",r,"0",F)}px`,borderLeftWidth:`${H("right",r,"0",F)}px`,borderTopColor:H("top",r,t.color[e]||e||t.base==="light"?pt(t.background.app):t.background.app,"transparent"),borderBottomColor:H("bottom",r,t.color[e]||e||t.base==="light"?pt(t.background.app):t.background.app,"transparent"),borderLeftColor:H("left",r,t.color[e]||e||t.base==="light"?pt(t.background.app):t.background.app,"transparent"),borderRightColor:H("right",r,t.color[e]||e||t.base==="light"?pt(t.background.app):t.background.app,"transparent")})),Gr=Lt.div(({hidden:t})=>({display:t?"none":"inline-block",zIndex:2147483647}),({theme:t,color:e,hasChrome:r})=>r?{background:t.color[e]||e||t.base==="light"?pt(t.background.app):t.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:t.appBorderRadius,fontSize:t.typography.size.s1}:{}),_t=G.forwardRef(({placement:t,hasChrome:e,children:r,arrowProps:o,tooltipRef:n,color:s,withArrows:c,...u},a)=>G.createElement(Gr,{"data-testid":"tooltip",hasChrome:e,ref:a,...u,color:s},e&&c&&G.createElement(Fr,{placement:t,...o,color:s}),r));_t.displayName="Tooltip";_t.defaultProps={color:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:Rt}=De,Jr=Lt.div`
  display: inline-block;
  cursor: ${t=>t.trigger==="hover"||t.trigger.includes("hover")?"default":"pointer"};
`,Kr=Lt.g`
  cursor: ${t=>t.trigger==="hover"||t.trigger.includes("hover")?"default":"pointer"};
`,be=({svg:t,trigger:e,closeOnOutsideClick:r,placement:o,hasChrome:n,withArrows:s,offset:c,tooltip:u,children:a,closeOnTriggerHidden:i,mutationObserverOptions:f,closeOnClick:p,tooltipShown:l,onVisibilityChange:v,defaultVisible:h,delayHide:d,visible:O,interactive:x,delayShow:T,modifiers:k,strategy:y,followCursor:b,onVisibleChange:m,...S})=>{let E=t?Kr:Jr,{getArrowProps:w,getTooltipProps:L,setTooltipRef:A,setTriggerRef:D,visible:j,state:P}=Xr({trigger:e,placement:o,defaultVisible:h??l,delayHide:d,interactive:x,closeOnOutsideClick:r??p,closeOnTriggerHidden:i,onVisibleChange:C=>{v==null||v(C),m==null||m(C)},delayShow:T,followCursor:b,mutationObserverOptions:f,visible:O,offset:c},{modifiers:k,strategy:y}),g=G.createElement(_t,{placement:P==null?void 0:P.placement,ref:A,hasChrome:n,arrowProps:w(),withArrows:s,...L()},typeof u=="function"?u({onHide:()=>m(!1)}):u);return G.createElement(G.Fragment,null,G.createElement(E,{trigger:e,ref:D,...S},a),j&&$e.createPortal(g,Rt.body))};be.defaultProps={svg:!1,trigger:"click",closeOnOutsideClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,defaultVisible:!1};var rn=({startOpen:t=!1,onVisibleChange:e,...r})=>{let[o,n]=R.useState(t),s=R.useCallback(c=>{e&&e(c)===!1||n(c)},[e]);return R.useEffect(()=>{let c=()=>s(!1);Rt.addEventListener("keydown",c,!1);let u=Array.from(Rt.getElementsByTagName("iframe")),a=[];return u.forEach(i=>{let f=()=>{try{i.contentWindow.document&&(i.contentWindow.document.addEventListener("click",c),a.push(()=>{try{i.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};f(),i.addEventListener("load",f),a.push(()=>{i.removeEventListener("load",f)})}),()=>{Rt.removeEventListener("keydown",c),a.forEach(i=>{i()})}}),G.createElement(be,{...r,visible:o,onVisibleChange:s})};export{rn as W,jt as a,be as b};
//# sourceMappingURL=chunk-7V7F47IN-e96dd1c9.js.map