"use strict";(self.webpackChunkangular_ngrx=self.webpackChunkangular_ngrx||[]).push([[197],{7197:(Pe,j,O)=>{O.r(j),O.d(j,{CoffeeModule:()=>Ee});var g=O(2323);const w=(0,g.PH)("[coffee page] load coffee"),z=(0,g.PH)("[coffee page] load coffee success",(0,g.Ky)()),X=(0,g.PH)("[dummy action]"),D=(0,g.PH)("updateCurrPage",(0,g.Ky)());var e=O(5e3),c=(()=>{return(t=c||(c={}))[t.EntitiesOnly=0]="EntitiesOnly",t[t.Both=1]="Both",t[t.None=2]="None",c;var t})();function p(t){return function(i,l){const h={ids:[...l.ids],entities:Object.assign({},l.entities)},C=t(i,h);return C===c.Both?Object.assign({},l,h):C===c.EntitiesOnly?Object.assign(Object.assign({},l),{entities:h.entities}):l}}function Z(t,a){const i=a(t);return(0,e.X6Q)()&&void 0===i&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",a.toString()),i}function Y(t){function a(f,s){const o=Z(f,t);return o in s.entities?c.None:(s.ids.push(o),s.entities[o]=f,c.Both)}function i(f,s){let o=!1;for(const n of f)o=a(n,s)!==c.None||o;return o?c.Both:c.None}function h(f,s){const o=Z(f,t);return o in s.entities?(s.entities[o]=f,c.EntitiesOnly):(s.ids.push(o),s.entities[o]=f,c.Both)}function v(f,s){const n=(f instanceof Array?f:s.ids.filter(r=>f(s.entities[r]))).filter(r=>r in s.entities).map(r=>delete s.entities[r]).length>0;return n&&(s.ids=s.ids.filter(r=>r in s.entities)),n?c.Both:c.None}function E(f,s){return T([f],s)}function T(f,s){const o={};return(f=f.filter(r=>r.id in s.entities)).length>0?f.filter(u=>function _(f,s,o){const r=Object.assign({},o.entities[s.id],s.changes),u=Z(r,t),d=u!==s.id;return d&&(f[s.id]=u,delete o.entities[s.id]),o.entities[u]=r,d}(o,u,s)).length>0?(s.ids=s.ids.map(u=>o[u]||u),c.Both):c.EntitiesOnly:c.None}function P(f,s){const o=[],n=[];for(const d of f){const y=Z(d,t);y in s.entities?n.push({id:y,changes:d}):o.push(d)}const r=T(n,s),u=i(o,s);switch(!0){case u===c.None&&r===c.None:return c.None;case u===c.Both||r===c.Both:return c.Both;default:return c.EntitiesOnly}}return{removeAll:function M(f){return Object.assign({},f,{ids:[],entities:{}})},addOne:p(a),addMany:p(i),setAll:p(function l(f,s){return s.ids=[],s.entities={},i(f,s),c.Both}),setOne:p(h),setMany:p(function C(f,s){const o=f.map(n=>h(n,s));switch(!0){case o.some(n=>n===c.Both):return c.Both;case o.some(n=>n===c.EntitiesOnly):return c.EntitiesOnly;default:return c.None}}),updateOne:p(E),updateMany:p(T),upsertOne:p(function L(f,s){return P([f],s)}),upsertMany:p(P),removeOne:p(function m(f,s){return v([f],s)}),removeMany:p(v),map:p(function x(f,s){return T(s.ids.reduce((r,u)=>{const d=f(s.entities[u]);return d!==s.entities[u]&&r.push({id:u,changes:d}),r},[]).filter(({id:r})=>r in s.entities),s)}),mapOne:p(function q({map:f,id:s},o){const n=o.entities[s];return n?E({id:s,changes:f(n)},o):c.None})}}const U=function te(t={}){var a,i;const{selectId:l,sortComparer:h}={selectId:null!==(a=t.selectId)&&void 0!==a?a:M=>M.id,sortComparer:null!==(i=t.sortComparer)&&void 0!==i&&i},C=function V(){return{getInitialState:function t(a={}){return Object.assign({ids:[],entities:{}},a)}}}(),m=function W(){return{getSelectors:function t(a){const i=m=>m.ids,l=m=>m.entities,h=(0,g.P1)(i,l,(m,v)=>m.map(M=>v[M])),C=(0,g.P1)(i,m=>m.length);return a?{selectIds:(0,g.P1)(a,i),selectEntities:(0,g.P1)(a,l),selectAll:(0,g.P1)(a,h),selectTotal:(0,g.P1)(a,C)}:{selectIds:i,selectEntities:l,selectAll:h,selectTotal:C}}}}(),v=h?function ee(t,a){const{removeOne:i,removeMany:l,removeAll:h}=Y(t);function C(o,n){return m([o],n)}function m(o,n){const r=o.filter(u=>!(Z(u,t)in n.entities));return 0===r.length?c.None:(s(r,n),c.Both)}function M(o,n){const r=Z(o,t);return r in n.entities?(n.ids=n.ids.filter(u=>u!==r),s([o],n),c.Both):C(o,n)}function E(o,n){return x([o],n)}function x(o,n){const r=[],u=o.filter(d=>function T(o,n,r){if(!(n.id in r.entities))return!1;const d=Object.assign({},r.entities[n.id],n.changes),y=Z(d,t);return delete r.entities[n.id],o.push(d),y!==n.id}(r,d,n)).length>0;if(0===r.length)return c.None;{const d=n.ids,y=[];return n.ids=n.ids.filter((b,F)=>b in n.entities||(y.push(F),!1)),s(r,n),!u&&y.every(b=>n.ids[b]===d[b])?c.EntitiesOnly:c.Both}}function f(o,n){const r=[],u=[];for(const b of o){const F=Z(b,t);F in n.entities?u.push({id:F,changes:b}):r.push(b)}const d=x(u,n),y=m(r,n);switch(!0){case y===c.None&&d===c.None:return c.None;case y===c.Both||d===c.Both:return c.Both;default:return c.EntitiesOnly}}function s(o,n){o.sort(a);const r=[];let u=0,d=0;for(;u<o.length&&d<n.ids.length;){const y=o[u],b=Z(y,t),F=n.ids[d];a(y,n.entities[F])<=0?(r.push(b),u++):(r.push(F),d++)}n.ids=r.concat(u<o.length?o.slice(u).map(t):n.ids.slice(d)),o.forEach((y,b)=>{n.entities[t(y)]=y})}return{removeOne:i,removeMany:l,removeAll:h,addOne:p(C),updateOne:p(E),upsertOne:p(function P(o,n){return f([o],n)}),setAll:p(function v(o,n){return n.entities={},n.ids=[],m(o,n),c.Both}),setOne:p(M),setMany:p(function _(o,n){const r=o.map(u=>M(u,n));switch(!0){case r.some(u=>u===c.Both):return c.Both;case r.some(u=>u===c.EntitiesOnly):return c.EntitiesOnly;default:return c.None}}),addMany:p(m),updateMany:p(x),upsertMany:p(f),map:p(function q(o,n){return x(n.ids.reduce((u,d)=>{const y=o(n.entities[d]);return y!==n.entities[d]&&u.push({id:d,changes:y}),u},[]),n)}),mapOne:p(function L({map:o,id:n},r){const u=r.entities[n];return u?E({id:n,changes:o(u)},r):c.None})}}(l,h):Y(l);return Object.assign(Object.assign(Object.assign({selectId:l,sortComparer:h},C),m),v)}(),ne=U.getInitialState({currPage:1}),ie=(0,g.Lq)(ne,(0,g.on)(z,(t,a)=>U.setAll(a.coffee,Object.assign({},t))),(0,g.on)(D,(t,a)=>(console.log(a),Object.assign(Object.assign({},t),{currPage:a.currPage}))));function oe(t,a){return ie(t,a)}const se=(0,g.ZF)("router"),re=(0,g.P1)(se,t=>t.state),K="coffee",B=(0,g.ZF)(K),J=U.getSelectors(),Q=(0,g.P1)(B,J.selectAll),ce=(0,g.P1)(B,J.selectEntities),ae=(0,g.P1)(ce,re,(t,a)=>t?t[a.params.id]:null),ue=(0,g.P1)(B,t=>t.currPage);var fe=O(9069),le=O(1365),de=O(5577),$=O(4004),ge=O(262),N=O(4394),H=O(9646),S=O(9638),pe=O(520);let he=(()=>{class t{constructor(i){this.http=i}getCoffeeList(){return this.http.get("https://random-data-api.com/api/coffee/random_coffee?size=50").pipe((0,$.U)(i=>i))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(pe.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),me=(()=>{class t{constructor(i,l,h){this.actions$=i,this.coffeeService=l,this.store=h,this.loadCoffee$=(0,N.GW)(()=>this.actions$.pipe((0,N.l4)(w),(0,le.M)(this.store.select(Q)),(0,de.z)(([C,m])=>m.length&&1!==m.length?(0,H.of)(X()):this.coffeeService.getCoffeeList().pipe((0,$.U)(v=>(this.store.dispatch((0,S.Tc)({status:!1})),z({coffee:v}))),(0,ge.K)(v=>{this.store.dispatch((0,S.Tc)({status:!1}));const M=(0,fe.e$)(v.error.error.message);return(0,H.of)((0,S.uH)({message:M}))})))))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(N.eX),e.LFG(he),e.LFG(g.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var A=O(9808),I=O(1366);const ye=function(t){return["details",t]};function Oe(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",9),e._uU(4),e.qZA(),e.TgZ(5,"td",9),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"a",10),e._uU(9,"Details "),e.qZA()()()),2&t){const i=a.$implicit;e.xp6(2),e.Oqu(i.id),e.xp6(2),e.Oqu(i.blend_name),e.xp6(2),e.Oqu(i.origin),e.xp6(2),e.Q6J("routerLink",e.VKq(4,ye,i.id))}}function Ce(t,a){if(1&t&&(e.TgZ(0,"table",7)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"Id"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Title"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Description"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Actions"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,Oe,10,6,"tr",8),e.ALo(13,"slice"),e.qZA()()),2&t){const i=a.ngIf,l=e.oxw().ngIf,h=e.oxw();e.xp6(12),e.Q6J("ngForOf",e.Dn7(13,1,i,(l-1)*h.pageSize,(l-1)*h.pageSize+h.pageSize))}}const ve=function(t){return{active:t}};function be(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"li",11)(1,"a",12),e.NdJ("click",function(){const C=e.CHM(i).$implicit;return e.oxw(2).changePage(C)}),e._uU(2),e.qZA()()}if(2&t){const i=a.$implicit,l=e.oxw().ngIf;e.Q6J("ngClass",e.VKq(2,ve,i===l)),e.xp6(2),e.Oqu(i)}}function Me(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Ce,14,5,"table",3),e.ALo(2,"async"),e.TgZ(3,"nav",4)(4,"ul",5),e.YNc(5,be,3,4,"li",6),e.qZA()()()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,i.coffee)),e.xp6(4),e.Q6J("ngForOf",i.pagination)}}let Ze=(()=>{class t{constructor(i){this.store=i,this.pageSize=10,this.pagination=[]}ngOnInit(){this.coffee=this.store.select(Q),this.currPage=this.store.select(ue),this.coffee.subscribe(i=>{this.pagination=Array(Math.ceil(i.length/this.pageSize)).fill(0).map((l,h)=>h+1)}),this.store.dispatch(w())}changePage(i){this.store.dispatch(D({currPage:i}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(g.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-coffee-list"]],decls:4,vars:3,consts:[[1,"row"],[1,"col-md-12"],[4,"ngIf"],["class","table table-striped",4,"ngIf"],["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[2,"word-break","break-all"],["href","",1,"btn","btn-info",3,"routerLink"],[1,"page-item",3,"ngClass"],["href","javascript:void(0)",1,"page-link",3,"click"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Me,6,4,"div",2),e.ALo(3,"async"),e.qZA()()),2&i&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,l.currPage)))},directives:[A.O5,A.sg,I.yS,A.mk],pipes:[A.Ov,A.OU],styles:[""]}),t})();function Ae(t,a){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2"),e._uU(4,"Coffee Details"),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",2)(7,"div",5)(8,"label",6),e._uU(9,"Id:"),e.qZA(),e.TgZ(10,"span",7),e._uU(11),e.qZA()(),e.TgZ(12,"div",8)(13,"label",9),e._uU(14,"UID:"),e.qZA(),e.TgZ(15,"span",10),e._uU(16),e.qZA()()(),e.TgZ(17,"div",2)(18,"div",5)(19,"label",11),e._uU(20,"Blend Name :"),e.qZA(),e.TgZ(21,"span",12),e._uU(22),e.qZA()(),e.TgZ(23,"div",5)(24,"label",13),e._uU(25,"Origin:"),e.qZA(),e.TgZ(26,"span",14),e._uU(27),e.qZA()(),e.TgZ(28,"div",5)(29,"label",15),e._uU(30,"Variety:"),e.qZA(),e.TgZ(31,"span",16),e._uU(32),e.qZA()()(),e.TgZ(33,"div",2)(34,"div",5)(35,"label",17),e._uU(36,"Intensifier:"),e.qZA(),e.TgZ(37,"span",18),e._uU(38),e.qZA()(),e.TgZ(39,"div",8)(40,"label",19),e._uU(41,"Notes:"),e.qZA(),e.TgZ(42,"span",20),e._uU(43),e.qZA()()()()()),2&t){const i=a.ngIf;e.xp6(11),e.Oqu(i.id),e.xp6(5),e.Oqu(i.uid),e.xp6(6),e.Oqu(i.blend_name),e.xp6(5),e.Oqu(i.origin),e.xp6(5),e.Oqu(i.variety),e.xp6(6),e.Oqu(i.intensifier),e.xp6(5),e.Oqu(i.notes)}}let Fe=(()=>{class t{constructor(i,l){this.store=i,this.router=l}ngOnInit(){this.coffeeItem=this.store.select(ae),this.coffeeItem.subscribe(i=>{i||this.router.navigateByUrl("coffee")}).unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(g.yh),e.Y36(I.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-coffee-details"]],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row","justify-content-md-center"],[1,"col-12"],[1,"coffee-form"],[1,"col-md-12","col-lg-4"],["for","idField",1,"form-label"],["id","idField"],[1,"col-md-12","col-lg-8"],["for","uidField",1,"form-label"],["id","uidField"],["for","blendNameField",1,"form-label"],["id","blendNameField"],["for","originField",1,"form-label"],["id","originField"],["for","varietyField",1,"form-label"],["id","varietyField"],["for","intensifierField",1,"form-label"],["id","intensifierField"],["for","notesField",1,"form-label"],["id","notesField"]],template:function(i,l){1&i&&(e.YNc(0,Ae,44,7,"div",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,l.coffeeItem))},directives:[A.O5],pipes:[A.Ov],styles:[".container[_ngcontent-%COMP%]{padding:1em}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;margin-right:.5em}.container[_ngcontent-%COMP%]   .coffee-form[_ngcontent-%COMP%]{border:1px solid #777;padding:.5em}@media only screen and (max-width: 600px){.container[_ngcontent-%COMP%]{padding:1em .5em}}"]}),t})();var Te=O(2382);const xe=[{path:"",component:Ze},{path:"details/:id",component:Fe}];let Ee=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[A.ez,Te.UX,I.Bz.forChild(xe),g.Aw.forFeature(K,oe),N.sQ.forFeature([me])]]}),t})()}}]);