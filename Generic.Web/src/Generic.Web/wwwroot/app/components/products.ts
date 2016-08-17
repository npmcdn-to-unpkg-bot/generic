import { Component, OnInit } from '@angular/core';
import { Product } from '../core/domain/product';
import { Paginated } from '../core/common/paginated';
import { DataService } from '../core/services/dataService';

import { Router } from '@angular/router-deprecated';
import { Routes, APP_ROUTES } from '../routes';

@Component({
    selector: 'products',
    templateUrl: './app/components/products.html',
    styleUrls: ['./app/components/products.css'],
    providers: [DataService]
})
export class ProductsComponent extends Paginated implements OnInit{
    private _productsAPI: string = 'api/product/';
    private _products: Array<Product>;
    private routes = Routes;

    constructor(
        public productService: DataService,
        public router: Router) {
        super(0, 0, 0);
    }

    ngOnInit() {
        this.productService.set(this._productsAPI, 12);
        this.getProducts();
    }

    getProducts(): void {
        this.productService.get(this._page)
            .subscribe(res => {

                var data: any = res.json();

                this._products = data.Items;
                this._page = data.Page;
                this._pagesCount = data.TotalPages;
                this._totalCount = data.TotalCount;
            },
        error => console.error(<any>(`Error: ${error}`)));
    }

    search(i): void {
        super.search(i);
        this.getProducts();
    }

    gotoDetail(id: number) {
        this.router.navigate([this.routes.productDetails.name, id]);
    }
}