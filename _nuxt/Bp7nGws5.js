import{_ as l,u as _}from"./DlcgBWtK.js";import{a as p,I as m,c as i,o as r,q as s,W as a,X as c,J as d,D as f,_ as u}from"./ds1vZoer.js";const x=["href"],y={key:1,class:"no"},h={__name:"TableOfContents",props:{num:{type:Number}},setup(k){const n=p([]);return _(),m(()=>{const o=document.querySelector(".markdown-content");o&&(n.value=Array.from(o.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(e=>({id:e.id,text:e.innerText})))}),i(()=>o=>{const e=o.match(/\[(\d+)\]/);return e?parseInt(e[1],10):0}),(o,e)=>(r(),s("ul",null,[(r(!0),s(a,null,c(n.value,t=>(r(),s("li",{key:t.id},[d("a",{href:`#${t.id}`},f(t.text.slice(0,-1)),9,x),isNaN(parseInt(t.text.slice(-1),10))?u("",!0):(r(!0),s(a,{key:0},c(parseInt(t.text.slice(-1),10),I=>(r(),s("span"))),256)),parseInt(t.text.slice(-1),10)==0?(r(),s("div",y)):u("",!0)]))),128))]))}},q=l(h,[["__scopeId","data-v-d0217954"]]);export{q as default};