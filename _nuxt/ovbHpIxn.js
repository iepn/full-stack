import{_ as C}from"./CoJAxn71.js";import{_ as b}from"./s72ttPVK.js";import{_ as q}from"./BOPdVDDT.js";import{u as A}from"./D5NHWevw.js";import{u as M,q as N}from"./J2CW49L_.js";import{d as R,a as T,Q as V,c as w,l as a,m as s,O as _,M as d,F as t,u as g,R as $,U as B,G as D,q as p,B as G,I as H,J as Q}from"./BqoENJTn.js";import{_ as F}from"./DlAUqK2U.js";import"./D4IgM4F7.js";import"./BeW0Vss7.js";import"./BmzbL_pR.js";const L=r=>(H("data-v-d30528c5"),r=r(),Q(),r),O={class:"layout"},z=L(()=>t("a",{class:"home",href:"/"},"HOME",-1)),J={class:"pagination-layout"},U={class:"pagination"},X={class:"pages-nums"},Y={class:"page-num"},j=["onClick"],v=5,K=R({__name:"dev",async setup(r){var h,k;let u,y;const n=T(1);A({title:"Develop - RHYME.Q",description:"Github + Hackerone + Behance ÷ Researchgate"});const{data:c}=([u,y]=V(()=>M("equal",()=>N("dev/").find())),u=await u,y(),u);(h=c.value)==null||h.sort((l,o)=>{const i=new Date(l.release_date).getTime();return new Date(o.release_date).getTime()-i});const f=Math.ceil(((k=c.value)==null?void 0:k.length)/v),m=l=>{n.value=l,window.scrollTo({top:0,behavior:"smooth"})},I=w(()=>{var i;const l=(n.value-1)*v,o=n.value*v;return((i=c.value)==null?void 0:i.slice(l,o))||[]}),P=w(()=>c.value||[]);return(l,o)=>{const i=C,x=b,E=q,S=C;return a(),s(_,null,[(a(!0),s(_,null,d(P.value,e=>(a(),s("div",{key:e.id,style:{display:"none"}},[p(i,{to:e._path},null,8,["to"])]))),128)),t("main",O,[z,g(c)?(a(!0),s(_,{key:0},d(I.value,e=>(a(),s("div",{class:"content",key:e.id},[p(S,{to:e._path},{default:G(()=>[p(x,{img:e.img,info:e.info,type:e.types},null,8,["img","info","type"]),p(E,{class:"title",title:e.title,time:e.time,client:e.client},null,8,["title","time","client"])]),_:2},1032,["to"])]))),128)):$("",!0),t("div",J,[t("div",U,[t("p",{class:"pages-nums",onClick:o[0]||(o[0]=e=>m(n.value-1)),style:B({display:n.value===1?"none":"inline-block"})}," PREV ",4),t("p",{onClick:o[1]||(o[1]=e=>m(n.value+1)),class:"pages-nums",style:B([{color:"blue"},{display:n.value===g(f)?"none":"inline-block"}])}," NEXT ",4),t("p",X,"PAGE: "+D(n.value),1)]),t("div",Y,[(a(!0),s(_,null,d(g(f),e=>(a(),s("div",{key:e},[t("p",{class:"page-numcolor",onClick:W=>m(e)},D(e),9,j)]))),128))])])])],64)}}}),re=F(K,[["__scopeId","data-v-d30528c5"]]);export{re as default};
