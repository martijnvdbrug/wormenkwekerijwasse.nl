(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{up3x:function(o,e,t){"use strict";t.r(e),t.d(e,"WebhookModule",(function(){return d}));var r=t("sEIs"),i=t("ixhn"),c=t("D57K"),n=t("nIj0"),s=t("H5qd"),a=t.n(s);const h=a.a`
    mutation updateWebhook($url: String!) {
        updateWebhook(url: $url)
    }
`,u=a.a`
    query webhook {
        webhook
    }
`;var b=t("EM62");class l{constructor(o,e,t,r,i,c,s){this.formBuilder=r,this.dataService=i,this.changeDetector=c,this.notificationService=s,this.webhookForm=this.formBuilder.group({url:["https://example.com",n.C.required]})}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){yield this.dataService.query(u).mapStream(o=>o.webhook).subscribe(o=>this.webhookForm.controls.url.setValue(o))}))}save(){return Object(c.b)(this,void 0,void 0,(function*(){console.log("SAVEDDD",this.webhookForm.value.url);try{if(this.webhookForm.dirty){const o=this.webhookForm.value;yield this.dataService.mutate(h,{url:o.url}).toPromise()}this.webhookForm.markAsPristine(),this.changeDetector.markForCheck(),this.notificationService.success("common.notify-update-success",{entity:"Webhook"})}catch(o){this.notificationService.error("common.notify-update-error",{entity:"Webhook"})}}))}}l.\u0275fac=function(o){return new(o||l)(b.cc(r.a),b.cc(r.e),b.cc(i.Mb),b.cc(n.e),b.cc(i.L),b.cc(b.k),b.cc(i.Eb))},l.\u0275cmp=b.Wb({type:l,selectors:[["greeter"]],decls:8,vars:2,consts:[[1,"clr-row"],[1,"clr-col"],[1,"form",3,"formGroup"],[1,"form-block"],["label","Webhook url","for","url"],["id","url","type","text","formControlName","url"],[1,"btn","btn-primary",3,"disabled","click"]],template:function(o,e){1&o&&(b.ic(0,"div",0),b.ic(1,"div",1),b.ic(2,"form",2),b.ic(3,"section",3),b.ic(4,"vdr-form-field",4),b.dc(5,"input",5),b.hc(),b.ic(6,"button",6),b.pc("click",(function(){return e.save()})),b.Wc(7," Save "),b.hc(),b.hc(),b.hc(),b.hc(),b.hc()),2&o&&(b.Rb(2),b.yc("formGroup",e.webhookForm),b.Rb(4),b.yc("disabled",e.webhookForm.invalid||e.webhookForm.pristine))},directives:[n.E,n.q,n.j,i.eb,i.fb,n.b,n.p,n.h],encapsulation:2});class d{}d.\u0275mod=b.ac({type:d}),d.\u0275inj=b.Zb({factory:function(o){return new(o||d)},providers:[Object(i.Wb)({id:"webhook",label:"Webhook",routerLink:["/extensions/webhook"],icon:"cursor-hand-open"},"settings")],imports:[[i.Nb,r.i.forChild([{path:"",pathMatch:"full",component:l,data:{breadcrumb:"Webhook"}}])]]})}}]);
//# sourceMappingURL=6-es2015.721af52dac7292f822db.js.map