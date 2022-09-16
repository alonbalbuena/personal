import{w as R,f as T,j as D,i as V,a as p,h as m,k as b,l as $,m as j,T as S,r as s,p as P,q as k,s as g,t as O,F as h,v as C,x as L,d as r,_ as a,y as w,z as x,A as z,B,b as M,C as N}from"./entry.44f0ecd3.js";import"./ContentList.ec1717ec.js";import"./ContentSlot.5fe2b104.js";import"./DocumentDrivenEmpty.cade464d.js";import"./DocumentDrivenNotFound.5553d96d.js";import"./Markdown.1bee2aa9.js";import"./ProseCode.1fda8464.js";const q=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=R(e?`/navigation/${T(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:D(e||{}),previewToken:V("previewToken").value}})};const F=p({setup(t,{slots:e}){return()=>{var o;return(o=e.default)==null?void 0:o.call(e)}}}),E=(t,e,o)=>({default:()=>e?m(t,e===!0?{}:e,o):m(F,{},o)}),c={},W=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=b();return()=>{var l,_,d;const n=(_=(l=$(t.name)?t.name.value:t.name)!=null?l:o.meta.layout)!=null?_:"default",u=n&&n in c,i=(d=o.meta.layoutTransition)!=null?d:j;return E(S,u&&i,{default:()=>E(c[n],u,e.slots).default()}).default()}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const n=s(null),u=P();return k(i=>{if(!u.isHydrating)return o("error",i),n.value=i,!1}),()=>{var i,l;return n.value?(i=e.error)==null?void 0:i.call(e,{error:n}):(l=e.default)==null?void 0:l.call(e)}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),H=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=s(!1);return g(()=>{o.value=!0}),n=>{var _;if(o.value)return(_=e.default)==null?void 0:_.call(e);const u=e.fallback||e.placeholder;if(u)return u();const i=n.fallback||n.placeholder||"",l=n.fallbackTag||n.placeholderTag||"span";return O(l,null,i)}}}),f=new WeakMap;function Y(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...n)=>{var u,i;return o.mounted$?m(h,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...n)):m("div",(i=o.$attrs)!=null?i:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,n)=>{var i;const u=s(!1);return g(()=>{u.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,o,n))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(..._)=>u.value?m(h,n.attrs,l(..._)):m("div",n.attrs))},f.set(t,e),e}const J=Object.freeze(Object.defineProperty({__proto__:null,default:H,createClientOnly:Y},Symbol.toStringTag,{value:"Module"})),K=p({name:"ServerPlaceholder",render(){return O("div")}}),Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Z=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=tt({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),C(()=>e.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function tt(t){const e=s(0),o=s(!1),n=L(()=>1e4/t.duration);let u=null,i=null;function l(){d(),e.value=0,o.value=!0,t.throttle?i=setTimeout(v,t.throttle):v()}function _(){e.value=100,I()}function d(){clearInterval(u),clearTimeout(i),u=null,i=null}function y(A){e.value=Math.min(100,e.value+A)}function I(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{y(n.value)},100)}return{progress:e,isLoading:o,start:l,finish:_,clear:d}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./entry.44f0ecd3.js").then(t=>t.Y),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentList.ec1717ec.js"),["ContentList.ec1717ec.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.44f0ecd3.js").then(t=>t.X),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.44f0ecd3.js").then(t=>t.W),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.44f0ecd3.js").then(t=>t.V),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.5fe2b104.js"),["ContentSlot.5fe2b104.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.cade464d.js"),["DocumentDrivenEmpty.cade464d.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.5553d96d.js"),["DocumentDrivenNotFound.5553d96d.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.1bee2aa9.js"),["Markdown.1bee2aa9.js","ContentSlot.5fe2b104.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.9238e931.js"),["ProseA.9238e931.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.d33789b4.js"),["ProseBlockquote.d33789b4.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.1fda8464.js"),["ProseCode.1fda8464.js","ProseCode.e63e49c6.css","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.ee06d63d.js"),["ProseCodeInline.ee06d63d.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.051be582.js"),["ProseEm.051be582.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.86bdc104.js"),["ProseH1.86bdc104.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.6273eb35.js"),["ProseH2.6273eb35.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.1d172811.js"),["ProseH3.1d172811.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.a5b03587.js"),["ProseH4.a5b03587.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.ffdf3ebf.js"),["ProseH5.ffdf3ebf.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.9a9c976e.js"),["ProseH6.9a9c976e.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.0690217a.js"),["ProseHr.0690217a.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.f82c7656.js"),["ProseImg.f82c7656.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.92e0726b.js"),["ProseLi.92e0726b.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.b3ad7bb0.js"),["ProseOl.b3ad7bb0.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.ec29267d.js"),["ProseP.ec29267d.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.12744a0d.js"),["ProseStrong.12744a0d.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.f071f9c4.js"),["ProseTable.f071f9c4.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.074d1887.js"),["ProseTbody.074d1887.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.b501fab9.js"),["ProseTd.b501fab9.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.f4bd75a8.js"),["ProseTh.f4bd75a8.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.8e20ec2a.js"),["ProseThead.8e20ec2a.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.37a62fe0.js"),["ProseTr.37a62fe0.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.6fcf5855.js"),["ProseUl.6fcf5855.js","entry.44f0ecd3.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.0681b78b.js"),["welcome.0681b78b.js","entry.44f0ecd3.js","ContentList.ec1717ec.js","ContentSlot.5fe2b104.js","DocumentDrivenEmpty.cade464d.js","DocumentDrivenNotFound.5553d96d.js","Markdown.1bee2aa9.js","ProseCode.1fda8464.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.44f0ecd3.js").then(t=>t.U),[],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));const rt=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=w(t),o=L(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&x("dd-navigation","$X9s2D0PBpW").value){const{navigation:u}=z();return{navigation:u}}const{data:n}=await B(`content-navigation-${T(o.value)}`,()=>q(o.value),"$qwqtCbrR7R");return{navigation:n}},render(t){const e=M(),{navigation:o}=t,n=l=>m(N,{to:l._path},()=>l.title),u=(l,_)=>m("ul",_?{"data-level":_}:null,l.map(d=>d.children?m("li",null,[n(d),u(d.children,_+1)]):m("li",null,n(d)))),i=l=>u(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):i(o)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));export{rt as default};