import{d,c as u,l as _,m as f,F as s,G as c,u as h,I as y,J as g}from"./D17VtJf8.js";import{_ as b}from"./DlAUqK2U.js";const S=e=>(y("data-v-8392badd"),e=e(),g(),e),v={class:"title"},x={class:"time"},I={class:"client"},N=S(()=>s("span",null,"clientele",-1)),D=d({__name:"pageTitle",props:{title:{type:String},time:{type:String},client:{type:String}},setup(e){const r=["January","February","March","April","May","June","July","August","September","October","November","December"],i=e,l=u(()=>{if(i.time){const n=i.time.split(".").map(Number),a=new Date(n[0],n[1]-1,n[2]),p=r[a.getMonth()],m=a.getFullYear(),t=a.getDate();let o="th";return t===1||t===21||t===31?o="st":t===2||t===22?o="nd":(t===3||t===23)&&(o="rd"),`${p} ${t}${o} ${m}`}return""});return(n,a)=>(_(),f("main",null,[s("div",v,[s("p",null,c(e.title),1),s("span",x,c(h(l)),1)]),s("div",I,[N,s("p",null,c(e.client),1)])]))}}),$=b(D,[["__scopeId","data-v-8392badd"]]);export{$ as _};
