import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@vendure/admin-ui/core';
import {BlockListComponent} from './block-list.component';
import {BlockDetailComponent} from './block-detail.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '',
            pathMatch: 'full',
            component: BlockListComponent,
            data: {breadcrumb: 'Content'},
        }, {
            path: 'create',
            pathMatch: 'full',
            component: BlockDetailComponent,
            data: {breadcrumb: 'Content'},
        }, {
            path: ':id',
            pathMatch: 'full',
            component: BlockDetailComponent,
            data: {breadcrumb: 'Content'},
        }]),
    ],
    declarations: [BlockListComponent, BlockDetailComponent],
})
export class SimpleCmsModule {
}