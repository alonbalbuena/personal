import p from"./ContentQuery.3becac52.js";import{a as m,e as c,h as a}from"./entry.e12c5f01.js";import"./asyncData.179e5896.js";const h=m({name:"ContentList",props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(o){const e=c(),{path:f,query:d}=o,i=Object.assign(d||{},{path:f}),u=(t,n)=>a("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return a(p,i,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:r})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:r,...this.$attrs}):({data:t})=>u("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>u("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:r})=>u("not-found",r)}})}});export{h as default};
