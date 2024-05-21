(()=>{var e,t={127:(e,t,n)=>{"use strict";const r=window.wp.blocks,o=window.wp.element,i=window.wp.primitives,l=(0,o.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(i.Path,{d:"M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"})),a=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"mx/buttons","version":"0.1.0","title":"Buttons","category":"design","description":"Starter block written with ESNext standard and JSX support.","textdomain":"mx-blocks-plugin","supports":{"anchor":true,"align":["wide","full"],"__experimentalExposeControlsToChildren":true,"spacing":{"blockGap":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"blockGap":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex"}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');var s=n(779),c=n.n(s);const u=window.wp.blockEditor,p=e=>{if(e.layout)return e;const{contentJustification:t,orientation:n,...r}=e;return(t||n)&&Object.assign(r,{layout:{type:"flex",...t&&{justifyContent:t},...n&&{orientation:n}}}),r},m=[{attributes:{contentJustification:{type:"string"},orientation:{type:"string",default:"horizontal"}},supports:{anchor:!0,align:["wide","full"],__experimentalExposeControlsToChildren:!0,spacing:{blockGap:!0,margin:["top","bottom"],__experimentalDefaultControls:{blockGap:!0}}},isEligible:e=>{let{contentJustification:t,orientation:n}=e;return!!t||!!n},migrate:p,save(e){let{attributes:{contentJustification:t,orientation:n}}=e;return(0,o.createElement)("div",u.useBlockProps.save({className:c()({[`is-content-justification-${t}`]:t,"is-vertical":"vertical"===n})}),(0,o.createElement)(u.InnerBlocks.Content,null))}},{supports:{align:["center","left","right"],anchor:!0},save:()=>(0,o.createElement)("div",null,(0,o.createElement)(u.InnerBlocks.Content,null)),isEligible(e){let{align:t}=e;return t&&["center","left","right"].includes(t)},migrate:e=>p({...e,align:void 0,contentJustification:e.align})}],f=window.wp.richText,d={from:[{type:"block",isMultiBlock:!0,blocks:["core/button"],transform:e=>(0,r.createBlock)("mx/buttons",{},e.map((e=>(0,r.createBlock)("core/button",e))))},{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:e=>(0,r.createBlock)("mx/buttons",{},e.map((e=>{const t=(0,f.__unstableCreateElement)(document,e.content),n=t.innerText||"",o=t.querySelector("a")?.getAttribute("href");return(0,r.createBlock)("core/button",{text:n,url:o})}))),isMatch:e=>e.every((e=>{const t=(0,f.__unstableCreateElement)(document,e.content),n=t.innerText||"",r=t.querySelectorAll("a");return n.length<=30&&r.length<=1}))}]},v=window.wp.data,b=["mx/button"],{name:h}=a;(0,r.registerBlockType)("mx/buttons",{icon:l,deprecated:m,transforms:d,edit:function(e){let{attributes:{layout:t={}}}=e;const n=(0,u.useBlockProps)(),r=(0,v.useSelect)((e=>e(u.store).getSettings().__experimentalPreferredStyleVariations?.value?.["mx/button"]),[]),i=(0,u.useInnerBlocksProps)(n,{allowedBlocks:b,template:[["mx/button",{className:r&&`is-style-${r}`}]],__experimentalLayout:t,templateInsertUpdatesSelection:!0});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",i))},save:function(){const e=u.useInnerBlocksProps.save(u.useBlockProps.save());return(0,o.createElement)("div",e)}})},779:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],a=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,a,s]=n,c=0;if(l.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var u=s(r)}for(t&&t(n);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=globalThis.webpackChunkbuttons=globalThis.webpackChunkbuttons||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[431],(()=>r(127)));o=r.O(o)})();