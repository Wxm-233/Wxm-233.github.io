import{I as d}from"./default-S4XNvTXz.js";import{_ as x,ag as i}from"../index-KtRMivXN.js";import{p as o,u as c,f as w}from"./context-TdQ8vEWe.js";import{o as y,c as k,k as f,q as M,s as _,e as a,a6 as s}from"../modules/vue-BHV0COjl.js";import"../modules/shiki-DumuoBbn.js";const F={__name:"10",setup(h,{expose:l}){l(),o(i);const{$slidev:n,$nav:t,$clicksContext:e,$clicks:m,$page:p,$renderContext:u,$frontmatter:g}=c(),r={$slidev:n,$nav:t,$clicksContext:e,$clicks:m,$page:p,$renderContext:u,$frontmatter:g,InjectedLayout:d,get frontmatter(){return i},get useSlideContext(){return c},get _provideFrontmatter(){return o},get _frontmatterToProps(){return w}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},L=a("h1",null,"Common Page Replacement Algorithms",-1),b=a("ul",null,[a("li",null,[s("Last in First Out ("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"L"),a("mi",null,"I"),a("mi",null,"F"),a("mi",null,"O")]),a("annotation",{encoding:"application/x-tex"},"LIFO")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"FO")])])]),s("): "),a("ul",null,[a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"σ"),a("mo",{stretchy:"false"},"("),a("mi",null,"i"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\sigma(i)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mclose"},")")])])]),s("发生缺失时，将最近调入缓存的页面与"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"σ"),a("mo",{stretchy:"false"},"("),a("mi",null,"i"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\sigma(i)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mclose"},")")])])]),s("交换。")])])]),a("li",null,[s("First In First Out ("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"F"),a("mi",null,"I"),a("mi",null,"F"),a("mi",null,"O")]),a("annotation",{encoding:"application/x-tex"},"FIFO")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"FO")])])]),s("): "),a("ul",null,[a("li",null,[s("将最早调入缓存的页面与"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"σ"),a("mo",{stretchy:"false"},"("),a("mi",null,"i"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\sigma(i)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mclose"},")")])])]),s("交换。")])])]),a("li",null,[s("Least Recently Used ("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"L"),a("mi",null,"R"),a("mi",null,"U")]),a("annotation",{encoding:"application/x-tex"},"LRU")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U")])])]),s("): "),a("ul",null,[a("li",null,[s("将上一次访问时间最早的页面与"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"σ"),a("mo",{stretchy:"false"},"("),a("mi",null,"i"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\sigma(i)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mclose"},")")])])]),s("交换。")])])]),a("li",null,[s("Least Frequently Used ("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"L"),a("mi",null,"F"),a("mi",null,"U")]),a("annotation",{encoding:"application/x-tex"},"LFU")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"L"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"F"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U")])])]),s("): "),a("ul",null,[a("li",null,[s("将访问次数最少的页面与"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"σ"),a("mo",{stretchy:"false"},"("),a("mi",null,"i"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\sigma(i)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"σ"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mclose"},")")])])]),s("交换。")])])]),a("li",null,[s("Furthest in Future ("),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"F"),a("mi",null,"F")]),a("annotation",{encoding:"application/x-tex"},"FF")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"FF")])])]),s("): "),a("ul",null,[a("li",null,"最优的离线调度算法。")])])],-1);function v(h,l,n,t,e,m){return y(),k(t.InjectedLayout,M(_(t._frontmatterToProps(t.frontmatter,9))),{default:f(()=>[L,b]),_:1},16)}const C=x(F,[["render",v],["__file","/@slidev/slides/10.md"]]);export{C as default};