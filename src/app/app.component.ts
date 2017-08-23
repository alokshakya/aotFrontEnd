import { Component, AfterViewInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from './services/masterhttp.service';
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
        let token = localStorage.getItem('session_token');
        if(token!=null){
            this.masterhttp.setToken(token);
            this.router.navigate(['loadout'])
        }
    }

    ngAfterViewInit() { }

    ngOnDestroy() { }

}