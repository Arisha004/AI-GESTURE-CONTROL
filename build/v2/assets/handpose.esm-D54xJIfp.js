import{g as qe,c as Ge,b as et,I as Ue,e as x,a as vt,d as Ke,f as S,D as Qt,s as ue,h as Ot,i as _t,j as Mt,k as es,l as ts,m as ss,n as as,o as rs,p as ns,r as is,q as os,t as us,u as ve,v as Oe,w as _e,x as v,y as ps,E as A,F as tt,z as b,A as ge,B as ms,C as Ee,G as Y,H as q,J as z,K as W,L as oe,M as $e,N as ls,O as cs,P as hs,Q as ds,R as fs,S as _,T as ys,U as gs,V as ae,W as ie,X as st,Y as bs,Z as le,_ as Ns,$ as Ts,a0 as ws,a1 as Et,a2 as kt,a3 as ce,a4 as at,a5 as Ss,a6 as At,a7 as be,a8 as It,a9 as vs,aa as G,ab as se,ac as Z,ad as $t,ae as Os,af as _s,ag as Es,ah as ks,ai as As,aj as re,ak as Is,al as Dt,am as $s,an as Ds,ao as Ps,ap as Ls,aq as Cs,ar as zs,as as rt,at as nt,au as Vs,av as Fs,aw as xs,ax as Bs,ay as js,az as Rs,aA as Hs,aB as Ws,aC as Pt,aD as j,aE as qs,aF as Gs,aG as Us,aH as Ks,aI as Js,aJ as Xs,aK as Ys,aL as Zs,aM as Qs,aN as Ms,aO as ea,aP as ta,aQ as sa,aR as aa,aS as ra,aT as na,aU as ia,aV as oa,aW as ua,aX as pa,aY as ma,aZ as la,a_ as Lt,a$ as ca,b0 as ha,b1 as da,b2 as fa,b3 as Ct,b4 as ya,b5 as ga,b6 as ba,b7 as Na,b8 as Ta,b9 as wa,ba as Sa,bb as va,bc as Oa,bd as _a,be as Ea,bf as ka,bg as Aa,bh as Ia,bi as $a,bj as Da,bk as Pa,bl as La,bm as Ca,bn as za,bo as Va,bp as Fa,bq as xa,br as zt,bs as Ba,bt as ja,bu as Ra,bv as Ha,bw as Wa,bx as qa,by as Ga,bz as Ua,bA as Ka,bB as Ja,bC as pe,bD as Xa,bE as Ya,bF as Za,bG as Qa,bH as Ma,bI as er,bJ as tr,bK as sr,bL as ar,bM as rr,bN as nr,bO as ir,bP as or,bQ as ur,bR as pr,bS as mr,bT as lr,bU as cr,bV as hr,bW as dr,bX as fr,bY as yr,bZ as gr,b_ as br,b$ as Nr,c0 as Tr,c1 as wr,c2 as Sr,c3 as vr,c4 as Or,c5 as _r,c6 as Er,c7 as kr,c8 as Ar,c9 as Ir,ca as $r,cb as Dr,cc as Pr,cd as Lr,ce as Cr,cf as zr,cg as Vr,ch as Fr,ci as xr,cj as Br,ck as jr,cl as Rr,cm as Hr,cn as Wr,co as qr,cp as Gr,cq as Ur,cr as Kr,cs as Jr,ct as Xr,cu as Yr,cv as Zr,cw as Qr,cx as Mr,cy as en,cz as tn,cA as sn,cB as an,cC as rn,cD as nn,cE as on,cF as me,cG as un,cH as pn,cI as mn,cJ as ln,cK as cn,cL as De,cM as Vt,cN as hn,cO as dn,cP as fn,cQ as yn,cR as gn,cS as bn,cT as he,cU as Nn,cV as Tn,cW as wn,cX as Sn,cY as U,cZ as $,c_ as Ne,c$ as Ft,d0 as vn}from"./index-9Gfjyz1C.js";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const On="model",_n=".json",En=".weights.bin";function it(s){return new Promise(e=>setTimeout(e)).then(s)}class M{constructor(e){if(!x().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(M.URL_SCHEME)&&(e=e.slice(M.URL_SCHEME.length)),(e==null||e.length===0)&&(e=On),this.modelJsonFileName=e+_n,this.weightDataFileName=e+En}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const a=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=vt(e,a),n=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=n,await it(()=>o.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=t,await it(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Ke(e)}}}}M.URL_SCHEME="downloads://";class kn{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const a=new FileReader;a.onload=r=>{const n=JSON.parse(r.target.result),o=n.modelTopology;if(o==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(n.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const p=qe(n,l=>this.loadWeights(l));e(p)},a.onerror=r=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),a.readAsText(this.jsonFile)})}loadWeights(e){const t=[],a=[];for(const o of e)t.push(...o.weights),a.push(...o.paths);const r=this.checkManifestAndWeightFiles(e),n=a.map(o=>this.loadWeightsFile(o,r[o]));return Promise.all(n).then(o=>[t,Ge(o)])}loadWeightsFile(e,t){return new Promise((a,r)=>{const n=new FileReader;n.onload=o=>{const u=o.target.result;a(u)},n.onerror=o=>r(`Failed to weights data from file of path '${e}'.`),n.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],a=this.weightsFiles.map(n=>et(n.name)),r={};for(const n of e)n.paths.forEach(o=>{const u=et(o);if(t.indexOf(u)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${u}'`);if(t.push(u),a.indexOf(u)===-1)throw new Error(`Weight file with basename '${u}' is not provided.`);r[o]=this.weightsFiles[a.indexOf(u)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const An=s=>x().getBool("IS_BROWSER")&&!Array.isArray(s)&&s.startsWith(M.URL_SCHEME)?In(s.slice(M.URL_SCHEME.length)):null;Ue.registerSaveRouter(An);function In(s="model"){return new M(s)}function $n(s){return new kn(s)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ot(s,e,t,a){o(s),t=t??0,a=a??1,u(t,a);let r=0;const n=p=>(p.then(l=>{const m=t+ ++r/s.length*(a-t);return e(m),l}),p);function o(p){S(p!=null&&Array.isArray(p)&&p.length>0,()=>"promises must be a none empty array")}function u(p,l){S(p>=0&&p<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${p}`),S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),S(l>=p,()=>`startFraction must be no more than endFraction, but got startFraction ${p} and endFraction ${l}`)}return Promise.all(s.map(n))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function xt(s,e){e==null&&(e={});const t=e.fetchFunc==null?x().platform.fetch:e.fetchFunc,a=s.map(c=>t(c,e.requestInit,{isBinary:!0})),u=(e.onProgress==null?await Promise.all(a):await ot(a,e.onProgress,0,.5)).map(c=>c.arrayBuffer());return e.onProgress==null?await Promise.all(u):await ot(u,e.onProgress,.5,1)}async function Dn(s,e="",t,a){return Bt(o=>xt(o,{requestInit:a}))(s,e,t)}function Bt(s){return async(e,t="",a)=>{const r=e.map(()=>!1),n={},o=a!=null?a.map(()=>!1):[],u=[];if(e.forEach((d,g)=>{let f=0;d.weights.forEach(y=>{const N="quantization"in y?y.quantization.dtype:y.dtype,T=Qt[N]*ue(y.shape),w=()=>{r[g]=!0,n[g]==null&&(n[g]=[]),n[g].push({manifestEntry:y,groupOffset:f,sizeBytes:T})};a!=null?a.forEach((E,O)=>{E===y.name&&(w(),o[O]=!0)}):w(),u.push(y.name),f+=T})}),!o.every(d=>d)){const d=a.filter((g,f)=>!o[f]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${u.join(", ")}.`)}const p=r.reduce((d,g,f)=>(g&&d.push(f),d),[]),l=[];p.forEach(d=>{e[d].paths.forEach(g=>{const f=t+(t.endsWith("/")?"":"/")+g;l.push(f)})});const m=await s(l),c={};let h=0;return p.forEach(d=>{const g=e[d].paths.length;let f=0;for(let E=0;E<g;E++)f+=m[h+E].byteLength;const y=new ArrayBuffer(f),N=new Uint8Array(y);let T=0;for(let E=0;E<g;E++){const O=new Uint8Array(m[h+E]);N.set(O,T),T+=O.byteLength}n[d].forEach(E=>{const O=y.slice(E.groupOffset,E.groupOffset+E.sizeBytes),k=Ot(O,[E.manifestEntry]);for(const I in k)c[I]=k[I]}),h+=g}),c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn="application/octet-stream",Ln="application/json";class Je{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(S(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=x().platform.fetch,S(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&S(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const a=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=vt(e,a);t.body.append("model.json",new Blob([JSON.stringify(r)],{type:Ln}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:Pn}),"model.weights.bin");const n=await this.fetch(this.path,t);if(n.ok)return{modelArtifactsInfo:Ke(e),responses:[n]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${n.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const a=t.modelTopology,r=t.weightsManifest;if(a==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return qe(t,n=>this.loadWeights(n))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[a,r]=Cn(t),n=this.weightPathPrefix||a,o=_t(e),u=[],p=[];for(const m of e)for(const c of m.paths)this.weightUrlConverter!=null?p.push(this.weightUrlConverter(c)):u.push(n+c+r);this.weightUrlConverter&&u.push(...await Promise.all(p));const l=await xt(u,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[o,Ge(l)]}}Je.URL_SCHEME_REGEX=/^https?:\/\//;function Cn(s){const e=s.lastIndexOf("/"),t=s.lastIndexOf("?"),a=s.substring(0,e),r=t>e?s.substring(t):"";return[a+"/",r]}function Pe(s){return s.match(Je.URL_SCHEME_REGEX)!=null}const jt=(s,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(s)?t=s.every(a=>Pe(a)):t=Pe(s),t)return Xe(s,e)}return null};Ue.registerSaveRouter(jt);Ue.registerLoadRouter(jt);function Xe(s,e){return new Je(s,e)}function zn(s,e){return Xe(s,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ke{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Rt{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class Vn{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Fn(s,e,t,a){const r=arguments;return new Vn(Ht(...r))}function Ht(s,e,t,a){return arguments.length===1?s.modelTopology!=null||s.weightSpecs!=null?new ke(s):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ke({modelTopology:s})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ke({modelTopology:s,weightSpecs:e,weightData:t,trainingConfig:a}))}function xn(s){return new Rt(s)}function Bn(s){return new Rt(s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wt=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:$n,browserHTTPRequest:zn,concatenateArrayBuffers:Ge,copyModel:Mt,decodeWeights:Ot,encodeWeights:es,fromMemory:Fn,fromMemorySync:Ht,getLoadHandlers:ts,getModelArtifactsForJSON:qe,getModelArtifactsForJSONSync:ss,getModelArtifactsInfoForJSON:Ke,getSaveHandlers:as,getWeightSpecs:_t,http:Xe,isHTTPScheme:Pe,listModels:rs,loadWeights:Dn,moveModel:ns,registerLoadRouter:is,registerSaveRouter:os,removeModel:us,weightsLoaderFactory:Bt,withSaveHandler:xn,withSaveHandlerSync:Bn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(s,e,t){if(ve(s),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const a=Oe(s,t);if(a.length!==3&&a.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _e(s,e,a,t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let X;function jn(s,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(s==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,a=!1,r=!1,n=!1,o=!1,u=!1;if(s.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&s instanceof ImageData)a=!0;else if(typeof HTMLVideoElement<"u"&&s instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement)n=!0;else if(s.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&s instanceof ImageBitmap)u=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${s.constructor.name}`);if(ps(tt,A.backendName)!=null){const g={pixels:s},f={numChannels:e};return A.runKernel(tt,g,f)}const[l,m]=r?[s.videoWidth,s.videoHeight]:[s.width,s.height];let c;if(o)c=s.getContext("2d").getImageData(0,0,l,m).data;else if(a||t)c=s.data;else if(n||r||u){if(X==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")X=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else X=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});X.canvas.width=l,X.canvas.height=m,X.drawImage(s,0,0,l,m),c=X.getImageData(0,0,l,m).data}let h;if(e===4)h=new Int32Array(c);else{const g=l*m;h=new Int32Array(g*e);for(let f=0;f<g;f++)for(let y=0;y<e;++y)h[f*e+y]=c[f*4+y]}return qt(h,[m,l,e],"int32")}const Rn=v({fromPixels_:jn});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hn(s){S(Array.isArray(s),()=>"The argument passed to tf.addN() must be a list of tensors"),S(s.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${s.length}`);const e=s.map((r,n)=>b(r,`tensors${n}`,"addN")),t=e[0];e.forEach(r=>{if(r.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(r=>{if(!ge(r.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const a=e;return A.runKernel(ms,a)}const Wn=v({addN_:Hn});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qn(s,e,t,a,r,n){const o=b(s,"forgetBias","basicLSTMCell"),u=b(e,"lstmKernel","basicLSTMCell"),p=b(t,"lstmBias","basicLSTMCell"),l=b(a,"data","basicLSTMCell"),m=b(r,"c","basicLSTMCell"),c=b(n,"h","basicLSTMCell"),h=Ee([l,c],1),d=Y(h,u),g=q(d,p),f=g.shape[0],y=g.shape[1]/4,N=[f,y],T=z(g,[0,0],N),w=z(g,[0,y],N),E=z(g,[0,y*2],N),O=z(g,[0,y*3],N),k=q(W(oe(T),$e(w)),W(m,oe(q(o,E)))),I=W($e(k),oe(O));return[k,I]}const Gn=v({basicLSTMCell_:qn});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Un(s,e){const t=b(s,"s0","broadcastArgs","int32"),a=b(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(a.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${a.rank}`);const r={s0:t,s1:a};return A.runKernel(ls,r)}const Kn=v({broadcastArgs_:Un});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jn(s,e,t,a=!1){const r=b(s,"x","denseBincount"),n=b(e,"weights","denseBincount");S(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),S(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),S(t>=0,()=>`size must be non-negative, but got ${t}.`),S(n.size===r.size||n.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${n.shape}.`);const o={x:r,weights:n},u={size:t,binaryOutput:a};return A.runKernel(cs,o,u)}const Xn=v({denseBincount_:Jn});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yn(s){const t={x:b(s,"x","diag")};return A.runKernel(hs,t)}const Zn=v({diag_:Yn});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qn(s,...e){const t=e.map((r,n)=>b(r,`tensors${n}`,"einsum")),a={equation:s};return A.runKernel(ds,t,a)}const Mn=v({einsum_:Qn});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ei(s,e,t){if(t<=0)throw new Error("The number of values should be positive.");const a={start:s,stop:e,num:t};return A.runKernel(fs,{},a)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fe=2147483648;function ti(s,e,t="left"){const a=b(s,"sortedSequence","searchSorted"),r=b(e,"values","searchSorted"),n=a.shape[a.shape.length-1],o=r.shape[r.shape.length-1],u=_(a,[-1,n]),p=_(r,[-1,o]);if(u.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(u.shape[0]!==p.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(ue(p.shape)>=fe)throw new Error(`values tensor size must less than ${fe}`);if(u.shape[1]>=fe)throw new Error(`trailing dim_size must less than ${fe} for int32 output type, was ${u.shape[1]}`);const l={sortedSequence:u,values:p},m={side:t};return A.runKernel(ys,l,m)}const Ye=v({searchSorted_:ti});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function si(s,e){return Ye(s,e,"left")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ai(s,e,t,a,r=!1){const o={x:b(s,"x","maxPoolWithArgmax")},u={filterSize:e,strides:t,pad:a,includeBatchInIndex:r},p=A.runKernel(gs,o,u);return{result:p[0],indexes:p[1]}}const ri=v({maxPoolWithArgmax_:ai});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ni(s,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(s===void 0)return[];let a=b(s,"x","meshgrid",s instanceof ae?s.dtype:"float32");if(e===void 0)return[a];let r=b(e,"y","meshgrid",e instanceof ae?e.dtype:"float32");const n=ue(a.shape),o=ue(r.shape);return t==="xy"?(a=_(a,[1,-1]),r=_(r,[-1,1]),[Y(ie([o,1],a.dtype),a),Y(r,ie([1,n],r.dtype))]):(a=_(a,[-1,1]),r=_(r,[1,-1]),[Y(a,ie([1,o],a.dtype)),Y(ie([n,1],r.dtype),r)])}function ii(s,e,t,a){const r=b(e,"data","multiRNNCell"),n=st(t,"c","multiRNNCell"),o=st(a,"h","multiRNNCell");let u=r;const p=[];for(let c=0;c<s.length;c++){const h=s[c](u,n[c],o[c]);p.push(h[0]),p.push(h[1]),u=h[1]}const l=[],m=[];for(let c=0;c<p.length;c+=2)l.push(p[c]),m.push(p[c+1]);return[l,m]}const oi=v({multiRNNCell_:ii});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ui(s,e,t,a=!1){const r=b(s,"logits","multinomial"),n=r.size,o=r.rank;if(n<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${n}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);t=t||Math.random();const p={logits:o===1?_(r,[1,-1]):r},l={numSamples:e,seed:t,normalized:a},m=A.runKernel(bs,p,l);return o===1?_(m,[m.size]):m}const pi=v({multinomial_:ui});function mi(s,e){const t=b(s,"v1","outerProduct"),a=b(e,"v2","outerProduct");S(t.rank===1&&a.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${a.rank}.`);const r=_(t,[-1,1]),n=_(a,[1,-1]);return Y(r,n)}const li=v({outerProduct_:mi});function ci(s,e,t=0){return S(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),le(s,[e],t)}const hi=v({pad1d_:ci});function di(s,e,t=0){return S(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),le(s,e,t)}const fi=v({pad2d_:di});function yi(s,e,t=0){return S(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),le(s,e,t)}const gi=v({pad3d_:yi});function bi(s,e,t=0){return S(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),le(s,e,t)}const Ni=v({pad4d_:bi});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ti(s,e,t,a){const r=s.map((m,c)=>b(m,`tensors${c}`,"raggedGather","int32")),n=b(e,"paramsDenseValues","raggedGather"),o=b(t,"indices","raggedGather","int32"),u={paramsNestedSplits:r,paramsDenseValues:n,indices:o},p={outputRaggedRank:a},l=A.runKernel(Ns,u,p);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const wi=v({raggedGather_:Ti});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Si(s,e,t,a,r){const n=b(s,"shape","raggedTensorToTensor","int32"),o=b(e,"values","raggedTensorToTensor"),u=b(t,"defaultValue","raggedTensorToTensor",o.dtype),p=a.map((c,h)=>b(c,`tensors${h}`,"raggedTensorToTensor","int32")),l={shape:n,values:o,defaultValue:u,rowPartitionTensors:p},m={rowPartitionTypes:r};return A.runKernel(Ts,l,m)}const vi=v({raggedTensorToTensor_:Si});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oi(s,e,t){const a=ue(s);let r=null;if(t==null||t==="float32")r=new Float32Array(a);else if(t==="int32")r=new Int32Array(a);else if(t==="bool")r=new Uint8Array(a);else throw new Error(`Unknown data type ${t}`);for(let n=0;n<a;n++)r[n]=e();return A.makeTensor(r,s,t)}const _i=v({rand_:Oi});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ei(s,e,t=1,a="float32",r){if(t==null&&(t=1),a==null&&(a="float32"),a!=="float32"&&a!=="int32")throw new Error(`Unsupported data type ${a}`);const n=new ws(e,t,a,r),o=Et(s,a);for(let u=0;u<o.values.length;u++)o.values[u]=n.nextValue();return o.toTensor()}const ki=v({randomGamma_:Ei});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ai(s,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return kt(s,0,1,e,t)}const Ii=v({randomStandardNormal_:Ai});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $i(s){const e=b(s,"x","reverse");return S(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),ce(e,0)}const Di=v({reverse1d_:$i});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pi(s,e){const t=b(s,"x","reverse");return S(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),ce(t,e)}const Li=v({reverse2d_:Pi});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ci(s,e){const t=b(s,"x","reverse");return S(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),ce(t,e)}const zi=v({reverse3d_:Ci});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vi(s,e){const t=b(s,"x","reverse");return S(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),ce(t,e)}const Fi=v({reverse4d_:Vi});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function xi(s,e){const t=b(s,"x","setdiff1d"),a=b(e,"y","setdiff1d");S(t.dtype===a.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${a.dtype}).`),S(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),S(a.rank===1,()=>`y should be 1D tensor, but got y (${a.shape}).`);const r=await t.data(),n=await a.data(),o=new Set(n);let u=0;for(let m=0;m<r.length;m++)o.has(r[m])||u++;const p=new at([u],t.dtype),l=new at([u],"int32");for(let m=0,c=0;m<r.length;m++)o.has(r[m])||(p.values[c]=r[m],l.values[c]=m,c++);return[p.toTensor(),l.toTensor()]}const Bi=xi;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ji(s,e,t){if(ve(s),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const a=Oe(s,t);if(a.length!==4&&a.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _e(s,e,a,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ri(s,e,t){if(ve(s),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const a=Oe(s,t);if(a.length!==5&&a.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _e(s,e,a,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hi(s,e,t){if(ve(s),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const a=Oe(s,t);if(a.length!==6&&a.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(a.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||a,_e(s,e,a,t)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wi(s,e){return Ye(s,e,"right")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function qi(s){const e=b(s,"condition","whereAsync","bool"),t=await e.data(),a=Ss(e.shape,t);return s!==e&&e.dispose(),a}const Gt=qi;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Gi(s,e,t){const a=b(s,"tensor","boolMask"),r=b(e,"mask","boolMask","bool"),n=t??0,o=r.rank,u=a.shape;S(o>0,()=>"mask cannot be scalar"),At(u.slice(n,n+o),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let p=1;for(let f=n;f<n+o;f++)p*=u[f];const l=u.slice(0,n).concat([p],u.slice(n+o)),m=_(a,l),c=_(r,[-1]),h=await Gt(c),d=be(h,[1]),g=It(m,d,n);return s!==a&&a.dispose(),e!==r&&r.dispose(),d.dispose(),m.dispose(),c.dispose(),h.dispose(),g}const Ui=Gi;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ki(s,e,t,a,r=!0){const n=b(s,"v","movingAverage"),o=b(e,"x","movingAverage"),u=b(t,"decay","movingAverage");vs(n,o),S(ge(n.shape,o.shape),()=>"Shape mismatch in v and x");const p=G(1),l=se(p,u);let m=W(se(o,n),l);if(r){S(a!=null,()=>"When using zeroDebias: true, step is required.");const c=b(a,"step","movingAverage");m=Z(m,se(p,$t(u,c)))}return q(n,m)}const Ji=v({movingAverage_:Ki});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xi(s,e,t){const a=b(s,"indices","scatterND","int32"),r=b(e,"updates","scatterND");Os(r,a,t);const n={indices:a,updates:r},o={shape:t};return A.runKernel(_s,n,o)}const Yi=v({scatterND_:Xi});function Zi(s,e,t,a){if(s.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${s.dtype}.`);if(s.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${s.shape}.`);const r=s.rank>0?s.shape[0]:1,n=s.rank>1?s.shape[1]:1;if(t.length!==n)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${n}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===r))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);if(e.dtype!==a.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qi(s,e,t,a=0){const r=b(s,"sparseIndices","sparseToDense","int32"),n=b(e,"sparseValues","sparseToDense","string_or_numeric"),o=b(a,"defaultValue","sparseToDense",n.dtype);Zi(r,n,t,o);const u={sparseIndices:r,sparseValues:n,defaultValue:o},p={outputShape:t};return A.runKernel(Es,u,p)}const Mi=v({sparseToDense_:Qi});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eo(s,e){const t=b(e,"indices","gatherND","int32"),r={params:b(s,"x","gatherND","string_or_numeric"),indices:t};return A.runKernel(ks,r)}const to=v({gatherND_:eo});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function so(s,e,t=1){const a=b(s,"predictions","inTopK"),r=b(e,"targets","inTopK");S(a.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${a.rank}`),S(a.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${a.rank} and targets rank ${r.rank}`),At(a.shape.slice(0,a.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const n=a.shape[a.shape.length-1];S(t>0&&t<=n,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${n}), but got ${t}`);const o=await a.data(),u=await r.data(),[p,l]=[o.length/n,n],m=As("bool",p);for(let c=0;c<p;c++){const h=c*l,d=o.subarray(h,h+l),g=[];for(let f=0;f<d.length;f++)g.push({value:d[f],index:f});g.sort((f,y)=>y.value-f.value),m[c]=0;for(let f=0;f<t;f++)if(g[f].index===u[c]){m[c]=1;break}}return s!==a&&a.dispose(),e!==r&&r.dispose(),re(m,r.shape,"bool")}const ao=so;/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro({x:s,filter:e,strides:t,pad:a,dataFormat:r="NHWC",dilations:n=[1,1],dimRoundingMode:o,bias:u,activation:p="linear",preluActivationWeights:l,leakyreluAlpha:m}){if(Is(A.state.gradientDepth,p)===!1){let O=Dt(s,e,t,a,r,n,o);return u!=null&&(O=q(O,u)),$s(O,p,l,m)}const c=b(s,"x","depthwiseConv2d","float32"),h=b(e,"filter","depthwiseConv2d","float32");let d=c,g=!1;c.rank===3&&(g=!0,d=_(c,[1,c.shape[0],c.shape[1],c.shape[2]])),S(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),S(h.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`),S(d.shape[3]===h.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`),n==null&&(n=[1,1]),S(Ds(t,n),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${n}'`),Ps("fused depthwiseConv2d",a,o);const f=Ls(d.shape,h.shape,t,n,a,o,!0);let y;u!=null&&(y=b(u,"bias","fused conv2d"),[y]=Cs(y,c),zs(f.outShape,y.shape));let N;l!=null&&(N=b(l,"prelu weights","fused depthwiseConv2d"));const T=(O,k)=>{S(Vs(n),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${n}'`);const[I,B,C,V]=k,te=Fs(O,C,p),de=xs(B.shape,te,I,t,a,n,o),Me=Bs(B,te,I.shape,t,a,n,o);if(V!=null){const Zt=js(y,te);return[de,Me,Zt]}return[de,Me]},w={x:d,filter:h,bias:y,preluActivationWeights:N},E={strides:t,pad:a,dataFormat:r,dilations:n,dimRoundingMode:o,activation:p,leakyreluAlpha:m};return u==null?rt((k,I,B)=>{let C=A.runKernel(nt,w,E);return B([I,k,C]),g&&(C=_(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:T}})(d,h):rt((k,I,B,C)=>{let V=A.runKernel(nt,w,E);return C([I,k,V,B]),g&&(V=_(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:T}})(d,h,y)}const no=v({fusedDepthwiseConv2d_:ro});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const io=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Rs,depthwiseConv2d:no,matMul:Hs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oo={};function Ut(s){return oo[s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i(s,e,t,a,r){const n=e.inputParams[s];if(n&&n.inputIndexStart!==void 0){const u=n.inputIndexStart,p=n.inputIndexEnd===0?void 0:n.inputIndexEnd===void 0?u+1:n.inputIndexEnd;if(n.type==="tensor")return P(e.inputNames[n.inputIndexStart],t,a,r);if(n.type==="tensors")return e.inputNames.slice(u,p).map(h=>P(h,t,a,r));const l=P(e.inputNames.slice(u)[0],t,a,r),m=l.dataSync();return n.type==="number"?m[0]:Ws(l.shape,m)}const o=e.attrParams[s];return o&&o.value}function P(s,e,t,a){const[r,n]=L(s);if(a!=null){const u=a.getHashTableHandleByName(r);if(u!=null)return u}const o=t.currentContextIds.find(u=>!!e[Te(r,u)]);return o!==void 0?e[Te(r,o)][n]:void 0}function uo(s,e,t){return e[Te(s,t.currentContextId)]}function R(s,e){const[t,a,r]=L(s);return[Te(t,e&&e.currentContextId),a,r]}function Te(s,e){return e?`${s}-${e}`:s}function L(s){const e=s.split(":");if(e.length===1)return[s,0,void 0];const t=e[0],a=e.length===3?e[1]:void 0,r=Number(e[e.length-1]);return[t,r,a]}function ye(s,e,t){let a=i("pad",s,e,t);if(a==="explicit"){a=i("explicitPaddings",s,e,t);const r=[[0,0],[0,0],[0,0],[0,0]];for(let n=0;n<4;n++)r[n][0]=a[n*2],r[n][1]=a[n*2+1];return r}return a}function H(s){return s.kept?s:Pt(s)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const po=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],mo=Object.freeze(Object.defineProperty({__proto__:null,json:po},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lo=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],co=Object.freeze(Object.defineProperty({__proto__:null,json:lo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ho=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],fo=Object.freeze(Object.defineProperty({__proto__:null,json:ho},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yo=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],go=Object.freeze(Object.defineProperty({__proto__:null,json:yo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bo=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],No=Object.freeze(Object.defineProperty({__proto__:null,json:bo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const To=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],wo=Object.freeze(Object.defineProperty({__proto__:null,json:To},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const So=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],vo=Object.freeze(Object.defineProperty({__proto__:null,json:So},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oo=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],_o=Object.freeze(Object.defineProperty({__proto__:null,json:Oo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eo=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],ko=Object.freeze(Object.defineProperty({__proto__:null,json:Eo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ao=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],Io=Object.freeze(Object.defineProperty({__proto__:null,json:Ao},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $o=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Do=Object.freeze(Object.defineProperty({__proto__:null,json:$o},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Po=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],Lo=Object.freeze(Object.defineProperty({__proto__:null,json:Po},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Co=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],zo=Object.freeze(Object.defineProperty({__proto__:null,json:Co},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vo=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],Fo=Object.freeze(Object.defineProperty({__proto__:null,json:Vo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xo=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],Bo=Object.freeze(Object.defineProperty({__proto__:null,json:xo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jo=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],Ro=Object.freeze(Object.defineProperty({__proto__:null,json:jo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ho=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Wo=Object.freeze(Object.defineProperty({__proto__:null,json:Ho},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qo=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],Go=Object.freeze(Object.defineProperty({__proto__:null,json:qo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uo=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],Ko=Object.freeze(Object.defineProperty({__proto__:null,json:Uo},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ut{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[mo,co,fo,go,No,wo,vo,_o,ko,Io,Do,Lo,zo,Fo,Bo,Ro,Wo,Go,Ko],t=[].concat(...e.map(a=>a.json));this.opMappers=t.reduce((a,r)=>(a[r.tfOpName]=r,a),{})}transformGraph(e,t={}){const a=e.node,r=[],n=[],o=[],u=a.reduce((f,y)=>(f[y.name]=this.mapNode(y),y.op.startsWith("Placeholder")?r.push(f[y.name]):y.op==="Const"?n.push(f[y.name]):(y.input==null||y.input.length===0)&&o.push(f[y.name]),f),{});let p=[];const l=[];let m={},c={};t!=null&&(m=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const h=Object.keys(u);h.forEach(f=>{const y=u[f];y.inputNames.forEach((N,T)=>{const[w,,E]=R(N),O=u[w];if(O.outputs!=null){const k=O.outputs.indexOf(E);if(k!==-1){const I=`${w}:${k}`;y.inputNames[T]=I}}y.inputs.push(O),O.children.push(y)})}),Object.keys(c).length===0?h.forEach(f=>{const y=u[f];y.children.length===0&&l.push(y)}):Object.keys(c).forEach(f=>{const[y]=R(f),N=u[y];N!=null&&(N.signatureKey=c[f],l.push(N))}),Object.keys(m).length>0?Object.keys(m).forEach(f=>{const[y]=R(f),N=u[y];N&&(N.signatureKey=m[f],p.push(N))}):p=r;let d={};e.library!=null&&e.library.function!=null&&(d=e.library.function.reduce((f,y)=>(f[y.signature.name]=this.mapFunction(y),f),{}));const g={nodes:u,inputs:p,outputs:l,weights:n,placeholders:r,signature:t,functions:d};return o.length>0&&(g.initNodes=o),g}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,a)=>(t[e[a].name]=a,t),{})}mapNode(e){const t=Ut(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const a={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(r=>r.startsWith("^")?r.slice(1):r),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(a.inputParams=t.inputs.reduce((r,n)=>(r[n.name]={type:n.type,inputIndexStart:n.start,inputIndexEnd:n.end},r),{})),t.attrs!=null&&(a.attrParams=t.attrs.reduce((r,n)=>{const o=n.type;let u;switch(n.type){case"string":u=Le(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Le(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":u=je(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=je(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":u=ze(e.attr,n.tfName,n.defaultValue||0),u===void 0&&n.tfDeprecatedName&&(u=ze(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":u=Be(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Be(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":u=Ce(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Ce(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":u=He(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=He(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":u=xe(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=xe(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":u=Re(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Re(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":u=Ve(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Ve(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":u=Fe(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=Fe(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":u=pt(e.attr,n.tfName,n.defaultValue),u===void 0&&n.tfDeprecatedName&&(u=pt(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return r[n.name]={value:u,type:o},r},{})),a}mapFunction(e){const t=e.nodeDef,a=[],r=[];let n={};t!=null&&(n=t.reduce((c,h)=>(c[h.name]=this.mapNode(h),h.op==="Const"&&r.push(c[h.name]),c),{}));const o=[],u=[];e.signature.inputArg.forEach(c=>{const[h]=R(c.name),d={name:h,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Ze(c.type),type:"dtype"}},children:[]};d.signatureKey=c.name,o.push(d),n[h]=d}),Object.keys(n).forEach(c=>{const h=n[c];h.inputNames.forEach((d,g)=>{const[f,,y]=R(d),N=n[f];if(N.outputs!=null){const T=N.outputs.indexOf(y);if(T!==-1){const w=`${f}:${T}`;h.inputNames[g]=w}}h.inputs.push(N),N.children.push(h)})});const l=e.ret;e.signature.outputArg.forEach(c=>{const[h,d]=R(l[c.name]),g=n[h];g!=null&&(g.defaultOutput=d,u.push(g))});const m=this.mapArgsToSignature(e);return{nodes:n,inputs:o,outputs:u,weights:r,placeholders:a,signature:m}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,a)=>(t[a.name]=this.mapArgToTensorInfo(a),t),{}),outputs:e.signature.outputArg.reduce((t,a)=>(t[a.name]=this.mapArgToTensorInfo(a,e.ret),t),{})}}mapArgToTensorInfo(e,t){let a=e.name;return t!=null&&(a=t[a]),{name:a,dtype:e.type}}}function Jo(s){const e=x().global;if(typeof e.atob<"u")return e.atob(s);if(typeof Buffer<"u")return new Buffer(s,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Kt(s,e){const t=Array.isArray(s)?String.fromCharCode.apply(null,s):Jo(s);return e?t:t.toLowerCase()}function Le(s,e,t,a=!1){const r=s[e];return r!=null?Kt(r.s,a):t}function Ce(s,e,t){const a=s[e];return a?a.b:t}function ze(s,e,t){const a=s[e]||{},r=a.i!=null?a.i:a.f!=null?a.f:t;return typeof r=="number"?r:parseInt(r,10)}function Ze(s){switch(typeof s=="string"&&(s=j[s]),s){case j.DT_FLOAT:case j.DT_HALF:return"float32";case j.DT_INT32:case j.DT_INT64:case j.DT_INT8:case j.DT_UINT8:return"int32";case j.DT_BOOL:return"bool";case j.DT_DOUBLE:return"float32";case j.DT_STRING:return"string";default:return null}}function pt(s,e,t){const a=s[e];return a&&a.func?a.func.name:t}function Ve(s,e,t){const a=s[e];return a&&a.type?Ze(a.type):t}function Fe(s,e,t){const a=s[e];return a&&a.list&&a.list.type?a.list.type.map(r=>Ze(r)):t}function Jt(s){if(!s.unknownRank)return s.dim!=null?s.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function xe(s,e,t){const a=s[e];return a&&a.shape?Jt(a.shape):t}function Be(s,e,t){const a=s[e];return a?((a.list.f&&a.list.f.length?a.list.f:a.list.i)||[]).map(r=>typeof r=="number"?r:parseInt(r,10)):t}function je(s,e,t,a=!1){const r=s[e];return r&&r.list&&r.list.s?r.list.s.map(n=>Kt(n,a)):t}function Re(s,e,t){const a=s[e];return a&&a.list&&a.list.shape?a.list.shape.map(r=>Jt(r)):t}function He(s,e,t){const a=s[e];return a&&a.list&&a.list.b?a.list.b:t}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xo{constructor(e,t,a){this.node=e,this.tensorMap=t,this.context=a,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(r=>this.getInput(r)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((r,n)=>(r[n]=this.getAttr(n),r),{}))}getInput(e){return P(e,this.tensorMap,this.context)}getAttr(e,t){const a=this.node.rawAttrs[e];if(a.tensor!=null)return P(e,this.tensorMap,this.context);if(a.i!=null||a.f!=null)return ze(this.node.rawAttrs,e,t);if(a.s!=null)return Le(this.node.rawAttrs,e,t);if(a.b!=null)return Ce(this.node.rawAttrs,e,t);if(a.shape!=null)return xe(this.node.rawAttrs,e,t);if(a.type!=null)return Ve(this.node.rawAttrs,e,t);if(a.list!=null){if(a.list.i!=null||a.list.f!=null)return Be(this.node.rawAttrs,e,t);if(a.list.s!=null)return je(this.node.rawAttrs,e,t);if(a.list.shape!=null)return Re(this.node.rawAttrs,e,t);if(a.list.b!=null)return He(this.node.rawAttrs,e,t);if(a.list.type!=null)return Fe(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:qs,abs:Gs,acos:Us,acosh:Ks,add:q,addN:Wn,all:Js,any:Xs,argMax:Ys,argMin:Zs,asin:Qs,asinh:Ms,atan:ea,atan2:ta,atanh:sa,avgPool:aa,avgPool3d:ra,basicLSTMCell:Gn,batchNorm:na,batchNorm2d:ia,batchNorm3d:oa,batchNorm4d:ua,batchToSpaceND:pa,bincount:ma,booleanMaskAsync:Ui,broadcastArgs:Kn,broadcastTo:la,buffer:Et,cast:Lt,ceil:ca,clipByValue:ha,clone:Pt,complex:da,concat:Ee,concat1d:fa,concat2d:Ct,concat3d:ya,concat4d:ga,conv1d:ba,conv2d:Na,conv2dTranspose:Ta,conv3d:wa,conv3dTranspose:Sa,cos:va,cosh:Oa,cosineWindow:_a,cumprod:Ea,cumsum:ka,denseBincount:Xn,depthToSpace:Aa,depthwiseConv2d:Dt,diag:Zn,dilation2d:Ia,div:Z,divNoNan:$a,dot:Da,dropout:Pa,einsum:Mn,elu:La,enclosingPowerOfTwo:Ca,equal:za,erf:Va,euclideanNorm:Fa,exp:xa,expandDims:zt,expm1:Ba,eye:ja,fft:Ra,fill:Ha,floor:Wa,floorDiv:qa,fused:io,gather:It,gatherND:to,greater:Ga,greaterEqual:Ua,ifft:Ka,imag:Ja,image:pe,inTopKAsync:ao,irfft:Xa,isFinite:Ya,isInf:Za,isNaN:Qa,leakyRelu:Ma,less:er,lessEqual:tr,linalg:sr,linspace:ei,localResponseNormalization:ar,log:rr,log1p:nr,logSigmoid:ir,logSoftmax:or,logSumExp:ur,logicalAnd:pr,logicalNot:mr,logicalOr:lr,logicalXor:cr,losses:hr,lowerBound:si,matMul:Y,max:dr,maxPool:fr,maxPool3d:yr,maxPoolWithArgmax:ri,maximum:gr,mean:br,meshgrid:ni,min:Nr,minimum:Tr,mirrorPad:wr,mod:Sr,moments:vr,movingAverage:Ji,mul:W,multiRNNCell:oi,multinomial:pi,neg:Or,norm:_r,notEqual:Er,oneHot:kr,ones:ie,onesLike:Ar,op:v,outerProduct:li,pad:le,pad1d:hi,pad2d:fi,pad3d:gi,pad4d:Ni,pool:Ir,pow:$t,prelu:$r,print:Dr,prod:Pr,raggedGather:wi,raggedTensorToTensor:vi,rand:_i,randomGamma:ki,randomNormal:kt,randomStandardNormal:Ii,randomUniform:Lr,range:Cr,real:zr,reciprocal:Vr,relu:Fr,relu6:xr,reshape:_,reverse:ce,reverse1d:Di,reverse2d:Li,reverse3d:zi,reverse4d:Fi,rfft:Br,round:jr,rsqrt:Rr,scalar:G,scatterND:Yi,searchSorted:Ye,selu:Hr,separableConv2d:Wr,setdiff1dAsync:Bi,sigmoid:oe,sign:qr,signal:Gr,sin:Ur,sinh:Kr,slice:z,slice1d:Jr,slice2d:Xr,slice3d:Yr,slice4d:Zr,softmax:Qr,softplus:Mr,spaceToBatchND:en,sparse:tn,sparseToDense:Mi,spectral:sn,split:an,sqrt:rn,square:nn,squaredDifference:on,squeeze:be,stack:me,step:un,stridedSlice:pn,string:mn,sub:se,sum:ln,tan:cn,tanh:$e,tensor:re,tensor1d:De,tensor2d:Vt,tensor3d:qt,tensor4d:ji,tensor5d:Ri,tensor6d:Hi,tile:hn,topk:dn,transpose:fn,truncatedNormal:yn,unique:gn,unsortedSegmentSum:bn,unstack:he,upperBound:Wi,variable:Nn,where:Tn,whereAsync:Gt,zeros:wn,zerosLike:Sn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yo=(s,e,t,a=D)=>{switch(s.op){case"BiasAdd":case"AddV2":case"Add":return[a.add(i("a",s,e,t),i("b",s,e,t))];case"AddN":return[a.addN(i("tensors",s,e,t))];case"FloorMod":case"Mod":return[a.mod(i("a",s,e,t),i("b",s,e,t))];case"Mul":return[a.mul(i("a",s,e,t),i("b",s,e,t))];case"RealDiv":case"Div":return[a.div(i("a",s,e,t),i("b",s,e,t))];case"DivNoNan":return[a.divNoNan(i("a",s,e,t),i("b",s,e,t))];case"FloorDiv":return[a.floorDiv(i("a",s,e,t),i("b",s,e,t))];case"Sub":return[a.sub(i("a",s,e,t),i("b",s,e,t))];case"Minimum":return[a.minimum(i("a",s,e,t),i("b",s,e,t))];case"Maximum":return[a.maximum(i("a",s,e,t),i("b",s,e,t))];case"Pow":return[a.pow(i("a",s,e,t),i("b",s,e,t))];case"SquaredDifference":return[a.squaredDifference(i("a",s,e,t),i("b",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zo=(s,e,t,a=D)=>{switch(s.op){case"Abs":case"ComplexAbs":return[a.abs(i("x",s,e,t))];case"Acos":return[a.acos(i("x",s,e,t))];case"Acosh":return[a.acosh(i("x",s,e,t))];case"Asin":return[a.asin(i("x",s,e,t))];case"Asinh":return[a.asinh(i("x",s,e,t))];case"Atan":return[a.atan(i("x",s,e,t))];case"Atan2":return[a.atan2(i("x",s,e,t),i("y",s,e,t))];case"Atanh":return[a.atanh(i("x",s,e,t))];case"Ceil":return[a.ceil(i("x",s,e,t))];case"Complex":return[a.complex(i("real",s,e,t),i("imag",s,e,t))];case"Cos":return[a.cos(i("x",s,e,t))];case"Cosh":return[a.cosh(i("x",s,e,t))];case"Elu":return[a.elu(i("x",s,e,t))];case"Erf":return[a.erf(i("x",s,e,t))];case"Exp":return[a.exp(i("x",s,e,t))];case"Expm1":return[a.expm1(i("x",s,e,t))];case"Floor":return[a.floor(i("x",s,e,t))];case"Log":return[a.log(i("x",s,e,t))];case"Log1p":return[a.log1p(i("x",s,e,t))];case"Imag":return[a.imag(i("x",s,e,t))];case"Neg":return[a.neg(i("x",s,e,t))];case"Reciprocal":return[a.reciprocal(i("x",s,e,t))];case"Real":return[a.real(i("x",s,e,t))];case"Relu":return[a.relu(i("x",s,e,t))];case"Round":return[a.round(i("x",s,e,t))];case"Selu":return[a.selu(i("x",s,e,t))];case"Sigmoid":return[a.sigmoid(i("x",s,e,t))];case"Sin":return[a.sin(i("x",s,e,t))];case"Sign":return[a.sign(i("x",s,e,t))];case"Sinh":return[a.sinh(i("x",s,e,t))];case"Softplus":return[a.softplus(i("x",s,e,t))];case"Sqrt":return[a.sqrt(i("x",s,e,t))];case"Square":return[a.square(i("x",s,e,t))];case"Tanh":return[a.tanh(i("x",s,e,t))];case"Tan":return[a.tan(i("x",s,e,t))];case"ClipByValue":return[a.clipByValue(i("x",s,e,t),i("clipValueMin",s,e,t),i("clipValueMax",s,e,t))];case"Relu6":return[a.relu6(i("x",s,e,t))];case"Rsqrt":return[a.rsqrt(P(s.inputNames[0],e,t))];case"Prod":return[a.prod(i("x",s,e,t),i("axes",s,e,t))];case"LeakyRelu":return[a.leakyRelu(i("x",s,e,t),i("alpha",s,e,t))];case"Prelu":return[a.prelu(i("x",s,e,t),i("alpha",s,e,t))];case"IsNan":return[a.isNaN(P(s.inputNames[0],e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F(s,e,t=""){if(!(typeof s=="number"||typeof e=="number")){S(s.length===e.length,()=>t+` Shapes ${s} and ${e} must match`);for(let a=0;a<s.length;a++){const r=s[a],n=e[a];S(r<0||n<0||r===n,()=>t+` Shapes ${s} and ${e} must match`)}}}function mt(s){return!(typeof s=="number"||s.some(e=>e<0))}function ne(s,e,t){let a=We(s,t);const r=!mt(a);if(r&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);if(r&&e.forEach(n=>{a=We(n.shape,a)}),!mt(a))throw new Error(`Non-fully-defined elementShape: ${a}`);return a}function We(s,e){if(typeof s=="number")return e;if(typeof e=="number")return s;if(s.length!==e.length)throw new Error(`Incompatible ranks during merge: ${s} vs. ${e}`);const t=[];for(let a=0;a<s.length;++a){const r=s[a],n=e[a];if(r>=0&&n>=0&&r!==n)throw new Error(`Incompatible shape during merge: ${s} vs. ${e}`);t[a]=r>=0?r:n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qo{constructor(e,t,a,r,n,o,u){this.name=e,this.dtype=t,this.maxSize=a,this.elementShape=r,this.identicalElementShapes=n,this.dynamicSize=o,this.clearAfterRead=u,this.tensors=[],this.closed_=!1,this.idTensor=G(0),U(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const a=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),F(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),a.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(a.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);a.tensor=t,U(t),a.written=!0,this.tensors[e]=a}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((a,r)=>this.write(a,t[r]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let r=0;r<this.size();r++)e.push(r)}if(e.length===0)return re([],[0].concat(this.elementShape));const a=this.readMany(e);return F(this.elementShape,a[0].shape,"TensorArray shape mismatch: "),me(a,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return re([],[0].concat(this.elementShape));const t=[];for(let r=0;r<this.size();r++)t.push(r);const a=this.readMany(t);return F(this.elementShape,a[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`),Ee(a,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const a=Math.max(...e);if(!this.dynamicSize&&a>=this.maxSize)throw new Error(`Max index must be < array size (${a}  vs. ${this.maxSize})`);this.writeMany(e,he(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let a=0;const r=e.map(p=>(a+=p,a));if(a!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const n=a===0?0:t.size/a,o=[];$(()=>{t=_(t,[1,a,n]);for(let p=0;p<e.length;++p){const m=[0,p===0?0:r[p-1],0],c=[1,e[p],n];o[p]=_(z(t,m,c),this.elementShape)}return o});const u=[];for(let p=0;p<e.length;p++)u[p]=p;this.writeMany(u,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ee{constructor(e,t,a,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=a,e!=null&&e.forEach(n=>{if(a!==n.dtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${n.dtype}`);F(t,n.shape,"TensorList shape mismatch: "),U(n)}),this.idTensor=G(0),this.maxNumElements=r,U(this.idTensor)}get id(){return this.idTensor.id}copy(){return new ee([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,a=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(a!==-1&&this.tensors.length!==a)throw new Error(`Operation expected a list with ${a} elements but got a list with ${this.tensors.length} elements.`);F(e,this.elementShape,"TensorList shape mismatch: ");const r=ne(this.elementShape,this.tensors,e);return $(()=>{const n=this.tensors.map(o=>_(o,r));return me(n,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const a=ne(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,F(r.shape,e,"TensorList shape mismatch: "),_(r,a)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(F(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");U(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new ee([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let a=0;a<Math.min(this.tensors.length,e);++a)t.tensors[a]=this.tensors[a];return t}getItem(e,t,a){if(a!==this.elementDtype)throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);F(this.tensors[e].shape,t,"TensorList shape mismatch: ");const r=ne(this.elementShape,this.tensors,t);return _(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);F(this.elementShape,t.shape,"TensorList shape mismatch: "),U(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,a){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);F(this.elementShape,a,"TensorList shape mismatch: "),e=e.slice(0,this.size());const r=ne(this.elementShape,this.tensors,a);return e.length===0?re([],[0].concat(r)):$(()=>{const n=e.map(o=>_(this.tensors[o],r));return me(n,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);F(this.elementShape,t,"TensorList shape mismatch: ");const a=ne(this.elementShape,this.tensors,t);return this.size()===0?re([],[0].concat(a)):$(()=>{const r=this.tensors.map(n=>_(n,a));return Ee(r,0)})}}function Mo(s,e,t){const a=s.dtype;if(s.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${s.shape}`);if(s.dtype!==t)throw new Error(`Invalid data types; op elements ${s.dtype}, but list elements ${t}`);const r=s.shape.slice(1);F(r,e,"TensorList shape mismatch: ");const n=he(s);return new ee(n,e,a)}function eu(s,e,t,a){return new ee([],s,e,a)}function tu(s,e,t,a){if(e.length!==s.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${s.shape[0]}`);const r=Math.max(...e);if(a!=null&&a!==-1&&r>=a)throw new Error(`Max index must be < array size (${r}  vs. ${a})`);const n=new ee([],t,s.dtype,a),o=he(s,0);return e.forEach((u,p)=>{n.setItem(u,o[p])}),n}function su(s,e,t){let a=0;const r=e.map(m=>(a+=m,a));if(a!==s.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${s.shape}`);const n=s.shape.slice(1),o=We(n,t),u=a===0?0:s.size/a,p=$(()=>{const m=[];s=_(s,[1,a,u]);for(let c=0;c<e.length;++c){const d=[0,c===0?0:r[c-1],0],g=[1,e[c],u];m[c]=_(z(s,d,g),o)}return s.dispose(),m}),l=new ee([],t,s.dtype,e.length);for(let m=0;m<p.length;m++)l.setItem(m,p[m]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const au=async(s,e,t)=>{switch(s.op){case"If":case"StatelessIf":{const a=i("thenBranch",s,e,t),r=i("elseBranch",s,e,t),n=i("cond",s,e,t),o=i("args",s,e,t);return(await n.data())[0]?t.functionMap[a].executeFunctionAsync(o,t.tensorArrayMap,t.tensorListMap):t.functionMap[r].executeFunctionAsync(o,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const a=i("body",s,e,t),r=i("cond",s,e,t),n=i("args",s,e,t),o=await t.functionMap[r].executeFunctionAsync(n,t.tensorArrayMap,t.tensorListMap),u=n.map(m=>m.id);let p=await o[0].data();o.forEach(m=>{!m.kept&&u.indexOf(m.id)===-1&&m.dispose()});let l=n;for(;p[0];){const m=l;l=await t.functionMap[a].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);const c=l.map(d=>d.id);m.forEach(d=>{!d.kept&&u.indexOf(d.id)===-1&&c.indexOf(d.id)===-1&&d.dispose()});const h=await t.functionMap[r].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);p=await h[0].data(),h.forEach(d=>{!d.kept&&u.indexOf(d.id)===-1&&c.indexOf(d.id)===-1&&d.dispose()})}return l}case"LoopCond":{const a=i("pred",s,e,t);return[H(a)]}case"Switch":{const a=i("pred",s,e,t);let r=i("data",s,e,t);return r.kept||(r=H(r)),(await a.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const a=s.inputNames.find(r=>P(r,e,t)!==void 0);if(a){const r=P(a,e,t);return[H(r)]}return}case"Enter":{const a=i("frameName",s,e,t),r=i("tensor",s,e,t);return t.enterFrame(a),[H(r)]}case"Exit":{const a=i("tensor",s,e,t);return t.exitFrame(),[H(a)]}case"NextIteration":{const a=i("tensor",s,e,t);return t.nextIteration(),[H(a)]}case"TensorArrayV3":{const a=i("size",s,e,t),r=i("dtype",s,e,t),n=i("elementShape",s,e,t),o=i("dynamicSize",s,e,t),u=i("clearAfterRead",s,e,t),p=i("identicalElementShapes",s,e,t),l=i("name",s,e,t),m=new Qo(l,r,a,n,p,o,u);return t.addTensorArray(m),[m.idTensor,G(1)]}case"TensorArrayWriteV3":{const a=i("tensorArrayId",s,e,t),r=i("index",s,e,t),n=i("tensor",s,e,t),o=t.getTensorArray(a.id);return o.write(r,n),[o.idTensor]}case"TensorArrayReadV3":{const a=i("tensorArrayId",s,e,t),r=i("index",s,e,t);return[t.getTensorArray(a.id).read(r)]}case"TensorArrayGatherV3":{const a=i("tensorArrayId",s,e,t),r=i("indices",s,e,t),n=i("dtype",s,e,t);return[t.getTensorArray(a.id).gather(r,n)]}case"TensorArrayScatterV3":{const a=i("tensorArrayId",s,e,t),r=i("indices",s,e,t),n=i("tensor",s,e,t),o=t.getTensorArray(a.id);return o.scatter(r,n),[o.idTensor]}case"TensorArrayConcatV3":{const a=i("tensorArrayId",s,e,t),r=t.getTensorArray(a.id),n=i("dtype",s,e,t);return[r.concat(n)]}case"TensorArraySplitV3":{const a=i("tensorArrayId",s,e,t),r=i("tensor",s,e,t),n=i("lengths",s,e,t),o=t.getTensorArray(a.id);return o.split(n,r),[o.idTensor]}case"TensorArraySizeV3":{const a=i("tensorArrayId",s,e,t),r=t.getTensorArray(a.id);return[G(r.size(),"int32")]}case"TensorArrayCloseV3":{const a=i("tensorArrayId",s,e,t),r=t.getTensorArray(a.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const a=i("tensorListId",s,e,t),r=i("index",s,e,t),n=i("tensor",s,e,t),o=t.getTensorList(a.id);return o.setItem(r,n),[o.idTensor]}case"TensorListGetItem":{const a=i("tensorListId",s,e,t),r=i("index",s,e,t),n=i("elementShape",s,e,t),o=i("elementDType",s,e,t);return[t.getTensorList(a.id).getItem(r,n,o)]}case"TensorListScatterV2":case"TensorListScatter":{const a=i("indices",s,e,t),r=i("tensor",s,e,t),n=i("elementShape",s,e,t),o=i("numElements",s,e,t),u=tu(r,a,n,o);return t.addTensorList(u),[u.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const a=i("elementShape",s,e,t),r=i("elementDType",s,e,t);let n;s.op==="TensorListReserve"?n="numElements":n="maxNumElements";const o=i(n,s,e,t),u=s.op==="TensorListReserve"?-1:o,p=eu(a,r,o,u);return t.addTensorList(p),[p.idTensor]}case"TensorListGather":{const a=i("tensorListId",s,e,t),r=i("indices",s,e,t),n=i("elementShape",s,e,t),o=i("elementDType",s,e,t);return[t.getTensorList(a.id).gather(r,o,n)]}case"TensorListStack":{const a=i("tensorListId",s,e,t),r=i("elementShape",s,e,t),n=i("elementDType",s,e,t),o=i("numElements",s,e,t);return[t.getTensorList(a.id).stack(r,n,o)]}case"TensorListFromTensor":{const a=i("tensor",s,e,t),r=i("elementShape",s,e,t),n=i("elementDType",s,e,t),o=Mo(a,r,n);return t.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const a=i("tensorListId",s,e,t),r=t.getTensorList(a.id),n=i("dtype",s,e,t),o=i("elementShape",s,e,t);return[r.concat(n,o)]}case"TensorListPushBack":{const a=i("tensorListId",s,e,t),r=i("tensor",s,e,t),n=t.getTensorList(a.id);return n.pushBack(r),[n.idTensor]}case"TensorListPopBack":{const a=i("tensorListId",s,e,t),r=i("elementShape",s,e,t),n=i("elementDType",s,e,t);return[t.getTensorList(a.id).popBack(r,n)]}case"TensorListSplit":{const a=i("tensor",s,e,t),r=i("elementShape",s,e,t),n=i("lengths",s,e,t),o=su(a,n,r);return t.addTensorList(o),[o.idTensor]}case"TensorListLength":{const a=i("tensorListId",s,e,t),r=t.getTensorList(a.id);return[G(r.size(),"int32")]}case"TensorListResize":{const a=i("tensorListId",s,e,t),r=i("size",s,e,t),o=t.getTensorList(a.id).resize(r);return t.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lt(s,e,t){const[a,r]=i("fusedOps",s,e,t),n=a==="biasadd",o=!n,u=r==="prelu",p=a==="fusedbatchnorm",l=i("numArgs",s,e,t);if(n){if(u&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&n&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(p)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const m=i("strides",s,e,t),c=ye(s,e,t),h=i("dataFormat",s,e,t).toUpperCase(),d=i("dilations",s,e,t);let[g,f]=i("args",s,e,t);o&&(f=g,g=void 0);const y=i("leakyreluAlpha",s,e,t);return{stride:m,pad:c,dataFormat:h,dilations:d,biasArg:g,preluArg:f,activationFunc:r,leakyreluAlpha:y}}const ru=(s,e,t,a=D)=>{switch(s.op){case"Conv1D":{const r=i("stride",s,e,t),n=i("pad",s,e,t),o=i("dataFormat",s,e,t).toUpperCase(),u=i("dilation",s,e,t);return[a.conv1d(i("x",s,e,t),i("filter",s,e,t),r,n,o,u)]}case"Conv2D":{const r=i("strides",s,e,t),n=ye(s,e,t),o=i("dataFormat",s,e,t).toUpperCase(),u=i("dilations",s,e,t);return[a.conv2d(i("x",s,e,t),i("filter",s,e,t),[r[1],r[2]],n,o,[u[1],u[2]])]}case"_FusedConv2D":{const{stride:r,pad:n,dataFormat:o,dilations:u,biasArg:p,preluArg:l,activationFunc:m,leakyreluAlpha:c}=lt(s,e,t);return[a.fused.conv2d({x:i("x",s,e,t),filter:i("filter",s,e,t),strides:[r[1],r[2]],pad:n,dataFormat:o,dilations:[u[1],u[2]],bias:p,activation:m,preluActivationWeights:l,leakyreluAlpha:c})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:n,dataFormat:o,dilations:u,biasArg:p,preluArg:l,activationFunc:m,leakyreluAlpha:c}=lt(s,e,t);return[a.fused.depthwiseConv2d({x:i("x",s,e,t),filter:i("filter",s,e,t),strides:[r[1],r[2]],pad:n,dataFormat:o,dilations:[u[1],u[2]],bias:p,activation:m,preluActivationWeights:l,leakyreluAlpha:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=i("outputShape",s,e,t),n=i("strides",s,e,t),o=ye(s,e,t);return[a.conv2dTranspose(i("x",s,e,t),i("filter",s,e,t),r,[n[1],n[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=i("strides",s,e,t),n=ye(s,e,t),o=i("dilations",s,e,t),u=i("dataFormat",s,e,t).toUpperCase();return[a.depthwiseConv2d(i("input",s,e,t),i("filter",s,e,t),[r[1],r[2]],n,u,[o[1],o[2]])]}case"Conv3D":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("dataFormat",s,e,t).toUpperCase(),u=i("dilations",s,e,t);return[a.conv3d(i("x",s,e,t),i("filter",s,e,t),[r[1],r[2],r[3]],n,o,[u[1],u[2],u[3]])]}case"AvgPool":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("kernelSize",s,e,t);return[a.avgPool(i("x",s,e,t),[o[1],o[2]],[r[1],r[2]],n)]}case"MaxPool":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("kernelSize",s,e,t);return[a.maxPool(i("x",s,e,t),[o[1],o[2]],[r[1],r[2]],n)]}case"MaxPoolWithArgmax":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("kernelSize",s,e,t),u=i("includeBatchInIndex",s,e,t),{result:p,indexes:l}=a.maxPoolWithArgmax(i("x",s,e,t),[o[1],o[2]],[r[1],r[2]],n,u);return[p,l]}case"AvgPool3D":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("kernelSize",s,e,t);return[a.avgPool3d(i("x",s,e,t),[o[1],o[2],o[3]],[r[1],r[2],r[3]],n)]}case"MaxPool3D":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("kernelSize",s,e,t);return[a.maxPool3d(i("x",s,e,t),[o[1],o[2],o[3]],[r[1],r[2],r[3]],n)]}case"Dilation2D":{const r=i("strides",s,e,t),n=i("pad",s,e,t),o=i("dilations",s,e,t),u=r[1],p=r[2],l=o[1],m=o[2];return[a.dilation2d(i("x",s,e,t),i("filter",s,e,t),[u,p],n,[l,m],"NHWC")]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nu=(s,e,t,a=D)=>{switch(s.op){case"Fill":{const r=i("shape",s,e,t),n=i("dtype",s,e,t),o=i("value",s,e,t);return[a.fill(r,o,n)]}case"LinSpace":{const r=i("start",s,e,t),n=i("stop",s,e,t),o=i("num",s,e,t);return[a.linspace(r,n,o)]}case"Multinomial":{const r=i("logits",s,e,t),n=i("numSamples",s,e,t),o=i("seed",s,e,t);return[a.multinomial(r,n,o)]}case"OneHot":{const r=i("indices",s,e,t),n=i("depth",s,e,t),o=i("onValue",s,e,t),u=i("offValue",s,e,t),p=i("dtype",s,e,t);return[a.oneHot(r,n,o,u,p)]}case"Ones":return[a.ones(i("shape",s,e,t),i("dtype",s,e,t))];case"OnesLike":return[a.onesLike(i("x",s,e,t))];case"RandomStandardNormal":return[a.randomStandardNormal(i("shape",s,e,t),i("dtype",s,e,t),i("seed",s,e,t))];case"RandomUniform":return[a.randomUniform(i("shape",s,e,t),i("minval",s,e,t),i("maxval",s,e,t),i("dtype",s,e,t))];case"Range":{const r=i("start",s,e,t),n=i("stop",s,e,t),o=i("step",s,e,t);return[a.range(r,n,o,i("dtype",s,e,t))]}case"TruncatedNormal":{const r=i("shape",s,e,t),n=i("mean",s,e,t),o=i("stdDev",s,e,t),u=i("seed",s,e,t);return[a.truncatedNormal(r,n,o,i("dtype",s,e,t),u)]}case"Zeros":return[a.zeros(i("shape",s,e,t),i("dtype",s,e,t))];case"ZerosLike":return[a.zerosLike(i("x",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ae(s,e,t){const a=i("boxes",s,e,t),r=i("scores",s,e,t),n=i("maxOutputSize",s,e,t),o=i("iouThreshold",s,e,t),u=i("scoreThreshold",s,e,t),p=i("softNmsSigma",s,e,t);return{boxes:a,scores:r,maxOutputSize:n,iouThreshold:o,scoreThreshold:u,softNmsSigma:p}}const iu=async(s,e,t,a,r=D)=>{switch(s.op){case"NonMaxSuppressionV5":{const{boxes:n,scores:o,maxOutputSize:u,iouThreshold:p,scoreThreshold:l,softNmsSigma:m}=Ae(s,e,t),c=await r.image.nonMaxSuppressionWithScoreAsync(n,o,u,p,l,m);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:n,scores:o,maxOutputSize:u,iouThreshold:p,scoreThreshold:l}=Ae(s,e,t),m=i("padToMaxOutputSize",s,e,t),c=await r.image.nonMaxSuppressionPaddedAsync(n,o,u,p,l,m);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:n,scores:o,maxOutputSize:u,iouThreshold:p,scoreThreshold:l}=Ae(s,e,t);return[await r.image.nonMaxSuppressionAsync(n,o,u,p,l)]}case"Where":{const n=r.cast(i("condition",s,e,t),"bool"),o=[await r.whereAsync(n)];return n.dispose(),o}case"ListDiff":return r.setdiff1dAsync(i("x",s,e,t),i("y",s,e,t));default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ou=(s,e,t,a=D)=>{switch(s.op){case"LowerBound":{const r=i("sortedSequence",s,e,t),n=i("values",s,e,t);return[a.lowerBound(r,n)]}case"TopKV2":{const r=i("x",s,e,t),n=i("k",s,e,t),o=i("sorted",s,e,t),u=a.topk(r,n,o);return[u.values,u.indices]}case"UpperBound":{const r=i("sortedSequence",s,e,t),n=i("values",s,e,t);return[a.upperBound(r,n)]}case"Unique":{const r=i("x",s,e,t),n=a.unique(r);return[n.values,n.indices]}case"UniqueV2":{const r=i("x",s,e,t),n=i("axis",s,e,t),o=a.unique(r,n);return[o.values,o.indices]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uu=(s,e,t,a=D)=>{switch(s.op){case"Const":return e[s.name];case"PlaceholderWithDefault":const r=i("default",s,e,t);return[P(s.name,e,t)||r];case"Placeholder":return[P(s.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const m=i("x",s,e,t);return[H(m)]}case"IdentityN":return i("x",s,e,t).map(m=>H(m));case"Snapshot":const n=i("x",s,e,t);return[H(n)];case"Shape":return[a.tensor1d(i("x",s,e,t).shape,"int32")];case"ShapeN":return i("x",s,e,t).map(m=>a.tensor1d(m.shape));case"Size":return[a.scalar(i("x",s,e,t).size,"int32")];case"Rank":return[a.scalar(i("x",s,e,t).rank,"int32")];case"NoOp":return[a.scalar(1)];case"Print":const o=i("x",s,e,t),u=i("data",s,e,t),p=i("message",s,e,t),l=i("summarize",s,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(p);for(let m=0;m<u.length;m++)console.log(Array.prototype.slice.call(u[m].dataSync()).slice(0,l));return[o];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pu{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=G(0),this.tensorMap=new Map,U(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return G(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const a=await e.data();return this.tensorMap.forEach(r=>r.dispose()),this.tensorMap.clear(),$(()=>{const r=he(t),n=a.length,o=r.length;S(n===o,()=>`The number of elements doesn't match, keys has ${n} elements, the values has ${o} elements.`);for(let u=0;u<n;u++){const p=a[u],l=r[u];U(l),this.tensorMap.set(p,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const a=await e.data();return $(()=>{const r=[];for(let n=0;n<a.length;n++){const o=a[n],u=this.findWithDefault(o,t);r.push(u)}return me(r)})}findWithDefault(e,t){const a=this.tensorMap.get(e);return a??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mu=async(s,e,t,a)=>{switch(s.op){case"HashTable":case"HashTableV2":{const r=i("keyDType",s,e,t),n=i("valueDType",s,e,t),o=new pu(r,n);return a.addHashTable(s.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const r=i("tableHandle",s,e,t,a),n=i("keys",s,e,t),o=i("values",s,e,t);return[await a.getHashTableById(r.id).import(n,o)]}case"LookupTableFind":case"LookupTableFindV2":{const r=i("tableHandle",s,e,t,a),n=i("keys",s,e,t),o=i("defaultValue",s,e,t);return[await a.getHashTableById(r.id).find(n,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=i("tableHandle",s,e,t,a);return[a.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lu=(s,e,t,a=D)=>{switch(s.op){case"ResizeBilinear":{const r=i("images",s,e,t),n=i("size",s,e,t),o=i("alignCorners",s,e,t),u=i("halfPixelCenters",s,e,t);return[a.image.resizeBilinear(r,[n[0],n[1]],o,u)]}case"ResizeNearestNeighbor":{const r=i("images",s,e,t),n=i("size",s,e,t),o=i("alignCorners",s,e,t),u=i("halfPixelCenters",s,e,t);return[a.image.resizeNearestNeighbor(r,[n[0],n[1]],o,u)]}case"CropAndResize":{const r=i("image",s,e,t),n=i("boxes",s,e,t),o=i("boxInd",s,e,t),u=i("cropSize",s,e,t),p=i("method",s,e,t),l=i("extrapolationValue",s,e,t);return[a.image.cropAndResize(r,n,o,u,p,l)]}case"ImageProjectiveTransformV3":{const r=i("images",s,e,t),n=i("transforms",s,e,t),o=i("outputShape",s,e,t),u=i("fillValue",s,e,t),p=i("interpolation",s,e,t),l=i("fillMode",s,e,t);return[a.image.transform(r,n,p.toLowerCase(),l.toLowerCase(),u,o)]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cu=(s,e,t,a=D)=>{switch(s.op){case"Equal":return[a.equal(i("a",s,e,t),i("b",s,e,t))];case"NotEqual":return[a.notEqual(i("a",s,e,t),i("b",s,e,t))];case"Greater":return[a.greater(i("a",s,e,t),i("b",s,e,t))];case"GreaterEqual":return[a.greaterEqual(i("a",s,e,t),i("b",s,e,t))];case"Less":return[a.less(i("a",s,e,t),i("b",s,e,t))];case"LessEqual":return[a.lessEqual(i("a",s,e,t),i("b",s,e,t))];case"LogicalAnd":return[a.logicalAnd(i("a",s,e,t),i("b",s,e,t))];case"LogicalNot":return[a.logicalNot(i("a",s,e,t))];case"LogicalOr":return[a.logicalOr(i("a",s,e,t),i("b",s,e,t))];case"Select":case"SelectV2":return[a.where(i("condition",s,e,t),i("a",s,e,t),i("b",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hu=(s,e,t,a=D)=>{switch(s.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[a.matMul(i("a",s,e,t),i("b",s,e,t),i("transposeA",s,e,t),i("transposeB",s,e,t))];case"Einsum":return[a.einsum(i("equation",s,e,t),...i("tensors",s,e,t))];case"Transpose":return[a.transpose(i("x",s,e,t),i("perm",s,e,t))];case"_FusedMatMul":const[r,n]=i("fusedOps",s,e,t),o=r==="biasadd",u=n==="prelu",p=i("numArgs",s,e,t),l=i("leakyreluAlpha",s,e,t);if(o){if(u&&p!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&p!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[m,c]=i("args",s,e,t);return[a.fused.matMul({a:i("a",s,e,t),b:i("b",s,e,t),transposeA:i("transposeA",s,e,t),transposeB:i("transposeB",s,e,t),bias:m,activation:n,preluActivationWeights:c,leakyreluAlpha:l})];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const du=(s,e,t,a=D)=>{switch(s.op){case"EuclideanNorm":return[a.euclideanNorm(i("x",s,e,t),i("axis",s,e,t),i("keepDims",s,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[a.batchNorm(i("x",s,e,t),i("mean",s,e,t),i("variance",s,e,t),i("offset",s,e,t),i("scale",s,e,t),i("epsilon",s,e,t))];case"FusedBatchNormV3":return[a.batchNorm(i("x",s,e,t),i("mean",s,e,t),i("variance",s,e,t),i("offset",s,e,t),i("scale",s,e,t),i("epsilon",s,e,t))];case"LRN":return[a.localResponseNormalization(i("x",s,e,t),i("radius",s,e,t),i("bias",s,e,t),i("alpha",s,e,t),i("beta",s,e,t))];case"Softmax":return[a.softmax(i("x",s,e,t))];case"LogSoftmax":return[a.logSoftmax(i("x",s,e,t))];case"SparseToDense":return[a.sparseToDense(i("sparseIndices",s,e,t),i("outputShape",s,e,t),i("sparseValues",s,e,t),i("defaultValue",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fu=(s,e,t,a=D)=>{switch(s.op){case"Max":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.max(i("x",s,e,t),u,p)]}case"Mean":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.mean(i("x",s,e,t),u,p)]}case"Min":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.min(i("x",s,e,t),u,p)]}case"Sum":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.sum(i("x",s,e,t),u,p)]}case"All":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.all(i("x",s,e,t),u,p)]}case"Any":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.any(i("x",s,e,t),u,p)]}case"ArgMax":{const u=i("axis",s,e,t);return[a.argMax(i("x",s,e,t),u)]}case"ArgMin":{const u=i("axis",s,e,t);return[a.argMin(i("x",s,e,t),u)]}case"Prod":{const u=i("axis",s,e,t),p=i("keepDims",s,e,t);return[a.prod(i("x",s,e,t),u,p)]}case"Cumprod":{const u=i("axis",s,e,t),p=i("exclusive",s,e,t),l=i("reverse",s,e,t);return[a.cumprod(i("x",s,e,t),u,p,l)]}case"Cumsum":{const u=i("axis",s,e,t),p=i("exclusive",s,e,t),l=i("reverse",s,e,t);return[a.cumsum(i("x",s,e,t),u,p,l)]}case"Bincount":const r=i("x",s,e,t),n=i("weights",s,e,t),o=i("size",s,e,t);return[a.bincount(r,n,o)];case"DenseBincount":{const u=i("x",s,e,t),p=i("weights",s,e,t),l=i("size",s,e,t),m=i("binaryOutput",s,e,t);return[a.denseBincount(u,p,l,m)]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=(s,e,t,a=D)=>{switch(s.op){case"ConcatV2":case"Concat":{const r=i("n",s,e,t),n=i("axis",s,e,t);let o=i("tensors",s,e,t);return o=o.slice(0,r),[a.concat(o,n)]}case"Gather":{const r=i("x",s,e,t),n=i("indices",s,e,t);return[a.gather(r,a.cast(n,"int32"),0)]}case"GatherV2":{const r=i("axis",s,e,t),n=i("batchDims",s,e,t),o=i("x",s,e,t),u=i("indices",s,e,t);return[a.gather(o,a.cast(u,"int32"),r,n)]}case"Reverse":{const r=i("dims",s,e,t),n=[];for(let u=0;u<r.length;u++)r[u]&&n.push(u);const o=i("x",s,e,t);return[a.reverse(o,n)]}case"ReverseV2":{const r=i("axis",s,e,t),n=i("x",s,e,t);return[a.reverse(n,r)]}case"Slice":{const r=i("begin",s,e,t),n=i("size",s,e,t);return[a.slice(i("x",s,e,t),r,n)]}case"StridedSlice":{const r=i("begin",s,e,t),n=i("end",s,e,t),o=i("strides",s,e,t),u=i("beginMask",s,e,t),p=i("endMask",s,e,t),l=i("ellipsisMask",s,e,t),m=i("newAxisMask",s,e,t),c=i("shrinkAxisMask",s,e,t),h=i("x",s,e,t);return[a.stridedSlice(h,r,n,o,u,p,l,m,c)]}case"Pack":return $(()=>{const r=i("axis",s,e,t),n=i("tensors",s,e,t),o=n[0].shape,u=a.squeeze(n[0]).shape,p=n.map(l=>{const m=ge(l.shape,o);if(!m&&!ge(a.squeeze(l).shape,u))throw new Error("the input tensors shape does not match");return m?l:a.reshape(l,o)});return[a.stack(p,r)]});case"Unpack":{const r=i("axis",s,e,t),n=i("tensor",s,e,t);return a.unstack(n,r)}case"Tile":{const r=i("reps",s,e,t);return[a.tile(i("x",s,e,t),r)]}case"Split":case"SplitV":{const r=i("axis",s,e,t),n=i("numOrSizeSplits",s,e,t),o=i("x",s,e,t);return a.split(o,n,r)}case"ScatterNd":{const r=i("indices",s,e,t),n=i("values",s,e,t),o=i("shape",s,e,t);return[a.scatterND(r,n,o)]}case"GatherNd":{const r=i("x",s,e,t),n=i("indices",s,e,t);return[a.gatherND(r,n)]}case"SparseToDense":{const r=i("sparseIndices",s,e,t),n=i("outputShape",s,e,t),o=i("sparseValues",s,e,t),u=i("defaultValue",s,e,t);return[a.sparseToDense(r,o,n,o.dtype===u.dtype?u:a.cast(u,o.dtype))]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu=(s,e,t,a=D)=>{switch(s.op){case"SparseFillEmptyRows":{const{outputIndices:r,outputValues:n,emptyRowIndicator:o,reverseIndexMap:u}=a.sparse.sparseFillEmptyRows(i("indices",s,e,t),i("values",s,e,t),i("denseShape",s,e,t),i("defaultValue",s,e,t));return[r,n,o,u]}case"SparseReshape":{const{outputIndices:r,outputShape:n}=a.sparse.sparseReshape(i("inputIndices",s,e,t),i("inputShape",s,e,t),i("newShape",s,e,t));return[r,n]}case"SparseSegmentMean":return[a.sparse.sparseSegmentMean(i("data",s,e,t),i("indices",s,e,t),i("segmentIds",s,e,t))];case"SparseSegmentSum":return[a.sparse.sparseSegmentSum(i("data",s,e,t),i("indices",s,e,t),i("segmentIds",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu=(s,e,t,a=D)=>{switch(s.op){case"FFT":return[a.fft(i("x",s,e,t))];case"IFFT":return[a.ifft(i("x",s,e,t))];case"RFFT":return[a.rfft(i("x",s,e,t))];case"IRFFT":return[a.irfft(i("x",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nu=(s,e,t,a=D)=>{switch(s.op){case"StringNGrams":{const{nGrams:r,nGramsSplits:n}=a.string.stringNGrams(i("data",s,e,t),i("dataSplits",s,e,t),i("separator",s,e,t),i("nGramWidths",s,e,t),i("leftPad",s,e,t),i("rightPad",s,e,t),i("padWidth",s,e,t),i("preserveShortSequences",s,e,t));return[r,n]}case"StringSplit":{const{indices:r,values:n,shape:o}=a.string.stringSplit(i("input",s,e,t),i("delimiter",s,e,t),i("skipEmpty",s,e,t));return[r,n,o]}case"StringToHashBucketFast":return[a.string.stringToHashBucketFast(i("input",s,e,t),i("numBuckets",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tu=(s,e,t,a=D)=>{switch(s.op){case"Cast":return[a.cast(i("x",s,e,t),i("dtype",s,e,t))];case"ExpandDims":{const r=i("axis",s,e,t);return[a.expandDims(i("x",s,e,t),r)]}case"Squeeze":{const r=i("axis",s,e,t);return[a.squeeze(i("x",s,e,t),r)]}case"Reshape":return[a.reshape(i("x",s,e,t),i("shape",s,e,t))];case"MirrorPad":return[a.mirrorPad(i("x",s,e,t),i("padding",s,e,t),i("mode",s,e,t))];case"PadV2":case"Pad":return[a.pad(i("x",s,e,t),i("padding",s,e,t),i("constantValue",s,e,t))];case"SpaceToBatchND":{const r=i("blockShape",s,e,t),n=i("paddings",s,e,t);return[a.spaceToBatchND(i("x",s,e,t),r,n)]}case"BatchToSpaceND":{const r=i("blockShape",s,e,t),n=i("crops",s,e,t);return[a.batchToSpaceND(i("x",s,e,t),r,n)]}case"DepthToSpace":{const r=i("blockSize",s,e,t),n=i("dataFormat",s,e,t).toUpperCase();return[a.depthToSpace(i("x",s,e,t),r,n)]}case"BroadcastTo":return[a.broadcastTo(i("x",s,e,t),i("shape",s,e,t))];case"BroadcastArgs":return[a.broadcastArgs(i("s0",s,e,t),i("s1",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(s,e,t,a,r=$){const n=((o,u,p)=>{switch(o.category){case"arithmetic":return r(()=>Yo(o,u,p));case"basic_math":return r(()=>Zo(o,u,p));case"control":return au(o,u,p);case"convolution":return r(()=>ru(o,u,p));case"creation":return r(()=>nu(o,u,p));case"dynamic":return iu(o,u,p);case"evaluation":return r(()=>ou(o,u,p));case"image":return r(()=>lu(o,u,p));case"graph":return r(()=>uu(o,u,p));case"logical":return r(()=>cu(o,u,p));case"matrices":return r(()=>hu(o,u,p));case"normalization":return r(()=>du(o,u,p));case"reduction":return r(()=>fu(o,u,p));case"slice_join":return r(()=>yu(o,u,p));case"sparse":return r(()=>gu(o,u,p));case"spectral":return r(()=>bu(o,u,p));case"string":return r(()=>Nu(o,u,p));case"transformation":return r(()=>Tu(o,u,p));case"hash_table":return mu(o,u,p,a);case"custom":const l=Ut(o.op);if(l&&l.customExecutor)return l.customExecutor(new Xo(o,u,p));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(s,e,t);return Ne(n)?n.then(o=>[].concat(o)):[].concat(n)}class ht{constructor(e={},t={},a={},r={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=a,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const a=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(a))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dt(s,e,t,a){const r=new Set,n=[];let o=null,u=null;const p=new Set,l=Object.keys(s).map(h=>L(h)[0]);let m=[];a!=null&&(m=a.map(h=>L(h.name)[0]));const c=[...e];for(;c.length>0;){const h=c.pop();if((Xt(h)||_u(h)||Eu(h))&&o==null&&(o=h,u=o.children.map(d=>d.name).filter(d=>r.has(d))),r.add(h.name),t[h.name]==null&&l.indexOf(h.name)===-1&&m.indexOf(h.name)===-1){if(h.inputs.length===0){n.push(h.name);continue}h.inputs.forEach(d=>{p.has(d.name)||(p.add(d.name),c.push(d))})}}return{inputs:s,outputs:e,usedNodes:r,missingInputs:n,dynamicNode:o,syncInputs:u}}function wu(s,e,t){const{usedNodes:a,inputs:r}=t,n=[],o=Object.keys(r).map(m=>L(m)[0]).map(m=>s.nodes[m]),u=s.initNodes;o.forEach(m=>{a.has(m.name)&&n.push(m)}),s.weights.forEach(m=>{a.has(m.name)&&n.push(m)}),u!=null&&u.forEach(m=>{a.has(m.name)&&n.push(m)});const p=new Set,l=[];for(;n.length>0;){const m=n.pop();p.add(m.name),e[m.name]||l.push(m),m.children.forEach(c=>{!p.has(c.name)&&a.has(c.name)&&c.inputs.every(h=>p.has(h.name))&&n.push(c)})}return l}const Su=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],vu=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Ou=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Xt(s){return Su.indexOf(s.op)>=0}function _u(s){return vu.indexOf(s.op)>=0}function Eu(s){return Ou.indexOf(s.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class we{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(a=>{this._functionExecutorMap[a]=new we(e.functions[a],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(a=>e[a].map(r=>r.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){const a=e.map(n=>n.name).sort(),r=t.map(n=>n.name).sort();return a.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(e,t){const a=dt(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:n,syncInputs:o}=a;if(n!=null)throw new Error(`This execution contains the node '${n.name}', which has the dynamic op '${n.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(r.length>0){const u=t.map(l=>l.name),p=Object.keys(e);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${p}]. Missing the following inputs: [${r}]`)}return wu(this.graph,this.weightMap,a)}execute(e,t){e=this.mapInputs(e);const a=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const r=a.map(c=>this.graph.nodes[L(c)[0]]),n=t.map(c=>L(c)[0]);let o=n.map(c=>this.graph.nodes[c]);this.resetIntermediateTensors(),o.length===0&&(o=this._outputs);const u=this.getCompilationKey(r,o);let p=this.compiledMap.get(u);p==null&&(p=this.compile(e,o),this.compiledMap.set(u,p));const l={},m={};return $(()=>{const c=new ht(this.weightMap,l,m,this.functionExecutorMap),h=Object.assign({},this.weightMap);Object.keys(e).forEach(f=>{const[y,N]=L(f),T=[];T[N]=e[f],h[y]=T});const d=this.getFrozenTensorIds(h),g={};for(let f=0;f<p.length;f++){const y=p[f];if(!h[y.name]){const N=ct(y,h,c,this._resourceManager);if(Ne(N))throw new Error(`The execution of the op '${y.op}' returned a promise. Please use model.executeAsync() instead.`);h[y.name]=N,this.checkTensorForDisposal(y.name,y,h,c,d,n,g)}}return this.parent==null&&c.dispose(d),t.map(f=>P(f,h,c))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(a=>e[a]).map(a=>a.map(r=>r.id)));return new Set(t)}checkTensorForDisposal(e,t,a,r,n,o,u){t.category==="control"||o.indexOf(e)!==-1||(a[e].forEach(p=>{p!=null&&(u[p.id]=(u[p.id]||0)+t.children.length)}),t.inputs.forEach(p=>{if(p.category!=="control"){const l=uo(p.name,a,r);l!=null&&l.forEach(m=>{if(m&&!m.kept&&!n.has(m.id)){const c=u[m.id];if(c===1){if(!this.keepTensorForDebug)m.dispose();else{const[h,d]=R(t.name,r);this.intermediateTensors[h]?this.intermediateTensors[h][d]=m:(this.intermediateTensors[h]=[],this.intermediateTensors[h][d]=m)}delete u[m.id]}else c!=null&&u[m.id]--}})}}))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(e=>this.intermediateTensors[e].forEach(t=>t.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(e=>{this.tensorsMap[e].forEach(a=>{a&&!a.kept&&!a.isDisposed&&!this.keepIds.has(a.id)&&a.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach(t=>t.dispose()),delete this.intermediateTensors[e]}async _executeAsync(e,t,a=!1,r={},n={}){a||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=x().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(m){console.warn(m.message)}this.resetIntermediateTensors();const o=new ht(this.weightMap,r,n,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,o,t,a);const u=t.map(m=>P(m,this.tensorsMap,o)),p=u.map(m=>m.id),l=Object.keys(e).map(m=>e[m].id);return this.keepIds=new Set([...p,...l,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&o.dispose(this.keepIds),u}async executeFunctionAsync(e,t,a){const r=e.reduce((n,o,u)=>(n[this.inputs[u].name]=o,n),{});return this._executeAsync(r,this.outputNodes,!0,t,a)}async executeWithControlFlow(e,t,a,r){const n=Object.keys(e),o=n.map(w=>this.graph.nodes[L(w)[0]]),u=a.map(w=>L(w)[0]);let p=u.map(w=>this.graph.nodes[w]);p.length===0&&(p=this._outputs);const{usedNodes:l,missingInputs:m,dynamicNode:c,syncInputs:h}=dt(e,p,this.weightMap,this._initNodes),d=[...o,...this.graph.weights,...this._initNodes||[]].map(w=>({node:w,contexts:t.currentContext})),g=Object.assign({},this.weightMap);Object.keys(e).forEach(w=>{const[E,O]=L(w),k=[];k[O]=e[w],g[E]=k});const f={},y=this.getFrozenTensorIds(g),N={};for(;d.length>0;){const w=this.processStack(o,d,t,g,N,y,u,f,l);await Promise.all(w)}c==null&&!r&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const T=p.filter(w=>!Xt(w)&&!P(w.name,g,t)).map(w=>w.name);if(T.length>0){let w="";throw c!=null&&(w=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`),new Error(`Cannot compute the outputs [${T}] from the provided inputs [${n}]. Consider providing the following inputs: [${m}]. ${w}`)}return g}processStack(e,t,a,r,n,o,u,p,l){const m=[];for(;t.length>0;){const c=t.pop();a.currentContext=c.contexts;let h="";if(c.node.op==="Enter"&&i("isConstant",c.node,r,a)&&([h]=R(c.node.name,a)),r[c.node.name]==null){const d=ct(c.node,r,a,this._resourceManager);h||([h]=R(c.node.name,a));const g=a.currentContext;Ne(d)?m.push(d.then(f=>(r[h]=f,a.currentContext=g,this.checkTensorForDisposal(h,c.node,r,a,o,u,p),this.processChildNodes(c.node,t,a,r,n,l),f))):(r[h]=d,this.checkTensorForDisposal(h,c.node,r,a,o,u,p),this.processChildNodes(c.node,t,a,r,n,l))}else this.processChildNodes(c.node,t,a,r,n,l)}return m}processChildNodes(e,t,a,r,n,o){e.children.forEach(u=>{const[p]=R(u.name,a);n[p]||!o.has(u.name)||(u.op==="Merge"?u.inputNames.some(l=>!!P(l,r,a))&&(n[p]=!0,t.push({contexts:a.currentContext,node:u})):u.inputNames.every(l=>!!P(l,r,a))&&(n[p]=!0,t.push({contexts:a.currentContext,node:u})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const a=e[t],[r]=L(t),n=this.graph.nodes[r];if(n.attrParams.shape&&n.attrParams.shape.value){const o=n.attrParams.shape.value,u=o.length===a.shape.length&&a.shape.every((p,l)=>o[l]===-1||o[l]===p);S(u,()=>`The shape of dict['${n.name}'] provided in model.execute(dict) must be [${o}], but was [${a.shape}]`)}n.attrParams.dtype&&n.attrParams.dtype.value&&S(a.dtype===n.attrParams.dtype.value,()=>`The dtype of dict['${n.name}'] provided in model.execute(dict) must be ${n.attrParams.dtype.value}, but was ${a.dtype}`)})}mapInputs(e){const t={};for(const a in e)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[a]!=null){const r=this._signature.inputs[a];t[r.name]=e[a]}else t[a]=e[a];return t}checkInputs(e){const t=Object.keys(e).filter(a=>{const[r]=L(a);return this.graph.nodes[r]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[t]!=null?this._signature.outputs[t].name:t,{})}checkOutputs(e){e.forEach(t=>{const[a]=L(t);if(!this.graph.nodes[a])throw new Error(`The output '${t}' is not found in the graph`)})}}class ku{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Au="?tfjs-format=file",Iu="model.json";class $u{constructor(e,t={},a=Wt){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=a,t==null&&(this.loadOptions={}),this.resourceManager=new ku}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return Ne(e)?e.then(t=>this.loadSync(t)):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let a=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const n=this.artifacts.userDefinedMetadata;n.signature!=null&&(a=n.signature),n.structuredOutputKeys!=null&&(this.structuredOutputKeys=n.structuredOutputKeys)}this.signature=a,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const r=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new we(ut.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const n=ut.Instance.transformGraph(e.modelInitializer);this.initializer=new we(n),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if(typeof e=="string"){const a=this.io.getSaveHandlers(e);if(a.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(a.length>1)throw new Error(`Found more than one (${a.length}) save handlers for URL '${e}'`);e=a[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){const a=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){const r=a instanceof ae?[a]:a,n={};return r.forEach((o,u)=>n[this.structuredOutputKeys[u]]=o),n}return a}normalizeInputs(e){if(!(e instanceof ae)&&!Array.isArray(e))return e;if(e=Array.isArray(e)?e:[e],e.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce((t,a,r)=>(t[a]=e[r],t),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const a=this.executor.execute(e,t);return a.length>1?a:a[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const a=await this.executor.executeAsync(e,t);return a.length>1?a:a[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,a)=>(t[a]=[e[a]],t),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Yt(s,e={},t=Wt){if(s==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof s=="string"&&(s=Du(s));const a=new $u(s,e,t);return await a.load(),a}function Du(s){return s.endsWith("/")||(s=s+"/"),`${s}${Iu}${Au}`}/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */function K(s,e,t,a){return new(t||(t=Promise))(function(r,n){function o(l){try{p(a.next(l))}catch(m){n(m)}}function u(l){try{p(a.throw(l))}catch(m){n(m)}}function p(l){var m;l.done?r(l.value):(m=l.value,m instanceof t?m:new t(function(c){c(m)})).then(o,u)}p((a=a.apply(s,[])).next())})}function J(s,e){var t,a,r,n,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function u(p){return function(l){return function(m){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,a&&(r=2&m[0]?a.return:m[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,m[1])).done)return r;switch(a=0,r&&(m=[2&m[0],r.value]),m[0]){case 0:case 1:r=m;break;case 4:return o.label++,{value:m[1],done:!1};case 5:o.label++,a=m[1],m=[0];continue;case 7:m=o.ops.pop(),o.trys.pop();continue;default:if(r=o.trys,!((r=r.length>0&&r[r.length-1])||m[0]!==6&&m[0]!==2)){o=0;continue}if(m[0]===3&&(!r||m[1]>r[0]&&m[1]<r[3])){o.label=m[1];break}if(m[0]===6&&o.label<r[1]){o.label=r[1],r=m;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(m);break}r[2]&&o.ops.pop(),o.trys.pop();continue}m=e.call(s,o)}catch(c){m=[6,c],a=0}finally{t=r=0}if(5&m[0])throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}([p,l])}}}function Qe(s){return[Math.abs(s.endPoint[0]-s.startPoint[0]),Math.abs(s.endPoint[1]-s.startPoint[1])]}function Se(s){return[s.startPoint[0]+(s.endPoint[0]-s.startPoint[0])/2,s.startPoint[1]+(s.endPoint[1]-s.startPoint[1])/2]}function ft(s,e){e===void 0&&(e=1.5);var t=Se(s),a=Qe(s),r=[e*a[0]/2,e*a[1]/2];return{startPoint:[t[0]-r[0],t[1]-r[1]],endPoint:[t[0]+r[0],t[1]+r[1]],palmLandmarks:s.palmLandmarks}}function yt(s){var e=Se(s),t=Qe(s),a=Math.max.apply(Math,t)/2;return{startPoint:[e[0]-a,e[1]-a],endPoint:[e[0]+a,e[1]+a],palmLandmarks:s.palmLandmarks}}function gt(s,e){var t=[s.endPoint[0]-s.startPoint[0],s.endPoint[1]-s.startPoint[1]],a=[t[0]*e[0],t[1]*e[1]];return{startPoint:[s.startPoint[0]+a[0],s.startPoint[1]+a[1]],endPoint:[s.endPoint[0]+a[0],s.endPoint[1]+a[1]],palmLandmarks:s.palmLandmarks}}var Pu=function(){function s(e,t,a,r,n,o){this.model=e,this.width=t,this.height=a,this.iouThreshold=n,this.scoreThreshold=o,this.anchors=r.map(function(u){return[u.x_center,u.y_center]}),this.anchorsTensor=Vt(this.anchors),this.inputSizeTensor=De([t,a]),this.doubleInputSizeTensor=De([2*t,2*a])}return s.prototype.normalizeBoxes=function(e){var t=this;return $(function(){var a=z(e,[0,0],[-1,2]),r=z(e,[0,2],[-1,2]),n=q(Z(a,t.inputSizeTensor),t.anchorsTensor),o=Z(r,t.doubleInputSizeTensor),u=W(se(n,o),t.inputSizeTensor),p=W(q(n,o),t.inputSizeTensor);return Ct([u,p],1)})},s.prototype.normalizeLandmarks=function(e,t){var a=this;return $(function(){var r=q(Z(_(e,[-1,7,2]),a.inputSizeTensor),a.anchors[t]);return W(r,a.inputSizeTensor)})},s.prototype.getBoundingBoxes=function(e){return K(this,void 0,void 0,function(){var t,a,r,n,o,u,p,l,m,c,h,d,g,f,y,N=this;return J(this,function(T){switch(T.label){case 0:return t=$(function(){return W(se(e,.5),2)}),Ft()==="webgl"?(r=x().get("WEBGL_PACK_DEPTHWISECONV"),x().set("WEBGL_PACK_DEPTHWISECONV",!0),a=this.model.predict(t),x().set("WEBGL_PACK_DEPTHWISECONV",r)):a=this.model.predict(t),n=be(a),o=$(function(){return be(oe(z(n,[0,0],[-1,1])))}),u=z(n,[0,1],[-1,4]),p=this.normalizeBoxes(u),l=console.warn,console.warn=function(){},m=pe.nonMaxSuppression(p,o,1,this.iouThreshold,this.scoreThreshold),console.warn=l,[4,m.array()];case 1:return c=T.sent(),h=[t,a,m,n,p,u,o],c.length===0?(h.forEach(function(w){return w.dispose()}),[2,null]):(d=c[0],g=z(p,[d,0],[1,-1]),f=z(n,[d,5],[1,14]),y=$(function(){return _(N.normalizeLandmarks(f,d),[-1,2])}),h.push(f),h.forEach(function(w){return w.dispose()}),[2,{boxes:g,palmLandmarks:y}])}})})},s.prototype.estimateHandBounds=function(e){return K(this,void 0,void 0,function(){var t,a,r,n,o,u,p,l,m=this;return J(this,function(c){switch(c.label){case 0:return t=e.shape[1],a=e.shape[2],r=$(function(){return Z(pe.resizeBilinear(e,[m.width,m.height]),255)}),[4,this.getBoundingBoxes(r)];case 1:return(n=c.sent())===null?(r.dispose(),[2,null]):(o=n.boxes.arraySync(),u=o[0].slice(0,2),p=o[0].slice(2,4),l=n.palmLandmarks.arraySync(),r.dispose(),n.boxes.dispose(),n.palmLandmarks.dispose(),[2,(h={startPoint:u,endPoint:p,palmLandmarks:l},d=[a/this.width,t/this.height],{startPoint:[h.startPoint[0]*d[0],h.startPoint[1]*d[1]],endPoint:[h.endPoint[0]*d[0],h.endPoint[1]*d[1]],palmLandmarks:h.palmLandmarks.map(function(g){return[g[0]*d[0],g[1]*d[1]]})})])}var h,d})})},s}(),Ie={thumb:[1,2,3,4],indexFinger:[5,6,7,8],middleFinger:[9,10,11,12],ringFinger:[13,14,15,16],pinky:[17,18,19,20],palmBase:[0]};function Lu(s,e){var t,a=Math.PI/2-Math.atan2(-(e[1]-s[1]),e[0]-s[0]);return(t=a)-2*Math.PI*Math.floor((t+Math.PI)/(2*Math.PI))}var bt=function(s,e){return[[1,0,s],[0,1,e],[0,0,1]]};function Q(s,e){for(var t=0,a=0;a<s.length;a++)t+=s[a]*e[a];return t}function Cu(s,e){for(var t=[],a=0;a<s.length;a++)t.push(s[a][e]);return t}function Nt(s,e){for(var t=[],a=s.length,r=0;r<a;r++){t.push([]);for(var n=0;n<a;n++)t[r].push(Q(s[r],Cu(e,n)))}return t}function Tt(s,e){var t=Math.cos(s),a=Math.sin(s),r=[[t,-a,0],[a,t,0],[0,0,1]],n=Nt(bt(e[0],e[1]),r);return Nt(n,bt(-e[0],-e[1]))}function wt(s,e){return[Q(s,e[0]),Q(s,e[1])]}var zu=[0,-.4],Vu=[0,-.1],St=[0,5,9,13,17,1,2],Fu=function(){function s(e,t,a,r,n,o){this.boundingBoxDetector=e,this.meshDetector=t,this.meshWidth=a,this.meshHeight=r,this.maxContinuousChecks=n,this.detectionConfidence=o,this.regionsOfInterest=[],this.runsWithoutHandDetector=0,this.maxHandsNumber=1}return s.prototype.getBoxForPalmLandmarks=function(e,t){var a=e.map(function(r){return wt(r.concat([1]),t)});return ft(yt(gt(this.calculateLandmarksBoundingBox(a),zu)),3)},s.prototype.getBoxForHandLandmarks=function(e){for(var t=ft(yt(gt(this.calculateLandmarksBoundingBox(e),Vu)),1.65),a=[],r=0;r<St.length;r++)a.push(e[St[r]].slice(0,2));return t.palmLandmarks=a,t},s.prototype.transformRawCoords=function(e,t,a,r){var n,o,u,p,l=this,m=Qe(t),c=[m[0]/this.meshWidth,m[1]/this.meshHeight],h=e.map(function(T){return[c[0]*(T[0]-l.meshWidth/2),c[1]*(T[1]-l.meshHeight/2),T[2]]}),d=Tt(a,[0,0]),g=h.map(function(T){return wt(T,d).concat([T[2]])}),f=(o=[[(n=r)[0][0],n[1][0]],[n[0][1],n[1][1]]],u=[n[0][2],n[1][2]],p=[-Q(o[0],u),-Q(o[1],u)],[o[0].concat(p[0]),o[1].concat(p[1]),[0,0,1]]),y=Se(t).concat([1]),N=[Q(y,f[0]),Q(y,f[1])];return g.map(function(T){return[T[0]+N[0],T[1]+N[1],T[2]]})},s.prototype.estimateHand=function(e){return K(this,void 0,void 0,function(){var t,a,r,n,o,u,p,l,m,c,h,d,g,f,y,N,T,w,E,O;return J(this,function(k){switch(k.label){case 0:return(t=this.shouldUpdateRegionsOfInterest())!==!0?[3,2]:[4,this.boundingBoxDetector.estimateHandBounds(e)];case 1:return(a=k.sent())===null?(e.dispose(),this.regionsOfInterest=[],[2,null]):(this.updateRegionsOfInterest(a,!0),this.runsWithoutHandDetector=0,[3,3]);case 2:this.runsWithoutHandDetector++,k.label=3;case 3:return r=this.regionsOfInterest[0],n=Lu(r.palmLandmarks[0],r.palmLandmarks[2]),o=Se(r),u=[o[0]/e.shape[2],o[1]/e.shape[1]],p=pe.rotateWithOffset(e,n,0,u),l=Tt(-n,o),m=t===!0?this.getBoxForPalmLandmarks(r.palmLandmarks,l):r,c=function(I,B,C){var V=B.shape[1],te=B.shape[2],de=[[I.startPoint[1]/V,I.startPoint[0]/te,I.endPoint[1]/V,I.endPoint[0]/te]];return pe.cropAndResize(B,de,[0],C)}(m,p,[this.meshWidth,this.meshHeight]),h=Z(c,255),c.dispose(),p.dispose(),Ft()==="webgl"?(g=x().get("WEBGL_PACK_DEPTHWISECONV"),x().set("WEBGL_PACK_DEPTHWISECONV",!0),d=this.meshDetector.predict(h),x().set("WEBGL_PACK_DEPTHWISECONV",g)):d=this.meshDetector.predict(h),f=d[0],y=d[1],h.dispose(),N=f.dataSync()[0],f.dispose(),N<this.detectionConfidence?(y.dispose(),this.regionsOfInterest=[],[2,null]):(T=_(y,[-1,3]),w=T.arraySync(),y.dispose(),T.dispose(),E=this.transformRawCoords(w,m,n,l),O=this.getBoxForHandLandmarks(E),this.updateRegionsOfInterest(O,!1),[2,{landmarks:E,handInViewConfidence:N,boundingBox:{topLeft:O.startPoint,bottomRight:O.endPoint}}])}})})},s.prototype.calculateLandmarksBoundingBox=function(e){var t=e.map(function(r){return r[0]}),a=e.map(function(r){return r[1]});return{startPoint:[Math.min.apply(Math,t),Math.min.apply(Math,a)],endPoint:[Math.max.apply(Math,t),Math.max.apply(Math,a)]}},s.prototype.updateRegionsOfInterest=function(e,t){if(t)this.regionsOfInterest=[e];else{var a=this.regionsOfInterest[0],r=0;if(a!=null&&a.startPoint!=null){var n=e.startPoint,o=n[0],u=n[1],p=e.endPoint,l=p[0],m=p[1],c=a.startPoint,h=c[0],d=c[1],g=a.endPoint,f=g[0],y=g[1],N=Math.max(o,h),T=Math.max(u,d),w=(Math.min(l,f)-N)*(Math.min(m,y)-T);r=w/((l-o)*(m-u)+(f-h)*(y-u)-w)}this.regionsOfInterest[0]=r>.8?a:e}},s.prototype.shouldUpdateRegionsOfInterest=function(){return this.regionsOfInterest.length!==this.maxHandsNumber||this.runsWithoutHandDetector>=this.maxContinuousChecks},s}();function xu(){return K(this,void 0,void 0,function(){return J(this,function(s){return[2,Yt("https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1",{fromTFHub:!0})]})})}function Bu(){return K(this,void 0,void 0,function(){return J(this,function(s){return[2,Yt("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1",{fromTFHub:!0})]})})}function ju(){return K(this,void 0,void 0,function(){return J(this,function(s){return[2,vn("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1/anchors.json?tfjs-format=file").then(function(e){return e.json()})]})})}function Wu(s){var e=s===void 0?{}:s,t=e.maxContinuousChecks,a=t===void 0?1/0:t,r=e.detectionConfidence,n=r===void 0?.8:r,o=e.iouThreshold,u=o===void 0?.3:o,p=e.scoreThreshold,l=p===void 0?.5:p;return K(this,void 0,void 0,function(){var m,c,h,d,g,f;return J(this,function(y){switch(y.label){case 0:return[4,Promise.all([ju(),xu(),Bu()])];case 1:return m=y.sent(),c=m[0],h=m[1],d=m[2],g=new Pu(h,256,256,c,u,l),f=new Fu(g,d,256,256,a,n),[2,new Ru(f)]}})})}var Ru=function(){function s(e){this.pipeline=e}return s.getAnnotations=function(){return Ie},s.prototype.estimateHands=function(e,t){return t===void 0&&(t=!1),K(this,void 0,void 0,function(){var a,r,n,o,u,p,l,m,c;return J(this,function(h){switch(h.label){case 0:return a=function(d){return d instanceof ae?[d.shape[0],d.shape[1]]:[d.height,d.width]}(e),r=a[1],n=$(function(){return e instanceof ae||(e=Rn(e)),zt(Lt(e,"float32"))}),[4,this.pipeline.estimateHand(n)];case 1:if(o=h.sent(),n.dispose(),o===null)return[2,[]];for(u=o,t===!0&&(u=function(d,g){var f=d.handInViewConfidence,y=d.landmarks,N=d.boundingBox;return{handInViewConfidence:f,landmarks:y.map(function(T){return[g-1-T[0],T[1],T[2]]}),boundingBox:{topLeft:[g-1-N.topLeft[0],N.topLeft[1]],bottomRight:[g-1-N.bottomRight[0],N.bottomRight[1]]}}}(o,r)),p={},l=0,m=Object.keys(Ie);l<m.length;l++)c=m[l],p[c]=Ie[c].map(function(d){return u.landmarks[d]});return[2,[{handInViewConfidence:u.handInViewConfidence,boundingBox:u.boundingBox,landmarks:u.landmarks,annotations:p}]]}})})},s}();export{Ru as HandPose,Wu as load};
