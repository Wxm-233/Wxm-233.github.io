const __vite__fileDeps=["assets/slidev/DrawingControls-DsuZGC_Y.js","assets/modules/unplugin-icons-Bg0frlMJ.js","assets/modules/vue-DrJwJ16H.js","assets/modules/shiki-C7-cpdV9.js","assets/modules/shiki-DeiVkiDa.css","assets/slidev/DrawingPreview-BN5ebLDW.js","assets/index-D18q6Lby.js","assets/index-DwJGbrso.css","assets/DrawingPreview-BB_gIMFu.css","assets/slidev/ContextMenu-CjSPhzLQ.js","assets/slidev/IconButton-BdChQ44-.js","assets/slidev/context-BbHgKa5o.js","assets/ContextMenu-EZAKxWQn.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as m,aa as C,o as i,c as u,b as f,e as l,f as N,i as b,g as d,af as O,y as V,k as g,a6 as P,M as p,l as _,F as M,v as z,x as k,h as R,t as W}from"../modules/vue-DrJwJ16H.js";import{_ as v,q as h,a as E,v as j,w as B,x as H,y as A,z as T,d as G,A as L,n as S,B as Q,D as U}from"../index-D18q6Lby.js";import{Q as F,G as q,C as K,u as X,r as Y,N as J,S as Z,o as $}from"./ContextMenu-CjSPhzLQ.js";import{b as ee,S as oe}from"./DrawingPreview-BN5ebLDW.js";import{o as te}from"../modules/unplugin-icons-Bg0frlMJ.js";import"../modules/shiki-C7-cpdV9.js";import"./IconButton-BdChQ44-.js";import"./context-BbHgKa5o.js";const ne=m({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(a,{expose:o,emit:t}){o();const e=a,n=t,r=C(e,"modelValue",n);function s(){r.value=!1}const c={props:e,emit:n,value:r,onClick:s};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"};function se(a,o,t,e,n,r){return i(),u(O,null,[e.value?(i(),f("div",re,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=s=>e.onClick())}),l("div",{class:b(["m-auto rounded-md bg-main shadow",e.props.class]),"dark:border":"~ main"},[N(a.$slots,"default")],2)])):d("v-if",!0)],1024)}const ie=v(ne,[["render",se],["__file","D:/Documents/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),ae=m({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(a,{expose:o,emit:t}){o();const e=a,n=t,r=C(e,"modelValue",n),s=V(()=>typeof h.info=="string"),c={props:e,emit:n,value:r,hasInfo:s,get configs(){return h},Modal:ie};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),le="/assets/logo-BYkHSa_O.png",de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],ue=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:le,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),P("dev ")])])],-1);function _e(a,o,t,e,n,r){return i(),u(e.Modal,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),class:"px-6 py-4"},{default:g(()=>[l("div",de,[e.hasInfo?(i(),f("div",{key:0,class:"mb-4",innerHTML:e.configs.info},null,8,ce)):d("v-if",!0),ue])]),_:1},8,["modelValue"])}const fe=v(ae,[["render",_e],["__file","D:/Documents/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]),me=m({__name:"Controls",setup(a,{expose:o}){o();const{isEmbedded:t}=E(),e=!h.drawings.presenterOnly&&!t.value,n=p();e&&j(()=>import("./DrawingControls-DsuZGC_Y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(y=>n.value=y.default);const r=p(),s=p(),c={isEmbedded:t,drawingEnabled:e,DrawingControls:n,WebCamera:r,RecordingDialog:s,get showInfoDialog(){return B},get showRecordingDialog(){return H},get configs(){return h},QuickOverview:F,InfoDialog:fe,Goto:q,ContextMenu:K};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function ve(a,o,t,e,n,r){return i(),f(M,null,[e.drawingEnabled&&e.DrawingControls?(i(),u(e.DrawingControls,{key:0})):d("v-if",!0),_(e.QuickOverview),_(e.Goto),e.WebCamera?(i(),u(e.WebCamera,{key:1})):d("v-if",!0),e.RecordingDialog?(i(),u(e.RecordingDialog,{key:2,modelValue:e.showRecordingDialog,"onUpdate:modelValue":o[0]||(o[0]=s=>e.showRecordingDialog=s)},null,8,["modelValue"])):d("v-if",!0),e.configs.info?(i(),u(e.InfoDialog,{key:3,modelValue:e.showInfoDialog,"onUpdate:modelValue":o[1]||(o[1]=s=>e.showInfoDialog=s)},null,8,["modelValue"])):d("v-if",!0),_(e.ContextMenu)],64)}const pe=v(me,[["render",ve],["__file","D:/Documents/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),ge=m({__name:"PrintStyle",setup(a,{expose:o}){o();function t(n,{slots:r}){if(r.default)return z("style",r.default())}const e={vStyle:t,get slideHeight(){return A},get slideWidth(){return T}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function he(a,o,t,e,n,r){return i(),u(e.vStyle,null,{default:g(()=>[P(" @page { size: "+k(e.slideWidth)+"px "+k(e.slideHeight)+"px; margin: 0px; } ",1)]),_:1})}const ye=v(ge,[["render",he],["__file","D:/Documents/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),we=m({__name:"PresenterMouse",setup(a,{expose:o}){o();const t={get sharedState(){return G}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),Se={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"};function be(a,o,t,e,n,r){const s=te;return e.sharedState.cursor?(i(),f("div",Se,[_(s,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e.sharedState.cursor.x}%`,top:`${e.sharedState.cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}const xe=v(we,[["render",be],["__file","D:/Documents/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),De=m({__name:"play",setup(a,{expose:o}){o();const{next:t,prev:e,isPrintMode:n}=E(),{isDrawing:r}=ee(),s=W();function c(w){var D;S.value||w.button===0&&((D=w.target)==null?void 0:D.id)==="slide-container"&&(w.pageX/window.innerWidth>.5?t():e())}X(s),Y();const y=V(()=>L.value||S.value),I=p(),x={next:t,prev:e,isPrintMode:n,isDrawing:r,root:s,onClick:c,persistNav:y,SideEditor:I,get isEditorVertical(){return Q},get showEditor(){return S},get windowSize(){return U},Controls:pe,SlideContainer:oe,NavControls:J,SlidesShow:Z,PrintStyle:ye,get onContextMenu(){return $},PresenterMouse:xe};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),ke=l("div",{id:"twoslash-container"},null,-1);function Ce(a,o,t,e,n,r){return i(),f(M,null,[e.isPrintMode?(i(),u(e.PrintStyle,{key:0})):d("v-if",!0),l("div",{id:"page-root",ref:"root",class:b(["grid",e.isEditorVertical?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(e.SlideContainer,{style:{background:"var(--slidev-slide-container-background, black)"},width:e.isPrintMode?e.windowSize.width.value:void 0,"is-main":"",onPointerdown:e.onClick,onContextmenu:e.onContextMenu},{default:g(()=>[_(e.SlidesShow,{"render-context":"slide"}),_(e.PresenterMouse)]),controls:g(()=>[e.isPrintMode?d("v-if",!0):(i(),f("div",{key:0,class:b(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[e.persistNav?"!opacity-100 right-0":"opacity-0 p-2",e.isDrawing?"pointer-events-none":""]])},[_(e.NavControls,{persist:e.persistNav},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),e.SideEditor&&e.showEditor?(i(),u(e.SideEditor,{key:0,resize:!0})):d("v-if",!0)],2),e.isPrintMode?d("v-if",!0):(i(),u(e.Controls,{key:1})),ke],64)}const Re=v(De,[["render",Ce],["__file","D:/Documents/slidev/node_modules/@slidev/client/pages/play.vue"]]);export{Re as default};