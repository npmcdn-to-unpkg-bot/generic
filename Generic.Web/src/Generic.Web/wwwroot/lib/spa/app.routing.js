"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./components/home');
var photos_1 = require('./components/photos');
var albums_1 = require('./components/albums');
var albumPhotos_1 = require('./components/albumPhotos');
var products_1 = require('./components/products');
var productDetail_1 = require('./components/productDetail');
var account_1 = require('./components/account/account');
var login_1 = require('./components/account/login');
var register_1 = require('./components/account/register');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_1.Home
    },
    {
        path: 'photos',
        component: photos_1.Photos
    },
    {
        path: 'albums',
        component: albums_1.Albums
    },
    {
        path: 'albums/:id/photos',
        component: albumPhotos_1.AlbumPhotos
    },
    {
        path: 'products',
        component: products_1.ProductsComponent
    },
    {
        path: 'productDetail/:id',
        component: productDetail_1.ProductDetailComponent
    },
    {
        path: 'account',
        component: account_1.Account,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: login_1.Login
            },
            {
                path: 'register',
                component: register_1.Register
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
