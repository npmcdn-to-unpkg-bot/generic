"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var paginated_1 = require('../core/common/paginated');
var dataService_1 = require('../core/services/dataService');
var router_1 = require('@angular/router');
var ProductsComponent = (function (_super) {
    __extends(ProductsComponent, _super);
    function ProductsComponent(productService, router) {
        _super.call(this, 0, 0, 0);
        this.productService = productService;
        this.router = router;
        this._productsAPI = 'api/product/';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productService.set(this._productsAPI, 12);
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.get(this._page)
            .subscribe(function (res) {
            var data = res.json();
            _this._products = data.Items;
            _this._page = data.Page;
            _this._pagesCount = data.TotalPages;
            _this._totalCount = data.TotalCount;
        }, function (error) { return console.error(("Error: " + error)); });
    };
    ProductsComponent.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getProducts();
    };
    ProductsComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/productDetail', id]);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: './app/components/products.html',
            styleUrls: ['./app/components/products.css'],
            providers: [dataService_1.DataService]
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}(paginated_1.Paginated));
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.js.map