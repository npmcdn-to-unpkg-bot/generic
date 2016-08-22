import { provide, NgModule }  from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Headers, RequestOptions, BaseRequestOptions} from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoot } from './app';
import { routing } from './app.routing';

import { ProductsComponent } from './components/products';
import { ProductDetailComponent } from './components/productDetail';
import { Home } from './components/home';
import { Photos } from './components/photos';
import { Albums } from './components/albums';
import { AlbumPhotos } from './components/albumPhotos';
import { Account } from './components/account/account';
import { Login } from './components/account/login';
import { Register } from './components/account/register';

import { DataService } from './core/services/dataService';
import { MembershipService } from './core/services/membershipService';
import { UtilityService } from './core/services/utilityService';
import { ProductDetailService } from './core/services/productDetail.service';


class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    })
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppRoot,
        Home,
        Photos,
        Albums,
        AlbumPhotos,
        ProductsComponent,
        ProductDetailComponent,
        Account,
        Login,
        Register
    ],
    providers: [
        provide(RequestOptions, { useClass: AppBaseRequestOptions }),
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        DataService,
        MembershipService,
        UtilityService,
        ProductDetailService
    ],
    bootstrap: [AppRoot]
})
export class AppModule { }
