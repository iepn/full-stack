import{_ as c}from"./D4Px4Y-J.js";import{d as l,w as s,a2 as d,f as o}from"./BaH7PJyy.js";import"./BdTd7X1U.js";import"./BsYmvPZw.js";import"./BQYCYlGP.js";const _=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,a,i;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(i=t==null?void 0:t.value)==null?void 0:i._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,f;const n=d(),{value:e,excerpt:a,tag:i}=t,r=a?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((u=r==null?void 0:r.children)!=null&&u.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:i,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:i,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((f=r==null?void 0:r.children)!=null&&f.length)?o(c,{value:e,excerpt:a,tag:i,...this.$attrs}):o("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:i},null,2))}});export{_ as default};
