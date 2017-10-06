import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountRoutes } from "./components/account/account.routes";
import { LoginComponent } from './components/login/login.component';
import { AccountMainComponent } from "./components/account/main/main.component";

import { AccountGuard } from './components/account/account.guard';

export const routes: Routes = [
    ...AccountRoutes,
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountMainComponent, canActivate: [AccountGuard] },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
