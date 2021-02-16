import {Component, OnInit} from '@angular/core';
import {BaseDataService, NotificationService} from '@vendure/admin-ui/core';
import {DELETE_CONTENTBLOCK, GET_CONTENTBLOCKS} from './queries';

@Component({
    selector: 'content-block-list',
    templateUrl: './block-list.component.html',
})
export class BlockListComponent implements OnInit {

    blocks = [];

    constructor(
        private baseDataService: BaseDataService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit(): void {
        this.baseDataService.query(GET_CONTENTBLOCKS).single$.subscribe(
            (res) => this.blocks = (res as any).simpleContentBlocks,
            err => this.notificationService.error(`Failed to get contentBlocks!`),
        );
    }

    delete(id: string) {
        if (window.confirm(`Are you sure?`)) {
            this.baseDataService.mutate(DELETE_CONTENTBLOCK, {id}).subscribe(
                (res) => {
                    this.notificationService.success(`Deleted`)
                    this.ngOnInit();
                },
                err => this.notificationService.error(`Failed to delete content!`)
            )
        }
    }


}