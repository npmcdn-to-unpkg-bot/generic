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
//import { FormsModule }   from '@angular/forms';
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var app_1 = require('./app');
var dataService_1 = require('./core/services/dataService');
var membershipService_1 = require('./core/services/membershipService');
var utilityService_1 = require('./core/services/utilityService');
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.apply(this, arguments);
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    return AppBaseRequestOptions;
}(http_1.BaseRequestOptions));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
            ],
            declarations: [app_1.AppRoot],
            bootstrap: [app_1.AppRoot],
            providers: [
                http_1.HTTP_PROVIDERS,
                router_deprecated_1.ROUTER_PROVIDERS,
                core_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                dataService_1.DataService,
                membershipService_1.MembershipService,
                utilityService_1.UtilityService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
