import{d as O,e as z,_ as F,f as H,g as K}from"../modules/unplugin-icons-CyFWVZwZ.js";import{d as X,J as j,t as P,y as B,a7 as J,n as R,b as _,e as c,F as A,a8 as T,c as v,k as p,g as h,h as U,x as g,o as r,i as x,l as d}from"../modules/vue-BHV0COjl.js";import{u as q,a as G,s as Q,c as Y,C as I,g as Z,i as $,b as ee,t as te,p as oe,_ as ne}from"../index-KtRMivXN.js";import{S as ie,a as le,D as ce}from"./DrawingPreview-DxTqU_4L.js";import{I as ae}from"./IconButton-BdRkKHmk.js";import{N as re,C as se}from"./ClicksSlider-DLUVbbSw.js";import"../modules/shiki-DumuoBbn.js";import"./NoteDisplay-fRgSSd6A.js";const de=450,me=X({__name:"overview",setup(V,{expose:f}){f(),q({title:`Overview - ${Q}`});const{openInEditor:E,slides:e}=G(),u=j(new Map),w=P([]),S=P(null),b=B(()=>e.value.map(n=>{var o,l;return s(((l=(o=n.meta)==null?void 0:o.slide)==null?void 0:l.note)||"")})),y=B(()=>b.value.reduce((n,o)=>n+o,0)),D=B(()=>e.value.map(n=>a(n)).reduce((n,o)=>n+o,0)),k=new WeakMap;function t(n){return k.has(n)||k.set(n,Y(n,I)),k.get(n)}function a(n){var o,l;return((o=n.meta)==null?void 0:o.clicks)||((l=t(n))==null?void 0:l.total)}function s(n){var o;return((o=n.match(/[\w’'-]+/g))==null?void 0:o.length)||0}function i(n){const o=n.getBoundingClientRect(),l=20;return o.top>=0-l&&o.left>=0-l&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&o.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function m(){const n=[];Array.from(u.entries()).forEach(([o,l])=>{i(l)&&n.push(o)}),w.value=n}function C(n){const o=document.createElement("a");o.target="_blank",o.href=oe+n.slice(1),o.click()}function M(n){const o=u.get(n);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}function L(n,o,l){const N=t(l);N.current===o?N.current=I:N.current=o,n.preventDefault()}J(()=>{R(()=>{m()})});const W={cardWidth:de,openInEditor:E,slides:e,blocks:u,activeBlocks:w,edittingNote:S,wordCounts:b,totalWords:y,totalClicks:D,clicksContextMap:k,getClicksContext:t,getSlideClicks:a,wordCount:s,isElementInViewport:i,checkActiveBlocks:m,openSlideInNewTab:C,scrollToSlide:M,onMarkerClick:L,get getSlidePath(){return Z},get isColorSchemaConfigured(){return $},get isDark(){return ee},get toggleDark(){return te},SlideContainer:ie,SlideWrapper:le,DrawingPreview:ce,IconButton:ae,NoteEditable:re,ClicksSlider:se,get CLICKS_MAX(){return I}};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}}),_e={class:"h-screen w-screen of-hidden flex"},ge={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},fe={class:"relative"},ke={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},ve=["onClick"],pe={p2:"",border:"t main"},he={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},ue={class:"text-3xl op20 mb2"},be={class:"flex flex-col gap-2 my5"},Ce=["onDblclick"],xe={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},we={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Se={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},ye={class:"text-xs op50"};function De(V,f,E,e,u,w){const S=O,b=z,y=F,D=K,k=H;return r(),_("div",_e,[c("nav",ge,[c("div",fe,[c("div",ke,[(r(!0),_(A,null,T(e.slides,(t,a)=>{var s,i,m,C;return r(),_("div",{key:t.no,class:"relative",style:{direction:"ltr"}},[c("button",{class:x(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",e.activeBlocks.includes(a)?"op100 text-primary bg-gray:5":"op20"]),onClick:M=>e.scrollToSlide(a)},[c("div",null,g(a+1),1)],10,ve),(i=(s=t.meta)==null?void 0:s.slide)!=null&&i.title?(r(),_("div",{key:0,class:x(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",e.activeBlocks.includes(a)?"text-primary":"text-main important-text-op-50"])},g((C=(m=t.meta)==null?void 0:m.slide)==null?void 0:C.title),3)):h("v-if",!0)])}),128))])]),c("div",pe,[e.isColorSchemaConfigured?h("v-if",!0):(r(),v(e.IconButton,{key:0,title:e.isDark?"Switch to light mode theme":"Switch to dark mode theme",onClick:f[0]||(f[0]=t=>e.toggleDark())},{default:p(()=>[e.isDark?(r(),v(S,{key:0})):(r(),v(b,{key:1}))]),_:1},8,["title"]))])]),c("main",{class:"flex-1 h-full of-auto",style:U(`grid-template-columns: repeat(auto-fit,minmax(${e.cardWidth}px,1fr))`),onScroll:e.checkActiveBlocks},[(r(!0),_(A,null,T(e.slides,(t,a)=>{var s;return r(),_("div",{key:t.no,ref_for:!0,ref:i=>e.blocks.set(a,i),class:x(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",a===0?"pt5":""])},[c("div",he,[c("div",ue,g(a+1),1),d(e.IconButton,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:i=>e.openSlideInNewTab(e.getSlidePath(t,!1))},{default:p(()=>[d(y)]),_:2},1032,["onClick"]),(s=t.meta)!=null&&s.slide?(r(),v(e.IconButton,{key:0,class:"mr--3 op0 group-hover:op80",title:"Open in editor",onClick:i=>e.openInEditor(`${t.meta.slide.filepath}:${t.meta.slide.start}`)},{default:p(()=>[d(D)]),_:2},1032,["onClick"])):h("v-if",!0)]),c("div",be,[c("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:i=>e.openSlideInNewTab(e.getSlidePath(t,!1))},[(r(),v(e.SlideContainer,{key:t.no,width:e.cardWidth,class:"pointer-events-none important:[&_*]:select-none"},{default:p(()=>[d(e.SlideWrapper,{"clicks-context":e.getClicksContext(t),route:t,"render-context":"overview"},null,8,["clicks-context","route"]),d(e.DrawingPreview,{page:t.no},null,8,["page"])]),_:2},1024))],40,Ce),e.getSlideClicks(t)?(r(),v(e.ClicksSlider,{key:0,"clicks-context":e.getClicksContext(t),class:"w-full mt-2",onDblclick:i=>e.getClicksContext(t).current=e.CLICKS_MAX},null,8,["clicks-context","onDblclick"])):h("v-if",!0)]),c("div",xe,[d(e.IconButton,{title:"Edit Note",class:x(["rounded-full w-9 h-9 text-sm",e.edittingNote===t.no?"important:op0":""]),onClick:i=>e.edittingNote=t.no},{default:p(()=>[d(k)]),_:2},1032,["class","onClick"])]),d(e.NoteEditable,{no:t.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,editing:e.edittingNote===t.no,"clicks-context":e.getClicksContext(t),onDblclick:i=>e.edittingNote!==t.no?e.edittingNote=t.no:null,"onUpdate:editing":f[1]||(f[1]=i=>e.edittingNote=null),onMarkerClick:(i,m)=>e.onMarkerClick(i,m,t)},null,8,["no","editing","clicks-context","onDblclick","onMarkerClick"]),e.wordCounts[a]>0?(r(),_("div",we,g(e.wordCounts[a])+" words ",1)):h("v-if",!0)],2)}),128))],36),c("div",Se,[c("div",ye,g(e.slides.length)+" slides · "+g(e.totalClicks+e.slides.length-1)+" clicks · "+g(e.totalWords)+" words ",1)])])}const Te=ne(me,[["render",De],["__file","D:/Documents/code/Online-Algo/node_modules/@slidev/client/pages/overview.vue"]]);export{Te as default};