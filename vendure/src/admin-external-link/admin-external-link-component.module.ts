import {NgModule} from '@angular/core';
import {SharedModule} from '@vendure/admin-ui/core';
import {LinkComponent} from './link.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: LinkComponent,
            data: {breadcrumb: 'Comments'},
        }])
    ],
    declarations: [LinkComponent]
})
export class AdminExternalLinkComponentModule {
}