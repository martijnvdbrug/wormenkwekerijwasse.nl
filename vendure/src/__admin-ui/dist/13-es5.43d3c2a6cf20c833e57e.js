!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,c=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(d){c=!0,i=d}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return n}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"42hq":function(n,r,i){"use strict";i.r(r),i.d(r,"DEFAULT_DASHBOARD_WIDGET_LAYOUT",(function(){return N})),i.d(r,"DEFAULT_WIDGETS",(function(){return rt})),i.d(r,"DashboardComponent",(function(){return V})),i.d(r,"DashboardModule",(function(){return ct})),i.d(r,"DashboardWidgetComponent",(function(){return z})),i.d(r,"LatestOrdersWidgetComponent",(function(){return E})),i.d(r,"LatestOrdersWidgetModule",(function(){return q})),i.d(r,"OrderSummaryWidgetComponent",(function(){return X})),i.d(r,"OrderSummaryWidgetModule",(function(){return Z})),i.d(r,"TestWidgetComponent",(function(){return G})),i.d(r,"TestWidgetModule",(function(){return H})),i.d(r,"WelcomeWidgetComponent",(function(){return J})),i.d(r,"WelcomeWidgetModule",(function(){return K})),i.d(r,"dashboardRoutes",(function(){return B})),i.d(r,"\u02750",(function(){return Q})),i.d(r,"\u02751",(function(){return tt})),i.d(r,"\u02752",(function(){return et})),i.d(r,"\u02753",(function(){return nt}));var a=i("EM62"),d=i("ixhn"),s=i("hG4v"),u=i("YtkY"),l=i("8j5Y"),f=i("Ohay"),h=i("wqq/"),g=i("TLy2"),p=i("D57K"),b=i("sEIs"),m=i("OxKu"),v=i("BQ33"),y=i.n(v),w=i("C05f"),O=i("Kej3"),k=i("2kYt"),C=i("oqI+"),W=i("s2Ay");function D(t,e){if(1&t){var n=a.jc();a.ic(0,"button",7),a.pc("click",(function(){a.Lc(n);var t=e.$implicit;return a.rc().addWidget(t)})),a.Wc(1),a.hc()}if(2&t){var r=e.$implicit;a.Rb(1),a.Yc(" ",r," ")}}var R=function(t){return{width:t}};function L(t,e){if(1&t){var n=a.jc();a.ic(0,"button",22),a.pc("click",(function(){a.Lc(n);var t=e.$implicit,r=a.rc(2).$implicit;return a.rc(2).setWidgetWidth(r,t)})),a.Wc(1),a.sc(2,"translate"),a.hc()}if(2&t){var r=e.$implicit,c=a.rc(2).$implicit;a.yc("disabled",r===c.width),a.Rb(1),a.Yc(" ",a.uc(2,2,"dashboard.widget-width",a.Cc(5,R,r))," ")}}function S(t,e){if(1&t){var n=a.jc();a.ic(0,"vdr-dashboard-widget",12),a.ic(1,"div",13),a.ic(2,"div",14),a.dc(3,"clr-icon",15),a.hc(),a.ic(4,"vdr-dropdown"),a.ic(5,"button",16),a.dc(6,"clr-icon",17),a.hc(),a.ic(7,"vdr-dropdown-menu",3),a.ic(8,"h4",18),a.Wc(9),a.sc(10,"translate"),a.hc(),a.Uc(11,L,3,7,"button",19),a.dc(12,"div",20),a.ic(13,"button",7),a.pc("click",(function(){a.Lc(n);var t=a.rc().$implicit;return a.rc(2).removeWidget(t)})),a.dc(14,"clr-icon",21),a.Wc(15),a.sc(16,"translate"),a.hc(),a.hc(),a.hc(),a.hc(),a.hc()}if(2&t){var r=a.rc().$implicit,c=a.rc(2);a.yc("widgetConfig",r.config),a.Rb(9),a.Xc(a.tc(10,4,"dashboard.widget-resize")),a.Rb(2),a.yc("ngForOf",c.getSupportedWidths(r.config)),a.Rb(4),a.Yc(" ",a.tc(16,6,"dashboard.remove-widget")," ")}}function M(t,e){if(1&t&&(a.ic(0,"div",10),a.Uc(1,S,17,8,"vdr-dashboard-widget",11),a.hc()),2&t){var n=e.$implicit,r=a.rc(2);a.yc("ngClass",r.getClassForWidth(n.width))("cdkDragData",n),a.Rb(1),a.yc("vdrIfPermissions",n.config.requiresPermissions||null)}}var I=function(t){return{index:t}};function P(t,e){if(1&t){var n=a.jc();a.ic(0,"div",8),a.pc("cdkDropListDropped",(function(t){return a.Lc(n),a.rc().drop(t)})),a.Uc(1,M,2,3,"div",9),a.hc()}if(2&t){var r=e.$implicit,c=e.index,i=a.rc();a.yc("cdkDropListData",a.Cc(3,I,c)),a.Rb(1),a.yc("ngForOf",r)("ngForTrackBy",i.trackRowItem)}}var j=["portal"];function x(t,e){if(1&t&&(a.gc(0),a.Wc(1),a.sc(2,"translate"),a.fc()),2&t){var n=e.ngIf;a.Rb(1),a.Xc(a.tc(2,1,n))}}function _(t,e){}var $=function(t){return["/orders/",t]};function F(t,e){if(1&t&&(a.ic(0,"td",1),a.Wc(1),a.dc(2,"vdr-order-state-label",2),a.hc(),a.ic(3,"td",1),a.dc(4,"vdr-customer-label",3),a.hc(),a.ic(5,"td",1),a.Wc(6),a.sc(7,"localeCurrency"),a.hc(),a.ic(8,"td",1),a.Wc(9),a.sc(10,"timeAgo"),a.hc(),a.ic(11,"td",4),a.dc(12,"vdr-table-row-action",5),a.sc(13,"translate"),a.hc()),2&t){var n=e.item;a.Rb(1),a.Yc(" ",n.code," "),a.Rb(1),a.yc("state",n.state),a.Rb(2),a.yc("customer",n.customer),a.Rb(2),a.Xc(a.uc(7,7,n.total,n.currencyCode)),a.Rb(3),a.Xc(a.tc(10,10,n.orderPlacedAt)),a.Rb(3),a.yc("label",a.tc(13,12,"common.open"))("linkTo",a.Cc(14,$,n.id))}}function A(t,e){if(1&t){var n=a.jc();a.ic(0,"div",7),a.ic(1,"button",8),a.pc("click",(function(){a.Lc(n);var t=a.rc();return t.selection$.next({timeframe:"day",date:t.today})})),a.Wc(2),a.sc(3,"translate"),a.hc(),a.ic(4,"button",8),a.pc("click",(function(){a.Lc(n);var t=a.rc();return t.selection$.next({timeframe:"day",date:t.yesterday})})),a.Wc(5),a.sc(6,"translate"),a.hc(),a.ic(7,"button",8),a.pc("click",(function(){return a.Lc(n),a.rc().selection$.next({timeframe:"week"})})),a.Wc(8),a.sc(9,"translate"),a.hc(),a.ic(10,"button",8),a.pc("click",(function(){return a.Lc(n),a.rc().selection$.next({timeframe:"month"})})),a.Wc(11),a.sc(12,"translate"),a.hc(),a.hc()}if(2&t){var r=e.ngIf,c=a.rc();a.Rb(1),a.Ub("btn-primary",r.date===c.today),a.Rb(1),a.Yc(" ",a.tc(3,12,"dashboard.today")," "),a.Rb(2),a.Ub("btn-primary",r.date===c.yesterday),a.Rb(1),a.Yc(" ",a.tc(6,14,"dashboard.yesterday")," "),a.Rb(2),a.Ub("btn-primary","week"===r.timeframe),a.Rb(1),a.Yc(" ",a.tc(9,16,"dashboard.thisWeek")," "),a.Rb(2),a.Ub("btn-primary","month"===r.timeframe),a.Rb(1),a.Yc(" ",a.tc(12,18,"dashboard.thisMonth")," ")}}function U(t,e){if(1&t&&(a.ic(0,"div",9),a.Wc(1),a.sc(2,"localeDate"),a.sc(3,"localeDate"),a.hc()),2&t){var n=e.ngIf;a.Rb(1),a.Zc(" ",a.tc(2,2,n.start)," - ",a.tc(3,4,n.end)," ")}}function T(t,e){if(1&t&&(a.ic(0,"p",4),a.Wc(1),a.hc()),2&t){var n=a.rc(2);a.Rb(1),a.Zc(" ",n.hideVendureBranding?"":"Vendure"," ",n.hideVersion?"":"Admin UI v"+n.version," ")}}function Y(t,e){if(1&t&&(a.ic(0,"div"),a.ic(1,"h4",3),a.Wc(2),a.dc(3,"br"),a.ic(4,"small",4),a.Wc(5),a.sc(6,"timeAgo"),a.hc(),a.hc(),a.Uc(7,T,2,2,"p",5),a.hc()),2&t){var n=e.ngIf,r=a.rc();a.Rb(2),a.Zc(" Welcome, ",n.firstName," ",n.lastName,""),a.Rb(3),a.Yc("Last login: ",a.tc(6,4,n.user.lastLogin),""),a.Rb(2),a.yc("ngIf",!r.hideVendureBranding||!r.hideVersion)}}var V=function(){function t(e,n,r,i){c(this,t),this.dashboardWidgetService=e,this.localStorageService=n,this.changedDetectorRef=r,this.dataService=i,this.deletionMarker="__delete__"}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.availableWidgetIds$=this.dataService.client.userStatus().stream$.pipe(Object(u.a)((function(t){return t.userStatus.permissions})),Object(u.a)((function(e){return t.dashboardWidgetService.getAvailableIds(e)})),Object(l.a)((function(e){return t.widgetLayout=t.initLayout(e)})))}},{key:"getClassForWidth",value:function(t){switch(t){case 3:return"clr-col-12 clr-col-sm-6 clr-col-lg-3";case 4:return"clr-col-12 clr-col-sm-6 clr-col-lg-4";case 6:return"clr-col-12 clr-col-lg-6";case 8:return"clr-col-12 clr-col-lg-8";case 12:return"clr-col-12";default:Object(s.assertNever)(t)}}},{key:"getSupportedWidths",value:function(t){return t.supportedWidths||[3,4,6,8,12]}},{key:"setWidgetWidth",value:function(t,e){t.width=e,this.recalculateLayout()}},{key:"trackRow",value:function(t,e){return e.map((function(t){return"".concat(t.id,":").concat(t.width)})).join("|")}},{key:"trackRowItem",value:function(t,e){return e.config}},{key:"addWidget",value:function(t){var e,n=this.dashboardWidgetService.getWidgetById(t);if(n){var r,c={id:t,config:n,width:this.getSupportedWidths(n)[0]};this.widgetLayout&&this.widgetLayout.length?r=this.widgetLayout[this.widgetLayout.length-1]:(r=[],null===(e=this.widgetLayout)||void 0===e||e.push(r)),r.push(c),this.recalculateLayout()}}},{key:"removeWidget",value:function(t){t.id=this.deletionMarker,this.recalculateLayout()}},{key:"drop",value:function(t){var e=t.currentIndex,n=t.previousIndex,r=t.previousContainer,c=t.container;if((n!==e||r.data.index!==c.data.index)&&this.widgetLayout){var i=this.widgetLayout[r.data.index],o=this.widgetLayout[c.data.index];i.splice(n,1),o.splice(e,0,t.item.data),this.recalculateLayout()}}},{key:"initLayout",value:function(t){var e,n=this.localStorageService.get("dashboardWidgetLayout");return n&&(e=n.filter((function(e){return t.includes(e.id)}))),this.dashboardWidgetService.getWidgetLayout(e)}},{key:"recalculateLayout",value:function(){var t=this;if(this.widgetLayout){var n=this.widgetLayout.reduce((function(t,n){return[].concat(e(t),e(n))}),[]).filter((function(e){return e.id!==t.deletionMarker})).map((function(t){return{id:t.id,width:t.width}}));this.widgetLayout=this.dashboardWidgetService.getWidgetLayout(n),this.localStorageService.set("dashboardWidgetLayout",n),setTimeout((function(){return t.changedDetectorRef.markForCheck()}))}}}]),t}();V.\u0275fac=function(t){return new(t||V)(a.cc(d.L),a.cc(d.zb),a.cc(a.k),a.cc(d.M))},V.\u0275cmp=a.Wb({type:V,selectors:[["vdr-dashboard"]],decls:11,vars:8,consts:[[1,"widget-header"],["vdrDropdownTrigger","",1,"btn","btn-secondary","btn-sm"],["shape","plus"],["vdrPosition","bottom-right"],["class","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["cdkDropListGroup",""],["class","clr-row dashboard-row","cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf","ngForTrackBy"],["vdrDropdownItem","",1,"button",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"clr-row","dashboard-row",3,"cdkDropListData","cdkDropListDropped"],["class","dashboard-item","cdkDrag","",3,"ngClass","cdkDragData",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"dashboard-item",3,"ngClass","cdkDragData"],[3,"widgetConfig",4,"vdrIfPermissions"],[3,"widgetConfig"],[1,"flex"],["cdkDragHandle","",1,"drag-handle"],["shape","drag-handle","size","24"],["vdrDropdownTrigger","",1,"icon-button"],["shape","ellipsis-vertical"],[1,"dropdown-header"],["class","button","vdrDropdownItem","",3,"disabled","click",4,"ngFor","ngForOf"],["role","separator",1,"dropdown-divider"],["shape","trash",1,"is-danger"],["vdrDropdownItem","",1,"button",3,"disabled","click"]],template:function(t,e){1&t&&(a.ic(0,"div",0),a.ic(1,"vdr-dropdown"),a.ic(2,"button",1),a.dc(3,"clr-icon",2),a.Wc(4),a.sc(5,"translate"),a.hc(),a.ic(6,"vdr-dropdown-menu",3),a.Uc(7,D,2,1,"button",4),a.sc(8,"async"),a.hc(),a.hc(),a.hc(),a.ic(9,"div",5),a.Uc(10,P,2,5,"div",6),a.hc()),2&t&&(a.Rb(4),a.Yc(" ",a.tc(5,4,"dashboard.add-widget")," "),a.Rb(3),a.yc("ngForOf",a.tc(8,6,e.availableWidgetIds$)),a.Rb(3),a.yc("ngForOf",e.widgetLayout)("ngForTrackBy",e.trackRow))},directives:function(){return[d.U,d.X,O.o,d.W,k.o,C.d,O.l,d.V,C.c,C.a,k.n,d.sb,z,C.b]},pipes:function(){return[W.d,k.b]},styles:[".widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;line-height:1em;margin:24px}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:4px;box-sizing:border-box}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{border-width:1;margin-bottom:6px;padding:0;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:1px dashed var(--color-component-border-200);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0}),V.ctorParameters=function(){return[{type:d.L},{type:d.zb},{type:a.k},{type:d.M}]};var z=function(){function t(e){c(this,t),this.componentFactoryResolver=e}return o(t,[{key:"ngAfterViewInit",value:function(){this.loadWidget()}},{key:"loadWidget",value:function(){return Object(p.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=this.widgetConfig.loadComponent())instanceof Promise)){t.next=7;break}return t.next=4,e;case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=e;case 8:n=t.t0,this.componentRef=this.portal.createComponent(this.componentFactoryResolver.resolveComponentFactory(n)),this.componentRef.changeDetectorRef.markForCheck();case 10:case"end":return t.stop()}}),t,this)})))}},{key:"ngOnDestroy",value:function(){this.componentRef&&this.componentRef.destroy()}}]),t}();z.\u0275fac=function(t){return new(t||z)(a.cc(a.n))},z.\u0275cmp=a.Wb({type:z,selectors:[["vdr-dashboard-widget"]],viewQuery:function(t,e){var n;1&t&&a.bd(j,!0,a.gb),2&t&&a.Hc(n=a.qc())&&(e.portal=n.first)},inputs:{widgetConfig:"widgetConfig"},ngContentSelectors:["*"],decls:9,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"title"],[4,"ngIf"],[1,"controls"],[1,"card-block"],["portal",""]],template:function(t,e){1&t&&(a.xc(),a.ic(0,"div",0),a.ic(1,"div",1),a.ic(2,"div",2),a.Uc(3,x,3,3,"ng-container",3),a.hc(),a.ic(4,"div",4),a.wc(5),a.hc(),a.hc(),a.ic(6,"div",5),a.Uc(7,_,0,0,"ng-template",null,6,a.Vc),a.hc(),a.hc()),2&t&&(a.Rb(3),a.yc("ngIf",e.widgetConfig.title))},directives:[k.p],pipes:[W.d],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),z.ctorParameters=function(){return[{type:a.n}]},z.propDecorators={widgetConfig:[{type:a.D}],portal:[{type:a.eb,args:["portal",{read:a.gb}]}]};var B=[{path:"",component:V,pathMatch:"full"}],E=function(){function t(e){c(this,t),this.dataService=e}return o(t,[{key:"ngOnInit",value:function(){this.latestOrders$=this.dataService.order.getOrders({take:10,filter:{active:{eq:!1}},sort:{orderPlacedAt:d.Pb.DESC}}).refetchOnChannelChange().mapStream((function(t){return t.orders.items}))}}]),t}();E.\u0275fac=function(t){return new(t||E)(a.cc(d.M))},E.\u0275cmp=a.Wb({type:E,selectors:[["vdr-latest-orders-widget"]],decls:3,vars:3,consts:[[3,"items"],[1,"left","align-middle"],[3,"state"],[3,"customer"],[1,"right","align-middle"],["iconShape","shopping-cart",3,"label","linkTo"]],template:function(t,e){1&t&&(a.ic(0,"vdr-data-table",0),a.sc(1,"async"),a.Uc(2,F,14,16,"ng-template"),a.hc()),2&t&&a.yc("items",a.tc(1,1,e.latestOrders$))},directives:[d.O,d.Hb,d.K,d.Tb],pipes:[k.b,d.Bb,d.Ub,W.d],styles:["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}"],changeDetection:0}),E.ctorParameters=function(){return[{type:d.M}]};var q=function t(){c(this,t)};q.\u0275mod=a.ac({type:q}),q.\u0275inj=a.Zb({factory:function(t){return new(t||q)},imports:[[d.F,d.Ob]]});var X=function(){function t(e){c(this,t),this.dataService=e,this.today=new Date,this.yesterday=new Date((new Date).setDate(this.today.getDate()-1)),this.selection$=new w.a({timeframe:"day",date:this.today})}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.dateRange$=this.selection$.pipe(Object(f.a)(),Object(u.a)((function(t){return{start:y()(t.date).startOf(t.timeframe).toDate(),end:y()(t.date).endOf(t.timeframe).toDate()}})),Object(h.a)(1));var e=this.dateRange$.pipe(Object(g.a)((function(e){var n=e.start,r=e.end;return t.dataService.order.getOrderSummary(n,r).refetchOnChannelChange().mapStream((function(t){return t.orders}))})),Object(h.a)(1));this.totalOrderCount$=e.pipe(Object(u.a)((function(t){return t.totalItems}))),this.totalOrderValue$=e.pipe(Object(u.a)((function(t){return t.items.reduce((function(t,e){return t+e.total}),0)/100}))),this.currencyCode$=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream((function(t){return t.activeChannel.currencyCode||void 0}))}}]),t}();X.\u0275fac=function(t){return new(t||X)(a.cc(d.M))},X.\u0275cmp=a.Wb({type:X,selectors:[["vdr-order-summary-widget"]],decls:22,vars:23,consts:[[1,"stats"],[1,"stat"],[1,"stat-figure"],[1,"stat-label"],[1,"footer"],["class","btn-group btn-outline-primary btn-sm",4,"ngIf"],["class","date-range p5",4,"ngIf"],[1,"btn-group","btn-outline-primary","btn-sm"],[1,"btn",3,"click"],[1,"date-range","p5"]],template:function(t,e){1&t&&(a.ic(0,"div",0),a.ic(1,"div",1),a.ic(2,"div",2),a.Wc(3),a.sc(4,"async"),a.hc(),a.ic(5,"div",3),a.Wc(6),a.sc(7,"translate"),a.hc(),a.hc(),a.ic(8,"div",1),a.ic(9,"div",2),a.Wc(10),a.sc(11,"currency"),a.sc(12,"async"),a.sc(13,"async"),a.hc(),a.ic(14,"div",3),a.Wc(15),a.sc(16,"translate"),a.hc(),a.hc(),a.hc(),a.ic(17,"div",4),a.Uc(18,A,13,20,"div",5),a.sc(19,"async"),a.Uc(20,U,4,6,"div",6),a.sc(21,"async"),a.hc()),2&t&&(a.Rb(3),a.Xc(a.tc(4,6,e.totalOrderCount$)),a.Rb(3),a.Xc(a.tc(7,8,"dashboard.total-orders")),a.Rb(4),a.Yc(" ",a.uc(11,10,a.tc(12,13,e.totalOrderValue$),a.tc(13,15,e.currencyCode$)||void 0)," "),a.Rb(5),a.Xc(a.tc(16,17,"dashboard.total-order-value")),a.Rb(3),a.yc("ngIf",a.tc(19,19,e.selection$)),a.Rb(2),a.yc("ngIf",a.tc(21,21,e.dateRange$)))},directives:[k.p],pipes:[k.b,W.d,k.d,d.Cb],styles:[".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:0}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin-top:24px}@media screen and (min-width:768px){.footer[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0}),X.ctorParameters=function(){return[{type:d.M}]};var Z=function t(){c(this,t)};Z.\u0275mod=a.ac({type:Z}),Z.\u0275inj=a.Zb({factory:function(t){return new(t||Z)},imports:[[d.F]]});var G=function t(){c(this,t)};G.\u0275fac=function(t){return new(t||G)},G.\u0275cmp=a.Wb({type:G,selectors:[["vdr-test-widget"]],decls:2,vars:0,template:function(t,e){1&t&&(a.ic(0,"p"),a.Wc(1,"This is a test widget!"),a.hc())},styles:[""],changeDetection:0});var H=function t(){c(this,t)};H.\u0275mod=a.ac({type:H}),H.\u0275inj=a.Zb({factory:function(t){return new(t||H)}});var J=function(){function t(e){c(this,t),this.dataService=e,this.version=d.a,this.brand=Object(d.gc)().brand,this.hideVendureBranding=Object(d.gc)().hideVendureBranding,this.hideVersion=Object(d.gc)().hideVersion}return o(t,[{key:"ngOnInit",value:function(){this.administrator$=this.dataService.administrator.getActiveAdministrator().mapStream((function(t){return t.activeAdministrator||null}))}}]),t}();J.\u0275fac=function(t){return new(t||J)(a.cc(d.M))},J.\u0275cmp=a.Wb({type:J,selectors:[["vdr-welcome-widget"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"placeholder"],["shape","line-chart","size","128"],[1,"h4"],[1,"p5"],["class","p5",4,"ngIf"]],template:function(t,e){1&t&&(a.Uc(0,Y,8,6,"div",0),a.sc(1,"async"),a.ic(2,"div",1),a.dc(3,"clr-icon",2),a.hc()),2&t&&a.yc("ngIf",a.tc(1,1,e.administrator$))},directives:[k.p,O.o],pipes:[k.b,d.Ub],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],changeDetection:0}),J.ctorParameters=function(){return[{type:d.M}]};var K=function t(){c(this,t)};K.\u0275mod=a.ac({type:K}),K.\u0275inj=a.Zb({factory:function(t){return new(t||K)},imports:[[d.F]]});var N=[{id:"welcome",width:12},{id:"orderSummary",width:6},{id:"latestOrders",width:6}],Q=function(){return J},tt=function(){return X},et=function(){return E},nt=function(){return G},rt={welcome:{loadComponent:Q},orderSummary:{title:Object(m.a)("dashboard.orders-summary"),loadComponent:tt,requiresPermissions:[d.Jb.ReadOrder]},latestOrders:{title:Object(m.a)("dashboard.latest-orders"),loadComponent:et,supportedWidths:[6,8,12],requiresPermissions:[d.Jb.ReadOrder]},testWidget:{title:"Test Widget",loadComponent:nt}},ct=function e(n){c(this,e),Object.entries(rt).map((function(e){var r=t(e,2),c=r[0],i=r[1];return n.registerWidget(c,i)})),0===n.getDefaultLayout().length&&n.setDefaultLayout(N)};ct.\u0275mod=a.ac({type:ct}),ct.\u0275inj=a.Zb({factory:function(t){return new(t||ct)(a.mc(d.L))},imports:[[d.Ob,b.i.forChild(B)]]}),ct.ctorParameters=function(){return[{type:d.L}]}}}])}();
//# sourceMappingURL=13-es5.43d3c2a6cf20c833e57e.js.map