import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/loginRegister.service';
import * as constants from '../../config/constants';
import { Message} from 'primeng/primeng';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
                trigger('fadeInOut', [
                    state('*', style({ 'overflow-y': 'hidden' })),
                    state('void', style({ 'overflow-y': 'hidden' })),
                    transition('* => void', [
                    style({ height: '*' }),
                    animate(250, style({ height: 0 }))
                    ]),
                  transition('void => *', [
                  style({ height: '0' }),
                  animate(250, style({ height: '*' }))
                    ]),
                                     ]
                       )
              ],

})

export class LoginComponent implements OnInit {
  
  loginRegToggle:boolean = false; //login-register toggle

  userLoginCreds:any={"email":"", "password":""};
  userRegCreds:any={"firstname":"","lastname":"", "email":"","password":""};
  mobile:number;

  errorMessage: Message[] = [];
  successMessage: Message[] = [];

  actualOTP:number = 123456;
  otp:number;
  otpDialog:boolean = false;  //otp verify dialogbox
  errorSection:boolean = false; //invalid otp entered
  otpverified:Message[] = [];

  otpUnverified:boolean=true;

  token:string

  
  constructor(
    private httpService: LoginRegisterService, 
    private router: Router) {}

  ngOnInit(){
    this.otpUnverified=true;
    var token = localStorage.getItem('session_token') 
    if(token=='' || token==null){
      this.router.navigate(['login']);
    }
  }
  
  
  hide(){
    this.errorSection=false;
  }

  verify(){
    if(this.otp==this.actualOTP){
      this.otpDialog=false;
      this.otpUnverified=false;
      this.errorSection=false;
      this.otp=null;
      this.successMessage.push({severity:'success', summary:'Mobile Verified', detail:'You can change your number from User Profile'});
    }
    else{
    this.errorSection=true;
    this.otpUnverified=true;
    this.otp=null;
    }
  }

  signIn() {
    localStorage.setItem('session_token','');
    this.httpService.login(this.userLoginCreds)
    .subscribe((data) => {
      this.token = data.json().session_token;
      localStorage.setItem('session_token', data.json().session_token);
      this.router.navigate(['account/dashboard']);}, 
      
      (error) => {
            this.errorMessage = [];
            this.errorMessage.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
            }
    );
  }

  signUp() {
    this.httpService.register(this.userRegCreds)
    .subscribe((data) => {
      this.successMessage=[];
      this.successMessage.push({severity:'success', summary:'Registration Successful', detail:'Please Login'});
      this.loginRegToggle = !this.loginRegToggle;},

      (error) => {
              this.errorMessage=[];
              this.errorMessage.push({severity:'info', summary:'Email Already Exists', detail:'Try Again'});
            }
    );
  }

  
}

   


