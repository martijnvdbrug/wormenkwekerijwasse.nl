(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"42hq":function(t,e,c){"use strict";c.r(e),c.d(e,"DEFAULT_DASHBOARD_WIDGET_LAYOUT",(function(){return G})),c.d(e,"DEFAULT_WIDGETS",(function(){return Q})),c.d(e,"DashboardComponent",(function(){return U})),c.d(e,"DashboardModule",(function(){return tt})),c.d(e,"DashboardWidgetComponent",(function(){return T})),c.d(e,"LatestOrdersWidgetComponent",(function(){return Y})),c.d(e,"LatestOrdersWidgetModule",(function(){return V})),c.d(e,"OrderSummaryWidgetComponent",(function(){return z})),c.d(e,"OrderSummaryWidgetModule",(function(){return B})),c.d(e,"TestWidgetComponent",(function(){return q})),c.d(e,"TestWidgetModule",(function(){return X})),c.d(e,"WelcomeWidgetComponent",(function(){return Z})),c.d(e,"WelcomeWidgetModule",(function(){return E})),c.d(e,"dashboardRoutes",(function(){return A})),c.d(e,"\u02750",(function(){return H})),c.d(e,"\u02751",(function(){return J})),c.d(e,"\u02752",(function(){return K})),c.d(e,"\u02753",(function(){return N}));var n=c("EM62"),r=c("ixhn"),i=c("hG4v"),o=c("YtkY"),a=c("8j5Y"),d=c("Ohay"),s=c("wqq/"),l=c("TLy2"),g=c("D57K"),h=c("sEIs"),u=c("OxKu"),p=c("BQ33"),b=c.n(p),m=c("C05f"),f=c("Kej3"),y=c("2kYt"),v=c("oqI+"),w=c("s2Ay");function O(t,e){if(1&t){const t=n.jc();n.ic(0,"button",7),n.pc("click",(function(){n.Lc(t);const c=e.$implicit;return n.rc().addWidget(c)})),n.Wc(1),n.hc()}if(2&t){const t=e.$implicit;n.Rb(1),n.Yc(" ",t," ")}}const C=function(t){return{width:t}};function W(t,e){if(1&t){const t=n.jc();n.ic(0,"button",22),n.pc("click",(function(){n.Lc(t);const c=e.$implicit,r=n.rc(2).$implicit;return n.rc(2).setWidgetWidth(r,c)})),n.Wc(1),n.sc(2,"translate"),n.hc()}if(2&t){const t=e.$implicit,c=n.rc(2).$implicit;n.yc("disabled",t===c.width),n.Rb(1),n.Yc(" ",n.uc(2,2,"dashboard.widget-width",n.Cc(5,C,t))," ")}}function D(t,e){if(1&t){const t=n.jc();n.ic(0,"vdr-dashboard-widget",12),n.ic(1,"div",13),n.ic(2,"div",14),n.dc(3,"clr-icon",15),n.hc(),n.ic(4,"vdr-dropdown"),n.ic(5,"button",16),n.dc(6,"clr-icon",17),n.hc(),n.ic(7,"vdr-dropdown-menu",3),n.ic(8,"h4",18),n.Wc(9),n.sc(10,"translate"),n.hc(),n.Uc(11,W,3,7,"button",19),n.dc(12,"div",20),n.ic(13,"button",7),n.pc("click",(function(){n.Lc(t);const e=n.rc().$implicit;return n.rc(2).removeWidget(e)})),n.dc(14,"clr-icon",21),n.Wc(15),n.sc(16,"translate"),n.hc(),n.hc(),n.hc(),n.hc(),n.hc()}if(2&t){const t=n.rc().$implicit,e=n.rc(2);n.yc("widgetConfig",t.config),n.Rb(9),n.Xc(n.tc(10,4,"dashboard.widget-resize")),n.Rb(2),n.yc("ngForOf",e.getSupportedWidths(t.config)),n.Rb(4),n.Yc(" ",n.tc(16,6,"dashboard.remove-widget")," ")}}function k(t,e){if(1&t&&(n.ic(0,"div",10),n.Uc(1,D,17,8,"vdr-dashboard-widget",11),n.hc()),2&t){const t=e.$implicit,c=n.rc(2);n.yc("ngClass",c.getClassForWidth(t.width))("cdkDragData",t),n.Rb(1),n.yc("vdrIfPermissions",t.config.requiresPermissions||null)}}const L=function(t){return{index:t}};function R(t,e){if(1&t){const t=n.jc();n.ic(0,"div",8),n.pc("cdkDropListDropped",(function(e){n.Lc(t);return n.rc().drop(e)})),n.Uc(1,k,2,3,"div",9),n.hc()}if(2&t){const t=e.$implicit,c=e.index,r=n.rc();n.yc("cdkDropListData",n.Cc(3,L,c)),n.Rb(1),n.yc("ngForOf",t)("ngForTrackBy",r.trackRowItem)}}const M=["portal"];function P(t,e){if(1&t&&(n.gc(0),n.Wc(1),n.sc(2,"translate"),n.fc()),2&t){const t=e.ngIf;n.Rb(1),n.Xc(n.tc(2,1,t))}}function I(t,e){}const S=function(t){return["/orders/",t]};function x(t,e){if(1&t&&(n.ic(0,"td",1),n.Wc(1),n.dc(2,"vdr-order-state-label",2),n.hc(),n.ic(3,"td",1),n.dc(4,"vdr-customer-label",3),n.hc(),n.ic(5,"td",1),n.Wc(6),n.sc(7,"localeCurrency"),n.hc(),n.ic(8,"td",1),n.Wc(9),n.sc(10,"timeAgo"),n.hc(),n.ic(11,"td",4),n.dc(12,"vdr-table-row-action",5),n.sc(13,"translate"),n.hc()),2&t){const t=e.item;n.Rb(1),n.Yc(" ",t.code," "),n.Rb(1),n.yc("state",t.state),n.Rb(2),n.yc("customer",t.customer),n.Rb(2),n.Xc(n.uc(7,7,t.total,t.currencyCode)),n.Rb(3),n.Xc(n.tc(10,10,t.orderPlacedAt)),n.Rb(3),n.yc("label",n.tc(13,12,"common.open"))("linkTo",n.Cc(14,S,t.id))}}function j(t,e){if(1&t){const t=n.jc();n.ic(0,"div",7),n.ic(1,"button",8),n.pc("click",(function(){n.Lc(t);const e=n.rc();return e.selection$.next({timeframe:"day",date:e.today})})),n.Wc(2),n.sc(3,"translate"),n.hc(),n.ic(4,"button",8),n.pc("click",(function(){n.Lc(t);const e=n.rc();return e.selection$.next({timeframe:"day",date:e.yesterday})})),n.Wc(5),n.sc(6,"translate"),n.hc(),n.ic(7,"button",8),n.pc("click",(function(){n.Lc(t);return n.rc().selection$.next({timeframe:"week"})})),n.Wc(8),n.sc(9,"translate"),n.hc(),n.ic(10,"button",8),n.pc("click",(function(){n.Lc(t);return n.rc().selection$.next({timeframe:"month"})})),n.Wc(11),n.sc(12,"translate"),n.hc(),n.hc()}if(2&t){const t=e.ngIf,c=n.rc();n.Rb(1),n.Ub("btn-primary",t.date===c.today),n.Rb(1),n.Yc(" ",n.tc(3,12,"dashboard.today")," "),n.Rb(2),n.Ub("btn-primary",t.date===c.yesterday),n.Rb(1),n.Yc(" ",n.tc(6,14,"dashboard.yesterday")," "),n.Rb(2),n.Ub("btn-primary","week"===t.timeframe),n.Rb(1),n.Yc(" ",n.tc(9,16,"dashboard.thisWeek")," "),n.Rb(2),n.Ub("btn-primary","month"===t.timeframe),n.Rb(1),n.Yc(" ",n.tc(12,18,"dashboard.thisMonth")," ")}}function $(t,e){if(1&t&&(n.ic(0,"div",9),n.Wc(1),n.sc(2,"localeDate"),n.sc(3,"localeDate"),n.hc()),2&t){const t=e.ngIf;n.Rb(1),n.Zc(" ",n.tc(2,2,t.start)," - ",n.tc(3,4,t.end)," ")}}function _(t,e){if(1&t&&(n.ic(0,"p",4),n.Wc(1),n.hc()),2&t){const t=n.rc(2);n.Rb(1),n.Zc(" ",t.hideVendureBranding?"":"Vendure"," ",t.hideVersion?"":"Admin UI v"+t.version," ")}}function F(t,e){if(1&t&&(n.ic(0,"div"),n.ic(1,"h4",3),n.Wc(2),n.dc(3,"br"),n.ic(4,"small",4),n.Wc(5),n.sc(6,"timeAgo"),n.hc(),n.hc(),n.Uc(7,_,2,2,"p",5),n.hc()),2&t){const t=e.ngIf,c=n.rc();n.Rb(2),n.Zc(" Welcome, ",t.firstName," ",t.lastName,""),n.Rb(3),n.Yc("Last login: ",n.tc(6,4,t.user.lastLogin),""),n.Rb(2),n.yc("ngIf",!c.hideVendureBranding||!c.hideVersion)}}class U{constructor(t,e,c,n){this.dashboardWidgetService=t,this.localStorageService=e,this.changedDetectorRef=c,this.dataService=n,this.deletionMarker="__delete__"}ngOnInit(){this.availableWidgetIds$=this.dataService.client.userStatus().stream$.pipe(Object(o.a)(({userStatus:t})=>t.permissions),Object(o.a)(t=>this.dashboardWidgetService.getAvailableIds(t)),Object(a.a)(t=>this.widgetLayout=this.initLayout(t)))}getClassForWidth(t){switch(t){case 3:return"clr-col-12 clr-col-sm-6 clr-col-lg-3";case 4:return"clr-col-12 clr-col-sm-6 clr-col-lg-4";case 6:return"clr-col-12 clr-col-lg-6";case 8:return"clr-col-12 clr-col-lg-8";case 12:return"clr-col-12";default:Object(i.assertNever)(t)}}getSupportedWidths(t){return t.supportedWidths||[3,4,6,8,12]}setWidgetWidth(t,e){t.width=e,this.recalculateLayout()}trackRow(t,e){return e.map(t=>`${t.id}:${t.width}`).join("|")}trackRowItem(t,e){return e.config}addWidget(t){var e;const c=this.dashboardWidgetService.getWidgetById(t);if(c){const n={id:t,config:c,width:this.getSupportedWidths(c)[0]};let r;this.widgetLayout&&this.widgetLayout.length?r=this.widgetLayout[this.widgetLayout.length-1]:(r=[],null===(e=this.widgetLayout)||void 0===e||e.push(r)),r.push(n),this.recalculateLayout()}}removeWidget(t){t.id=this.deletionMarker,this.recalculateLayout()}drop(t){const{currentIndex:e,previousIndex:c,previousContainer:n,container:r}=t;if((c!==e||n.data.index!==r.data.index)&&this.widgetLayout){const i=this.widgetLayout[n.data.index],o=this.widgetLayout[r.data.index];i.splice(c,1),o.splice(e,0,t.item.data),this.recalculateLayout()}}initLayout(t){const e=this.localStorageService.get("dashboardWidgetLayout");let c;return e&&(c=e.filter(e=>t.includes(e.id))),this.dashboardWidgetService.getWidgetLayout(c)}recalculateLayout(){if(this.widgetLayout){const t=this.widgetLayout.reduce((t,e)=>[...t,...e],[]).filter(t=>t.id!==this.deletionMarker).map(t=>({id:t.id,width:t.width}));this.widgetLayout=this.dashboardWidgetService.getWidgetLayout(t),this.localStorageService.set("dashboardWidgetLayout",t),setTimeout(()=>this.changedDetectorRef.markForCheck())}}}U.\u0275fac=function(t){return new(t||U)(n.cc(r.L),n.cc(r.zb),n.cc(n.k),n.cc(r.M))},U.\u0275cmp=n.Wb({type:U,selectors:[["vdr-dashboard"]],decls:11,vars:8,consts:[[1,"widget-header"],["vdrDropdownTrigger","",1,"btn","btn-secondary","btn-sm"],["shape","plus"],["vdrPosition","bottom-right"],["class","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["cdkDropListGroup",""],["class","clr-row dashboard-row","cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf","ngForTrackBy"],["vdrDropdownItem","",1,"button",3,"click"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"clr-row","dashboard-row",3,"cdkDropListData","cdkDropListDropped"],["class","dashboard-item","cdkDrag","",3,"ngClass","cdkDragData",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"dashboard-item",3,"ngClass","cdkDragData"],[3,"widgetConfig",4,"vdrIfPermissions"],[3,"widgetConfig"],[1,"flex"],["cdkDragHandle","",1,"drag-handle"],["shape","drag-handle","size","24"],["vdrDropdownTrigger","",1,"icon-button"],["shape","ellipsis-vertical"],[1,"dropdown-header"],["class","button","vdrDropdownItem","",3,"disabled","click",4,"ngFor","ngForOf"],["role","separator",1,"dropdown-divider"],["shape","trash",1,"is-danger"],["vdrDropdownItem","",1,"button",3,"disabled","click"]],template:function(t,e){1&t&&(n.ic(0,"div",0),n.ic(1,"vdr-dropdown"),n.ic(2,"button",1),n.dc(3,"clr-icon",2),n.Wc(4),n.sc(5,"translate"),n.hc(),n.ic(6,"vdr-dropdown-menu",3),n.Uc(7,O,2,1,"button",4),n.sc(8,"async"),n.hc(),n.hc(),n.hc(),n.ic(9,"div",5),n.Uc(10,R,2,5,"div",6),n.hc()),2&t&&(n.Rb(4),n.Yc(" ",n.tc(5,4,"dashboard.add-widget")," "),n.Rb(3),n.yc("ngForOf",n.tc(8,6,e.availableWidgetIds$)),n.Rb(3),n.yc("ngForOf",e.widgetLayout)("ngForTrackBy",e.trackRow))},directives:function(){return[r.U,r.X,f.o,r.W,y.o,v.d,f.l,r.V,v.c,v.a,y.n,r.sb,T,v.b]},pipes:function(){return[w.d,y.b]},styles:[".widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;line-height:1em;margin:24px}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.cdk-drag-preview[_ngcontent-%COMP%]{border-radius:4px;box-sizing:border-box}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{border-width:1;margin-bottom:6px;padding:0;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:1px dashed var(--color-component-border-200);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0}),U.ctorParameters=()=>[{type:r.L},{type:r.zb},{type:n.k},{type:r.M}];class T{constructor(t){this.componentFactoryResolver=t}ngAfterViewInit(){this.loadWidget()}loadWidget(){return Object(g.b)(this,void 0,void 0,(function*(){const t=this.widgetConfig.loadComponent(),e=t instanceof Promise?yield t:t;this.componentRef=this.portal.createComponent(this.componentFactoryResolver.resolveComponentFactory(e)),this.componentRef.changeDetectorRef.markForCheck()}))}ngOnDestroy(){this.componentRef&&this.componentRef.destroy()}}T.\u0275fac=function(t){return new(t||T)(n.cc(n.n))},T.\u0275cmp=n.Wb({type:T,selectors:[["vdr-dashboard-widget"]],viewQuery:function(t,e){var c;(1&t&&n.bd(M,!0,n.gb),2&t)&&(n.Hc(c=n.qc())&&(e.portal=c.first))},inputs:{widgetConfig:"widgetConfig"},ngContentSelectors:["*"],decls:9,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"title"],[4,"ngIf"],[1,"controls"],[1,"card-block"],["portal",""]],template:function(t,e){1&t&&(n.xc(),n.ic(0,"div",0),n.ic(1,"div",1),n.ic(2,"div",2),n.Uc(3,P,3,3,"ng-container",3),n.hc(),n.ic(4,"div",4),n.wc(5),n.hc(),n.hc(),n.ic(6,"div",5),n.Uc(7,I,0,0,"ng-template",null,6,n.Vc),n.hc(),n.hc()),2&t&&(n.Rb(3),n.yc("ngIf",e.widgetConfig.title))},directives:[y.p],pipes:[w.d],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),T.ctorParameters=()=>[{type:n.n}],T.propDecorators={widgetConfig:[{type:n.D}],portal:[{type:n.eb,args:["portal",{read:n.gb}]}]};const A=[{path:"",component:U,pathMatch:"full"}];class Y{constructor(t){this.dataService=t}ngOnInit(){this.latestOrders$=this.dataService.order.getOrders({take:10,filter:{active:{eq:!1}},sort:{orderPlacedAt:r.Pb.DESC}}).refetchOnChannelChange().mapStream(t=>t.orders.items)}}Y.\u0275fac=function(t){return new(t||Y)(n.cc(r.M))},Y.\u0275cmp=n.Wb({type:Y,selectors:[["vdr-latest-orders-widget"]],decls:3,vars:3,consts:[[3,"items"],[1,"left","align-middle"],[3,"state"],[3,"customer"],[1,"right","align-middle"],["iconShape","shopping-cart",3,"label","linkTo"]],template:function(t,e){1&t&&(n.ic(0,"vdr-data-table",0),n.sc(1,"async"),n.Uc(2,x,14,16,"ng-template"),n.hc()),2&t&&n.yc("items",n.tc(1,1,e.latestOrders$))},directives:[r.O,r.Hb,r.K,r.Tb],pipes:[y.b,r.Bb,r.Ub,w.d],styles:["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}"],changeDetection:0}),Y.ctorParameters=()=>[{type:r.M}];class V{}V.\u0275mod=n.ac({type:V}),V.\u0275inj=n.Zb({factory:function(t){return new(t||V)},imports:[[r.F,r.Ob]]});class z{constructor(t){this.dataService=t,this.today=new Date,this.yesterday=new Date((new Date).setDate(this.today.getDate()-1)),this.selection$=new m.a({timeframe:"day",date:this.today})}ngOnInit(){this.dateRange$=this.selection$.pipe(Object(d.a)(),Object(o.a)(t=>({start:b()(t.date).startOf(t.timeframe).toDate(),end:b()(t.date).endOf(t.timeframe).toDate()})),Object(s.a)(1));const t=this.dateRange$.pipe(Object(l.a)(({start:t,end:e})=>this.dataService.order.getOrderSummary(t,e).refetchOnChannelChange().mapStream(t=>t.orders)),Object(s.a)(1));this.totalOrderCount$=t.pipe(Object(o.a)(t=>t.totalItems)),this.totalOrderValue$=t.pipe(Object(o.a)(t=>t.items.reduce((t,e)=>t+e.total,0)/100)),this.currencyCode$=this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream(t=>t.activeChannel.currencyCode||void 0)}}z.\u0275fac=function(t){return new(t||z)(n.cc(r.M))},z.\u0275cmp=n.Wb({type:z,selectors:[["vdr-order-summary-widget"]],decls:22,vars:23,consts:[[1,"stats"],[1,"stat"],[1,"stat-figure"],[1,"stat-label"],[1,"footer"],["class","btn-group btn-outline-primary btn-sm",4,"ngIf"],["class","date-range p5",4,"ngIf"],[1,"btn-group","btn-outline-primary","btn-sm"],[1,"btn",3,"click"],[1,"date-range","p5"]],template:function(t,e){1&t&&(n.ic(0,"div",0),n.ic(1,"div",1),n.ic(2,"div",2),n.Wc(3),n.sc(4,"async"),n.hc(),n.ic(5,"div",3),n.Wc(6),n.sc(7,"translate"),n.hc(),n.hc(),n.ic(8,"div",1),n.ic(9,"div",2),n.Wc(10),n.sc(11,"currency"),n.sc(12,"async"),n.sc(13,"async"),n.hc(),n.ic(14,"div",3),n.Wc(15),n.sc(16,"translate"),n.hc(),n.hc(),n.hc(),n.ic(17,"div",4),n.Uc(18,j,13,20,"div",5),n.sc(19,"async"),n.Uc(20,$,4,6,"div",6),n.sc(21,"async"),n.hc()),2&t&&(n.Rb(3),n.Xc(n.tc(4,6,e.totalOrderCount$)),n.Rb(3),n.Xc(n.tc(7,8,"dashboard.total-orders")),n.Rb(4),n.Yc(" ",n.uc(11,10,n.tc(12,13,e.totalOrderValue$),n.tc(13,15,e.currencyCode$)||void 0)," "),n.Rb(5),n.Xc(n.tc(16,17,"dashboard.total-order-value")),n.Rb(3),n.yc("ngIf",n.tc(19,19,e.selection$)),n.Rb(2),n.yc("ngIf",n.tc(21,21,e.dateRange$)))},directives:[y.p],pipes:[y.b,w.d,y.d,r.Cb],styles:[".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:0}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin-top:24px}@media screen and (min-width:768px){.footer[_ngcontent-%COMP%]{flex-direction:row}}"],changeDetection:0}),z.ctorParameters=()=>[{type:r.M}];class B{}B.\u0275mod=n.ac({type:B}),B.\u0275inj=n.Zb({factory:function(t){return new(t||B)},imports:[[r.F]]});class q{}q.\u0275fac=function(t){return new(t||q)},q.\u0275cmp=n.Wb({type:q,selectors:[["vdr-test-widget"]],decls:2,vars:0,template:function(t,e){1&t&&(n.ic(0,"p"),n.Wc(1,"This is a test widget!"),n.hc())},styles:[""],changeDetection:0});class X{}X.\u0275mod=n.ac({type:X}),X.\u0275inj=n.Zb({factory:function(t){return new(t||X)}});class Z{constructor(t){this.dataService=t,this.version=r.a,this.brand=Object(r.gc)().brand,this.hideVendureBranding=Object(r.gc)().hideVendureBranding,this.hideVersion=Object(r.gc)().hideVersion}ngOnInit(){this.administrator$=this.dataService.administrator.getActiveAdministrator().mapStream(t=>t.activeAdministrator||null)}}Z.\u0275fac=function(t){return new(t||Z)(n.cc(r.M))},Z.\u0275cmp=n.Wb({type:Z,selectors:[["vdr-welcome-widget"]],decls:4,vars:3,consts:[[4,"ngIf"],[1,"placeholder"],["shape","line-chart","size","128"],[1,"h4"],[1,"p5"],["class","p5",4,"ngIf"]],template:function(t,e){1&t&&(n.Uc(0,F,8,6,"div",0),n.sc(1,"async"),n.ic(2,"div",1),n.dc(3,"clr-icon",2),n.hc()),2&t&&n.yc("ngIf",n.tc(1,1,e.administrator$))},directives:[y.p,f.o],pipes:[y.b,r.Ub],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],changeDetection:0}),Z.ctorParameters=()=>[{type:r.M}];class E{}E.\u0275mod=n.ac({type:E}),E.\u0275inj=n.Zb({factory:function(t){return new(t||E)},imports:[[r.F]]});const G=[{id:"welcome",width:12},{id:"orderSummary",width:6},{id:"latestOrders",width:6}],H=()=>Z,J=()=>z,K=()=>Y,N=()=>q,Q={welcome:{loadComponent:H},orderSummary:{title:Object(u.a)("dashboard.orders-summary"),loadComponent:J,requiresPermissions:[r.Jb.ReadOrder]},latestOrders:{title:Object(u.a)("dashboard.latest-orders"),loadComponent:K,supportedWidths:[6,8,12],requiresPermissions:[r.Jb.ReadOrder]},testWidget:{title:"Test Widget",loadComponent:N}};class tt{constructor(t){Object.entries(Q).map(([e,c])=>t.registerWidget(e,c)),0===t.getDefaultLayout().length&&t.setDefaultLayout(G)}}tt.\u0275mod=n.ac({type:tt}),tt.\u0275inj=n.Zb({factory:function(t){return new(t||tt)(n.mc(r.L))},imports:[[r.Ob,h.i.forChild(A)]]}),tt.ctorParameters=()=>[{type:r.L}]}}]);
//# sourceMappingURL=12-es2015.d8f8439dd93a4f0e7a95.js.map