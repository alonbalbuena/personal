import p from"./ContentSlot.75c50246.js";import m from"./ButtonLink.4f12524f.js";import y from"./Terminal.624249a4.js";import{a as _,o as t,e as o,h as r,f as c,j as n,F as f,c as i,w as h,l as k,t as l,C as $,p as v}from"./entry.5045836b.js";/* empty css                                                                                   */import"./Icon.81bdbf69.js";import"./config.df24684e.js";/* empty css                                                                                    */import"./index.ef736cd6.js";/* empty css                                                                                  */const w={class:"block-hero"},B={class:"layout"},C={class:"content"},q={key:0,class:"announce"},N={key:1,class:"title"},S={key:2,class:"description"},V={key:3,class:"extra"},b={class:"actions"},g=["href"],A={class:"support"},F=_({__name:"BlockHero",props:{cta:{type:Array,required:!1},secondary:{type:Array,required:!1},snippet:{type:String,required:!1},video:{type:Array,required:!1}},setup(s){return(e,H)=>{const a=p,u=m,d=y;return t(),o("section",w,[r("div",B,[r("div",C,[e.$slots.announce?(t(),o("p",q,[c(a,{use:e.$slots.announce,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.title?(t(),o("h1",N,[c(a,{use:e.$slots.title,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.description?(t(),o("p",S,[c(a,{use:e.$slots.description,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.extra?(t(),o("div",V,[c(a,{use:e.$slots.extra,unwrap:"p"},null,8,["use"])])):n("",!0),r("div",b,[e.$slots.actions?(t(),i(a,{key:1,use:e.$slots.actions,unwrap:"p"},null,8,["use"])):(t(),o(f,{key:0},[s.cta?(t(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:s.cta[1]},{default:h(()=>[k(l(s.cta[0]),1)]),_:1},8,["href"])):n("",!0),s.secondary?(t(),o("a",{key:1,href:s.secondary[1],class:"secondary"},l(s.secondary[0]),9,g)):n("",!0)],64))])]),r("div",A,[$(e.$slots,"support",{},()=>[s.snippet?(t(),i(d,{key:0,content:s.snippet},null,8,["content"])):n("",!0)],!0)])])])}}}),M=v(F,[["__scopeId","data-v-2d4b9c0a"]]);export{M as default};