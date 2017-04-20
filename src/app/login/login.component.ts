import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { BaseHttpService } from '../services/base-http.service';
import * as constants from '../../config/constants';
import {NgForm} from '@angular/forms';
import { Message} from 'primeng/primeng';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userLoginCreds:any={"email":"", "password":""};

  userRegCreds:any={"firstname":"","lastname":"", "email":"","password":""};

  errorMessage: Message[] = [];

  successMessage: Message[] = [];

  display:boolean = false; 

  
  constructor(private httpService: BaseHttpService, private _router: Router) {

    var token=localStorage.getItem('session_token');
    if (token!=''){
      this._router.navigate(['dashboard']);
    }
  }

   private storeToken(data){
     localStorage.setItem('session_token', data.session_token);
     this._router.navigate(['dashboard']);
   }


   sendLoginCreds() {
        var queryHeaders = new Headers();
        queryHeaders.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: queryHeaders });
        this.httpService.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/session', this.userLoginCreds, options)
            .subscribe((data) => {
                this.storeToken(data.json());
            }, (error) => {
                      this.errorMessage = [];
                      this.errorMessage.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
                      }
            );
    }

    sendRegCreds(){
      var queryHeaders = new Headers();
      queryHeaders.append('Content-Type','application/json');
      queryHeaders.append("DREAMFACTORY_API_KEY",constants.DREAMFACTORY_API_KEY);
      let options = new RequestOptions({headers: queryHeaders});
      this.httpService.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/register', this.userRegCreds, options)
          .subscribe((data) => {
            this.successMessage=[];
            this.successMessage.push({severity:'success', summary:'Registration Successful', detail:'Please Login'});
            this.display = !this.display;},

            (error) => {
                    this.errorMessage=[];
                    this.errorMessage.push({severity:'info', summary:'Email Already Exists', detail:'Try Again'});
                  }
          );
    }

  

}

