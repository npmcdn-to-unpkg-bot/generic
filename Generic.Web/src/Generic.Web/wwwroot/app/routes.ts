import { Route, Router } from '@angular/router-deprecated';
import { Home } from './components/home';
import { Photos } from './components/photos';
import { Albums } from './components/albums';
import { AlbumPhotos } from './components/albumPhotos';
import { Account } from './components/account/account';
import { ProductsComponent } from './components/products';
import { ProductDetailComponent } from './components/productDetail';

export var Routes = {
    home: new Route({ path: '/', name: 'Home', component: Home }),
    photos: new Route({ path: '/photos', name: 'Photos', component: Photos }),
    albums: new Route({ path: '/albums', name: 'Albums', component: Albums }),
    albumPhotos: new Route({ path: '/albums/:id/photos', name: 'AlbumPhotos', component: AlbumPhotos }),
    account: new Route({ path: '/account/...', name: 'Account', component: Account }),
    products: new Route({ path: '/products', name: 'Products', component: ProductsComponent }),
    productDetails: new Route({ path: '/productDetail/:id', name: 'ProductDetail', component: ProductDetailComponent }),
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
