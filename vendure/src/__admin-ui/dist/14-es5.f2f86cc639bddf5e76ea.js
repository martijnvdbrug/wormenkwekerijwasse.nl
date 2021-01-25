!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,c){if(!t)return;if("string"==typeof t)return e(t,c);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,c)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}function c(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,n=u(t);if(e){var r=u(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return i(this,c)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,c){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,c){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(c):r.value}})(t,e,c||t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{tB2i:function(e,c,i){"use strict";i.r(c),i.d(c,"HealthCheckComponent",(function(){return M})),i.d(c,"JobListComponent",(function(){return q})),i.d(c,"JobStateLabelComponent",(function(){return L})),i.d(c,"SystemModule",(function(){return G})),i.d(c,"systemRoutes",(function(){return J})),i.d(c,"\u02750",(function(){return X})),i.d(c,"\u02751",(function(){return $}));var d=i("EM62"),b=i("ixhn"),h=i("nIj0"),f=i("sEIs"),p=i("8lHc"),m=i("kuMc"),y=i("xVbo"),g=i("YtkY"),v=i("OxKu"),R=i("2kYt"),j=i("Kej3"),w=i("s2Ay"),k=i("jY47");function I(t,e){1&t&&(d.gc(0),d.Wc(1),d.sc(2,"translate"),d.fc()),2&t&&(d.Rb(1),d.Yc(" ",d.tc(2,1,"system.health-all-systems-up")," "))}function C(t,e){1&t&&(d.Wc(0),d.sc(1,"translate")),2&t&&d.Yc(" ",d.tc(1,1,"system.health-error")," ")}var O=function(t,e){return{"is-success":t,"is-danger":e}};function P(t,e){if(1&t&&(d.ic(0,"div",7),d.ic(1,"div",8),d.dc(2,"clr-icon",9),d.hc(),d.ic(3,"div",10),d.Uc(4,I,3,3,"ng-container",11),d.Uc(5,C,2,3,"ng-template",null,12,d.Vc),d.ic(7,"div",13),d.Wc(8),d.sc(9,"translate"),d.sc(10,"localeDate"),d.sc(11,"async"),d.hc(),d.hc(),d.hc()),2&t){var c=e.ngIf,n=d.Ic(6),r=d.rc();d.Rb(2),d.yc("ngClass",d.Dc(13,O,"ok"===c,"ok"!==c)),d.Sb("shape","ok"===c?"check-circle":"exclamation-circle"),d.Rb(2),d.yc("ngIf","ok"===c)("ngIfElse",n),d.Rb(4),d.Zc(" ",d.tc(9,6,"system.health-last-checked"),": ",d.uc(10,8,d.tc(11,11,r.healthCheckService.lastCheck$),"mediumTime")," ")}}function S(t,e){1&t&&(d.gc(0),d.dc(1,"clr-icon",17),d.Wc(2),d.sc(3,"translate"),d.fc()),2&t&&(d.Rb(2),d.Yc(" ",d.tc(3,1,"system.health-status-up")," "))}function W(t,e){1&t&&(d.dc(0,"clr-icon",18),d.Wc(1),d.sc(2,"translate")),2&t&&(d.Rb(1),d.Yc(" ",d.tc(2,1,"system.health-status-down")," "))}function E(t,e){if(1&t&&(d.ic(0,"tr"),d.ic(1,"td",14),d.Wc(2),d.hc(),d.ic(3,"td",14),d.ic(4,"vdr-chip",15),d.Uc(5,S,4,3,"ng-container",11),d.Uc(6,W,3,3,"ng-template",null,16,d.Vc),d.hc(),d.hc(),d.ic(8,"td",14),d.Wc(9),d.hc(),d.hc()),2&t){var c=e.$implicit,n=d.Ic(7);d.Rb(2),d.Xc(c.key),d.Rb(2),d.yc("colorType","up"===c.result.status?"success":"error"),d.Rb(1),d.yc("ngIf","up"===c.result.status)("ngIfElse",n),d.Rb(4),d.Xc(c.result.message)}}function D(t,e){1&t&&(d.gc(0),d.Wc(1),d.sc(2,"translate"),d.fc()),2&t&&(d.Rb(1),d.Yc(" ",d.tc(2,1,"system.all-job-queues")," "))}function N(t,e){if(1&t&&(d.ic(0,"vdr-chip",8),d.Wc(1),d.hc()),2&t){var c=d.rc().item;d.yc("colorFrom",c.name),d.Rb(1),d.Xc(c.name)}}function U(t,e){if(1&t&&(d.Uc(0,D,3,3,"ng-container",6),d.Uc(1,N,2,2,"ng-template",null,7,d.Vc)),2&t){var c=e.item,n=d.Ic(2);d.yc("ngIf","all"===c.name)("ngIfElse",n)}}function x(t,e){if(1&t&&(d.ic(0,"vdr-dropdown"),d.ic(1,"button",14),d.sc(2,"translate"),d.dc(3,"clr-icon",15),d.hc(),d.ic(4,"vdr-dropdown-menu"),d.ic(5,"div",16),d.dc(6,"vdr-object-tree",17),d.hc(),d.hc(),d.hc()),2&t){var c=d.rc().item;d.Rb(1),d.yc("title",d.tc(2,2,"system.job-data")),d.Rb(5),d.yc("value",c.data)}}function T(t,e){if(1&t&&(d.ic(0,"vdr-dropdown"),d.ic(1,"button",18),d.dc(2,"clr-icon",15),d.Wc(3),d.sc(4,"translate"),d.hc(),d.ic(5,"vdr-dropdown-menu"),d.ic(6,"div",16),d.dc(7,"vdr-object-tree",17),d.hc(),d.hc(),d.hc()),2&t){var c=d.rc().item;d.Rb(3),d.Yc(" ",d.tc(4,2,"system.job-result")," "),d.Rb(4),d.yc("value",c.result)}}function Y(t,e){if(1&t&&(d.ic(0,"vdr-dropdown"),d.ic(1,"button",18),d.dc(2,"clr-icon",19),d.Wc(3),d.sc(4,"translate"),d.hc(),d.ic(5,"vdr-dropdown-menu"),d.ic(6,"div",16),d.Wc(7),d.hc(),d.hc(),d.hc()),2&t){var c=d.rc().item;d.Rb(3),d.Yc(" ",d.tc(4,2,"system.job-error")," "),d.Rb(4),d.Yc(" ",c.error," ")}}function A(t,e){if(1&t){var c=d.jc();d.ic(0,"vdr-dropdown"),d.ic(1,"button",20),d.dc(2,"clr-icon",21),d.hc(),d.ic(3,"vdr-dropdown-menu",22),d.ic(4,"button",23),d.pc("click",(function(){d.Lc(c);var t=d.rc().item;return d.rc().cancelJob(t.id)})),d.sc(5,"hasPermission"),d.dc(6,"clr-icon",24),d.Wc(7),d.sc(8,"translate"),d.hc(),d.hc(),d.hc()}2&t&&(d.Rb(4),d.yc("disabled",!d.tc(5,2,"DeleteSettings")),d.Rb(3),d.Yc(" ",d.tc(8,4,"common.cancel")," "))}function F(t,e){if(1&t&&(d.ic(0,"td",9),d.dc(1,"vdr-entity-info",10),d.hc(),d.ic(2,"td",9),d.Uc(3,x,7,4,"vdr-dropdown",11),d.ic(4,"vdr-chip",8),d.Wc(5),d.hc(),d.hc(),d.ic(6,"td",9),d.Wc(7),d.sc(8,"timeAgo"),d.hc(),d.ic(9,"td",9),d.dc(10,"vdr-job-state-label",12),d.hc(),d.ic(11,"td",9),d.Wc(12),d.sc(13,"duration"),d.hc(),d.ic(14,"td",9),d.Uc(15,T,8,4,"vdr-dropdown",11),d.Uc(16,Y,8,4,"vdr-dropdown",11),d.hc(),d.ic(17,"td",13),d.Uc(18,A,9,6,"vdr-dropdown",11),d.hc()),2&t){var c=e.item,n=d.rc();d.Rb(1),d.yc("entity",c),d.Rb(2),d.yc("ngIf",c.data),d.Rb(1),d.yc("colorFrom",c.queueName),d.Rb(1),d.Xc(c.queueName),d.Rb(2),d.Xc(d.tc(8,10,c.createdAt)),d.Rb(3),d.yc("job",c),d.Rb(2),d.Xc(d.tc(13,12,c.duration)),d.Rb(3),d.yc("ngIf",n.hasResult(c)),d.Rb(1),d.yc("ngIf",c.error),d.Rb(2),d.yc("ngIf",!c.isSettled&&"FAILED"!==c.state)}}function _(t,e){if(1&t&&(d.ic(0,"span",2),d.Wc(1),d.sc(2,"percent"),d.hc()),2&t){var c=d.rc();d.Rb(1),d.Yc(" ",d.tc(2,1,c.job.progress/100)," ")}}var M=function t(e){l(this,t),this.healthCheckService=e};M.\u0275fac=function(t){return new(t||M)(d.cc(b.kb))},M.\u0275cmp=d.Wb({type:M,selectors:[["vdr-health-check"]],decls:25,vars:18,consts:[["class","system-status-header",4,"ngIf"],["locationId","system-status"],[1,"btn","btn-secondary",3,"click"],["shape","refresh"],[1,"table"],[1,"left"],[4,"ngFor","ngForOf"],[1,"system-status-header"],[1,"status-icon"],["size","48",3,"ngClass"],[1,"status-detail"],[4,"ngIf","ngIfElse"],["error",""],[1,"last-checked"],[1,"align-middle","left"],[3,"colorType"],["down",""],["shape","check-circle"],["shape","exclamation-circle"]],template:function(t,e){1&t&&(d.ic(0,"vdr-action-bar"),d.ic(1,"vdr-ab-left"),d.Uc(2,P,12,16,"div",0),d.sc(3,"async"),d.hc(),d.ic(4,"vdr-ab-right"),d.dc(5,"vdr-action-bar-items",1),d.ic(6,"button",2),d.pc("click",(function(){return e.healthCheckService.refresh()})),d.dc(7,"clr-icon",3),d.Wc(8),d.sc(9,"translate"),d.hc(),d.hc(),d.hc(),d.ic(10,"table",4),d.ic(11,"thead"),d.ic(12,"tr"),d.ic(13,"th",5),d.Wc(14),d.sc(15,"translate"),d.hc(),d.ic(16,"th",5),d.Wc(17),d.sc(18,"translate"),d.hc(),d.ic(19,"th",5),d.Wc(20),d.sc(21,"translate"),d.hc(),d.hc(),d.hc(),d.ic(22,"tbody"),d.Uc(23,E,10,5,"tr",6),d.sc(24,"async"),d.hc(),d.hc()),2&t&&(d.Rb(2),d.yc("ngIf",d.tc(3,6,e.healthCheckService.status$)),d.Rb(6),d.Yc(" ",d.tc(9,8,"system.health-refresh")," "),d.Rb(6),d.Yc(" ",d.tc(15,10,"common.name")," "),d.Rb(3),d.Yc(" ",d.tc(18,12,"system.health-status")," "),d.Rb(3),d.Yc(" ",d.tc(21,14,"system.health-message")," "),d.Rb(3),d.yc("ngForOf",d.tc(24,16,e.healthCheckService.details$)))},directives:[b.c,b.e,R.o,b.f,b.d,j.o,R.n,R.m,b.C],pipes:[R.b,w.d,b.Bb],styles:[".system-status-header[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:space-between}.system-status-header[_ngcontent-%COMP%]   .status-detail[_ngcontent-%COMP%]{font-weight:700}.system-status-header[_ngcontent-%COMP%]   .last-checked[_ngcontent-%COMP%]{color:var(--color-grey-500);font-weight:400}"],changeDetection:0}),M.ctorParameters=function(){return[{type:b.kb}]};var q=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(i,e);var c=o(i);function i(t,e,n,r,o){var d,f;return l(this,i),(f=c.call(this,r,o)).dataService=t,f.modalService=e,f.notificationService=n,f.liveUpdate=new h.f(!0),f.hideSettled=new h.f(!0),f.queueFilter=new h.f("all"),s((d=a(f),u(i.prototype)),"setQueryFn",d).call(d,(function(){var t;return(t=f.dataService.settings).getAllJobs.apply(t,arguments)}),(function(t){return t.jobs}),(function(t,e){var c="all"===f.queueFilter.value?null:{queueName:{eq:f.queueFilter.value}},n=f.hideSettled.value;return{options:{skip:t,take:e,filter:Object.assign(Object.assign({},c),n?{isSettled:{eq:!1}}:{}),sort:{createdAt:b.Ob.DESC}}}})),f}return n(i,[{key:"ngOnInit",value:function(){var e=this;s(u(i.prototype),"ngOnInit",this).call(this),Object(p.a)(5e3,2e3).pipe(Object(m.a)(this.destroy$),Object(y.a)((function(){return e.liveUpdate.value}))).subscribe((function(){e.refresh()})),this.queues$=this.dataService.settings.getJobQueues().mapStream((function(t){return t.jobQueues})).pipe(Object(g.a)((function(e){return[{name:"all",running:!0}].concat(t(e))})))}},{key:"hasResult",value:function(t){var e=t.result;return null!=e&&("object"!=typeof e||Object.keys(e).length>0)}},{key:"cancelJob",value:function(t){var e=this;this.dataService.settings.cancelJob(t).subscribe((function(){return e.refresh()}))}}]),i}(b.x);q.\u0275fac=function(t){return new(t||q)(d.cc(b.L),d.cc(b.Db),d.cc(b.Eb),d.cc(f.e),d.cc(f.a))},q.\u0275cmp=d.Wb({type:q,selectors:[["vdr-job-list"]],features:[d.Ob],decls:41,vars:45,consts:[["type","checkbox","clrCheckbox","","name","live-update",3,"formControl"],["type","checkbox","clrCheckbox","","name","hide-settled",3,"formControl","change"],["bindValue","name",3,"addTag","items","hideSelected","multiple","markFirst","clearable","searchable","formControl","change"],["ng-label-tmp","","ng-option-tmp",""],["locationId","job-list"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[4,"ngIf","ngIfElse"],["others",""],[3,"colorFrom"],[1,"left","align-middle"],[3,"entity"],[4,"ngIf"],[3,"job"],[1,"right","align-middle"],["vdrDropdownTrigger","",1,"btn","btn-link","btn-icon",3,"title"],["shape","details"],[1,"result-detail"],[3,"value"],["vdrDropdownTrigger","",1,"btn","btn-link","btn-sm","details-button"],["shape","exclamation-circle"],["vdrDropdownTrigger","",1,"icon-button"],["shape","ellipsis-vertical"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"disabled","click"],["shape","ban",1,"is-danger"]],template:function(t,e){1&t&&(d.ic(0,"vdr-action-bar"),d.ic(1,"vdr-ab-left"),d.ic(2,"clr-checkbox-container"),d.ic(3,"clr-checkbox-wrapper"),d.dc(4,"input",0),d.ic(5,"label"),d.Wc(6),d.sc(7,"translate"),d.hc(),d.hc(),d.ic(8,"clr-checkbox-wrapper"),d.ic(9,"input",1),d.pc("change",(function(){return e.refresh()})),d.hc(),d.ic(10,"label"),d.Wc(11),d.sc(12,"translate"),d.hc(),d.hc(),d.hc(),d.hc(),d.ic(13,"vdr-ab-right"),d.ic(14,"ng-select",2),d.pc("change",(function(){return e.refresh()})),d.sc(15,"async"),d.Uc(16,U,3,2,"ng-template",3),d.hc(),d.dc(17,"vdr-action-bar-items",4),d.hc(),d.hc(),d.ic(18,"vdr-data-table",5),d.pc("pageChange",(function(t){return e.setPageNumber(t)}))("itemsPerPageChange",(function(t){return e.setItemsPerPage(t)})),d.sc(19,"async"),d.sc(20,"async"),d.sc(21,"async"),d.sc(22,"async"),d.dc(23,"vdr-dt-column"),d.ic(24,"vdr-dt-column"),d.Wc(25),d.sc(26,"translate"),d.hc(),d.ic(27,"vdr-dt-column"),d.Wc(28),d.sc(29,"translate"),d.hc(),d.ic(30,"vdr-dt-column"),d.Wc(31),d.sc(32,"translate"),d.hc(),d.ic(33,"vdr-dt-column"),d.Wc(34),d.sc(35,"translate"),d.hc(),d.ic(36,"vdr-dt-column"),d.Wc(37),d.sc(38,"translate"),d.hc(),d.dc(39,"vdr-dt-column"),d.Uc(40,F,19,14,"ng-template"),d.hc()),2&t&&(d.Rb(4),d.yc("formControl",e.liveUpdate),d.Rb(2),d.Xc(d.tc(7,21,"common.live-update")),d.Rb(3),d.yc("formControl",e.hideSettled),d.Rb(2),d.Xc(d.tc(12,23,"system.hide-settled-jobs")),d.Rb(3),d.yc("addTag",!1)("items",d.tc(15,25,e.queues$))("hideSelected",!0)("multiple",!1)("markFirst",!1)("clearable",!1)("searchable",!1)("formControl",e.queueFilter),d.Rb(4),d.yc("items",d.tc(19,27,e.items$))("itemsPerPage",d.tc(20,29,e.itemsPerPage$))("totalItems",d.tc(21,31,e.totalItems$))("currentPage",d.tc(22,33,e.currentPage$)),d.Rb(7),d.Xc(d.tc(26,35,"system.job-queue-name")),d.Rb(3),d.Xc(d.tc(29,37,"common.created-at")),d.Rb(3),d.Xc(d.tc(32,39,"system.job-state")),d.Rb(3),d.Xc(d.tc(35,41,"system.job-duration")),d.Rb(3),d.Xc(d.tc(38,43,"system.job-result")))},directives:function(){return[b.c,b.e,j.j,j.k,b.fb,h.a,j.i,h.p,h.g,j.u,b.f,k.a,k.e,k.d,b.d,b.N,b.M,R.o,b.C,b.bb,L,b.T,b.W,j.o,b.V,b.Fb,b.U]},pipes:function(){return[w.d,R.b,b.Tb,b.X,b.jb]},styles:[".result-detail[_ngcontent-%COMP%]{margin:0 12px}"],changeDetection:0}),q.ctorParameters=function(){return[{type:b.L},{type:b.Db},{type:b.Eb},{type:f.e},{type:f.a}]};var L=function(){function t(){l(this,t)}return n(t,[{key:"iconShape",get:function(){switch(this.job.state){case b.ub.COMPLETED:return"check-circle";case b.ub.FAILED:return"exclamation-circle";case b.ub.CANCELLED:return"ban";case b.ub.PENDING:case b.ub.RETRYING:return"hourglass";case b.ub.RUNNING:return"sync"}}},{key:"colorType",get:function(){switch(this.job.state){case b.ub.COMPLETED:return"success";case b.ub.FAILED:case b.ub.CANCELLED:return"error";case b.ub.PENDING:case b.ub.RETRYING:return"";case b.ub.RUNNING:return"warning"}}}]),t}();L.\u0275fac=function(t){return new(t||L)},L.\u0275cmp=d.Wb({type:L,selectors:[["vdr-job-state-label"]],inputs:{job:"job"},decls:5,vars:6,consts:[[3,"colorType"],["class","progress",4,"ngIf"],[1,"progress"]],template:function(t,e){1&t&&(d.ic(0,"vdr-chip",0),d.dc(1,"clr-icon"),d.Wc(2),d.sc(3,"titlecase"),d.Uc(4,_,3,3,"span",1),d.hc()),2&t&&(d.yc("colorType",e.colorType),d.Rb(1),d.Sb("shape",e.iconShape),d.Rb(1),d.Yc(" ",d.tc(3,4,e.job.state)," "),d.Rb(2),d.yc("ngIf","RUNNING"===e.job.state))},directives:[b.C,j.o,R.o],pipes:[R.y,R.v],styles:[".progress[_ngcontent-%COMP%]{margin-left:3px}clr-icon[_ngcontent-%COMP%]{min-width:12px}"],changeDetection:0}),L.propDecorators={job:[{type:d.D}]};var X={breadcrumb:Object(v.a)("breadcrumb.job-queue")},$={breadcrumb:Object(v.a)("breadcrumb.system-status")},J=[{path:"jobs",component:q,data:X},{path:"system-status",component:M,data:$}],G=function t(){l(this,t)};G.\u0275mod=d.ac({type:G}),G.\u0275inj=d.Zb({factory:function(t){return new(t||G)},imports:[[b.Nb,f.i.forChild(J)]]})}}])}();
//# sourceMappingURL=14-es5.f2f86cc639bddf5e76ea.js.map