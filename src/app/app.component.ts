import { Component, AfterViewInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from './services/masterhttp.service';
import { JwtHelper } from 'angular2-jwt';
// import { AuthHttp, AuthConfig } from 'angular2-jwt';


enum MenuOrientation {
    STATIC,
    OVERLAY,
    HORIZONTAL
};

declare var jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


    constructor(private router: Router,private masterhttp:MasterHttpService) { }

    ngOnInit() {
        this.decodeJwt();
    }

    decodeJwt(){
        let token = localStorage.getItem('session_token');
        if(token!=null){
            let jwt:JwtHelper = new JwtHelper();
            if(!jwt.isTokenExpired(token)){
                this.masterhttp.setToken(token);
                this.router.navigate(['loadout']);
            }
            else this.router.navigate(['login']);
        }
        else this.router.navigate(['login']);

    }

    ngAfterViewInit() { }

    ngOnDestroy() { }

}