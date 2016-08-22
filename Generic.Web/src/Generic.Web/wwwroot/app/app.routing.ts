import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Home } from './components/home';
import { Photos } from './components/photos';
import { Albums } from './components/albums';
import { AlbumPhotos } from './components/albumPhotos';
import { ProductsComponent } from './components/products';
import { ProductDetailComponent } from './components/productDetail';

import { Account } from './components/account/account';
import { Login } from './components/account/login';
import { Register } from './components/account/register';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        path: 'albums',
        component: Albums
    },
    {
        path: 'albums/:id/photos',
        component: AlbumPhotos
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'productDetail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'account',
        component: Account,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
