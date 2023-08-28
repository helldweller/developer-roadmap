import{h as u,_ as L,p as U}from"./hooks.module.6eb5c72e.js";import{C as A}from"./CheckIcon.1978281b.js";import{o as e}from"./jsxRuntime.module.c6f75409.js";import{k as _}from"./preact.module.346aa314.js";import{B as E}from"./building.0debfcad.js";import{d as T,h as M,a as $}from"./http.82ebf0f1.js";import{S as j}from"./Spinner.5007fa01.js";import{p as R}from"./page.c1a8a472.js";import{U as D,S as H}from"./SelectRoadmapModal.74929069.js";import{g as q,s as I}from"./browser.bcc09af3.js";import{T as G}from"./TrashIcon.1f7d74f6.js";import{R as Y}from"./RoleDropdown.2458460a.js";import{u as F}from"./use-toast.fb52de5d.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./index.es.ebad3893.js";import"./resource-progress.e28c933e.js";/* empty css                       */import"./use-outside-click.63bf96d6.js";import"./use-keydown.55c06bff.js";import"./index.164edc2c.js";import"./team.12f2469e.js";import"./close.3a539829.js";import"./toast.1fe7142d.js";function O(f){const{steps:t,activeIndex:a=0,completeSteps:r=[]}=f;return e("ol",{className:"flex w-full items-center text-gray-500",children:t.map((d,c)=>{const h=r.includes(c),g=a===c,o=c===t.length-1;return e(_,{children:[e("li",{className:`flex items-center ${h||g?"text-black":"text-gray-400"}`,children:[h&&e(A,{additionalClasses:"mr-2 top-[0.5px] w-[18px] h-[18px]"}),!h&&e("span",{class:"mr-2 font-semibold",children:c+1}),e("span",{className:"flex flex-grow",children:d.label})]}),!o&&e("li",{className:"mx-5 flex flex-grow rounded-md bg-gray-200",children:e("span",{className:"h-1 w-full"})})]})})})}const W="/_astro/users.1dd5ca56.svg";function P(f){const{isLoading:t=!1,text:a="Next Step",type:r="button",loadingMessage:d="Please wait ..",onClick:c=()=>null,hasNextArrow:h=!0}=f;return e("button",{type:r,onClick:c,disabled:t,className:"rounded-md border border-black bg-black px-4 py-2 text-white disabled:opacity-50",children:t?e("span",{className:"flex items-center justify-center",children:[e(j,{}),e("span",{className:"ml-2",children:d})]}):e(_,{children:[a,h&&e("span",{className:"ml-1",children:"→"})]})})}const V=[{value:"company",label:"Company",icon:E,description:"Track the skills and learning progress of the tech team at your company"},{value:"study_group",label:"Study Group",icon:W,description:"Invite your friends or course-mates and track your learning progress together"}];function J(f){const{team:t,selectedTeamType:a,onStepComplete:r,setSelectedTeamType:d}=f,[c,h]=u(!1),[g,o]=u();async function m(){if(!t){r();return}h(!0),o("");const{response:i,error:y}=await T(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:t.name,website:t?.links?.website||void 0,type:a,gitHubUrl:t?.links?.github||void 0,...a==="company"&&{teamSize:t.teamSize,linkedInUrl:t?.links?.linkedIn||void 0}});if(y||!i){h(!1),o(y?.message||"Something went wrong");return}h(!1),o(""),r()}return e(_,{children:[e("div",{className:"flex flex-col sm:flex-row gap-3",children:V.map(i=>e("button",{className:`flex flex-grow flex-col items-center rounded-lg border px-5 py-12 ${i.value==a?"border-gray-400 bg-gray-100":"border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`,onClick:()=>d(i.value),children:[e("img",{alt:i.label,src:i.icon,className:`mb-3 h-12 w-12 opacity-10 ${i.value===a?"opacity-100":""}`}),e("span",{className:"mb-2 block text-2xl font-bold",children:i.label}),e("span",{className:"text-sm text-gray-500 leading-[21px]",children:i.description})]}))}),g&&e("div",{className:"mt-4 text-sm text-red-500",children:g}),e("div",{className:"mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2",children:[e("a",{href:"/account",className:"rounded-md border border-red-400 bg-white px-8 py-2 text-red-500 text-center",children:"Cancel"}),e(P,{type:"button",onClick:m,isLoading:c,text:"Next Step",loadingMessage:"Updating team .."})]})]})}const K=["1-5","6-10","11-25","26-50","51-100","101-200","201-500","501-1000","1000+"];function Q(f){const{team:t,selectedTeamType:a,onBack:r,onStepComplete:d}=f,[c,h]=u(""),g=L(null);U(()=>{g.current&&g.current.focus()},[g]);const[o,m]=u(!1),[i,y]=u(t?.name||""),[w,k]=u(t?.links?.website||""),[p,N]=u(t?.links?.linkedIn||""),[l,n]=u(t?.links?.github||""),[s,x]=u(t?.teamSize||"");return e("form",{onSubmit:async b=>{if(b.preventDefault(),m(!0),!i||!a){m(!1);return}let S,C;if(t?._id){if({response:S,error:C}=await T(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:i,website:w||void 0,type:a,gitHubUrl:l||void 0,...a==="company"&&{teamSize:s,linkedInUrl:p||void 0}}),C||S?.status!=="ok"){h(C?.message||"Something went wrong. Please try again."),m(!1);return}d({...t,name:i,_id:t._id,links:{website:w||t?.links?.website,linkedIn:p||t?.links?.linkedIn,github:l||t?.links?.github},type:a,teamSize:s})}else{if({response:S,error:C}=await M("https://api.roadmap.sh/v1-create-team",{name:i,website:w||void 0,type:a,gitHubUrl:l||void 0,...a==="company"&&{teamSize:s,linkedInUrl:p||void 0},roadmapIds:[],bestPracticeIds:[]}),C||!S?._id){h(C?.message||"Something went wrong. Please try again."),m(!1);return}d(S)}},children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:a==="company"?"Company Name":"Group Name"}),e("input",{type:"text",name:"name",ref:g,autofocus:!0,id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Roadmap Inc.",disabled:o,required:!0,value:i,onInput:b=>y(b.target.value)})]}),a==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Website"}),e("input",{type:"url",name:"website",required:!0,id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:o,value:w,onInput:b=>k(b.target.value)})]}),a==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Company LinkedIn URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/company/roadmapsh",disabled:o,value:p,onInput:b=>N(b.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"GitHub Organization URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:o,value:l,onInput:b=>n(b.target.value)})]}),a==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Tech Team Size"}),e("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:a==="company",disabled:o,value:s,onChange:b=>x(b.target.value),children:[e("option",{value:"",selected:!0,children:"Select team size"}),K.map(b=>e("option",{value:b,children:[b," people"]}))]})]}),c&&e("div",{className:"mt-4 flex w-full flex-col",children:e("span",{className:"text-sm text-red-500",children:c})}),e("div",{className:"mt-4 flex flex-col md:flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:r,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e(P,{isLoading:o,text:"Next Step",type:"submit",loadingMessage:"Creating team .."})]})]})}const X="/_astro/chevron-down.d226c7e9.svg";function Z(f){const{onClick:t,selectedCount:a,singularName:r,pluralName:d}=f,c=a===1?r:d;return e("div",{className:"flex cursor-text items-center justify-between rounded-md border border-gray-300 px-3 py-2.5 hover:border-gray-400/50 hover:bg-gray-50",role:"button",onClick:t,children:[a>0&&e("div",{className:"flex flex-col",children:[e("p",{className:"mb-1.5 text-base font-medium text-gray-800",children:[a," ",c," selected"]}),e("p",{className:"text-sm text-gray-400",children:"Click to add or change selection"})]}),a===0&&e("div",{className:"flex flex-col",children:e("p",{className:"text-base text-gray-400",children:["Click to select ",d]})}),e("img",{alt:r,src:X,className:"relative top-[1px] h-[17px] w-[17px] opacity-40"})]})}function ee(f){const{teamId:t,teamResourceConfig:a=[],setTeamResourceConfig:r}=f,[d,c]=u(!1),[h,g]=u([]),[o,m]=u(""),[i,y]=u("");async function w(){const{error:l,response:n}=await $("/pages.json");if(l){y(l.message||"Something went wrong. Please try again!");return}if(!n)return[];const s=n.filter(x=>x.group==="Roadmaps").sort((x,v)=>x.title==="Android"?1:x.title.localeCompare(v.title));return g(s),n}async function k(l){if(!t)return;R.set("Deleting resource");const{error:n,response:s}=await T(`https://api.roadmap.sh/v1-delete-team-resource-config/${t}`,{resourceId:l,resourceType:"roadmap"});if(n||!s){y(n?.message||"Error deleting roadmap");return}r(s)}async function p(l){R.set("Removing roadmap"),k(l).finally(()=>{R.set("")})}async function N(l){if(!t)return;R.set("Adding roadmap to team");const{error:n,response:s}=await T(`https://api.roadmap.sh/v1-update-team-resource-config/${t}`,{teamId:t,resourceId:l,resourceType:"roadmap",removed:[]});if(n||!s){y(n?.message||"Error adding roadmap");return}r(s)}return U(()=>{w().finally()},[]),e("div",{children:[o&&e(D,{onClose:()=>m(""),resourceId:o,resourceType:"roadmap",teamId:t,setTeamResourceConfig:r,defaultRemovedItems:a.find(l=>l.resourceId===o)?.removed||[]}),d&&e(H,{onClose:()=>c(!1),teamResourceConfig:a,allRoadmaps:h,teamId:t,onRoadmapAdd:l=>{N(l).finally(()=>{R.set("")})},onRoadmapRemove:l=>{p(l).finally(()=>{})}}),e("div",{className:"mt-3",children:e(Z,{onClick:()=>{c(!0)},selectedCount:a.length,singularName:"roadmap",pluralName:"roadmaps"})}),!a.length&&e("p",{className:"mb-3 mt-2 text-base text-gray-400",children:"No roadmaps selected."}),a.length>0&&e("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-3 flex-wrap gap-2.5",children:a.map(({resourceId:l,removed:n})=>{const s=h.find(x=>x.id===l)?.title||"...";return e("div",{className:"flex flex-col items-start rounded-md border border-gray-300",children:[e("div",{className:"w-full px-3 pb-2 pt-4",children:[e("span",{className:"mb-0.5 block text-base font-medium leading-none text-black",children:s}),n.length>0?e("span",{className:"text-xs leading-none text-gray-900",children:[n.length," topic",n.length>1?"s":""," removed"]}):e("span",{className:"text-xs italic leading-none text-gray-400/60",children:"No changes made .."})]}),e("div",{className:"flex w-full justify-between p-3",children:[e("button",{type:"button",className:"text-xs text-gray-500 underline hover:text-black focus:outline-none",onClick:()=>m(l),children:"Customize"}),e("button",{type:"button",className:"text-xs text-red-500 underline hover:text-black",onClick:()=>p(l),children:"Remove"})]})]})})})]})}function te(f){const{team:t,onBack:a,onNext:r,teamResourceConfig:d,setTeamResourceConfig:c}=f;return e(_,{children:[e("div",{className:"mt-4 flex w-full flex-col",children:[e("div",{className:"mb-1 mt-2",children:[e("h2",{className:"mb-1 md:mb-1.5 text-lg md:text-2xl font-bold",children:"Select Roadmaps"}),e("p",{className:"text-sm text-gray-700",children:"You can always add and customize your roadmaps later."})]}),e(ee,{teamId:t._id,teamResourceConfig:d,setTeamResourceConfig:c})]}),e("div",{className:"mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2",children:[e("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("div",{className:"flex gap-2",children:[e("button",{type:"button",onClick:r,className:"flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black md:flex-auto",children:"Skip for Now"}),e("button",{type:"submit",disabled:d.length===0,onClick:r,className:"rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50",children:["Next Step",e("span",{className:"ml-1",children:"→"})]})]})]})]})}function z(){return`${new Date().getTime()}`}function re(f){const{onNext:t,onBack:a,team:r}=f,[d,c]=u(""),[h,g]=u(!1),o=L(null),[m,i]=u([{id:z(),email:"",role:"member"}]);async function y(){g(!0);const{error:p,response:N}=await M(`https://api.roadmap.sh/v1-invite-team/${r?._id}`,{members:m});if(p||!N){c(p?.message||"Something went wrong"),g(!1);return}t()}function w(){o.current&&o.current.focus()}function k(p){p.preventDefault(),y().finally(()=>null)}return U(()=>{w()},[m.length]),e("form",{className:"mt-4 flex w-full flex-col",onSubmit:k,children:[e("div",{class:"mb-1 mt-2",children:[e("h2",{class:"mb-1 md:mb-2 text-lg md:text-2xl font-bold",children:"Invite your Team"}),e("p",{class:"text-sm text-gray-700",children:"Use the form below to invite your team members to your team. You can also invite them later."})]}),e("div",{className:"mt-4 flex flex-col gap-1",children:m.map((p,N)=>e("div",{className:"flex flex-col sm:flex-row gap-2",children:[e("input",{ref:N===m.length-1?o:null,autofocus:!0,type:"email",name:"email",required:!0,id:"email",placeholder:"Email",value:p.email,onChange:l=>{const n=m.map(s=>s.id===p.id?{...s,email:l.target?.value}:s);i(n)},className:"flex-grow rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900"}),e(Y,{selectedRole:p.role,setSelectedRole:l=>{const n=m.map(s=>s.id===p.id?{...s,role:l}:s);i(n)}}),e("button",{disabled:m.length<=1,type:"button",className:"rounded-md border border-red-200 bg-white px-4 py-2 text-red-500 hover:bg-red-100 disabled:opacity-30",onClick:()=>{i(m.filter(l=>l.id!==p.id))},children:e(G,{className:"h-5 w-5"})})]},p.id))}),m.length<=30&&e("button",{onClick:()=>{i([...m,{id:z(),email:"",role:"member"}])},type:"button",className:"mt-2 rounded-md border border-dashed border-gray-400 py-2 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800",children:"+ Add another"}),d&&e("div",{className:"mt-2 text-sm font-medium text-red-500",role:"alert",children:d}),e("div",{className:"mt-4 flex flex-col sm:flex-row items-stretch md:items-center justify-between gap-2",children:[e("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("div",{className:"flex gap-2",children:[e("button",{type:"button",onClick:t,className:"rounded-md flex-grow md:flex-auto border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black",children:"Skip for Now"}),e(P,{type:"submit",isLoading:h,text:"Send Invites",loadingMessage:"Updating team ..",hasNextArrow:!1})]})]})]})}function ae({team:f}){return e("div",{className:"mt-4 flex flex-col rounded-xl border py-12 text-center",children:e("div",{class:"mb-1 flex flex-col items-center",children:[e(A,{additionalClasses:"h-14 w-14 mb-4 opacity-100"}),e("h2",{class:"mb-2 text-2xl font-bold",children:"Team Created"}),e("p",{class:"text-sm text-gray-700",children:"Your team has been created. Happy learning!"}),e("a",{href:`/team/progress?t=${f._id}`,class:"mt-4 rounded-md bg-black px-5 py-1.5 text-sm text-white",children:"View Team"})]})})}function Ue(){const{s:f,t}=q(),a=F(),[r,d]=u(),[c,h]=u(!!t&&!r?._id),[g,o]=u(0);async function m(s,x){const{response:v,error:b}=await $(`https://api.roadmap.sh/v1-get-team/${s}`);if(b||!v){a.error(b?.message||"Error loading team"),window.location.href="/account";return}const S=parseInt(x,10),C=Array(S).fill(1).map((le,B)=>B);d(v),p(v.type),l(C),o(S),await w(s)}const[i,y]=u([]);async function w(s){const{error:x,response:v}=await $(`https://api.roadmap.sh/v1-get-team-resource-config/${s}`);if(x||!Array.isArray(v)){console.error(x);return}y(v)}U(()=>{!t||!f||r||(R.set("Fetching team"),h(!0),m(t,f).finally(()=>{h(!1),R.set("")}))},[t,f]);const[k,p]=u(r?.type||"company"),[N,l]=u([0]);if(c)return null;let n=null;return g===0?n=e(J,{team:r,selectedTeamType:k,setSelectedTeamType:p,onStepComplete:()=>{r?._id&&I({t:r._id,s:"1"}),l([0]),o(1)}}):g===1?n=e(Q,{team:r,onBack:()=>{r?._id&&I({t:r._id,s:"0"}),o(0)},onStepComplete:s=>{const x=s._id;I({t:x,s:"2"}),l([0,1]),o(2),d(s)},selectedTeamType:k}):g===2?n=e(te,{team:r,teamResourceConfig:i,setTeamResourceConfig:y,onBack:()=>{r&&I({t:r._id,s:"1"}),o(1)},onNext:()=>{I({t,s:"3"}),l([0,1,2]),o(3)}}):g===3?n=e(re,{team:r,onBack:()=>{r&&I({t:r._id,s:"2"}),o(2)},onNext:()=>{r&&I({t:r._id,s:"4"}),l([0,1,2,3]),o(4)}}):g===4&&(n=e(ae,{team:r})),e("div",{className:"mx-auto max-w-[700px] py-1 md:py-6",children:[e("div",{className:"mb-3 md:mb-8 pb-3 md:pb-0 border-b md:border-b-0 flex flex-col items-start md:items-center",children:[e("h1",{className:"text-xl md:text-4xl font-bold",children:"Create Team"}),e("p",{className:"mt-1 md:mt-2 text-sm md:text-base text-gray-500",children:"Complete the steps below to create your team"})]}),e("div",{className:"mb-8 mt-8 hidden sm:flex w-full",children:e(O,{activeIndex:g,completeSteps:N,steps:[{label:"Type"},{label:"Details"},{label:"Skills"},{label:"Members"}]})}),n]})}export{Ue as CreateTeamForm};
