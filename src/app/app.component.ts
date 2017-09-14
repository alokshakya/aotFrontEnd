import { Component, AfterViewInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from './services/masterhttp.service';
import { JwtHelper } from 'angular2-jwt';
import { Message } from 'primeng/primeng';


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
    growlMsg:Message[];


    constructor(private router: Router,private masterhttp:MasterHttpService) { }

    ngOnInit() {
        this.decodeJwt();
        this.masterhttp.errorEvent.subscribe((data)=>{
            if(data){
                this.growlMsg = [];
                this.growlMsg.push({severity:'error',summary:'Server Error',detail:'Please Login'});
            }
        })
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