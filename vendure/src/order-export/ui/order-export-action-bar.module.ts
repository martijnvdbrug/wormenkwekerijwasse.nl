import {NgModule} from '@angular/core';
import {addActionBarItem, SharedModule} from '@vendure/admin-ui/core';
import gql from 'graphql-tag';

@NgModule({
    imports: [SharedModule],
    providers: [
        addActionBarItem({
            id: 'order-export',
            label: 'Export',
            locationId: 'order-list',
            buttonStyle: 'outline',
            routerLink: (route) => [window.location.search],
            onClick: async (event, ctx) => {
                const filters = ctx.route.snapshot.queryParams;
                if (!filters.states || filters.states.length === 0) {
                    ctx.notificationService.error(`Select order states to export`);
                }
                if (!filters.placedAtEnd || !filters.placedAtStart) {
                    ctx.notificationService.error(`Select a start and end date to export`);
                }
                const filter = {
                    placedAtEnd: filters.placedAtEnd,
                    placedAtStart: filters.placedAtStart,
                    states: filters.states
                };
                await ctx.dataService.query(gql`
                    query orderExport($filter: OrderExportFilter!) {
                        orderExport(filter: $filter)
                    }
                `, {filter: filter})
                .mapStream((q: any) => q.orderExport)
                .subscribe((orders) => {
                    const blob = new Blob([orders], {type: 'text/csv'});
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.download = "orders.csv";
                    a.href = url;
                    a.click();
                });
            }
        }),
    ],
})
export class OrderExportActionBarModule {
}