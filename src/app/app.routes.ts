import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountRoutes } from "./components/account/account.routes";
import { LoginComponent } from './components/login/login.component';
import { AccountMainComponent } from "./components/account/main/main.component";
import { SubscriptionComponent } from './components/subscription/subscription.component';

import { AccountGuard, TestDeactivate } from './components/account/account.guard';

export const routes: Routes = [
    ...AccountRoutes,
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'subscription', component: SubscriptionComponent, canDeactivate:[TestDeactivate] },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountMainComponent, canActivate: [AccountGuard] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
