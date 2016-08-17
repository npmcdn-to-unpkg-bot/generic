import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDetail } from '../core/domain/productDetail';
import { DataService } from '../core/services/dataService';

@Component({
    selector: 'product-details',
    templateUrl: './app/components/productDetail.html',
    providers: [DataService]
})
export class ProductDetailComponent implements OnInit {

    private _productDetailsAPI: string = 'api/product/';
    private _product: ProductDetail;

    constructor(
        private route: ActivatedRoute,
        private productDetailService: DataService) {
    }

    ngOnInit() {
        this.productDetailService.set(this._productDetailsAPI);

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productDetailService.getSingle(id)
                .subscribe(res => {
                        console.log(res.json());
                    },
                error => console.error(<any>(`Error: ${error}`)));
        });

    }
} 