import j from"./Icon.81bdbf69.js";import{a as F,I as L,v as O,b as T,o as s,e as u,F as z,k as E,B,u as D,h as n,c as d,j as h,t as A,f as M,w as R,N as q,O as G,m as H,p as J}from"./entry.5045836b.js";/* empty css                                                                                       */import{u as K}from"./useDocus.f97b42a1.js";import"./config.df24684e.js";const P={class:"docs-aside-tree"},Q=["onClick"],U={class:"content"},W={class:"content"},X=F({__name:"DocsAsideTree",props:{links:{type:Array,default:()=>[]},level:{type:Number,default:0},max:{type:Number,default:null},parent:{type:Object,default:null}},setup(a){var f;const r=a,$=L(),v=K(),l=O(`docus-docs-aside-collapse-map-${((f=r.parent)==null?void 0:f._path)||"/"}`,()=>r.level===0?{}:r.links.filter(t=>!!t.children).reduce((t,o)=>(t[o._path]=!0,t),{})),i=t=>$.path===t._path,p=t=>{var o,c;if(t.children){if(typeof l.value[t._path]<"u")return l.value[t._path];if(t!=null&&t.collapsed)return t==null?void 0:t.collapsed;if((o=v.value.aside)!=null&&o.collapsed)return(c=v.value.aside)==null?void 0:c.collapsed}return!1},I=t=>{l.value[t._path]=!p(t)},_=T(()=>r.links.some(t=>t.children));return(t,o)=>{const c=j,S=H,V=Y;return s(),u("ul",P,[(s(!0),u(z,null,E(a.links,e=>{var x,y,g,b,C;return s(),u("li",{key:e._path,class:B({"has-parent-icon":(x=a.parent)==null?void 0:x.icon,"has-children":a.level>0&&e.children,bordered:a.level>0||!D(_),active:i(e)})},[e.children?(s(),u("button",{key:0,class:"title-collapsible-button",onClick:m=>I(e)},[n("span",U,[((y=e==null?void 0:e.navigation)==null?void 0:y.icon)||e.icon?(s(),d(c,{key:0,name:((g=e==null?void 0:e.navigation)==null?void 0:g.icon)||e.icon,class:"icon"},null,8,["name"])):h("",!0),n("span",null,A(((b=e==null?void 0:e.navigation)==null?void 0:b.title)||e.title||e._path),1)]),n("span",null,[M(c,{name:p(e)?"lucide:chevrons-up-down":"lucide:chevrons-down-up",class:"collapsible-icon"},null,8,["name"])])],8,Q)):(s(),d(S,{key:1,to:e.redirect?e.redirect:e._path,class:B(["link",{padded:a.level>0||!D(_),active:i(e)}]),exact:e.exact},{default:R(()=>{var m,N,w;return[n("span",W,[((m=e==null?void 0:e.navigation)==null?void 0:m.icon)||e.icon?(s(),d(c,{key:0,name:((N=e==null?void 0:e.navigation)==null?void 0:N.icon)||e.icon,class:"icon"},null,8,["name"])):h("",!0),n("span",null,A(((w=e==null?void 0:e.navigation)==null?void 0:w.title)||e.title||e._path),1)])]}),_:2},1032,["to","exact","class"])),((C=e.children)==null?void 0:C.length)&&(a.max===null||a.level+1<a.max)?q((s(),d(V,{key:2,links:e.children,level:a.level+1,parent:e,max:a.max,class:"recursive"},null,8,["links","level","parent","max"])),[[G,!p(e)]]):h("",!0)],2)}),128))])}}}),Y=J(X,[["__scopeId","data-v-c9cb6889"]]);export{Y as default};