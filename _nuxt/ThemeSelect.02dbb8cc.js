import m from"./Icon.81bdbf69.js";import p from"./component.vue3.51bca2f0.js";import{u as l}from"./composables.997142ea.js";import{a as i,o as t,e as u,f as d,w as f,u as r,c,p as x}from"./entry.5045836b.js";import"./client-only.af305fca.js";import"./config.df24684e.js";const k=i({__name:"ThemeSelect",setup(h){const o=l(),a=()=>{const n=["system","light","dark"],e=(n.indexOf(o.preference)+1)%n.length;o.preference=n[e]};return(n,s)=>{const e=m,_=p;return t(),u("button",{"aria-label":"Color Mode",onClick:a},[d(_,{placeholder:"..."},{default:f(()=>[r(o).preference==="dark"?(t(),c(e,{key:0,name:"uil:moon"})):r(o).preference==="light"?(t(),c(e,{key:1,name:"uil:sun"})):(t(),c(e,{key:2,name:"uil:desktop"}))]),_:1})])}}}),v=x(k,[["__scopeId","data-v-4a6c39b0"]]);export{v as default};
