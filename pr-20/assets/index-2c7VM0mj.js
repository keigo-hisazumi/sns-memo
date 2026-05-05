(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},fs=[],tn=()=>{},Kd=()=>!1,Ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nl=t=>t.startsWith("onUpdate:"),tt=Object.assign,Ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,we=(t,e)=>yy.call(t,e),ie=Array.isArray,ds=t=>Ta(t)==="[object Map]",Gd=t=>Ta(t)==="[object Set]",ue=t=>typeof t=="function",je=t=>typeof t=="string",gr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Qd=t=>(De(t)||ue(t))&&ue(t.then)&&ue(t.catch),Yd=Object.prototype.toString,Ta=t=>Yd.call(t),vy=t=>Ta(t).slice(8,-1),Jd=t=>Ta(t)==="[object Object]",xl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,di=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ey=/-\w/g,Ft=Ia(t=>t.replace(Ey,e=>e.slice(1).toUpperCase())),Ty=/\B([A-Z])/g,_r=Ia(t=>t.replace(Ty,"-$1").toLowerCase()),wa=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=Ia(t=>t?`on${wa(t)}`:""),tr=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ml=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Iy=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Vh;const Aa=()=>Vh||(Vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ji(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Sy(r):ji(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||De(t))return t}const wy=/;(?![^(]*\))/g,Ay=/:([^]+)/,by=/\/\*[^]*?\*\//g;function Sy(t){const e={};return t.replace(by,"").split(wy).forEach(n=>{if(n){const r=n.split(Ay);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qe(t){let e="";if(je(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Qe(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cy=Dl(Ry);function Zd(t){return!!t||t===""}const ep=t=>!!(t&&t.__v_isRef===!0),ke=t=>je(t)?t:t==null?"":ie(t)||De(t)&&(t.toString===Yd||!ue(t.toString))?ep(t)?ke(t.value):JSON.stringify(t,tp,2):String(t),tp=(t,e)=>ep(e)?tp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vc(r,i)+" =>"]=s,n),{})}:Gd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vc(n))}:gr(e)?vc(e):De(e)&&!ie(e)&&!Jd(e)?String(e):e,vc=(t,e="")=>{var n;return gr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class Py{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){++this._on===1&&(this.prevScope=vt,vt=this)}off(){this._on>0&&--this._on===0&&(vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ky(){return vt}let Pe;const Ec=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ec.has(this)&&(Ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),ip(this);const e=Pe,n=Bt;Pe=this,Bt=!0;try{return this.fn()}finally{op(this),Pe=e,Bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hc(this)&&this.run()}get dirty(){return Hc(this)}}let rp=0,pi,mi;function sp(t,e=!1){if(t.flags|=8,e){t.next=mi,mi=t;return}t.next=pi,pi=t}function Ll(){rp++}function Fl(){if(--rp>0)return;if(mi){let e=mi;for(mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ul(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi)||(t.globalVersion=bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hc(t))))return;t.flags|=2;const e=t.dep,n=Pe,r=Bt;Pe=t,Bt=!0;try{ip(t);const s=t.fn(t._value);(e.version===0||tr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Pe=n,Bt=r,op(t),t.flags&=-3}}function Ul(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ul(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bt=!0;const cp=[];function wn(){cp.push(Bt),Bt=!1}function An(){const t=cp.pop();Bt=t===void 0?!0:t}function Dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Pe;Pe=void 0;try{e()}finally{Pe=n}}}let bi=0;class Dy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Pe||!Bt||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new Dy(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,lp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){Ll();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)lp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zc=new WeakMap,Mr=Symbol(""),Wc=Symbol(""),Si=Symbol("");function ht(t,e,n){if(Bt&&Pe){let r=zc.get(t);r||zc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function pn(t,e,n,r,s,i){const o=zc.get(t);if(!o){bi++;return}const c=l=>{l&&l.trigger()};if(Ll(),e==="clear")o.forEach(c);else{const l=ie(t),f=l&&xl(n);if(l&&n==="length"){const h=Number(r);o.forEach((p,_)=>{(_==="length"||_===Si||!gr(_)&&_>=h)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),f&&c(o.get(Si)),e){case"add":l?f&&c(o.get("length")):(c(o.get(Mr)),ds(t)&&c(o.get(Wc)));break;case"delete":l||(c(o.get(Mr)),ds(t)&&c(o.get(Wc)));break;case"set":ds(t)&&c(o.get(Mr));break}}Fl()}function ss(t){const e=Ie(t);return e===t?e:(ht(e,"iterate",Si),xt(t)?e:e.map(qt))}function ba(t){return ht(t=Ie(t),"iterate",Si),t}function jn(t,e){return bn(t)?Lr(t)?Is(qt(e)):Is(e):qt(e)}const Ny={__proto__:null,[Symbol.iterator](){return Tc(this,Symbol.iterator,t=>jn(this,t))},concat(...t){return ss(this).concat(...t.map(e=>ie(e)?ss(e):e))},entries(){return Tc(this,"entries",t=>(t[1]=jn(this,t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(r=>jn(this,r)),arguments)},find(t,e){return hn(this,"find",t,e,n=>jn(this,n),arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,n=>jn(this,n),arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ic(this,"includes",t)},indexOf(...t){return Ic(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Ic(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return Nh(this,"reduce",t,e)},reduceRight(t,...e){return Nh(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return Tc(this,"values",t=>jn(this,t))}};function Tc(t,e,n){const r=ba(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Oy=Array.prototype;function hn(t,e,n,r,s,i){const o=ba(t),c=o!==t&&!xt(t),l=o[e];if(l!==Oy[e]){const p=l.apply(t,i);return c?qt(p):p}let f=n;o!==t&&(c?f=function(p,_){return n.call(this,jn(t,p),_,t)}:n.length>2&&(f=function(p,_){return n.call(this,p,_,t)}));const h=l.call(o,f,r);return c&&s?s(h):h}function Nh(t,e,n,r){const s=ba(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,jn(t,c),l,t)}),s[e](i,...r)}function Ic(t,e,n){const r=Ie(t);ht(r,"iterate",Si);const s=r[e](...n);return(s===-1||s===!1)&&ql(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function ri(t,e,n=[]){wn(),Ll();const r=Ie(t)[e].apply(t,n);return Fl(),An(),r}const xy=Dl("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr));function My(t){gr(t)||(t=String(t));const e=Ie(this);return ht(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wy:mp:i?pp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=Ny[n]))return l;if(n==="hasOwnProperty")return My}const c=Reflect.get(e,n,it(e)?e:r);if((gr(n)?up.has(n):xy(n))||(s||ht(e,"get",n),i))return c;if(it(c)){const l=o&&xl(n)?c:c.value;return s&&De(l)?Gc(l):l}return De(c)?s?Gc(c):Sa(c):c}}class fp extends hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&xl(n);if(!this._isShallow){const f=bn(i);if(!xt(r)&&!bn(r)&&(i=Ie(i),r=Ie(r)),!o&&it(i)&&!it(r))return f||(i.value=r),!0}const c=o?Number(n)<e.length:we(e,n),l=Reflect.set(e,n,r,it(e)?e:s);return e===Ie(s)&&(c?tr(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),l}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gr(n)||!up.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",ie(e)?"length":Mr),Reflect.ownKeys(e)}}class Ly extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fy=new fp,Uy=new Ly,$y=new fp(!0);const Kc=t=>t,go=t=>Reflect.getPrototypeOf(t);function By(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,f=s[t](...r),h=n?Kc:e?Is:qt;return!e&&ht(i,"iterate",l?Wc:Mr),{next(){const{value:p,done:_}=f.next();return _?{value:p,done:_}:{value:c?[h(p[0]),h(p[1])]:h(p),done:_}},[Symbol.iterator](){return this}}}}function _o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jy(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(tr(s,c)&&ht(o,"get",s),ht(o,"get",c));const{has:l}=go(o),f=e?Kc:t?Is:qt;if(l.call(o,s))return f(i.get(s));if(l.call(o,c))return f(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ie(s),"iterate",Mr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(tr(s,c)&&ht(o,"has",s),ht(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),f=e?Kc:t?Is:qt;return!t&&ht(l,"iterate",Mr),c.forEach((h,p)=>s.call(i,f(h),f(p),o))}};return tt(n,t?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(s){!e&&!xt(s)&&!bn(s)&&(s=Ie(s));const i=Ie(this);return go(i).has.call(i,s)||(i.add(s),pn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!bn(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=go(o);let f=c.call(o,s);f||(s=Ie(s),f=c.call(o,s));const h=l.call(o,s);return o.set(s,i),f?tr(i,h)&&pn(o,"set",s,i):pn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=go(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const f=i.delete(s);return l&&pn(i,"delete",s,void 0),f},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=By(s,t,e)}),n}function Bl(t,e){const n=jy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const qy={get:Bl(!1,!1)},Hy={get:Bl(!1,!0)},zy={get:Bl(!0,!1)};const dp=new WeakMap,pp=new WeakMap,mp=new WeakMap,Wy=new WeakMap;function Ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ky(vy(t))}function Sa(t){return bn(t)?t:jl(t,!1,Fy,qy,dp)}function Qy(t){return jl(t,!1,$y,Hy,pp)}function Gc(t){return jl(t,!0,Uy,zy,mp)}function jl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Gy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Lr(t){return bn(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function ql(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Yy(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&Xd(t,"__v_skip",!0),t}const qt=t=>De(t)?Sa(t):t,Is=t=>De(t)?Gc(t):t;function it(t){return t?t.__v_isRef===!0:!1}function He(t){return Jy(t,!1)}function Jy(t,e){return it(t)?t:new Xy(t,e)}class Xy{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||bn(e);e=r?e:Ie(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:qt(e),this.dep.trigger())}}function le(t){return it(t)?t.value:t}const Zy={get:(t,e,n)=>e==="__v_raw"?t:le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gp(t){return Lr(t)?t:new Proxy(t,Zy)}class ev{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return sp(this,!0),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tv(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new ev(r,s,n)}const yo={},zo=new WeakMap;let Dr;function nv(t,e=!1,n=Dr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function rv(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,f=G=>s?G:xt(G)||s===!1||s===0?mn(G,1):mn(G);let h,p,_,A,V=!1,L=!1;if(it(t)?(p=()=>t.value,V=xt(t)):Lr(t)?(p=()=>f(t),V=!0):ie(t)?(L=!0,V=t.some(G=>Lr(G)||xt(G)),p=()=>t.map(G=>{if(it(G))return G.value;if(Lr(G))return f(G);if(ue(G))return l?l(G,2):G()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(_){wn();try{_()}finally{An()}}const G=Dr;Dr=h;try{return l?l(t,3,[A]):t(A)}finally{Dr=G}}:p=tn,e&&s){const G=p,oe=s===!0?1/0:s;p=()=>mn(G(),oe)}const B=ky(),H=()=>{h.stop(),B&&B.active&&Ol(B.effects,h)};if(i&&e){const G=e;e=(...oe)=>{G(...oe),H()}}let Q=L?new Array(t.length).fill(yo):yo;const Z=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const oe=h.run();if(s||V||(L?oe.some((de,b)=>tr(de,Q[b])):tr(oe,Q))){_&&_();const de=Dr;Dr=h;try{const b=[oe,Q===yo?void 0:L&&Q[0]===yo?[]:Q,A];Q=oe,l?l(e,3,b):e(...b)}finally{Dr=de}}}else h.run()};return c&&c(Z),h=new np(p),h.scheduler=o?()=>o(Z,!1):Z,A=G=>nv(G,!1,h),_=h.onStop=()=>{const G=zo.get(h);if(G){if(l)l(G,4);else for(const oe of G)oe();zo.delete(h)}},e?r?Z(!0):Q=h.run():o?o(Z.bind(null,!0),!0):h.run(),H.pause=h.pause.bind(h),H.resume=h.resume.bind(h),H.stop=H,H}function mn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,it(t))mn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)mn(t[r],e,n);else if(Gd(t)||ds(t))t.forEach(r=>{mn(r,e,n)});else if(Jd(t)){for(const r in t)mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ra(s,e,n)}}function Ht(t,e,n,r){if(ue(t)){const s=qi(t,e,n,r);return s&&Qd(s)&&s.catch(i=>{Ra(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function Ra(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,l,f)===!1)return}c=c.parent}if(i){wn(),qi(i,null,10,[t,l,f]),An();return}}sv(t,n,s,r,o)}function sv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Xt=-1;const ps=[];let qn=null,is=0;const _p=Promise.resolve();let Wo=null;function Ko(t){const e=Wo||_p;return t?e.then(this?t.bind(this):t):e}function iv(t){let e=Xt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hl(t){if(!(t.flags&1)){const e=Ri(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Ri(n)?_t.push(t):_t.splice(iv(e),0,t),t.flags|=1,yp()}}function yp(){Wo||(Wo=_p.then(Ep))}function ov(t){ie(t)?ps.push(...t):qn&&t.id===-1?qn.splice(is+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),yp()}function Oh(t,e,n=Xt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vp(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ri(n)-Ri(r));if(ps.length=0,qn){qn.push(...e);return}for(qn=e,is=0;is<qn.length;is++){const n=qn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,is=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ep(t){try{for(Xt=0;Xt<_t.length;Xt++){const e=_t[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<_t.length;Xt++){const e=_t[Xt];e&&(e.flags&=-2)}Xt=-1,_t.length=0,vp(),Wo=null,(_t.length||ps.length)&&Ep()}}let Rt=null,Tp=null;function Go(t){const e=Rt;return Rt=t,Tp=t&&t.type.__scopeId||null,e}function zl(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jo(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Jo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vn(t,e){if(Rt===null)return t;const n=Da(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&mn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(wn(),Ht(l,n,8,[t.el,c,t,e]),An())}}function av(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function ko(t,e,n=!1){const r=Jl();if(r||ms){let s=ms?ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const cv=Symbol.for("v-scx"),lv=()=>ko(cv);function Fr(t,e,n){return Ip(t,e,n)}function Ip(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=tt({},n),l=e&&r||!e&&i!=="post";let f;if(ki){if(i==="sync"){const A=lv();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!l){const A=()=>{};return A.stop=tn,A.resume=tn,A.pause=tn,A}}const h=dt;c.call=(A,V,L)=>Ht(A,h,V,L);let p=!1;i==="post"?c.scheduler=A=>{St(A,h&&h.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(A,V)=>{V?A():Hl(A)}),c.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,h&&(A.id=h.uid,A.i=h))};const _=rv(t,e,c);return ki&&(f?f.push(_):l&&_()),_}function uv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?wp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Hi(this),c=Ip(s,i.bind(r),n);return o(),c}function wp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hv=Symbol("_vte"),Ap=t=>t.__isTeleport,dn=Symbol("_leaveCb"),vo=Symbol("_enterCb");function bp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dp(()=>{t.isMounted=!0}),Op(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],Sp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},Rp=t=>{const e=t.subTree;return e.component?Rp(e.component):e},fv={name:"BaseTransition",props:Sp,setup(t,{slots:e}){const n=Jl(),r=bp();return()=>{const s=e.default&&Wl(e.default(),!0);if(!s||!s.length)return;const i=Cp(s),o=Ie(t),{mode:c}=o;if(r.isLeaving)return wc(i);const l=xh(i);if(!l)return wc(i);let f=Ci(l,o,r,n,p=>f=p);l.type!==yt&&$r(l,f);let h=n.subTree&&xh(n.subTree);if(h&&h.type!==yt&&!Or(h,l)&&Rp(n).type!==yt){let p=Ci(h,o,r,n);if($r(h,p),c==="out-in"&&l.type!==yt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,h=void 0},wc(i);c==="in-out"&&l.type!==yt?p.delayLeave=(_,A,V)=>{const L=Pp(r,h);L[String(h.key)]=h,_[dn]=()=>{A(),_[dn]=void 0,delete f.delayedLeave,h=void 0},f.delayedLeave=()=>{V(),delete f.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Cp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yt){e=n;break}}return e}const dv=fv;function Pp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ci(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:_,onLeave:A,onAfterLeave:V,onLeaveCancelled:L,onBeforeAppear:B,onAppear:H,onAfterAppear:Q,onAppearCancelled:Z}=e,G=String(t.key),oe=Pp(n,t),de=(y,w)=>{y&&Ht(y,r,9,w)},b=(y,w)=>{const I=w[1];de(y,w),ie(y)?y.every(E=>E.length<=1)&&I():y.length<=1&&I()},v={mode:o,persisted:c,beforeEnter(y){let w=l;if(!n.isMounted)if(i)w=B||l;else return;y[dn]&&y[dn](!0);const I=oe[G];I&&Or(t,I)&&I.el[dn]&&I.el[dn](),de(w,[y])},enter(y){let w=f,I=h,E=p;if(!n.isMounted)if(i)w=H||f,I=Q||h,E=Z||p;else return;let g=!1;const Y=y[vo]=xe=>{g||(g=!0,xe?de(E,[y]):de(I,[y]),v.delayedLeave&&v.delayedLeave(),y[vo]=void 0)};w?b(w,[y,Y]):Y()},leave(y,w){const I=String(t.key);if(y[vo]&&y[vo](!0),n.isUnmounting)return w();de(_,[y]);let E=!1;const g=y[dn]=Y=>{E||(E=!0,w(),Y?de(L,[y]):de(V,[y]),y[dn]=void 0,oe[I]===t&&delete oe[I])};oe[I]=t,A?b(A,[y,g]):g()},clone(y){const w=Ci(y,e,n,r,s);return s&&s(w),w}};return v}function wc(t){if(Ca(t))return t=cr(t),t.children=null,t}function xh(t){if(!Ca(t))return Ap(t.type)&&t.children?Cp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function $r(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$r(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&s++,r=r.concat(Wl(o.children,e,c))):(e||o.type!==yt)&&r.push(c!=null?cr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Qo=new WeakMap;function gi(t,e,n,r,s=!1){if(ie(t)){t.forEach((V,L)=>gi(V,e&&(ie(e)?e[L]:e),n,r,s));return}if(_i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,f=e&&e.r,h=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,_=Ie(p),A=p===Ce?Kd:V=>we(_,V);if(f!=null&&f!==l){if(Mh(e),je(f))h[f]=null,A(f)&&(p[f]=null);else if(it(f)){f.value=null;const V=e;V.k&&(h[V.k]=null)}}if(ue(l))qi(l,c,12,[o,h]);else{const V=je(l),L=it(l);if(V||L){const B=()=>{if(t.f){const H=V?A(l)?p[l]:h[l]:l.value;if(s)ie(H)&&Ol(H,i);else if(ie(H))H.includes(i)||H.push(i);else if(V)h[l]=[i],A(l)&&(p[l]=h[l]);else{const Q=[i];l.value=Q,t.k&&(h[t.k]=Q)}}else V?(h[l]=o,A(l)&&(p[l]=o)):L&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const H=()=>{B(),Qo.delete(t)};H.id=-1,Qo.set(t,H),St(H,n)}else Mh(t),B()}}}function Mh(t){const e=Qo.get(t);e&&(e.flags|=8,Qo.delete(t))}Aa().requestIdleCallback;Aa().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function pv(t,e){Vp(t,"a",e)}function mv(t,e){Vp(t,"da",e)}function Vp(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&gv(r,e,n,s),s=s.parent}}function gv(t,e,n,r){const s=Pa(e,t,r,!0);xp(()=>{Ol(r[e],s)},n)}function Pa(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{wn();const c=Hi(n),l=Ht(e,n,t,o);return c(),An(),l});return r?s.unshift(i):s.push(i),i}}const kn=t=>(e,n=dt)=>{(!ki||t==="sp")&&Pa(t,(...r)=>e(...r),n)},_v=kn("bm"),Dp=kn("m"),yv=kn("bu"),Np=kn("u"),Op=kn("bum"),xp=kn("um"),vv=kn("sp"),Ev=kn("rtg"),Tv=kn("rtc");function Iv(t,e=dt){Pa("ec",t,e)}const wv="components",Mp=Symbol.for("v-ndc");function Eo(t){return je(t)?Av(wv,t,!1)||t:t||Mp}function Av(t,e,n=!0,r=!1){const s=Rt||dt;if(s){const i=s.type;{const c=cE(i,!1);if(c&&(c===e||c===Ft(e)||c===wa(Ft(e))))return i}const o=Lh(s[t]||i[t],e)||Lh(s.appContext[t],e);return!o&&r?i:o}}function Lh(t,e){return t&&(t[e]||t[Ft(e)]||t[wa(Ft(e))])}function ws(t,e,n,r){let s;const i=n,o=ie(t);if(o||je(t)){const c=o&&Lr(t);let l=!1,f=!1;c&&(l=!xt(t),f=bn(t),t=ba(t)),s=new Array(t.length);for(let h=0,p=t.length;h<p;h++)s[h]=e(l?f?Is(qt(t[h])):qt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Qc=t=>t?tm(t)?Da(t):Qc(t.parent):null,yi=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fp(t),$forceUpdate:t=>t.f||(t.f=()=>{Hl(t.update)}),$nextTick:t=>t.n||(t.n=Ko.bind(t.proxy)),$watch:t=>uv.bind(t)}),Ac=(t,e)=>t!==Ce&&!t.__isScriptSetup&&we(t,e),bv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ac(r,e))return o[e]=1,r[e];if(s!==Ce&&we(s,e))return o[e]=2,s[e];if(we(i,e))return o[e]=3,i[e];if(n!==Ce&&we(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const f=yi[e];let h,p;if(f)return e==="$attrs"&&ht(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&we(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,we(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ac(s,e)?(s[e]=n,!0):r!==Ce&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ce&&c[0]!=="$"&&we(t,c)||Ac(e,c)||we(i,c)||we(r,c)||we(yi,c)||we(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function Sv(t){const e=Fp(t),n=t.proxy,r=t.ctx;Yc=!1,e.beforeCreate&&Uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:f,created:h,beforeMount:p,mounted:_,beforeUpdate:A,updated:V,activated:L,deactivated:B,beforeDestroy:H,beforeUnmount:Q,destroyed:Z,unmounted:G,render:oe,renderTracked:de,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:w,inheritAttrs:I,components:E,directives:g,filters:Y}=e;if(f&&Rv(f,r,null),o)for(const Se in o){const ve=o[Se];ue(ve)&&(r[Se]=ve.bind(n))}if(s){const Se=s.call(n,n);De(Se)&&(t.data=Sa(Se))}if(Yc=!0,i)for(const Se in i){const ve=i[Se],kt=ue(ve)?ve.bind(n,n):ue(ve.get)?ve.get.bind(n,n):tn,Xr=!ue(ve)&&ue(ve.set)?ve.set.bind(n):tn,Kt=En({get:kt,set:Xr});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:It=>Kt.value=It})}if(c)for(const Se in c)Lp(c[Se],r,n,Se);if(l){const Se=ue(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(ve=>{av(ve,Se[ve])})}h&&Uh(h,t,"c");function fe(Se,ve){ie(ve)?ve.forEach(kt=>Se(kt.bind(n))):ve&&Se(ve.bind(n))}if(fe(_v,p),fe(Dp,_),fe(yv,A),fe(Np,V),fe(pv,L),fe(mv,B),fe(Iv,v),fe(Tv,de),fe(Ev,b),fe(Op,Q),fe(xp,G),fe(vv,y),ie(w))if(w.length){const Se=t.exposed||(t.exposed={});w.forEach(ve=>{Object.defineProperty(Se,ve,{get:()=>n[ve],set:kt=>n[ve]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===tn&&(t.render=oe),I!=null&&(t.inheritAttrs=I),E&&(t.components=E),g&&(t.directives=g),y&&kp(t)}function Rv(t,e,n=tn){ie(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=ko(s.from||r,s.default,!0):i=ko(s.from||r):i=ko(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Uh(t,e,n){Ht(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lp(t,e,n,r){let s=r.includes(".")?wp(n,r):()=>n[r];if(je(t)){const i=e[t];ue(i)&&Fr(s,i)}else if(ue(t))Fr(s,t.bind(n));else if(De(t))if(ie(t))t.forEach(i=>Lp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Fr(s,i,t)}}function Fp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(f=>Yo(l,f,o,!0)),Yo(l,e,o)),De(e)&&i.set(e,l),l}function Yo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yo(t,i,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Cv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Cv={data:$h,props:Bh,emits:Bh,methods:oi,computed:oi,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:oi,directives:oi,watch:kv,provide:$h,inject:Pv};function $h(t,e){return e?t?function(){return tt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return oi(Jc(t),Jc(e))}function Jc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?tt(Object.create(null),t,e):e}function Bh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:tt(Object.create(null),Fh(t),Fh(e??{})):e}function kv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Up(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function Dv(t,e){return function(r,s=null){ue(r)||(r=tt({},r)),s!=null&&!De(s)&&(s=null);const i=Up(),o=new WeakSet,c=[];let l=!1;const f=i.app={_uid:Vv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uE,get config(){return i.config},set config(h){},use(h,...p){return o.has(h)||(h&&ue(h.install)?(o.add(h),h.install(f,...p)):ue(h)&&(o.add(h),h(f,...p))),f},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),f},component(h,p){return p?(i.components[h]=p,f):i.components[h]},directive(h,p){return p?(i.directives[h]=p,f):i.directives[h]},mount(h,p,_){if(!l){const A=f._ceVNode||Me(r,s);return A.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(A,h,_),l=!0,f._container=h,h.__vue_app__=f,Da(A.component)}},onUnmount(h){c.push(h)},unmount(){l&&(Ht(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(h,p){return i.provides[h]=p,f},runWithContext(h){const p=ms;ms=f;try{return h()}finally{ms=p}}};return f}}let ms=null;const Nv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function Ov(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&Nv(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>je(h)?h.trim():h)),o.number&&(s=n.map(Ml)));let c,l=r[c=yc(e)]||r[c=yc(Ft(e))];!l&&i&&(l=r[c=yc(_r(e))]),l&&Ht(l,t,6,s);const f=r[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ht(f,t,6,s)}}const xv=new WeakMap;function $p(t,e,n=!1){const r=n?xv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=f=>{const h=$p(f,e,!0);h&&(c=!0,tt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):tt(o,i),De(t)&&r.set(t,o),o)}function ka(t,e){return!t||!Ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,_r(e))||we(t,e))}function jh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:f,renderCache:h,props:p,data:_,setupState:A,ctx:V,inheritAttrs:L}=t,B=Go(t);let H,Q;try{if(n.shapeFlag&4){const G=s||r,oe=G;H=en(f.call(oe,G,h,p,A,_,V)),Q=c}else{const G=e;H=en(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),Q=e.props?c:Mv(c)}}catch(G){vi.length=0,Ra(G,t,1),H=Me(yt)}let Z=H;if(Q&&L!==!1){const G=Object.keys(Q),{shapeFlag:oe}=Z;G.length&&oe&7&&(i&&G.some(Nl)&&(Q=Lv(Q,i)),Z=cr(Z,Q,!1,!0))}return n.dirs&&(Z=cr(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&$r(Z,n.transition),H=Z,Go(B),H}const Mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ea(n))&&((e||(e={}))[n]=t[n]);return e},Lv=(t,e)=>{const n={};for(const r in t)(!Nl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qh(r,o,f):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const _=h[p];if(o[_]!==r[_]&&!ka(f,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?qh(r,o,f):!0:!!o;return!1}function qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function Uv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bp={},jp=()=>Object.create(Bp),qp=t=>Object.getPrototypeOf(t)===Bp;function $v(t,e,n,r=!1){const s={},i=jp();t.propsDefaults=Object.create(null),Hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let _=h[p];if(ka(t.emitsOptions,_))continue;const A=e[_];if(l)if(we(i,_))A!==i[_]&&(i[_]=A,f=!0);else{const V=Ft(_);s[V]=Xc(l,c,V,A,t,!1)}else A!==i[_]&&(i[_]=A,f=!0)}}}else{Hp(t,e,s,i)&&(f=!0);let h;for(const p in c)(!e||!we(e,p)&&((h=_r(p))===p||!we(e,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=Xc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!we(e,p))&&(delete i[p],f=!0)}f&&pn(t.attrs,"set","")}function Hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(di(l))continue;const f=e[l];let h;s&&we(s,h=Ft(l))?!i||!i.includes(h)?n[h]=f:(c||(c={}))[h]=f:ka(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Ie(n),f=c||Ce;for(let h=0;h<i.length;h++){const p=i[h];n[p]=Xc(s,l,p,f[p],t,!we(f,p))}}return o}function Xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=we(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const h=Hi(s);r=f[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const jv=new WeakMap;function zp(t,e,n=!1){const r=n?jv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const h=p=>{l=!0;const[_,A]=zp(p,e,!0);tt(o,_),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return De(t)&&r.set(t,fs),fs;if(ie(i))for(let h=0;h<i.length;h++){const p=Ft(i[h]);Hh(p)&&(o[p]=Ce)}else if(i)for(const h in i){const p=Ft(h);if(Hh(p)){const _=i[h],A=o[p]=ie(_)||ue(_)?{type:_}:tt({},_),V=A.type;let L=!1,B=!0;if(ie(V))for(let H=0;H<V.length;++H){const Q=V[H],Z=ue(Q)&&Q.name;if(Z==="Boolean"){L=!0;break}else Z==="String"&&(B=!1)}else L=ue(V)&&V.name==="Boolean";A[0]=L,A[1]=B,(L||we(A,"default"))&&c.push(p)}}const f=[o,c];return De(t)&&r.set(t,f),f}function Hh(t){return t[0]!=="$"&&!di(t)}const Kl=t=>t==="_"||t==="_ctx"||t==="$stable",Gl=t=>ie(t)?t.map(en):[en(t)],qv=(t,e,n)=>{if(e._n)return e;const r=zl((...s)=>Gl(e(...s)),n);return r._c=!1,r},Wp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(ue(i))e[s]=qv(s,i,r);else if(i!=null){const o=Gl(i);e[s]=()=>o}}},Kp=(t,e)=>{const n=Gl(e);t.slots.default=()=>n},Gp=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},Hv=(t,e,n)=>{const r=t.slots=jp();if(t.vnode.shapeFlag&32){const s=e._;s?(Gp(r,e,n),n&&Xd(r,"_",s,!0)):Wp(e,r)}else e&&Kp(t,e)},zv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Gp(s,e,n):(i=!e.$stable,Wp(e,s)),o=e}else e&&(Kp(t,e),o={default:1});if(i)for(const c in s)!Kl(c)&&o[c]==null&&delete s[c]},St=Yv;function Wv(t){return Kv(t)}function Kv(t,e){const n=Aa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:f,setElementText:h,parentNode:p,nextSibling:_,setScopeId:A=tn,insertStaticContent:V}=t,L=(T,S,k,F=null,O=null,x=null,q=void 0,$=null,U=!!S.dynamicChildren)=>{if(T===S)return;T&&!Or(T,S)&&(F=Dn(T),It(T,O,x,!0),T=null),S.patchFlag===-2&&(U=!1,S.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:z}=S;switch(M){case Va:B(T,S,k,F);break;case yt:H(T,S,k,F);break;case Sc:T==null&&Q(S,k,F,q);break;case Le:E(T,S,k,F,O,x,q,$,U);break;default:z&1?oe(T,S,k,F,O,x,q,$,U):z&6?g(T,S,k,F,O,x,q,$,U):(z&64||z&128)&&M.process(T,S,k,F,O,x,q,$,U,wr)}ee!=null&&O?gi(ee,T&&T.ref,x,S||T,!S):ee==null&&T&&T.ref!=null&&gi(T.ref,null,x,T,!0)},B=(T,S,k,F)=>{if(T==null)r(S.el=c(S.children),k,F);else{const O=S.el=T.el;S.children!==T.children&&f(O,S.children)}},H=(T,S,k,F)=>{T==null?r(S.el=l(S.children||""),k,F):S.el=T.el},Q=(T,S,k,F)=>{[T.el,T.anchor]=V(T.children,S,k,F,T.el,T.anchor)},Z=({el:T,anchor:S},k,F)=>{let O;for(;T&&T!==S;)O=_(T),r(T,k,F),T=O;r(S,k,F)},G=({el:T,anchor:S})=>{let k;for(;T&&T!==S;)k=_(T),s(T),T=k;s(S)},oe=(T,S,k,F,O,x,q,$,U)=>{if(S.type==="svg"?q="svg":S.type==="math"&&(q="mathml"),T==null)de(S,k,F,O,x,q,$,U);else{const M=T.el&&T.el._isVueCE?T.el:null;try{M&&M._beginPatch(),y(T,S,O,x,q,$,U)}finally{M&&M._endPatch()}}},de=(T,S,k,F,O,x,q,$)=>{let U,M;const{props:ee,shapeFlag:z,transition:J,dirs:te}=T;if(U=T.el=o(T.type,x,ee&&ee.is,ee),z&8?h(U,T.children):z&16&&v(T.children,U,null,F,O,bc(T,x),q,$),te&&Pr(T,null,F,"created"),b(U,T,T.scopeId,q,F),ee){for(const be in ee)be!=="value"&&!di(be)&&i(U,be,null,ee[be],x,F);"value"in ee&&i(U,"value",null,ee.value,x),(M=ee.onVnodeBeforeMount)&&Yt(M,F,T)}te&&Pr(T,null,F,"beforeMount");const pe=Gv(O,J);pe&&J.beforeEnter(U),r(U,S,k),((M=ee&&ee.onVnodeMounted)||pe||te)&&St(()=>{M&&Yt(M,F,T),pe&&J.enter(U),te&&Pr(T,null,F,"mounted")},O)},b=(T,S,k,F,O)=>{if(k&&A(T,k),F)for(let x=0;x<F.length;x++)A(T,F[x]);if(O){let x=O.subTree;if(S===x||Xp(x.type)&&(x.ssContent===S||x.ssFallback===S)){const q=O.vnode;b(T,q,q.scopeId,q.slotScopeIds,O.parent)}}},v=(T,S,k,F,O,x,q,$,U=0)=>{for(let M=U;M<T.length;M++){const ee=T[M]=$?Hn(T[M]):en(T[M]);L(null,ee,S,k,F,O,x,q,$)}},y=(T,S,k,F,O,x,q)=>{const $=S.el=T.el;let{patchFlag:U,dynamicChildren:M,dirs:ee}=S;U|=T.patchFlag&16;const z=T.props||Ce,J=S.props||Ce;let te;if(k&&kr(k,!1),(te=J.onVnodeBeforeUpdate)&&Yt(te,k,S,T),ee&&Pr(S,T,k,"beforeUpdate"),k&&kr(k,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&h($,""),M?w(T.dynamicChildren,M,$,k,F,bc(S,O),x):q||ve(T,S,$,null,k,F,bc(S,O),x,!1),U>0){if(U&16)I($,z,J,k,O);else if(U&2&&z.class!==J.class&&i($,"class",null,J.class,O),U&4&&i($,"style",z.style,J.style,O),U&8){const pe=S.dynamicProps;for(let be=0;be<pe.length;be++){const Te=pe[be],at=z[Te],ct=J[Te];(ct!==at||Te==="value")&&i($,Te,at,ct,O,k)}}U&1&&T.children!==S.children&&h($,S.children)}else!q&&M==null&&I($,z,J,k,O);((te=J.onVnodeUpdated)||ee)&&St(()=>{te&&Yt(te,k,S,T),ee&&Pr(S,T,k,"updated")},F)},w=(T,S,k,F,O,x,q)=>{for(let $=0;$<S.length;$++){const U=T[$],M=S[$],ee=U.el&&(U.type===Le||!Or(U,M)||U.shapeFlag&198)?p(U.el):k;L(U,M,ee,null,F,O,x,q,!0)}},I=(T,S,k,F,O)=>{if(S!==k){if(S!==Ce)for(const x in S)!di(x)&&!(x in k)&&i(T,x,S[x],null,O,F);for(const x in k){if(di(x))continue;const q=k[x],$=S[x];q!==$&&x!=="value"&&i(T,x,$,q,O,F)}"value"in k&&i(T,"value",S.value,k.value,O)}},E=(T,S,k,F,O,x,q,$,U)=>{const M=S.el=T?T.el:c(""),ee=S.anchor=T?T.anchor:c("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:te}=S;te&&($=$?$.concat(te):te),T==null?(r(M,k,F),r(ee,k,F),v(S.children||[],k,ee,O,x,q,$,U)):z>0&&z&64&&J&&T.dynamicChildren&&T.dynamicChildren.length===J.length?(w(T.dynamicChildren,J,k,O,x,q,$),(S.key!=null||O&&S===O.subTree)&&Qp(T,S,!0)):ve(T,S,k,ee,O,x,q,$,U)},g=(T,S,k,F,O,x,q,$,U)=>{S.slotScopeIds=$,T==null?S.shapeFlag&512?O.ctx.activate(S,k,F,q,U):Y(S,k,F,O,x,q,U):xe(T,S,U)},Y=(T,S,k,F,O,x,q)=>{const $=T.component=rE(T,F,O);if(Ca(T)&&($.ctx.renderer=wr),sE($,!1,q),$.asyncDep){if(O&&O.registerDep($,fe,q),!T.el){const U=$.subTree=Me(yt);H(null,U,S,k),T.placeholder=U.el}}else fe($,T,S,k,O,x,q)},xe=(T,S,k)=>{const F=S.component=T.component;if(Fv(T,S,k))if(F.asyncDep&&!F.asyncResolved){Se(F,S,k);return}else F.next=S,F.update();else S.el=T.el,F.vnode=S},fe=(T,S,k,F,O,x,q)=>{const $=()=>{if(T.isMounted){let{next:z,bu:J,u:te,parent:pe,vnode:be}=T;{const At=Yp(T);if(At){z&&(z.el=be.el,Se(T,z,q)),At.asyncDep.then(()=>{T.isUnmounted||$()});return}}let Te=z,at;kr(T,!1),z?(z.el=be.el,Se(T,z,q)):z=be,J&&Po(J),(at=z.props&&z.props.onVnodeBeforeUpdate)&&Yt(at,pe,z,be),kr(T,!0);const ct=jh(T),wt=T.subTree;T.subTree=ct,L(wt,ct,p(wt.el),Dn(wt),T,O,x),z.el=ct.el,Te===null&&Uv(T,ct.el),te&&St(te,O),(at=z.props&&z.props.onVnodeUpdated)&&St(()=>Yt(at,pe,z,be),O)}else{let z;const{el:J,props:te}=S,{bm:pe,m:be,parent:Te,root:at,type:ct}=T,wt=_i(S);kr(T,!1),pe&&Po(pe),!wt&&(z=te&&te.onVnodeBeforeMount)&&Yt(z,Te,S),kr(T,!0);{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ct);const At=T.subTree=jh(T);L(null,At,k,F,T,O,x),S.el=At.el}if(be&&St(be,O),!wt&&(z=te&&te.onVnodeMounted)){const At=S;St(()=>Yt(z,Te,At),O)}(S.shapeFlag&256||Te&&_i(Te.vnode)&&Te.vnode.shapeFlag&256)&&T.a&&St(T.a,O),T.isMounted=!0,S=k=F=null}};T.scope.on();const U=T.effect=new np($);T.scope.off();const M=T.update=U.run.bind(U),ee=T.job=U.runIfDirty.bind(U);ee.i=T,ee.id=T.uid,U.scheduler=()=>Hl(ee),kr(T,!0),M()},Se=(T,S,k)=>{S.component=T;const F=T.vnode.props;T.vnode=S,T.next=null,Bv(T,S.props,F,k),zv(T,S.children,k),wn(),Oh(T),An()},ve=(T,S,k,F,O,x,q,$,U=!1)=>{const M=T&&T.children,ee=T?T.shapeFlag:0,z=S.children,{patchFlag:J,shapeFlag:te}=S;if(J>0){if(J&128){Xr(M,z,k,F,O,x,q,$,U);return}else if(J&256){kt(M,z,k,F,O,x,q,$,U);return}}te&8?(ee&16&&un(M,O,x),z!==M&&h(k,z)):ee&16?te&16?Xr(M,z,k,F,O,x,q,$,U):un(M,O,x,!0):(ee&8&&h(k,""),te&16&&v(z,k,F,O,x,q,$,U))},kt=(T,S,k,F,O,x,q,$,U)=>{T=T||fs,S=S||fs;const M=T.length,ee=S.length,z=Math.min(M,ee);let J;for(J=0;J<z;J++){const te=S[J]=U?Hn(S[J]):en(S[J]);L(T[J],te,k,null,O,x,q,$,U)}M>ee?un(T,O,x,!0,!1,z):v(S,k,F,O,x,q,$,U,z)},Xr=(T,S,k,F,O,x,q,$,U)=>{let M=0;const ee=S.length;let z=T.length-1,J=ee-1;for(;M<=z&&M<=J;){const te=T[M],pe=S[M]=U?Hn(S[M]):en(S[M]);if(Or(te,pe))L(te,pe,k,null,O,x,q,$,U);else break;M++}for(;M<=z&&M<=J;){const te=T[z],pe=S[J]=U?Hn(S[J]):en(S[J]);if(Or(te,pe))L(te,pe,k,null,O,x,q,$,U);else break;z--,J--}if(M>z){if(M<=J){const te=J+1,pe=te<ee?S[te].el:F;for(;M<=J;)L(null,S[M]=U?Hn(S[M]):en(S[M]),k,pe,O,x,q,$,U),M++}}else if(M>J)for(;M<=z;)It(T[M],O,x,!0),M++;else{const te=M,pe=M,be=new Map;for(M=pe;M<=J;M++){const nt=S[M]=U?Hn(S[M]):en(S[M]);nt.key!=null&&be.set(nt.key,M)}let Te,at=0;const ct=J-pe+1;let wt=!1,At=0;const Ut=new Array(ct);for(M=0;M<ct;M++)Ut[M]=0;for(M=te;M<=z;M++){const nt=T[M];if(at>=ct){It(nt,O,x,!0);continue}let Xe;if(nt.key!=null)Xe=be.get(nt.key);else for(Te=pe;Te<=J;Te++)if(Ut[Te-pe]===0&&Or(nt,S[Te])){Xe=Te;break}Xe===void 0?It(nt,O,x,!0):(Ut[Xe-pe]=M+1,Xe>=At?At=Xe:wt=!0,L(nt,S[Xe],k,null,O,x,q,$,U),at++)}const es=wt?Qv(Ut):fs;for(Te=es.length-1,M=ct-1;M>=0;M--){const nt=pe+M,Xe=S[nt],js=S[nt+1],Ar=nt+1<ee?js.el||Jp(js):F;Ut[M]===0?L(null,Xe,k,Ar,O,x,q,$,U):wt&&(Te<0||M!==es[Te]?Kt(Xe,k,Ar,2):Te--)}}},Kt=(T,S,k,F,O=null)=>{const{el:x,type:q,transition:$,children:U,shapeFlag:M}=T;if(M&6){Kt(T.component.subTree,S,k,F);return}if(M&128){T.suspense.move(S,k,F);return}if(M&64){q.move(T,S,k,wr);return}if(q===Le){r(x,S,k);for(let z=0;z<U.length;z++)Kt(U[z],S,k,F);r(T.anchor,S,k);return}if(q===Sc){Z(T,S,k);return}if(F!==2&&M&1&&$)if(F===0)$.beforeEnter(x),r(x,S,k),St(()=>$.enter(x),O);else{const{leave:z,delayLeave:J,afterLeave:te}=$,pe=()=>{T.ctx.isUnmounted?s(x):r(x,S,k)},be=()=>{x._isLeaving&&x[dn](!0),z(x,()=>{pe(),te&&te()})};J?J(x,pe,be):be()}else r(x,S,k)},It=(T,S,k,F=!1,O=!1)=>{const{type:x,props:q,ref:$,children:U,dynamicChildren:M,shapeFlag:ee,patchFlag:z,dirs:J,cacheIndex:te}=T;if(z===-2&&(O=!1),$!=null&&(wn(),gi($,null,k,T,!0),An()),te!=null&&(S.renderCache[te]=void 0),ee&256){S.ctx.deactivate(T);return}const pe=ee&1&&J,be=!_i(T);let Te;if(be&&(Te=q&&q.onVnodeBeforeUnmount)&&Yt(Te,S,T),ee&6)$s(T.component,k,F);else{if(ee&128){T.suspense.unmount(k,F);return}pe&&Pr(T,null,S,"beforeUnmount"),ee&64?T.type.remove(T,S,k,wr,F):M&&!M.hasOnce&&(x!==Le||z>0&&z&64)?un(M,S,k,!1,!0):(x===Le&&z&384||!O&&ee&16)&&un(U,S,k),F&&Us(T)}(be&&(Te=q&&q.onVnodeUnmounted)||pe)&&St(()=>{Te&&Yt(Te,S,T),pe&&Pr(T,null,S,"unmounted")},k)},Us=T=>{const{type:S,el:k,anchor:F,transition:O}=T;if(S===Le){Zr(k,F);return}if(S===Sc){G(T);return}const x=()=>{s(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(T.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:$}=O,U=()=>q(k,x);$?$(T.el,x,U):U()}else x()},Zr=(T,S)=>{let k;for(;T!==S;)k=_(T),s(T),T=k;s(S)},$s=(T,S,k)=>{const{bum:F,scope:O,job:x,subTree:q,um:$,m:U,a:M}=T;zh(U),zh(M),F&&Po(F),O.stop(),x&&(x.flags|=8,It(q,T,S,k)),$&&St($,S),St(()=>{T.isUnmounted=!0},S)},un=(T,S,k,F=!1,O=!1,x=0)=>{for(let q=x;q<T.length;q++)It(T[q],S,k,F,O)},Dn=T=>{if(T.shapeFlag&6)return Dn(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=_(T.anchor||T.el),k=S&&S[hv];return k?_(k):S};let Ir=!1;const Bs=(T,S,k)=>{let F;T==null?S._vnode&&(It(S._vnode,null,null,!0),F=S._vnode.component):L(S._vnode||null,T,S,null,null,null,k),S._vnode=T,Ir||(Ir=!0,Oh(F),vp(),Ir=!1)},wr={p:L,um:It,m:Kt,r:Us,mt:Y,mc:v,pc:ve,pbc:w,n:Dn,o:t};return{render:Bs,hydrate:void 0,createApp:Dv(Bs)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Hn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qp(o,c)),c.type===Va&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(t.type===Le?1:0)),c.type===yt&&!c.el&&(c.el=o.el)}}function Qv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<f?i=c+1:o=c;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Yp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yp(e)}function zh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Jp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Jp(e.subTree):null}const Xp=t=>t.__isSuspense;function Yv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):ov(t)}const Le=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Sc=Symbol.for("v-stc"),vi=[];let Ct=null;function ne(t=!1){vi.push(Ct=t?null:[])}function Jv(){vi.pop(),Ct=vi[vi.length-1]||null}let Pi=1;function Jo(t,e=!1){Pi+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function Zp(t){return t.dynamicChildren=Pi>0?Ct||fs:null,Jv(),Pi>0&&Ct&&Ct.push(t),t}function me(t,e,n,r,s,i){return Zp(C(t,e,n,r,s,i,!0))}function Ot(t,e,n,r,s){return Zp(Me(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function Or(t,e){return t.type===e.type&&t.key===e.key}const em=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||it(t)||ue(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&em(e),ref:e&&Vo(e),scopeId:Tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return c?(Yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Pi>0&&!o&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const Me=Xv;function Xv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Mp)&&(t=yt),Xo(t)){const c=cr(t,e,!0);return n&&Yl(c,n),Pi>0&&!i&&Ct&&(c.shapeFlag&6?Ct[Ct.indexOf(t)]=c:Ct.push(c)),c.patchFlag=-2,c}if(lE(t)&&(t=t.__vccOpts),e){e=Zv(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=Qe(c)),De(l)&&(ql(l)&&!ie(l)&&(l=tt({},l)),e.style=ji(l))}const o=je(t)?1:Xp(t)?128:Ap(t)?64:De(t)?4:ue(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Zv(t){return t?ql(t)||qp(t)?tt({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,f=e?eE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&em(f),ref:e&&e.ref?n&&i?ie(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&$r(h,l.clone(h)),h}function Ql(t=" ",e=0){return Me(Va,null,t,e)}function Yn(t="",e=!1){return e?(ne(),Ot(yt,null,t)):Me(yt,null,t)}function en(t){return t==null||typeof t=="boolean"?Me(yt):ie(t)?Me(Le,null,t.slice()):Xo(t)?Hn(t):Me(Va,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qp(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[Ql(e)]):n=8);t.children=e,t.shapeFlag|=n}function eE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qe([e.class,r.class]));else if(s==="style")e.style=ji([e.style,r.style]);else if(Ea(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){Ht(t,e,7,[n,r])}const tE=Up();let nE=0;function rE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tE,i={uid:nE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Py(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zp(r,s),emitsOptions:$p(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ov.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Jl=()=>dt||Rt;let Zo,Zc;{const t=Aa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Zc=e("__VUE_SSR_SETTERS__",n=>ki=n)}const Hi=t=>{const e=dt;return Zo(t),t.scope.on(),()=>{t.scope.off(),Zo(e)}},Wh=()=>{dt&&dt.scope.off(),Zo(null)};function tm(t){return t.vnode.shapeFlag&4}let ki=!1;function sE(t,e=!1,n=!1){e&&Zc(e);const{props:r,children:s}=t.vnode,i=tm(t);$v(t,r,i,e),Hv(t,s,n||e);const o=i?iE(t,e):void 0;return e&&Zc(!1),o}function iE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bv);const{setup:r}=n;if(r){wn();const s=t.setupContext=r.length>1?aE(t):null,i=Hi(t),o=qi(r,t,0,[t.props,s]),c=Qd(o);if(An(),i(),(c||t.sp)&&!_i(t)&&kp(t),c){if(o.then(Wh,Wh),e)return o.then(l=>{Kh(t,l)}).catch(l=>{Ra(l,t,0)});t.asyncDep=o}else Kh(t,o)}else nm(t)}function Kh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=gp(e)),nm(t)}function nm(t,e,n){const r=t.type;t.render||(t.render=r.render||tn);{const s=Hi(t);wn();try{Sv(t)}finally{An(),s()}}}const oE={get(t,e){return ht(t,"get",""),t[e]}};function aE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,oE),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gp(Yy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yi)return yi[n](t)},has(e,n){return n in e||n in yi}})):t.proxy}function cE(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function lE(t){return ue(t)&&"__vccOpts"in t}const En=(t,e)=>tv(t,e,ki);function $e(t,e,n){try{Jo(-1);const r=arguments.length;return r===2?De(e)&&!ie(e)?Xo(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xo(n)&&(n=[n]),Me(t,e,n))}finally{Jo(1)}}const uE="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const Gh=typeof window<"u"&&window.trustedTypes;if(Gh)try{el=Gh.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=el?t=>el.createHTML(t):t=>t,hE="http://www.w3.org/2000/svg",fE="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Qh=fn&&fn.createElement("template"),dE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(hE,t):e==="mathml"?fn.createElementNS(fE,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Qh.innerHTML=rm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Qh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Un="transition",si="animation",As=Symbol("_vtc"),sm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},im=tt({},Sp,sm),pE=t=>(t.displayName="Transition",t.props=im,t),mE=pE((t,{slots:e})=>$e(dv,om(t),e)),Vr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yh=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function om(t){const e={};for(const E in t)E in sm||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:h=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,V=gE(s),L=V&&V[0],B=V&&V[1],{onBeforeEnter:H,onEnter:Q,onEnterCancelled:Z,onLeave:G,onLeaveCancelled:oe,onBeforeAppear:de=H,onAppear:b=Q,onAppearCancelled:v=Z}=e,y=(E,g,Y,xe)=>{E._enterCancelled=xe,Bn(E,g?h:c),Bn(E,g?f:o),Y&&Y()},w=(E,g)=>{E._isLeaving=!1,Bn(E,p),Bn(E,A),Bn(E,_),g&&g()},I=E=>(g,Y)=>{const xe=E?b:Q,fe=()=>y(g,E,Y);Vr(xe,[g,fe]),Jh(()=>{Bn(g,E?l:i),Jt(g,E?h:c),Yh(xe)||Xh(g,r,L,fe)})};return tt(e,{onBeforeEnter(E){Vr(H,[E]),Jt(E,i),Jt(E,o)},onBeforeAppear(E){Vr(de,[E]),Jt(E,l),Jt(E,f)},onEnter:I(!1),onAppear:I(!0),onLeave(E,g){E._isLeaving=!0;const Y=()=>w(E,g);Jt(E,p),E._enterCancelled?(Jt(E,_),tl(E)):(tl(E),Jt(E,_)),Jh(()=>{E._isLeaving&&(Bn(E,p),Jt(E,A),Yh(G)||Xh(E,r,B,Y))}),Vr(G,[E,Y])},onEnterCancelled(E){y(E,!1,void 0,!0),Vr(Z,[E])},onAppearCancelled(E){y(E,!0,void 0,!0),Vr(v,[E])},onLeaveCancelled(E){w(E),Vr(oe,[E])}})}function gE(t){if(t==null)return null;if(De(t))return[Rc(t.enter),Rc(t.leave)];{const e=Rc(t);return[e,e]}}function Rc(t){return Iy(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[As]||(t[As]=new Set)).add(e)}function Bn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[As];n&&(n.delete(e),n.size||(t[As]=void 0))}function Jh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _E=0;function Xh(t,e,n,r){const s=t._endId=++_E,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=am(t,e);if(!o)return r();const f=o+"end";let h=0;const p=()=>{t.removeEventListener(f,_),i()},_=A=>{A.target===t&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},c+1),t.addEventListener(f,_)}function am(t,e){const n=window.getComputedStyle(t),r=V=>(n[V]||"").split(", "),s=r(`${Un}Delay`),i=r(`${Un}Duration`),o=Zh(s,i),c=r(`${si}Delay`),l=r(`${si}Duration`),f=Zh(c,l);let h=null,p=0,_=0;e===Un?o>0&&(h=Un,p=o,_=i.length):e===si?f>0&&(h=si,p=f,_=l.length):(p=Math.max(o,f),h=p>0?o>f?Un:si:null,_=h?h===Un?i.length:l.length:0);const A=h===Un&&/\b(?:transform|all)(?:,|$)/.test(r(`${Un}Property`).toString());return{type:h,timeout:p,propCount:_,hasTransform:A}}function Zh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ef(n)+ef(t[r])))}function ef(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tl(t){return(t?t.ownerDocument:document).body.offsetHeight}function yE(t,e,n){const r=t[As];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tf=Symbol("_vod"),vE=Symbol("_vsh"),EE=Symbol(""),TE=/(?:^|;)\s*display\s*:/;function IE(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Do(r,c,"")}else for(const o in e)n[o]==null&&Do(r,o,"");for(const o in n)o==="display"&&(i=!0),Do(r,o,n[o])}else if(s){if(e!==n){const o=r[EE];o&&(n+=";"+o),r.cssText=n,i=TE.test(n)}}else e&&t.removeAttribute("style");tf in t&&(t[tf]=i?r.display:"",t[vE]&&(r.display="none"))}const nf=/\s*!important$/;function Do(t,e,n){if(ie(n))n.forEach(r=>Do(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wE(t,e);nf.test(n)?t.setProperty(_r(r),n.replace(nf,""),"important"):t[r]=n}}const rf=["Webkit","Moz","ms"],Cc={};function wE(t,e){const n=Cc[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return Cc[e]=r;r=wa(r);for(let s=0;s<rf.length;s++){const i=rf[s]+r;if(i in t)return Cc[e]=i}return e}const sf="http://www.w3.org/1999/xlink";function of(t,e,n,r,s,i=Cy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sf,e.slice(6,e.length)):t.setAttributeNS(sf,e,n):n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":gr(n)?String(n):n)}function af(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function os(t,e,n,r){t.addEventListener(e,n,r)}function AE(t,e,n,r){t.removeEventListener(e,n,r)}const cf=Symbol("_vei");function bE(t,e,n,r,s=null){const i=t[cf]||(t[cf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=SE(e);if(r){const f=i[e]=PE(r,s);os(t,c,f,l)}else o&&(AE(t,c,o,l),i[e]=void 0)}}const lf=/(?:Once|Passive|Capture)$/;function SE(t){let e;if(lf.test(t)){e={};let r;for(;r=t.match(lf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Pc=0;const RE=Promise.resolve(),CE=()=>Pc||(RE.then(()=>Pc=0),Pc=Date.now());function PE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(kE(r,n.value),e,5,[r])};return n.value=t,n.attached=CE(),n}function kE(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const uf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,VE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yE(t,r,o):e==="style"?IE(t,n,r):Ea(e)?Nl(e)||bE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DE(t,e,r,o))?(af(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&of(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?af(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),of(t,e,r,o))};function DE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&uf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uf(e)&&je(n)?!1:e in t}const cm=new WeakMap,lm=new WeakMap,ea=Symbol("_moveCb"),hf=Symbol("_enterCb"),NE=t=>(delete t.props.mode,t),OE=NE({name:"TransitionGroup",props:tt({},im,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Jl(),r=bp();let s,i;return Np(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!UE(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(ME),s.forEach(LE);const c=s.filter(FE);tl(n.vnode.el),c.forEach(l=>{const f=l.el,h=f.style;Jt(f,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=f[ea]=_=>{_&&_.target!==f||(!_||_.propertyName.endsWith("transform"))&&(f.removeEventListener("transitionend",p),f[ea]=null,Bn(f,o))};f.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ie(t),c=om(o);let l=o.tag||Le;if(s=[],i)for(let f=0;f<i.length;f++){const h=i[f];h.el&&h.el instanceof Element&&(s.push(h),$r(h,Ci(h,c,r,n)),cm.set(h,{left:h.el.offsetLeft,top:h.el.offsetTop}))}i=e.default?Wl(e.default()):[];for(let f=0;f<i.length;f++){const h=i[f];h.key!=null&&$r(h,Ci(h,c,r,n))}return Me(l,null,i)}}}),xE=OE;function ME(t){const e=t.el;e[ea]&&e[ea](),e[hf]&&e[hf]()}function LE(t){lm.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function FE(t){const e=cm.get(t),n=lm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function UE(t,e,n){const r=t.cloneNode(),s=t[As];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=am(r);return i.removeChild(r),o}const ff=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Po(e,n):e};function $E(t){t.target.composing=!0}function df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kc=Symbol("_assign");function pf(t,e,n){return e&&(t=t.trim()),n&&(t=Ml(t)),t}const Tn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[kc]=ff(s);const i=r||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{o.target.composing||t[kc](pf(t.value,n,i))}),(n||i)&&os(t,"change",()=>{t.value=pf(t.value,n,i)}),e||(os(t,"compositionstart",$E),os(t,"compositionend",df),os(t,"change",df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[kc]=ff(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ml(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},BE=["ctrl","shift","alt","meta"],jE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BE.some(n=>t[`${n}Key`]&&!e.includes(n))},Jn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=jE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},qE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zn=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=_r(s.key);if(e.some(o=>o===i||qE[o]===i))return t(s)})},HE=tt({patchProp:VE},dE);let mf;function zE(){return mf||(mf=Wv(HE))}const WE=(...t)=>{const e=zE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=GE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,KE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function GE(t){return je(t)?document.querySelector(t):t}const QE=()=>{};var gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,f=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|f>>6,A=f&63;l||(A=64,o||(_=64)),r.push(n[h],n[p],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||f==null||p==null)throw new JE;const _=i<<2|c>>4;if(r.push(_),f!==64){const A=c<<4&240|f>>2;if(r.push(A),p!==64){const V=f<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XE=function(t){const e=um(t);return hm.encodeByteArray(e,!0)},ta=function(t){return XE(t).replace(/\./g,"")},fm=function(t){try{return hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=()=>ZE().__FIREBASE_DEFAULTS__,tT=()=>{if(typeof process>"u"||typeof gf>"u")return;const t=gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fm(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return QE()||eT()||tT()||nT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dm=t=>{var e,n;return(n=(e=Na())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rT=t=>{const e=dm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pm=()=>{var t;return(t=Na())==null?void 0:t.config},mm=t=>{var e;return(e=Na())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function aT(){var e;const t=(e=Na())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hT(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fT(){return!aT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function pT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mT,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,c,r)}}function gT(t,e){return t.replace(_T,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _T=/\{\$([^}]+)}/g;function yT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_f(i)&&_f(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vT(t,e){const n=new ET(t,e);return n.subscribe.bind(n)}class ET{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vc),s.error===void 0&&(s.error=Vc),s.complete===void 0&&(s.complete=Vc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gm(t){return(await fetch(t,{credentials:"include"})).ok}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AT(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wT(t){return t===Nr?void 0:t}function AT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const ST={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},RT=ge.INFO,CT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},PT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ST[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const kT=(t,e)=>e.some(n=>t instanceof n);let yf,vf;function VT(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,nl=new WeakMap,ym=new WeakMap,Dc=new WeakMap,Zl=new WeakMap;function NT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function OT(t){if(nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nl.set(t,e)}let rl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xT(t){rl=t(rl)}function MT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return ym.set(r,e.sort?e.sort():[e]),nr(r)}:DT().includes(t)?function(...e){return t.apply(Nc(this),e),nr(_m.get(this))}:function(...e){return nr(t.apply(Nc(this),e))}}function LT(t){return typeof t=="function"?MT(t):(t instanceof IDBTransaction&&OT(t),kT(t,VT())?new Proxy(t,rl):t)}function nr(t){if(t instanceof IDBRequest)return NT(t);if(Dc.has(t))return Dc.get(t);const e=LT(t);return e!==t&&(Dc.set(t,e),Zl.set(e,t)),e}const Nc=t=>Zl.get(t);function FT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const UT=["get","getKey","getAll","getAllKeys","count"],$T=["put","add","delete","clear"],Oc=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&l.done]))[0]};return Oc.set(e,i),i}xT(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",Tf="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Xl("@firebase/app"),qT="@firebase/app-compat",HT="@firebase/analytics-compat",zT="@firebase/analytics",WT="@firebase/app-check-compat",KT="@firebase/app-check",GT="@firebase/auth",QT="@firebase/auth-compat",YT="@firebase/database",JT="@firebase/data-connect",XT="@firebase/database-compat",ZT="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",rI="@firebase/messaging",sI="@firebase/messaging-compat",iI="@firebase/performance",oI="@firebase/performance-compat",aI="@firebase/remote-config",cI="@firebase/remote-config-compat",lI="@firebase/storage",uI="@firebase/storage-compat",hI="@firebase/firestore",fI="@firebase/ai",dI="@firebase/firestore-compat",pI="firebase",mI="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="[DEFAULT]",gI={[sl]:"fire-core",[qT]:"fire-core-compat",[zT]:"fire-analytics",[HT]:"fire-analytics-compat",[KT]:"fire-app-check",[WT]:"fire-app-check-compat",[GT]:"fire-auth",[QT]:"fire-auth-compat",[YT]:"fire-rtdb",[JT]:"fire-data-connect",[XT]:"fire-rtdb-compat",[ZT]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[rI]:"fire-fcm",[sI]:"fire-fcm-compat",[iI]:"fire-perf",[oI]:"fire-perf-compat",[aI]:"fire-rc",[cI]:"fire-rc-compat",[lI]:"fire-gcs",[uI]:"fire-gcs-compat",[hI]:"fire-fst",[dI]:"fire-fst-compat",[fI]:"fire-vertex","fire-js":"fire-js",[pI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map,_I=new Map,ol=new Map;function If(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(ol.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of na.values())If(n,t);for(const n of _I.values())If(n,t);return!0}function eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new zi("app","Firebase",yI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=mI;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:il,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=pm()),!n)throw rr.create("no-options");const i=na.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new bT(s);for(const l of ol.values())o.addComponent(l);const c=new vI(n,r,o);return na.set(s,c),c}function Em(t=il){const e=na.get(t);if(!e&&t===il&&pm())return vm();if(!e)throw rr.create("no-app",{appName:t});return e}function sr(t,e,n){let r=gI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(o.join(" "));return}bs(new jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="firebase-heartbeat-database",TI=1,Vi="firebase-heartbeat-store";let xc=null;function Tm(){return xc||(xc=FT(EI,TI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vi)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),xc}async function II(t){try{const n=(await Tm()).transaction(Vi),r=await n.objectStore(Vi).get(Im(t));return await n.done,r}catch(e){if(e instanceof Vn)Sn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function wf(t,e){try{const r=(await Tm()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(e,Im(t)),await r.done}catch(n){if(n instanceof Vn)Sn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function Im(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1024,AI=30;class bI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Af();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>AI){const o=CI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Af(),{heartbeatsToSend:r,unsentEntries:s}=SI(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function Af(){return new Date().toISOString().substring(0,10)}function SI(t,e=wI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?pT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await II(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bf(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}function CI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){bs(new jr("platform-logger",e=>new BT(e),"PRIVATE")),bs(new jr("heartbeat",e=>new bI(e),"PRIVATE")),sr(sl,Tf,t),sr(sl,Tf,"esm2020"),sr("fire-js","")}PI("");var Sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ir,wm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.F=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(w,I,E){for(var g=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)g[Y-2]=arguments[Y];return v.prototype[I].apply(w,g)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);const w=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)w[I]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(I=0;I<16;++I)w[I]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],I=b.g[2];let E=b.g[3],g;g=v+(E^y&(I^E))+w[0]+3614090360&4294967295,v=y+(g<<7&4294967295|g>>>25),g=E+(I^v&(y^I))+w[1]+3905402710&4294967295,E=v+(g<<12&4294967295|g>>>20),g=I+(y^E&(v^y))+w[2]+606105819&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(v^I&(E^v))+w[3]+3250441966&4294967295,y=I+(g<<22&4294967295|g>>>10),g=v+(E^y&(I^E))+w[4]+4118548399&4294967295,v=y+(g<<7&4294967295|g>>>25),g=E+(I^v&(y^I))+w[5]+1200080426&4294967295,E=v+(g<<12&4294967295|g>>>20),g=I+(y^E&(v^y))+w[6]+2821735955&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(v^I&(E^v))+w[7]+4249261313&4294967295,y=I+(g<<22&4294967295|g>>>10),g=v+(E^y&(I^E))+w[8]+1770035416&4294967295,v=y+(g<<7&4294967295|g>>>25),g=E+(I^v&(y^I))+w[9]+2336552879&4294967295,E=v+(g<<12&4294967295|g>>>20),g=I+(y^E&(v^y))+w[10]+4294925233&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(v^I&(E^v))+w[11]+2304563134&4294967295,y=I+(g<<22&4294967295|g>>>10),g=v+(E^y&(I^E))+w[12]+1804603682&4294967295,v=y+(g<<7&4294967295|g>>>25),g=E+(I^v&(y^I))+w[13]+4254626195&4294967295,E=v+(g<<12&4294967295|g>>>20),g=I+(y^E&(v^y))+w[14]+2792965006&4294967295,I=E+(g<<17&4294967295|g>>>15),g=y+(v^I&(E^v))+w[15]+1236535329&4294967295,y=I+(g<<22&4294967295|g>>>10),g=v+(I^E&(y^I))+w[1]+4129170786&4294967295,v=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(v^y))+w[6]+3225465664&4294967295,E=v+(g<<9&4294967295|g>>>23),g=I+(v^y&(E^v))+w[11]+643717713&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^v&(I^E))+w[0]+3921069994&4294967295,y=I+(g<<20&4294967295|g>>>12),g=v+(I^E&(y^I))+w[5]+3593408605&4294967295,v=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(v^y))+w[10]+38016083&4294967295,E=v+(g<<9&4294967295|g>>>23),g=I+(v^y&(E^v))+w[15]+3634488961&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^v&(I^E))+w[4]+3889429448&4294967295,y=I+(g<<20&4294967295|g>>>12),g=v+(I^E&(y^I))+w[9]+568446438&4294967295,v=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(v^y))+w[14]+3275163606&4294967295,E=v+(g<<9&4294967295|g>>>23),g=I+(v^y&(E^v))+w[3]+4107603335&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^v&(I^E))+w[8]+1163531501&4294967295,y=I+(g<<20&4294967295|g>>>12),g=v+(I^E&(y^I))+w[13]+2850285829&4294967295,v=y+(g<<5&4294967295|g>>>27),g=E+(y^I&(v^y))+w[2]+4243563512&4294967295,E=v+(g<<9&4294967295|g>>>23),g=I+(v^y&(E^v))+w[7]+1735328473&4294967295,I=E+(g<<14&4294967295|g>>>18),g=y+(E^v&(I^E))+w[12]+2368359562&4294967295,y=I+(g<<20&4294967295|g>>>12),g=v+(y^I^E)+w[5]+4294588738&4294967295,v=y+(g<<4&4294967295|g>>>28),g=E+(v^y^I)+w[8]+2272392833&4294967295,E=v+(g<<11&4294967295|g>>>21),g=I+(E^v^y)+w[11]+1839030562&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^v)+w[14]+4259657740&4294967295,y=I+(g<<23&4294967295|g>>>9),g=v+(y^I^E)+w[1]+2763975236&4294967295,v=y+(g<<4&4294967295|g>>>28),g=E+(v^y^I)+w[4]+1272893353&4294967295,E=v+(g<<11&4294967295|g>>>21),g=I+(E^v^y)+w[7]+4139469664&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^v)+w[10]+3200236656&4294967295,y=I+(g<<23&4294967295|g>>>9),g=v+(y^I^E)+w[13]+681279174&4294967295,v=y+(g<<4&4294967295|g>>>28),g=E+(v^y^I)+w[0]+3936430074&4294967295,E=v+(g<<11&4294967295|g>>>21),g=I+(E^v^y)+w[3]+3572445317&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^v)+w[6]+76029189&4294967295,y=I+(g<<23&4294967295|g>>>9),g=v+(y^I^E)+w[9]+3654602809&4294967295,v=y+(g<<4&4294967295|g>>>28),g=E+(v^y^I)+w[12]+3873151461&4294967295,E=v+(g<<11&4294967295|g>>>21),g=I+(E^v^y)+w[15]+530742520&4294967295,I=E+(g<<16&4294967295|g>>>16),g=y+(I^E^v)+w[2]+3299628645&4294967295,y=I+(g<<23&4294967295|g>>>9),g=v+(I^(y|~E))+w[0]+4096336452&4294967295,v=y+(g<<6&4294967295|g>>>26),g=E+(y^(v|~I))+w[7]+1126891415&4294967295,E=v+(g<<10&4294967295|g>>>22),g=I+(v^(E|~y))+w[14]+2878612391&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~v))+w[5]+4237533241&4294967295,y=I+(g<<21&4294967295|g>>>11),g=v+(I^(y|~E))+w[12]+1700485571&4294967295,v=y+(g<<6&4294967295|g>>>26),g=E+(y^(v|~I))+w[3]+2399980690&4294967295,E=v+(g<<10&4294967295|g>>>22),g=I+(v^(E|~y))+w[10]+4293915773&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~v))+w[1]+2240044497&4294967295,y=I+(g<<21&4294967295|g>>>11),g=v+(I^(y|~E))+w[8]+1873313359&4294967295,v=y+(g<<6&4294967295|g>>>26),g=E+(y^(v|~I))+w[15]+4264355552&4294967295,E=v+(g<<10&4294967295|g>>>22),g=I+(v^(E|~y))+w[6]+2734768916&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~v))+w[13]+1309151649&4294967295,y=I+(g<<21&4294967295|g>>>11),g=v+(I^(y|~E))+w[4]+4149444226&4294967295,v=y+(g<<6&4294967295|g>>>26),g=E+(y^(v|~I))+w[11]+3174756917&4294967295,E=v+(g<<10&4294967295|g>>>22),g=I+(v^(E|~y))+w[2]+718787259&4294967295,I=E+(g<<15&4294967295|g>>>17),g=y+(E^(I|~v))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+E&4294967295}r.prototype.v=function(b,v){v===void 0&&(v=b.length);const y=v-this.blockSize,w=this.C;let I=this.h,E=0;for(;E<v;){if(I==0)for(;E<=y;)s(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<v;)if(w[I++]=b.charCodeAt(E++),I==this.blockSize){s(this,w),I=0;break}}else for(;E<v;)if(w[I++]=b[E++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=v},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)b[v++]=this.g[y]>>>w&255;return b};function i(b,v){var y=c;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;const y=[];let w=!0;for(let I=b.length-1;I>=0;I--){const E=b[I]|0;w&&E==v||(y[I]=E,w=!1)}this.g=y}var c={};function l(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return B(f(-b));const v=[];let y=1;for(let w=0;b>=y;w++)v[w]=b/y|0,y*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return B(h(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(v,8));let w=p;for(let E=0;E<b.length;E+=8){var I=Math.min(8,b.length-E);const g=parseInt(b.substring(E,E+I),v);I<8?(I=f(Math.pow(v,I)),w=w.j(I).add(f(g))):(w=w.j(y),w=w.add(f(g)))}return w}var p=l(0),_=l(1),A=l(16777216);t=o.prototype,t.m=function(){if(L(this))return-B(this).m();let b=0,v=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);b+=(w>=0?w:4294967296+w)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(V(this))return"0";if(L(this))return"-"+B(this).toString(b);const v=f(Math.pow(b,6));var y=this;let w="";for(;;){const I=G(y,v).g;y=H(y,I.j(v));let E=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=I,V(y))return E+w;for(;E.length<6;)E="0"+E;w=E+w}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function V(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=H(this,b),L(b)?-1:V(b)?0:1};function B(b){const v=b.g.length,y=[];for(let w=0;w<v;w++)y[w]=~b.g[w];return new o(y,~b.h).add(_)}t.abs=function(){return L(this)?B(this):this},t.add=function(b){const v=Math.max(this.g.length,b.g.length),y=[];let w=0;for(let I=0;I<=v;I++){let E=w+(this.i(I)&65535)+(b.i(I)&65535),g=(E>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);w=g>>>16,E&=65535,g&=65535,y[I]=g<<16|E}return new o(y,y[y.length-1]&-2147483648?-1:0)};function H(b,v){return b.add(B(v))}t.j=function(b){if(V(this)||V(b))return p;if(L(this))return L(b)?B(this).j(B(b)):B(B(this).j(b));if(L(b))return B(this.j(B(b)));if(this.l(A)<0&&b.l(A)<0)return f(this.m()*b.m());const v=this.g.length+b.g.length,y=[];for(var w=0;w<2*v;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<b.g.length;I++){const E=this.i(w)>>>16,g=this.i(w)&65535,Y=b.i(I)>>>16,xe=b.i(I)&65535;y[2*w+2*I]+=g*xe,Q(y,2*w+2*I),y[2*w+2*I+1]+=E*xe,Q(y,2*w+2*I+1),y[2*w+2*I+1]+=g*Y,Q(y,2*w+2*I+1),y[2*w+2*I+2]+=E*Y,Q(y,2*w+2*I+2)}for(b=0;b<v;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=v;b<2*v;b++)y[b]=0;return new o(y,0)};function Q(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function Z(b,v){this.g=b,this.h=v}function G(b,v){if(V(v))throw Error("division by zero");if(V(b))return new Z(p,p);if(L(b))return v=G(B(b),v),new Z(B(v.g),B(v.h));if(L(v))return v=G(b,B(v)),new Z(B(v.g),v.h);if(b.g.length>30){if(L(b)||L(v))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=v;w.l(b)<=0;)y=oe(y),w=oe(w);var I=de(y,1),E=de(w,1);for(w=de(w,2),y=de(y,2);!V(w);){var g=E.add(w);g.l(b)<=0&&(I=I.add(y),E=g),w=de(w,1),y=de(y,1)}return v=H(b,I.j(v)),new Z(I,v)}for(I=p;b.l(v)>=0;){for(y=Math.max(1,Math.floor(b.m()/v.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),E=f(y),g=E.j(v);L(g)||g.l(b)>0;)y-=w,E=f(y),g=E.j(v);V(E)&&(E=_),I=I.add(E),b=H(b,g)}return new Z(I,b)}t.B=function(b){return G(this,b).h},t.and=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<v;w++)y[w]=this.i(w)&b.i(w);return new o(y,this.h&b.h)},t.or=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<v;w++)y[w]=this.i(w)|b.i(w);return new o(y,this.h|b.h)},t.xor=function(b){const v=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<v;w++)y[w]=this.i(w)^b.i(w);return new o(y,this.h^b.h)};function oe(b){const v=b.g.length+1,y=[];for(let w=0;w<v;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(y,b.h)}function de(b,v){const y=v>>5;v%=32;const w=b.g.length-y,I=[];for(let E=0;E<w;E++)I[E]=v>0?b.i(E+y)>>>v|b.i(E+y+1)<<32-v:b.i(E+y);return new o(I,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,wm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=h,ir=o}).apply(typeof Sf<"u"?Sf:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Am,li,bm,No,al,Sm,Rm,Cm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function f(a,u,d){return f=l,f.apply(null,arguments)}function h(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,R,P){for(var j=Array(arguments.length-2),he=2;he<arguments.length;he++)j[he-2]=arguments[he];return u.prototype[R].apply(m,j)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function V(a,u){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const P=R.length||0;a.length=d+P;for(let j=0;j<P;j++)a[d+j]=R[j]}else a.push(R)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){o.setTimeout(()=>{throw a},0)}function H(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Q{constructor(){this.h=this.g=null}add(u,d){const m=Z.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new L(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,de=!1,b=new Q,v=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(y)}};function y(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){B(d)}var u=Z;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}de=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function g(a){return/^[\s\xa0]*$/.test(a)}function Y(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Y,I),Y.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(Math.random()*1e6|0),fe=0;function Se(a,u,d,m,R){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=R,this.key=++fe,this.da=this.fa=!1}function ve(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Xr(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Kt(a){const u={};for(const d in a)u[d]=a[d];return u}const It="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Us(a,u){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let P=0;P<It.length;P++)d=It[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Zr(a){this.src=a,this.g={},this.h=0}Zr.prototype.add=function(a,u,d,m,R){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const j=un(a,u,m,R);return j>-1?(u=a[j],d||(u.fa=!1)):(u=new Se(u,this.src,P,!!m,R),u.fa=d,a.push(u)),u};function $s(a,u){const d=u.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,u,void 0),P;(P=R>=0)&&Array.prototype.splice.call(m,R,1),P&&(ve(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function un(a,u,d,m){for(let R=0;R<a.length;++R){const P=a[R];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return R}return-1}var Dn="closure_lm_"+(Math.random()*1e6|0),Ir={};function Bs(a,u,d,m,R){if(Array.isArray(u)){for(let P=0;P<u.length;P++)Bs(a,u[P],d,m,R);return null}return d=q(d),a&&a[xe]?a.J(u,d,c(m)?!!m.capture:!1,R):wr(a,u,d,!1,m,R)}function wr(a,u,d,m,R,P){if(!u)throw Error("Invalid event type");const j=c(R)?!!R.capture:!!R;let he=O(a);if(he||(a[Dn]=he=new Zr(a)),d=he.add(u,d,m,j,P),d.proxy)return d;if(m=ju(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)E||(R=j),R===void 0&&(R=!1),a.addEventListener(u.toString(),m,R);else if(a.attachEvent)a.attachEvent(k(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ju(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function T(a,u,d,m,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)T(a,u[P],d,m,R);else m=c(m)?!!m.capture:!!m,d=q(d),a&&a[xe]?(a=a.i,P=String(u).toString(),P in a.g&&(u=a.g[P],d=un(u,d,m,R),d>-1&&(ve(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[P],a.h--)))):a&&(a=O(a))&&(u=a.g[u.toString()],a=-1,u&&(a=un(u,d,m,R)),(d=a>-1?u[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[xe])$s(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(k(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=O(u))?($s(d,a),d.h==0&&(d.src=null,u[Dn]=null)):ve(a)}}}function k(a){return a in Ir?Ir[a]:Ir[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new Y(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,u)}return a}function O(a){return a=a[Dn],a instanceof Zr?a:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(a){return typeof a=="function"?a:(a[x]||(a[x]=function(u){return a.handleEvent(u)}),a[x])}function $(){w.call(this),this.i=new Zr(this),this.M=this,this.G=null}p($,w),$.prototype[xe]=!0,$.prototype.removeEventListener=function(a,u,d,m){T(this,a,u,d,m)};function U(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var R=u;u=new I(m,a),Us(u,R)}R=!0;let P,j;if(d)for(j=d.length-1;j>=0;j--)P=u.g=d[j],R=M(P,m,!0,u)&&R;if(P=u.g=a,R=M(P,m,!0,u)&&R,R=M(P,m,!1,u)&&R,d)for(j=0;j<d.length;j++)P=u.g=d[j],R=M(P,m,!1,u)&&R}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)ve(d[m]);delete a.g[u],a.h--}}this.G=null},$.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},$.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function M(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let P=0;P<u.length;++P){const j=u[P];if(j&&!j.da&&j.capture==d){const he=j.listener,Ge=j.ha||j.src;j.fa&&$s(a.i,j),R=he.call(Ge,m)!==!1&&R}}return R&&!m.defaultPrevented}function ee(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=f(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function z(a){a.g=ee(()=>{a.g=null,a.i&&(a.i=!1,z(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class J extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(a){w.call(this),this.h=a,this.g={}}p(te,w);var pe=[];function be(a){kt(a.g,function(u,d){this.g.hasOwnProperty(d)&&S(u)},a),a.g={}}te.prototype.N=function(){te.Z.N.call(this),be(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,at=o.JSON.parse,ct=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function wt(){}function At(){}var Ut={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function es(){I.call(this,"d")}p(es,I);function nt(){I.call(this,"c")}p(nt,I);var Xe={},js=null;function Ar(){return js=js||new $}Xe.Ia="serverreachability";function qu(a){I.call(this,Xe.Ia,a)}p(qu,I);function qs(a){const u=Ar();U(u,new qu(u))}Xe.STAT_EVENT="statevent";function Hu(a,u){I.call(this,Xe.STAT_EVENT,a),this.stat=u}p(Hu,I);function mt(a){const u=Ar();U(u,new Hu(u,a))}Xe.Ja="timingevent";function zu(a,u){I.call(this,Xe.Ja,a),this.size=u}p(zu,I);function Hs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function Y_(a,u,d,m,R,P){a.info(function(){if(a.g)if(P){var j="",he=P.split("&");for(let Re=0;Re<he.length;Re++){var Ge=he[Re].split("=");if(Ge.length>1){const Ze=Ge[0];Ge=Ge[1];const Qt=Ze.split("_");j=Qt.length>=2&&Qt[1]=="type"?j+(Ze+"="+Ge+"&"):j+(Ze+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+u+`
`+d+`
`+j})}function J_(a,u,d,m,R,P,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+u+`
`+d+`
`+P+" "+j})}function ts(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Z_(a,d)+(m?" "+m:"")})}function X_(a,u){a.info(function(){return"TIMEOUT: "+u})}zs.prototype.info=function(){};function Z_(a,u){if(!a.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return Te(P)}catch{return u}}var io={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ku;function sc(){}p(sc,wt),sc.prototype.g=function(){return new XMLHttpRequest},Ku=new sc;function Ws(a){return encodeURIComponent(String(a))}function ey(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Nn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new te(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gu}function Gu(){this.i=null,this.g="",this.h=!1}var Qu={},ic={};function oc(a,u,d){a.M=1,a.A=ao(Gt(u)),a.u=d,a.R=!0,Yu(a,null)}function Yu(a,u){a.F=Date.now(),oo(a),a.B=Gt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),lh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Gu,a.g=Rh(a.j,d?u:null,!a.u),a.P>0&&(a.O=new J(f(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(pe[0]=R.toString()),R=pe);for(let P=0;P<R.length;P++){const j=Bs(d,R[P],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.J?Kt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),qs(),Y_(a.i,a.v,a.B,a.l,a.S,a.u)}Nn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Mn(a)==3?u.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const he=Mn(this.g),Ge=this.g.ya(),Re=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||gh(this.g)))){this.K||he!=4||Ge==7||(Ge==8||Re<=0?qs(3):qs(2)),ac(this);var u=this.g.ca();this.X=u;var d=ty(this);if(this.o=u==200,J_(this.i,this.v,this.B,this.l,this.S,he,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(m)){var P=m;break t}}P=null}if(a=P)ts(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cc(this,a);else{this.o=!1,this.m=3,mt(12),br(this),Ks(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<d.length;)if(Ze=ny(this,d),Ze==ic){he==4&&(this.m=4,mt(14),a=!1),ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==Qu){this.m=4,mt(15),ts(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ts(this.i,this.l,Ze,null),cc(this,Ze);if(Ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,mt(16),a=!1),this.o=this.o&&a,!a)ts(this.i,this.l,d,"[Invalid Chunked Response]"),br(this),Ks(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),gc(j),j.P=!0,mt(11))}}else ts(this.i,this.l,d,null),cc(this,d);he==4&&br(this),this.o&&!this.K&&(he==4?wh(this.j,this):(this.o=!1,oo(this)))}else gy(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),br(this),Ks(this)}}}catch{}finally{}};function ty(a){if(!Ju(a))return a.g.la();const u=gh(a.g);if(u==="")return"";let d="";const m=u.length,R=Mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),Ks(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<m;P++)a.h.h=!0,d+=a.h.i.decode(u[P],{stream:!(R&&P==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Ju(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ny(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?ic:(d=Number(u.substring(d,m)),isNaN(d)?Qu:(m+=1,m+d>u.length?ic:(u=u.slice(m,m+d),a.C=m+d,u)))}Nn.prototype.cancel=function(){this.K=!0,br(this)};function oo(a){a.T=Date.now()+a.H,Xu(a,a.H)}function Xu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(f(a.aa,a),u)}function ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(X_(this.i,this.B),this.M!=2&&(qs(),mt(17)),br(this),this.m=2,Ks(this)):Xu(this,this.T-a)};function Ks(a){a.j.I==0||a.K||wh(a.j,a)}function br(a){ac(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,be(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function cc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||lc(d.h,a))){if(!a.L&&lc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)fo(d),uo(d);else break e;mc(d),mt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hs(f(d.Va,d),6e3));th(d.h)<=1&&d.ta&&(d.ta=void 0)}else Rr(d,11)}else if((a.L||d.g==a)&&fo(d),!g(u))for(R=d.Ba.g.parse(u),u=0;u<R.length;u++){let Re=R[u];const Ze=Re[0];if(!(Ze<=d.K))if(d.K=Ze,Re=Re[1],d.I==2)if(Re[0]=="c"){d.M=Re[1],d.ba=Re[2];const Qt=Re[3];Qt!=null&&(d.ka=Qt,d.j.info("VER="+d.ka));const Cr=Re[4];Cr!=null&&(d.za=Cr,d.j.info("SVER="+d.za));const Ln=Re[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(m=1.5*Ln,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Fn=a.g;if(Fn){const mo=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var P=m.h;P.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(uc(P,P.h),P.h=null))}if(m.G){const _c=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(m.wa=_c,Ne(m.J,m.G,_c))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=Sh(m,m.L?m.ba:null,m.W),j.L){nh(m.h,j);var he=j,Ge=m.O;Ge&&(he.H=Ge),he.D&&(ac(he),oo(he)),m.g=j}else Th(m);d.i.length>0&&ho(d)}else Re[0]!="stop"&&Re[0]!="close"||Rr(d,7);else d.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Rr(d,7):pc(d):Re[0]!="noop"&&d.l&&d.l.qa(Re),d.A=0)}}qs(4)}catch{}}var ry=class{constructor(a,u){this.g=a,this.map=u}};function Zu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function eh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function th(a){return a.h?1:a.g?a.g.size:0}function lc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function uc(a,u){a.g?a.g.add(u):a.h=u}function nh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Zu.prototype.cancel=function(){if(this.i=rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return A(a.i)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sy(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let R,P=null;m>=0?(R=a[d].substring(0,m),P=a[d].substring(m+1)):R=a[d],u(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function On(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof On?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Qs(this,a.u),this.h=a.h,hc(this,uh(a.i)),this.m=a.m):a&&(u=String(a).match(sh))?(this.l=!1,Gs(this,u[1]||"",!0),this.o=Ys(u[2]||""),this.g=Ys(u[3]||"",!0),Qs(this,u[4]),this.h=Ys(u[5]||"",!0),hc(this,u[6]||"",!0),this.m=Ys(u[7]||"")):(this.l=!1,this.i=new Xs(null,this.l))}On.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Js(u,ih,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Js(u,ih,!0),"@"),a.push(Ws(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Js(d,d.charAt(0)=="/"?ay:oy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Js(d,ly)),a.join("")},On.prototype.resolve=function(a){const u=Gt(this);let d=!!a.j;d?Gs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)Qs(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=u.h.lastIndexOf("/");R!=-1&&(m=u.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let j=0;j<R.length;){const he=R[j++];he=="."?m&&j==R.length&&P.push(""):he==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&j==R.length&&P.push("")):(P.push(he),m=!0)}m=P.join("/")}else m=R}return d?u.h=m:d=a.i.toString()!=="",d?hc(u,uh(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Gt(a){return new On(a)}function Gs(a,u,d){a.j=d?Ys(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Qs(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function hc(a,u,d){u instanceof Xs?(a.i=u,uy(a.i,a.l)):(d||(u=Js(u,cy)),a.i=new Xs(u,a.l))}function Ne(a,u,d){a.i.set(u,d)}function ao(a){return Ne(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ys(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Js(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,iy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ih=/[#\/\?@]/g,oy=/[#\?:]/g,ay=/[#\?]/g,cy=/[#\?@]/g,ly=/#/g;function Xs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sr(a){a.g||(a.g=new Map,a.h=0,a.i&&sy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,u){Sr(this),this.i=null,a=ns(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function oh(a,u){Sr(a),u=ns(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ah(a,u){return Sr(a),u=ns(a,u),a.g.has(u)}t.forEach=function(a,u){Sr(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(u,R,m,this)},this)},this)};function ch(a,u){Sr(a);let d=[];if(typeof u=="string")ah(a,u)&&(d=d.concat(a.g.get(ns(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Sr(this),this.i=null,a=ns(this,a),ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=ch(this,a),a.length>0?String(a[0]):u):u};function lh(a,u,d){oh(a,u),d.length>0&&(a.i=null,a.g.set(ns(a,u),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const R=Ws(d);d=ch(this,d);for(let P=0;P<d.length;P++){let j=R;d[P]!==""&&(j+="="+Ws(d[P])),a.push(j)}}return this.i=a.join("&")};function uh(a){const u=new Xs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ns(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function uy(a,u){u&&!a.j&&(Sr(a),a.i=null,a.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(oh(this,m),lh(this,R,d))},a)),a.j=u}function hy(a,u){const d=new zs;if(o.Image){const m=new Image;m.onload=h(xn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=h(xn,d,"TestLoadImage: error",!1,u,m),m.onabort=h(xn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=h(xn,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function fy(a,u){const d=new zs,m=new AbortController,R=setTimeout(()=>{m.abort(),xn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(R),P.ok?xn(d,"TestPingServer: ok",!0,u):xn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),xn(d,"TestPingServer: error",!1,u)})}function xn(a,u,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function dy(){this.g=new ct}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(fc,wt),fc.prototype.g=function(){return new co(this.i,this.h)};function co(a,u){$.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(co,$),t=co.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Zs(this):ei(this),this.readyState==3&&hh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Na=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ei(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fh(a){let u="";return kt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function dc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fh(d),typeof a=="string"?d!=null&&Ws(d):Ne(a,u,d))}function Ue(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,$);var py=/^https?$/i,my=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ku.g(),this.g.onreadystatechange=_(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){dh(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(my,u,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of d)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){dh(this,P)}};function dh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ph(a),lo(a)}function ph(a){a.A||(a.A=!0,U(a,"complete"),U(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,U(this,"complete"),U(this,"abort"),lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lo(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mh(this):this.Xa())},t.Xa=function(){mh(this)};function mh(a){if(a.h&&typeof i<"u"){if(a.v&&Mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(U(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=P===0){let j=String(a.D).match(sh)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!py.test(j?j.toLowerCase():"")}d=m}if(d)U(a,"complete"),U(a,"success");else{a.o=6;try{var R=Mn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",ph(a)}}finally{lo(a)}}}}function lo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||U(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),at(u)}};function gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(a){const u={};a=(a.g&&Mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(g(a[m]))continue;var d=ey(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[R]||[];u[R]=P,P.push(d)}Xr(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _h(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ti("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ti("baseRetryDelayMs",5e3,a),this.Za=ti("retryDelaySeedMs",1e4,a),this.Ta=ti("forwardChannelMaxRetries",2,a),this.va=ti("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zu(a&&a.concurrentRequestLimit),this.Ba=new dy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=_h.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){mt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Sh(this,null,this.W),ho(this)};function pc(a){if(yh(a),a.I==3){var u=a.V++,d=Gt(a.J);if(Ne(d,"SID",a.M),Ne(d,"RID",u),Ne(d,"TYPE","terminate"),ni(a,d),u=new Nn(a,a.j,u),u.M=2,u.A=ao(Gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Rh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),oo(u)}bh(a)}function uo(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function yh(a){uo(a),a.v&&(o.clearTimeout(a.v),a.v=null),fo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ho(a){if(!eh(a.h)&&!a.m){a.m=!0;var u=a.Ea;oe||v(),de||(oe(),de=!0),b.add(u,a),a.D=0}}function _y(a,u){return th(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(f(a.Ea,a,u),Ah(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Nn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Kt(P),Us(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Eh(this,R,u),d=Gt(this.J),Ne(d,"RID",a),Ne(d,"CVER",22),this.G&&Ne(d,"X-HTTP-Session-Id",this.G),ni(this,d),P&&(this.R?u="headers="+Ws(fh(P))+"&"+u:this.u&&dc(d,this.u,P)),uc(this.h,R),this.Ra&&Ne(d,"TYPE","init"),this.S?(Ne(d,"$req",u),Ne(d,"SID","null"),R.U=!0,oc(R,d,null)):oc(R,d,u),this.I=2}}else this.I==3&&(a?vh(this,a):this.i.length==0||eh(this.h)||vh(this))};function vh(a,u){var d;u?d=u.l:d=a.V++;const m=Gt(a.J);Ne(m,"SID",a.M),Ne(m,"RID",d),Ne(m,"AID",a.K),ni(a,m),a.u&&a.o&&dc(m,a.u,a.o),d=new Nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Eh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),uc(a.h,d),oc(d,m,u)}function ni(a,u){a.H&&kt(a.H,function(d,m){Ne(u,m,d)}),a.l&&kt({},function(d,m){Ne(u,m,d)})}function Eh(a,u,d){d=Math.min(a.i.length,d);const m=a.l?f(a.l.Ka,a.l,a):null;e:{var R=a.i;let he=-1;for(;;){const Ge=["count="+d];he==-1?d>0?(he=R[0].g,Ge.push("ofs="+he)):he=0:Ge.push("ofs="+he);let Re=!0;for(let Ze=0;Ze<d;Ze++){var P=R[Ze].g;const Qt=R[Ze].map;if(P-=he,P<0)he=Math.max(0,R[Ze].g-100),Re=!1;else try{P="req"+P+"_"||"";try{var j=Qt instanceof Map?Qt:Object.entries(Qt);for(const[Cr,Ln]of j){let Fn=Ln;c(Ln)&&(Fn=Te(Ln)),Ge.push(P+Cr+"="+encodeURIComponent(Fn))}}catch(Cr){throw Ge.push(P+"type="+encodeURIComponent("_badmap")),Cr}}catch{m&&m(Qt)}}if(Re){j=Ge.join("&");break e}}j=void 0}return a=a.i.splice(0,d),u.G=a,j}function Th(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;oe||v(),de||(oe(),de=!0),b.add(u,a),a.A=0}}function mc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(f(a.Da,a),Ah(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ih(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(f(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),uo(this),Ih(this))};function gc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ih(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Gt(a.na);Ne(u,"RID","rpc"),Ne(u,"SID",a.M),Ne(u,"AID",a.K),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ne(u,"TO",a.ia),Ne(u,"TYPE","xmlhttp"),ni(a,u),a.u&&a.o&&dc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ao(Gt(u)),d.u=null,d.R=!0,Yu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,uo(this),mc(this),mt(19))};function fo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wh(a,u){var d=null;if(a.g==u){fo(a),gc(a),a.g=null;var m=2}else if(lc(a.h,u))d=u.G,nh(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var R=a.D;m=Ar(),U(m,new zu(m,d)),ho(a)}else Th(a);else if(R=u.m,R==3||R==0&&u.X>0||!(m==1&&_y(a,u)||m==2&&mc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),R){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Ah(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Rr(a,u){if(a.j.info("Error code "+u),u==2){var d=f(a.bb,a),m=a.Ua;const R=!m;m=new On(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(m,"https"),ao(m),R?hy(m.toString(),d):fy(m.toString(),d)}else mt(2);a.I=0,a.l&&a.l.pa(u),bh(a),yh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function bh(a){if(a.I=0,a.ja=[],a.l){const u=rh(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ja,u),V(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Sh(a,u,d){var m=d instanceof On?Gt(d):new On(d);if(m.g!="")u&&(m.g=u+"."+m.g),Qs(m,m.u);else{var R=o.location;m=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const P=new On(null);m&&Gs(P,m),u&&(P.g=u),R&&Qs(P,R),d&&(P.h=d),m=P}return d=a.G,u=a.wa,d&&u&&Ne(m,d,u),Ne(m,"VER",a.ka),ni(a,m),m}function Rh(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Ue(new fc({ab:d})):new Ue(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ch(){}t=Ch.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function po(){}po.prototype.g=function(a,u){return new bt(a,u)};function bt(a,u){$.call(this),this.g=new _h(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!g(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new rs(this)}p(bt,$),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){pc(this.g)},bt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Te(a),a=d);u.i.push(new ry(u.Ya++,a)),u.I==3&&ho(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,bt.Z.N.call(this)};function Ph(a){es.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Ph,es);function kh(){nt.call(this),this.status=1}p(kh,nt);function rs(a){this.g=a}p(rs,Ch),rs.prototype.ra=function(){U(this.g,"a")},rs.prototype.qa=function(a){U(this.g,new Ph(a))},rs.prototype.pa=function(a){U(this.g,new kh)},rs.prototype.oa=function(){U(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Cm=function(){return new po},Rm=function(){return Ar()},Sm=Xe,al={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,No=io,Wu.COMPLETE="complete",bm=Wu,At.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",$.prototype.listen=$.prototype.J,li=At,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Am=Ue}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="12.12.0";function kI(t){Ns=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Xl("@firebase/firestore");function as(){return qr.logLevel}function K(t,...e){if(qr.logLevel<=ge.DEBUG){const n=e.map(tu);qr.debug(`Firestore (${Ns}): ${t}`,...n)}}function Rn(t,...e){if(qr.logLevel<=ge.ERROR){const n=e.map(tu);qr.error(`Firestore (${Ns}): ${t}`,...n)}}function Hr(t,...e){if(qr.logLevel<=ge.WARN){const n=e.map(tu);qr.warn(`Firestore (${Ns}): ${t}`,...n)}}function tu(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Pm(t,r,n)}function Pm(t,e,n){let r=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Pm(e,s,r)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class DI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NI{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new km(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class OI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class xI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Rf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Rf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Mc(s)===Mc(i)?_e(s,i):Mc(s)?1:-1}return _e(t.length,e.length)}const FI=55296,UI=57343;function Mc(t){const e=t.charCodeAt(0);return e>=FI&&e<=UI}function Ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ir.fromString(e.substring(4,e.length-2))}}class Ve extends Zt{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const $I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Zt{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return $I.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cf}static keyField(){return new st([Cf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ve.fromString(e))}static fromName(e){return new X(Ve.fromString(e).popFirst(5))}static empty(){return new X(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e,n){if(!n)throw new W(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BI(t,e,n,r){if(e===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pf(t){if(!X.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(X.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Gi(t,e){if(!Dm(t))throw new W(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-62135596800,Df=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Df);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vf)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Df}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gi(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Ke("string",Oe._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Oe(0,0))}static max(){return new ae(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=-1;function jI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new lr(s,X.empty(),e)}function qI(t){return new lr(t.readTime,t.key,Di)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ae.min(),X.empty(),Di)}static max(){return new lr(ae.max(),X.empty(),Di)}}function HI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==zI)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const f=l;n(e[f]).next(h=>{o[f]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=-1;function Ma(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function GI(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="";function QI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Nf(e)),e=YI(t.get(n),e);return Nf(e)}function YI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Nm:n+="";break;default:n+=i}}return n}function Nf(t){return t+Nm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xf(this.data.getIterator())}getIteratorFrom(e){return new xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Ye(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xm("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const JI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=JI.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="server_timestamp",Lm="__type__",Fm="__previous_value__",Um="__local_write_time__";function su(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Lm])==null?void 0:r.stringValue)===Mm}function La(t){const e=t.mapValue.fields[Fm];return su(e)?La(e):e}function Ni(t){const e=ur(t.mapValue.fields[Um].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,s,i,o,c,l,f,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f,this.isUsingEmulator=h,this.apiKey=p}}const sa="(default)";class Oi{constructor(e,n){this.projectId=e,this.database=n||sa}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}function ZI(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="__type__",ew="__max__",wo={mapValue:{}},Bm="__vector__",ia="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:nw(t)?9007199254740991:tw(t)?10:11:se(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),c=ur(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return hr(s.bytesValue).isEqual(hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ra(o)===ra(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Of(o)!==Of(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!cn(o[l],c[l])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function xi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Mf(t.timestampValue,e.timestampValue);case 4:return Mf(Ni(t),Ni(e));case 5:return cl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=hr(i),l=hr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let f=0;f<c.length&&f<l.length;f++){const h=_e(c[f],l[f]);if(h!==0)return h}return _e(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=_e(qe(i.latitude),qe(o.latitude));return c!==0?c:_e(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var _,A,V,L;const c=i.fields||{},l=o.fields||{},f=(_=c[ia])==null?void 0:_.arrayValue,h=(A=l[ia])==null?void 0:A.arrayValue,p=_e(((V=f==null?void 0:f.values)==null?void 0:V.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return p!==0?p:Lf(f,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===wo.mapValue&&o===wo.mapValue)return 0;if(i===wo.mapValue)return 1;if(o===wo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),f=o.fields||{},h=Object.keys(f);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const _=cl(l[p],h[p]);if(_!==0)return _;const A=Rs(c[l[p]],f[h[p]]);if(A!==0)return A}return _e(l.length,h.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ur(t),r=ur(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Lf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Cs(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ll(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function Oo(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=La(t);return e?16+Oo(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return yr(r.fields,(i,o)=>{s+=i.length+Oo(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function Ff(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function iu(t){return!!t&&"arrayValue"in t}function Uf(t){return!!t&&"nullValue"in t}function $f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function tw(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[$m])==null?void 0:r.stringValue)===Bm}function Ei(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return{...t}}function nw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ew}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(Ei(this.value))}}function jm(t){const e=[];return yr(t.fields,(n,r)=>{const s=new st([n]);if(xo(r)){const i=jm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,ae.min(),ae.min(),ae.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,ae.min(),ae.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ae.min(),ae.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function rw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{}class We extends qm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iw(e,n,r):n==="array-contains"?new cw(e,r):n==="in"?new lw(e,r):n==="not-in"?new uw(e,r):n==="array-contains-any"?new hw(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ow(e,r):new aw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Rs(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends qm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zt(e,n)}matches(e){return Hm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hm(t){return t.op==="and"}function zm(t){return sw(t)&&Hm(t)}function sw(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function hl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(zm(t))return t.filters.map(e=>hl(e)).join(",");{const e=t.filters.map(n=>hl(n)).join(",");return`${t.op}(${e})`}}function Wm(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Wm(o,s.filters[c]),!0):!1}(t,e):void se(19439)}function Km(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Km).join(" ,")+"}"}(t):"Filter"}class iw extends We{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class ow extends We{constructor(e,n){super(e,"in",n),this.keys=Gm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aw extends We{constructor(e,n){super(e,"not-in",n),this.keys=Gm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class cw extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iu(n)&&xi(n.arrayValue,this.value)}}class lw extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class uw extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xi(this.value.arrayValue,n)}}class hw extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fw(t,e,n,r,s,i,o)}function ou(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.Te=n}return e.Te}function au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jf(t.startAt,e.startAt)&&jf(t.endAt,e.endAt)}function fl(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function dw(t,e,n,r,s,i,o,c){return new Qi(t,e,n,r,s,i,o,c)}function Fa(t){return new Qi(t)}function Hf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pw(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Qm(t){return t.collectionGroup!==null}function Ti(t){const e=ce(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ye(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new aa(i,r))}),n.has(st.keyField().canonicalString())||e.Ee.push(new aa(st.keyField(),r))}return e.Ee}function nn(t){const e=ce(t);return e.Ie||(e.Ie=mw(e,Ti(t))),e.Ie}function mw(t,e){if(t.limitType==="F")return qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dl(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pl(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return au(nn(t),nn(e))&&t.limitType===e.limitType}function Ym(t){return`${ou(nn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Km(s)).join(", ")}]`),Ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const f=Bf(o,c,l);return o.inclusive?f<=0:f<0}(r.startAt,Ti(r),s)||r.endAt&&!function(o,c,l){const f=Bf(o,c,l);return o.inclusive?f>=0:f>0}(r.endAt,Ti(r),s))}(t,e)}function gw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jm(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=_w(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _w(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),f=c.data.field(i);return l!==null&&f!==null?Rs(l,f):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Om(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new Fe(X.comparator);function Cn(){return yw}const Xm=new Fe(X.comparator);function ui(...t){let e=Xm;for(const n of t)e=e.insert(n.key,n);return e}function Zm(t){let e=Xm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return Ii()}function eg(){return Ii()}function Ii(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const vw=new Fe(X.comparator),Ew=new Ye(X.comparator);function ye(...t){let e=Ew;for(const n of t)e=e.add(n);return e}const Tw=new Ye(_e);function Iw(){return Tw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function tg(t){return{integerValue:""+t}}function ww(t,e){return GI(e)?tg(e):cu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function Aw(t,e,n){return t instanceof Mi?function(s,i){const o={fields:{[Lm]:{stringValue:Mm},[Um]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&su(i)&&(i=La(i)),i&&(o.fields[Fm]=i),{mapValue:o}}(n,e):t instanceof Li?rg(t,e):t instanceof Fi?sg(t,e):function(s,i){const o=ng(s,i),c=zf(o)+zf(s.Ae);return ul(o)&&ul(s.Ae)?tg(c):cu(s.serializer,c)}(t,e)}function bw(t,e,n){return t instanceof Li?rg(t,e):t instanceof Fi?sg(t,e):n}function ng(t,e){return t instanceof ca?function(r){return ul(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mi extends Ba{}class Li extends Ba{constructor(e){super(),this.elements=e}}function rg(t,e){const n=ig(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Ba{constructor(e){super(),this.elements=e}}function sg(t,e){let n=ig(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ca extends Ba{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function zf(t){return qe(t.integerValue||t.doubleValue)}function ig(t){return iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.field=e,this.transform=n}}function Rw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Li&&s instanceof Li||r instanceof Fi&&s instanceof Fi?Ss(r.elements,s.elements,cn):r instanceof ca&&s instanceof ca?cn(r.Ae,s.Ae):r instanceof Mi&&s instanceof Mi}(t.transform,e.transform)}class Cw{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function og(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lu(t.key,Lt.none()):new Yi(t.key,t.data,Lt.none());{const n=t.data,r=Tt.empty();let s=new Ye(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new Pt(s.toArray()),Lt.none())}}function Pw(t,e,n){t instanceof Yi?function(s,i,o){const c=s.value.clone(),l=Kf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Kf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ag(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wi(t,e,n,r){return t instanceof Yi?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const f=i.value.clone(),h=Gf(i.fieldTransforms,l,o);return f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,c,l){if(!Mo(i.precondition,o))return c;const f=Gf(i.fieldTransforms,l,o),h=o.data;return h.setAll(ag(i)),h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function kw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ng(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function Wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ss(r,s,(i,o)=>Rw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kf(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,bw(o,c,n[s]))}return r}function Gf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Aw(i,o,e))}return r}class lu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vw extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Pw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=og(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>Wf(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>Wf(n,r))}}class uu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ee;function xw(t){switch(t){case D.OK:return se(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function cg(t){if(t===void 0)return Rn("GRPC error has no .code"),D.UNKNOWN;switch(t){case ze.OK:return D.OK;case ze.CANCELLED:return D.CANCELLED;case ze.UNKNOWN:return D.UNKNOWN;case ze.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ze.INTERNAL:return D.INTERNAL;case ze.UNAVAILABLE:return D.UNAVAILABLE;case ze.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ze.NOT_FOUND:return D.NOT_FOUND;case ze.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ze.ABORTED:return D.ABORTED;case ze.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ze.DATA_LOSS:return D.DATA_LOSS;default:return se(39323,{code:t})}}(Ee=ze||(ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new ir([4294967295,4294967295],0);function Qf(t){const e=Mw().encode(t),n=new wm;return n.update(e),new Uint8Array(n.digest())}function Yf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ir([n,r],0),new ir([s,i],0)]}class hu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ir.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ir.fromNumber(r)));return s.compare(Lw)===1&&(s=new ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qf(e),[r,s]=Yf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Qf(e),[r,s]=Yf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(ae.min(),s,new Fe(_e),Cn(),ye())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class lg{constructor(e,n){this.targetId=e,this.Ce=n}}class ug{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.ve=0,this.Fe=Xf(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Ji(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Xf()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Fw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cn(),this.Je=Ao(),this.He=Ao(),this.Ze=new Fe(_e)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(fl(i))if(r===0){const o=new X(i.path);this.et(n,o,ft.newNoDocument(o,ae.min()))}else Ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,f)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=hr(r).toUint8Array()}catch(l){if(l instanceof xm)return Hr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new hu(o,s,i)}catch(l){return Hr(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&fl(c.target)){const l=new X(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ft.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ye();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const f=this.ot(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new qa(e,n,this.Ze,this.je,r);return this.je=Cn(),this.Je=Ao(),this.He=Ao(),this.Ze=new Fe(_e),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Jf,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ye(_e),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ye(_e),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Jf),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ao(){return new Fe(X.comparator)}function Xf(){return new Fe(X.comparator)}const Uw={asc:"ASCENDING",desc:"DESCENDING"},$w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"};class jw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ml(t,e){return t.useProto3Json||Ma(e)?e:{value:e}}function la(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qw(t,e){return la(t,e.toTimestamp())}function rn(t){return Ae(!!t,49232),ae.fromTimestamp(function(n){const r=ur(n);return new Oe(r.seconds,r.nanos)}(t))}function fu(t,e){return gl(t,e).canonicalString()}function gl(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fg(t){const e=Ve.fromString(t);return Ae(_g(e),10190,{key:e.toString()}),e}function _l(t,e){return fu(t.databaseId,e.path)}function Lc(t,e){const n=fg(e);if(n.get(1)!==t.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(pg(n))}function dg(t,e){return fu(t.databaseId,e)}function Hw(t){const e=fg(t);return e.length===4?Ve.emptyPath():pg(e)}function yl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pg(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zf(t,e,n){return{name:_l(t,e),fields:n.value.mapValue.fields}}function zw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:se(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,h){return f.useProto3Json?(Ae(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(Ae(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(f){const h=f.code===void 0?D.UNKNOWN:cg(f.code);return new W(h,f.message||"")}(o);n=new ug(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ae.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),f=r.targetIds||[],h=r.removedTargetIds||[];n=new Lo(f,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lc(t,r.document),i=r.readTime?rn(r.readTime):ae.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Lo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lc(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ow(s,i),c=r.targetId;n=new lg(c,o)}}return n}function Ww(t,e){let n;if(e instanceof Yi)n={update:Zf(t,e.key,e.value)};else if(e instanceof lu)n={delete:_l(t,e.key)};else if(e instanceof vr)n={update:Zf(t,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof Vw))return se(16599,{dt:e.type});n={verify:_l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ca)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function Kw(t,e){return t&&t.length>0?(Ae(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ae.min())&&(o=rn(i)),new Cw(o,s.transformResults||[])}(n,e))):[]}function Gw(t,e){return{documents:[dg(t,e.path)]}}function Qw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dg(t,s);const i=function(f){if(f.length!==0)return gg(zt.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(f){if(f.length!==0)return f.map(h=>function(_){return{field:ls(_.field),direction:Xw(_.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ml(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ft:n,parent:s}}function Yw(t){let e=Hw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const _=mg(p);return _ instanceof zt&&zm(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(_=>function(V){return new aa(us(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(_))}(n.orderBy));let c=null;n.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Ma(_)?null:_}(n.limit));let l=null;n.startAt&&(l=function(p){const _=!!p.before,A=p.values||[];return new oa(A,_)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const _=!p.before,A=p.values||[];return new oa(A,_)}(n.endAt)),dw(e,s,o,i,c,"F",l,f)}function Jw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>mg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function Xw(t){return Uw[t]}function Zw(t){return $w[t]}function eA(t){return Bw[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return st.fromServerFormat(t.fieldPath)}function gg(t){return t instanceof We?function(n){if(n.op==="=="){if($f(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Uf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($f(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Uf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:Zw(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>gg(s));return r.length===1?r[0]:{compositeFilter:{op:eA(n.op),filters:r}}}(t):se(54877,{filter:t})}function tA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _g(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function yg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.yt=e}}function rA(t){const e=Yw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.bn=new iA}addToCollectionParentIndex(e,n){return this.bn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(lr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class iA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vg=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(vg,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ps(0)}static ar(){return new Ps(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="LruGarbageCollector",oA=1048576;function nd([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class aA{constructor(e){this.Pr=e,this.buffer=new Ye(nd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(td,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xs(n)?K(td,"Ignoring IndexedDB error during garbage collection: ",n):await Os(n)}await this.Ar(3e5)})}}class lA{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(xa.ce);const r=new aA(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(ed)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ed):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,f;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(f=Date.now(),as()<=ge.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(f-l)+`ms
Total Duration: ${f-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uA(t,e){return new lA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wi(r.mutation,s,Pt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ui();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Cn();const o=Ii(),c=function(){return Ii()}();return n.forEach((l,f)=>{const h=r.get(f.key);s.has(f.key)&&(h===void 0||h.mutation instanceof vr)?i=i.insert(f.key,f):h!==void 0?(o.set(f.key,h.mutation.getFieldMask()),wi(h.mutation,f,h.mutation.getFieldMask(),Oe.now())):o.set(f.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((f,h)=>o.set(f,h)),n.forEach((f,h)=>c.set(f,new fA(h,o.get(f)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Ii();let s=new Fe((o,c)=>o-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const f=n.get(l);if(f===null)return;let h=r.get(l)||Pt.empty();h=c.applyToLocalView(f,h),r.set(l,h);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,h=l.value,p=eg();h.forEach(_=>{if(!i.has(_)){const A=og(n.get(_),r.get(_));A!==null&&p.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return pw(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(xr());let c=Di,l=i;return o.next(f=>N.forEach(f,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(_=>{l=l.insert(h,_)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,l,f,ye())).next(h=>({batchId:c,changes:Zm(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const f=function(p,_){return new Qi(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(h=>{h.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,f)=>{const h=f.getKey();o.get(h)===null&&(o=o.insert(h,ft.newInvalidDocument(h)))});let c=ui();return o.forEach((l,f)=>{const h=i.get(l);h!==void 0&&wi(h.mutation,f,Pt.empty(),Oe.now()),$a(n,f)&&(c=c.insert(l,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return N.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:rA(s.bundledQuery),readTime:rn(s.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.overlays=new Fe(X.comparator),this.Lr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new X(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((f,h)=>f-h);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let h=i.get(f.largestBatchId);h===null&&(h=xr(),i=i.insert(f.largestBatchId,h)),h.set(f.getKey(),f)}}const c=xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,h)=>c.set(f,h)),!(c.size()>=s)););return N.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nw(n,r));let i=this.Lr.get(n);i===void 0&&(i=ye(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.kr=new Ye(et.qr),this.Kr=new Ye(et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new et(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new et(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Ve([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new Ve([])),r=new et(n,e),s=new et(n,e+1);let i=ye();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||_e(e.Jr,n.Jr)}static Ur(e,n){return _e(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ye(et.qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dw(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?ru:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(_e);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{r=r.add(c.Jr)})}),N.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new et(new X(i),0);let c=new Ye(_e);return this.Hr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.Jr)),!0)},o),N.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return N.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new et(n,0),s=this.Hr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.ti=e,this.docs=function(){return new Fe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,c=new X(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:h}}=l.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||HI(qI(h),r)<=0||(s.has(h.key)||$a(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vA(this)}getSize(e){return N.resolve(this.size)}}class vA extends hA{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.persistence=e,this.ri=new Qr(n=>ou(n),au),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new du,this.targetCount=0,this.oi=Ps._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),N.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.lr(n),N.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this._i={},this.overlays={},this.ai=new xa(0),this.ui=!1,this.ui=!0,this.ci=new gA,this.referenceDelegate=e(this),this.li=new EA(this),this.indexManager=new sA,this.remoteDocumentCache=function(s){return new yA(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new nA(n),this.Pi=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new _A(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new TA(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return N.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class TA extends WI{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Ri=new du,this.Ai=null}static Vi(e){return new pu(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,r=>{const s=X.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return N.or([()=>N.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ua{constructor(e,n){this.persistence=e,this.fi=new Qr(r=>QI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uA(this,n)}static Vi(e,n){return new ua(e,n)}Ti(){}Ei(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return N.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),N.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oo(e.data.value)),n}wr(e,n,r){return N.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return fT()?8:KI(pt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IA;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(as()<=ge.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(as()<=ge.DEBUG&&K("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(as()<=ge.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):N.resolve())}gs(e,n){if(Hf(n))return N.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pl(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.Ss(n,c);return this.bs(n,f,o,l.readTime)?this.gs(e,pl(n,null,"F")):this.Ds(e,f,n,l)}))})))}ps(e,n,r,s){return Hf(n)||s.isEqual(ae.min())?N.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?N.resolve(null):(as()<=ge.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.Ds(e,o,n,jI(s,Di)).next(c=>c))})}Ss(e,n){let r=new Ye(Jm(e));return n.forEach((s,i)=>{$a(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return as()<=ge.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",cs(n)),this.fs.getDocumentsMatchingQuery(e,n,lr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="LocalStore",AA=3e8;class bA{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Fe(_e),this.Fs=new Qr(i=>ou(i),au),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function SA(t,e,n,r){return new bA(t,e,n,r)}async function Tg(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ye();for(const f of s){o.push(f.batchId);for(const h of f.mutations)l=l.add(h.key)}for(const f of i){c.push(f.batchId);for(const h of f.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(f=>({Ns:f,removedBatchIds:o,addedBatchIds:c}))})})}function RA(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,f,h){const p=f.batch,_=p.keys();let A=N.resolve();return _.forEach(V=>{A=A.next(()=>h.getEntry(l,V)).next(L=>{const B=f.docVersions.get(V);Ae(B!==null,48541),L.version.compareTo(B)<0&&(p.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),h.addEntry(L)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ye();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ig(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function CA(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((h,p)=>{const _=s.get(p);if(!_)return;c.push(n.li.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,p)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(ot.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):h.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(h.resumeToken,r)),s=s.insert(p,A),function(L,B,H){return L.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=AA?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(_,A,h)&&c.push(n.li.updateTargetData(i,A))});let l=Cn(),f=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(PA(i,o,e.documentUpdates).next(h=>{l=h.Bs,f=h.Ls})),!r.isEqual(ae.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return N.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,f)).next(()=>l)}).then(i=>(n.vs=s,i))}function PA(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((c,l)=>{const f=i.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):K(gu,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function kA(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ru),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VA(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function vl(t,e,n){const r=ce(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!xs(o))throw o;K(gu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function rd(t,e,n){const r=ce(t);let s=ae.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,f,h){const p=ce(l),_=p.Fs.get(h);return _!==void 0?N.resolve(p.vs.get(_)):p.li.getTargetData(f,h)}(r,o,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ye())).next(c=>(DA(r,gw(e),c),{documents:c,ks:i})))}function DA(t,e,n){let r=t.Ms.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class sd{constructor(){this.activeTargetIds=Iw()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NA{constructor(){this.vo=new sd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="ConnectivityMonitor";class od{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(id,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(id,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=null;function El(){return bo===null?bo=function(){return 268435456+Math.round(2147483648*Math.random())}():bo++,"0x"+bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="RestConnection",xA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class MA{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===sa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=El(),c=this.Qo(e,n.toUriEncodedString());K(Fc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:f}=new URL(c),h=Ki(f);return this.zo(e,c,l,r,h).then(p=>(K(Fc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Hr(Fc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=xA[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection",ii=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class gs extends MA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!gs.c_){const e=Rm();ii(e,Sm.STAT_EVENT,n=>{n.stat===al.PROXY?K(lt,"STAT_EVENT: detected buffering proxy"):n.stat===al.NOPROXY&&K(lt,"STAT_EVENT: detected no buffering proxy")}),gs.c_=!0}}zo(e,n,r,s,i){const o=El();return new Promise((c,l)=>{const f=new Am;f.setWithCredentials(!0),f.listenOnce(bm.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case No.NO_ERROR:const p=f.getResponseJson();K(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case No.TIMEOUT:K(lt,`RPC '${e}' ${o} timed out`),l(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const _=f.getStatus();if(K(lt,`RPC '${e}' ${o} failed with status:`,_,"response text:",f.getResponseText()),_>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const V=A==null?void 0:A.error;if(V&&V.status&&V.message){const L=function(H){const Q=H.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(Q)>=0?Q:D.UNKNOWN}(V.status);l(new W(L,V.message))}else l(new W(D.UNKNOWN,"Server responded with status "+f.getStatus()))}else l(new W(D.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{K(lt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);K(lt,`RPC '${e}' ${o} sending request:`,s),f.send(n,"POST",h,r,15)})}T_(e,n,r){const s=El(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");K(lt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.E_(h);let p=!1,_=!1;const A=new LA({Jo:V=>{_?K(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(K(lt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),K(lt,`RPC '${e}' stream ${s} sending:`,V),h.send(V))},Ho:()=>h.close()});return ii(h,li.EventType.OPEN,()=>{_||(K(lt,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),ii(h,li.EventType.CLOSE,()=>{_||(_=!0,K(lt,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.I_(h))}),ii(h,li.EventType.ERROR,V=>{_||(_=!0,Hr(lt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),A.o_(new W(D.UNAVAILABLE,"The operation could not be completed")))}),ii(h,li.EventType.MESSAGE,V=>{var L;if(!_){const B=V.data[0];Ae(!!B,16349);const H=B,Q=(H==null?void 0:H.error)||((L=H[0])==null?void 0:L.error);if(Q){K(lt,`RPC '${e}' stream ${s} received error:`,Q);const Z=Q.status;let G=function(b){const v=ze[b];if(v!==void 0)return cg(v)}(Z),oe=Q.message;Z==="NOT_FOUND"&&oe.includes("database")&&oe.includes("does not exist")&&oe.includes(this.databaseId.database)&&Hr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=D.INTERNAL,oe="Unknown error status: "+Z+" with message "+Q.message),_=!0,A.o_(new W(G,oe)),h.close()}else K(lt,`RPC '${e}' stream ${s} received:`,B),A.__(B)}}),gs.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Cm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){return new gs(t)}function Uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return new jw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs.c_=!1;class wg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="PersistentStream";class Ag{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(ad,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(ad,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UA extends Ag{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?rn(o.readTime):ae.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=yl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=fl(l)?{documents:Gw(i,l)}:{query:Qw(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hg(i,o.resumeToken);const f=ml(i,o.expectedCount);f!==null&&(c.expectedCount=f)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=la(i,o.snapshotVersion.toTimestamp());const f=ml(i,o.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Jw(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=yl(this.serializer),n.removeTarget=e,this.q_(n)}}class $A extends Ag{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Kw(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ww(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{}class jA extends BA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,gl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,gl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function qA(t,e,n,r){return new jA(t,e,n,r)}class HA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="RemoteStore";class zA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(K(zr,"Restarting streams for network reachability change."),await async function(l){const f=ce(l);f.Ia.add(4),await Xi(f),f.Va.set("Unknown"),f.Ia.delete(4),await za(f)}(this))})}),this.Va=new HA(r,s)}}async function za(t){if(Yr(t))for(const e of t.Ra)await e(!0)}async function Xi(t){for(const e of t.Ra)await e(!1)}function bg(t,e){const n=ce(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Eu(n)?vu(n):Ms(n).O_()&&yu(n,e))}function _u(t,e){const n=ce(t),r=Ms(n);n.Ea.delete(e),r.O_()&&Sg(n,e),n.Ea.size===0&&(r.O_()?r.L_():Yr(n)&&n.Va.set("Unknown"))}function yu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).Z_(e)}function Sg(t,e){t.da.$e(e),Ms(t).X_(e)}function vu(t){t.da=new Fw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.Va.ua()}function Eu(t){return Yr(t)&&!Ms(t).x_()&&t.Ea.size>0}function Yr(t){return ce(t).Ia.size===0}function Rg(t){t.da=void 0}async function WA(t){t.Va.set("Online")}async function KA(t){t.Ea.forEach((e,n)=>{yu(t,e)})}async function GA(t,e){Rg(t),Eu(t)?(t.Va.ha(e),vu(t)):t.Va.set("Unknown")}async function QA(t,e,n){if(t.Va.set("Online"),e instanceof ug&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){K(zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof Lo?t.da.Xe(e):e instanceof lg?t.da.st(e):t.da.tt(e),!n.isEqual(ae.min()))try{const r=await Ig(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ea.get(f);h&&i.Ea.set(f,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,f)=>{const h=i.Ea.get(l);if(!h)return;i.Ea.set(l,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),Sg(i,l);const p=new Xn(h.target,l,f,h.sequenceNumber);yu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K(zr,"Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!xs(e))throw e;t.Ia.add(1),await Xi(t),t.Va.set("Offline"),n||(n=()=>Ig(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(zr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await za(t)})}function Cg(t,e){return e().catch(n=>ha(t,n,e))}async function Wa(t){const e=ce(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ru;for(;YA(e);)try{const s=await kA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,JA(e,s)}catch(s){await ha(e,s)}Pg(e)&&kg(e)}function YA(t){return Yr(t)&&t.Ta.length<10}function JA(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Pg(t){return Yr(t)&&!dr(t).x_()&&t.Ta.length>0}function kg(t){dr(t).start()}async function XA(t){dr(t).ra()}async function ZA(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function e0(t,e,n){const r=t.Ta.shift(),s=uu.from(r,e,n);await Cg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wa(t)}async function t0(t,e){e&&dr(t).Y_&&await async function(r,s){if(function(o){return xw(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();dr(r).B_(),await Cg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wa(r)}}(t,e),Pg(t)&&kg(t)}async function cd(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),K(zr,"RemoteStore received new credentials");const r=Yr(n);n.Ia.add(3),await Xi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await za(n)}async function n0(t,e){const n=ce(t);e?(n.Ia.delete(2),await za(n)):e||(n.Ia.add(2),await Xi(n),n.Va.set("Unknown"))}function Ms(t){return t.ma||(t.ma=function(n,r,s){const i=ce(n);return i.sa(),new UA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:WA.bind(null,t),Yo:KA.bind(null,t),t_:GA.bind(null,t),H_:QA.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Eu(t)?vu(t):t.Va.set("Unknown")):(await t.ma.stop(),Rg(t))})),t.ma}function dr(t){return t.fa||(t.fa=function(n,r,s){const i=ce(n);return i.sa(),new $A(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:XA.bind(null,t),t_:t0.bind(null,t),ta:ZA.bind(null,t),na:e0.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Wa(t)):(await t.fa.stop(),t.Ta.length>0&&(K(zr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Tu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iu(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),xs(t))return new W(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.ga=new Fe(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,s,i,o,c,l,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ks(e,n,_s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class s0{constructor(){this.queries=ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=ud(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new W(D.ABORTED,"Firestore shutting down"))}}function ud(){return new Qr(t=>Ym(t),Ua)}async function Vg(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new r0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Iu(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&wu(n)}async function Dg(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i0(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&wu(n)}function o0(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function wu(t){t.Ca.forEach(e=>{e.next()})}var Tl,hd;(hd=Tl||(Tl={})).Ma="default",hd.Cache="cache";class Ng{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.key=e}}class xg{constructor(e){this.key=e}}class a0{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.eu=Jm(e),this.tu=new _s(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new ld,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const _=s.get(h),A=$a(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),L=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let B=!1;_&&A?_.data.isEqual(A.data)?V!==L&&(r.track({type:3,doc:A}),B=!0):this.su(_,A)||(r.track({type:2,doc:A}),B=!0,(l&&this.eu(A,l)>0||f&&this.eu(A,f)<0)&&(c=!0)):!_&&A?(r.track({type:0,doc:A}),B=!0):_&&!A&&(r.track({type:1,doc:_}),B=!0,(l||f)&&(c=!0)),B&&(A?(o=o.add(A),i=L?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(A,V){const L=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:B})}};return L(A)-L(V)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,f=l!==this.Xa;return this.Xa=l,o.length!==0||f?{snapshot:new ks(this.query,e.tu,i,o,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ld,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new xg(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Og(r))}),n}cu(e){this.Za=e.ks,this.Ya=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ks.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Au="SyncEngine";class c0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class l0{constructor(e){this.key=e,this.hu=!1}}class u0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qr(c=>Ym(c),Ua),this.Eu=new Map,this.Iu=new Set,this.Ru=new Fe(X.comparator),this.Au=new Map,this.Vu=new du,this.du={},this.mu=new Map,this.fu=Ps.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function h0(t,e,n=!0){const r=Bg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Mg(r,e,n,!0),s}async function f0(t,e){const n=Bg(t);await Mg(n,e,!0,!1)}async function Mg(t,e,n,r){const s=await VA(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await d0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&bg(t.remoteStore,s),c}async function d0(t,e,n,r,s){t.pu=(p,_,A)=>async function(L,B,H,Q){let Z=B.view.ru(H);Z.bs&&(Z=await rd(L.localStore,B.query,!1).then(({documents:b})=>B.view.ru(b,Z)));const G=Q&&Q.targetChanges.get(B.targetId),oe=Q&&Q.targetMismatches.get(B.targetId)!=null,de=B.view.applyChanges(Z,L.isPrimaryClient,G,oe);return dd(L,B.targetId,de.au),de.snapshot}(t,p,_,A);const i=await rd(t.localStore,e,!0),o=new a0(e,i.ks),c=o.ru(i.documents),l=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),f=o.applyChanges(c,t.isPrimaryClient,l);dd(t,n,f.au);const h=new c0(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),f.snapshot}async function p0(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!Ua(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_u(r.remoteStore,s.targetId),Il(r,s.targetId)}).catch(Os)):(Il(r,s.targetId),await vl(r.localStore,s.targetId,!0))}async function m0(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_u(n.remoteStore,r.targetId))}async function g0(t,e,n){const r=w0(t);try{const s=await function(o,c){const l=ce(o),f=Oe.now(),h=c.reduce((A,V)=>A.add(V.key),ye());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let V=Cn(),L=ye();return l.xs.getEntries(A,h).next(B=>{V=B,V.forEach((H,Q)=>{Q.isValidDocument()||(L=L.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,V)).next(B=>{p=B;const H=[];for(const Q of c){const Z=kw(Q,p.get(Q.key).overlayedDocument);Z!=null&&H.push(new vr(Q.key,Z,jm(Z.value.mapValue),Lt.exists(!0)))}return l.mutationQueue.addMutationBatch(A,f,H,c)}).next(B=>{_=B;const H=B.applyToLocalDocumentSet(p,L);return l.documentOverlayCache.saveOverlays(A,B.batchId,H)})}).then(()=>({batchId:_.batchId,changes:Zm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let f=o.du[o.currentUser.toKey()];f||(f=new Fe(_e)),f=f.insert(c,l),o.du[o.currentUser.toKey()]=f}(r,s.batchId,n),await Zi(r,s.changes),await Wa(r.remoteStore)}catch(s){const i=Iu(s,"Failed to persist write");n.reject(i)}}async function Lg(t,e){const n=ce(t);try{const r=await CA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ae(o.hu,14607):s.removedDocuments.size>0&&(Ae(o.hu,42227),o.hu=!1))}),await Zi(n,r,e)}catch(r){await Os(r)}}function fd(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ce(o);l.onlineState=c;let f=!1;l.queries.forEach((h,p)=>{for(const _ of p.Sa)_.va(c)&&(f=!0)}),f&&wu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _0(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Fe(X.comparator);o=o.insert(i,ft.newNoDocument(i,ae.min()));const c=ye().add(i),l=new qa(ae.min(),new Map,new Fe(_e),o,c);await Lg(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),bu(r)}else await vl(r.localStore,e,!1).then(()=>Il(r,e,n)).catch(Os)}async function y0(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await RA(n.localStore,e);Ug(n,r,null),Fg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(n,s)}catch(s){await Os(s)}}async function v0(t,e,n){const r=ce(t);try{const s=await function(o,c){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let h;return l.mutationQueue.lookupMutationBatch(f,c).next(p=>(Ae(p!==null,37113),h=p.keys(),l.mutationQueue.removeMutationBatch(f,p))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,h)).next(()=>l.localDocuments.getDocuments(f,h))})}(r.localStore,e);Ug(r,e,n),Fg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zi(r,s)}catch(s){await Os(s)}}function Fg(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Ug(t,e,n){const r=ce(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||$g(t,r)})}function $g(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(_u(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),bu(t))}function dd(t,e,n){for(const r of n)r instanceof Og?(t.Vu.addReference(r.key,e),E0(t,r)):r instanceof xg?(K(Au,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||$g(t,r.key)):se(19791,{wu:r})}function E0(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(Au,"New document in limbo: "+n),t.Iu.add(r),bu(t))}function bu(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new l0(n)),t.Ru=t.Ru.insert(n,r),bg(t.remoteStore,new Xn(nn(Fa(n.path)),r,"TargetPurposeLimboResolution",xa.ce))}}async function Zi(t,e,n){const r=ce(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(f=>{var h;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(f){s.push(f);const p=mu.Is(l.targetId,f);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,f){const h=ce(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(f,_=>N.forEach(_.Ts,A=>h.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>N.forEach(_.Es,A=>h.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!xs(p))throw p;K(gu,"Failed to update sequence numbers: "+p)}for(const p of f){const _=p.targetId;if(!p.fromCache){const A=h.vs.get(_),V=A.snapshotVersion,L=A.withLastLimboFreeSnapshotVersion(V);h.vs=h.vs.insert(_,L)}}}(r.localStore,i))}async function T0(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){K(Au,"User change. New user:",e.toKey());const r=await Tg(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new W(D.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(n,r.Ns)}}function I0(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Bg(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_0.bind(null,e),e.Pu.H_=i0.bind(null,e.eventManager),e.Pu.yu=o0.bind(null,e.eventManager),e}function w0(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v0.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return SA(this.persistence,new wA,e.initialUser,this.serializer)}Cu(e){return new Eg(pu.Vi,this.serializer)}Du(e){return new NA}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class A0 extends fa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ae(this.persistence.referenceDelegate instanceof ua,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Eg(r=>ua.Vi(r,n),this.serializer)}}class wl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=T0.bind(null,this.syncEngine),await n0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s0}()}createDatastore(e){const n=Ha(e.databaseInfo.databaseId),r=FA(e.databaseInfo);return qA(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new zA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>fd(this.syncEngine,n,0),function(){return od.v()?new od:new OA}())}createSyncEngine(e,n){return function(s,i,o,c,l,f,h){const p=new u0(s,i,o,c,l,f);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ce(s);K(zr,"RemoteStore shutting down."),i.Ia.add(5),await Xi(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wl.provider={build:()=>new wl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="FirestoreClient";class b0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),K(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await S0(t);K(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cd(e.remoteStore,s)),t._onlineComponents=e}async function S0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(pr,"Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hr("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new fa)}}else K(pr,"Using default OfflineComponentProvider"),await $c(t,new A0(void 0));return t._offlineComponents}async function qg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(pr,"Using user provided OnlineComponentProvider"),await pd(t,t._uninitializedComponentsProvider._online)):(K(pr,"Using default OnlineComponentProvider"),await pd(t,new wl))),t._onlineComponents}function R0(t){return qg(t).then(e=>e.syncEngine)}async function Al(t){const e=await qg(t),n=e.eventManager;return n.onListen=h0.bind(null,e.syncEngine),n.onUnlisten=p0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=f0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m0.bind(null,e.syncEngine),n}function C0(t,e,n,r){const s=new jg(r),i=new Ng(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Vg(await Al(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Dg(await Al(t),i))}}function P0(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,f){const h=new jg({next:_=>{h.Nu(),o.enqueueAndForget(()=>Dg(i,p));const A=_.docs.has(c);!A&&_.fromCache?f.reject(new W(D.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&l&&l.source==="server"?f.reject(new W(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(_)},error:_=>f.reject(_)}),p=new Ng(Fa(c.path),h,{includeMetadataChanges:!0,qa:!0});return Vg(i,p)}(await Al(t),t.asyncQueue,e,n,r)),r.promise}function k0(t,e){const n=new or;return t.asyncQueue.enqueueAndForget(async()=>g0(await R0(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="ComponentProvider",md=new Map;function D0(t,e,n,r,s){return new XI(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="firestore.googleapis.com",gd=!0;class _d{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zg,this.ssl=gd}else this.host=e.host,this.ssl=e.ssl??gd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oA)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _d({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _d(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VI;switch(r.type){case"firstParty":return new xI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=md.get(n);r&&(K(V0,"Removing Datastore"),md.delete(n),r.terminate())}(this),Promise.resolve()}}function N0(t,e,n,r={}){var f;t=Mt(t,Ka);const s=Ki(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&gm(`https://${c}`),i.host!==zg&&i.host!==c&&Hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Br(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=ut.MOCK_USER;else{h=iT(r.mockUserToken,(f=t._app)==null?void 0:f.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ut(_)}t._authCredentials=new DI(new km(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Gi(n,Be._jsonSchema))return new Be(e,r||null,new X(Ve.fromString(n.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Ke("string",Be._jsonSchemaVersion),referencePath:Ke("string")};class ar extends Ls{constructor(e,n,r){super(e,n,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new X(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Wg(t,e,...n){if(t=Je(t),Vm("collection","path",e),t instanceof Ka){const r=Ve.fromString(e,...n);return kf(r),new ar(t,null,r)}{if(!(t instanceof Be||t instanceof ar))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return kf(r),new ar(t.firestore,null,r)}}function Zn(t,e,...n){if(t=Je(t),arguments.length===1&&(e=nu.newId()),Vm("doc","path",e),t instanceof Ka){const r=Ve.fromString(e,...n);return Pf(r),new Be(t,null,new X(r))}{if(!(t instanceof Be||t instanceof ar))throw new W(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Pf(r),new Be(t.firestore,t instanceof ar?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="AsyncQueue";class vd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wg(this,"async_queue_retry"),this._c=()=>{const r=Uc();r&&K(yd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Uc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new or;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xs(e))throw e;K(yd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Rn("INTERNAL UNHANDLED ERROR: ",Ed(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Tu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:Ed(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ed(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mr extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vd(e),this._firestoreClient=void 0,await e}}}function O0(t,e){const n=typeof t=="object"?t:Em(),r=typeof t=="string"?t:sa,s=eu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rT("firestore");i&&N0(s,...i)}return s}function Su(t){if(t._terminated)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||x0(t),t._firestoreClient}function x0(t){var r,s,i,o;const e=t._freezeSettings(),n=D0(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new b0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const f=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(f),_online:f}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(ot.fromBase64String(e))}catch(n){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gi(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Ke("string",Nt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Gi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ke("string",sn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gi(e,jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new jt(e.vectorValues);throw new W(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:Ke("string",jt._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/^__.*__$/;class L0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class Kg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class Cu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Cu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return da(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Gg(this.dataSource)&&M0.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class F0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ha(e)}I(e,n,r,s=!1){return new Cu({dataSource:e,methodName:n,targetDoc:r,path:st.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=Ha(t._databaseId);return new F0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qg(t,e,n,r,s,i={}){const o=t.I(i.merge||i.mergeFields?2:0,e,n,s);ku("Data must be an object, but it was:",o,r);const c=Yg(r,o);let l,f;if(i.merge)l=new Pt(o.fieldMask),f=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const _=Vs(e,p,n);if(!o.contains(_))throw new W(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Zg(h,_)||h.push(_)}l=new Pt(h),f=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,f=o.fieldTransforms;return new L0(new Tt(c),l,f)}class Ya extends Ga{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}class Pu extends Ga{_toFieldTransform(e){return new Sw(e.path,new Mi)}isEqual(e){return e instanceof Pu}}function U0(t,e,n,r){const s=t.I(1,e,n);ku("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();yr(r,(l,f)=>{const h=Xg(e,l,n);f=Je(f);const p=s.fc(h);if(f instanceof Ya)i.push(h);else{const _=eo(f,p);_!=null&&(i.push(h),o.set(h,_))}});const c=new Pt(i);return new Kg(o,c,s.fieldTransforms)}function $0(t,e,n,r,s,i){const o=t.I(1,e,n),c=[Vs(e,r,n)],l=[s];if(i.length%2!=0)throw new W(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Vs(e,i[_])),l.push(i[_+1]);const f=[],h=Tt.empty();for(let _=c.length-1;_>=0;--_)if(!Zg(f,c[_])){const A=c[_];let V=l[_];V=Je(V);const L=o.fc(A);if(V instanceof Ya)f.push(A);else{const B=eo(V,L);B!=null&&(f.push(A),h.set(A,B))}}const p=new Pt(f);return new Kg(h,p,o.fieldTransforms)}function B0(t,e,n,r=!1){return eo(n,t.I(r?4:3,e))}function eo(t,e){if(Jg(t=Je(t)))return ku("Unsupported field value:",e,t),Yg(t,e);if(t instanceof Ga)return function(r,s){if(!Gg(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=eo(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ww(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:la(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:la(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:hg(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof jt)return function(o,c){const l=o instanceof jt?o.toArray():o;return{mapValue:{fields:{[$m]:{stringValue:Bm},[ia]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw c.yc("VectorValues must only contain numeric values.");return cu(c.serializer,h)})}}}}}}(r,s);if(yg(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Oa(r)}`)}(t,e)}function Yg(t,e){const n={};return Om(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=eo(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof sn||t instanceof Nt||t instanceof Be||t instanceof Ga||t instanceof jt||yg(t))}function ku(t,e,n){if(!Jg(n)||!Dm(n)){const r=Oa(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Vs(t,e,n){if((e=Je(e))instanceof Ru)return e._internalPath;if(typeof e=="string")return Xg(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const j0=new RegExp("[~\\*/\\[\\]]");function Xg(t,e,n){if(e.search(j0)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ru(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(D.INVALID_ARGUMENT,c+t+l)}function Zg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ia].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new jt(n)}convertGeoPoint(e){return new sn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=La(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=ur(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ae(_g(r),9688,{name:e});const s=new Oi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends q0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function t_(){return new Pu("serverTimestamp")}const Td="@firebase/firestore",Id="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Vs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H0 extends n_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class W0 extends Vu{}function K0(t,e,...n){let r=[];e instanceof Vu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Du).length,c=i.filter(l=>l instanceof Ja).length;if(o>1||o>0&&c>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ja extends W0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ja(e,n,r)}_apply(e){const n=this._parse(e);return r_(e._query,n),new Ls(e.firestore,e.converter,dl(e._query,n))}_parse(e){const n=Qa(e.firestore);return function(i,o,c,l,f,h,p){let _;if(f.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){bd(p,h);const V=[];for(const L of p)V.push(Ad(l,i,L));_={arrayValue:{values:V}}}else _=Ad(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||bd(p,h),_=B0(c,o,p,h==="in"||h==="not-in");return We.create(f,h,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function G0(t,e,n){const r=e,s=Vs("where",t);return Ja._create(s,r,n)}class Du extends Vu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Du(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)r_(o,l),o=dl(o,l)}(e._query,n),new Ls(e.firestore,e.converter,dl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ad(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qm(e)&&n.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!X.isDocumentKey(r))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ff(t,new X(r))}if(n instanceof Be)return Ff(t,n._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(n)}.`)}function bd(t,e){if(!Array.isArray(t)||t.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function r_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function s_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ur extends n_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ur._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ur._jsonSchema={type:Ke("string",Ur._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Fo extends Ur{data(e={}){return super.data(e)}}class ys{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Fo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Fo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,h=-1;return c.type!==0&&(f=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:Q0(c.type),doc:l,oldIndex:f,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ys._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Q0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys._jsonSchemaVersion="firestore/querySnapshot/1.0",ys._jsonSchema={type:Ke("string",ys._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){t=Mt(t,Be);const e=Mt(t.firestore,mr),n=Su(e);return P0(n,t._key).then(r=>a_(e,t,r))}function i_(t,e,n){t=Mt(t,Be);const r=Mt(t.firestore,mr),s=s_(t.converter,e,n),i=Qa(r);return Xa(r,[Qg(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function Bc(t,e,n,...r){t=Mt(t,Be);const s=Mt(t.firestore,mr),i=Qa(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Ru?$0(i,"updateDoc",t._key,e,n,r):U0(i,"updateDoc",t._key,e),Xa(s,[o.toMutation(t._key,Lt.exists(!0))])}function J0(t){return Xa(Mt(t.firestore,mr),[new lu(t._key,Lt.none())])}function X0(t,e){const n=Mt(t.firestore,mr),r=Zn(t),s=s_(t.converter,e),i=Qa(t.firestore);return Xa(n,[Qg(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function o_(t,...e){var f,h,p;t=Je(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||wd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(wd(e[r])){const _=e[r];e[r]=(f=_.next)==null?void 0:f.bind(_),e[r+1]=(h=_.error)==null?void 0:h.bind(_),e[r+2]=(p=_.complete)==null?void 0:p.bind(_)}let i,o,c;if(t instanceof Be)o=Mt(t.firestore,mr),c=Fa(t._key.path),i={next:_=>{e[r]&&e[r](a_(o,t,_))},error:e[r+1],complete:e[r+2]};else{const _=Mt(t,Ls);o=Mt(_.firestore,mr),c=_._query;const A=new e_(o);i={next:V=>{e[r]&&e[r](new ys(o,A,_,V))},error:e[r+1],complete:e[r+2]},z0(t._query)}const l=Su(o);return C0(l,c,s,i)}function Xa(t,e){const n=Su(t);return k0(n,e)}function a_(t,e,n){const r=n.docs.get(e._key),s=new e_(t);return new Ur(t,s,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){kI(Ds),bs(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new mr(new NI(r.getProvider("auth-internal")),new MI(o,r.getProvider("app-check-internal")),ZI(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sr(Td,Id,e),sr(Td,Id,"esm2020")})();var Z0="firebase",eb="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(Z0,eb,"app");function c_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tb=c_,l_=new zi("auth","Firebase",c_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Xl("@firebase/auth");function nb(t,...e){pa.logLevel<=ge.WARN&&pa.warn(`Auth (${Ds}): ${t}`,...e)}function Uo(t,...e){pa.logLevel<=ge.ERROR&&pa.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw Nu(t,...e)}function on(t,...e){return Nu(t,...e)}function u_(t,e,n){const r={...tb(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return u_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l_.create(t,...e)}function re(t,e,...n){if(!t)throw Nu(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Pn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function rb(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rb()||lT()||"connection"in navigator)?navigator.onLine:!0}function ib(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=oT()||uT()}get(){return sb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cb=new to(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Tr(t,e,n,r,s={}){return f_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Wi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:l,...i};return cT()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ki(t.emulatorConfig.host)&&(f.credentials="include"),h_.fetch()(await d_(t,t.config.apiHost,n,c),f)})}async function f_(t,e,n){t._canInitEmulator=!1;const r={...ob,...e};try{const s=new ub(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw So(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw u_(t,h,f);Wt(t,h)}}catch(s){if(s instanceof Vn)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function no(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function d_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`;return ab.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function lb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ub{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),cb.get())})}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function Rd(t){return t!==void 0&&t.enterprise!==void 0}class hb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fb(t,e){return Tr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function ma(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pb(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=xu(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ai(jc(s.auth_time)),issuedAtTime:Ai(jc(s.iat)),expirationTime:Ai(jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=fm(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cd(t){const e=xu(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&mb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ui(t,ma(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?p_(s.providerUserInfo):[],o=yb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),f=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Sl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function _b(t){const e=Je(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function p_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){const n=await f_(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await d_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ki(t.emulatorConfig.host)&&(l.credentials="include"),h_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Eb(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Cd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pb(this,e)}reload(){return _b(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Ui(this,db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,f=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:A,providerData:V,stsTokenManager:L}=n;re(p&&L,e,"internal-error");const B=vs.fromJSON(this.name,L);re(typeof p=="string",e,"internal-error"),$n(r,e.name),$n(s,e.name),re(typeof _=="boolean",e,"internal-error"),re(typeof A=="boolean",e,"internal-error"),$n(i,e.name),$n(o,e.name),$n(c,e.name),$n(l,e.name),$n(f,e.name),$n(h,e.name);const H=new $t({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:f,lastLoginAt:h});return V&&Array.isArray(V)&&(H.providerData=V.map(Q=>({...Q}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new vs;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ga(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?p_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new vs;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,f),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;function _n(t){Pn(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m_.type="NONE";const kd=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ma(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(_n(kd),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||_n(kd);const o=$o(r,e.config.apiKey,e.name);let c=null;for(const f of n)try{const h=await f._get(o);if(h){let p;if(typeof h=="string"){const _=await ma(e,{idToken:h}).catch(()=>{});if(!_)break;p=await $t._fromGetAccountInfoResponse(e,_,h)}else p=$t._fromJSON(e,h);f!==i&&(c=p),i=f;break}}catch{}const l=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new Es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T_(e))return"Blackberry";if(I_(e))return"Webos";if(__(e))return"Safari";if((e.includes("chrome/")||y_(e))&&!e.includes("edge/"))return"Chrome";if(E_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g_(t=pt()){return/firefox\//i.test(t)}function __(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y_(t=pt()){return/crios\//i.test(t)}function v_(t=pt()){return/iemobile/i.test(t)}function E_(t=pt()){return/android/i.test(t)}function T_(t=pt()){return/blackberry/i.test(t)}function I_(t=pt()){return/webos/i.test(t)}function Mu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tb(t=pt()){var e;return Mu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Ib(){return hT()&&document.documentMode===10}function w_(t=pt()){return Mu(t)||E_(t)||I_(t)||T_(t)||/windows phone/i.test(t)||v_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=Vd(pt());break;case"Worker":n=`${Vd(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=6;class Sb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dd(this),this.idTokenSubscription=new Dd(this),this.beforeStateQueue=new wb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ma(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ib()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(In(this));const n=e?Je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Sb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Eb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&nb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jr(t){return Je(t)}class Dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=vT(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cb(t){Za=t}function b_(t){return Za.loadJS(t)}function Pb(){return Za.recaptchaEnterpriseScript}function kb(){return Za.gapiScript}function Vb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Db{constructor(){this.enterprise=new Nb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Nb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ob="recaptcha-enterprise",S_="NO_RECAPTCHA";class xb{constructor(e){this.type=Ob,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{fb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new hb(l);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,o(f.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Rd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(f=>{o(f)}).catch(()=>{o(S_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Db().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Rd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Pb();l.length!==0&&(l+=c),b_(l).then(()=>{s(c,i,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function Nd(t,e,n,r=!1,s=!1){const i=new xb(t);let o;if(s)o=S_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rl(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Nd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t,e){const n=eu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function Lb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fb(t,e,n){const r=Jr(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=R_(e),{host:o,port:c}=Ub(e),l=c===null?"":`:${c}`,f={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(Br(f,r.config.emulator)&&Br(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ki(o)?gm(`${i}//${o}${l}`):$b()}function R_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ub(t){const e=R_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Od(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Od(o)}}}function Od(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $b(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function Bb(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function Hb(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,n,"signInWithPassword",jb);case"emailLink":return qb(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,r,"signUpPassword",Bb);case"emailLink":return Hb(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="http://localhost";class Wr extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kb(t){const e=ai(ci(t)).link,n=e?ai(ci(e)).deep_link_id:null,r=ai(ci(t)).deep_link_id;return(r?ai(ci(r)).link:null)||r||n||e||t}class Fu{constructor(e){const n=ai(ci(e)),r=n.apiKey??null,s=n.oobCode??null,i=Wb(n.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Kb(e);try{return new Fu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fu.parseLink(n);return re(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ro{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ro{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ro{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return no(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=xd(r);return new Kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=xd(r);return new Kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends Vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _a(e,n,r,s)}}function P_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(t,i,e,r):i})}async function Qb(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await Ui(t,P_(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=xu(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),Kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t,e,n=!1){if(Dt(t.app))return Promise.reject(In(t));const r="signIn",s=await P_(t,r,e),i=await Kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Jb(t,e){return k_(Jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xb(t,e,n){if(Dt(t.app))return Promise.reject(In(t));const r=Jr(t),o=await Rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&V_(t),l}),c=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Zb(t,e,n){return Dt(t.app)?Promise.reject(In(t)):Jb(Je(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V_(t),r})}function eS(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function tS(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function nS(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function rS(t){return Je(t).signOut()}const ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=1e3,iS=10;class N_ extends D_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const oS=N_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends D_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O_.type="SESSION";const x_=O_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async f=>f(n.origin,i)),l=await aS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const f=Uu("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function lS(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function uS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function fS(){return M_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firebaseLocalStorageDb",dS=1,va="firebaseLocalStorage",F_="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function pS(){const t=indexedDB.deleteDatabase(L_);return new so(t).toPromise()}function Cl(){const t=indexedDB.open(L_,dS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(va,{keyPath:F_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(va)?e(r):(r.close(),await pS(),e(await Cl()))})})}async function Md(t,e,n){const r=tc(t,!0).put({[F_]:e,value:n});return new so(r).toPromise()}async function mS(t,e){const n=tc(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function Ld(t,e){const n=tc(t,!0).delete(e);return new so(n).toPromise()}const gS=800,_S=3;class U_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_S)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(fS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await uS(),!this.activeServiceWorker)return;this.sender=new cS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await Md(e,ya,"1"),await Ld(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new so(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U_.type="LOCAL";const yS=U_;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e){return e?_n(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ES(t){return k_(t.auth,new $u(t),t.bypassAuthState)}function TS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Yb(n,new $u(t),t.bypassAuthState)}async function IS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Qb(n,new $u(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ES;case"linkViaPopup":case"linkViaRedirect":return IS;case"reauthViaPopup":case"reauthViaRedirect":return TS;default:Wt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new to(2e3,1e4);class hs extends $_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wS.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="pendingRedirect",Bo=new Map;class bS extends $_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await SS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SS(t,e){const n=PS(e),r=CS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RS(t,e){Bo.set(t._key(),e)}function CS(t){return _n(t._redirectPersistence)}function PS(t){return $o(AS,t.config.apiKey,t.name)}async function kS(t,e,n=!1){if(Dt(t.app))return Promise.reject(In(t));const r=Jr(t),s=vS(r,e),o=await new bS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=10*60*1e3;class DS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fd(e))}saveEventToCache(e){this.cachedEventUids.add(Fd(e)),this.lastProcessedEventTime=Date.now()}}function Fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MS=/^https?/;async function LS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OS(t);for(const n of e)try{if(FS(n))return}catch{}Wt(t,"unauthorized-domain")}function FS(t){const e=bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MS.test(n))return!1;if(xS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new to(3e4,6e4);function Ud(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $S(t){return new Promise((e,n)=>{var s,i,o;function r(){Ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(on(t,"network-request-failed"))},timeout:US.get()})}if((i=(s=an().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const c=Vb("iframefcb");return an()[c]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},b_(`${kb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw jo=null,e})}let jo=null;function BS(t){return jo=jo||$S(t),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new to(5e3,15e3),qS="__/auth/iframe",HS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KS(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,HS):`https://${t.config.authDomain}/${qS}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=WS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wi(r).slice(1)}`}async function GS(t){const e=await BS(t),n=an().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:KS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},jS.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YS=500,JS=600,XS="_blank",ZS="http://localhost";class $d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eR(t,e,n,r=YS,s=JS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...QS,width:r.toString(),height:s.toString(),top:i,left:o},f=pt().toLowerCase();n&&(c=y_(f)?XS:n),g_(f)&&(e=e||ZS,l.scrollbars="yes");const h=Object.entries(l).reduce((_,[A,V])=>`${_}${A}=${V},`,"");if(Tb(f)&&c!=="_self")return tR(e||"",c),new $d(null);const p=window.open(e||"",c,h);re(p,t,"popup-blocked");try{p.focus()}catch{}return new $d(p)}function tR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="__/auth/handler",rR="emulator/auth/handler",sR=encodeURIComponent("fac");async function Bd(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof C_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ro){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),f=l?`#${sR}=${encodeURIComponent(l)}`:"";return`${iR(t)}?${Wi(c).slice(1)}${f}`}function iR({config:t}){return t.emulator?Ou(t,rR):`https://${t.authDomain}/${nR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="webStorageSupport";class oR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x_,this._completeRedirectFn=kS,this._overrideRedirectResult=RS}async _openPopup(e,n,r,s){var o;Pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Bd(e,n,r,bl(),s);return eR(e,i,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bd(e,n,r,bl(),s);return lS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GS(e),r=new DS(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[qc];i!==void 0&&n(!!i),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||__()||Mu()}}const aR=oR;var jd="@firebase/auth",qd="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uR(t){bs(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},f=new Rb(r,s,i,l);return Lb(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bs(new jr("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new cR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(jd,qd,lR(t)),sr(jd,qd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=5*60,fR=mm("authIdTokenMaxAge")||hR;let Hd=null;const dR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fR)return;const s=n==null?void 0:n.token;Hd!==s&&(Hd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pR(t=Em()){const e=eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mb(t,{popupRedirectResolver:aR,persistence:[yS,oS,x_]}),r=mm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=dR(i.toString());tS(n,o,()=>o(n.currentUser)),eS(n,c=>o(c))}}const s=dm("auth");return s&&Fb(n,`http://${s}`),n}function mR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Cb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uR("Browser");const gR={apiKey:"AIzaSyAdmh7rlKZbuiksbkPkpTA6LvMVdyEAwss",authDomain:"my-project-89f56.firebaseapp.com",projectId:"my-project-89f56",storageBucket:"my-project-89f56.firebasestorage.app",messagingSenderId:"727137485459",appId:"1:727137485459:web:57baa7b8b6666ee2fa0366",measurementId:"G-RZMYK4MGQB"},j_=vm(gR),qo=pR(j_),yn=O0(j_),q_=He(null),H_=He(!0),_R=(t,e)=>({name:e.split("@")[0],userId:t.slice(0,8),bio:"",avatarColor:"#1da1f2",createdAt:t_()});nS(qo,async t=>{q_.value=t,H_.value=!1});function nc(){const t=He("");return{currentUser:q_,authLoading:H_,authError:t,register:async(s,i)=>{t.value="";try{const{user:o}=await Xb(qo,s,i),c=Zn(yn,"users",o.uid);return(await Y0(c)).exists()||await i_(c,_R(o.uid,s)),o}catch(o){throw t.value=zd(o.code),o}},login:async(s,i)=>{t.value="";try{const{user:o}=await Zb(qo,s,i);return o}catch(o){throw t.value=zd(o.code),o}},logout:async()=>{await rS(qo)}}}function zd(t){return{"auth/email-already-in-use":"このメールアドレスはすでに使われています","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/weak-password":"パスワードは6文字以上にしてください","auth/user-not-found":"メールアドレスまたはパスワードが間違っています","auth/wrong-password":"メールアドレスまたはパスワードが間違っています","auth/invalid-credential":"メールアドレスまたはパスワードが間違っています","auth/too-many-requests":"しばらく時間をおいてから再試行してください"}[t]??`エラーが発生しました (${t})`}const{currentUser:Pl}=nc(),er=He([]),z_=He("");let Ho=null;const yR=t=>{W_();const e=K0(Wg(yn,"memos"),G0("uid","==",t));Ho=o_(e,n=>{er.value=n.docs.map(r=>{var i,o,c;const s=r.data();return{id:r.id,...s,createdAt:((c=(o=(i=s.createdAt)==null?void 0:i.toDate)==null?void 0:o.call(i))==null?void 0:c.toISOString())??s.createdAt}})},n=>{console.error("Firestore snapshot error:",n)})},W_=()=>{Ho&&(Ho(),Ho=null),er.value=[]};Fr(Pl,t=>{t?yR(t.uid):W_()},{immediate:!0});const vR=En(()=>er.value.filter(t=>!t.parentId).sort((t,e)=>t.isPinned!==e.isPinned?t.isPinned?-1:1:new Date(e.createdAt??0)-new Date(t.createdAt??0))),ER=En(()=>{const t=z_.value.trim().toLowerCase();return t?er.value.filter(e=>e.content.toLowerCase().includes(t)):[]}),TR=()=>Wg(yn,"memos");function Bu(){return{memos:ER,allMemos:vR,searchQuery:z_,addMemo:async(o,c=null)=>{!o.trim()||!Pl.value||await X0(TR(),{uid:Pl.value.uid,content:o.trim(),createdAt:t_(),likes:0,isLiked:!1,isPinned:!1,parentId:c||null})},deleteMemo:async o=>{const c=f=>er.value.filter(h=>h.parentId===f).flatMap(h=>[h.id,...c(h.id)]),l=[o,...c(o)];await Promise.all(l.map(f=>J0(Zn(yn,"memos",f))))},toggleLike:async o=>{const c=er.value.find(f=>f.id===o);if(!c)return;const l=!c.isLiked;await Bc(Zn(yn,"memos",o),{isLiked:l,likes:c.likes+(l?1:-1)})},togglePin:async o=>{const c=er.value.find(l=>l.id===o);c&&await Bc(Zn(yn,"memos",o),{isPinned:!c.isPinned})},getReplies:o=>er.value.filter(c=>c.parentId===o).sort((c,l)=>{var p,_,A,V;const f=((_=(p=c.createdAt)==null?void 0:p.toDate)==null?void 0:_.call(p))??new Date(c.createdAt),h=((V=(A=l.createdAt)==null?void 0:A.toDate)==null?void 0:V.call(A))??new Date(l.createdAt);return f-h}),updateMemo:async(o,c)=>{c.trim()&&await Bc(Zn(yn,"memos",o),{content:c.trim()})}}}const Gr=He(!1),IR=()=>{const t=localStorage.getItem("theme");t?Gr.value=t==="dark":Gr.value=window.matchMedia("(prefers-color-scheme: dark)").matches,K_()},K_=()=>{Gr.value?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")},wR=()=>{Gr.value=!Gr.value};Fr(Gr,t=>{localStorage.setItem("theme",t?"dark":"light"),K_()});const G_=()=>({isDarkMode:Gr,toggleDarkMode:wR,loadTheme:IR}),ln=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},AR={class:"nav-sidebar"},bR={class:"nav-list"},SR=["onClick"],RR={class:"nav-label"},CR=["title"],PR={class:"nav-label"},kR={class:"nav-bottom"},VR={class:"nav-bottom-list"},DR=["onClick"],NR={class:"nav-bottom-label"},OR=["title"],xR={class:"nav-bottom-label"},MR={__name:"Navigation",props:{currentPage:{type:String,required:!0}},emits:["navigate"],setup(t,{emit:e}){const n=e,{isDarkMode:r,toggleDarkMode:s}=G_(),i=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),$e("polyline",{points:"9 22 9 12 15 12 15 22"})]),o=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("circle",{cx:"11",cy:"11",r:"8"}),$e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]),c=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),$e("circle",{cx:"12",cy:"7",r:"4"})]),l=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]),f=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("circle",{cx:"12",cy:"12",r:"5"}),$e("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),$e("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),$e("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),$e("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),$e("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),$e("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),$e("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),$e("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]),h=[{id:"home",label:"ホーム",icon:i},{id:"search",label:"検索",icon:o},{id:"profile",label:"プロフィール",icon:c}];return(p,_)=>(ne(),me(Le,null,[C("nav",AR,[C("ul",bR,[(ne(),me(Le,null,ws(h,A=>C("li",{key:A.id,class:Qe(["nav-item",{active:t.currentPage===A.id}]),onClick:V=>n("navigate",A.id)},[(ne(),Ot(Eo(A.icon),{class:"nav-icon"})),C("span",RR,ke(A.label),1)],10,SR)),64))]),C("button",{class:"theme-toggle-button",onClick:_[0]||(_[0]=(...A)=>le(s)&&le(s)(...A)),title:le(r)?"ライトモードに切り替え":"ダークモードに切り替え"},[(ne(),Ot(Eo(le(r)?l:f),{class:"nav-icon"})),C("span",PR,ke(le(r)?"ダーク":"ライト"),1)],8,CR)]),C("nav",kR,[C("ul",VR,[(ne(),me(Le,null,ws(h,A=>C("li",{key:A.id,class:Qe(["nav-bottom-item",{active:t.currentPage===A.id}]),onClick:V=>n("navigate",A.id)},[(ne(),Ot(Eo(A.icon),{class:"nav-icon"})),C("span",NR,ke(A.label),1)],10,DR)),64)),C("li",{class:"nav-bottom-item",onClick:_[1]||(_[1]=(...A)=>le(s)&&le(s)(...A)),title:le(r)?"ライトモードに切り替え":"ダークモードに切り替え"},[(ne(),Ot(Eo(le(r)?l:f),{class:"nav-icon"})),C("span",xR,ke(le(r)?"ダーク":"ライト"),1)],8,OR)])])],64))}},LR=ln(MR,[["__scopeId","data-v-e9c4814c"]]),{currentUser:kl}=nc(),Vl=He({name:"",userId:"",bio:"",avatarColor:"#1da1f2"});let Ro=null;Fr(kl,t=>{Ro&&(Ro(),Ro=null),t&&(Ro=o_(Zn(yn,"users",t.uid),e=>{e.exists()&&(Vl.value={...Vl.value,...e.data()})}))},{immediate:!0});function rc(){return{profile:Vl,updateProfile:async e=>{kl.value&&await i_(Zn(yn,"users",kl.value.uid),e,{merge:!0})}}}const FR={__name:"UserAvatar",props:{name:{type:String,default:"あなた"},color:{type:String,default:"#1da1f2"},size:{type:Number,default:40}},setup(t){const e=t,n=En(()=>e.name.trim().charAt(0)||"?");return(r,s)=>(ne(),me("div",{class:"user-avatar",style:ji({backgroundColor:t.color,width:t.size+"px",height:t.size+"px",fontSize:Math.round(t.size*.42)+"px"})},ke(n.value),5))}},Bi=ln(FR,[["__scopeId","data-v-b15c4df8"]]),UR={class:"memo-form"},$R={class:"form-header"},BR=["onKeydown"],jR={class:"form-footer"},qR=["disabled"],Co=280,HR=260,zR={__name:"MemoForm",emits:["submit"],setup(t,{emit:e}){const n=e,{profile:r}=rc(),s=He(""),i=He(null),o=En(()=>{const f=s.value.length;return f>=Co?"over":f>=HR?"caution":""});Fr(s,async()=>{await Ko(),i.value&&(i.value.style.height="auto",i.value.style.height=i.value.scrollHeight+"px")});const l=()=>{s.value.trim()&&s.value.length<=Co&&(n("submit",s.value),s.value="",i.value&&(i.value.style.height="auto"))};return(f,h)=>(ne(),me("div",UR,[C("div",$R,[Me(Bi,{name:le(r).name,color:le(r).avatarColor,size:40},null,8,["name","color"]),vn(C("textarea",{ref_key:"textareaRef",ref:i,"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p),placeholder:"今何してる？",class:"memo-input",onKeydown:[zn(Jn(l,["ctrl"]),["enter"]),zn(Jn(l,["meta"]),["enter"])]},null,40,BR),[[Tn,s.value]])]),C("div",jR,[C("span",{class:Qe(["char-count",o.value])},ke(s.value.length)+" / "+ke(Co),3),C("button",{class:"submit-button",onClick:l,disabled:!s.value.trim()||s.value.length>Co}," 投稿 ",8,qR)])]))}},WR=ln(zR,[["__scopeId","data-v-2d572d53"]]),KR={key:0,class:"pin-indicator"},GR={class:"memo-item"},QR={class:"avatar-col"},YR={key:0,class:"thread-line"},JR={class:"memo-content"},XR={class:"memo-info"},ZR={class:"username"},eC={class:"user-id"},tC={class:"timestamp"},nC={key:0,class:"memo-text"},rC={key:1,class:"edit-form-container"},sC=["onKeydown"],iC={class:"edit-form-footer"},oC=["disabled"],aC={class:"memo-actions"},cC={class:"action-cell"},lC=["onClick"],uC={class:"action-count"},hC={class:"action-cell"},fC=["onClick"],dC={viewBox:"0 0 24 24",width:"18",height:"18"},pC=["fill"],mC={class:"action-count"},gC={class:"action-cell"},_C=["onClick","title"],yC={viewBox:"0 0 24 24",width:"18",height:"18"},vC=["fill"],EC={class:"action-cell"},TC=["onClick"],IC={class:"action-cell"},wC=["onClick"],AC={key:0,class:"reply-form-container"},bC={class:"reply-form"},SC=["onKeydown"],RC={class:"reply-form-footer"},CC=["disabled"],PC={__name:"MemoCard",props:{memo:{type:Object,required:!0}},setup(t){const e=t,{profile:n}=rc(),{addMemo:r,deleteMemo:s,toggleLike:i,togglePin:o,getReplies:c,updateMemo:l}=Bu(),f=He(null),h=He(""),p=He(null),_=He(null),A=He(""),V=He(null),L=En(()=>{const E=A.value.length;return E>=280?"over":E>=260?"caution":""}),B=async E=>{var g;if(_.value===E.id){H();return}_.value=E.id,A.value=E.content,await Ko(),(g=V.value)==null||g.focus()},H=()=>{_.value=null,A.value=""},Q=async()=>{!A.value.trim()||A.value.length>280||!_.value||(await l(_.value,A.value),H())},Z=E=>c(E).flatMap(Y=>[Y,...Z(Y.id)]),G=En(()=>[e.memo,...Z(e.memo.id)]),oe=E=>c(E).length,de=En(()=>{const E=h.value.length;return E>=280?"over":E>=260?"caution":""}),b={MINUTES_PER_HOUR:60,HOURS_PER_DAY:24,DAYS_PER_WEEK:7},v=E=>{const g=new Date(E),xe=new Date-g,fe=Math.floor(xe/6e4),Se=Math.floor(xe/36e5),ve=Math.floor(xe/864e5);return fe<1?"たった今":fe<b.MINUTES_PER_HOUR?`${fe}分前`:Se<b.HOURS_PER_DAY?`${Se}時間前`:ve<b.DAYS_PER_WEEK?`${ve}日前`:g.toLocaleDateString("ja-JP",{month:"short",day:"numeric"})},y=async E=>{var g;if(f.value===E){f.value=null,h.value="";return}f.value=E,h.value="",await Ko(),(g=p.value)==null||g.focus()},w=()=>{f.value=null,h.value=""},I=()=>{h.value.trim()&&h.value.length<=280&&f.value&&(r(h.value,f.value),h.value="",f.value=null)};return(E,g)=>(ne(),me("div",{class:Qe(["memo-card",{pinned:t.memo.isPinned}])},[t.memo.isPinned?(ne(),me("div",KR,[...g[2]||(g[2]=[C("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},[C("path",{fill:"#1da1f2",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"})],-1),C("span",null,"ピン留め",-1)])])):Yn("",!0),(ne(!0),me(Le,null,ws(G.value,(Y,xe)=>(ne(),me(Le,{key:Y.id},[C("div",GR,[C("div",QR,[Me(Bi,{name:le(n).name,color:le(n).avatarColor,size:48},null,8,["name","color"]),xe<G.value.length-1||f.value===Y.id?(ne(),me("div",YR)):Yn("",!0)]),C("div",JR,[C("div",XR,[C("span",ZR,ke(le(n).name),1),C("span",eC,"@"+ke(le(n).userId),1),C("span",tC,ke(v(Y.createdAt)),1)]),_.value!==Y.id?(ne(),me("p",nC,ke(Y.content),1)):(ne(),me("div",rC,[vn(C("textarea",{ref_for:!0,ref:fe=>{fe&&(V.value=fe)},"onUpdate:modelValue":g[0]||(g[0]=fe=>A.value=fe),class:"edit-input",onKeydown:[zn(Jn(Q,["ctrl"]),["enter"]),zn(Jn(Q,["meta"]),["enter"]),zn(H,["esc"])]},null,40,sC),[[Tn,A.value]]),C("div",iC,[C("span",{class:Qe(["edit-char-count",L.value])},ke(A.value.length)+"/280 ",3),C("button",{class:"cancel-button",onClick:H},"キャンセル"),C("button",{class:"submit-reply-button",onClick:Q,disabled:!A.value.trim()||A.value.length>280}," 保存 ",8,oC)])])),C("div",aC,[C("div",cC,[C("button",{class:Qe(["action-button reply-button",{active:f.value===Y.id}]),onClick:fe=>y(Y.id),title:"リプライ"},[g[3]||(g[3]=C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.515 5.176z"})],-1)),C("span",uC,ke(oe(Y.id)>0?oe(Y.id):""),1)],10,lC)]),C("div",hC,[C("button",{class:Qe(["action-button like-button",{liked:Y.isLiked}]),onClick:fe=>le(i)(Y.id)},[(ne(),me("svg",dC,[C("path",{fill:Y.isLiked?"#e0245e":"currentColor",d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"},null,8,pC)])),C("span",mC,ke(Y.likes),1)],10,fC)]),C("div",gC,[xe===0?(ne(),me("button",{key:0,class:Qe(["action-button pin-button",{pinned:Y.isPinned}]),onClick:fe=>le(o)(Y.id),title:Y.isPinned?"ピン留めを解除":"ピン留め"},[(ne(),me("svg",yC,[C("path",{fill:Y.isPinned?"#1da1f2":"currentColor",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"},null,8,vC)]))],10,_C)):Yn("",!0)]),C("div",EC,[C("button",{class:Qe(["action-button edit-button",{active:_.value===Y.id}]),onClick:fe=>B(Y),title:"編集"},[...g[4]||(g[4]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})],-1)])],10,TC)]),C("div",IC,[C("button",{class:"action-button delete-button",onClick:fe=>le(s)(Y.id)},[...g[5]||(g[5]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07z"})],-1)])],8,wC)])])])]),Me(mE,{name:"reply-form"},{default:zl(()=>[f.value===Y.id?(ne(),me("div",AC,[C("div",bC,[Me(Bi,{name:le(n).name,color:le(n).avatarColor,size:32},null,8,["name","color"]),vn(C("textarea",{ref_for:!0,ref:fe=>{fe&&(p.value=fe)},"onUpdate:modelValue":g[1]||(g[1]=fe=>h.value=fe),placeholder:"リプライを入力...",class:"reply-input",onKeydown:[zn(Jn(I,["ctrl"]),["enter"]),zn(Jn(I,["meta"]),["enter"])]},null,40,SC),[[Tn,h.value]])]),C("div",RC,[C("span",{class:Qe(["reply-char-count",de.value])},ke(h.value.length)+"/280 ",3),C("button",{class:"cancel-button",onClick:w},"キャンセル"),C("button",{class:"submit-reply-button",onClick:I,disabled:!h.value.trim()||h.value.length>280}," リプライ ",8,CC)])])):Yn("",!0)]),_:2},1024)],64))),128))],2))}},Q_=ln(PC,[["__scopeId","data-v-8e589809"]]),kC={class:"memo-list"},VC={key:0,class:"empty-state"},DC={key:1,class:"empty-state"},NC={class:"empty-hint"},OC={__name:"MemoList",props:{memos:{type:Array,required:!0},searchQuery:{type:String,default:""}},setup(t){return(e,n)=>(ne(),me("div",kC,[t.memos.length===0&&!t.searchQuery?(ne(),me("div",VC,[...n[0]||(n[0]=[C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"})],-1),C("p",{class:"empty-message"},"まだメモがありません",-1),C("p",{class:"empty-hint"},"上のフォームから最初のメモを投稿してみましょう！",-1)])])):t.memos.length===0&&t.searchQuery?(ne(),me("div",DC,[n[1]||(n[1]=C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1)),n[2]||(n[2]=C("p",{class:"empty-message"},"検索結果がありません",-1)),C("p",NC,"「"+ke(t.searchQuery)+"」に一致するメモは見つかりませんでした",1)])):(ne(),Ot(xE,{key:2,name:"memo",tag:"div"},{default:zl(()=>[(ne(!0),me(Le,null,ws(t.memos,r=>(ne(),Ot(Q_,{key:r.id,memo:r},null,8,["memo"]))),128))]),_:1}))]))}},Wd=ln(OC,[["__scopeId","data-v-61c44b03"]]),xC={class:"search-bar"},MC={class:"search-input-wrapper"},LC={__name:"SearchBar",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","focus","blur"],setup(t,{emit:e}){const n=t,r=e,s=En({get:()=>n.modelValue,set:o=>r("update:modelValue",o)}),i=()=>{r("update:modelValue","")};return(o,c)=>(ne(),me("div",xC,[C("div",MC,[c[4]||(c[4]=C("svg",{class:"search-icon",viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1)),vn(C("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>s.value=l),class:"search-input",type:"text",placeholder:"検索...",onKeydown:zn(i,["esc"]),onFocus:c[1]||(c[1]=l=>r("focus")),onBlur:c[2]||(c[2]=l=>r("blur"))},null,544),[[Tn,s.value]]),s.value?(ne(),me("button",{key:0,class:"clear-button",onClick:i,title:"クリア"},[...c[3]||(c[3]=[C("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},[C("path",{fill:"currentColor",d:"M13.414 12l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 7.707 6.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-4.293 4.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"})],-1)])])):Yn("",!0)])]))}},FC=ln(LC,[["__scopeId","data-v-2379bbae"]]),UC={class:"modal"},$C={class:"modal-header"},BC=["disabled"],jC={class:"modal-body"},qC={class:"avatar-section"},HC={class:"color-picker"},zC={class:"color-swatches"},WC=["title","onClick"],KC={class:"form-group"},GC={class:"form-group"},QC={class:"id-input-wrap"},YC={class:"form-group"},JC={__name:"ProfileEditModal",emits:["close","saved"],setup(t,{emit:e}){const n=e,{profile:r,updateProfile:s}=rc(),i=["#1da1f2","#e0245e","#17bf63","#f4900c","#794bc4","#ff7043","#00b8d4","#546e7a"],o=Sa({name:r.value.name,userId:r.value.userId,bio:r.value.bio,avatarColor:r.value.avatarColor}),c=()=>{o.userId=o.userId.replace(/[^a-zA-Z0-9_]/g,"")},l=()=>{o.name.trim()&&(s({name:o.name.trim(),userId:o.userId.trim()||"user",bio:o.bio.trim(),avatarColor:o.avatarColor}),n("saved"),n("close"))};return(f,h)=>(ne(),me("div",{class:"modal-overlay",onClick:h[4]||(h[4]=Jn(p=>f.$emit("close"),["self"]))},[C("div",UC,[C("div",$C,[C("button",{class:"close-button",onClick:h[0]||(h[0]=p=>f.$emit("close"))},[...h[5]||(h[5]=[C("svg",{viewBox:"0 0 24 24",width:"20",height:"20"},[C("path",{fill:"currentColor",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])]),h[6]||(h[6]=C("h2",{class:"modal-title"},"プロフィール編集",-1)),C("button",{class:"save-button",disabled:!o.name.trim(),onClick:l}," 保存 ",8,BC)]),C("div",jC,[C("div",qC,[Me(Bi,{name:o.name||"?",color:o.avatarColor,size:72},null,8,["name","color"]),C("div",HC,[h[7]||(h[7]=C("p",{class:"color-label"},"アイコンカラー",-1)),C("div",zC,[(ne(),me(Le,null,ws(i,p=>C("button",{key:p,class:Qe(["color-swatch",{selected:o.avatarColor===p}]),style:ji({backgroundColor:p}),title:p,onClick:_=>o.avatarColor=p},null,14,WC)),64))])])]),C("div",KC,[h[8]||(h[8]=C("label",{class:"field-label"},[Ql("名前 "),C("span",{class:"required"},"*")],-1)),vn(C("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>o.name=p),type:"text",maxlength:"50",placeholder:"あなたの名前",class:"field-input"},null,512),[[Tn,o.name]]),C("span",{class:Qe(["field-count",{warn:o.name.length>=45}])},ke(o.name.length)+" / 50 ",3)]),C("div",GC,[h[10]||(h[10]=C("label",{class:"field-label"},"ユーザーID",-1)),C("div",QC,[h[9]||(h[9]=C("span",{class:"at-sign"},"@",-1)),vn(C("input",{"onUpdate:modelValue":h[2]||(h[2]=p=>o.userId=p),type:"text",maxlength:"20",placeholder:"user_id",class:"field-input id-input",onInput:c},null,544),[[Tn,o.userId]])]),C("span",{class:Qe(["field-count",{warn:o.userId.length>=18}])},ke(o.userId.length)+" / 20 ",3)]),C("div",YC,[h[11]||(h[11]=C("label",{class:"field-label"},"自己紹介",-1)),vn(C("textarea",{"onUpdate:modelValue":h[3]||(h[3]=p=>o.bio=p),maxlength:"160",placeholder:"自己紹介を書いてください",class:"field-input bio-input",rows:"4"},null,512),[[Tn,o.bio]]),C("span",{class:Qe(["field-count",{warn:o.bio.length>=140}])},ke(o.bio.length)+" / 160 ",3)])])])]))}},XC=ln(JC,[["__scopeId","data-v-fe7725c3"]]),ZC={class:"profile-page"},e1={class:"profile-header"},t1={class:"profile-top"},n1={class:"profile-info"},r1={class:"profile-name"},s1={class:"profile-id"},i1={key:0,class:"profile-bio"},o1={class:"profile-stats"},a1={class:"stat"},c1={key:0,class:"empty-state"},l1={__name:"ProfilePage",setup(t){const{profile:e}=rc(),{allMemos:n}=Bu(),r=He(!1);return(s,i)=>(ne(),me("div",ZC,[C("div",e1,[C("div",t1,[Me(Bi,{name:le(e).name,color:le(e).avatarColor,size:72},null,8,["name","color"]),C("button",{class:"edit-button",onClick:i[0]||(i[0]=o=>r.value=!0)},"編集")]),C("div",n1,[C("span",r1,ke(le(e).name),1),C("span",s1,"@"+ke(le(e).userId),1),le(e).bio?(ne(),me("p",i1,ke(le(e).bio),1)):Yn("",!0)]),C("div",o1,[C("span",a1,[C("strong",null,ke(le(n).length),1),i[2]||(i[2]=Ql(" 投稿",-1))])])]),i[4]||(i[4]=C("div",{class:"posts-header"},"投稿",-1)),le(n).length===0?(ne(),me("div",c1,[...i[3]||(i[3]=[C("p",{class:"empty-message"},"まだ投稿がありません",-1),C("p",{class:"empty-hint"},"ホーム画面から最初のメモを投稿してみましょう！",-1)])])):(ne(!0),me(Le,{key:1},ws(le(n),o=>(ne(),Ot(Q_,{key:o.id,memo:o},null,8,["memo"]))),128)),r.value?(ne(),Ot(XC,{key:2,onClose:i[1]||(i[1]=o=>r.value=!1)})):Yn("",!0)]))}},u1=ln(l1,[["__scopeId","data-v-fbb75362"]]),h1={class:"auth-wrapper"},f1={class:"auth-card"},d1={class:"auth-tabs"},p1={class:"form-group"},m1={class:"form-group"},g1={key:0,class:"auth-error"},_1=["disabled"],y1={key:0},v1={key:1},E1={__name:"AuthForm",setup(t){const{authError:e,login:n,register:r}=nc(),s=He("login"),i=He(""),o=He(""),c=He(!1),l=async()=>{c.value=!0;try{s.value==="login"?await n(i.value,o.value):await r(i.value,o.value)}catch{}finally{c.value=!1}};return(f,h)=>(ne(),me("div",h1,[C("div",f1,[h[6]||(h[6]=C("div",{class:"auth-logo"},[C("svg",{viewBox:"0 0 24 24",width:"40",height:"40"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})])],-1)),h[7]||(h[7]=C("h1",{class:"auth-title"},"SNS Memo",-1)),C("div",d1,[C("button",{class:Qe(["auth-tab",{active:s.value==="login"}]),onClick:h[0]||(h[0]=p=>s.value="login")},"ログイン",2),C("button",{class:Qe(["auth-tab",{active:s.value==="register"}]),onClick:h[1]||(h[1]=p=>s.value="register")},"新規登録",2)]),C("form",{class:"auth-form",onSubmit:Jn(l,["prevent"])},[C("div",p1,[h[4]||(h[4]=C("label",{class:"form-label"},"メールアドレス",-1)),vn(C("input",{"onUpdate:modelValue":h[2]||(h[2]=p=>i.value=p),type:"email",class:"form-input",placeholder:"example@email.com",autocomplete:"email",required:""},null,512),[[Tn,i.value]])]),C("div",m1,[h[5]||(h[5]=C("label",{class:"form-label"},"パスワード",-1)),vn(C("input",{"onUpdate:modelValue":h[3]||(h[3]=p=>o.value=p),type:"password",class:"form-input",placeholder:"6文字以上",autocomplete:"current-password",required:"",minlength:"6"},null,512),[[Tn,o.value]])]),le(e)?(ne(),me("p",g1,ke(le(e)),1)):Yn("",!0),C("button",{type:"submit",class:"auth-submit",disabled:c.value},[c.value?(ne(),me("span",y1,"処理中...")):(ne(),me("span",v1,ke(s.value==="login"?"ログイン":"登録する"),1))],8,_1)],32)])]))}},T1=ln(E1,[["__scopeId","data-v-d4a8c643"]]),I1={key:0,class:"loading-screen"},w1={class:"app-header"},A1={class:"app-wrapper"},b1={class:"app-container"},S1={class:"app-main"},R1={key:0,class:"search-prompt"},C1={__name:"App",setup(t){const{memos:e,allMemos:n,searchQuery:r,addMemo:s}=Bu(),{currentUser:i,authLoading:o,logout:c}=nc(),l=He("home");return(f,h)=>le(o)?(ne(),me("div",I1,[...h[3]||(h[3]=[C("svg",{viewBox:"0 0 24 24",width:"40",height:"40"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})],-1)])])):le(i)?(ne(),me(Le,{key:2},[C("header",w1,[h[5]||(h[5]=C("svg",{viewBox:"0 0 24 24",width:"26",height:"26","aria-hidden":"true"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})],-1)),h[6]||(h[6]=C("span",{class:"app-title"},"SNS Memo",-1)),C("button",{class:"logout-button",onClick:h[0]||(h[0]=(...p)=>le(c)&&le(c)(...p)),title:"ログアウト"},[...h[4]||(h[4]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1)])])]),C("div",A1,[Me(LR,{"current-page":l.value,onNavigate:h[1]||(h[1]=p=>l.value=p)},null,8,["current-page"]),C("div",b1,[C("main",S1,[l.value==="profile"?(ne(),Ot(u1,{key:0})):l.value==="search"?(ne(),me(Le,{key:1},[Me(FC,{modelValue:le(r),"onUpdate:modelValue":h[2]||(h[2]=p=>it(r)?r.value=p:null),autofocus:""},null,8,["modelValue"]),le(r)?(ne(),Ot(Wd,{key:1,memos:le(e),"search-query":le(r)},null,8,["memos","search-query"])):(ne(),me("div",R1,[...h[7]||(h[7]=[C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1),C("p",{class:"search-prompt-message"},"キーワードを入力して検索",-1),C("p",{class:"search-prompt-hint"},"メモの内容で検索できます",-1)])]))],64)):(ne(),me(Le,{key:2},[Me(WR,{onSubmit:le(s)},null,8,["onSubmit"]),Me(Wd,{memos:le(n),"search-query":""},null,8,["memos"])],64))])])])],64)):(ne(),Ot(T1,{key:1}))}},P1=ln(C1,[["__scopeId","data-v-c0b46f38"]]),{loadTheme:k1}=G_();k1();WE(P1).mount("#app");
