import{m as ve,V as Y,s as W,a as me,b as fe}from"./VSpacer.82a60ca3.js";import{u as ye,a as te,b as H,_ as _e,V as he,c as ge,d as G,e as be,m as we}from"./VRow.fa929a1e.js";import{p as oe,i as O,c as p,r as A,a as L,b as T,g as ae,o as xe,d as Se,e as ne,f as Ie,h as Ve,j as Be,k as $e,l as D,u as Ce,t as J,m as d,n as Le,q as se,s as j,v as K,w as h,x as Q,y as ze,z as Re,A as Te,B as Ae,C as ke,D as Pe}from"./index.7a431041.js";const k=Symbol.for("vuetify:layout"),le=Symbol.for("vuetify:layout-item"),ee=1e3,Me=oe({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ee=oe({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ne(){const e=O(k);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function He(e){var c;const o=O(k);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=(c=e.id)!=null?c:`layout-item-${Se()}`,n=ae("useLayoutItem");ne(le,{id:t});const a=A(!1);Ie(()=>a.value=!0),Ve(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:u}=o.register(n,{...e,active:p(()=>a.value?!1:e.active.value),id:t});return Be(()=>o.unregister(t)),{layoutItemStyles:l,layoutRect:o.layoutRect,layoutItemScrimStyles:u}}const Oe=(e,o,t,n)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const u of e){const c=o.get(u),v=t.get(u),b=n.get(u);if(!c||!v||!b)continue;const f={...a,[c.value]:parseInt(a[c.value],10)+(b.value?parseInt(v.value,10):0)};l.push({id:u,layer:f}),a=f}return l};function De(e){const o=O(k,null),t=p(()=>o?o.rootZIndex.value-100:ee),n=A([]),a=L(new Map),l=L(new Map),u=L(new Map),c=L(new Map),v=L(new Map),{resizeRef:b,contentRect:f}=ye(),z=p(()=>{var s;const r=new Map,m=(s=e.overlaps)!=null?s:[];for(const g of m.filter(i=>i.includes(":"))){const[i,y]=g.split(":");if(!n.value.includes(i)||!n.value.includes(y))continue;const x=a.get(i),B=a.get(y),$=l.get(i),R=l.get(y);!x||!B||!$||!R||(r.set(y,{position:x.value,amount:parseInt($.value,10)}),r.set(i,{position:B.value,amount:-parseInt(R.value,10)}))}return r}),w=p(()=>{const r=[...new Set([...u.values()].map(s=>s.value))].sort((s,g)=>s-g),m=[];for(const s of r){const g=n.value.filter(i=>{var y;return((y=u.get(i))==null?void 0:y.value)===s});m.push(...g)}return Oe(m,a,l,c)}),S=p(()=>!Array.from(v.values()).some(r=>r.value)),I=p(()=>w.value[w.value.length-1].layer),ue=p(()=>({"--v-layout-left":T(I.value.left),"--v-layout-right":T(I.value.right),"--v-layout-top":T(I.value.top),"--v-layout-bottom":T(I.value.bottom),...S.value?void 0:{transition:"none"}})),V=p(()=>w.value.slice(1).map((r,m)=>{let{id:s}=r;const{layer:g}=w.value[m],i=l.get(s),y=a.get(s);return{id:s,...g,size:Number(i.value),position:y.value}})),U=r=>V.value.find(m=>m.id===r),P=ae("createLayout"),Z=A(!1);xe(()=>{Z.value=!0}),ne(k,{register:(r,m)=>{let{id:s,order:g,position:i,layoutSize:y,elementSize:x,active:B,disableTransitions:$,absolute:R}=m;u.set(s,g),a.set(s,i),l.set(s,y),c.set(s,B),$&&v.set(s,$);const q=$e(le,P==null?void 0:P.vnode).indexOf(r);q>-1?n.value.splice(q,0,s):n.value.push(s);const F=p(()=>V.value.findIndex(C=>C.id===s)),M=p(()=>t.value+w.value.length*2-F.value*2),ce=p(()=>{const C=i.value==="left"||i.value==="right",E=i.value==="right",de=i.value==="bottom",X={[i.value]:0,zIndex:M.value,transform:`translate${C?"X":"Y"}(${(B.value?0:-110)*(E||de?-1:1)}%)`,position:R.value||t.value!==ee?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!Z.value)return X;const _=V.value[F.value];if(!_)throw new Error(`[Vuetify] Could not find layout item "${s}"`);const N=z.value.get(s);return N&&(_[N.position]+=N.amount),{...X,height:C?`calc(100% - ${_.top}px - ${_.bottom}px)`:x.value?`${x.value}px`:void 0,left:E?void 0:`${_.left}px`,right:E?`${_.right}px`:void 0,top:i.value!=="bottom"?`${_.top}px`:void 0,bottom:i.value!=="top"?`${_.bottom}px`:void 0,width:C?x.value?`${x.value}px`:void 0:`calc(100% - ${_.left}px - ${_.right}px)`}}),pe=p(()=>({zIndex:M.value-1}));return{layoutItemStyles:ce,layoutItemScrimStyles:pe,zIndex:M}},unregister:r=>{u.delete(r),a.delete(r),l.delete(r),c.delete(r),v.delete(r),n.value=n.value.filter(m=>m!==r)},mainRect:I,mainStyles:ue,getLayoutItem:U,items:V,layoutRect:f,rootZIndex:t});const re=p(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ie=p(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:re,layoutStyles:ie,getLayoutItem:U,items:V,layoutRect:f,layoutRef:b}}const je="/assets/logo.cba8f77e.png";const Ke=D()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ve(),...Ee(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=A(),a=Ce(e,"modelValue"),l=p(()=>{var f,z,w,S;const v=(z=(f=n.value)==null?void 0:f.contentHeight)!=null?z:0,b=(S=(w=n.value)==null?void 0:w.extensionHeight)!=null?S:0;return v+b}),{ssrBootStyles:u}=te(),{layoutItemStyles:c}=He({id:e.name,order:p(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:l,elementSize:l,active:a,absolute:J(e,"absolute")});return H(()=>{const[v]=Y.filterProps(e);return d(Y,Le({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...c.value,height:void 0,...u.value}},v),t)}),{}}}),Ue={data(){return{appBarColor:"transparent",appBarElevation:0,showForm:W}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{redirectToNewTab(e){window.open(e,"_blank")},handleScroll(){window.pageYOffset>0?(this.appBarColor="rgba(0, 0, 0, 0.6)",this.appBarElevation=4):(this.appBarColor="transparent",this.appBarElevation=0)},handleSubmit(){W.isShown=!0}}},Ze=e=>(ze("data-v-b84c67fa"),e=e(),Re(),e),qe=Ze(()=>Te("img",{class:"logo mt-2 pl-3",src:je},null,-1));function Fe(e,o,t,n,a,l){const u=se("router-link");return j(),K(Ke,{app:"",fixed:"",color:a.appBarColor,elevation:a.appBarElevation,"scroll-off-screen":!0,class:"custom-app-bar"},{default:h(()=>[d(me,null,{default:h(()=>[d(he,null,{default:h(()=>[d(ge,{cols:"auto"},{default:h(()=>[d(u,{to:"/",class:"text-white",style:{"text-decoration":"none"}},{default:h(()=>[qe]),_:1})]),_:1}),d(fe)]),_:1})]),_:1}),d(G,{class:"text-white",icon:"",size:"x-large",onClick:o[0]||(o[0]=c=>l.redirectToNewTab("https://twitter.com/@unreelhub"))},{default:h(()=>[d(be,{class:"py-1"},{default:h(()=>[Q("mdi-twitter")]),_:1})]),_:1}),d(G,{variant:"outlined",class:"submit-button mr-9 text-white",onClick:o[1]||(o[1]=c=>l.handleSubmit())},{default:h(()=>[Q(" Submit A Video ")]),_:1})]),_:1},8,["color","elevation"])}const Xe=_e(Ue,[["render",Fe],["__scopeId","data-v-b84c67fa"]]);const Ye=D()({name:"VMain",props:{scrollable:Boolean,...we({tag:"main"})},setup(e,o){let{slots:t}=o;const{mainStyles:n}=Ne(),{ssrBootStyles:a}=te();return H(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[n.value,a.value]},{default:()=>{var l,u;return[e.scrollable?d("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}}),We={__name:"View",setup(e){return(o,t)=>{const n=se("router-view");return j(),K(Ye,null,{default:h(()=>[d(n)]),_:1})}}};const Ge=D()({name:"VApp",props:{...Me({fullHeight:!0}),...Ae()},setup(e,o){let{slots:t}=o;const n=ke(e),{layoutClasses:a,layoutStyles:l,getLayoutItem:u,items:c,layoutRef:v}=De(e),{rtlClasses:b}=Pe();return H(()=>{var f;return d("div",{ref:v,class:["v-application",n.themeClasses.value,a.value,b.value],style:l.value},[d("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:u,items:c,theme:n}}}),ot={__name:"Default",setup(e){return(o,t)=>(j(),K(Ge,null,{default:h(()=>[d(Xe),d(We)]),_:1}))}};export{ot as default};
