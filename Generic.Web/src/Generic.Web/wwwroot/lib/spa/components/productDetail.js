"use strict";
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
var router_1 = require('@angular/router');
var productDetail_service_1 = require('../core/services/productDetail.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, productDetailService) {
        this.route = route;
        this.productDetailService = productDetailService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id'], 10);
            _this.getDetails(id);
        });
    };
    ProductDetailComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.productDetailService
            .getProductDetail(id)
            .then(function (detail) { return _this._productDetail = detail; });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            templateUrl: './app/components/productDetail.html',
            styleUrls: ['./app/components/productDetail.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, productDetail_service_1.ProductDetailService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
