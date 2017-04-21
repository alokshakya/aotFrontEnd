import {Component,AfterViewInit,ElementRef,Renderer,ViewChild} from '@angular/core';
import { Router } from '@angular/router'

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

   
    constructor(private _router: Router) {}

     ngOnInit() {
        
       /* var token = localStorage.getItem('session_token');

        if (token == '') {
            this._router.navigate(['login']);
        }
        else {
            this._router.navigate(['account']);
        }*/
      
      }

    ngAfterViewInit() {
      
    }

    

    ngOnDestroy() {
       
    }

}