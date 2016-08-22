"use strict";
var router_1 = require('@angular/router');
var account_1 = require('./account');
var login_1 = require('./login');
var register_1 = require('./register');
var accountRoutes = [
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
exports.accountRouting = router_1.RouterModule.forChild(accountRoutes);
//# sourceMappingURL=account.routing.js.map