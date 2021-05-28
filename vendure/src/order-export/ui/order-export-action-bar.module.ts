import { NgModule } from '@angular/core';
import { SharedModule, addActionBarItem } from '@vendure/admin-ui/core';

@NgModule({
    imports: [SharedModule],
    providers: [
        addActionBarItem({
            id: 'order-export',
            label: 'Export',
            locationId: 'order-list',
            buttonStyle: 'outline',
            onClick: (event, ctx) => {
                event.preventDefault();
                const filters = ctx.route.snapshot.queryParams;
                if(!filters.states || filters.states.length === 0) {
                    ctx.notificationService.error(`Select order states to export`);
                }
                if (!filters.placedAtEnd) {
                    ctx.notificationService.error(`Select a date to export`);
                }
            }
        }),
    ],
})
export class OrderExportActionBarModule {}