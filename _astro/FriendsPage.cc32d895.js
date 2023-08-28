import{h as x,_ as S,p as U}from"./hooks.module.6eb5c72e.js";import{p as a}from"./page.c1a8a472.js";import{u as $}from"./use-auth.13ac07ad.js";import{o as e}from"./jsxRuntime.module.c6f75409.js";import{c as A,h as T,a as D}from"./http.82ebf0f1.js";import{u as F}from"./use-toast.fb52de5d.js";import{C as R}from"./copy.e1103b2a.js";import{u as q}from"./use-copy-text.dccffc0b.js";import{D as I,A as G}from"./AddedUserIcon.e173ff89.js";import{T as C}from"./TrashIcon.1f7d74f6.js";import{k as f}from"./preact.module.346aa314.js";import{U as L}from"./user.199041a0.js";import{UserProgressModal as _}from"./UserProgressModal.61f70d10.js";import{u as M}from"./use-outside-click.63bf96d6.js";import"./index.a98c85f5.js";import"./jwt.f0e0aa9c.js";import"./toast.1fe7142d.js";import"./index.es.ebad3893.js";/* empty css                       */import"./use-keydown.55c06bff.js";import"./resource-progress.e28c933e.js";import"./close.3a539829.js";import"./browser.bcc09af3.js";import"./Spinner.5007fa01.js";import"./ErrorIcon.0fb5341e.js";function k(c){const{additionalClasses:t="mr-2 w-[20px] h-[20px]"}=c;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`relative ${t}`,children:[e("path",{d:"M14 19a6 6 0 0 0-12 0"}),e("circle",{cx:"8",cy:"9",r:"4"}),e("line",{x1:"19",x2:"19",y1:"8",y2:"14"}),e("line",{x1:"22",x2:"16",y1:"11",y2:"11"})]})}const z="/_astro/user-plus.0c59d9c5.svg";function B(c){const{befriendUrl:t}=c,{isCopied:n,copyText:l}=q();return e("div",{class:"rounded-md",children:e("div",{class:"mx-auto flex flex-col items-center p-7 text-center",children:[e("img",{alt:"no friends",src:z,class:"mb-2 h-[60px] w-[60px] opacity-10 sm:h-[120px] sm:w-[120px]"}),e("h2",{class:"text-lg font-bold sm:text-xl",children:"Invite your Friends"}),e("p",{className:"mb-4 mt-1 max-w-[400px] text-sm leading-relaxed text-gray-500",children:"Share the unique link below with your friends to track their skills and progress."}),e("div",{class:"flex w-full max-w-[352px] items-center justify-center gap-2 rounded-lg border-2 p-1 text-sm",children:[e("input",{onClick:i=>{i.currentTarget.select(),l(t)},type:"text",value:t,class:"w-full border-none bg-transparent px-1.5 outline-none",readonly:!0}),e("button",{class:`flex items-center justify-center gap-1 rounded-md border-0 p-2 px-4 text-sm text-black ${n?"bg-green-300 hover:bg-green-300":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>{l(t)},children:[e("img",{src:R,className:"h-4 w-4",alt:"Invite Friends"}),n?"Copied":"Copy"]})]})]})})}function E(c){const{friend:t,onShowResourceProgress:n,onReload:l}=c,i=F(),[m,h]=x();async function d(s,g){a.set("Please wait...");const{response:b,error:p}=await A(`https://api.roadmap.sh/v1-delete-friend/${s}`,{});if(p||!b){i.error(p?.message||"Something went wrong");return}i.success(g),l()}async function w(s,g){a.set("Please wait...");const{response:b,error:p}=await T(`https://api.roadmap.sh/v1-add-friend/${s}`,{});if(p||!b){i.error(p?.message||"Something went wrong");return}i.success(g),l()}const o=(t.roadmaps||[]).sort((s,g)=>g.done-s.done),[y,v]=x(!1);return t.status,e(f,{children:e("div",{className:"flex h-full min-h-[270px] flex-col overflow-hidden rounded-md border",children:[e("div",{className:"relative flex items-center gap-3 border-b p-3",children:[e("img",{src:t.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.avatar}`:"/images/default-avatar.png",alt:t.name||"",className:"h-8 w-8 rounded-full"}),e("div",{className:"inline-grid w-full",children:[e("h3",{className:"truncate font-medium",children:t.name}),e("p",{className:"truncate text-sm text-gray-500",children:t.email})]})]}),t.status==="accepted"&&e(f,{children:[e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(y?o:o.slice(0,4)).map(s=>e("button",{onClick:()=>n(s.resourceId),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e("span",{className:"inline-grid",children:e("span",{className:"truncate",children:s.title})}),e("span",{className:"ml-1.5 shrink-0 text-xs text-gray-400",children:[s.done," / ",s.total]})]}),e("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${s.done/s.total*100}%`}})]},s.resourceId)),o.length>4&&!y&&e("button",{onClick:()=>v(!0),className:"text-xs text-gray-400 underline",children:["+ ",o.length-4," more"]}),y&&e("button",{onClick:()=>v(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),o.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]}),e(f,{children:[m!=="accepted"&&e("button",{className:"flex w-full items-center justify-center border-t py-2 text-sm font-medium text-red-700 hover:bg-red-50/50 hover:text-red-500",onClick:()=>{h("accepted")},children:[e(C,{className:"mr-1 h-4 w-4"}),"Remove Friend"]}),m==="accepted"&&e("span",{className:"flex w-full items-center justify-center border-t py-2 text-sm text-red-700",children:["Are you sure?"," ",e("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{d(t.userId,"Friend removed").finally(()=>{a.set("")})},children:"Yes"})," ",e("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{h(void 0)},children:"No"})]})]})]}),t.status==="rejected"&&e(f,{children:[e("div",{className:"flex w-full flex-grow items-center justify-center",children:e("span",{class:" flex flex-col items-center text-red-500",children:[e(I,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Rejected"]})}),e("span",{class:"flex cursor-default items-center justify-center border-t py-2 text-center text-sm",children:["Changed your mind?"," ",e("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{w(t.userId,"Friend request accepted").finally(()=>{a.set("")})},children:"Accept"})]})]}),t.status==="got_rejected"&&e(f,{children:[e("div",{className:"flex w-full flex-grow items-center justify-center",children:e("span",{class:" flex flex-col items-center text-sm text-red-500",children:[e(I,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Rejected"]})}),e("span",{class:"flex cursor-default items-center justify-center border-t py-2.5 text-center text-sm",children:e("button",{className:"ml-2 flex items-center font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{d(t.userId,"Friend request removed").finally(()=>{a.set("")})},children:[e(C,{className:"mr-1 h-4 w-4"}),"Delete Request"]})})]}),t.status==="sent"&&e(f,{children:[e("div",{className:"flex w-full flex-grow items-center justify-center",children:e("span",{class:" flex flex-col items-center text-green-500",children:[e(G,{additionalClasses:"mr-2 h-8 w-8 mb-1"}),"Request Sent"]})}),e(f,{children:[m!=="sent"&&e("button",{className:"flex w-full items-center justify-center border-t py-2 text-sm font-medium text-red-700 hover:bg-red-50/50 hover:text-red-500",onClick:()=>{h("sent")},children:[e(C,{className:"mr-1 h-4 w-4"}),"Withdraw Request"]}),m==="sent"&&e("span",{className:"flex w-full items-center justify-center border-t py-2 text-sm text-red-700",children:["Are you sure?"," ",e("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{d(t.userId,"Friend request withdrawn").finally(()=>{a.set("")})},children:"Yes"})," ",e("button",{className:"ml-2 font-medium text-red-700 underline underline-offset-2 hover:text-red-500",onClick:()=>{h(void 0)},children:"No"})]})]})]}),t.status==="received"&&e(f,{children:e("div",{className:"flex w-full flex-grow flex-col items-center justify-center px-4",children:[e(k,{additionalClasses:"mr-2 h-8 w-8 mb-1 text-green-500"}),e("span",{className:"mb-3 text-green-600",children:"Request Received"}),e("button",{onClick:()=>{w(t.userId,"Friend request accepted").finally(()=>{a.set("")})},className:"mb-1 block w-full max-w-[150px] rounded-md bg-black py-1.5 text-sm text-white",children:"Accept"}),e("button",{onClick:()=>{d(t.userId,"Friend request rejected").finally(()=>{a.set("")})},className:"block w-full max-w-[150px] rounded-md border border-red-500 py-1 text-sm text-red-500",children:"Reject"})]})})]},t.userId)})}function O(c){const{onClose:t,befriendUrl:n}=c,{isCopied:l,copyText:i}=q(),m=S(null);return M(m,()=>{t()}),e("div",{class:"popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:m,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e("h3",{class:"mb-1.5 text-xl font-medium sm:text-2xl",children:"Invite URL"}),e("p",{className:"mb-3 hidden text-sm leading-none text-gray-400 sm:block",children:"Share the link below with your friends to invite them."}),e("div",{className:"mt-4 flex flex-col gap-2 sm:mt-4",children:[e("input",{readOnly:!0,className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",value:n,onClick:d=>{d?.target?.select(),i(n)}}),e("button",{class:`flex items-center justify-center gap-1 rounded-md border-0 px-3 py-2.5 text-sm text-black ${l?"bg-green-300 hover:bg-green-300":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>{i(n)},children:[e("img",{src:R,className:"h-4 w-4",alt:"Invite Friends"}),l?"Copied":"Copy URL"]})]})]})})})}const j=[{label:"Active",value:"active",statuses:["accepted"]},{label:"Requests",value:"requests",statuses:["received","rejected"]},{label:"Sent",value:"sent",statuses:["sent","got_rejected"]}];function xe(){const c=F(),[t,n]=x(!1),[l,i]=x(),[m,h]=x(!0),[d,w]=x([]),[o,y]=x("active");async function v(){const{response:r,error:u}=await D("https://api.roadmap.sh/v1-list-friends");if(u||!r){c.error(u?.message||"Something went wrong");return}w(r)}U(()=>{v().finally(()=>{a.set(""),h(!1)})},[]);const b=`https://roadmap.sh/befriend?u=${$()?.id}`,p=j.find(r=>r.value===o),N=d.filter(r=>p?.statuses.includes(r.status)),P=d.filter(r=>r.status==="received");return m?null:d?.length?e("div",{children:[t&&e(O,{befriendUrl:b,onClose:()=>n(!1)}),l&&e(_,{userId:l.friend.userId,resourceId:l.resourceId,resourceType:"roadmap",onClose:()=>i(void 0)}),e("div",{className:"mb-4 flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:gap-0",children:[e("div",{className:"flex items-center gap-2",children:j.map(r=>{let u=0;return r.value==="requests"&&(u=P.length),e("button",{className:`relative flex items-center justify-center rounded-md border p-1 px-3 text-sm ${o===r.value?" border-gray-400 bg-gray-200 ":""} w-full sm:w-auto`,onClick:()=>y(r.value),children:[r.label,u>0&&e("span",{className:"ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white",children:u})]})})}),e("button",{onClick:()=>{n(!0)},class:"flex items-center justify-center gap-1.5 rounded-md border border-gray-400 bg-gray-50 p-1 px-2 text-sm hover:border-gray-500 hover:bg-gray-100",children:[e(k,{additionalClasses:"w-4 h-4"}),"Invite Friends"]})]}),N.length>0&&e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:N.map(r=>e(E,{friend:r,onShowResourceProgress:u=>{i({resourceId:u,friend:r})},onReload:()=>{a.set("Reloading friends .."),v().finally(()=>{a.set("")})}},r.userId))}),N.length===0&&e("div",{className:"flex flex-col items-center justify-center py-12",children:[e("img",{src:L,alt:"Empty Friends",className:"mb-3 w-12 opacity-20"}),e("h2",{className:"text-lg font-semibold",children:[o==="active"&&"No friends yet",o==="sent"&&"No requests sent",o==="requests"&&"No requests received"]}),e("p",{className:"text-sm text-gray-500",children:"Invite your friends to join you on Roadmap"}),e("button",{onClick:()=>{n(!0)},className:"mt-4 flex items-center justify-center gap-1.5 rounded-md border border-gray-400 bg-gray-50 p-1 px-2 text-sm hover:border-gray-500 hover:bg-gray-100",children:[e(k,{additionalClasses:"w-4 h-4"}),"Invite Friends"]})]})]}):e(B,{befriendUrl:b})}export{xe as FriendsPage};
