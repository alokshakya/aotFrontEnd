import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

  userLoginCreds:any={"email":"", "password":""};

  userRegCreds:any={"firstname":"","lastname":"", "email":"","password":""};

  errorMessage: Message[] = [];

  successMessage: Message[] = [];

  display:boolean = false; 

  
  constructor(private httpService: BaseHttpService, private router: Router) {}

   //CALLED WHEN CLICKED ON LOGIN BUTTON
   sendLoginCreds() {
      var queryHeaders = new Headers();
      queryHeaders.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: queryHeaders });
      this.httpService.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/session', this.userLoginCreds, options)
          .subscribe((data) => {
            localStorage.setItem('session_token', data.json().session_token )
            this.router.navigate(['account/dashboard']);}, 
            
            (error) => {
                  this.errorMessage = [];
                  this.errorMessage.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
                  }
          );
    }

    //CALLED WHEN CLICKED ON REGISTER BUTTON
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

    ngOnInit(){

      var token = localStorage.getItem('session_token');
      if (token==''||token==null){
        this.router.navigate(['login'])
      } else{
        this.router.navigate(['account/dashboard'])
      }
    }
  

}

