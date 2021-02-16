import {NgModule} from '@angular/core';
import {addNavMenuItem, SharedModule} from '@vendure/admin-ui/core';

@NgModule({
    imports: [SharedModule],
    providers: [
        addNavMenuItem({
                id: 'content',
                label: 'Content',
                icon: 'form',
                routerLink: ['/extensions/simple-cms/']
            },
            'catalog'),
    ]
})
export class SimpleCmsNavModule {
}