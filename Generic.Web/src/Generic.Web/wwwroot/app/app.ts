///<reference path="../../typings/browser.d.ts" />

import { Component, OnInit, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Location } from '@angular/common';
import { Routes, APP_ROUTES } from './routes';
import 'rxjs/add/operator/map';

import { MembershipService } from './core/services/membershipService';

enableProdMode();

@Component({
    selector: 'photogallery-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppRoot implements OnInit {
    private routes = Routes;

    constructor(public membershipService: MembershipService,
                public location: Location) { }

    ngOnInit() {
        this.routes = Routes;
        this.location.go('/');
    }

    isUserLoggedIn(): boolean {
        return this.membershipService.isUserAuthenticated();
    }

    getUserName(): string {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    }

    logout(): void {
        this.membershipService.logout()
            .subscribe(res => {
                localStorage.removeItem('user');
            },
            error => console.error('Error: ' + error),
            () => { });
    }
}