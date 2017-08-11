import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountRoutes } from "./account/account.routes";
import { LoginComponent } from './login/login.component';
import { AccountMainComponent } from "./account/main/main.component";

import { AccountGuard } from './account/account.guard';

export const routes: Routes = [
    ...AccountRoutes,
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountMainComponent, canActivate: [AccountGuard] },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
