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
var account_1 = require('./account');
var account_routing_1 = require('./account.routing');
var login_1 = require('./login');
var register_1 = require('./register');
var dataService_1 = require('../../core/services/dataService');
var membershipService_1 = require('../../core/services/membershipService');
var utilityService_1 = require('../../core/services/utilityService');
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                account_routing_1.accountRouting
            ],
            declarations: [
                account_1.Account,
                login_1.Login,
                register_1.Register
            ],
            providers: [
                dataService_1.DataService,
                membershipService_1.MembershipService,
                utilityService_1.UtilityService
            ],
            bootstrap: [account_1.Account]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map