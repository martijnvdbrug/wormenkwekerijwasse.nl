import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
    Asset,
    AssetPickerDialogComponent,
    BaseDataService,
    ModalService,
    NotificationService
} from '@vendure/admin-ui/core';
import {CREATE_CONTENTBLOCK, GET_CONTENTBLOCK, UPDATE_CONTENTBLOCK} from './queries';

@Component({
    selector: 'content-block-detail',
    styleUrls: ['./block-detail.component.scss'],
    templateUrl: './block-detail.component.html',
})
export class BlockDetailComponent implements OnInit {

    detailForm: FormGroup;
    descriptionWordCount = 0;
    featuredAsset?: Asset;
    featuredAssetUrl?: string
    id?: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private modalService: ModalService,
        private baseDataService: BaseDataService,
        private notificationService: NotificationService,
        private route: ActivatedRoute,
    ) {
        this.detailForm = this.formBuilder.group({
            title: ['', Validators.required],
            slug: '',
            description: '',
            body: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (!this.id) {
                return;
            }
            this.baseDataService.query(GET_CONTENTBLOCK, {id: this.id}).single$.subscribe(
                (res) => {
                    const block = (res as any).simpleContentBlock;
                    this.detailForm.patchValue({
                        title: block.title,
                        slug: block.slug,
                        description: block.description,
                        body: block.body
                    });
                    this.featuredAssetUrl = block.featuredImage;
                },
                err => this.notificationService.error(`Failed to get block ${this.id}`)
            );
        });
    }

    updateSlug(title: string): void {
        if (!title) {
            return this.detailForm.setValue({slug: ''});
        }
        this.detailForm.patchValue({slug: title.replace(/\s+/g, '-').toLowerCase()});
    }

    save(): void {
        const values = this.detailForm.getRawValue();
        console.log('ID', this.id);
        const input = {
            featuredImage: this.featuredAsset?.preview,
            title: values.title,
            slug: values.slug,
            description: values.description,
            body: values.body
        };
        if (this.id) {
            this.baseDataService.mutate(UPDATE_CONTENTBLOCK, {
                id: this.id,
                input
            }).subscribe(
                (res) => {
                    this.id = (res as any)?.updateSimpleContentBlock?.id;
                    this.notificationService.success(`Saved`);
                },
                err => this.notificationService.error(`Failed to update content!`),
            );
        } else {
            this.baseDataService.mutate(CREATE_CONTENTBLOCK, {
                input
            }).subscribe(
                (res) => {
                    this.id = (res as any)?.createSimpleContentBlock?.id;
                    this.notificationService.success(`Saved`);
                },
                err => this.notificationService.error(`Failed to update content!`),
            );
        }
    }

    cancel(): void {
        if (window.confirm(`Are you sure?`)) {
            this.router.navigate(['../extensions/simple-cms']);
        }
    }

    countWords(): void {
        this.descriptionWordCount = this.detailForm.getRawValue().description?.length || 0
    }

    selectFeaturedAsset(): void {
        this.modalService
            .fromComponent(AssetPickerDialogComponent, {
                size: 'xl',
            })
            .subscribe(result => {
                if (result && result.length) {
                    // this.assets = unique(this.assets.concat(result), 'id');
                    this.featuredAsset = result[0];
                }
            });
    }

}