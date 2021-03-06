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
var router_1 = require('@angular/router');
var user_1 = require('../../core/domain/user');
var operationResult_1 = require('../../core/domain/operationResult');
var membershipService_1 = require('../../core/services/membershipService');
var notificationService_1 = require('../../core/services/notificationService');
var Login = (function () {
    function Login(membershipService, notificationService, router) {
        this.membershipService = membershipService;
        this.notificationService = notificationService;
        this.router = router;
    }
    Login.prototype.ngOnInit = function () {
        this._user = new user_1.User('', '');
    };
    Login.prototype.login = function () {
        var _this = this;
        var _authenticationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.login(this._user)
            .subscribe(function (res) {
            _authenticationResult.Succeeded = res.Succeeded;
            _authenticationResult.Message = res.Message;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_authenticationResult.Succeeded) {
                _this.notificationService.printSuccessMessage('Welcome back ' + _this._user.Username + '!');
                localStorage.setItem('user', JSON.stringify(_this._user));
                _this.router.navigate(['/home']);
            }
            else {
                _this.notificationService.printErrorMessage(_authenticationResult.Message);
            }
        });
    };
    ;
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [membershipService_1.MembershipService, notificationService_1.NotificationService],
            templateUrl: './app/components/account/login.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES,]
        }), 
        __metadata('design:paramtypes', [membershipService_1.MembershipService, notificationService_1.NotificationService, router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map