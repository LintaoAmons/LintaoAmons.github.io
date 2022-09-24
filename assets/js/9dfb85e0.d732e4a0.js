"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"InNoteRef-Obsidian/note-example",id:"InNoteRef-Obsidian/note-example",title:"note-example",description:"#go",source:"@site/docs/InNoteRef-Obsidian/note-example.md",sourceDirName:"InNoteRef-Obsidian",slug:"/InNoteRef-Obsidian/note-example",permalink:"/docs/InNoteRef-Obsidian/note-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/InNoteRef-Obsidian/note-example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InNote-REF.Obsidian",permalink:"/docs/InNoteRef-Obsidian/"},next:{title:"VimEverywhere",permalink:"/docs/VimEverywhere/"}},u={},c=[{value:"WaitGroup",id:"waitgroup",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"#go ")),(0,o.kt)("h2",{id:"waitgroup"},"WaitGroup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WaitGroup")," \u7b49\u5f85\u4e00\u7ec4 ",(0,o.kt)("inlineCode",{parentName:"li"},"goroutines")," \u8fd0\u884c\u7ed3\u675f ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitGroup")," waits for a collection of goroutines to finish."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Add")," \u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u8bbe\u7f6e\u4e86\u9700\u8981\u7b49\u5f85\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"goroutine")," \u7684\u6570\u91cf ==1-REF==",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The main goroutine calls Add to set the number of goroutines to wait for."))),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"goroutine")," \u8fd0\u884c\u5230\u6700\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"Done")," \u65b9\u6cd5\uff0c\u8868\u793a\u7ed3\u675f ==2-REF==",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Then each of the goroutines runs and calls Done when finished. "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Wait")," \u65b9\u6cd5\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"goroutine")," \u8fd0\u884c\u7ed3\u675f  ==3-REF==",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"At the same time, Wait can be used to block until all goroutines have finished.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'t.Run("it runs safely concurrently", func(t *testing.T) {\n    wantedCount := 1000\n    counter := Counter{}\n\n    var wg sync.WaitGroup \n    wg.Add(wantedCount) // ==1-REF==\n\n    for i := 0; i < wantedCount; i++ {\n        go func() {\n            counter.Inc()\n            wg.Done() // ==2-REF==\n        }()\n    }\n    wg.Wait() // ==3-REF==\n\n    assertCounter(t, counter, wantedCount)\n})\n')))}s.isMDXComponent=!0}}]);