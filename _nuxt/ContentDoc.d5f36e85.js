import{a as y,b as h,e as g,h as o,f as q}from"./entry.e12c5f01.js";import{u as i}from"./head.3792d653.js";import C from"./ContentQuery.3becac52.js";import"./asyncData.179e5896.js";const S=y({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>h().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=g(),{tag:p,excerpt:r,path:d,query:m,head:u}=f,c=Object.assign(m||{},{path:d,find:"one"}),l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(C,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:s})=>{var a;return u&&i(t),(a=e.default)==null?void 0:a.call(e,{doc:t,refresh:n,isPartial:s,excerpt:r,...this.$attrs})}:({data:t})=>(u&&i(t),o(q,{value:t,excerpt:r,tag:p,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{S as default};
