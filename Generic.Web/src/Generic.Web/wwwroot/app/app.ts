///<reference path="../../typings/browser.d.ts" />

import { Component, OnInit, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

import { MembershipService } from './core/services/membershipService';

enableProdMode();

@Component({
    selector: 'photogallery-app',
    templateUrl: './app/app.html',
    directives: [CORE_DIRECTIVES]
})
export class AppRoot implements OnInit {

    constructor(public membershipService: MembershipService,
                public location: Location) { }

    ngOnInit() {
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