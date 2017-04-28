import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountRoutes } from "./account/account.routes";
import { LoginComponent } from './login/login.component';
import { AccountMainComponent } from "./account/main/main.component";



export const routes: Routes = [
    ...AccountRoutes,
    { path: 'login', component: LoginComponent },
    {path : 'account', component : AccountMainComponent},

    ];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
