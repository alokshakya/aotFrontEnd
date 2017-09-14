import { RouterModule } from '@angular/router';
import { AccountRoutes } from "./account/account.routes";
import { LoginComponent } from './login/login.component';
import { AccountMainComponent } from "./account/main/main.component";
import { AccountGuard } from './account/account.guard';
export var routes = AccountRoutes.concat([
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountMainComponent, canActivate: [AccountGuard] },
]);
export var AppRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/app.routes.js.map