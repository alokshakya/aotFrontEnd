import {Component,Inject,forwardRef} from '@angular/core';
import {AccountMainComponent} from '../main/main.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBar {

    constructor(@Inject(forwardRef(() => AccountMainComponent))  public app:AccountMainComponent, private _router:Router) {}

    logout(){
        localStorage.setItem('session_token','');
        this._router.navigate(['/login']);

    };
}