(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Spgw:function(t,o,e){"use strict";e.r(o),e.d(o,"MarketingModule",(function(){return T})),e.d(o,"PromotionDetailComponent",(function(){return L})),e.d(o,"PromotionListComponent",(function(){return W})),e.d(o,"PromotionResolver",(function(){return S})),e.d(o,"marketingRoutes",(function(){return $})),e.d(o,"promotionBreadcrumb",(function(){return x})),e.d(o,"\u02750",(function(){return N})),e.d(o,"\u02751",(function(){return E}));var i=e("EM62"),c=e("nIj0"),n=e("sEIs"),r=e("OxKu"),a=e("ixhn"),s=e("J+dc"),d=e("cJ9h"),m=e("TLy2"),l=e("6Oco"),u=e("2kYt"),p=e("Kej3"),b=e("s2Ay");const f=function(){return["enabled"]};function h(t,o){if(1&t&&(i.ic(0,"clr-toggle-wrapper"),i.dc(1,"input",23),i.ic(2,"label"),i.Wc(3),i.sc(4,"translate"),i.hc(),i.hc()),2&t){const t=i.rc();i.Rb(1),i.yc("formControl",t.detailForm.get(i.Bc(4,f))),i.Rb(2),i.Xc(i.tc(4,2,"common.enabled"))}}function g(t,o){if(1&t){const t=i.jc();i.ic(0,"button",24),i.pc("click",(function(){i.Lc(t);return i.rc().create()})),i.Wc(1),i.sc(2,"translate"),i.hc()}if(2&t){const t=i.rc();i.yc("disabled",!t.saveButtonEnabled()),i.Rb(1),i.Yc(" ",i.tc(2,2,"common.create")," ")}}function v(t,o){if(1&t){const t=i.jc();i.ic(0,"button",24),i.pc("click",(function(){i.Lc(t);return i.rc(2).save()})),i.Wc(1),i.sc(2,"translate"),i.hc()}if(2&t){const t=i.rc(2);i.yc("disabled",!t.saveButtonEnabled()),i.Rb(1),i.Yc(" ",i.tc(2,2,"common.update")," ")}}function y(t,o){1&t&&i.Uc(0,v,3,4,"button",25),2&t&&i.yc("vdrIfPermissions","UpdatePromotion")}function P(t,o){if(1&t){const t=i.jc();i.gc(0),i.ic(1,"vdr-configurable-input",26),i.pc("remove",(function(o){i.Lc(t);return i.rc().removeCondition(o)})),i.sc(2,"hasPermission"),i.hc(),i.fc()}if(2&t){const t=o.$implicit,e=o.index,c=i.rc();i.Rb(1),i.yc("readonly",!i.tc(2,4,"UpdatePromotion"))("operation",t)("operationDefinition",c.getConditionDefinition(t))("formControlName",e)}}function C(t,o){if(1&t){const t=i.jc();i.ic(0,"button",31),i.pc("click",(function(){i.Lc(t);const e=o.$implicit;return i.rc(2).addCondition(e)})),i.Wc(1),i.hc()}if(2&t){const t=o.$implicit;i.Rb(1),i.Yc(" ",t.description," ")}}function A(t,o){if(1&t&&(i.ic(0,"vdr-dropdown"),i.ic(1,"button",27),i.dc(2,"clr-icon",28),i.Wc(3),i.sc(4,"translate"),i.hc(),i.ic(5,"vdr-dropdown-menu",29),i.Uc(6,C,2,1,"button",30),i.hc(),i.hc()),2&t){const t=i.rc();i.Rb(3),i.Yc(" ",i.tc(4,2,"marketing.add-condition")," "),i.Rb(3),i.yc("ngForOf",t.getAvailableConditions())}}function O(t,o){if(1&t){const t=i.jc();i.ic(0,"vdr-configurable-input",32),i.pc("remove",(function(o){i.Lc(t);return i.rc().removeAction(o)})),i.sc(1,"hasPermission"),i.hc()}if(2&t){const t=o.$implicit,e=o.index,c=i.rc();i.yc("operation",t)("readonly",!i.tc(1,4,"UpdatePromotion"))("operationDefinition",c.getActionDefinition(t))("formControlName",e)}}function k(t,o){if(1&t){const t=i.jc();i.ic(0,"button",31),i.pc("click",(function(){i.Lc(t);const e=o.$implicit;return i.rc(2).addAction(e)})),i.Wc(1),i.hc()}if(2&t){const t=o.$implicit;i.Rb(1),i.Yc(" ",t.description," ")}}function R(t,o){if(1&t&&(i.ic(0,"vdr-dropdown"),i.ic(1,"button",27),i.dc(2,"clr-icon",28),i.Wc(3),i.sc(4,"translate"),i.hc(),i.ic(5,"vdr-dropdown-menu",29),i.Uc(6,k,2,1,"button",30),i.hc(),i.hc()),2&t){const t=i.rc();i.Rb(3),i.Yc(" ",i.tc(4,2,"marketing.add-action")," "),i.Rb(3),i.yc("ngForOf",t.getAvailableActions())}}const j=function(){return["./create"]};function D(t,o){1&t&&(i.ic(0,"a",3),i.dc(1,"clr-icon",4),i.Wc(2),i.sc(3,"translate"),i.hc()),2&t&&(i.yc("routerLink",i.Bc(4,j)),i.Rb(2),i.Yc(" ",i.tc(3,2,"marketing.create-new-promotion")," "))}function w(t,o){if(1&t&&(i.ic(0,"vdr-chip"),i.Wc(1),i.hc()),2&t){const t=i.rc().item;i.Rb(1),i.Yc(" ",t.couponCode," ")}}function I(t,o){1&t&&(i.ic(0,"vdr-chip"),i.Wc(1),i.sc(2,"translate"),i.hc()),2&t&&(i.Rb(1),i.Xc(i.tc(2,1,"common.disabled")))}const U=function(t){return["./",t]};function F(t,o){if(1&t){const t=i.jc();i.ic(0,"td",5),i.Wc(1),i.hc(),i.ic(2,"td",5),i.Uc(3,w,2,1,"vdr-chip",6),i.hc(),i.ic(4,"td",5),i.Wc(5),i.sc(6,"localeDate"),i.hc(),i.ic(7,"td",5),i.Wc(8),i.sc(9,"localeDate"),i.hc(),i.ic(10,"td",7),i.Uc(11,I,3,3,"vdr-chip",6),i.hc(),i.ic(12,"td",8),i.dc(13,"vdr-table-row-action",9),i.sc(14,"translate"),i.hc(),i.ic(15,"td",8),i.ic(16,"vdr-dropdown"),i.ic(17,"button",10),i.Wc(18),i.sc(19,"translate"),i.dc(20,"clr-icon",11),i.hc(),i.ic(21,"vdr-dropdown-menu",12),i.ic(22,"button",13),i.pc("click",(function(){i.Lc(t);const e=o.item;return i.rc().deletePromotion(e.id)})),i.sc(23,"hasPermission"),i.dc(24,"clr-icon",14),i.Wc(25),i.sc(26,"translate"),i.hc(),i.hc(),i.hc(),i.hc()}if(2&t){const t=o.item;i.Rb(1),i.Xc(t.name),i.Rb(2),i.yc("ngIf",t.couponCode),i.Rb(2),i.Xc(i.uc(6,10,t.startsAt,"longDate")),i.Rb(3),i.Xc(i.uc(9,13,t.endsAt,"longDate")),i.Rb(3),i.yc("ngIf",!t.enabled),i.Rb(2),i.yc("label",i.tc(14,16,"common.edit"))("linkTo",i.Cc(24,U,t.id)),i.Rb(5),i.Yc(" ",i.tc(19,18,"common.actions")," "),i.Rb(4),i.yc("disabled",!i.tc(23,20,"DeletePromotion")),i.Rb(3),i.Yc(" ",i.tc(26,22,"common.delete")," ")}}class L extends a.v{constructor(t,o,e,i,n,r,a){super(o,t,e,n),this.changeDetector=i,this.dataService=n,this.formBuilder=r,this.notificationService=a,this.conditions=[],this.actions=[],this.allConditions=[],this.allActions=[],this.detailForm=this.formBuilder.group({name:["",c.C.required],enabled:!0,couponCode:null,perCustomerUsageLimit:null,startsAt:null,endsAt:null,conditions:this.formBuilder.array([]),actions:this.formBuilder.array([])})}ngOnInit(){this.init(),this.promotion$=this.entity$,this.dataService.promotion.getPromotionActionsAndConditions().single$.subscribe(t=>{this.allActions=t.promotionActions,this.allConditions=t.promotionConditions,this.changeDetector.markForCheck()})}ngOnDestroy(){this.destroy()}getAvailableConditions(){return this.allConditions.filter(t=>!this.conditions.find(o=>o.code===t.code))}getConditionDefinition(t){return this.allConditions.find(o=>o.code===t.code)}getAvailableActions(){return this.allActions.filter(t=>!this.actions.find(o=>o.code===t.code))}getActionDefinition(t){return this.allActions.find(o=>o.code===t.code)}saveButtonEnabled(){return this.detailForm.dirty&&this.detailForm.valid&&(0!==this.conditions.length||this.detailForm.value.couponCode)&&0!==this.actions.length}addCondition(t){this.addOperation("conditions",t),this.detailForm.markAsDirty()}addAction(t){this.addOperation("actions",t),this.detailForm.markAsDirty()}removeCondition(t){this.removeOperation("conditions",t),this.detailForm.markAsDirty()}removeAction(t){this.removeOperation("actions",t),this.detailForm.markAsDirty()}formArrayOf(t){return this.detailForm.get(t)}create(){if(!this.detailForm.dirty)return;const t=this.detailForm.value,o={name:t.name,enabled:!0,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};this.dataService.promotion.createPromotion(o).subscribe(({createPromotion:t})=>{switch(t.__typename){case"Promotion":this.notificationService.success(Object(r.a)("common.notify-create-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck(),this.router.navigate(["../",t.id],{relativeTo:this.route});break;case"MissingConditionsError":this.notificationService.error(t.message)}},t=>{this.notificationService.error(Object(r.a)("common.notify-create-error"),{entity:"Promotion"})})}save(){if(!this.detailForm.dirty)return;const t=this.detailForm.value;this.promotion$.pipe(Object(s.a)(1),Object(d.a)(o=>{const e={id:o.id,name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};return this.dataService.promotion.updatePromotion(e)})).subscribe(t=>{this.notificationService.success(Object(r.a)("common.notify-update-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck()},t=>{this.notificationService.error(Object(r.a)("common.notify-update-error"),{entity:"Promotion"})})}setFormValues(t,o){this.detailForm.patchValue({name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt}),t.conditions.forEach(t=>{this.addOperation("conditions",t)}),t.actions.forEach(t=>this.addOperation("actions",t))}mapOperationsToInputs(t,o){return t.map((t,e)=>({code:t.code,arguments:Object.values(o[e].args).map((o,e)=>({name:t.args[e].name,value:Object(a.cc)(o)}))}))}addOperation(t,o){const e=this.formArrayOf(t),i="conditions"===t?this.conditions:this.actions;if(-1===e.value.findIndex(t=>t.code===o.code)){const c=o.args.reduce((e,i)=>{var c;return Object.assign(Object.assign({},e),{[i.name]:null!==(c=Object(a.gc)(i.value))&&void 0!==c?c:this.getDefaultArgValue(t,o,i.name)})},{});e.push(this.formBuilder.control({code:o.code,args:c})),i.push({code:o.code,args:o.args.map(t=>({name:t.name,value:Object(a.gc)(t.value)}))})}}getDefaultArgValue(t,o,e){const i="conditions"===t?this.allConditions.find(t=>t.code===o.code):this.allActions.find(t=>t.code===o.code);if(i){const t=i.args.find(t=>t.name===e);if(t)return Object(a.hc)(t)}throw new Error('Could not determine default value for "argName"')}removeOperation(t,o){const e=this.formArrayOf(t),i="conditions"===t?this.conditions:this.actions,c=e.value.findIndex(t=>t.code===o.code);-1!==c&&(e.removeAt(c),i.splice(c,1))}}L.\u0275fac=function(t){return new(t||L)(i.cc(n.e),i.cc(n.a),i.cc(a.Mb),i.cc(i.k),i.cc(a.L),i.cc(c.e),i.cc(a.Eb))},L.\u0275cmp=i.Wb({type:L,selectors:[["vdr-promotion-detail"]],features:[i.Ob],decls:46,vars:43,consts:[[1,"flex","clr-align-items-center"],[3,"entity"],[4,"vdrIfPermissions"],["locationId","promotion-detail"],["class","btn btn-primary",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","name",3,"label"],["id","name","type","text","formControlName","name",3,"readonly"],["for","startsAt",3,"label"],["formControlName","startsAt"],["for","endsAt",3,"label"],["formControlName","endsAt"],["for","couponCode",3,"label"],["id","couponCode","type","text","formControlName","couponCode",3,"readonly"],["for","perCustomerUsageLimit",3,"label"],["id","perCustomerUsageLimit","type","number","min","1","max","999","formControlName","perCustomerUsageLimit",3,"readonly"],[1,"clr-row"],["formArrayName","conditions",1,"clr-col"],[1,"clr-control-label"],[4,"ngFor","ngForOf"],["formArrayName","actions",1,"clr-col"],[3,"operation","readonly","operationDefinition","formControlName","remove",4,"ngFor","ngForOf"],["type","checkbox","clrToggle","","name","enabled",3,"formControl"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary",3,"disabled","click",4,"vdrIfPermissions"],[3,"readonly","operation","operationDefinition","formControlName","remove"],["vdrDropdownTrigger","",1,"btn","btn-outline"],["shape","plus"],["vdrPosition","bottom-left"],["type","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button","vdrDropdownItem","",3,"click"],[3,"operation","readonly","operationDefinition","formControlName","remove"]],template:function(t,o){if(1&t&&(i.ic(0,"vdr-action-bar"),i.ic(1,"vdr-ab-left"),i.ic(2,"div",0),i.dc(3,"vdr-entity-info",1),i.sc(4,"async"),i.Uc(5,h,5,5,"clr-toggle-wrapper",2),i.hc(),i.hc(),i.ic(6,"vdr-ab-right"),i.dc(7,"vdr-action-bar-items",3),i.Uc(8,g,3,4,"button",4),i.sc(9,"async"),i.Uc(10,y,1,1,"ng-template",null,5,i.Vc),i.hc(),i.hc(),i.ic(12,"form",6),i.ic(13,"vdr-form-field",7),i.sc(14,"translate"),i.dc(15,"input",8),i.sc(16,"hasPermission"),i.hc(),i.ic(17,"vdr-form-field",9),i.sc(18,"translate"),i.dc(19,"vdr-datetime-picker",10),i.hc(),i.ic(20,"vdr-form-field",11),i.sc(21,"translate"),i.dc(22,"vdr-datetime-picker",12),i.hc(),i.ic(23,"vdr-form-field",13),i.sc(24,"translate"),i.dc(25,"input",14),i.sc(26,"hasPermission"),i.hc(),i.ic(27,"vdr-form-field",15),i.sc(28,"translate"),i.dc(29,"input",16),i.sc(30,"hasPermission"),i.hc(),i.ic(31,"div",17),i.ic(32,"div",18),i.ic(33,"label",19),i.Wc(34),i.sc(35,"translate"),i.hc(),i.Uc(36,P,3,6,"ng-container",20),i.ic(37,"div"),i.Uc(38,A,7,4,"vdr-dropdown",2),i.hc(),i.hc(),i.ic(39,"div",21),i.ic(40,"label",19),i.Wc(41),i.sc(42,"translate"),i.hc(),i.Uc(43,O,2,6,"vdr-configurable-input",22),i.ic(44,"div"),i.Uc(45,R,7,4,"vdr-dropdown",2),i.hc(),i.hc(),i.hc(),i.hc()),2&t){const t=i.Ic(11);i.Rb(3),i.yc("entity",i.tc(4,19,o.entity$)),i.Rb(2),i.yc("vdrIfPermissions","UpdatePromotion"),i.Rb(3),i.yc("ngIf",i.tc(9,21,o.isNew$))("ngIfElse",t),i.Rb(4),i.yc("formGroup",o.detailForm),i.Rb(1),i.yc("label",i.tc(14,23,"common.name")),i.Rb(2),i.yc("readonly",!i.tc(16,25,"UpdatePromotion")),i.Rb(2),i.yc("label",i.tc(18,27,"marketing.starts-at")),i.Rb(3),i.yc("label",i.tc(21,29,"marketing.ends-at")),i.Rb(3),i.yc("label",i.tc(24,31,"marketing.coupon-code")),i.Rb(2),i.yc("readonly",!i.tc(26,33,"UpdatePromotion")),i.Rb(2),i.yc("label",i.tc(28,35,"marketing.per-customer-limit")),i.Rb(2),i.yc("readonly",!i.tc(30,37,"UpdatePromotion")),i.Rb(5),i.Xc(i.tc(35,39,"marketing.conditions")),i.Rb(2),i.yc("ngForOf",o.conditions),i.Rb(2),i.yc("vdrIfPermissions","UpdatePromotion"),i.Rb(3),i.Xc(i.tc(42,41,"marketing.actions")),i.Rb(2),i.yc("ngForOf",o.actions),i.Rb(2),i.yc("vdrIfPermissions","UpdatePromotion")}},directives:[a.c,a.e,a.bb,a.rb,a.f,a.d,u.p,c.E,c.q,c.j,a.eb,a.fb,c.b,c.p,c.h,a.O,c.v,c.d,p.u,u.o,p.k,c.a,p.i,c.g,a.D,a.T,a.W,p.o,a.V,a.U],pipes:[u.b,b.d,a.jb],styles:[""],changeDetection:0}),L.ctorParameters=()=>[{type:n.e},{type:n.a},{type:a.Mb},{type:i.k},{type:a.L},{type:c.e},{type:a.Eb}];class W extends a.x{constructor(t,o,e,i,c){super(o,e),this.dataService=t,this.notificationService=i,this.modalService=c,super.setQueryFn((...t)=>this.dataService.promotion.getPromotions(...t),t=>t.promotions)}deletePromotion(t){this.modalService.dialog({title:Object(r.a)("catalog.confirm-delete-promotion"),buttons:[{type:"secondary",label:Object(r.a)("common.cancel")},{type:"danger",label:Object(r.a)("common.delete"),returnValue:!0}]}).pipe(Object(m.a)(o=>o?this.dataService.promotion.deletePromotion(t):l.a)).subscribe(()=>{this.notificationService.success(Object(r.a)("common.notify-delete-success"),{entity:"Promotion"}),this.refresh()},t=>{this.notificationService.error(Object(r.a)("common.notify-delete-error"),{entity:"Promotion"})})}}W.\u0275fac=function(t){return new(t||W)(i.cc(a.L),i.cc(n.e),i.cc(n.a),i.cc(a.Eb),i.cc(a.Db))},W.\u0275cmp=i.Wb({type:W,selectors:[["vdr-promotion-list"]],features:[i.Ob],decls:25,vars:25,consts:[["locationId","promotion-list"],["class","btn btn-primary",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],[4,"ngIf"],[1,"align-middle"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"disabled","click"],["shape","trash",1,"is-danger"]],template:function(t,o){1&t&&(i.ic(0,"vdr-action-bar"),i.ic(1,"vdr-ab-right"),i.dc(2,"vdr-action-bar-items",0),i.Uc(3,D,4,5,"a",1),i.hc(),i.hc(),i.ic(4,"vdr-data-table",2),i.pc("pageChange",(function(t){return o.setPageNumber(t)}))("itemsPerPageChange",(function(t){return o.setItemsPerPage(t)})),i.sc(5,"async"),i.sc(6,"async"),i.sc(7,"async"),i.sc(8,"async"),i.ic(9,"vdr-dt-column"),i.Wc(10),i.sc(11,"translate"),i.hc(),i.ic(12,"vdr-dt-column"),i.Wc(13),i.sc(14,"translate"),i.hc(),i.ic(15,"vdr-dt-column"),i.Wc(16),i.sc(17,"translate"),i.hc(),i.ic(18,"vdr-dt-column"),i.Wc(19),i.sc(20,"translate"),i.hc(),i.dc(21,"vdr-dt-column"),i.dc(22,"vdr-dt-column"),i.dc(23,"vdr-dt-column"),i.Uc(24,F,27,26,"ng-template"),i.hc()),2&t&&(i.Rb(3),i.yc("vdrIfPermissions","CreatePromotion"),i.Rb(1),i.yc("items",i.tc(5,9,o.items$))("itemsPerPage",i.tc(6,11,o.itemsPerPage$))("totalItems",i.tc(7,13,o.totalItems$))("currentPage",i.tc(8,15,o.currentPage$)),i.Rb(6),i.Xc(i.tc(11,17,"common.name")),i.Rb(3),i.Xc(i.tc(14,19,"marketing.coupon-code")),i.Rb(3),i.Xc(i.tc(17,21,"marketing.starts-at")),i.Rb(3),i.Xc(i.tc(20,23,"marketing.ends-at")))},directives:[a.c,a.f,a.d,a.rb,a.N,a.M,n.h,p.o,u.p,a.Sb,a.T,a.W,a.V,a.U,a.C],pipes:[u.b,b.d,a.Bb,a.jb],styles:[""],changeDetection:0}),W.ctorParameters=()=>[{type:a.L},{type:n.e},{type:n.a},{type:a.Eb},{type:a.Db}];class S extends a.w{constructor(t,o){super(t,{__typename:"Promotion",id:"",createdAt:"",updatedAt:"",name:"",enabled:!1,conditions:[],actions:[]},t=>o.promotion.getPromotion(t).mapStream(t=>t.promotion))}}S.\u0275fac=function(t){return new(t||S)(i.mc(n.e),i.mc(a.L))},S.\u0275prov=Object(i.Yb)({factory:function(){return new S(Object(i.mc)(n.e),Object(i.mc)(a.L))},token:S,providedIn:"root"}),S.ctorParameters=()=>[{type:n.e},{type:a.L}];const N={breadcrumb:Object(r.a)("breadcrumb.promotions")},E={breadcrumb:x},$=[{path:"promotions",component:W,data:N},{path:"promotions/:id",component:L,resolve:Object(a.Zb)(S),canDeactivate:[a.y],data:E}];function x(t,o){return Object(a.bc)({entity:t.entity,id:o.id,breadcrumbKey:"breadcrumb.promotions",getName:t=>t.name,route:"promotions"})}class T{}T.\u0275mod=i.ac({type:T}),T.\u0275inj=i.Zb({factory:function(t){return new(t||T)},imports:[[a.Nb,n.i.forChild($)]]})}}]);
//# sourceMappingURL=13-es2015.cdee94dffaf076b385aa.js.map