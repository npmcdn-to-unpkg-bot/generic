///<reference path="../../typings/browser.d.ts" />
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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_2 = require('@angular/common');
var routes_1 = require('./routes');
require('rxjs/add/operator/map');
var membershipService_1 = require('./core/services/membershipService');
core_1.enableProdMode();
var AppRoot = (function () {
    function AppRoot(membershipService, location) {
        this.membershipService = membershipService;
        this.location = location;
        this.routes = routes_1.Routes;
    }
    AppRoot.prototype.ngOnInit = function () {
        this.routes = routes_1.Routes;
        this.location.go('/');
    };
    AppRoot.prototype.isUserLoggedIn = function () {
        return this.membershipService.isUserAuthenticated();
    };
    AppRoot.prototype.getUserName = function () {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    };
    AppRoot.prototype.logout = function () {
        this.membershipService.logout()
            .subscribe(function (res) {
            localStorage.removeItem('user');
        }, function (error) { return console.error('Error: ' + error); }, function () { });
    };
    AppRoot = __decorate([
        core_1.Component({
            selector: 'photogallery-app',
            templateUrl: './app/app.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig(routes_1.APP_ROUTES), 
        __metadata('design:paramtypes', [membershipService_1.MembershipService, common_2.Location])
    ], AppRoot);
    return AppRoot;
}());
exports.AppRoot = AppRoot;
