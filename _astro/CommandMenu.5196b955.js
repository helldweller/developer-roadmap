import{_ as b,h as n,p as h}from"./hooks.module.6eb5c72e.js";import{u as k}from"./use-keydown.55c06bff.js";import{u as I}from"./use-outside-click.63bf96d6.js";import{R as A}from"./roadmap.e17ba5ff.js";import{U as C}from"./user.199041a0.js";import{G}from"./group.ff3a3bf4.js";import{a as N}from"./http.82ebf0f1.js";import{i as R}from"./jwt.f0e0aa9c.js";import{o}from"./jsxRuntime.module.c6f75409.js";import{k as T}from"./preact.module.346aa314.js";const _="/_astro/best-practices.a7417d1a.svg",L="/_astro/guide.6aa9fac6.svg",S="/_astro/home.6aeb6e8b.svg",E="/_astro/video.e6296e1b.svg",a=[{id:"home",url:"/",title:"Home",group:"Pages",icon:S},{id:"account",url:"/account",title:"Account",group:"Pages",icon:C,isProtected:!0},{id:"team",url:"/team",title:"Teams",group:"Pages",icon:G,isProtected:!0},{id:"roadmaps",url:"/roadmaps",title:"Roadmaps",group:"Pages",icon:A},{id:"best-practices",url:"/best-practices",title:"Best Practices",group:"Pages",icon:_},{id:"guides",url:"/guides",title:"Guides",group:"Pages",icon:L},{id:"videos",url:"/videos",title:"Videos",group:"Pages",icon:E}];function v(i){const c=R();return!i.isProtected||c}function $(){const i=b(null),c=b(null),[m,l]=n(!1),[w,y]=n([]),[r,x]=n(a),[u,g]=n(""),[s,d]=n(0);k("mod_k",()=>{l(!0)}),I(c,()=>{g(""),l(!1)}),h(()=>{function e(t){l(!0)}return P(),window.addEventListener("command.k",e),()=>{window.removeEventListener("command.k",e)}},[]),h(()=>{!m||!i.current||i.current.focus()},[m]);async function P(){if(w.length>0)return w;const{error:e,response:t}=await N("/pages.json");return t?(y([...a,...t].filter(v)),t):a.filter(v)}return h(()=>{if(!u){x(a.filter(v));return}const e=u.trim().toLowerCase();P().then((t=a)=>{const f=t.filter(p=>p.title.toLowerCase().indexOf(e)!==-1).slice(0,10);d(0),x(f)})},[u]),m?o("div",{className:"fixed left-0 right-0 top-0 z-50 flex h-full justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:o("div",{className:"relative top-0 h-full w-full max-w-lg p-2 sm:top-20 md:h-auto",children:o("div",{className:"relative rounded-lg bg-white shadow",ref:c,children:[o("input",{ref:i,autofocus:!0,type:"text",value:u,className:"w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-none",placeholder:"Search roadmaps, guides or pages ..",autocomplete:"off",onInput:e=>{const t=e.target.value.trim();g(t)},onKeyDown:e=>{if(e.key==="ArrowDown"){const t=s<r.length-1;d(t?s+1:0)}else if(e.key==="ArrowUp"){const t=s>0;d(t?s-1:r.length-1)}else if(e.key==="Tab")e.preventDefault();else if(e.key==="Escape")g(""),l(!1);else if(e.key==="Enter"){const t=r[s];t&&(window.location.href=t.url)}}}),o("div",{class:"px-2 py-2",children:o("div",{className:"flex flex-col",children:[r.length===0&&o("div",{class:"p-5 text-center text-sm text-gray-400",children:"No results found"}),r.map((e,t)=>{const f=r[t-1],p=f&&f.group!==e.group;return o(T,{children:[p&&o("div",{class:"border-b border-gray-100"}),o("a",{class:`flex w-full items-center rounded p-2 text-sm ${t===s?"bg-gray-100":""}`,onMouseOver:()=>d(t),href:e.url,children:[!e.icon&&o("span",{class:"mr-2 text-gray-400",children:e.group}),e.icon&&o("img",{alt:e.title,src:e.icon,class:"mr-2 h-4 w-4"}),e.title]})]})})]})})]})})}):null}export{$ as CommandMenu};
