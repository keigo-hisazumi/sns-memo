(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},ds=[],tn=()=>{},Gd=()=>!1,Ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ol=t=>t.startsWith("onUpdate:"),Je=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vy=Object.prototype.hasOwnProperty,be=(t,e)=>vy.call(t,e),ie=Array.isArray,ps=t=>Ia(t)==="[object Map]",Qd=t=>Ia(t)==="[object Set]",ue=t=>typeof t=="function",je=t=>typeof t=="string",yr=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Yd=t=>(Ne(t)||ue(t))&&ue(t.then)&&ue(t.catch),Jd=Object.prototype.toString,Ia=t=>Jd.call(t),Ey=t=>Ia(t).slice(8,-1),Xd=t=>Ia(t)==="[object Object]",Ml=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ty=/-\w/g,Ft=wa(t=>t.replace(Ty,e=>e.slice(1).toUpperCase())),Iy=/\B([A-Z])/g,vr=wa(t=>t.replace(Iy,"-$1").toLowerCase()),Aa=wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),vc=wa(t=>t?`on${Aa(t)}`:""),rr=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e},wy=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Dh;const ba=()=>Dh||(Dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qi(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Ry(r):qi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Ne(t))return t}const Ay=/;(?![^(]*\))/g,by=/:([^]+)/,Sy=/\/\*[^]*?\*\//g;function Ry(t){const e={};return t.replace(Sy,"").split(Ay).forEach(n=>{if(n){const r=n.split(by);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qe(t){let e="";if(je(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Qe(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Py=Nl(Cy);function ep(t){return!!t||t===""}const tp=t=>!!(t&&t.__v_isRef===!0),Ve=t=>je(t)?t:t==null?"":ie(t)||Ne(t)&&(t.toString===Jd||!ue(t.toString))?tp(t)?Ve(t.value):JSON.stringify(t,np,2):String(t),np=(t,e)=>tp(e)?np(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ec(r,i)+" =>"]=s,n),{})}:Qd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ec(n))}:yr(e)?Ec(e):Ne(e)&&!ie(e)&&!Xd(e)?String(e):e,Ec=(t,e="")=>{var n;return yr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class ky{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vy(){return Et}let ke;const Tc=new WeakSet;class rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tc.has(this)&&(Tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ip(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nh(this),op(this);const e=ke,n=Bt;ke=this,Bt=!0;try{return this.fn()}finally{ap(this),ke=e,Bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zc(this)&&this.run()}get dirty(){return zc(this)}}let sp=0,mi,gi;function ip(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function Fl(){sp++}function Ul(){if(--sp>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function op(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ap(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$l(r),Dy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function cp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Si)||(t.globalVersion=Si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!zc(t))))return;t.flags|=2;const e=t.dep,n=ke,r=Bt;ke=t,Bt=!0;try{op(t);const s=t.fn(t._value);(e.version===0||rr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Bt=r,ap(t),t.flags&=-3}}function $l(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$l(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bt=!0;const lp=[];function bn(){lp.push(Bt),Bt=!1}function Sn(){const t=lp.pop();Bt=t===void 0?!0:t}function Nh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Si=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Bt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Ny(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,up(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Si++,this.notify(e)}notify(e){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ul()}}}function up(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)up(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wc=new WeakMap,Fr=Symbol(""),Kc=Symbol(""),Ri=Symbol("");function ht(t,e,n){if(Bt&&ke){let r=Wc.get(t);r||Wc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bl),s.map=r,s.key=n),s.track()}}function gn(t,e,n,r,s,i){const o=Wc.get(t);if(!o){Si++;return}const c=l=>{l&&l.trigger()};if(Fl(),e==="clear")o.forEach(c);else{const l=ie(t),f=l&&Ml(n);if(l&&n==="length"){const h=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ri||!yr(g)&&g>=h)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),f&&c(o.get(Ri)),e){case"add":l?f&&c(o.get("length")):(c(o.get(Fr)),ps(t)&&c(o.get(Kc)));break;case"delete":l||(c(o.get(Fr)),ps(t)&&c(o.get(Kc)));break;case"set":ps(t)&&c(o.get(Fr));break}}Ul()}function is(t){const e=Ae(t);return e===t?e:(ht(e,"iterate",Ri),xt(t)?e:e.map(qt))}function Sa(t){return ht(t=Ae(t),"iterate",Ri),t}function Hn(t,e){return Rn(t)?Ur(t)?ws(qt(e)):ws(e):qt(e)}const Oy={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,t=>Hn(this,t))},concat(...t){return is(this).concat(...t.map(e=>ie(e)?is(e):e))},entries(){return Ic(this,"entries",t=>(t[1]=Hn(this,t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(r=>Hn(this,r)),arguments)},find(t,e){return dn(this,"find",t,e,n=>Hn(this,n),arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,n=>Hn(this,n),arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return wc(this,"includes",t)},indexOf(...t){return wc(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return wc(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return si(this,"pop")},push(...t){return si(this,"push",t)},reduce(t,...e){return Oh(this,"reduce",t,e)},reduceRight(t,...e){return Oh(this,"reduceRight",t,e)},shift(){return si(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return si(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return si(this,"unshift",t)},values(){return Ic(this,"values",t=>Hn(this,t))}};function Ic(t,e,n){const r=Sa(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const xy=Array.prototype;function dn(t,e,n,r,s,i){const o=Sa(t),c=o!==t&&!xt(t),l=o[e];if(l!==xy[e]){const p=l.apply(t,i);return c?qt(p):p}let f=n;o!==t&&(c?f=function(p,g){return n.call(this,Hn(t,p),g,t)}:n.length>2&&(f=function(p,g){return n.call(this,p,g,t)}));const h=l.call(o,f,r);return c&&s?s(h):h}function Oh(t,e,n,r){const s=Sa(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Hn(t,c),l,t)}),s[e](i,...r)}function wc(t,e,n){const r=Ae(t);ht(r,"iterate",Ri);const s=r[e](...n);return(s===-1||s===!1)&&Hl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function si(t,e,n=[]){bn(),Fl();const r=Ae(t)[e].apply(t,n);return Ul(),Sn(),r}const My=Nl("__proto__,__v_isRef,__isVue"),hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yr));function Ly(t){yr(t)||(t=String(t));const e=Ae(this);return ht(e,"has",t),e.hasOwnProperty(t)}class fp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ky:gp:i?mp:pp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=Oy[n]))return l;if(n==="hasOwnProperty")return Ly}const c=Reflect.get(e,n,it(e)?e:r);if((yr(n)?hp.has(n):My(n))||(s||ht(e,"get",n),i))return c;if(it(c)){const l=o&&Ml(n)?c:c.value;return s&&Ne(l)?Qc(l):l}return Ne(c)?s?Qc(c):Ra(c):c}}class dp extends fp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&Ml(n);if(!this._isShallow){const f=Rn(i);if(!xt(r)&&!Rn(r)&&(i=Ae(i),r=Ae(r)),!o&&it(i)&&!it(r))return f||(i.value=r),!0}const c=o?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,it(e)?e:s);return e===Ae(s)&&(c?rr(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!yr(n)||!hp.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",ie(e)?"length":Fr),Reflect.ownKeys(e)}}class Fy extends fp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new dp,$y=new Fy,By=new dp(!0);const Gc=t=>t,_o=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,f=s[t](...r),h=n?Gc:e?ws:qt;return!e&&ht(i,"iterate",l?Kc:Fr),{next(){const{value:p,done:g}=f.next();return g?{value:p,done:g}:{value:c?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qy(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(rr(s,c)&&ht(o,"get",s),ht(o,"get",c));const{has:l}=_o(o),f=e?Gc:t?ws:qt;if(l.call(o,s))return f(i.get(s));if(l.call(o,c))return f(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ae(s),"iterate",Fr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(rr(s,c)&&ht(o,"has",s),ht(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),f=e?Gc:t?ws:qt;return!t&&ht(l,"iterate",Fr),c.forEach((h,p)=>s.call(i,f(h),f(p),o))}};return Je(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){!e&&!xt(s)&&!Rn(s)&&(s=Ae(s));const i=Ae(this);return _o(i).has.call(i,s)||(i.add(s),gn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!Rn(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=_o(o);let f=c.call(o,s);f||(s=Ae(s),f=c.call(o,s));const h=l.call(o,s);return o.set(s,i),f?rr(i,h)&&gn(o,"set",s,i):gn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=_o(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const f=i.delete(s);return l&&gn(i,"delete",s,void 0),f},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jy(s,t,e)}),n}function jl(t,e){const n=qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Hy={get:jl(!1,!1)},zy={get:jl(!1,!0)},Wy={get:jl(!0,!1)};const pp=new WeakMap,mp=new WeakMap,gp=new WeakMap,Ky=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(Ey(t))}function Ra(t){return Rn(t)?t:ql(t,!1,Uy,Hy,pp)}function Yy(t){return ql(t,!1,By,zy,mp)}function Qc(t){return ql(t,!0,$y,Wy,gp)}function ql(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Qy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ur(t){return Rn(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Jy(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Zd(t,"__v_skip",!0),t}const qt=t=>Ne(t)?Ra(t):t,ws=t=>Ne(t)?Qc(t):t;function it(t){return t?t.__v_isRef===!0:!1}function He(t){return Xy(t,!1)}function Xy(t,e){return it(t)?t:new Zy(t,e)}class Zy{constructor(e,n){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||Rn(e);e=r?e:Ae(e),rr(e,n)&&(this._rawValue=e,this._value=r?e:qt(e),this.dep.trigger())}}function fe(t){return it(t)?t.value:t}const ev={get:(t,e,n)=>e==="__v_raw"?t:fe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _p(t){return Ur(t)?t:new Proxy(t,ev)}class tv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return ip(this,!0),!0}get value(){const e=this.dep.track();return cp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nv(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new tv(r,s,n)}const vo={},Wo=new WeakMap;let Or;function rv(t,e=!1,n=Or){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function sv(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,f=G=>s?G:xt(G)||s===!1||s===0?_n(G,1):_n(G);let h,p,g,b,V=!1,L=!1;if(it(t)?(p=()=>t.value,V=xt(t)):Ur(t)?(p=()=>f(t),V=!0):ie(t)?(L=!0,V=t.some(G=>Ur(G)||xt(G)),p=()=>t.map(G=>{if(it(G))return G.value;if(Ur(G))return f(G);if(ue(G))return l?l(G,2):G()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){bn();try{g()}finally{Sn()}}const G=Or;Or=h;try{return l?l(t,3,[b]):t(b)}finally{Or=G}}:p=tn,e&&s){const G=p,oe=s===!0?1/0:s;p=()=>_n(G(),oe)}const B=Vy(),W=()=>{h.stop(),B&&B.active&&xl(B.effects,h)};if(i&&e){const G=e;e=(...oe)=>{G(...oe),W()}}let Q=L?new Array(t.length).fill(vo):vo;const J=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const oe=h.run();if(s||V||(L?oe.some((me,A)=>rr(me,Q[A])):rr(oe,Q))){g&&g();const me=Or;Or=h;try{const A=[oe,Q===vo?void 0:L&&Q[0]===vo?[]:Q,b];Q=oe,l?l(e,3,A):e(...A)}finally{Or=me}}}else h.run()};return c&&c(J),h=new rp(p),h.scheduler=o?()=>o(J,!1):J,b=G=>rv(G,!1,h),g=h.onStop=()=>{const G=Wo.get(h);if(G){if(l)l(G,4);else for(const oe of G)oe();Wo.delete(h)}},e?r?J(!0):Q=h.run():o?o(J.bind(null,!0),!0):h.run(),W.pause=h.pause.bind(h),W.resume=h.resume.bind(h),W.stop=W,W}function _n(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,it(t))_n(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)_n(t[r],e,n);else if(Qd(t)||ps(t))t.forEach(r=>{_n(r,e,n)});else if(Xd(t)){for(const r in t)_n(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&_n(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function Ht(t,e,n,r){if(ue(t)){const s=Hi(t,e,n,r);return s&&Yd(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](t,l,f)===!1)return}c=c.parent}if(i){bn(),Hi(i,null,10,[t,l,f]),Sn();return}}iv(t,n,s,r,o)}function iv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Xt=-1;const ms=[];let zn=null,os=0;const yp=Promise.resolve();let Ko=null;function Go(t){const e=Ko||yp;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=Xt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=Ci(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zl(t){if(!(t.flags&1)){const e=Ci(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=Ci(n)?yt.push(t):yt.splice(ov(e),0,t),t.flags|=1,vp()}}function vp(){Ko||(Ko=yp.then(Tp))}function av(t){ie(t)?ms.push(...t):zn&&t.id===-1?zn.splice(os+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),vp()}function xh(t,e,n=Xt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ep(t){if(ms.length){const e=[...new Set(ms)].sort((n,r)=>Ci(n)-Ci(r));if(ms.length=0,zn){zn.push(...e);return}for(zn=e,os=0;os<zn.length;os++){const n=zn[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,os=0}}const Ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tp(t){try{for(Xt=0;Xt<yt.length;Xt++){const e=yt[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<yt.length;Xt++){const e=yt[Xt];e&&(e.flags&=-2)}Xt=-1,yt.length=0,Ep(),Ko=null,(yt.length||ms.length)&&Tp()}}let Ct=null,Ip=null;function Qo(t){const e=Ct;return Ct=t,Ip=t&&t.type.__scopeId||null,e}function Wl(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xo(-1);const i=Qo(e);let o;try{o=t(...s)}finally{Qo(i),r._d&&Xo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(t,e){if(Ct===null)return t;const n=Na(Ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Pe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&_n(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(bn(),Ht(l,n,8,[t.el,c,t,e]),Sn())}}function cv(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Vo(t,e,n=!1){const r=Xl();if(r||gs){let s=gs?gs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const lv=Symbol.for("v-scx"),uv=()=>Vo(lv);function $r(t,e,n){return wp(t,e,n)}function wp(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Je({},n),l=e&&r||!e&&i!=="post";let f;if(Vi){if(i==="sync"){const b=uv();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=tn,b.resume=tn,b.pause=tn,b}}const h=dt;c.call=(b,V,L)=>Ht(b,h,V,L);let p=!1;i==="post"?c.scheduler=b=>{Rt(b,h&&h.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():zl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,h&&(b.id=h.uid,b.i=h))};const g=sv(t,e,c);return Vi&&(f?f.push(g):l&&g()),g}function hv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?Ap(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=zi(this),c=wp(s,i.bind(r),n);return o(),c}function Ap(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fv=Symbol("_vte"),bp=t=>t.__isTeleport,mn=Symbol("_leaveCb"),Eo=Symbol("_enterCb");function Sp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Np(()=>{t.isMounted=!0}),xp(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],Rp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},Cp=t=>{const e=t.subTree;return e.component?Cp(e.component):e},dv={name:"BaseTransition",props:Rp,setup(t,{slots:e}){const n=Xl(),r=Sp();return()=>{const s=e.default&&Kl(e.default(),!0);if(!s||!s.length)return;const i=Pp(s),o=Ae(t),{mode:c}=o;if(r.isLeaving)return Ac(i);const l=Mh(i);if(!l)return Ac(i);let f=Pi(l,o,r,n,p=>f=p);l.type!==vt&&jr(l,f);let h=n.subTree&&Mh(n.subTree);if(h&&h.type!==vt&&!Mr(h,l)&&Cp(n).type!==vt){let p=Pi(h,o,r,n);if(jr(h,p),c==="out-in"&&l.type!==vt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,h=void 0},Ac(i);c==="in-out"&&l.type!==vt?p.delayLeave=(g,b,V)=>{const L=kp(r,h);L[String(h.key)]=h,g[mn]=()=>{b(),g[mn]=void 0,delete f.delayedLeave,h=void 0},f.delayedLeave=()=>{V(),delete f.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Pp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==vt){e=n;break}}return e}const pv=dv;function kp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:V,onLeaveCancelled:L,onBeforeAppear:B,onAppear:W,onAfterAppear:Q,onAppearCancelled:J}=e,G=String(t.key),oe=kp(n,t),me=(_,w)=>{_&&Ht(_,r,9,w)},A=(_,w)=>{const I=w[1];me(_,w),ie(_)?_.every(T=>T.length<=1)&&I():_.length<=1&&I()},v={mode:o,persisted:c,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=B||l;else return;_[mn]&&_[mn](!0);const I=oe[G];I&&Mr(t,I)&&I.el[mn]&&I.el[mn](),me(w,[_])},enter(_){let w=f,I=h,T=p;if(!n.isMounted)if(i)w=W||f,I=Q||h,T=J||p;else return;let y=!1;const Y=_[Eo]=de=>{y||(y=!0,de?me(T,[_]):me(I,[_]),v.delayedLeave&&v.delayedLeave(),_[Eo]=void 0)};w?A(w,[_,Y]):Y()},leave(_,w){const I=String(t.key);if(_[Eo]&&_[Eo](!0),n.isUnmounting)return w();me(g,[_]);let T=!1;const y=_[mn]=Y=>{T||(T=!0,w(),Y?me(L,[_]):me(V,[_]),_[mn]=void 0,oe[I]===t&&delete oe[I])};oe[I]=t,b?A(b,[_,y]):y()},clone(_){const w=Pi(_,e,n,r,s);return s&&s(w),w}};return v}function Ac(t){if(Pa(t))return t=ur(t),t.children=null,t}function Mh(t){if(!Pa(t))return bp(t.type)&&t.children?Pp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&s++,r=r.concat(Kl(o.children,e,c))):(e||o.type!==vt)&&r.push(c!=null?ur(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ln(t,e){return ue(t)?Je({name:t.name},e,{setup:t}):t}function Vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Yo=new WeakMap;function _i(t,e,n,r,s=!1){if(ie(t)){t.forEach((V,L)=>_i(V,e&&(ie(e)?e[L]:e),n,r,s));return}if(yi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_i(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Na(r.component):r.el,o=s?null:i,{i:c,r:l}=t,f=e&&e.r,h=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,g=Ae(p),b=p===Pe?Gd:V=>be(g,V);if(f!=null&&f!==l){if(Lh(e),je(f))h[f]=null,b(f)&&(p[f]=null);else if(it(f)){f.value=null;const V=e;V.k&&(h[V.k]=null)}}if(ue(l))Hi(l,c,12,[o,h]);else{const V=je(l),L=it(l);if(V||L){const B=()=>{if(t.f){const W=V?b(l)?p[l]:h[l]:l.value;if(s)ie(W)&&xl(W,i);else if(ie(W))W.includes(i)||W.push(i);else if(V)h[l]=[i],b(l)&&(p[l]=h[l]);else{const Q=[i];l.value=Q,t.k&&(h[t.k]=Q)}}else V?(h[l]=o,b(l)&&(p[l]=o)):L&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const W=()=>{B(),Yo.delete(t)};W.id=-1,Yo.set(t,W),Rt(W,n)}else Lh(t),B()}}}function Lh(t){const e=Yo.get(t);e&&(e.flags|=8,Yo.delete(t))}ba().requestIdleCallback;ba().cancelIdleCallback;const yi=t=>!!t.type.__asyncLoader,Pa=t=>t.type.__isKeepAlive;function mv(t,e){Dp(t,"a",e)}function gv(t,e){Dp(t,"da",e)}function Dp(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pa(s.parent.vnode)&&_v(r,e,n,s),s=s.parent}}function _v(t,e,n,r){const s=ka(e,t,r,!0);Mp(()=>{xl(r[e],s)},n)}function ka(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const c=zi(n),l=Ht(e,n,t,o);return c(),Sn(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=dt)=>{(!Vi||t==="sp")&&ka(t,(...r)=>e(...r),n)},yv=Dn("bm"),Np=Dn("m"),vv=Dn("bu"),Op=Dn("u"),xp=Dn("bum"),Mp=Dn("um"),Ev=Dn("sp"),Tv=Dn("rtg"),Iv=Dn("rtc");function wv(t,e=dt){ka("ec",t,e)}const Av="components",Lp=Symbol.for("v-ndc");function To(t){return je(t)?bv(Av,t,!1)||t:t||Lp}function bv(t,e,n=!0,r=!1){const s=Ct||dt;if(s){const i=s.type;{const c=lE(i,!1);if(c&&(c===e||c===Ft(e)||c===Aa(Ft(e))))return i}const o=Fh(s[t]||i[t],e)||Fh(s.appContext[t],e);return!o&&r?i:o}}function Fh(t,e){return t&&(t[e]||t[Ft(e)]||t[Aa(Ft(e))])}function As(t,e,n,r){let s;const i=n,o=ie(t);if(o||je(t)){const c=o&&Ur(t);let l=!1,f=!1;c&&(l=!xt(t),f=Rn(t),t=Sa(t)),s=new Array(t.length);for(let h=0,p=t.length;h<p;h++)s[h]=e(l?f?ws(qt(t[h])):qt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const h=c[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const Yc=t=>t?nm(t)?Na(t):Yc(t.parent):null,vi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Up(t),$forceUpdate:t=>t.f||(t.f=()=>{zl(t.update)}),$nextTick:t=>t.n||(t.n=Go.bind(t.proxy)),$watch:t=>hv.bind(t)}),bc=(t,e)=>t!==Pe&&!t.__isScriptSetup&&be(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==Pe&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==Pe&&be(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const f=vi[e];let h,p;if(f)return e==="$attrs"&&ht(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&be(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==Pe&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Pe&&c[0]!=="$"&&be(t,c)||bc(e,c)||be(i,c)||be(r,c)||be(vi,c)||be(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function Rv(t){const e=Up(t),n=t.proxy,r=t.ctx;Jc=!1,e.beforeCreate&&$h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:f,created:h,beforeMount:p,mounted:g,beforeUpdate:b,updated:V,activated:L,deactivated:B,beforeDestroy:W,beforeUnmount:Q,destroyed:J,unmounted:G,render:oe,renderTracked:me,renderTriggered:A,errorCaptured:v,serverPrefetch:_,expose:w,inheritAttrs:I,components:T,directives:y,filters:Y}=e;if(f&&Cv(f,r,null),o)for(const we in o){const le=o[we];ue(le)&&(r[we]=le.bind(n))}if(s){const we=s.call(n,n);Ne(we)&&(t.data=Ra(we))}if(Jc=!0,i)for(const we in i){const le=i[we],mt=ue(le)?le.bind(n,n):ue(le.get)?le.get.bind(n,n):tn,hn=!ue(le)&&ue(le.set)?le.set.bind(n):tn,Kt=In({get:mt,set:hn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:wt=>Kt.value=wt})}if(c)for(const we in c)Fp(c[we],r,n,we);if(l){const we=ue(l)?l.call(n):l;Reflect.ownKeys(we).forEach(le=>{cv(le,we[le])})}h&&$h(h,t,"c");function ae(we,le){ie(le)?le.forEach(mt=>we(mt.bind(n))):le&&we(le.bind(n))}if(ae(yv,p),ae(Np,g),ae(vv,b),ae(Op,V),ae(mv,L),ae(gv,B),ae(wv,v),ae(Iv,me),ae(Tv,A),ae(xp,Q),ae(Mp,G),ae(Ev,_),ie(w))if(w.length){const we=t.exposed||(t.exposed={});w.forEach(le=>{Object.defineProperty(we,le,{get:()=>n[le],set:mt=>n[le]=mt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===tn&&(t.render=oe),I!=null&&(t.inheritAttrs=I),T&&(t.components=T),y&&(t.directives=y),_&&Vp(t)}function Cv(t,e,n=tn){ie(t)&&(t=Xc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Vo(s.from||r,s.default,!0):i=Vo(s.from||r):i=Vo(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $h(t,e,n){Ht(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){let s=r.includes(".")?Ap(n,r):()=>n[r];if(je(t)){const i=e[t];ue(i)&&$r(s,i)}else if(ue(t))$r(s,t.bind(n));else if(Ne(t))if(ie(t))t.forEach(i=>Fp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&$r(s,i,t)}}function Up(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(f=>Jo(l,f,o,!0)),Jo(l,e,o)),Ne(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Pv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Pv={data:Bh,props:jh,emits:jh,methods:ai,computed:ai,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:ai,directives:ai,watch:Vv,provide:Bh,inject:kv};function Bh(t,e){return e?t?function(){return Je(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function kv(t,e){return ai(Xc(t),Xc(e))}function Xc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function ai(t,e){return t?Je(Object.create(null),t,e):e}function jh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Je(Object.create(null),Uh(t),Uh(e??{})):e}function Vv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function $p(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(t,e){return function(r,s=null){ue(r)||(r=Je({},r)),s!=null&&!Ne(s)&&(s=null);const i=$p(),o=new WeakSet,c=[];let l=!1;const f=i.app={_uid:Dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hE,get config(){return i.config},set config(h){},use(h,...p){return o.has(h)||(h&&ue(h.install)?(o.add(h),h.install(f,...p)):ue(h)&&(o.add(h),h(f,...p))),f},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),f},component(h,p){return p?(i.components[h]=p,f):i.components[h]},directive(h,p){return p?(i.directives[h]=p,f):i.directives[h]},mount(h,p,g){if(!l){const b=f._ceVNode||Me(r,s);return b.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(b,h,g),l=!0,f._container=h,h.__vue_app__=f,Na(b.component)}},onUnmount(h){c.push(h)},unmount(){l&&(Ht(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(h,p){return i.provides[h]=p,f},runWithContext(h){const p=gs;gs=f;try{return h()}finally{gs=p}}};return f}}let gs=null;const Ov=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${vr(e)}Modifiers`];function xv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&Ov(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>je(h)?h.trim():h)),o.number&&(s=n.map(Ll)));let c,l=r[c=vc(e)]||r[c=vc(Ft(e))];!l&&i&&(l=r[c=vc(vr(e))]),l&&Ht(l,t,6,s);const f=r[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ht(f,t,6,s)}}const Mv=new WeakMap;function Bp(t,e,n=!1){const r=n?Mv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=f=>{const h=Bp(f,e,!0);h&&(c=!0,Je(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):Je(o,i),Ne(t)&&r.set(t,o),o)}function Va(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,vr(e))||be(t,e))}function qh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:f,renderCache:h,props:p,data:g,setupState:b,ctx:V,inheritAttrs:L}=t,B=Qo(t);let W,Q;try{if(n.shapeFlag&4){const G=s||r,oe=G;W=en(f.call(oe,G,h,p,b,g,V)),Q=c}else{const G=e;W=en(G.length>1?G(p,{attrs:c,slots:o,emit:l}):G(p,null)),Q=e.props?c:Lv(c)}}catch(G){Ei.length=0,Ca(G,t,1),W=Me(vt)}let J=W;if(Q&&L!==!1){const G=Object.keys(Q),{shapeFlag:oe}=J;G.length&&oe&7&&(i&&G.some(Ol)&&(Q=Fv(Q,i)),J=ur(J,Q,!1,!0))}return n.dirs&&(J=ur(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&jr(J,n.transition),W=J,Qo(B),W}const Lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},Fv=(t,e)=>{const n={};for(const r in t)(!Ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hh(r,o,f):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==r[g]&&!Va(f,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hh(r,o,f):!0:!!o;return!1}function Hh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Va(n,i))return!0}return!1}function $v({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jp={},qp=()=>Object.create(jp),Hp=t=>Object.getPrototypeOf(t)===jp;function Bv(t,e,n,r=!1){const s={},i=qp();t.propsDefaults=Object.create(null),zp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(Va(t.emitsOptions,g))continue;const b=e[g];if(l)if(be(i,g))b!==i[g]&&(i[g]=b,f=!0);else{const V=Ft(g);s[V]=Zc(l,c,V,b,t,!1)}else b!==i[g]&&(i[g]=b,f=!0)}}}else{zp(t,e,s,i)&&(f=!0);let h;for(const p in c)(!e||!be(e,p)&&((h=vr(p))===p||!be(e,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=Zc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],f=!0)}f&&gn(t.attrs,"set","")}function zp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(pi(l))continue;const f=e[l];let h;s&&be(s,h=Ft(l))?!i||!i.includes(h)?n[h]=f:(c||(c={}))[h]=f:Va(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Ae(n),f=c||Pe;for(let h=0;h<i.length;h++){const p=i[h];n[p]=Zc(s,l,p,f[p],t,!be(f,p))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const h=zi(s);r=f[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===vr(n))&&(r=!0))}return r}const qv=new WeakMap;function Wp(t,e,n=!1){const r=n?qv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const h=p=>{l=!0;const[g,b]=Wp(p,e,!0);Je(o,g),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Ne(t)&&r.set(t,ds),ds;if(ie(i))for(let h=0;h<i.length;h++){const p=Ft(i[h]);zh(p)&&(o[p]=Pe)}else if(i)for(const h in i){const p=Ft(h);if(zh(p)){const g=i[h],b=o[p]=ie(g)||ue(g)?{type:g}:Je({},g),V=b.type;let L=!1,B=!0;if(ie(V))for(let W=0;W<V.length;++W){const Q=V[W],J=ue(Q)&&Q.name;if(J==="Boolean"){L=!0;break}else J==="String"&&(B=!1)}else L=ue(V)&&V.name==="Boolean";b[0]=L,b[1]=B,(L||be(b,"default"))&&c.push(p)}}const f=[o,c];return Ne(t)&&r.set(t,f),f}function zh(t){return t[0]!=="$"&&!pi(t)}const Gl=t=>t==="_"||t==="_ctx"||t==="$stable",Ql=t=>ie(t)?t.map(en):[en(t)],Hv=(t,e,n)=>{if(e._n)return e;const r=Wl((...s)=>Ql(e(...s)),n);return r._c=!1,r},Kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gl(s))continue;const i=t[s];if(ue(i))e[s]=Hv(s,i,r);else if(i!=null){const o=Ql(i);e[s]=()=>o}}},Gp=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},Qp=(t,e,n)=>{for(const r in e)(n||!Gl(r))&&(t[r]=e[r])},zv=(t,e,n)=>{const r=t.slots=qp();if(t.vnode.shapeFlag&32){const s=e._;s?(Qp(r,e,n),n&&Zd(r,"_",s,!0)):Kp(e,r)}else e&&Gp(t,e)},Wv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Qp(s,e,n):(i=!e.$stable,Kp(e,s)),o=e}else e&&(Gp(t,e),o={default:1});if(i)for(const c in s)!Gl(c)&&o[c]==null&&delete s[c]},Rt=Jv;function Kv(t){return Gv(t)}function Gv(t,e){const n=ba();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:f,setElementText:h,parentNode:p,nextSibling:g,setScopeId:b=tn,insertStaticContent:V}=t,L=(E,S,k,F=null,O=null,x=null,q=void 0,$=null,U=!!S.dynamicChildren)=>{if(E===S)return;E&&!Mr(E,S)&&(F=On(E),wt(E,O,x,!0),E=null),S.patchFlag===-2&&(U=!1,S.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:H}=S;switch(M){case Da:B(E,S,k,F);break;case vt:W(E,S,k,F);break;case Rc:E==null&&Q(S,k,F,q);break;case Le:T(E,S,k,F,O,x,q,$,U);break;default:H&1?oe(E,S,k,F,O,x,q,$,U):H&6?y(E,S,k,F,O,x,q,$,U):(H&64||H&128)&&M.process(E,S,k,F,O,x,q,$,U,br)}ee!=null&&O?_i(ee,E&&E.ref,x,S||E,!S):ee==null&&E&&E.ref!=null&&_i(E.ref,null,x,E,!0)},B=(E,S,k,F)=>{if(E==null)r(S.el=c(S.children),k,F);else{const O=S.el=E.el;S.children!==E.children&&f(O,S.children)}},W=(E,S,k,F)=>{E==null?r(S.el=l(S.children||""),k,F):S.el=E.el},Q=(E,S,k,F)=>{[E.el,E.anchor]=V(E.children,S,k,F,E.el,E.anchor)},J=({el:E,anchor:S},k,F)=>{let O;for(;E&&E!==S;)O=g(E),r(E,k,F),E=O;r(S,k,F)},G=({el:E,anchor:S})=>{let k;for(;E&&E!==S;)k=g(E),s(E),E=k;s(S)},oe=(E,S,k,F,O,x,q,$,U)=>{if(S.type==="svg"?q="svg":S.type==="math"&&(q="mathml"),E==null)me(S,k,F,O,x,q,$,U);else{const M=E.el&&E.el._isVueCE?E.el:null;try{M&&M._beginPatch(),_(E,S,O,x,q,$,U)}finally{M&&M._endPatch()}}},me=(E,S,k,F,O,x,q,$)=>{let U,M;const{props:ee,shapeFlag:H,transition:X,dirs:te}=E;if(U=E.el=o(E.type,x,ee&&ee.is,ee),H&8?h(U,E.children):H&16&&v(E.children,U,null,F,O,Sc(E,x),q,$),te&&Vr(E,null,F,"created"),A(U,E,E.scopeId,q,F),ee){for(const Re in ee)Re!=="value"&&!pi(Re)&&i(U,Re,null,ee[Re],x,F);"value"in ee&&i(U,"value",null,ee.value,x),(M=ee.onVnodeBeforeMount)&&Yt(M,F,E)}te&&Vr(E,null,F,"beforeMount");const ge=Qv(O,X);ge&&X.beforeEnter(U),r(U,S,k),((M=ee&&ee.onVnodeMounted)||ge||te)&&Rt(()=>{M&&Yt(M,F,E),ge&&X.enter(U),te&&Vr(E,null,F,"mounted")},O)},A=(E,S,k,F,O)=>{if(k&&b(E,k),F)for(let x=0;x<F.length;x++)b(E,F[x]);if(O){let x=O.subTree;if(S===x||Zp(x.type)&&(x.ssContent===S||x.ssFallback===S)){const q=O.vnode;A(E,q,q.scopeId,q.slotScopeIds,O.parent)}}},v=(E,S,k,F,O,x,q,$,U=0)=>{for(let M=U;M<E.length;M++){const ee=E[M]=$?Wn(E[M]):en(E[M]);L(null,ee,S,k,F,O,x,q,$)}},_=(E,S,k,F,O,x,q)=>{const $=S.el=E.el;let{patchFlag:U,dynamicChildren:M,dirs:ee}=S;U|=E.patchFlag&16;const H=E.props||Pe,X=S.props||Pe;let te;if(k&&Dr(k,!1),(te=X.onVnodeBeforeUpdate)&&Yt(te,k,S,E),ee&&Vr(S,E,k,"beforeUpdate"),k&&Dr(k,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&h($,""),M?w(E.dynamicChildren,M,$,k,F,Sc(S,O),x):q||le(E,S,$,null,k,F,Sc(S,O),x,!1),U>0){if(U&16)I($,H,X,k,O);else if(U&2&&H.class!==X.class&&i($,"class",null,X.class,O),U&4&&i($,"style",H.style,X.style,O),U&8){const ge=S.dynamicProps;for(let Re=0;Re<ge.length;Re++){const Ie=ge[Re],at=H[Ie],ct=X[Ie];(ct!==at||Ie==="value")&&i($,Ie,at,ct,O,k)}}U&1&&E.children!==S.children&&h($,S.children)}else!q&&M==null&&I($,H,X,k,O);((te=X.onVnodeUpdated)||ee)&&Rt(()=>{te&&Yt(te,k,S,E),ee&&Vr(S,E,k,"updated")},F)},w=(E,S,k,F,O,x,q)=>{for(let $=0;$<S.length;$++){const U=E[$],M=S[$],ee=U.el&&(U.type===Le||!Mr(U,M)||U.shapeFlag&198)?p(U.el):k;L(U,M,ee,null,F,O,x,q,!0)}},I=(E,S,k,F,O)=>{if(S!==k){if(S!==Pe)for(const x in S)!pi(x)&&!(x in k)&&i(E,x,S[x],null,O,F);for(const x in k){if(pi(x))continue;const q=k[x],$=S[x];q!==$&&x!=="value"&&i(E,x,$,q,O,F)}"value"in k&&i(E,"value",S.value,k.value,O)}},T=(E,S,k,F,O,x,q,$,U)=>{const M=S.el=E?E.el:c(""),ee=S.anchor=E?E.anchor:c("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:te}=S;te&&($=$?$.concat(te):te),E==null?(r(M,k,F),r(ee,k,F),v(S.children||[],k,ee,O,x,q,$,U)):H>0&&H&64&&X&&E.dynamicChildren&&E.dynamicChildren.length===X.length?(w(E.dynamicChildren,X,k,O,x,q,$),(S.key!=null||O&&S===O.subTree)&&Yp(E,S,!0)):le(E,S,k,ee,O,x,q,$,U)},y=(E,S,k,F,O,x,q,$,U)=>{S.slotScopeIds=$,E==null?S.shapeFlag&512?O.ctx.activate(S,k,F,q,U):Y(S,k,F,O,x,q,U):de(E,S,U)},Y=(E,S,k,F,O,x,q)=>{const $=E.component=sE(E,F,O);if(Pa(E)&&($.ctx.renderer=br),iE($,!1,q),$.asyncDep){if(O&&O.registerDep($,ae,q),!E.el){const U=$.subTree=Me(vt);W(null,U,S,k),E.placeholder=U.el}}else ae($,E,S,k,O,x,q)},de=(E,S,k)=>{const F=S.component=E.component;if(Uv(E,S,k))if(F.asyncDep&&!F.asyncResolved){we(F,S,k);return}else F.next=S,F.update();else S.el=E.el,F.vnode=S},ae=(E,S,k,F,O,x,q)=>{const $=()=>{if(E.isMounted){let{next:H,bu:X,u:te,parent:ge,vnode:Re}=E;{const bt=Jp(E);if(bt){H&&(H.el=Re.el,we(E,H,q)),bt.asyncDep.then(()=>{E.isUnmounted||$()});return}}let Ie=H,at;Dr(E,!1),H?(H.el=Re.el,we(E,H,q)):H=Re,X&&ko(X),(at=H.props&&H.props.onVnodeBeforeUpdate)&&Yt(at,ge,H,Re),Dr(E,!0);const ct=qh(E),At=E.subTree;E.subTree=ct,L(At,ct,p(At.el),On(At),E,O,x),H.el=ct.el,Ie===null&&$v(E,ct.el),te&&Rt(te,O),(at=H.props&&H.props.onVnodeUpdated)&&Rt(()=>Yt(at,ge,H,Re),O)}else{let H;const{el:X,props:te}=S,{bm:ge,m:Re,parent:Ie,root:at,type:ct}=E,At=yi(S);Dr(E,!1),ge&&ko(ge),!At&&(H=te&&te.onVnodeBeforeMount)&&Yt(H,Ie,S),Dr(E,!0);{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ct);const bt=E.subTree=qh(E);L(null,bt,k,F,E,O,x),S.el=bt.el}if(Re&&Rt(Re,O),!At&&(H=te&&te.onVnodeMounted)){const bt=S;Rt(()=>Yt(H,Ie,bt),O)}(S.shapeFlag&256||Ie&&yi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&Rt(E.a,O),E.isMounted=!0,S=k=F=null}};E.scope.on();const U=E.effect=new rp($);E.scope.off();const M=E.update=U.run.bind(U),ee=E.job=U.runIfDirty.bind(U);ee.i=E,ee.id=E.uid,U.scheduler=()=>zl(ee),Dr(E,!0),M()},we=(E,S,k)=>{S.component=E;const F=E.vnode.props;E.vnode=S,E.next=null,jv(E,S.props,F,k),Wv(E,S.children,k),bn(),xh(E),Sn()},le=(E,S,k,F,O,x,q,$,U=!1)=>{const M=E&&E.children,ee=E?E.shapeFlag:0,H=S.children,{patchFlag:X,shapeFlag:te}=S;if(X>0){if(X&128){hn(M,H,k,F,O,x,q,$,U);return}else if(X&256){mt(M,H,k,F,O,x,q,$,U);return}}te&8?(ee&16&&fn(M,O,x),H!==M&&h(k,H)):ee&16?te&16?hn(M,H,k,F,O,x,q,$,U):fn(M,O,x,!0):(ee&8&&h(k,""),te&16&&v(H,k,F,O,x,q,$,U))},mt=(E,S,k,F,O,x,q,$,U)=>{E=E||ds,S=S||ds;const M=E.length,ee=S.length,H=Math.min(M,ee);let X;for(X=0;X<H;X++){const te=S[X]=U?Wn(S[X]):en(S[X]);L(E[X],te,k,null,O,x,q,$,U)}M>ee?fn(E,O,x,!0,!1,H):v(S,k,F,O,x,q,$,U,H)},hn=(E,S,k,F,O,x,q,$,U)=>{let M=0;const ee=S.length;let H=E.length-1,X=ee-1;for(;M<=H&&M<=X;){const te=E[M],ge=S[M]=U?Wn(S[M]):en(S[M]);if(Mr(te,ge))L(te,ge,k,null,O,x,q,$,U);else break;M++}for(;M<=H&&M<=X;){const te=E[H],ge=S[X]=U?Wn(S[X]):en(S[X]);if(Mr(te,ge))L(te,ge,k,null,O,x,q,$,U);else break;H--,X--}if(M>H){if(M<=X){const te=X+1,ge=te<ee?S[te].el:F;for(;M<=X;)L(null,S[M]=U?Wn(S[M]):en(S[M]),k,ge,O,x,q,$,U),M++}}else if(M>X)for(;M<=H;)wt(E[M],O,x,!0),M++;else{const te=M,ge=M,Re=new Map;for(M=ge;M<=X;M++){const nt=S[M]=U?Wn(S[M]):en(S[M]);nt.key!=null&&Re.set(nt.key,M)}let Ie,at=0;const ct=X-ge+1;let At=!1,bt=0;const Ut=new Array(ct);for(M=0;M<ct;M++)Ut[M]=0;for(M=te;M<=H;M++){const nt=E[M];if(at>=ct){wt(nt,O,x,!0);continue}let Ze;if(nt.key!=null)Ze=Re.get(nt.key);else for(Ie=ge;Ie<=X;Ie++)if(Ut[Ie-ge]===0&&Mr(nt,S[Ie])){Ze=Ie;break}Ze===void 0?wt(nt,O,x,!0):(Ut[Ze-ge]=M+1,Ze>=bt?bt=Ze:At=!0,L(nt,S[Ze],k,null,O,x,q,$,U),at++)}const ts=At?Yv(Ut):ds;for(Ie=ts.length-1,M=ct-1;M>=0;M--){const nt=ge+M,Ze=S[nt],qs=S[nt+1],Sr=nt+1<ee?qs.el||Xp(qs):F;Ut[M]===0?L(null,Ze,k,Sr,O,x,q,$,U):At&&(Ie<0||M!==ts[Ie]?Kt(Ze,k,Sr,2):Ie--)}}},Kt=(E,S,k,F,O=null)=>{const{el:x,type:q,transition:$,children:U,shapeFlag:M}=E;if(M&6){Kt(E.component.subTree,S,k,F);return}if(M&128){E.suspense.move(S,k,F);return}if(M&64){q.move(E,S,k,br);return}if(q===Le){r(x,S,k);for(let H=0;H<U.length;H++)Kt(U[H],S,k,F);r(E.anchor,S,k);return}if(q===Rc){J(E,S,k);return}if(F!==2&&M&1&&$)if(F===0)$.beforeEnter(x),r(x,S,k),Rt(()=>$.enter(x),O);else{const{leave:H,delayLeave:X,afterLeave:te}=$,ge=()=>{E.ctx.isUnmounted?s(x):r(x,S,k)},Re=()=>{x._isLeaving&&x[mn](!0),H(x,()=>{ge(),te&&te()})};X?X(x,ge,Re):Re()}else r(x,S,k)},wt=(E,S,k,F=!1,O=!1)=>{const{type:x,props:q,ref:$,children:U,dynamicChildren:M,shapeFlag:ee,patchFlag:H,dirs:X,cacheIndex:te}=E;if(H===-2&&(O=!1),$!=null&&(bn(),_i($,null,k,E,!0),Sn()),te!=null&&(S.renderCache[te]=void 0),ee&256){S.ctx.deactivate(E);return}const ge=ee&1&&X,Re=!yi(E);let Ie;if(Re&&(Ie=q&&q.onVnodeBeforeUnmount)&&Yt(Ie,S,E),ee&6)Bs(E.component,k,F);else{if(ee&128){E.suspense.unmount(k,F);return}ge&&Vr(E,null,S,"beforeUnmount"),ee&64?E.type.remove(E,S,k,br,F):M&&!M.hasOnce&&(x!==Le||H>0&&H&64)?fn(M,S,k,!1,!0):(x===Le&&H&384||!O&&ee&16)&&fn(U,S,k),F&&$s(E)}(Re&&(Ie=q&&q.onVnodeUnmounted)||ge)&&Rt(()=>{Ie&&Yt(Ie,S,E),ge&&Vr(E,null,S,"unmounted")},k)},$s=E=>{const{type:S,el:k,anchor:F,transition:O}=E;if(S===Le){es(k,F);return}if(S===Rc){G(E);return}const x=()=>{s(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(E.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:$}=O,U=()=>q(k,x);$?$(E.el,x,U):U()}else x()},es=(E,S)=>{let k;for(;E!==S;)k=g(E),s(E),E=k;s(S)},Bs=(E,S,k)=>{const{bum:F,scope:O,job:x,subTree:q,um:$,m:U,a:M}=E;Wh(U),Wh(M),F&&ko(F),O.stop(),x&&(x.flags|=8,wt(q,E,S,k)),$&&Rt($,S),Rt(()=>{E.isUnmounted=!0},S)},fn=(E,S,k,F=!1,O=!1,x=0)=>{for(let q=x;q<E.length;q++)wt(E[q],S,k,F,O)},On=E=>{if(E.shapeFlag&6)return On(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const S=g(E.anchor||E.el),k=S&&S[fv];return k?g(k):S};let Ar=!1;const js=(E,S,k)=>{let F;E==null?S._vnode&&(wt(S._vnode,null,null,!0),F=S._vnode.component):L(S._vnode||null,E,S,null,null,null,k),S._vnode=E,Ar||(Ar=!0,xh(F),Ep(),Ar=!1)},br={p:L,um:wt,m:Kt,r:$s,mt:Y,mc:v,pc:le,pbc:w,n:On,o:t};return{render:js,hydrate:void 0,createApp:Nv(js)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Wn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Yp(o,c)),c.type===Da&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(t.type===Le?1:0)),c.type===vt&&!c.el&&(c.el=o.el)}}function Yv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<f?i=c+1:o=c;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jp(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Xp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Xp(e.subTree):null}const Zp=t=>t.__isSuspense;function Jv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):av(t)}const Le=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Rc=Symbol.for("v-stc"),Ei=[];let Pt=null;function ne(t=!1){Ei.push(Pt=t?null:[])}function Xv(){Ei.pop(),Pt=Ei[Ei.length-1]||null}let ki=1;function Xo(t,e=!1){ki+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function em(t){return t.dynamicChildren=ki>0?Pt||ds:null,Xv(),ki>0&&Pt&&Pt.push(t),t}function _e(t,e,n,r,s,i){return em(C(t,e,n,r,s,i,!0))}function Ot(t,e,n,r,s){return em(Me(t,e,n,r,s,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function Mr(t,e){return t.type===e.type&&t.key===e.key}const tm=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||it(t)||ue(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tm(e),ref:e&&Do(e),scopeId:Ip,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return c?(Jl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),ki>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const Me=Zv;function Zv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Lp)&&(t=vt),Zo(t)){const c=ur(t,e,!0);return n&&Jl(c,n),ki>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(uE(t)&&(t=t.__vccOpts),e){e=eE(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=Qe(c)),Ne(l)&&(Hl(l)&&!ie(l)&&(l=Je({},l)),e.style=qi(l))}const o=je(t)?1:Zp(t)?128:bp(t)?64:Ne(t)?4:ue(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function eE(t){return t?Hl(t)||Hp(t)?Je({},t):t:null}function ur(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,f=e?tE(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&tm(f),ref:e&&e.ref?n&&i?ie(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&jr(h,l.clone(h)),h}function Yl(t=" ",e=0){return Me(Da,null,t,e)}function Xn(t="",e=!1){return e?(ne(),Ot(vt,null,t)):Me(vt,null,t)}function en(t){return t==null||typeof t=="boolean"?Me(vt):ie(t)?Me(Le,null,t.slice()):Zo(t)?Wn(t):Me(Da,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function Jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hp(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Yl(e)]):n=8);t.children=e,t.shapeFlag|=n}function tE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qe([e.class,r.class]));else if(s==="style")e.style=qi([e.style,r.style]);else if(Ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){Ht(t,e,7,[n,r])}const nE=$p();let rE=0;function sE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nE,i={uid:rE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ky(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(r,s),emitsOptions:Bp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xv.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Xl=()=>dt||Ct;let ea,el;{const t=ba(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),el=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const zi=t=>{const e=dt;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},Kh=()=>{dt&&dt.scope.off(),ea(null)};function nm(t){return t.vnode.shapeFlag&4}let Vi=!1;function iE(t,e=!1,n=!1){e&&el(e);const{props:r,children:s}=t.vnode,i=nm(t);Bv(t,r,i,e),zv(t,s,n||e);const o=i?oE(t,e):void 0;return e&&el(!1),o}function oE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?cE(t):null,i=zi(t),o=Hi(r,t,0,[t.props,s]),c=Yd(o);if(Sn(),i(),(c||t.sp)&&!yi(t)&&Vp(t),c){if(o.then(Kh,Kh),e)return o.then(l=>{Gh(t,l)}).catch(l=>{Ca(l,t,0)});t.asyncDep=o}else Gh(t,o)}else rm(t)}function Gh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=_p(e)),rm(t)}function rm(t,e,n){const r=t.type;t.render||(t.render=r.render||tn);{const s=zi(t);bn();try{Rv(t)}finally{Sn(),s()}}}const aE={get(t,e){return ht(t,"get",""),t[e]}};function cE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aE),slots:t.slots,emit:t.emit,expose:e}}function Na(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_p(Jy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function lE(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function uE(t){return ue(t)&&"__vccOpts"in t}const In=(t,e)=>nv(t,e,Vi);function $e(t,e,n){try{Xo(-1);const r=arguments.length;return r===2?Ne(e)&&!ie(e)?Zo(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zo(n)&&(n=[n]),Me(t,e,n))}finally{Xo(1)}}const hE="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{tl=Qh.createPolicy("vue",{createHTML:t=>t})}catch{}const sm=tl?t=>tl.createHTML(t):t=>t,fE="http://www.w3.org/2000/svg",dE="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,Yh=pn&&pn.createElement("template"),pE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pn.createElementNS(fE,t):e==="mathml"?pn.createElementNS(dE,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yh.innerHTML=sm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Yh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bn="transition",ii="animation",bs=Symbol("_vtc"),im={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},om=Je({},Rp,im),mE=t=>(t.displayName="Transition",t.props=om,t),gE=mE((t,{slots:e})=>$e(pv,am(t),e)),Nr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Jh=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function am(t){const e={};for(const T in t)T in im||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:h=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=t,V=_E(s),L=V&&V[0],B=V&&V[1],{onBeforeEnter:W,onEnter:Q,onEnterCancelled:J,onLeave:G,onLeaveCancelled:oe,onBeforeAppear:me=W,onAppear:A=Q,onAppearCancelled:v=J}=e,_=(T,y,Y,de)=>{T._enterCancelled=de,qn(T,y?h:c),qn(T,y?f:o),Y&&Y()},w=(T,y)=>{T._isLeaving=!1,qn(T,p),qn(T,b),qn(T,g),y&&y()},I=T=>(y,Y)=>{const de=T?A:Q,ae=()=>_(y,T,Y);Nr(de,[y,ae]),Xh(()=>{qn(y,T?l:i),Jt(y,T?h:c),Jh(de)||Zh(y,r,L,ae)})};return Je(e,{onBeforeEnter(T){Nr(W,[T]),Jt(T,i),Jt(T,o)},onBeforeAppear(T){Nr(me,[T]),Jt(T,l),Jt(T,f)},onEnter:I(!1),onAppear:I(!0),onLeave(T,y){T._isLeaving=!0;const Y=()=>w(T,y);Jt(T,p),T._enterCancelled?(Jt(T,g),nl(T)):(nl(T),Jt(T,g)),Xh(()=>{T._isLeaving&&(qn(T,p),Jt(T,b),Jh(G)||Zh(T,r,B,Y))}),Nr(G,[T,Y])},onEnterCancelled(T){_(T,!1,void 0,!0),Nr(J,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),Nr(v,[T])},onLeaveCancelled(T){w(T),Nr(oe,[T])}})}function _E(t){if(t==null)return null;if(Ne(t))return[Cc(t.enter),Cc(t.leave)];{const e=Cc(t);return[e,e]}}function Cc(t){return wy(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bs]||(t[bs]=new Set)).add(e)}function qn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bs];n&&(n.delete(e),n.size||(t[bs]=void 0))}function Xh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yE=0;function Zh(t,e,n,r){const s=t._endId=++yE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=cm(t,e);if(!o)return r();const f=o+"end";let h=0;const p=()=>{t.removeEventListener(f,g),i()},g=b=>{b.target===t&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},c+1),t.addEventListener(f,g)}function cm(t,e){const n=window.getComputedStyle(t),r=V=>(n[V]||"").split(", "),s=r(`${Bn}Delay`),i=r(`${Bn}Duration`),o=ef(s,i),c=r(`${ii}Delay`),l=r(`${ii}Duration`),f=ef(c,l);let h=null,p=0,g=0;e===Bn?o>0&&(h=Bn,p=o,g=i.length):e===ii?f>0&&(h=ii,p=f,g=l.length):(p=Math.max(o,f),h=p>0?o>f?Bn:ii:null,g=h?h===Bn?i.length:l.length:0);const b=h===Bn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Bn}Property`).toString());return{type:h,timeout:p,propCount:g,hasTransform:b}}function ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>tf(n)+tf(t[r])))}function tf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nl(t){return(t?t.ownerDocument:document).body.offsetHeight}function vE(t,e,n){const r=t[bs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nf=Symbol("_vod"),EE=Symbol("_vsh"),TE=Symbol(""),IE=/(?:^|;)\s*display\s*:/;function wE(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&No(r,c,"")}else for(const o in e)n[o]==null&&No(r,o,"");for(const o in n)o==="display"&&(i=!0),No(r,o,n[o])}else if(s){if(e!==n){const o=r[TE];o&&(n+=";"+o),r.cssText=n,i=IE.test(n)}}else e&&t.removeAttribute("style");nf in t&&(t[nf]=i?r.display:"",t[EE]&&(r.display="none"))}const rf=/\s*!important$/;function No(t,e,n){if(ie(n))n.forEach(r=>No(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AE(t,e);rf.test(n)?t.setProperty(vr(r),n.replace(rf,""),"important"):t[r]=n}}const sf=["Webkit","Moz","ms"],Pc={};function AE(t,e){const n=Pc[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return Pc[e]=r;r=Aa(r);for(let s=0;s<sf.length;s++){const i=sf[s]+r;if(i in t)return Pc[e]=i}return e}const of="http://www.w3.org/1999/xlink";function af(t,e,n,r,s,i=Py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n):n==null||i&&!ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":yr(n)?String(n):n)}function cf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ep(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function as(t,e,n,r){t.addEventListener(e,n,r)}function bE(t,e,n,r){t.removeEventListener(e,n,r)}const lf=Symbol("_vei");function SE(t,e,n,r,s=null){const i=t[lf]||(t[lf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=RE(e);if(r){const f=i[e]=kE(r,s);as(t,c,f,l)}else o&&(bE(t,c,o,l),i[e]=void 0)}}const uf=/(?:Once|Passive|Capture)$/;function RE(t){let e;if(uf.test(t)){e={};let r;for(;r=t.match(uf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let kc=0;const CE=Promise.resolve(),PE=()=>kc||(CE.then(()=>kc=0),kc=Date.now());function kE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(VE(r,n.value),e,5,[r])};return n.value=t,n.attached=PE(),n}function VE(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vE(t,r,o):e==="style"?wE(t,n,r):Ta(e)?Ol(e)||SE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NE(t,e,r,o))?(cf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&af(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?cf(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),af(t,e,r,o))};function NE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hf(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hf(e)&&je(n)?!1:e in t}const lm=new WeakMap,um=new WeakMap,ta=Symbol("_moveCb"),ff=Symbol("_enterCb"),OE=t=>(delete t.props.mode,t),xE=OE({name:"TransitionGroup",props:Je({},om,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xl(),r=Sp();let s,i;return Op(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!$E(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(LE),s.forEach(FE);const c=s.filter(UE);nl(n.vnode.el),c.forEach(l=>{const f=l.el,h=f.style;Jt(f,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=f[ta]=g=>{g&&g.target!==f||(!g||g.propertyName.endsWith("transform"))&&(f.removeEventListener("transitionend",p),f[ta]=null,qn(f,o))};f.addEventListener("transitionend",p)}),s=[]}),()=>{const o=Ae(t),c=am(o);let l=o.tag||Le;if(s=[],i)for(let f=0;f<i.length;f++){const h=i[f];h.el&&h.el instanceof Element&&(s.push(h),jr(h,Pi(h,c,r,n)),lm.set(h,{left:h.el.offsetLeft,top:h.el.offsetTop}))}i=e.default?Kl(e.default()):[];for(let f=0;f<i.length;f++){const h=i[f];h.key!=null&&jr(h,Pi(h,c,r,n))}return Me(l,null,i)}}}),ME=xE;function LE(t){const e=t.el;e[ta]&&e[ta](),e[ff]&&e[ff]()}function FE(t){um.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function UE(t){const e=lm.get(t),n=um.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function $E(t,e,n){const r=t.cloneNode(),s=t[bs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=cm(r);return i.removeChild(r),o}const df=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>ko(e,n):e};function BE(t){t.target.composing=!0}function pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vc=Symbol("_assign");function mf(t,e,n){return e&&(t=t.trim()),n&&(t=Ll(t)),t}const wn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vc]=df(s);const i=r||s.props&&s.props.type==="number";as(t,e?"change":"input",o=>{o.target.composing||t[Vc](mf(t.value,n,i))}),(n||i)&&as(t,"change",()=>{t.value=mf(t.value,n,i)}),e||(as(t,"compositionstart",BE),as(t,"compositionend",pf),as(t,"change",pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Vc]=df(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ll(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jE=["ctrl","shift","alt","meta"],qE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jE.some(n=>t[`${n}Key`]&&!e.includes(n))},Zn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=qE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},HE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Kn=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=vr(s.key);if(e.some(o=>o===i||HE[o]===i))return t(s)})},zE=Je({patchProp:DE},pE);let gf;function WE(){return gf||(gf=Kv(zE))}const KE=(...t)=>{const e=WE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,GE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function GE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function QE(t){return je(t)?document.querySelector(t):t}const YE=()=>{};var _f={};/**
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
 */const hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,f=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|f>>6,b=f&63;l||(b=64,o||(g=64)),r.push(n[h],n[p],n[g],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||f==null||p==null)throw new XE;const g=i<<2|c>>4;if(r.push(g),f!==64){const b=c<<4&240|f>>2;if(r.push(b),p!==64){const V=f<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZE=function(t){const e=hm(t);return fm.encodeByteArray(e,!0)},na=function(t){return ZE(t).replace(/\./g,"")},dm=function(t){try{return fm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tT=()=>eT().__FIREBASE_DEFAULTS__,nT=()=>{if(typeof process>"u"||typeof _f>"u")return;const t=_f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dm(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return YE()||tT()||nT()||rT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pm=t=>{var e,n;return(n=(e=Oa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},sT=t=>{const e=pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mm=()=>{var t;return(t=Oa())==null?void 0:t.config},gm=t=>{var e;return(e=Oa())==null?void 0:e[`_${t}`]};/**
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
 */class iT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function cT(){var e;const t=(e=Oa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fT(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dT(){return!cT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pT(){try{return typeof indexedDB=="object"}catch{return!1}}function mT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const gT="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gT,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_T(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,c,r)}}function _T(t,e){return t.replace(yT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yT=/\{\$([^}]+)}/g;function vT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yf(i)&&yf(o)){if(!qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ET(t,e){const n=new TT(t,e);return n.subscribe.bind(n)}class TT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dc),s.error===void 0&&(s.error=Dc),s.complete===void 0&&(s.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _m(t){return(await fetch(t,{credentials:"include"})).ok}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class wT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bT(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AT(t){return t===xr?void 0:t}function bT(t){return t.instantiationMode==="EAGER"}/**
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
 */class ST{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const RT={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},CT=ye.INFO,PT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},kT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=PT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=CT,this._logHandler=kT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const VT=(t,e)=>e.some(n=>t instanceof n);let vf,Ef;function DT(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NT(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,rl=new WeakMap,vm=new WeakMap,Nc=new WeakMap,eu=new WeakMap;function OT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ym.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function xT(t){if(rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MT(t){sl=t(sl)}function LT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return vm.set(r,e.sort?e.sort():[e]),sr(r)}:NT().includes(t)?function(...e){return t.apply(Oc(this),e),sr(ym.get(this))}:function(...e){return sr(t.apply(Oc(this),e))}}function FT(t){return typeof t=="function"?LT(t):(t instanceof IDBTransaction&&xT(t),VT(t,DT())?new Proxy(t,sl):t)}function sr(t){if(t instanceof IDBRequest)return OT(t);if(Nc.has(t))return Nc.get(t);const e=FT(t);return e!==t&&(Nc.set(t,e),eu.set(e,t)),e}const Oc=t=>eu.get(t);function UT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const $T=["get","getKey","getAll","getAllKeys","count"],BT=["put","add","delete","clear"],xc=new Map;function Tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=BT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$T.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&l.done]))[0]};return xc.set(e,i),i}MT(t=>({...t,get:(e,n,r)=>Tf(e,n)||t.get(e,n,r),has:(e,n)=>!!Tf(e,n)||t.has(e,n)}));/**
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
 */class jT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const il="@firebase/app",If="0.14.11";/**
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
 */const Cn=new Zl("@firebase/app"),HT="@firebase/app-compat",zT="@firebase/analytics-compat",WT="@firebase/analytics",KT="@firebase/app-check-compat",GT="@firebase/app-check",QT="@firebase/auth",YT="@firebase/auth-compat",JT="@firebase/database",XT="@firebase/data-connect",ZT="@firebase/database-compat",eI="@firebase/functions",tI="@firebase/functions-compat",nI="@firebase/installations",rI="@firebase/installations-compat",sI="@firebase/messaging",iI="@firebase/messaging-compat",oI="@firebase/performance",aI="@firebase/performance-compat",cI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",hI="@firebase/storage-compat",fI="@firebase/firestore",dI="@firebase/ai",pI="@firebase/firestore-compat",mI="firebase",gI="12.12.0";/**
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
 */const ol="[DEFAULT]",_I={[il]:"fire-core",[HT]:"fire-core-compat",[WT]:"fire-analytics",[zT]:"fire-analytics-compat",[GT]:"fire-app-check",[KT]:"fire-app-check-compat",[QT]:"fire-auth",[YT]:"fire-auth-compat",[JT]:"fire-rtdb",[XT]:"fire-data-connect",[ZT]:"fire-rtdb-compat",[eI]:"fire-fn",[tI]:"fire-fn-compat",[nI]:"fire-iid",[rI]:"fire-iid-compat",[sI]:"fire-fcm",[iI]:"fire-fcm-compat",[oI]:"fire-perf",[aI]:"fire-perf-compat",[cI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[hI]:"fire-gcs-compat",[fI]:"fire-fst",[pI]:"fire-fst-compat",[dI]:"fire-vertex","fire-js":"fire-js",[mI]:"fire-js-all"};/**
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
 */const ra=new Map,yI=new Map,al=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(al.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of ra.values())wf(n,t);for(const n of yI.values())wf(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Wi("app","Firebase",vI);/**
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
 */class EI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=gI;function Em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ol,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=mm()),!n)throw ir.create("no-options");const i=ra.get(s);if(i){if(qr(n,i.options)&&qr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new ST(s);for(const l of al.values())o.addComponent(l);const c=new EI(n,r,o);return ra.set(s,c),c}function Tm(t=ol){const e=ra.get(t);if(!e&&t===ol&&mm())return Em();if(!e)throw ir.create("no-app",{appName:t});return e}function or(t,e,n){let r=_I[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}Ss(new Hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const TI="firebase-heartbeat-database",II=1,Di="firebase-heartbeat-store";let Mc=null;function Im(){return Mc||(Mc=UT(TI,II,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function wI(t){try{const n=(await Im()).transaction(Di),r=await n.objectStore(Di).get(wm(t));return await n.done,r}catch(e){if(e instanceof Nn)Cn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Af(t,e){try{const r=(await Im()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,wm(t)),await r.done}catch(n){if(n instanceof Nn)Cn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AI=1024,bI=30;class SI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bI){const o=PI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bf(),{heartbeatsToSend:r,unsentEntries:s}=RI(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function bf(){return new Date().toISOString().substring(0,10)}function RI(t,e=AI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pT()?mT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return na(JSON.stringify({version:2,heartbeats:t})).length}function PI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function kI(t){Ss(new Hr("platform-logger",e=>new jT(e),"PRIVATE")),Ss(new Hr("heartbeat",e=>new SI(e),"PRIVATE")),or(il,If,t),or(il,If,"esm2020"),or("fire-js","")}kI("");var Rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,Am;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function _(){}_.prototype=v.prototype,A.F=v.prototype,A.prototype=new _,A.prototype.constructor=A,A.D=function(w,I,T){for(var y=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)y[Y-2]=arguments[Y];return v.prototype[I].apply(w,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,_){_||(_=0);const w=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)w[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)w[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=A.g[0],_=A.g[1],I=A.g[2];let T=A.g[3],y;y=v+(T^_&(I^T))+w[0]+3614090360&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+w[1]+3905402710&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+w[2]+606105819&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+w[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+w[4]+4118548399&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+w[5]+1200080426&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+w[6]+2821735955&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+w[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+w[8]+1770035416&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+w[9]+2336552879&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+w[10]+4294925233&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+w[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(T^_&(I^T))+w[12]+1804603682&4294967295,v=_+(y<<7&4294967295|y>>>25),y=T+(I^v&(_^I))+w[13]+4254626195&4294967295,T=v+(y<<12&4294967295|y>>>20),y=I+(_^T&(v^_))+w[14]+2792965006&4294967295,I=T+(y<<17&4294967295|y>>>15),y=_+(v^I&(T^v))+w[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=v+(I^T&(_^I))+w[1]+4129170786&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+w[6]+3225465664&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+w[11]+643717713&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+w[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+w[5]+3593408605&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+w[10]+38016083&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+w[15]+3634488961&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+w[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+w[9]+568446438&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+w[14]+3275163606&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+w[3]+4107603335&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+w[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(I^T&(_^I))+w[13]+2850285829&4294967295,v=_+(y<<5&4294967295|y>>>27),y=T+(_^I&(v^_))+w[2]+4243563512&4294967295,T=v+(y<<9&4294967295|y>>>23),y=I+(v^_&(T^v))+w[7]+1735328473&4294967295,I=T+(y<<14&4294967295|y>>>18),y=_+(T^v&(I^T))+w[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=v+(_^I^T)+w[5]+4294588738&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+w[8]+2272392833&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+w[11]+1839030562&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+w[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+w[1]+2763975236&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+w[4]+1272893353&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+w[7]+4139469664&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+w[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+w[13]+681279174&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+w[0]+3936430074&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+w[3]+3572445317&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+w[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(_^I^T)+w[9]+3654602809&4294967295,v=_+(y<<4&4294967295|y>>>28),y=T+(v^_^I)+w[12]+3873151461&4294967295,T=v+(y<<11&4294967295|y>>>21),y=I+(T^v^_)+w[15]+530742520&4294967295,I=T+(y<<16&4294967295|y>>>16),y=_+(I^T^v)+w[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=v+(I^(_|~T))+w[0]+4096336452&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+w[7]+1126891415&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+w[14]+2878612391&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+w[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+w[12]+1700485571&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+w[3]+2399980690&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+w[10]+4293915773&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+w[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+w[8]+1873313359&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+w[15]+4264355552&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+w[6]+2734768916&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+w[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=v+(I^(_|~T))+w[4]+4149444226&4294967295,v=_+(y<<6&4294967295|y>>>26),y=T+(_^(v|~I))+w[11]+3174756917&4294967295,T=v+(y<<10&4294967295|y>>>22),y=I+(v^(T|~_))+w[2]+718787259&4294967295,I=T+(y<<15&4294967295|y>>>17),y=_+(T^(I|~v))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.v=function(A,v){v===void 0&&(v=A.length);const _=v-this.blockSize,w=this.C;let I=this.h,T=0;for(;T<v;){if(I==0)for(;T<=_;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<v;)if(w[I++]=A.charCodeAt(T++),I==this.blockSize){s(this,w),I=0;break}}else for(;T<v;)if(w[I++]=A[T++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=v},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var _=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)A[v++]=this.g[_]>>>w&255;return A};function i(A,v){var _=c;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=v(A)}function o(A,v){this.h=v;const _=[];let w=!0;for(let I=A.length-1;I>=0;I--){const T=A[I]|0;w&&T==v||(_[I]=T,w=!1)}this.g=_}var c={};function l(A){return-128<=A&&A<128?i(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return B(f(-A));const v=[];let _=1;for(let w=0;A>=_;w++)v[w]=A/_|0,_*=4294967296;return new o(v,0)}function h(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return B(h(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(v,8));let w=p;for(let T=0;T<A.length;T+=8){var I=Math.min(8,A.length-T);const y=parseInt(A.substring(T,T+I),v);I<8?(I=f(Math.pow(v,I)),w=w.j(I).add(f(y))):(w=w.j(_),w=w.add(f(y)))}return w}var p=l(0),g=l(1),b=l(16777216);t=o.prototype,t.m=function(){if(L(this))return-B(this).m();let A=0,v=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);A+=(w>=0?w:4294967296+w)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(L(this))return"-"+B(this).toString(A);const v=f(Math.pow(A,6));var _=this;let w="";for(;;){const I=G(_,v).g;_=W(_,I.j(v));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(A);if(_=I,V(_))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function L(A){return A.h==-1}t.l=function(A){return A=W(this,A),L(A)?-1:V(A)?0:1};function B(A){const v=A.g.length,_=[];for(let w=0;w<v;w++)_[w]=~A.g[w];return new o(_,~A.h).add(g)}t.abs=function(){return L(this)?B(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),_=[];let w=0;for(let I=0;I<=v;I++){let T=w+(this.i(I)&65535)+(A.i(I)&65535),y=(T>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);w=y>>>16,T&=65535,y&=65535,_[I]=y<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function W(A,v){return A.add(B(v))}t.j=function(A){if(V(this)||V(A))return p;if(L(this))return L(A)?B(this).j(B(A)):B(B(this).j(A));if(L(A))return B(this.j(B(A)));if(this.l(b)<0&&A.l(b)<0)return f(this.m()*A.m());const v=this.g.length+A.g.length,_=[];for(var w=0;w<2*v;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<A.g.length;I++){const T=this.i(w)>>>16,y=this.i(w)&65535,Y=A.i(I)>>>16,de=A.i(I)&65535;_[2*w+2*I]+=y*de,Q(_,2*w+2*I),_[2*w+2*I+1]+=T*de,Q(_,2*w+2*I+1),_[2*w+2*I+1]+=y*Y,Q(_,2*w+2*I+1),_[2*w+2*I+2]+=T*Y,Q(_,2*w+2*I+2)}for(A=0;A<v;A++)_[A]=_[2*A+1]<<16|_[2*A];for(A=v;A<2*v;A++)_[A]=0;return new o(_,0)};function Q(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function J(A,v){this.g=A,this.h=v}function G(A,v){if(V(v))throw Error("division by zero");if(V(A))return new J(p,p);if(L(A))return v=G(B(A),v),new J(B(v.g),B(v.h));if(L(v))return v=G(A,B(v)),new J(B(v.g),v.h);if(A.g.length>30){if(L(A)||L(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,w=v;w.l(A)<=0;)_=oe(_),w=oe(w);var I=me(_,1),T=me(w,1);for(w=me(w,2),_=me(_,2);!V(w);){var y=T.add(w);y.l(A)<=0&&(I=I.add(_),T=y),w=me(w,1),_=me(_,1)}return v=W(A,I.j(v)),new J(I,v)}for(I=p;A.l(v)>=0;){for(_=Math.max(1,Math.floor(A.m()/v.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=f(_),y=T.j(v);L(y)||y.l(A)>0;)_-=w,T=f(_),y=T.j(v);V(T)&&(T=g),I=I.add(T),A=W(A,y)}return new J(I,A)}t.B=function(A){return G(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),_=[];for(let w=0;w<v;w++)_[w]=this.i(w)&A.i(w);return new o(_,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),_=[];for(let w=0;w<v;w++)_[w]=this.i(w)|A.i(w);return new o(_,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),_=[];for(let w=0;w<v;w++)_[w]=this.i(w)^A.i(w);return new o(_,this.h^A.h)};function oe(A){const v=A.g.length+1,_=[];for(let w=0;w<v;w++)_[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(_,A.h)}function me(A,v){const _=v>>5;v%=32;const w=A.g.length-_,I=[];for(let T=0;T<w;T++)I[T]=v>0?A.i(T+_)>>>v|A.i(T+_+1)<<32-v:A.i(T+_);return new o(I,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Am=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=h,ar=o}).apply(typeof Rf<"u"?Rf:typeof self<"u"?self:typeof window<"u"?window:{});var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bm,ui,Sm,Oo,cl,Rm,Cm,Pm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Io=="object"&&Io];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function f(a,u,d){return f=l,f.apply(null,arguments)}function h(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,R,P){for(var j=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)j[pe-2]=arguments[pe];return u.prototype[R].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function b(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function V(a,u){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const P=R.length||0;a.length=d+P;for(let j=0;j<P;j++)a[d+j]=R[j]}else a.push(R)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){o.setTimeout(()=>{throw a},0)}function W(){var a=A;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Q{constructor(){this.h=this.g=null}add(u,d){const m=J.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var J=new L(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,me=!1,A=new Q,v=()=>{const a=Promise.resolve(void 0);oe=()=>{a.then(_)}};function _(){for(var a;a=W();){try{a.h.call(a.g)}catch(d){B(d)}var u=J;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}me=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function Y(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Y,I),Y.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),ae=0;function we(a,u,d,m,R){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=R,this.key=++ae,this.da=this.fa=!1}function le(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function mt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function hn(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Kt(a){const u={};for(const d in a)u[d]=a[d];return u}const wt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $s(a,u){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let P=0;P<wt.length;P++)d=wt[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function es(a){this.src=a,this.g={},this.h=0}es.prototype.add=function(a,u,d,m,R){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const j=fn(a,u,m,R);return j>-1?(u=a[j],d||(u.fa=!1)):(u=new we(u,this.src,P,!!m,R),u.fa=d,a.push(u)),u};function Bs(a,u){const d=u.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,u,void 0),P;(P=R>=0)&&Array.prototype.splice.call(m,R,1),P&&(le(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function fn(a,u,d,m){for(let R=0;R<a.length;++R){const P=a[R];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return R}return-1}var On="closure_lm_"+(Math.random()*1e6|0),Ar={};function js(a,u,d,m,R){if(Array.isArray(u)){for(let P=0;P<u.length;P++)js(a,u[P],d,m,R);return null}return d=q(d),a&&a[de]?a.J(u,d,c(m)?!!m.capture:!1,R):br(a,u,d,!1,m,R)}function br(a,u,d,m,R,P){if(!u)throw Error("Invalid event type");const j=c(R)?!!R.capture:!!R;let pe=O(a);if(pe||(a[On]=pe=new es(a)),d=pe.add(u,d,m,j,P),d.proxy)return d;if(m=qu(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)T||(R=j),R===void 0&&(R=!1),a.addEventListener(u.toString(),m,R);else if(a.attachEvent)a.attachEvent(k(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qu(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function E(a,u,d,m,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)E(a,u[P],d,m,R);else m=c(m)?!!m.capture:!!m,d=q(d),a&&a[de]?(a=a.i,P=String(u).toString(),P in a.g&&(u=a.g[P],d=fn(u,d,m,R),d>-1&&(le(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[P],a.h--)))):a&&(a=O(a))&&(u=a.g[u.toString()],a=-1,u&&(a=fn(u,d,m,R)),(d=a>-1?u[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[de])Bs(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(k(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=O(u))?(Bs(d,a),d.h==0&&(d.src=null,u[On]=null)):le(a)}}}function k(a){return a in Ar?Ar[a]:Ar[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new Y(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,u)}return a}function O(a){return a=a[On],a instanceof es?a:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(a){return typeof a=="function"?a:(a[x]||(a[x]=function(u){return a.handleEvent(u)}),a[x])}function $(){w.call(this),this.i=new es(this),this.M=this,this.G=null}p($,w),$.prototype[de]=!0,$.prototype.removeEventListener=function(a,u,d,m){E(this,a,u,d,m)};function U(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var R=u;u=new I(m,a),$s(u,R)}R=!0;let P,j;if(d)for(j=d.length-1;j>=0;j--)P=u.g=d[j],R=M(P,m,!0,u)&&R;if(P=u.g=a,R=M(P,m,!0,u)&&R,R=M(P,m,!1,u)&&R,d)for(j=0;j<d.length;j++)P=u.g=d[j],R=M(P,m,!1,u)&&R}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)le(d[m]);delete a.g[u],a.h--}}this.G=null},$.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},$.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function M(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let P=0;P<u.length;++P){const j=u[P];if(j&&!j.da&&j.capture==d){const pe=j.listener,Ge=j.ha||j.src;j.fa&&Bs(a.i,j),R=pe.call(Ge,m)!==!1&&R}}return R&&!m.defaultPrevented}function ee(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=f(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function H(a){a.g=ee(()=>{a.g=null,a.i&&(a.i=!1,H(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class X extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:H(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(a){w.call(this),this.h=a,this.g={}}p(te,w);var ge=[];function Re(a){mt(a.g,function(u,d){this.g.hasOwnProperty(d)&&S(u)},a),a.g={}}te.prototype.N=function(){te.Z.N.call(this),Re(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ie=o.JSON.stringify,at=o.JSON.parse,ct=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function At(){}function bt(){}var Ut={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ts(){I.call(this,"d")}p(ts,I);function nt(){I.call(this,"c")}p(nt,I);var Ze={},qs=null;function Sr(){return qs=qs||new $}Ze.Ia="serverreachability";function Hu(a){I.call(this,Ze.Ia,a)}p(Hu,I);function Hs(a){const u=Sr();U(u,new Hu(u))}Ze.STAT_EVENT="statevent";function zu(a,u){I.call(this,Ze.STAT_EVENT,a),this.stat=u}p(zu,I);function gt(a){const u=Sr();U(u,new zu(u,a))}Ze.Ja="timingevent";function Wu(a,u){I.call(this,Ze.Ja,a),this.size=u}p(Wu,I);function zs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ws(){this.g=!0}Ws.prototype.ua=function(){this.g=!1};function J_(a,u,d,m,R,P){a.info(function(){if(a.g)if(P){var j="",pe=P.split("&");for(let Ce=0;Ce<pe.length;Ce++){var Ge=pe[Ce].split("=");if(Ge.length>1){const et=Ge[0];Ge=Ge[1];const Qt=et.split("_");j=Qt.length>=2&&Qt[1]=="type"?j+(et+"="+Ge+"&"):j+(et+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+u+`
`+d+`
`+j})}function X_(a,u,d,m,R,P,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+u+`
`+d+`
`+P+" "+j})}function ns(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ey(a,d)+(m?" "+m:"")})}function Z_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ws.prototype.info=function(){};function ey(a,u){if(!a.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return Ie(P)}catch{return u}}var oo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ku={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gu;function ic(){}p(ic,At),ic.prototype.g=function(){return new XMLHttpRequest},Gu=new ic;function Ks(a){return encodeURIComponent(String(a))}function ty(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function xn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new te(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qu}function Qu(){this.i=null,this.g="",this.h=!1}var Yu={},oc={};function ac(a,u,d){a.M=1,a.A=co(Gt(u)),a.u=d,a.R=!0,Ju(a,null)}function Ju(a,u){a.F=Date.now(),ao(a),a.B=Gt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),uh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Qu,a.g=Ch(a.j,d?u:null,!a.u),a.P>0&&(a.O=new X(f(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(ge[0]=R.toString()),R=ge);for(let P=0;P<R.length;P++){const j=js(d,R[P],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.J?Kt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Hs(),J_(a.i,a.v,a.B,a.l,a.S,a.u)}xn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Fn(a)==3?u.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const pe=Fn(this.g),Ge=this.g.ya(),Ce=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||_h(this.g)))){this.K||pe!=4||Ge==7||(Ge==8||Ce<=0?Hs(3):Hs(2)),cc(this);var u=this.g.ca();this.X=u;var d=ny(this);if(this.o=u==200,X_(this.i,this.v,this.B,this.l,this.S,pe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var P=m;break t}}P=null}if(a=P)ns(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lc(this,a);else{this.o=!1,this.m=3,gt(12),Rr(this),Gs(this);break e}}if(this.R){a=!0;let et;for(;!this.K&&this.C<d.length;)if(et=ry(this,d),et==oc){pe==4&&(this.m=4,gt(14),a=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Yu){this.m=4,gt(15),ns(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ns(this.i,this.l,et,null),lc(this,et);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,gt(16),a=!1),this.o=this.o&&a,!a)ns(this.i,this.l,d,"[Invalid Chunked Response]"),Rr(this),Gs(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_c(j),j.P=!0,gt(11))}}else ns(this.i,this.l,d,null),lc(this,d);pe==4&&Rr(this),this.o&&!this.K&&(pe==4?Ah(this.j,this):(this.o=!1,ao(this)))}else _y(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),Rr(this),Gs(this)}}}catch{}finally{}};function ny(a){if(!Xu(a))return a.g.la();const u=_h(a.g);if(u==="")return"";let d="";const m=u.length,R=Fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Rr(a),Gs(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<m;P++)a.h.h=!0,d+=a.h.i.decode(u[P],{stream:!(R&&P==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Xu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ry(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?oc:(d=Number(u.substring(d,m)),isNaN(d)?Yu:(m+=1,m+d>u.length?oc:(u=u.slice(m,m+d),a.C=m+d,u)))}xn.prototype.cancel=function(){this.K=!0,Rr(this)};function ao(a){a.T=Date.now()+a.H,Zu(a,a.H)}function Zu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=zs(f(a.aa,a),u)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Z_(this.i,this.B),this.M!=2&&(Hs(),gt(17)),Rr(this),this.m=2,Gs(this)):Zu(this,this.T-a)};function Gs(a){a.j.I==0||a.K||Ah(a.j,a)}function Rr(a){cc(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Re(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function lc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||uc(d.h,a))){if(!a.L&&uc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)po(d),ho(d);else break e;gc(d),gt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=zs(f(d.Va,d),6e3));nh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Pr(d,11)}else if((a.L||d.g==a)&&po(d),!y(u))for(R=d.Ba.g.parse(u),u=0;u<R.length;u++){let Ce=R[u];const et=Ce[0];if(!(et<=d.K))if(d.K=et,Ce=Ce[1],d.I==2)if(Ce[0]=="c"){d.M=Ce[1],d.ba=Ce[2];const Qt=Ce[3];Qt!=null&&(d.ka=Qt,d.j.info("VER="+d.ka));const kr=Ce[4];kr!=null&&(d.za=kr,d.j.info("SVER="+d.za));const Un=Ce[5];Un!=null&&typeof Un=="number"&&Un>0&&(m=1.5*Un,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $n=a.g;if($n){const go=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(go){var P=m.h;P.g||go.indexOf("spdy")==-1&&go.indexOf("quic")==-1&&go.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(hc(P,P.h),P.h=null))}if(m.G){const yc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(m.wa=yc,Oe(m.J,m.G,yc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=Rh(m,m.L?m.ba:null,m.W),j.L){rh(m.h,j);var pe=j,Ge=m.O;Ge&&(pe.H=Ge),pe.D&&(cc(pe),ao(pe)),m.g=j}else Ih(m);d.i.length>0&&fo(d)}else Ce[0]!="stop"&&Ce[0]!="close"||Pr(d,7);else d.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Pr(d,7):mc(d):Ce[0]!="noop"&&d.l&&d.l.qa(Ce),d.A=0)}}Hs(4)}catch{}}var sy=class{constructor(a,u){this.g=a,this.map=u}};function eh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nh(a){return a.h?1:a.g?a.g.size:0}function uc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function hc(a,u){a.g?a.g.add(u):a.h=u}function rh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return b(a.i)}var ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iy(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let R,P=null;m>=0?(R=a[d].substring(0,m),P=a[d].substring(m+1)):R=a[d],u(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Mn?(this.l=a.l,Qs(this,a.j),this.o=a.o,this.g=a.g,Ys(this,a.u),this.h=a.h,fc(this,hh(a.i)),this.m=a.m):a&&(u=String(a).match(ih))?(this.l=!1,Qs(this,u[1]||"",!0),this.o=Js(u[2]||""),this.g=Js(u[3]||"",!0),Ys(this,u[4]),this.h=Js(u[5]||"",!0),fc(this,u[6]||"",!0),this.m=Js(u[7]||"")):(this.l=!1,this.i=new Zs(null,this.l))}Mn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Xs(u,oh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Xs(u,oh,!0),"@"),a.push(Ks(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Xs(d,d.charAt(0)=="/"?cy:ay,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Xs(d,uy)),a.join("")},Mn.prototype.resolve=function(a){const u=Gt(this);let d=!!a.j;d?Qs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)Ys(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=u.h.lastIndexOf("/");R!=-1&&(m=u.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let j=0;j<R.length;){const pe=R[j++];pe=="."?m&&j==R.length&&P.push(""):pe==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&j==R.length&&P.push("")):(P.push(pe),m=!0)}m=P.join("/")}else m=R}return d?u.h=m:d=a.i.toString()!=="",d?fc(u,hh(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Gt(a){return new Mn(a)}function Qs(a,u,d){a.j=d?Js(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ys(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function fc(a,u,d){u instanceof Zs?(a.i=u,hy(a.i,a.l)):(d||(u=Xs(u,ly)),a.i=new Zs(u,a.l))}function Oe(a,u,d){a.i.set(u,d)}function co(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,oy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function oy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,ay=/[#\?:]/g,cy=/[#\?]/g,ly=/[#\?@]/g,uy=/#/g;function Zs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Cr(a){a.g||(a.g=new Map,a.h=0,a.i&&iy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Zs.prototype,t.add=function(a,u){Cr(this),this.i=null,a=rs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ah(a,u){Cr(a),u=rs(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ch(a,u){return Cr(a),u=rs(a,u),a.g.has(u)}t.forEach=function(a,u){Cr(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(u,R,m,this)},this)},this)};function lh(a,u){Cr(a);let d=[];if(typeof u=="string")ch(a,u)&&(d=d.concat(a.g.get(rs(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Cr(this),this.i=null,a=rs(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=lh(this,a),a.length>0?String(a[0]):u):u};function uh(a,u,d){ah(a,u),d.length>0&&(a.i=null,a.g.set(rs(a,u),b(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const R=Ks(d);d=lh(this,d);for(let P=0;P<d.length;P++){let j=R;d[P]!==""&&(j+="="+Ks(d[P])),a.push(j)}}return this.i=a.join("&")};function hh(a){const u=new Zs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function rs(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function hy(a,u){u&&!a.j&&(Cr(a),a.i=null,a.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(ah(this,m),uh(this,R,d))},a)),a.j=u}function fy(a,u){const d=new Ws;if(o.Image){const m=new Image;m.onload=h(Ln,d,"TestLoadImage: loaded",!0,u,m),m.onerror=h(Ln,d,"TestLoadImage: error",!1,u,m),m.onabort=h(Ln,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=h(Ln,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function dy(a,u){const d=new Ws,m=new AbortController,R=setTimeout(()=>{m.abort(),Ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(R),P.ok?Ln(d,"TestPingServer: ok",!0,u):Ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Ln(d,"TestPingServer: error",!1,u)})}function Ln(a,u,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function py(){this.g=new ct}function dc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(dc,At),dc.prototype.g=function(){return new lo(this.i,this.h)};function lo(a,u){$.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(lo,$),t=lo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ti(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ei(this):ti(this),this.readyState==3&&fh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ei(this))},t.Na=function(a){this.g&&(this.response=a,ei(this))},t.ga=function(){this.g&&ei(this)};function ei(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ti(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dh(a){let u="";return mt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function pc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=dh(d),typeof a=="string"?d!=null&&Ks(d):Oe(a,u,d))}function Ue(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,$);var my=/^https?$/i,gy=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gu.g(),this.g.onreadystatechange=g(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){ph(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gy,u,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of d)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){ph(this,P)}};function ph(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,mh(a),uo(a)}function mh(a){a.A||(a.A=!0,U(a,"complete"),U(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,U(this,"complete"),U(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gh(this):this.Xa())},t.Xa=function(){gh(this)};function gh(a){if(a.h&&typeof i<"u"){if(a.v&&Fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(U(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=P===0){let j=String(a.D).match(ih)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!my.test(j?j.toLowerCase():"")}d=m}if(d)U(a,"complete"),U(a,"success");else{a.o=6;try{var R=Fn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",mh(a)}}finally{uo(a)}}}}function uo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||U(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),at(u)}};function _h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _y(a){const u={};a=(a.g&&Fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=ty(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[R]||[];u[R]=P,P.push(d)}hn(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ni(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function yh(a){this.za=0,this.i=[],this.j=new Ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ni("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ni("baseRetryDelayMs",5e3,a),this.Za=ni("retryDelaySeedMs",1e4,a),this.Ta=ni("forwardChannelMaxRetries",2,a),this.va=ni("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new eh(a&&a.concurrentRequestLimit),this.Ba=new py,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=yh.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){gt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Rh(this,null,this.W),fo(this)};function mc(a){if(vh(a),a.I==3){var u=a.V++,d=Gt(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),ri(a,d),u=new xn(a,a.j,u),u.M=2,u.A=co(Gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ch(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ao(u)}Sh(a)}function ho(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function vh(a){ho(a),a.v&&(o.clearTimeout(a.v),a.v=null),po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function fo(a){if(!th(a.h)&&!a.m){a.m=!0;var u=a.Ea;oe||v(),me||(oe(),me=!0),A.add(u,a),a.D=0}}function yy(a,u){return nh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=zs(f(a.Ea,a,u),bh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new xn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Kt(P),$s(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Th(this,R,u),d=Gt(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),ri(this,d),P&&(this.R?u="headers="+Ks(dh(P))+"&"+u:this.u&&pc(d,this.u,P)),hc(this.h,R),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",u),Oe(d,"SID","null"),R.U=!0,ac(R,d,null)):ac(R,d,u),this.I=2}}else this.I==3&&(a?Eh(this,a):this.i.length==0||th(this.h)||Eh(this))};function Eh(a,u){var d;u?d=u.l:d=a.V++;const m=Gt(a.J);Oe(m,"SID",a.M),Oe(m,"RID",d),Oe(m,"AID",a.K),ri(a,m),a.u&&a.o&&pc(m,a.u,a.o),d=new xn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Th(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hc(a.h,d),ac(d,m,u)}function ri(a,u){a.H&&mt(a.H,function(d,m){Oe(u,m,d)}),a.l&&mt({},function(d,m){Oe(u,m,d)})}function Th(a,u,d){d=Math.min(a.i.length,d);const m=a.l?f(a.l.Ka,a.l,a):null;e:{var R=a.i;let pe=-1;for(;;){const Ge=["count="+d];pe==-1?d>0?(pe=R[0].g,Ge.push("ofs="+pe)):pe=0:Ge.push("ofs="+pe);let Ce=!0;for(let et=0;et<d;et++){var P=R[et].g;const Qt=R[et].map;if(P-=pe,P<0)pe=Math.max(0,R[et].g-100),Ce=!1;else try{P="req"+P+"_"||"";try{var j=Qt instanceof Map?Qt:Object.entries(Qt);for(const[kr,Un]of j){let $n=Un;c(Un)&&($n=Ie(Un)),Ge.push(P+kr+"="+encodeURIComponent($n))}}catch(kr){throw Ge.push(P+"type="+encodeURIComponent("_badmap")),kr}}catch{m&&m(Qt)}}if(Ce){j=Ge.join("&");break e}}j=void 0}return a=a.i.splice(0,d),u.G=a,j}function Ih(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;oe||v(),me||(oe(),me=!0),A.add(u,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=zs(f(a.Da,a),bh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,wh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=zs(f(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),ho(this),wh(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function wh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Gt(a.na);Oe(u,"RID","rpc"),Oe(u,"SID",a.M),Oe(u,"AID",a.K),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(u,"TO",a.ia),Oe(u,"TYPE","xmlhttp"),ri(a,u),a.u&&a.o&&pc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=co(Gt(u)),d.u=null,d.R=!0,Ju(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ho(this),gc(this),gt(19))};function po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ah(a,u){var d=null;if(a.g==u){po(a),_c(a),a.g=null;var m=2}else if(uc(a.h,u))d=u.G,rh(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var R=a.D;m=Sr(),U(m,new Wu(m,d)),fo(a)}else Ih(a);else if(R=u.m,R==3||R==0&&u.X>0||!(m==1&&yy(a,u)||m==2&&gc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),R){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function bh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Pr(a,u){if(a.j.info("Error code "+u),u==2){var d=f(a.bb,a),m=a.Ua;const R=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Qs(m,"https"),co(m),R?fy(m.toString(),d):dy(m.toString(),d)}else gt(2);a.I=0,a.l&&a.l.pa(u),Sh(a),vh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Sh(a){if(a.I=0,a.ja=[],a.l){const u=sh(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ja,u),V(a.ja,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.oa()}}function Rh(a,u,d){var m=d instanceof Mn?Gt(d):new Mn(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ys(m,m.u);else{var R=o.location;m=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const P=new Mn(null);m&&Qs(P,m),u&&(P.g=u),R&&Ys(P,R),d&&(P.h=d),m=P}return d=a.G,u=a.wa,d&&u&&Oe(m,d,u),Oe(m,"VER",a.ka),ri(a,m),m}function Ch(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Ue(new dc({ab:d})):new Ue(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function mo(){}mo.prototype.g=function(a,u){return new St(a,u)};function St(a,u){$.call(this),this.g=new yh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ss(this)}p(St,$),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){mc(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ie(a),a=d);u.i.push(new sy(u.Ya++,a)),u.I==3&&fo(u)},St.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,St.Z.N.call(this)};function kh(a){ts.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(kh,ts);function Vh(){nt.call(this),this.status=1}p(Vh,nt);function ss(a){this.g=a}p(ss,Ph),ss.prototype.ra=function(){U(this.g,"a")},ss.prototype.qa=function(a){U(this.g,new kh(a))},ss.prototype.pa=function(a){U(this.g,new Vh)},ss.prototype.oa=function(){U(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Pm=function(){return new mo},Cm=function(){return Sr()},Rm=Ze,cl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,Oo=oo,Ku.COMPLETE="complete",Sm=Ku,bt.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",$.prototype.listen=$.prototype.J,ui=bt,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,bm=Ue}).apply(typeof Io<"u"?Io:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Os="12.12.0";function VI(t){Os=t}/**
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
 */const zr=new Zl("@firebase/firestore");function cs(){return zr.logLevel}function K(t,...e){if(zr.logLevel<=ye.DEBUG){const n=e.map(nu);zr.debug(`Firestore (${Os}): ${t}`,...n)}}function Pn(t,...e){if(zr.logLevel<=ye.ERROR){const n=e.map(nu);zr.error(`Firestore (${Os}): ${t}`,...n)}}function Wr(t,...e){if(zr.logLevel<=ye.WARN){const n=e.map(nu);zr.warn(`Firestore (${Os}): ${t}`,...n)}}function nu(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,km(t,r,n)}function km(t,e,n){let r=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||km(e,s,r)}function he(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class NI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OI{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Vm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class xI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class MI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=FI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ll(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Lc(s)===Lc(i)?ve(s,i):Lc(s)?1:-1}return ve(t.length,e.length)}const UI=55296,$I=57343;function Lc(t){const e=t.charCodeAt(0);return e>=UI&&e<=$I}function Rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Pf="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class De extends Zt{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const BI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Zt{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return BI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pf}static keyField(){return new st([Pf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(De.fromString(e))}static fromName(e){return new Z(De.fromString(e).popFirst(5))}static empty(){return new Z(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new De(e.slice()))}}/**
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
 */function Dm(t,e,n){if(!n)throw new z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jI(t,e,n,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kf(t){if(!Z.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(Z.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qi(t,e){if(!Nm(t))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const Df=-62135596800,Nf=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nf);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Df)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nf}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qi(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Df;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Ke("string",xe._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new xe(0,0))}static max(){return new ce(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ni=-1;function qI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new hr(s,Z.empty(),e)}function HI(t){return new hr(t.readTime,t.key,Ni)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ce.min(),Z.empty(),Ni)}static max(){return new hr(ce.max(),Z.empty(),Ni)}}function zI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const WI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==WI)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const f=l;n(e[f]).next(h=>{o[f]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ma.ce=-1;/**
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
 */const su=-1;function La(t){return t==null}function sa(t){return t===0&&1/t==-1/0}function QI(t){return typeof t=="number"&&Number.isInteger(t)&&!sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Om="";function YI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Of(e)),e=JI(t.get(n),e);return Of(e)}function JI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Om:n+="";break;default:n+=i}}return n}function Of(t){return t+Om+""}/**
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
 */function xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(e){return new Mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Ye(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mm("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=XI.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */const Lm="server_timestamp",Fm="__type__",Um="__previous_value__",$m="__local_write_time__";function iu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fm])==null?void 0:r.stringValue)===Lm}function Fa(t){const e=t.mapValue.fields[Um];return iu(e)?Fa(e):e}function Oi(t){const e=fr(t.mapValue.fields[$m].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class ZI{constructor(e,n,r,s,i,o,c,l,f,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f,this.isUsingEmulator=h,this.apiKey=p}}const ia="(default)";class xi{constructor(e,n){this.projectId=e,this.database=n||ia}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===ia}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function ew(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId,e)}/**
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
 */const Bm="__type__",tw="__max__",Ao={mapValue:{}},jm="__vector__",oa="value";function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iu(t)?4:rw(t)?9007199254740991:nw(t)?10:11:se(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),c=fr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?sa(o)===sa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(xf(o)!==xf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!cn(o[l],c[l])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function Mi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Lf(t.timestampValue,e.timestampValue);case 4:return Lf(Oi(t),Oi(e));case 5:return ll(t.stringValue,e.stringValue);case 6:return function(i,o){const c=dr(i),l=dr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let f=0;f<c.length&&f<l.length;f++){const h=ve(c[f],l[f]);if(h!==0)return h}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(qe(i.latitude),qe(o.latitude));return c!==0?c:ve(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ff(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,b,V,L;const c=i.fields||{},l=o.fields||{},f=(g=c[oa])==null?void 0:g.arrayValue,h=(b=l[oa])==null?void 0:b.arrayValue,p=ve(((V=f==null?void 0:f.values)==null?void 0:V.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return p!==0?p:Ff(f,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ao.mapValue&&o===Ao.mapValue)return 0;if(i===Ao.mapValue)return 1;if(o===Ao.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),f=o.fields||{},h=Object.keys(f);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=ll(l[p],h[p]);if(g!==0)return g;const b=Cs(c[l[p]],f[h[p]]);if(b!==0)return b}return ve(l.length,h.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=fr(t),r=fr(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Ff(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Cs(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ps(t){return ul(t)}function ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ul(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ul(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function xo(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(t);return e?16+xo(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+xo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Er(r.fields,(i,o)=>{s+=i.length+xo(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function Uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hl(t){return!!t&&"integerValue"in t}function ou(t){return!!t&&"arrayValue"in t}function $f(t){return!!t&&"nullValue"in t}function Bf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function nw(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Bm])==null?void 0:r.stringValue)===jm}function Ti(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return{...t}}function rw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===tw}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ti(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ti(this.value))}}function qm(t){const e=[];return Er(t.fields,(n,r)=>{const s=new st([n]);if(Mo(r)){const i=qm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,ce.min(),ce.min(),ce.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,ce.min(),ce.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ce.min(),ce.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function jf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function sw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hm{}class We extends Hm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ow(e,n,r):n==="array-contains"?new lw(e,r):n==="in"?new uw(e,r):n==="not-in"?new hw(e,r):n==="array-contains-any"?new fw(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aw(e,r):new cw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Hm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zt(e,n)}matches(e){return zm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zm(t){return t.op==="and"}function Wm(t){return iw(t)&&zm(t)}function iw(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function fl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(Wm(t))return t.filters.map(e=>fl(e)).join(",");{const e=t.filters.map(n=>fl(n)).join(",");return`${t.op}(${e})`}}function Km(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Km(o,s.filters[c]),!0):!1}(t,e):void se(19439)}function Gm(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gm).join(" ,")+"}"}(t):"Filter"}class ow extends We{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class aw extends We{constructor(e,n){super(e,"in",n),this.keys=Qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cw extends We{constructor(e,n){super(e,"not-in",n),this.keys=Qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class lw extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&Mi(n.arrayValue,this.value)}}class uw extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class hw extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mi(this.value.arrayValue,n)}}class fw extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
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
 */class dw{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dw(t,e,n,r,s,i,o)}function au(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.Te=n}return e.Te}function cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Km(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qf(t.startAt,e.startAt)&&qf(t.endAt,e.endAt)}function dl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Yi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function pw(t,e,n,r,s,i,o,c){return new Yi(t,e,n,r,s,i,o,c)}function Ua(t){return new Yi(t)}function zf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mw(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ym(t){return t.collectionGroup!==null}function Ii(t){const e=he(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ye(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ca(i,r))}),n.has(st.keyField().canonicalString())||e.Ee.push(new ca(st.keyField(),r))}return e.Ee}function nn(t){const e=he(t);return e.Ie||(e.Ie=gw(e,Ii(t))),e.Ie}function gw(t,e){if(t.limitType==="F")return Hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ca(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return Hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pl(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ml(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return cu(nn(t),nn(e))&&t.limitType===e.limitType}function Jm(t){return`${au(nn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gm(s)).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ps(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Ba(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const f=jf(o,c,l);return o.inclusive?f<=0:f<0}(r.startAt,Ii(r),s)||r.endAt&&!function(o,c,l){const f=jf(o,c,l);return o.inclusive?f>=0:f>0}(r.endAt,Ii(r),s))}(t,e)}function _w(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xm(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=yw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yw(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),f=c.data.field(i);return l!==null&&f!==null?Cs(l,f):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class Jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
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
 */const vw=new Fe(Z.comparator);function kn(){return vw}const Zm=new Fe(Z.comparator);function hi(...t){let e=Zm;for(const n of t)e=e.insert(n.key,n);return e}function eg(t){let e=Zm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return wi()}function tg(){return wi()}function wi(){return new Jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ew=new Fe(Z.comparator),Tw=new Ye(Z.comparator);function Ee(...t){let e=Tw;for(const n of t)e=e.add(n);return e}const Iw=new Ye(ve);function ww(){return Iw}/**
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
 */function lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sa(e)?"-0":e}}function ng(t){return{integerValue:""+t}}function Aw(t,e){return QI(e)?ng(e):lu(t,e)}/**
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
 */class ja{constructor(){this._=void 0}}function bw(t,e,n){return t instanceof Li?function(s,i){const o={fields:{[Fm]:{stringValue:Lm},[$m]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&iu(i)&&(i=Fa(i)),i&&(o.fields[Um]=i),{mapValue:o}}(n,e):t instanceof Fi?sg(t,e):t instanceof Ui?ig(t,e):function(s,i){const o=rg(s,i),c=Wf(o)+Wf(s.Ae);return hl(o)&&hl(s.Ae)?ng(c):lu(s.serializer,c)}(t,e)}function Sw(t,e,n){return t instanceof Fi?sg(t,e):t instanceof Ui?ig(t,e):n}function rg(t,e){return t instanceof la?function(r){return hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Li extends ja{}class Fi extends ja{constructor(e){super(),this.elements=e}}function sg(t,e){const n=og(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends ja{constructor(e){super(),this.elements=e}}function ig(t,e){let n=og(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class la extends ja{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Wf(t){return qe(t.integerValue||t.doubleValue)}function og(t){return ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Rw{constructor(e,n){this.field=e,this.transform=n}}function Cw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fi&&s instanceof Fi||r instanceof Ui&&s instanceof Ui?Rs(r.elements,s.elements,cn):r instanceof la&&s instanceof la?cn(r.Ae,s.Ae):r instanceof Li&&s instanceof Li}(t.transform,e.transform)}class Pw{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qa{}function ag(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uu(t.key,Lt.none()):new Ji(t.key,t.data,Lt.none());{const n=t.data,r=It.empty();let s=new Ye(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new kt(s.toArray()),Lt.none())}}function kw(t,e,n){t instanceof Ji?function(s,i,o){const c=s.value.clone(),l=Gf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Gf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(cg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ai(t,e,n,r){return t instanceof Ji?function(i,o,c,l){if(!Lo(i.precondition,o))return c;const f=i.value.clone(),h=Qf(i.fieldTransforms,l,o);return f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,c,l){if(!Lo(i.precondition,o))return c;const f=Qf(i.fieldTransforms,l,o),h=o.data;return h.setAll(cg(i)),h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Vw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=rg(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Kf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rs(r,s,(i,o)=>Cw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gf(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Sw(o,c,n[s]))}return r}function Qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bw(i,o,e))}return r}class uu extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dw extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ag(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>Kf(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>Kf(n,r))}}class hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Ew}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hu(e,n,r,s)}}/**
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
 */class Ow{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,Te;function Mw(t){switch(t){case D.OK:return se(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function lg(t){if(t===void 0)return Pn("GRPC error has no .code"),D.UNKNOWN;switch(t){case ze.OK:return D.OK;case ze.CANCELLED:return D.CANCELLED;case ze.UNKNOWN:return D.UNKNOWN;case ze.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ze.INTERNAL:return D.INTERNAL;case ze.UNAVAILABLE:return D.UNAVAILABLE;case ze.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ze.NOT_FOUND:return D.NOT_FOUND;case ze.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ze.ABORTED:return D.ABORTED;case ze.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ze.DATA_LOSS:return D.DATA_LOSS;default:return se(39323,{code:t})}}(Te=ze||(ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lw(){return new TextEncoder}/**
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
 */const Fw=new ar([4294967295,4294967295],0);function Yf(t){const e=Lw().encode(t),n=new Am;return n.update(e),new Uint8Array(n.digest())}function Jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ar([n,r],0),new ar([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fi(`Invalid padding: ${n}`);if(r<0)throw new fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ar.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ar.fromNumber(r)));return s.compare(Fw)===1&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yf(e),[r,s]=Jf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Yf(e),[r,s]=Jf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ha(ce.min(),s,new Fe(ve),kn(),Ee())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,Ee(),Ee(),Ee())}}/**
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
 */class Fo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class ug{constructor(e,n){this.targetId=e,this.Ce=n}}class hg{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xf{constructor(){this.ve=0,this.Fe=Zf(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Xi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Zf()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Uw{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=bo(),this.He=bo(),this.Ze=new Fe(ve)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(dl(i))if(r===0){const o=new Z(i.path);this.et(n,o,ft.newNoDocument(o,ce.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,f)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=dr(r).toUint8Array()}catch(l){if(l instanceof Mm)return Wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return Wr(l instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&dl(c.target)){const l=new Z(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ft.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const f=this.ot(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ha(e,n,this.Ze,this.je,r);return this.je=kn(),this.Je=bo(),this.He=bo(),this.Ze=new Fe(ve),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Xf,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ye(ve),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ye(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xf),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bo(){return new Fe(Z.comparator)}function Zf(){return new Fe(Z.comparator)}const $w={asc:"ASCENDING",desc:"DESCENDING"},Bw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jw={and:"AND",or:"OR"};class qw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gl(t,e){return t.useProto3Json||La(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Hw(t,e){return ua(t,e.toTimestamp())}function rn(t){return Se(!!t,49232),ce.fromTimestamp(function(n){const r=fr(n);return new xe(r.seconds,r.nanos)}(t))}function du(t,e){return _l(t,e).canonicalString()}function _l(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dg(t){const e=De.fromString(t);return Se(yg(e),10190,{key:e.toString()}),e}function yl(t,e){return du(t.databaseId,e.path)}function Fc(t,e){const n=dg(e);if(n.get(1)!==t.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(mg(n))}function pg(t,e){return du(t.databaseId,e)}function zw(t){const e=dg(t);return e.length===4?De.emptyPath():mg(e)}function vl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mg(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ed(t,e,n){return{name:yl(t,e),fields:n.value.mapValue.fields}}function Ww(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:se(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,h){return f.useProto3Json?(Se(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(Se(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(f){const h=f.code===void 0?D.UNKNOWN:lg(f.code);return new z(h,f.message||"")}(o);n=new hg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ce.min(),c=new It({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),f=r.targetIds||[],h=r.removedTargetIds||[];n=new Fo(f,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fc(t,r.document),i=r.readTime?rn(r.readTime):ce.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xw(s,i),c=r.targetId;n=new ug(c,o)}}return n}function Kw(t,e){let n;if(e instanceof Ji)n={update:ed(t,e.key,e.value)};else if(e instanceof uu)n={delete:yl(t,e.key)};else if(e instanceof Tr)n={update:ed(t,e.key,e.data),updateMask:nA(e.fieldMask)};else{if(!(e instanceof Dw))return se(16599,{dt:e.type});n={verify:yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof la)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function Gw(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ce.min())&&(o=rn(i)),new Pw(o,s.transformResults||[])}(n,e))):[]}function Qw(t,e){return{documents:[pg(t,e.path)]}}function Yw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pg(t,s);const i=function(f){if(f.length!==0)return _g(zt.create(f,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(f){if(f.length!==0)return f.map(h=>function(g){return{field:us(g.field),direction:Zw(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=gl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ft:n,parent:s}}function Jw(t){let e=zw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const g=gg(p);return g instanceof zt&&Wm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(V){return new ca(hs(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,La(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,b=p.values||[];return new aa(b,g)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const g=!p.before,b=p.values||[];return new aa(b,g)}(n.endAt)),pw(e,s,o,i,c,"F",l,f)}function Xw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>gg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function Zw(t){return $w[t]}function eA(t){return Bw[t]}function tA(t){return jw[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return st.fromServerFormat(t.fieldPath)}function _g(t){return t instanceof We?function(n){if(n.op==="=="){if(Bf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if($f(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if($f(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:eA(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>_g(s));return r.length===1?r[0]:{compositeFilter:{op:tA(n.op),filters:r}}}(t):se(54877,{filter:t})}function nA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function vg(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class er{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rA{constructor(e){this.yt=e}}function sA(t){const e=Jw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ml(e,e.limit,"L"):e}/**
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
 */class iA{constructor(){this.bn=new oA}addToCollectionParentIndex(e,n){return this.bn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(hr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class oA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(De.comparator)).toArray()}}/**
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
 */const td={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Eg=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Eg,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class ks{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ks(0)}static ar(){return new ks(-1)}}/**
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
 */const nd="LruGarbageCollector",aA=1048576;function rd([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class cA{constructor(e){this.Pr=e,this.buffer=new Ye(rd),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(nd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?K(nd,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Ar(3e5)})}}class uA{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Ma.ce);const r=new cA(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(td)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),td):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,f;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(f=Date.now(),cs()<=ye.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(f-l)+`ms
Total Duration: ${f-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function hA(t,e){return new uA(t,e)}/**
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
 */class fA{constructor(){this.changes=new Jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ai(r.mutation,s,kt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=hi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=kn();const o=wi(),c=function(){return wi()}();return n.forEach((l,f)=>{const h=r.get(f.key);s.has(f.key)&&(h===void 0||h.mutation instanceof Tr)?i=i.insert(f.key,f):h!==void 0?(o.set(f.key,h.mutation.getFieldMask()),Ai(h.mutation,f,h.mutation.getFieldMask(),xe.now())):o.set(f.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((f,h)=>o.set(f,h)),n.forEach((f,h)=>c.set(f,new dA(h,o.get(f)??null))),c))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Fe((o,c)=>o-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const f=n.get(l);if(f===null)return;let h=r.get(l)||kt.empty();h=c.applyToLocalView(f,h),r.set(l,h);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,h=l.value,p=tg();h.forEach(g=>{if(!i.has(g)){const b=ag(n.get(g),r.get(g));b!==null&&p.set(g,b),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,p))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return mw(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(Lr());let c=Ni,l=i;return o.next(f=>N.forEach(f,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,l,f,Ee())).next(h=>({batchId:c,changes:eg(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=hi();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const f=function(p,g){return new Yi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,f)=>{const h=f.getKey();o.get(h)===null&&(o=o.insert(h,ft.newInvalidDocument(h)))});let c=hi();return o.forEach((l,f)=>{const h=i.get(l);h!==void 0&&Ai(h.mutation,f,kt.empty(),xe.now()),Ba(n,f)&&(c=c.insert(l,f))}),c})}}/**
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
 */class mA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return N.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:sA(s.bundledQuery),readTime:rn(s.readTime)}}(n)),N.resolve()}}/**
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
 */class gA{constructor(){this.overlays=new Fe(Z.comparator),this.Lr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new Z(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((f,h)=>f-h);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let h=i.get(f.largestBatchId);h===null&&(h=Lr(),i=i.insert(f.largestBatchId,h)),h.set(f.getKey(),f)}}const c=Lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,h)=>c.set(f,h)),!(c.size()>=s)););return N.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ow(n,r));let i=this.Lr.get(n);i===void 0&&(i=Ee(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class _A{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class pu{constructor(){this.kr=new Ye(tt.qr),this.Kr=new Ye(tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new tt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Z(new De([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new Z(new De([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ee();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return Z.comparator(e.key,n.key)||ve(e.Jr,n.Jr)}static Ur(e,n){return ve(e.Jr,n.Jr)||Z.comparator(e.key,n.key)}}/**
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
 */class yA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ye(tt.qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nw(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?su:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ve);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{r=r.add(c.Jr)})}),N.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new tt(new Z(i),0);let c=new Ye(ve);return this.Hr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.Jr)),!0)},o),N.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return N.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new tt(n,0),s=this.Hr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vA{constructor(e){this.ti=e,this.docs=function(){return new Fe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new Z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:h}}=l.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||zI(HI(h),r)<=0||(s.has(h.key)||Ba(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EA(this)}getSize(e){return N.resolve(this.size)}}class EA extends fA{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class TA{constructor(e){this.persistence=e,this.ri=new Jr(n=>au(n),cu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.ii=0,this.si=new pu,this.targetCount=0,this.oi=ks._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),N.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.lr(n),N.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.si.containsKey(n))}}/**
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
 */class Tg{constructor(e,n){this._i={},this.overlays={},this.ai=new Ma(0),this.ui=!1,this.ui=!0,this.ci=new _A,this.referenceDelegate=e(this),this.li=new TA(this),this.indexManager=new iA,this.remoteDocumentCache=function(s){return new vA(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new rA(n),this.Pi=new mA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new yA(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new IA(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return N.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class IA extends KI{constructor(e){super(),this.currentSequenceNumber=e}}class mu{constructor(e){this.persistence=e,this.Ri=new pu,this.Ai=null}static Vi(e){return new mu(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,r=>{const s=Z.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return N.or([()=>N.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ha{constructor(e,n){this.persistence=e,this.fi=new Jr(r=>YI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hA(this,n)}static Vi(e,n){return new ha(e,n)}Ti(){}Ei(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return N.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),N.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xo(e.data.value)),n}wr(e,n,r){return N.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(e,n.fromCache,r,s)}}/**
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
 */class wA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return dT()?8:GI(pt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wA;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(cs()<=ye.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(cs()<=ye.DEBUG&&K("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(cs()<=ye.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):N.resolve())}gs(e,n){if(zf(n))return N.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ml(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.Ss(n,c);return this.bs(n,f,o,l.readTime)?this.gs(e,ml(n,null,"F")):this.Ds(e,f,n,l)}))})))}ps(e,n,r,s){return zf(n)||s.isEqual(ce.min())?N.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?N.resolve(null):(cs()<=ye.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ls(n)),this.Ds(e,o,n,qI(s,Ni)).next(c=>c))})}Ss(e,n){let r=new Ye(Xm(e));return n.forEach((s,i)=>{Ba(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return cs()<=ye.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ls(n)),this.fs.getDocumentsMatchingQuery(e,n,hr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const _u="LocalStore",bA=3e8;class SA{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Fe(ve),this.Fs=new Jr(i=>au(i),cu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function RA(t,e,n,r){return new SA(t,e,n,r)}async function Ig(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ee();for(const f of s){o.push(f.batchId);for(const h of f.mutations)l=l.add(h.key)}for(const f of i){c.push(f.batchId);for(const h of f.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(f=>({Ns:f,removedBatchIds:o,addedBatchIds:c}))})})}function CA(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,f,h){const p=f.batch,g=p.keys();let b=N.resolve();return g.forEach(V=>{b=b.next(()=>h.getEntry(l,V)).next(L=>{const B=f.docVersions.get(V);Se(B!==null,48541),L.version.compareTo(B)<0&&(p.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),h.addEntry(L)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ee();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wg(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function PA(t,e){const n=he(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(n.li.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,p)));let b=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,r)),s=s.insert(p,b),function(L,B,W){return L.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=bA?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(g,b,h)&&c.push(n.li.updateTargetData(i,b))});let l=kn(),f=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(kA(i,o,e.documentUpdates).next(h=>{l=h.Bs,f=h.Ls})),!r.isEqual(ce.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return N.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,f)).next(()=>l)}).then(i=>(n.vs=s,i))}function kA(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((c,l)=>{const f=i.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):K(_u,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function VA(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=su),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DA(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function El(t,e,n){const r=he(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ms(o))throw o;K(_u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function sd(t,e,n){const r=he(t);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,f,h){const p=he(l),g=p.Fs.get(h);return g!==void 0?N.resolve(p.vs.get(g)):p.li.getTargetData(f,h)}(r,o,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Ee())).next(c=>(NA(r,_w(e),c),{documents:c,ks:i})))}function NA(t,e,n){let r=t.Ms.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class id{constructor(){this.activeTargetIds=ww()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OA{constructor(){this.vo=new id,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new id,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xA{Mo(e){}shutdown(){}}/**
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
 */const od="ConnectivityMonitor";class ad{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(od,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(od,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let So=null;function Tl(){return So===null?So=function(){return 268435456+Math.round(2147483648*Math.random())}():So++,"0x"+So.toString(16)}/**
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
 */const Uc="RestConnection",MA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LA{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ia?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Tl(),c=this.Qo(e,n.toUriEncodedString());K(Uc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:f}=new URL(c),h=Gi(f);return this.zo(e,c,l,r,h).then(p=>(K(Uc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Wr(Uc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=MA[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class FA{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const lt="WebChannelConnection",oi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class _s extends LA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!_s.c_){const e=Cm();oi(e,Rm.STAT_EVENT,n=>{n.stat===cl.PROXY?K(lt,"STAT_EVENT: detected buffering proxy"):n.stat===cl.NOPROXY&&K(lt,"STAT_EVENT: detected no buffering proxy")}),_s.c_=!0}}zo(e,n,r,s,i){const o=Tl();return new Promise((c,l)=>{const f=new bm;f.setWithCredentials(!0),f.listenOnce(Sm.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Oo.NO_ERROR:const p=f.getResponseJson();K(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Oo.TIMEOUT:K(lt,`RPC '${e}' ${o} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const g=f.getStatus();if(K(lt,`RPC '${e}' ${o} failed with status:`,g,"response text:",f.getResponseText()),g>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const L=function(W){const Q=W.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(Q)>=0?Q:D.UNKNOWN}(V.status);l(new z(L,V.message))}else l(new z(D.UNKNOWN,"Server responded with status "+f.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{K(lt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);K(lt,`RPC '${e}' ${o} sending request:`,s),f.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Tl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");K(lt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const h=o.createWebChannel(f,c);this.E_(h);let p=!1,g=!1;const b=new FA({Jo:V=>{g?K(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(K(lt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),K(lt,`RPC '${e}' stream ${s} sending:`,V),h.send(V))},Ho:()=>h.close()});return oi(h,ui.EventType.OPEN,()=>{g||(K(lt,`RPC '${e}' stream ${s} transport opened.`),b.i_())}),oi(h,ui.EventType.CLOSE,()=>{g||(g=!0,K(lt,`RPC '${e}' stream ${s} transport closed`),b.o_(),this.I_(h))}),oi(h,ui.EventType.ERROR,V=>{g||(g=!0,Wr(lt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.o_(new z(D.UNAVAILABLE,"The operation could not be completed")))}),oi(h,ui.EventType.MESSAGE,V=>{var L;if(!g){const B=V.data[0];Se(!!B,16349);const W=B,Q=(W==null?void 0:W.error)||((L=W[0])==null?void 0:L.error);if(Q){K(lt,`RPC '${e}' stream ${s} received error:`,Q);const J=Q.status;let G=function(A){const v=ze[A];if(v!==void 0)return lg(v)}(J),oe=Q.message;J==="NOT_FOUND"&&oe.includes("database")&&oe.includes("does not exist")&&oe.includes(this.databaseId.database)&&Wr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=D.INTERNAL,oe="Unknown error status: "+J+" with message "+Q.message),g=!0,b.o_(new z(G,oe)),h.close()}else K(lt,`RPC '${e}' stream ${s} received:`,B),b.__(B)}}),_s.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Pm()}}/**
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
 */function UA(t){return new _s(t)}function $c(){return typeof document<"u"?document:null}/**
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
 */function za(t){return new qw(t,!0)}/**
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
 */_s.c_=!1;class Ag{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const cd="PersistentStream";class bg{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ag(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(cd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(cd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $A extends bg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ww(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?rn(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=vl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=dl(l)?{documents:Qw(i,l)}:{query:Yw(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=fg(i,o.resumeToken);const f=gl(i,o.expectedCount);f!==null&&(c.expectedCount=f)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=ua(i,o.snapshotVersion.toTimestamp());const f=gl(i,o.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Xw(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=vl(this.serializer),n.removeTarget=e,this.q_(n)}}class BA extends bg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Gw(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=vl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Kw(this.serializer,r))};this.q_(n)}}/**
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
 */class jA{}class qA extends jA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,_l(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(D.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,_l(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function HA(t,e,n,r){return new qA(t,e,n,r)}class zA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Kr="RemoteStore";class WA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(K(Kr,"Restarting streams for network reachability change."),await async function(l){const f=he(l);f.Ia.add(4),await Zi(f),f.Va.set("Unknown"),f.Ia.delete(4),await Wa(f)}(this))})}),this.Va=new zA(r,s)}}async function Wa(t){if(Xr(t))for(const e of t.Ra)await e(!0)}async function Zi(t){for(const e of t.Ra)await e(!1)}function Sg(t,e){const n=he(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Tu(n)?Eu(n):Ls(n).O_()&&vu(n,e))}function yu(t,e){const n=he(t),r=Ls(n);n.Ea.delete(e),r.O_()&&Rg(n,e),n.Ea.size===0&&(r.O_()?r.L_():Xr(n)&&n.Va.set("Unknown"))}function vu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).Z_(e)}function Rg(t,e){t.da.$e(e),Ls(t).X_(e)}function Eu(t){t.da=new Uw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.Va.ua()}function Tu(t){return Xr(t)&&!Ls(t).x_()&&t.Ea.size>0}function Xr(t){return he(t).Ia.size===0}function Cg(t){t.da=void 0}async function KA(t){t.Va.set("Online")}async function GA(t){t.Ea.forEach((e,n)=>{vu(t,e)})}async function QA(t,e){Cg(t),Tu(t)?(t.Va.ha(e),Eu(t)):t.Va.set("Unknown")}async function YA(t,e,n){if(t.Va.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){K(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fa(t,r)}else if(e instanceof Fo?t.da.Xe(e):e instanceof ug?t.da.st(e):t.da.tt(e),!n.isEqual(ce.min()))try{const r=await wg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ea.get(f);h&&i.Ea.set(f,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,f)=>{const h=i.Ea.get(l);if(!h)return;i.Ea.set(l,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),Rg(i,l);const p=new er(h.target,l,f,h.sequenceNumber);vu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K(Kr,"Failed to raise snapshot:",r),await fa(t,r)}}async function fa(t,e,n){if(!Ms(e))throw e;t.Ia.add(1),await Zi(t),t.Va.set("Offline"),n||(n=()=>wg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(Kr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Wa(t)})}function Pg(t,e){return e().catch(n=>fa(t,n,e))}async function Ka(t){const e=he(t),n=mr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:su;for(;JA(e);)try{const s=await VA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,XA(e,s)}catch(s){await fa(e,s)}kg(e)&&Vg(e)}function JA(t){return Xr(t)&&t.Ta.length<10}function XA(t,e){t.Ta.push(e);const n=mr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function kg(t){return Xr(t)&&!mr(t).x_()&&t.Ta.length>0}function Vg(t){mr(t).start()}async function ZA(t){mr(t).ra()}async function e0(t){const e=mr(t);for(const n of t.Ta)e.ea(n.mutations)}async function t0(t,e,n){const r=t.Ta.shift(),s=hu.from(r,e,n);await Pg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ka(t)}async function n0(t,e){e&&mr(t).Y_&&await async function(r,s){if(function(o){return Mw(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();mr(r).B_(),await Pg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ka(r)}}(t,e),kg(t)&&Vg(t)}async function ld(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),K(Kr,"RemoteStore received new credentials");const r=Xr(n);n.Ia.add(3),await Zi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Wa(n)}async function r0(t,e){const n=he(t);e?(n.Ia.delete(2),await Wa(n)):e||(n.Ia.add(2),await Zi(n),n.Va.set("Unknown"))}function Ls(t){return t.ma||(t.ma=function(n,r,s){const i=he(n);return i.sa(),new $A(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:KA.bind(null,t),Yo:GA.bind(null,t),t_:QA.bind(null,t),H_:YA.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Tu(t)?Eu(t):t.Va.set("Unknown")):(await t.ma.stop(),Cg(t))})),t.ma}function mr(t){return t.fa||(t.fa=function(n,r,s){const i=he(n);return i.sa(),new BA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ZA.bind(null,t),t_:n0.bind(null,t),ta:e0.bind(null,t),na:t0.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ka(t)):(await t.fa.stop(),t.Ta.length>0&&(K(Kr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Iu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Iu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ms(t))return new z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{static emptySet(e){return new ys(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=hi(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ud{constructor(){this.ga=new Fe(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vs{constructor(e,n,r,s,i,o,c,l,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Vs(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class s0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class i0{constructor(){this.queries=hd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=hd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new z(D.ABORTED,"Firestore shutting down"))}}function hd(){return new Jr(t=>Jm(t),$a)}async function Dg(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new s0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=wu(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Au(n)}async function Ng(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function o0(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Au(n)}function a0(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Au(t){t.Ca.forEach(e=>{e.next()})}var Il,fd;(fd=Il||(Il={})).Ma="default",fd.Cache="cache";class Og{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Il.Cache}}/**
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
 */class xg{constructor(e){this.key=e}}class Mg{constructor(e){this.key=e}}class c0{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ee(),this.mutatedKeys=Ee(),this.eu=Xm(e),this.tu=new ys(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new ud,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),b=Ba(this.query,p)?p:null,V=!!g&&this.mutatedKeys.has(g.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;g&&b?g.data.isEqual(b.data)?V!==L&&(r.track({type:3,doc:b}),B=!0):this.su(g,b)||(r.track({type:2,doc:b}),B=!0,(l&&this.eu(b,l)>0||f&&this.eu(b,f)<0)&&(c=!0)):!g&&b?(r.track({type:0,doc:b}),B=!0):g&&!b&&(r.track({type:1,doc:g}),B=!0,(l||f)&&(c=!0)),B&&(b?(o=o.add(b),i=L?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(b,V){const L=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:B})}};return L(b)-L(V)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,f=l!==this.Xa;return this.Xa=l,o.length!==0||f?{snapshot:new Vs(this.query,e.tu,i,o,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ud,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Mg(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new xg(r))}),n}cu(e){this.Za=e.ks,this.Ya=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Vs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bu="SyncEngine";class l0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u0{constructor(e){this.key=e,this.hu=!1}}class h0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jr(c=>Jm(c),$a),this.Eu=new Map,this.Iu=new Set,this.Ru=new Fe(Z.comparator),this.Au=new Map,this.Vu=new pu,this.du={},this.mu=new Map,this.fu=ks.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function f0(t,e,n=!0){const r=jg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Lg(r,e,n,!0),s}async function d0(t,e){const n=jg(t);await Lg(n,e,!0,!1)}async function Lg(t,e,n,r){const s=await DA(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await p0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sg(t.remoteStore,s),c}async function p0(t,e,n,r,s){t.pu=(p,g,b)=>async function(L,B,W,Q){let J=B.view.ru(W);J.bs&&(J=await sd(L.localStore,B.query,!1).then(({documents:A})=>B.view.ru(A,J)));const G=Q&&Q.targetChanges.get(B.targetId),oe=Q&&Q.targetMismatches.get(B.targetId)!=null,me=B.view.applyChanges(J,L.isPrimaryClient,G,oe);return pd(L,B.targetId,me.au),me.snapshot}(t,p,g,b);const i=await sd(t.localStore,e,!0),o=new c0(e,i.ks),c=o.ru(i.documents),l=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),f=o.applyChanges(c,t.isPrimaryClient,l);pd(t,n,f.au);const h=new l0(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),f.snapshot}async function m0(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!$a(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await El(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yu(r.remoteStore,s.targetId),wl(r,s.targetId)}).catch(xs)):(wl(r,s.targetId),await El(r.localStore,s.targetId,!0))}async function g0(t,e){const n=he(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yu(n.remoteStore,r.targetId))}async function _0(t,e,n){const r=A0(t);try{const s=await function(o,c){const l=he(o),f=xe.now(),h=c.reduce((b,V)=>b.add(V.key),Ee());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=kn(),L=Ee();return l.xs.getEntries(b,h).next(B=>{V=B,V.forEach((W,Q)=>{Q.isValidDocument()||(L=L.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,V)).next(B=>{p=B;const W=[];for(const Q of c){const J=Vw(Q,p.get(Q.key).overlayedDocument);J!=null&&W.push(new Tr(Q.key,J,qm(J.value.mapValue),Lt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,f,W,c)}).next(B=>{g=B;const W=B.applyToLocalDocumentSet(p,L);return l.documentOverlayCache.saveOverlays(b,B.batchId,W)})}).then(()=>({batchId:g.batchId,changes:eg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let f=o.du[o.currentUser.toKey()];f||(f=new Fe(ve)),f=f.insert(c,l),o.du[o.currentUser.toKey()]=f}(r,s.batchId,n),await eo(r,s.changes),await Ka(r.remoteStore)}catch(s){const i=wu(s,"Failed to persist write");n.reject(i)}}async function Fg(t,e){const n=he(t);try{const r=await PA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Se(o.hu,14607):s.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await eo(n,r,e)}catch(r){await xs(r)}}function dd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let f=!1;l.queries.forEach((h,p)=>{for(const g of p.Sa)g.va(c)&&(f=!0)}),f&&Au(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y0(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Fe(Z.comparator);o=o.insert(i,ft.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new Ha(ce.min(),new Map,new Fe(ve),o,c);await Fg(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Su(r)}else await El(r.localStore,e,!1).then(()=>wl(r,e,n)).catch(xs)}async function v0(t,e){const n=he(t),r=e.batch.batchId;try{const s=await CA(n.localStore,e);$g(n,r,null),Ug(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await xs(s)}}async function E0(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let h;return l.mutationQueue.lookupMutationBatch(f,c).next(p=>(Se(p!==null,37113),h=p.keys(),l.mutationQueue.removeMutationBatch(f,p))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,h)).next(()=>l.localDocuments.getDocuments(f,h))})}(r.localStore,e);$g(r,e,n),Ug(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await xs(s)}}function Ug(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function $g(t,e,n){const r=he(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Bg(t,r)})}function Bg(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(yu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Su(t))}function pd(t,e,n){for(const r of n)r instanceof xg?(t.Vu.addReference(r.key,e),T0(t,r)):r instanceof Mg?(K(bu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Bg(t,r.key)):se(19791,{wu:r})}function T0(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(bu,"New document in limbo: "+n),t.Iu.add(r),Su(t))}function Su(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Z(De.fromString(e)),r=t.fu.next();t.Au.set(r,new u0(n)),t.Ru=t.Ru.insert(n,r),Sg(t.remoteStore,new er(nn(Ua(n.path)),r,"TargetPurposeLimboResolution",Ma.ce))}}async function eo(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(f=>{var h;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(f){s.push(f);const p=gu.Is(l.targetId,f);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,f){const h=he(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(f,g=>N.forEach(g.Ts,b=>h.persistence.referenceDelegate.addReference(p,g.targetId,b)).next(()=>N.forEach(g.Es,b=>h.persistence.referenceDelegate.removeReference(p,g.targetId,b)))))}catch(p){if(!Ms(p))throw p;K(_u,"Failed to update sequence numbers: "+p)}for(const p of f){const g=p.targetId;if(!p.fromCache){const b=h.vs.get(g),V=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(V);h.vs=h.vs.insert(g,L)}}}(r.localStore,i))}async function I0(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){K(bu,"User change. New user:",e.toKey());const r=await Ig(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new z(D.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.Ns)}}function w0(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function jg(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=w0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y0.bind(null,e),e.Pu.H_=o0.bind(null,e.eventManager),e.Pu.yu=a0.bind(null,e.eventManager),e}function A0(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E0.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=za(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return RA(this.persistence,new AA,e.initialUser,this.serializer)}Cu(e){return new Tg(mu.Vi,this.serializer)}Du(e){return new OA}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class b0 extends da{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Tg(r=>ha.Vi(r,n),this.serializer)}}class Al{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I0.bind(null,this.syncEngine),await r0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i0}()}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=UA(e.databaseInfo);return HA(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new WA(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>dd(this.syncEngine,n,0),function(){return ad.v()?new ad:new xA}())}createSyncEngine(e,n){return function(s,i,o,c,l,f,h){const p=new h0(s,i,o,c,l,f);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);K(Kr,"RemoteStore shutting down."),i.Ia.add(5),await Zi(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Al.provider={build:()=>new Al};/**
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
 */class qg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const gr="FirestoreClient";class S0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),K(gr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ig(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function md(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R0(t);K(gr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ld(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ld(e.remoteStore,s)),t._onlineComponents=e}async function R0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(gr,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new da)}}else K(gr,"Using default OfflineComponentProvider"),await Bc(t,new b0(void 0));return t._offlineComponents}async function Hg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(gr,"Using user provided OnlineComponentProvider"),await md(t,t._uninitializedComponentsProvider._online)):(K(gr,"Using default OnlineComponentProvider"),await md(t,new Al))),t._onlineComponents}function C0(t){return Hg(t).then(e=>e.syncEngine)}async function bl(t){const e=await Hg(t),n=e.eventManager;return n.onListen=f0.bind(null,e.syncEngine),n.onUnlisten=m0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=d0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=g0.bind(null,e.syncEngine),n}function P0(t,e,n,r){const s=new qg(r),i=new Og(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Dg(await bl(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Ng(await bl(t),i))}}function k0(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,f){const h=new qg({next:g=>{h.Nu(),o.enqueueAndForget(()=>Ng(i,p));const b=g.docs.has(c);!b&&g.fromCache?f.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&l&&l.source==="server"?f.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(g)},error:g=>f.reject(g)}),p=new Og(Ua(c.path),h,{includeMetadataChanges:!0,qa:!0});return Dg(i,p)}(await bl(t),t.asyncQueue,e,n,r)),r.promise}function V0(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget(async()=>_0(await C0(t),e,n)),n.promise}/**
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
 */function zg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const D0="ComponentProvider",gd=new Map;function N0(t,e,n,r,s){return new ZI(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,zg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Wg="firestore.googleapis.com",_d=!0;class yd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wg,this.ssl=_d}else this.host=e.host,this.ssl=e.ssl??_d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Eg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aA)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DI;switch(r.type){case"firstParty":return new MI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gd.get(n);r&&(K(D0,"Removing Datastore"),gd.delete(n),r.terminate())}(this),Promise.resolve()}}function O0(t,e,n,r={}){var f;t=Mt(t,Ga);const s=Gi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&_m(`https://${c}`),i.host!==Wg&&i.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!qr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=ut.MOCK_USER;else{h=oT(r.mockUserToken,(f=t._app)==null?void 0:f.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ut(g)}t._authCredentials=new NI(new Vm(h,p))}}/**
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
 */class Fs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Qi(n,Be._jsonSchema))return new Be(e,r||null,new Z(De.fromString(n.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Ke("string",Be._jsonSchemaVersion),referencePath:Ke("string")};class lr extends Fs{constructor(e,n,r){super(e,n,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new Z(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Kg(t,e,...n){if(t=Xe(t),Dm("collection","path",e),t instanceof Ga){const r=De.fromString(e,...n);return Vf(r),new lr(t,null,r)}{if(!(t instanceof Be||t instanceof lr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Vf(r),new lr(t.firestore,null,r)}}function tr(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=ru.newId()),Dm("doc","path",e),t instanceof Ga){const r=De.fromString(e,...n);return kf(r),new Be(t,null,new Z(r))}{if(!(t instanceof Be||t instanceof lr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return kf(r),new Be(t.firestore,t instanceof lr?t.converter:null,new Z(r))}}/**
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
 */const vd="AsyncQueue";class Ed{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ag(this,"async_queue_retry"),this._c=()=>{const r=$c();r&&K(vd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ms(e))throw e;K(vd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Pn("INTERNAL UNHANDLED ERROR: ",Td(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Iu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:Td(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Td(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _r extends Ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ed,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ed(e),this._firestoreClient=void 0,await e}}}function x0(t,e){const n=typeof t=="object"?t:Tm(),r=typeof t=="string"?t:ia,s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sT("firestore");i&&O0(s,...i)}return s}function Ru(t){if(t._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||M0(t),t._firestoreClient}function M0(t){var r,s,i,o;const e=t._freezeSettings(),n=N0(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new S0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const f=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(f),_online:f}}(t._componentsProvider))}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(ot.fromBase64String(e))}catch(n){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qi(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Ke("string",Nt._jsonSchemaVersion),bytes:Ke("string")};/**
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
 */class Cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qa{constructor(e){this._methodName=e}}/**
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
 */class sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Qi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ke("string",sn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
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
 */class jt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qi(e,jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new jt(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:Ke("string",jt._jsonSchemaVersion),vectorValues:Ke("object")};/**
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
 */const L0=/^__.*__$/;class F0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}class Gg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class Pu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Pu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return pa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Qg(this.dataSource)&&L0.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class U0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||za(e)}I(e,n,r,s=!1){return new Pu({dataSource:e,methodName:n,targetDoc:r,path:st.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(t){const e=t._freezeSettings(),n=za(t._databaseId);return new U0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yg(t,e,n,r,s,i={}){const o=t.I(i.merge||i.mergeFields?2:0,e,n,s);Vu("Data must be an object, but it was:",o,r);const c=Jg(r,o);let l,f;if(i.merge)l=new kt(o.fieldMask),f=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=Ds(e,p,n);if(!o.contains(g))throw new z(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);e_(h,g)||h.push(g)}l=new kt(h),f=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,f=o.fieldTransforms;return new F0(new It(c),l,f)}class Ja extends Qa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ja}}class ku extends Qa{_toFieldTransform(e){return new Rw(e.path,new Li)}isEqual(e){return e instanceof ku}}function $0(t,e,n,r){const s=t.I(1,e,n);Vu("Data must be an object, but it was:",s,r);const i=[],o=It.empty();Er(r,(l,f)=>{const h=Zg(e,l,n);f=Xe(f);const p=s.fc(h);if(f instanceof Ja)i.push(h);else{const g=to(f,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new kt(i);return new Gg(o,c,s.fieldTransforms)}function B0(t,e,n,r,s,i){const o=t.I(1,e,n),c=[Ds(e,r,n)],l=[s];if(i.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ds(e,i[g])),l.push(i[g+1]);const f=[],h=It.empty();for(let g=c.length-1;g>=0;--g)if(!e_(f,c[g])){const b=c[g];let V=l[g];V=Xe(V);const L=o.fc(b);if(V instanceof Ja)f.push(b);else{const B=to(V,L);B!=null&&(f.push(b),h.set(b,B))}}const p=new kt(f);return new Gg(h,p,o.fieldTransforms)}function j0(t,e,n,r=!1){return to(n,t.I(r?4:3,e))}function to(t,e){if(Xg(t=Xe(t)))return Vu("Unsupported field value:",e,t),Jg(t,e);if(t instanceof Qa)return function(r,s){if(!Qg(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=to(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Aw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:fg(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof jt)return function(o,c){const l=o instanceof jt?o.toArray():o;return{mapValue:{fields:{[Bm]:{stringValue:jm},[oa]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw c.yc("VectorValues must only contain numeric values.");return lu(c.serializer,h)})}}}}}}(r,s);if(vg(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${xa(r)}`)}(t,e)}function Jg(t,e){const n={};return xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,s)=>{const i=to(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof sn||t instanceof Nt||t instanceof Be||t instanceof Qa||t instanceof jt||vg(t))}function Vu(t,e,n){if(!Xg(n)||!Nm(n)){const r=xa(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Ds(t,e,n){if((e=Xe(e))instanceof Cu)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const q0=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(q0)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cu(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(D.INVALID_ARGUMENT,c+t+l)}function e_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class H0{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Er(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[oa].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new jt(n)}convertGeoPoint(e){return new sn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=fr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(yg(r),9688,{name:e});const s=new xi(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class t_ extends H0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function n_(){return new ku("serverTimestamp")}const Id="@firebase/firestore",wd="4.14.0";/**
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
 */function Ad(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class r_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ds("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class z0 extends r_{data(){return super.data()}}/**
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
 */function W0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Du{}class K0 extends Du{}function G0(t,e,...n){let r=[];e instanceof Du&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Nu).length,c=i.filter(l=>l instanceof Xa).length;if(o>1||o>0&&c>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xa extends K0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xa(e,n,r)}_apply(e){const n=this._parse(e);return s_(e._query,n),new Fs(e.firestore,e.converter,pl(e._query,n))}_parse(e){const n=Ya(e.firestore);return function(i,o,c,l,f,h,p){let g;if(f.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Sd(p,h);const V=[];for(const L of p)V.push(bd(l,i,L));g={arrayValue:{values:V}}}else g=bd(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Sd(p,h),g=j0(c,o,p,h==="in"||h==="not-in");return We.create(f,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Q0(t,e,n){const r=e,s=Ds("where",t);return Xa._create(s,r,n)}class Nu extends Du{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)s_(o,l),o=pl(o,l)}(e._query,n),new Fs(e.firestore,e.converter,pl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function bd(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ym(e)&&n.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!Z.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uf(t,new Z(r))}if(n instanceof Be)return Uf(t,n._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xa(n)}.`)}function Sd(t,e){if(!Array.isArray(t)||t.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function i_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends r_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ds("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:Ke("string",Br._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Uo extends Br{data(e={}){return super.data(e)}}class vs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new di(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new di(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new di(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,h=-1;return c.type!==0&&(f=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:Y0(c.type),doc:l,oldIndex:f,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
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
 */vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:Ke("string",vs._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};/**
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
 */function J0(t){t=Mt(t,Be);const e=Mt(t.firestore,_r),n=Ru(e);return k0(n,t._key).then(r=>c_(e,t,r))}function o_(t,e,n){t=Mt(t,Be);const r=Mt(t.firestore,_r),s=i_(t.converter,e,n),i=Ya(r);return Za(r,[Yg(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function jc(t,e,n,...r){t=Mt(t,Be);const s=Mt(t.firestore,_r),i=Ya(s);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Cu?B0(i,"updateDoc",t._key,e,n,r):$0(i,"updateDoc",t._key,e),Za(s,[o.toMutation(t._key,Lt.exists(!0))])}function X0(t){return Za(Mt(t.firestore,_r),[new uu(t._key,Lt.none())])}function Z0(t,e){const n=Mt(t.firestore,_r),r=tr(t),s=i_(t.converter,e),i=Ya(t.firestore);return Za(n,[Yg(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function a_(t,...e){var f,h,p;t=Xe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ad(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ad(e[r])){const g=e[r];e[r]=(f=g.next)==null?void 0:f.bind(g),e[r+1]=(h=g.error)==null?void 0:h.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(t instanceof Be)o=Mt(t.firestore,_r),c=Ua(t._key.path),i={next:g=>{e[r]&&e[r](c_(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Mt(t,Fs);o=Mt(g.firestore,_r),c=g._query;const b=new t_(o);i={next:V=>{e[r]&&e[r](new vs(o,b,g,V))},error:e[r+1],complete:e[r+2]},W0(t._query)}const l=Ru(o);return P0(l,c,s,i)}function Za(t,e){const n=Ru(t);return V0(n,e)}function c_(t,e,n){const r=n.docs.get(e._key),s=new t_(t);return new Br(t,s,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){VI(Ns),Ss(new Hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new _r(new OI(r.getProvider("auth-internal")),new LI(o,r.getProvider("app-check-internal")),ew(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),or(Id,wd,e),or(Id,wd,"esm2020")})();var eb="firebase",tb="12.12.1";/**
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
 */or(eb,tb,"app");function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nb=l_,u_=new Wi("auth","Firebase",l_());/**
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
 */const ma=new Zl("@firebase/auth");function rb(t,...e){ma.logLevel<=ye.WARN&&ma.warn(`Auth (${Ns}): ${t}`,...e)}function $o(t,...e){ma.logLevel<=ye.ERROR&&ma.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Ou(t,...e)}function on(t,...e){return Ou(t,...e)}function h_(t,e,n){const r={...nb(),[e]:n};return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return h_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u_.create(t,...e)}function re(t,e,...n){if(!t)throw Ou(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function Vn(t,e){t||yn(e)}/**
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
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function sb(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ib(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sb()||uT()||"connection"in navigator)?navigator.onLine:!0}function ob(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=aT()||hT()}get(){return ib()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xu(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class f_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ab={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lb=new no(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wr(t,e,n,r,s={}){return d_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ki({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:l,...i};return lT()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(f.credentials="include"),f_.fetch()(await p_(t,t.config.apiHost,n,c),f)})}async function d_(t,e,n){t._canInitEmulator=!1;const r={...ab,...e};try{const s=new hb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw h_(t,h,f);Wt(t,h)}}catch(s){if(s instanceof Nn)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function ro(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function p_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`;return cb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ub(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),lb.get())})}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function Cd(t){return t!==void 0&&t.enterprise!==void 0}class fb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ub(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function db(t,e){return wr(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function pb(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function ga(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mb(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Mu(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bi(qc(s.auth_time)),issuedAtTime:bi(qc(s.iat)),expirationTime:bi(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Mu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=dm(n);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pd(t){const e=Mu(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&gb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _a(t){var p;const e=t.auth,n=await t.getIdToken(),r=await $i(t,ga(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?m_(s.providerUserInfo):[],o=vb(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),f=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function yb(t){const e=Xe(t);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function m_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Eb(t,e){const n=await d_(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await p_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(l.credentials="include"),f_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tb(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
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
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Pd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Es;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function jn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mb(this,e)}reload(){return yb(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await $i(this,pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,f=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:b,providerData:V,stsTokenManager:L}=n;re(p&&L,e,"internal-error");const B=Es.fromJSON(this.name,L);re(typeof p=="string",e,"internal-error"),jn(r,e.name),jn(s,e.name),re(typeof g=="boolean",e,"internal-error"),re(typeof b=="boolean",e,"internal-error"),jn(i,e.name),jn(o,e.name),jn(c,e.name),jn(l,e.name),jn(f,e.name),jn(h,e.name);const W=new $t({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:f,lastLoginAt:h});return V&&Array.isArray(V)&&(W.providerData=V.map(Q=>({...Q}))),l&&(W._redirectEventId=l),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new Es;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _a(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?m_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Es;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,f),l}}/**
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
 */const kd=new Map;function vn(t){Vn(t instanceof Function,"Expected a class definition");let e=kd.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kd.set(t,e),e)}/**
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
 */class g_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g_.type="NONE";const Vd=g_;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ga(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(vn(Vd),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||vn(Vd);const o=Bo(r,e.config.apiKey,e.name);let c=null;for(const f of n)try{const h=await f._get(o);if(h){let p;if(typeof h=="string"){const g=await ga(e,{idToken:h}).catch(()=>{});if(!g)break;p=await $t._fromGetAccountInfoResponse(e,g,h)}else p=$t._fromJSON(e,h);f!==i&&(c=p),i=f;break}}catch{}const l=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new Ts(i,e,r))}}/**
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
 */function Dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(w_(e))return"Webos";if(y_(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(T_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=pt()){return/firefox\//i.test(t)}function y_(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(t=pt()){return/crios\//i.test(t)}function E_(t=pt()){return/iemobile/i.test(t)}function T_(t=pt()){return/android/i.test(t)}function I_(t=pt()){return/blackberry/i.test(t)}function w_(t=pt()){return/webos/i.test(t)}function Lu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ib(t=pt()){var e;return Lu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wb(){return fT()&&document.documentMode===10}function A_(t=pt()){return Lu(t)||T_(t)||w_(t)||I_(t)||/windows phone/i.test(t)||E_(t)}/**
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
 */function b_(t,e=[]){let n;switch(t){case"Browser":n=Dd(pt());break;case"Worker":n=`${Dd(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class Ab{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bb(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const Sb=6;class Rb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Sb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nd(this),this.idTokenSubscription=new Nd(this),this.beforeStateQueue=new Ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ga(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ob()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(An(this));const n=e?Xe(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bb(this),n=new Rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Zr(t){return Xe(t)}class Nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ET(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pb(t){ec=t}function S_(t){return ec.loadJS(t)}function kb(){return ec.recaptchaEnterpriseScript}function Vb(){return ec.gapiScript}function Db(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Nb{constructor(){this.enterprise=new Ob}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ob{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xb="recaptcha-enterprise",R_="NO_RECAPTCHA";class Mb{constructor(e){this.type=xb,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{db(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new fb(l);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,o(f.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Cd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(f=>{o(f)}).catch(()=>{o(R_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Nb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Cd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kb();l.length!==0&&(l+=c),S_(l).then(()=>{s(c,i,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function Od(t,e,n,r=!1,s=!1){const i=new Mb(t);let o;if(s)o=R_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Cl(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Od(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Od(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function Lb(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qr(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ub(t,e,n){const r=Zr(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=C_(e),{host:o,port:c}=$b(e),l=c===null?"":`:${c}`,f={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(qr(f,r.config.emulator)&&qr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Gi(o)?_m(`${i}//${o}${l}`):Bb()}function C_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $b(t){const e=C_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xd(o)}}}function xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function jb(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qb(t,e){return ro(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
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
 */async function Hb(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function zb(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Bi extends Fu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(e,n,"signInWithPassword",qb);case"emailLink":return Hb(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(e,r,"signUpPassword",jb);case"emailLink":return zb(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Is(t,e){return ro(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const Wb="http://localhost";class Gr extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:Wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */function Kb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gb(t){const e=ci(li(t)).link,n=e?ci(li(e)).deep_link_id:null,r=ci(li(t)).deep_link_id;return(r?ci(li(r)).link:null)||r||n||e||t}class Uu{constructor(e){const n=ci(li(e)),r=n.apiKey??null,s=n.oobCode??null,i=Kb(n.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Gb(e);try{return new Uu(n)}catch{return null}}}/**
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
 */class Us{constructor(){this.providerId=Us.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uu.parseLink(n);return re(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}Us.PROVIDER_ID="password";Us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class P_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends P_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends so{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Yn extends so{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Jn extends so{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function Qb(t,e){return ro(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=Md(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Md(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Md(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ya extends Nn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ya(e,n,r,s)}}function k_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(t,i,e,r):i})}async function Yb(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function Jb(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await $i(t,k_(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Mu(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
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
 */async function V_(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r="signIn",s=await k_(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xb(t,e){return V_(Zr(t),e)}/**
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
 */async function D_(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zb(t,e,n){if(Dt(t.app))return Promise.reject(An(t));const r=Zr(t),o=await Cl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&D_(t),l}),c=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function eS(t,e,n){return Dt(t.app)?Promise.reject(An(t)):Xb(Xe(t),Us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&D_(t),r})}function tS(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function nS(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function rS(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function sS(t){return Xe(t).signOut()}const va="__sak";/**
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
 */class N_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iS=1e3,oS=10;class O_ extends N_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O_.type="LOCAL";const aS=O_;/**
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
 */class x_ extends N_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x_.type="SESSION";const M_=x_;/**
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
 */function cS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async f=>f(n.origin,i)),l=await cS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function $u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const f=$u("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===f)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function uS(t){an().location.href=t}/**
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
 */function L_(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function hS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dS(){return L_()?self:null}/**
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
 */const F_="firebaseLocalStorageDb",pS=1,Ea="firebaseLocalStorage",U_="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function mS(){const t=indexedDB.deleteDatabase(F_);return new io(t).toPromise()}function Pl(){const t=indexedDB.open(F_,pS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:U_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await mS(),e(await Pl()))})})}async function Ld(t,e,n){const r=nc(t,!0).put({[U_]:e,value:n});return new io(r).toPromise()}async function gS(t,e){const n=nc(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=nc(t,!0).delete(e);return new io(n).toPromise()}const _S=800,yS=3;class $_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(dS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await hS(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pl();return await Ld(e,va,"1"),await Fd(e,va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ld(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nc(s,!1).getAll();return new io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$_.type="LOCAL";const vS=$_;new no(3e4,6e4);/**
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
 */function ES(t,e){return e?vn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bu extends Fu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TS(t){return V_(t.auth,new Bu(t),t.bypassAuthState)}function IS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Jb(n,new Bu(t),t.bypassAuthState)}async function wS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Yb(n,new Bu(t),t.bypassAuthState)}/**
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
 */class B_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TS;case"linkViaPopup":case"linkViaRedirect":return wS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:Wt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AS=new no(2e3,1e4);class fs extends B_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AS.get())};e()}}fs.currentPopupAction=null;/**
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
 */const bS="pendingRedirect",jo=new Map;class SS extends B_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await RS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RS(t,e){const n=kS(e),r=PS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function CS(t,e){jo.set(t._key(),e)}function PS(t){return vn(t._redirectPersistence)}function kS(t){return Bo(bS,t.config.apiKey,t.name)}async function VS(t,e,n=!1){if(Dt(t.app))return Promise.reject(An(t));const r=Zr(t),s=ES(r,e),o=await new SS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DS=10*60*1e3;class NS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j_(t);default:return!1}}/**
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
 */async function xS(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const MS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LS=/^https?/;async function FS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xS(t);for(const n of e)try{if(US(n))return}catch{}Wt(t,"unauthorized-domain")}function US(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LS.test(n))return!1;if(MS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $S=new no(3e4,6e4);function $d(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BS(t){return new Promise((e,n)=>{var s,i,o;function r(){$d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$d(),n(on(t,"network-request-failed"))},timeout:$S.get()})}if((i=(s=an().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const c=Db("iframefcb");return an()[c]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},S_(`${Vb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw qo=null,e})}let qo=null;function jS(t){return qo=qo||BS(t),qo}/**
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
 */const qS=new no(5e3,15e3),HS="__/auth/iframe",zS="emulator/auth/iframe",WS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GS(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,zS):`https://${t.config.authDomain}/${HS}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=KS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function QS(t){const e=await jS(t),n=an().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:GS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},qS.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const YS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JS=500,XS=600,ZS="_blank",eR="http://localhost";class Bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tR(t,e,n,r=JS,s=XS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...YS,width:r.toString(),height:s.toString(),top:i,left:o},f=pt().toLowerCase();n&&(c=v_(f)?ZS:n),__(f)&&(e=e||eR,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[b,V])=>`${g}${b}=${V},`,"");if(Ib(f)&&c!=="_self")return nR(e||"",c),new Bd(null);const p=window.open(e||"",c,h);re(p,t,"popup-blocked");try{p.focus()}catch{}return new Bd(p)}function nR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rR="__/auth/handler",sR="emulator/auth/handler",iR=encodeURIComponent("fac");async function jd(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof P_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof so){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),f=l?`#${iR}=${encodeURIComponent(l)}`:"";return`${oR(t)}?${Ki(c).slice(1)}${f}`}function oR({config:t}){return t.emulator?xu(t,sR):`https://${t.authDomain}/${rR}`}/**
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
 */const Hc="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=VS,this._overrideRedirectResult=CS}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jd(e,n,r,Sl(),s);return tR(e,i,$u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jd(e,n,r,Sl(),s);return uS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QS(e),r=new NS(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Hc];i!==void 0&&n(!!i),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A_()||y_()||Lu()}}const cR=aR;var qd="@firebase/auth",Hd="1.13.0";/**
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
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hR(t){Ss(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(t)},f=new Cb(r,s,i,l);return Fb(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new Hr("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new lR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(qd,Hd,uR(t)),or(qd,Hd,"esm2020")}/**
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
 */const fR=5*60,dR=gm("authIdTokenMaxAge")||fR;let zd=null;const pR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dR)return;const s=n==null?void 0:n.token;zd!==s&&(zd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mR(t=Tm()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lb(t,{popupRedirectResolver:cR,persistence:[vS,aS,M_]}),r=gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pR(i.toString());nS(n,o,()=>o(n.currentUser)),tS(n,c=>o(c))}}const s=pm("auth");return s&&Ub(n,`http://${s}`),n}function gR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Pb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hR("Browser");const _R={apiKey:"AIzaSyAdmh7rlKZbuiksbkPkpTA6LvMVdyEAwss",authDomain:"my-project-89f56.firebaseapp.com",projectId:"my-project-89f56",storageBucket:"my-project-89f56.firebasestorage.app",messagingSenderId:"727137485459",appId:"1:727137485459:web:57baa7b8b6666ee2fa0366",measurementId:"G-RZMYK4MGQB"},q_=Em(_R),Ho=mR(q_),En=x0(q_),H_=He(null),z_=He(!0),yR=(t,e)=>({name:e.split("@")[0],userId:t.slice(0,8),bio:"",avatarColor:"#1da1f2",createdAt:n_()});rS(Ho,async t=>{H_.value=t,z_.value=!1});function rc(){const t=He("");return{currentUser:H_,authLoading:z_,authError:t,register:async(s,i)=>{t.value="";try{const{user:o}=await Zb(Ho,s,i),c=tr(En,"users",o.uid);return(await J0(c)).exists()||await o_(c,yR(o.uid,s)),o}catch(o){throw t.value=Wd(o.code),o}},login:async(s,i)=>{t.value="";try{const{user:o}=await eS(Ho,s,i);return o}catch(o){throw t.value=Wd(o.code),o}},logout:async()=>{await sS(Ho)}}}function Wd(t){return{"auth/email-already-in-use":"このメールアドレスはすでに使われています","auth/invalid-email":"メールアドレスの形式が正しくありません","auth/weak-password":"パスワードは6文字以上にしてください","auth/user-not-found":"メールアドレスまたはパスワードが間違っています","auth/wrong-password":"メールアドレスまたはパスワードが間違っています","auth/invalid-credential":"メールアドレスまたはパスワードが間違っています","auth/too-many-requests":"しばらく時間をおいてから再試行してください"}[t]??`エラーが発生しました (${t})`}const{currentUser:kl}=rc(),nr=He([]),W_=He("");let zo=null;const vR=t=>{K_();const e=G0(Kg(En,"memos"),Q0("uid","==",t));zo=a_(e,n=>{nr.value=n.docs.map(r=>{var i,o,c;const s=r.data();return{id:r.id,uid:s.uid,content:s.content,createdAt:((c=(o=(i=s.createdAt)==null?void 0:i.toDate)==null?void 0:o.call(i))==null?void 0:c.toISOString())??s.createdAt??null,likes:s.likes,isLiked:s.isLiked,isPinned:s.isPinned,parentId:s.parentId??null}})},n=>{console.error("Firestore snapshot error:",n)})},K_=()=>{zo&&(zo(),zo=null),nr.value=[]};$r(kl,t=>{t?vR(t.uid):K_()},{immediate:!0});const ER=In(()=>nr.value.filter(t=>!t.parentId).sort((t,e)=>t.isPinned!==e.isPinned?t.isPinned?-1:1:new Date(e.createdAt??0).getTime()-new Date(t.createdAt??0).getTime())),TR=In(()=>{const t=W_.value.trim().toLowerCase();return t?nr.value.filter(e=>e.content.toLowerCase().includes(t)):[]}),IR=()=>Kg(En,"memos");function ju(){return{memos:TR,allMemos:ER,searchQuery:W_,addMemo:async(o,c=null)=>{!o.trim()||!kl.value||await Z0(IR(),{uid:kl.value.uid,content:o.trim(),createdAt:n_(),likes:0,isLiked:!1,isPinned:!1,parentId:c||null})},deleteMemo:async o=>{const c=f=>nr.value.filter(h=>h.parentId===f).flatMap(h=>[h.id,...c(h.id)]),l=[o,...c(o)];await Promise.all(l.map(f=>X0(tr(En,"memos",f))))},toggleLike:async o=>{const c=nr.value.find(f=>f.id===o);if(!c)return;const l=!c.isLiked;await jc(tr(En,"memos",o),{isLiked:l,likes:c.likes+(l?1:-1)})},togglePin:async o=>{const c=nr.value.find(l=>l.id===o);c&&await jc(tr(En,"memos",o),{isPinned:!c.isPinned})},getReplies:o=>nr.value.filter(c=>c.parentId===o).sort((c,l)=>{const f=c.createdAt?new Date(c.createdAt).getTime():0,h=l.createdAt?new Date(l.createdAt).getTime():0;return f-h}),updateMemo:async(o,c)=>{c.trim()&&await jc(tr(En,"memos",o),{content:c.trim()})}}}const Yr=He(!1),wR=()=>{const t=localStorage.getItem("theme");t?Yr.value=t==="dark":Yr.value=window.matchMedia("(prefers-color-scheme: dark)").matches,G_()},G_=()=>{Yr.value?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")},AR=()=>{Yr.value=!Yr.value};$r(Yr,t=>{localStorage.setItem("theme",t?"dark":"light"),G_()});const Q_=()=>({isDarkMode:Yr,toggleDarkMode:AR,loadTheme:wR}),bR={class:"nav-sidebar"},SR={class:"nav-list"},RR=["onClick"],CR={class:"nav-label"},PR=["title"],kR={class:"nav-label"},VR={class:"nav-bottom"},DR={class:"nav-bottom-list"},NR=["onClick"],OR={class:"nav-bottom-label"},xR=["title"],MR={class:"nav-bottom-label"},LR=ln({__name:"Navigation",props:{currentPage:{}},emits:["navigate"],setup(t,{emit:e}){const n=e,{isDarkMode:r,toggleDarkMode:s}=Q_(),i=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),$e("polyline",{points:"9 22 9 12 15 12 15 22"})]),o=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("circle",{cx:"11",cy:"11",r:"8"}),$e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]),c=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),$e("circle",{cx:"12",cy:"7",r:"4"})]),l=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})]),f=()=>$e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[$e("circle",{cx:"12",cy:"12",r:"5"}),$e("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),$e("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),$e("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),$e("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),$e("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),$e("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),$e("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),$e("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]),h=[{id:"home",label:"ホーム",icon:i},{id:"search",label:"検索",icon:o},{id:"profile",label:"プロフィール",icon:c}];return(p,g)=>(ne(),_e(Le,null,[C("nav",bR,[C("ul",SR,[(ne(),_e(Le,null,As(h,b=>C("li",{key:b.id,class:Qe(["nav-item",{active:t.currentPage===b.id}]),onClick:V=>n("navigate",b.id)},[(ne(),Ot(To(b.icon),{class:"nav-icon"})),C("span",CR,Ve(b.label),1)],10,RR)),64))]),C("button",{class:"theme-toggle-button",onClick:g[0]||(g[0]=(...b)=>fe(s)&&fe(s)(...b)),title:fe(r)?"ライトモードに切り替え":"ダークモードに切り替え"},[(ne(),Ot(To(fe(r)?l:f),{class:"nav-icon"})),C("span",kR,Ve(fe(r)?"ダーク":"ライト"),1)],8,PR)]),C("nav",VR,[C("ul",DR,[(ne(),_e(Le,null,As(h,b=>C("li",{key:b.id,class:Qe(["nav-bottom-item",{active:t.currentPage===b.id}]),onClick:V=>n("navigate",b.id)},[(ne(),Ot(To(b.icon),{class:"nav-icon"})),C("span",OR,Ve(b.label),1)],10,NR)),64)),C("li",{class:"nav-bottom-item",onClick:g[1]||(g[1]=(...b)=>fe(s)&&fe(s)(...b)),title:fe(r)?"ライトモードに切り替え":"ダークモードに切り替え"},[(ne(),Ot(To(fe(r)?l:f),{class:"nav-icon"})),C("span",MR,Ve(fe(r)?"ダーク":"ライト"),1)],8,xR)])])],64))}}),un=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FR=un(LR,[["__scopeId","data-v-ef8411cd"]]),{currentUser:Vl}=rc(),Dl=He({name:"",userId:"",bio:"",avatarColor:"#1da1f2"});let Co=null;$r(Vl,t=>{Co&&(Co(),Co=null),t&&(Co=a_(tr(En,"users",t.uid),e=>{e.exists()&&(Dl.value={...Dl.value,...e.data()})}))},{immediate:!0});function sc(){return{profile:Dl,updateProfile:async e=>{Vl.value&&await o_(tr(En,"users",Vl.value.uid),e,{merge:!0})}}}const UR=ln({__name:"UserAvatar",props:{name:{default:"あなた"},color:{default:"#1da1f2"},size:{default:40}},setup(t){const e=t,n=In(()=>e.name.trim().charAt(0)||"?");return(r,s)=>(ne(),_e("div",{class:"user-avatar",style:qi({backgroundColor:t.color,width:t.size+"px",height:t.size+"px",fontSize:Math.round(t.size*.42)+"px"})},Ve(n.value),5))}}),ji=un(UR,[["__scopeId","data-v-02e64bea"]]),$R={class:"memo-form"},BR={class:"form-header"},jR=["onKeydown"],qR={class:"form-footer"},HR=["disabled"],Po=280,zR=260,WR=ln({__name:"MemoForm",emits:["submit"],setup(t,{emit:e}){const n=e,{profile:r}=sc(),s=He(""),i=He(null),o=In(()=>{const f=s.value.length;return f>=Po?"over":f>=zR?"caution":""});$r(s,async()=>{await Go(),i.value&&(i.value.style.height="auto",i.value.style.height=i.value.scrollHeight+"px")});const l=()=>{s.value.trim()&&s.value.length<=Po&&(n("submit",s.value),s.value="",i.value&&(i.value.style.height="auto"))};return(f,h)=>(ne(),_e("div",$R,[C("div",BR,[Me(ji,{name:fe(r).name,color:fe(r).avatarColor,size:40},null,8,["name","color"]),Tn(C("textarea",{ref_key:"textareaRef",ref:i,"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p),placeholder:"今何してる？",class:"memo-input",onKeydown:[Kn(Zn(l,["ctrl"]),["enter"]),Kn(Zn(l,["meta"]),["enter"])]},null,40,jR),[[wn,s.value]])]),C("div",qR,[C("span",{class:Qe(["char-count",o.value])},Ve(s.value.length)+" / "+Ve(Po),3),C("button",{class:"submit-button",onClick:l,disabled:!s.value.trim()||s.value.length>Po}," 投稿 ",8,HR)])]))}}),KR=un(WR,[["__scopeId","data-v-8e86c027"]]),GR={key:0,class:"pin-indicator"},QR={class:"memo-item"},YR={class:"avatar-col"},JR={key:0,class:"thread-line"},XR={class:"memo-content"},ZR={class:"memo-info"},eC={class:"username"},tC={class:"user-id"},nC={class:"timestamp"},rC={key:0,class:"memo-text"},sC={key:1,class:"edit-form-container"},iC=["onKeydown"],oC={class:"edit-form-footer"},aC=["disabled"],cC={class:"memo-actions"},lC={class:"action-cell"},uC=["onClick"],hC={class:"action-count"},fC={class:"action-cell"},dC=["onClick"],pC={viewBox:"0 0 24 24",width:"18",height:"18"},mC=["fill"],gC={class:"action-count"},_C={class:"action-cell"},yC=["onClick","title"],vC={viewBox:"0 0 24 24",width:"18",height:"18"},EC=["fill"],TC={class:"action-cell"},IC=["onClick"],wC={class:"action-cell"},AC=["onClick"],bC={key:0,class:"reply-form-container"},SC={class:"reply-form"},RC=["onKeydown"],CC={class:"reply-form-footer"},PC=["disabled"],kC=ln({__name:"MemoCard",props:{memo:{}},setup(t){const e=t,{profile:n}=sc(),{addMemo:r,deleteMemo:s,toggleLike:i,togglePin:o,getReplies:c,updateMemo:l}=ju(),f=He(null),h=He(""),p=He(null),g=He(null),b=He(""),V=He(null),L=Y=>{Y instanceof HTMLTextAreaElement&&(p.value=Y)},B=Y=>{Y instanceof HTMLTextAreaElement&&(V.value=Y)},W=In(()=>{const Y=b.value.length;return Y>=280?"over":Y>=260?"caution":""}),Q=async Y=>{var de;if(g.value===Y.id){J();return}g.value=Y.id,b.value=Y.content,await Go(),(de=V.value)==null||de.focus()},J=()=>{g.value=null,b.value=""},G=async()=>{!b.value.trim()||b.value.length>280||!g.value||(await l(g.value,b.value),J())},oe=Y=>c(Y).flatMap(ae=>[ae,...oe(ae.id)]),me=In(()=>[e.memo,...oe(e.memo.id)]),A=Y=>c(Y).length,v=In(()=>{const Y=h.value.length;return Y>=280?"over":Y>=260?"caution":""}),_={MINUTES_PER_HOUR:60,HOURS_PER_DAY:24,DAYS_PER_WEEK:7},w=Y=>{if(!Y)return"";const de=new Date(Y),we=new Date().getTime()-de.getTime(),le=Math.floor(we/6e4),mt=Math.floor(we/36e5),hn=Math.floor(we/864e5);return le<1?"たった今":le<_.MINUTES_PER_HOUR?`${le}分前`:mt<_.HOURS_PER_DAY?`${mt}時間前`:hn<_.DAYS_PER_WEEK?`${hn}日前`:de.toLocaleDateString("ja-JP",{month:"short",day:"numeric"})},I=async Y=>{var de;if(f.value===Y){f.value=null,h.value="";return}f.value=Y,h.value="",await Go(),(de=p.value)==null||de.focus()},T=()=>{f.value=null,h.value=""},y=()=>{h.value.trim()&&h.value.length<=280&&f.value&&(r(h.value,f.value),h.value="",f.value=null)};return(Y,de)=>(ne(),_e("div",{class:Qe(["memo-card",{pinned:t.memo.isPinned}])},[t.memo.isPinned?(ne(),_e("div",GR,[...de[2]||(de[2]=[C("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},[C("path",{fill:"#1da1f2",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"})],-1),C("span",null,"ピン留め",-1)])])):Xn("",!0),(ne(!0),_e(Le,null,As(me.value,(ae,we)=>(ne(),_e(Le,{key:ae.id},[C("div",QR,[C("div",YR,[Me(ji,{name:fe(n).name,color:fe(n).avatarColor,size:48},null,8,["name","color"]),we<me.value.length-1||f.value===ae.id?(ne(),_e("div",JR)):Xn("",!0)]),C("div",XR,[C("div",ZR,[C("span",eC,Ve(fe(n).name),1),C("span",tC,"@"+Ve(fe(n).userId),1),C("span",nC,Ve(w(ae.createdAt)),1)]),g.value!==ae.id?(ne(),_e("p",rC,Ve(ae.content),1)):(ne(),_e("div",sC,[Tn(C("textarea",{ref_for:!0,ref:B,"onUpdate:modelValue":de[0]||(de[0]=le=>b.value=le),class:"edit-input",onKeydown:[Kn(Zn(G,["ctrl"]),["enter"]),Kn(Zn(G,["meta"]),["enter"]),Kn(J,["esc"])]},null,40,iC),[[wn,b.value]]),C("div",oC,[C("span",{class:Qe(["edit-char-count",W.value])},Ve(b.value.length)+"/280 ",3),C("button",{class:"cancel-button",onClick:J},"キャンセル"),C("button",{class:"submit-reply-button",onClick:G,disabled:!b.value.trim()||b.value.length>280}," 保存 ",8,aC)])])),C("div",cC,[C("div",lC,[C("button",{class:Qe(["action-button reply-button",{active:f.value===ae.id}]),onClick:le=>I(ae.id),title:"リプライ"},[de[3]||(de[3]=C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.515 5.176z"})],-1)),C("span",hC,Ve(A(ae.id)>0?A(ae.id):""),1)],10,uC)]),C("div",fC,[C("button",{class:Qe(["action-button like-button",{liked:ae.isLiked}]),onClick:le=>fe(i)(ae.id)},[(ne(),_e("svg",pC,[C("path",{fill:ae.isLiked?"#e0245e":"currentColor",d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"},null,8,mC)])),C("span",gC,Ve(ae.likes),1)],10,dC)]),C("div",_C,[we===0?(ne(),_e("button",{key:0,class:Qe(["action-button pin-button",{pinned:ae.isPinned}]),onClick:le=>fe(o)(ae.id),title:ae.isPinned?"ピン留めを解除":"ピン留め"},[(ne(),_e("svg",vC,[C("path",{fill:ae.isPinned?"#1da1f2":"currentColor",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"},null,8,EC)]))],10,yC)):Xn("",!0)]),C("div",TC,[C("button",{class:Qe(["action-button edit-button",{active:g.value===ae.id}]),onClick:le=>Q(ae),title:"編集"},[...de[4]||(de[4]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})],-1)])],10,IC)]),C("div",wC,[C("button",{class:"action-button delete-button",onClick:le=>fe(s)(ae.id)},[...de[5]||(de[5]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07z"})],-1)])],8,AC)])])])]),Me(gE,{name:"reply-form"},{default:Wl(()=>[f.value===ae.id?(ne(),_e("div",bC,[C("div",SC,[Me(ji,{name:fe(n).name,color:fe(n).avatarColor,size:32},null,8,["name","color"]),Tn(C("textarea",{ref_for:!0,ref:L,"onUpdate:modelValue":de[1]||(de[1]=le=>h.value=le),placeholder:"リプライを入力...",class:"reply-input",onKeydown:[Kn(Zn(y,["ctrl"]),["enter"]),Kn(Zn(y,["meta"]),["enter"])]},null,40,RC),[[wn,h.value]])]),C("div",CC,[C("span",{class:Qe(["reply-char-count",v.value])},Ve(h.value.length)+"/280 ",3),C("button",{class:"cancel-button",onClick:T},"キャンセル"),C("button",{class:"submit-reply-button",onClick:y,disabled:!h.value.trim()||h.value.length>280}," リプライ ",8,PC)])])):Xn("",!0)]),_:2},1024)],64))),128))],2))}}),Y_=un(kC,[["__scopeId","data-v-dd34c6f9"]]),VC={class:"memo-list"},DC={key:0,class:"empty-state"},NC={key:1,class:"empty-state"},OC={class:"empty-hint"},xC=ln({__name:"MemoList",props:{memos:{},searchQuery:{default:""}},setup(t){return(e,n)=>(ne(),_e("div",VC,[t.memos.length===0&&!t.searchQuery?(ne(),_e("div",DC,[...n[0]||(n[0]=[C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"})],-1),C("p",{class:"empty-message"},"まだメモがありません",-1),C("p",{class:"empty-hint"},"上のフォームから最初のメモを投稿してみましょう！",-1)])])):t.memos.length===0&&t.searchQuery?(ne(),_e("div",NC,[n[1]||(n[1]=C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1)),n[2]||(n[2]=C("p",{class:"empty-message"},"検索結果がありません",-1)),C("p",OC,"「"+Ve(t.searchQuery)+"」に一致するメモは見つかりませんでした",1)])):(ne(),Ot(ME,{key:2,name:"memo",tag:"div"},{default:Wl(()=>[(ne(!0),_e(Le,null,As(t.memos,r=>(ne(),Ot(Y_,{key:r.id,memo:r},null,8,["memo"]))),128))]),_:1}))]))}}),Kd=un(xC,[["__scopeId","data-v-0683805f"]]),MC={class:"search-bar"},LC={class:"search-input-wrapper"},FC=ln({__name:"SearchBar",props:{modelValue:{}},emits:["update:modelValue","focus","blur"],setup(t,{emit:e}){const n=t,r=e,s=In({get:()=>n.modelValue,set:o=>r("update:modelValue",o)}),i=()=>{r("update:modelValue","")};return(o,c)=>(ne(),_e("div",MC,[C("div",LC,[c[4]||(c[4]=C("svg",{class:"search-icon",viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1)),Tn(C("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>s.value=l),class:"search-input",type:"text",placeholder:"検索...",onKeydown:Kn(i,["esc"]),onFocus:c[1]||(c[1]=l=>r("focus")),onBlur:c[2]||(c[2]=l=>r("blur"))},null,544),[[wn,s.value]]),s.value?(ne(),_e("button",{key:0,class:"clear-button",onClick:i,title:"クリア"},[...c[3]||(c[3]=[C("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},[C("path",{fill:"currentColor",d:"M13.414 12l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 7.707 6.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-4.293 4.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"})],-1)])])):Xn("",!0)])]))}}),UC=un(FC,[["__scopeId","data-v-74c0f260"]]),$C={class:"modal"},BC={class:"modal-header"},jC=["disabled"],qC={class:"modal-body"},HC={class:"avatar-section"},zC={class:"color-picker"},WC={class:"color-swatches"},KC=["title","onClick"],GC={class:"form-group"},QC={class:"form-group"},YC={class:"id-input-wrap"},JC={class:"form-group"},XC=ln({__name:"ProfileEditModal",emits:["close","saved"],setup(t,{emit:e}){const n=e,{profile:r,updateProfile:s}=sc(),i=["#1da1f2","#e0245e","#17bf63","#f4900c","#794bc4","#ff7043","#00b8d4","#546e7a"],o=Ra({name:r.value.name,userId:r.value.userId,bio:r.value.bio,avatarColor:r.value.avatarColor}),c=()=>{o.userId=o.userId.replace(/[^a-zA-Z0-9_]/g,"")},l=()=>{o.name.trim()&&(s({name:o.name.trim(),userId:o.userId.trim()||"user",bio:o.bio.trim(),avatarColor:o.avatarColor}),n("saved"),n("close"))};return(f,h)=>(ne(),_e("div",{class:"modal-overlay",onClick:h[4]||(h[4]=Zn(p=>f.$emit("close"),["self"]))},[C("div",$C,[C("div",BC,[C("button",{class:"close-button",onClick:h[0]||(h[0]=p=>f.$emit("close"))},[...h[5]||(h[5]=[C("svg",{viewBox:"0 0 24 24",width:"20",height:"20"},[C("path",{fill:"currentColor",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1)])]),h[6]||(h[6]=C("h2",{class:"modal-title"},"プロフィール編集",-1)),C("button",{class:"save-button",disabled:!o.name.trim(),onClick:l}," 保存 ",8,jC)]),C("div",qC,[C("div",HC,[Me(ji,{name:o.name||"?",color:o.avatarColor,size:72},null,8,["name","color"]),C("div",zC,[h[7]||(h[7]=C("p",{class:"color-label"},"アイコンカラー",-1)),C("div",WC,[(ne(),_e(Le,null,As(i,p=>C("button",{key:p,class:Qe(["color-swatch",{selected:o.avatarColor===p}]),style:qi({backgroundColor:p}),title:p,onClick:g=>o.avatarColor=p},null,14,KC)),64))])])]),C("div",GC,[h[8]||(h[8]=C("label",{class:"field-label"},[Yl("名前 "),C("span",{class:"required"},"*")],-1)),Tn(C("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>o.name=p),type:"text",maxlength:"50",placeholder:"あなたの名前",class:"field-input"},null,512),[[wn,o.name]]),C("span",{class:Qe(["field-count",{warn:o.name.length>=45}])},Ve(o.name.length)+" / 50 ",3)]),C("div",QC,[h[10]||(h[10]=C("label",{class:"field-label"},"ユーザーID",-1)),C("div",YC,[h[9]||(h[9]=C("span",{class:"at-sign"},"@",-1)),Tn(C("input",{"onUpdate:modelValue":h[2]||(h[2]=p=>o.userId=p),type:"text",maxlength:"20",placeholder:"user_id",class:"field-input id-input",onInput:c},null,544),[[wn,o.userId]])]),C("span",{class:Qe(["field-count",{warn:o.userId.length>=18}])},Ve(o.userId.length)+" / 20 ",3)]),C("div",JC,[h[11]||(h[11]=C("label",{class:"field-label"},"自己紹介",-1)),Tn(C("textarea",{"onUpdate:modelValue":h[3]||(h[3]=p=>o.bio=p),maxlength:"160",placeholder:"自己紹介を書いてください",class:"field-input bio-input",rows:"4"},null,512),[[wn,o.bio]]),C("span",{class:Qe(["field-count",{warn:o.bio.length>=140}])},Ve(o.bio.length)+" / 160 ",3)])])])]))}}),ZC=un(XC,[["__scopeId","data-v-505a2b88"]]),e1={class:"profile-page"},t1={class:"profile-header"},n1={class:"profile-top"},r1={class:"profile-info"},s1={class:"profile-name"},i1={class:"profile-id"},o1={key:0,class:"profile-bio"},a1={class:"profile-stats"},c1={class:"stat"},l1={key:0,class:"empty-state"},u1=ln({__name:"ProfilePage",setup(t){const{profile:e}=sc(),{allMemos:n}=ju(),r=He(!1);return(s,i)=>(ne(),_e("div",e1,[C("div",t1,[C("div",n1,[Me(ji,{name:fe(e).name,color:fe(e).avatarColor,size:72},null,8,["name","color"]),C("button",{class:"edit-button",onClick:i[0]||(i[0]=o=>r.value=!0)},"編集")]),C("div",r1,[C("span",s1,Ve(fe(e).name),1),C("span",i1,"@"+Ve(fe(e).userId),1),fe(e).bio?(ne(),_e("p",o1,Ve(fe(e).bio),1)):Xn("",!0)]),C("div",a1,[C("span",c1,[C("strong",null,Ve(fe(n).length),1),i[2]||(i[2]=Yl(" 投稿",-1))])])]),i[4]||(i[4]=C("div",{class:"posts-header"},"投稿",-1)),fe(n).length===0?(ne(),_e("div",l1,[...i[3]||(i[3]=[C("p",{class:"empty-message"},"まだ投稿がありません",-1),C("p",{class:"empty-hint"},"ホーム画面から最初のメモを投稿してみましょう！",-1)])])):(ne(!0),_e(Le,{key:1},As(fe(n),o=>(ne(),Ot(Y_,{key:o.id,memo:o},null,8,["memo"]))),128)),r.value?(ne(),Ot(ZC,{key:2,onClose:i[1]||(i[1]=o=>r.value=!1)})):Xn("",!0)]))}}),h1=un(u1,[["__scopeId","data-v-514d5417"]]),f1={class:"auth-wrapper"},d1={class:"auth-card"},p1={class:"auth-tabs"},m1={class:"form-group"},g1={class:"form-group"},_1={key:0,class:"auth-error"},y1=["disabled"],v1={key:0},E1={key:1},T1=ln({__name:"AuthForm",setup(t){const{authError:e,login:n,register:r}=rc(),s=He("login"),i=He(""),o=He(""),c=He(!1),l=async()=>{c.value=!0;try{s.value==="login"?await n(i.value,o.value):await r(i.value,o.value)}catch{}finally{c.value=!1}};return(f,h)=>(ne(),_e("div",f1,[C("div",d1,[h[6]||(h[6]=C("div",{class:"auth-logo"},[C("svg",{viewBox:"0 0 24 24",width:"40",height:"40"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})])],-1)),h[7]||(h[7]=C("h1",{class:"auth-title"},"SNS Memo",-1)),C("div",p1,[C("button",{class:Qe(["auth-tab",{active:s.value==="login"}]),onClick:h[0]||(h[0]=p=>s.value="login")},"ログイン",2),C("button",{class:Qe(["auth-tab",{active:s.value==="register"}]),onClick:h[1]||(h[1]=p=>s.value="register")},"新規登録",2)]),C("form",{class:"auth-form",onSubmit:Zn(l,["prevent"])},[C("div",m1,[h[4]||(h[4]=C("label",{class:"form-label"},"メールアドレス",-1)),Tn(C("input",{"onUpdate:modelValue":h[2]||(h[2]=p=>i.value=p),type:"email",class:"form-input",placeholder:"example@email.com",autocomplete:"email",required:""},null,512),[[wn,i.value]])]),C("div",g1,[h[5]||(h[5]=C("label",{class:"form-label"},"パスワード",-1)),Tn(C("input",{"onUpdate:modelValue":h[3]||(h[3]=p=>o.value=p),type:"password",class:"form-input",placeholder:"6文字以上",autocomplete:"current-password",required:"",minlength:"6"},null,512),[[wn,o.value]])]),fe(e)?(ne(),_e("p",_1,Ve(fe(e)),1)):Xn("",!0),C("button",{type:"submit",class:"auth-submit",disabled:c.value},[c.value?(ne(),_e("span",v1,"処理中...")):(ne(),_e("span",E1,Ve(s.value==="login"?"ログイン":"登録する"),1))],8,y1)],32)])]))}}),I1=un(T1,[["__scopeId","data-v-dbf7d1b3"]]),w1={key:0,class:"loading-screen"},A1={class:"app-header"},b1={class:"app-wrapper"},S1={class:"app-container"},R1={class:"app-main"},C1={key:0,class:"search-prompt"},P1=ln({__name:"App",setup(t){const{memos:e,allMemos:n,searchQuery:r,addMemo:s}=ju(),{currentUser:i,authLoading:o,logout:c}=rc(),l=He("home");return(f,h)=>fe(o)?(ne(),_e("div",w1,[...h[3]||(h[3]=[C("svg",{viewBox:"0 0 24 24",width:"40",height:"40"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})],-1)])])):fe(i)?(ne(),_e(Le,{key:2},[C("header",A1,[h[5]||(h[5]=C("svg",{viewBox:"0 0 24 24",width:"26",height:"26","aria-hidden":"true"},[C("path",{fill:"#1da1f2",d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})],-1)),h[6]||(h[6]=C("span",{class:"app-title"},"SNS Memo",-1)),C("button",{class:"logout-button",onClick:h[0]||(h[0]=(...p)=>fe(c)&&fe(c)(...p)),title:"ログアウト"},[...h[4]||(h[4]=[C("svg",{viewBox:"0 0 24 24",width:"18",height:"18"},[C("path",{fill:"currentColor",d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1)])])]),C("div",b1,[Me(FR,{"current-page":l.value,onNavigate:h[1]||(h[1]=p=>l.value=p)},null,8,["current-page"]),C("div",S1,[C("main",R1,[l.value==="profile"?(ne(),Ot(h1,{key:0})):l.value==="search"?(ne(),_e(Le,{key:1},[Me(UC,{modelValue:fe(r),"onUpdate:modelValue":h[2]||(h[2]=p=>it(r)?r.value=p:null),autofocus:""},null,8,["modelValue"]),fe(r)?(ne(),Ot(Kd,{key:1,memos:fe(e),"search-query":fe(r)},null,8,["memos","search-query"])):(ne(),_e("div",C1,[...h[7]||(h[7]=[C("svg",{viewBox:"0 0 24 24",width:"64",height:"64"},[C("path",{fill:"#657786",d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})],-1),C("p",{class:"search-prompt-message"},"キーワードを入力して検索",-1),C("p",{class:"search-prompt-hint"},"メモの内容で検索できます",-1)])]))],64)):(ne(),_e(Le,{key:2},[Me(KR,{onSubmit:fe(s)},null,8,["onSubmit"]),Me(Kd,{memos:fe(n),"search-query":""},null,8,["memos"])],64))])])])],64)):(ne(),Ot(I1,{key:1}))}}),k1=un(P1,[["__scopeId","data-v-81443d55"]]),{loadTheme:V1}=Q_();V1();KE(k1).mount("#app");
