import{_ as g,u as I}from"./B-1vDoLj.js";import{o as a,q as o,y as $,d as h,B as f,a as p,I as C,L as c,P as _,W as B,X as x,u as r,z as E,J as l,a0 as b,a1 as V,D as q,_ as A,$ as L,Z as N,U as z,V as D}from"./ds1vZoer.js";const F={__name:"anSkeletonItem",props:["variant","width","height"],setup(e){return I(),(n,i)=>(a(),o("div",{class:"ql-skeleton-item",style:$({width:e.width,height:e.height})},null,4))}},M=g(F,[["__scopeId","data-v-dd20e1c9"]]),J={key:0,class:"ql-skeleton"},O={key:1},P=h({name:"QlSkeleton",__name:"anSkeleton",props:{loading:{type:Boolean,default:!0}},setup(e){return(n,i)=>n.loading?(a(),o("div",J,[f(n.$slots,"template")])):(a(),o("div",O,[f(n.$slots,"default")]))}}),Q=e=>(z("data-v-d63b1c31"),e=e(),D(),e),R={key:0},W={style:{padding:"14px"}},X=["href"],Z=Q(()=>l("p",{class:"tips"},"→",-1)),j=["src"],G={key:0,class:"info"},H={class:"info-title",style:{"text-transform":"uppercase"}},K=["src"],T=h({__name:"pageImage",props:{img:{type:String},info:{type:String},type:{type:String}},setup(e){const i=p(e.img.split(",").map(t=>"/img/"+t)),d=p(!0),u=p(0);return C(()=>{i.value.forEach((t,v)=>{const s=new Image;s.src=t,s.onload=()=>{u.value++,u.value===i.value.length&&(d.value=!1)},s.onerror=()=>{console.error(`Failed to load image ${t}`)}})}),(t,v)=>{const s=M,y=P,S=L,w=N;return a(),o("main",null,[c(w,{modules:["SwiperAutoplay"in t?t.SwiperAutoplay:r(b),"SwiperEffectCreative"in t?t.SwiperEffectCreative:r(V)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:5e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:_(()=>[(a(!0),o(B,null,x(r(i),(m,k)=>(a(),E(S,{key:k},{default:_(()=>[r(d)?(a(),o("div",R,[c(y,{loading:r(d),ref_for:!0,ref:"skeletonRef"},{template:_(()=>[c(s,{variant:"image",style:{width:"100vw",height:"80vh"}}),l("div",W,[c(s,{variant:"h3",style:{width:"50%"}})])]),_:1},8,["loading"])])):(a(),o("a",{key:1,href:m,target:"_blank"},[Z,l("img",{src:m,alt:"page-image"},null,8,j)],8,X))]),_:2},1024))),128))]),_:1},8,["modules"]),e.info&&e.type?(a(),o("div",G,[l("div",H,q(e.info),1),l("img",{src:"/img/page/"+e.type+".png",alt:"page-image-copyright"},null,8,K)])):A("",!0)])}}}),ee=g(T,[["__scopeId","data-v-d63b1c31"]]);export{ee as _};