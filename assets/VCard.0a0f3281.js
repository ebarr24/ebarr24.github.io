import{aL as G,M as H,m as n,l as V,a2 as v,B as N,C as O,c as h,Q,R as Y}from"./index.e807e3ff.js";import{b,o as y,t as S,l as f,Y as q,d as z,B as J,e as K,R as U,C as W,D as X,f as Z,$ as ee,m as ae,w as te,h as ne,x as de,y as ie,E as le,i as se,S as ce,F as re,G as ue,j as ve,a0 as oe,k as me,T as ge,A as ke}from"./VGrid.b37c77c9.js";import{l as I}from"./VSelect.4643553a.js";const fe=G({name:"VCardActions",setup(e,l){let{slots:t}=l;return H({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=y("v-card-subtitle"),ye=y("v-card-title"),pe=V()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...S()},setup(e,l){let{slots:t}=l;return b(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),m=!!(s||t.append),g=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[g&&n(ye,{key:"title"},{default:()=>{var d,i;return[(i=(d=t.title)==null?void 0:d.call(t))!=null?i:e.title]}}),k&&n(be,{key:"subtitle"},{default:()=>{var d,i;return[(i=(d=t.subtitle)==null?void 0:d.call(t))!=null?i:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),m&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ce=y("v-card-text"),Ve=V()({name:"VCard",directives:{Ripple:q},props:{appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...N(),...z(),...S(),...J(),...K(),...U(),...W(),...X(),...Z(),...ee(),...ae(),...te({variant:"elevated"})},setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:o}=O(e),{borderClasses:s}=ne(e),{colorClasses:m,colorStyles:g,variantClasses:k}=de(e),{densityClasses:c}=ie(e),{dimensionStyles:d}=le(e),{elevationClasses:i}=se(e),{loaderClasses:P}=ce(e),{locationStyles:x}=re(e),{positionClasses:B}=ue(e),{roundedClasses:T}=ve(e),r=oe(e,t),D=h(()=>e.link!==!1&&r.isLink.value),u=h(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return b(()=>{const L=D.value?"a":e.tag,_=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=_||R,M=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),$=E||w||M,j=!!(a.text||e.text);return Q(n(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u.value},o.value,s.value,m.value,c.value,i.value,P.value,B.value,T.value,k.value],style:[g.value,d.value,x.value],href:r.href.value,onClick:u.value&&r.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[F&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(me,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),$&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(Ce,{key:"text"},{default:()=>{var C,A;return[(A=(C=a.text)==null?void 0:C.call(a))!=null?A:e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(fe,null,{default:a.actions}),ke(u.value,"v-card")]}}),[[Y("ripple"),u.value&&e.ripple]])}),{}}});export{Ve as V,ye as a,Ce as b};
