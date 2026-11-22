import{j as e}from"./motion-vendor-CEMO4N4-.js";import{r}from"./router-vendor-C4g7TsNI.js";import{S as u,a as b,b as g,c as y,u as w}from"./sandpack-vendor-CqSlDrw_.js";import{c as d,b as n,C as v}from"./index-Bn3DQnES.js";import{U as j,Y as f,Q as k}from"./panels-vendor-DrUFCaGx.js";import"./codemirror-vendor-CHTNcrjt.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],S=d("columns-2",N);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]],C=d("grip-horizontal",z);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],E=d("grip-vertical",L);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],_=d("rows-2",F),h=`<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Noetic Web KodLab</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="glass-card">
    <h1>Merhaba Noetic Web!</h1>
    <p>HTML ve CSS kodlarını buradan test edebilirsin.</p>
    <button class="btn">Tıkla</button>
  </div>
  <script src="index.js"><\/script>
</body>
</html>`,x=`body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #ecfdf5, #ccfbf1, #cffafe);
  color: #064e3b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.glass-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  text-align: center;
}

h1 {
  margin-top: 0;
  color: #047857;
}

.btn {
  background: linear-gradient(to right, #10b981, #14b8a6);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
}`,I={colors:{surface1:"transparent",surface2:"rgba(255, 255, 255, 0.2)",surface3:"rgba(255, 255, 255, 0.4)",clickable:"#065f46",base:"#064e3b",disabled:"#a7f3d0",hover:"#047857",accent:"#10b981",error:"#ef4444",errorSurface:"#fee2e2"},syntax:{plain:"#064e3b",comment:{color:"#10b981",fontStyle:"italic"},keyword:"#059669",tag:"#047857",punctuation:"#065f46",definition:"#059669",property:"#0d9488",static:"#0f766e",string:"#0d9488"},font:{body:"Inter, system-ui, sans-serif",mono:'"Fira Code", "JetBrains Mono", monospace',size:"14px",lineHeight:"24px"}},c="webModule_kodlab_v1";function M(){const{sandpack:t}=w();return r.useEffect(()=>{var l,i,o;const s={files:{"/index.html":((l=t.files["/index.html"])==null?void 0:l.code)||h,"/styles.css":((i=t.files["/styles.css"])==null?void 0:i.code)||x,"/index.js":((o=t.files["/index.js"])==null?void 0:o.code)||`// JavaScript kodlarını buraya yazabilirsin
console.log('KodLab hazır!');`},activeFile:t.activeFile};localStorage.setItem(c,JSON.stringify(s))},[t.files,t.activeFile]),r.useEffect(()=>{const s=()=>{localStorage.removeItem(c)};return window.addEventListener("wm-reset-all-progress",s),()=>window.removeEventListener("wm-reset-all-progress",s)},[]),null}function T(){const[t,s]=r.useState("horizontal"),[l,i]=r.useState({"/index.html":h,"/styles.css":x,"/index.js":`// JavaScript kodlarını buraya yazabilirsin
console.log('KodLab hazır!');`}),[o,p]=r.useState("/index.html");return r.useEffect(()=>{const m=localStorage.getItem(c);if(m)try{const a=JSON.parse(m);a.files&&i({"/index.html":a.files["/index.html"]||h,"/styles.css":a.files["/styles.css"]||x,"/index.js":a.files["/index.js"]||`// JavaScript kodlarını buraya yazabilirsin
console.log('KodLab hazır!');`}),a.activeFile&&p(a.activeFile)}catch{localStorage.removeItem(c)}},[]),e.jsxs("div",{className:"flex flex-col gap-4 h-full",children:[e.jsxs("div",{className:"flex justify-end gap-2 shrink-0",children:[e.jsxs("button",{onClick:()=>s("horizontal"),className:n("px-4 py-2 rounded-xl transition-all flex items-center gap-2 text-sm font-medium",t==="horizontal"?"bg-white/60 shadow-sm border border-white/80 text-emerald-900":"glass-panel text-emerald-800/70 hover:bg-white/40"),children:[e.jsx(S,{className:"w-4 h-4"}),"Yanyana"]}),e.jsxs("button",{onClick:()=>s("vertical"),className:n("px-4 py-2 rounded-xl transition-all flex items-center gap-2 text-sm font-medium",t==="vertical"?"bg-white/60 shadow-sm border border-white/80 text-emerald-900":"glass-panel text-emerald-800/70 hover:bg-white/40"),children:[e.jsx(_,{className:"w-4 h-4"}),"Altalta"]})]}),e.jsx("div",{className:"flex-1 rounded-3xl overflow-hidden glass-panel border-white/50 p-2 min-h-[600px] flex flex-col",children:e.jsxs(u,{template:"vanilla",theme:I,files:l,options:{activeFile:o,recompileMode:"delayed",recompileDelay:500,initMode:"user-visible",classes:{"sp-wrapper":"h-full w-full flex flex-col flex-1 min-h-0","sp-layout":"h-full w-full flex flex-col flex-1 min-h-0 !bg-transparent !border-none","sp-pane":"!bg-transparent !border-none flex-1 min-h-0"}},children:[e.jsx(M,{}),e.jsx(b,{className:"h-full w-full flex flex-col flex-1 min-h-0 !bg-transparent !border-none",children:e.jsxs(j,{orientation:t,className:"h-full w-full flex-1",children:[e.jsx(f,{defaultSize:50,minSize:20,className:"h-full w-full bg-white/60 rounded-2xl border border-white/60 overflow-hidden flex flex-col",children:e.jsx(g,{showTabs:!0,showLineNumbers:!0,wrapContent:!0,style:{height:"100%",width:"100%",flex:1,minHeight:0}})}),e.jsxs(k,{className:n("relative flex items-center justify-center group",t==="horizontal"?"w-4 cursor-col-resize":"h-4 cursor-row-resize"),children:[e.jsx("div",{className:n("transition-colors bg-white/30 group-hover:bg-emerald-400/60",t==="horizontal"?"w-[2px] h-full":"h-[2px] w-full")}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:t==="horizontal"?e.jsx(E,{className:"w-3 h-3 text-emerald-800/50 opacity-0 group-hover:opacity-100 transition-opacity"}):e.jsx(C,{className:"w-3 h-3 text-emerald-800/50 opacity-0 group-hover:opacity-100 transition-opacity"})})]}),e.jsx(f,{defaultSize:50,minSize:20,className:"h-full w-full bg-white/60 rounded-2xl border border-white/60 overflow-hidden relative",children:e.jsx(y,{showOpenInCodeSandbox:!1,showRefreshButton:!0,style:{height:"100%",width:"100%",flex:1,minHeight:0}})})]})})]})})]})}function A(){return e.jsxs("div",{className:"flex flex-col gap-6 h-[calc(100vh-4rem)]",children:[e.jsxs("header",{className:"glass-panel rounded-3xl p-4 sm:p-6 relative overflow-hidden shrink-0",children:[e.jsx("div",{className:"absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-teal-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"}),e.jsxs("div",{className:"relative z-10 flex items-start sm:items-center gap-3 sm:gap-4",children:[e.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-700 flex items-center justify-center shadow-md text-white shrink-0",children:e.jsx(v,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:"text-xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight leading-tight",children:"KodLab"}),e.jsx("p",{className:"text-sm sm:text-base text-emerald-800/80 leading-relaxed mt-1",children:"HTML ve CSS kodlarını özgürce test edebileceğin laboratuvar. Dosyalar arası geçiş yap ve canlı sonucu gör."})]})]})]}),e.jsx("div",{className:"flex-1 min-h-0 pb-8",children:e.jsx(T,{})})]})}export{A as default};
