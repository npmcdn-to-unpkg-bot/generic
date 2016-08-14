import { provide, NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';
import { HTTP_PROVIDERS, Headers, RequestOptions, BaseRequestOptions} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoot }   from './app';
import { DataService } from './core/services/dataService';
import { MembershipService } from './core/services/membershipService';
import { UtilityService } from './core/services/utilityService';

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    })
}

@NgModule({
    imports: [
        BrowserModule,
        //FormsModule
    ],
    declarations: [AppRoot],
    bootstrap: [AppRoot],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(RequestOptions, { useClass: AppBaseRequestOptions }),
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        DataService,
        MembershipService,
        UtilityService
    ]
})
export class AppModule { }
