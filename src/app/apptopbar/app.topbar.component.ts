import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBar {

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent, private _router:Router) {}

    logout(){
        localStorage.setItem('session_token','');
        this._router.navigate(['/login']);
    };
}