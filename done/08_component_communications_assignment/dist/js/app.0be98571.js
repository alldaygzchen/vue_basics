(function(){"use strict";var e={7771:function(e,n,t){var r=t(9242),u=t(3396),a=t(7139);function o(e,n,t,r,o,i){return(0,u.wg)(),(0,u.iD)("section",null,[(0,u._)("h2",null,(0,a.zw)(t.username),1),(0,u._)("h3",null,(0,a.zw)(t.userage)+" Years",1)])}var i={props:{username:{type:String,required:!0},userage:{type:Number,required:!0}}},s=t(89);const c=(0,s.Z)(i,[["render",o]]);var l=c;const f=(0,u._)("button",null,"Set User Data",-1);function d(e,n,t,a,o,i){return(0,u.wg)(),(0,u.iD)("section",null,[(0,u._)("form",{onSubmit:n[2]||(n[2]=(0,r.iM)(((...e)=>i.submitData&&i.submitData(...e)),["prevent"]))},[(0,u.wy)((0,u._)("input",{type:"text",placeholder:"Your name","onUpdate:modelValue":n[0]||(n[0]=e=>o.enteredName=e)},null,512),[[r.nr,o.enteredName]]),(0,u.wy)((0,u._)("input",{type:"text",placeholder:"Your age","onUpdate:modelValue":n[1]||(n[1]=e=>o.enteredAge=e)},null,512),[[r.nr,o.enteredAge]]),f],32)])}var p={emits:["set-data"],data(){return{enteredName:"",enteredAge:""}},methods:{submitData(){this.$emit("set-data",this.enteredName,this.enteredAge)}}};const m=(0,s.Z)(p,[["render",d]]);var v=m;function h(e,n,t,r,a,o){const i=(0,u.up)("active-user"),s=(0,u.up)("user-data");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(i,{username:a.user.name,userage:a.user.age},null,8,["username","userage"]),(0,u.Wm)(s,{onSetData:o.setUserData},null,8,["onSetData"])])}var g={data(){return{user:{name:"Max Schwarzmüller",age:31}}},methods:{setUserData(e,n){this.user={name:e,age:+n}}}};const b=(0,s.Z)(g,[["render",h]]);var w=b;const y=(0,r.ri)(w);y.component("active-user",l),y.component("user-data",v),y.mount("#app")}},n={};function t(r){var u=n[r];if(void 0!==u)return u.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,u,a){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],u=e[l][1],a=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<o&&(o=a));if(i){e.splice(l--,1);var c=u();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,u,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var u,a,o=r[0],i=r[1],s=r[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(s)var l=s(t)}for(n&&n(r);c<o.length;c++)a=o[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunk_07_cli_setup"]=self["webpackChunk_07_cli_setup"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7771)}));r=t.O(r)})();
//# sourceMappingURL=app.0be98571.js.map