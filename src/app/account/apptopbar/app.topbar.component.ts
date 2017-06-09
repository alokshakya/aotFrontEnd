import {Component,  OnInit, Inject, forwardRef} from '@angular/core';
import {AccountMainComponent} from '../main/main.component';
import 'rxjs/Rx'; 
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBar implements OnInit {

    currentPage:Array<string>;
    constructor(@Inject(forwardRef(() => AccountMainComponent))  public app:AccountMainComponent,
    private router:Router,) { }


    logout(){
        localStorage.setItem('session_token','');
        this.router.navigate(['/login']);

    };

    ngOnInit(){
        this.router.events.subscribe(event =>{
        var a = event['url'];
        this.currentPage = a.split('/');
        this.currentPage.shift();
        this.currentPage.shift();
        })
    }

    redirect(target){
        this.router.navigate([target]);
    }

}


