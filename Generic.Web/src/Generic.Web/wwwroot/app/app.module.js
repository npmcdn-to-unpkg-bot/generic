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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var common_1 = require('@angular/common');
var app_1 = require('./app');
var app_routing_1 = require('./app.routing');
var products_1 = require('./components/products');
var productDetail_1 = require('./components/productDetail');
var home_1 = require('./components/home');
var photos_1 = require('./components/photos');
var albums_1 = require('./components/albums');
var albumPhotos_1 = require('./components/albumPhotos');
var account_1 = require('./components/account/account');
var login_1 = require('./components/account/login');
var register_1 = require('./components/account/register');
var dataService_1 = require('./core/services/dataService');
var membershipService_1 = require('./core/services/membershipService');
var utilityService_1 = require('./core/services/utilityService');
var productDetail_service_1 = require('./core/services/productDetail.service');
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.apply(this, arguments);
        this.headers = new http_2.Headers({
            'Content-Type': 'application/json'
        });
    }
    return AppBaseRequestOptions;
}(http_2.BaseRequestOptions));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_1.AppRoot,
                home_1.Home,
                photos_1.Photos,
                albums_1.Albums,
                albumPhotos_1.AlbumPhotos,
                products_1.ProductsComponent,
                productDetail_1.ProductDetailComponent,
                account_1.Account,
                login_1.Login,
                register_1.Register
            ],
            providers: [
                core_1.provide(http_2.RequestOptions, { useClass: AppBaseRequestOptions }),
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                dataService_1.DataService,
                membershipService_1.MembershipService,
                utilityService_1.UtilityService,
                productDetail_service_1.ProductDetailService
            ],
            bootstrap: [app_1.AppRoot]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map