import {NgModule} from '@angular/core';
import {addNavMenuItem, SharedModule} from '@vendure/admin-ui/core';

@NgModule({
    imports: [SharedModule],
    providers: [
        addNavMenuItem({
                id: 'comments',
                label: 'Comments',
                icon: 'form',
                routerLink: ['https://wormenkwekerijwasse.disqus.com/']
            },
            'marketing'),
    ]
})
export class AdminExternalLinkModule {
}