import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from '../core/domain/productDetail';
import { ProductDetailService } from '../core/services/productDetail.service';

@Component({
    selector: 'product-details',
    templateUrl: './app/components/productDetail.html',
    styleUrls: ['./app/components/productDetail.css']
})
export class ProductDetailComponent implements OnInit {
    
    private _productDetail: ProductDetail;
    error: any;

    constructor(
        private route: ActivatedRoute,
        private productDetailService: ProductDetailService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = parseInt(params['id'], 10);
            this.getDetails(id);            
        });
    }

    getDetails(id: number): void {
         this.productDetailService
        .getProductDetail(id)
        .then(detail => this._productDetail = detail)
    }
} 