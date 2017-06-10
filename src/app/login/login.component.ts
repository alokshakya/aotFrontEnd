import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/loginRegister.service';
import * as constants from '../../config/constants';
import { Message} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';




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
  
  loginRegToggle:boolean; 

  //login section
  userLoginCreds:any;

  //login-subsection  forgot password
  loginForgotToggle:boolean;
  mode:Array<string>;
  registeredEmail:string;
  verifyForgotToggle:boolean;
  dummyPassword:string;
  dummyConfirmPassword:string;

  //register section
  userRegCreds:any;
  dummyClass:SelectItem[];
  dummySelectedClass:string;
  dummyMobile:number;
  confirmPassword:string;

  
  //register subsection  mobile verify
  regVerifyToggle:boolean;
  actualOTP:number;
  dummyOtp:number;
  mobileVerified:boolean;

  //register subsection  email verify
  actualCode:string;
  dummyCode:string;
  emailVerified:boolean;

  //misc
  message: Message[];
  token:string;
  
  constructor(
    private httpService: LoginRegisterService, 
    private router: Router) {}

  ngOnInit(){

    this.reset();


    this.userLoginCreds = {"email":"", "password":""};
    this.userRegCreds = {"firstname":"","lastname":"", "email":"","password":""};    
    this.actualCode = "ABCDEF"
    this.actualOTP = 123456;
    //temporary
    this.dummyClass=[]
    this.dummyClass.push({label:"Select Class", value:null}, {label:"I", value:"I"}, 
    {label:"II", value:"II"}, {label:"III", value:"III"}, {label:"IV", value:"IV"}, {label:"V", value:"V"},
    {label:"VI", value:"VI"}, {label:"VII", value:"VII"}, {label:"VIII", value:"VIII"})
  }
  

  signIn() {
    // localStorage.setItem('session_token','');
    // this.httpService.login(this.userLoginCreds)
    // .subscribe((data) => {
    //   this.token = data.json().session_token;
    //   localStorage.setItem('session_token', data.json().session_token);
    //   this.router.navigate(['account/dashboard']);}, 
      
    //   (error) => {
    //         this.message = [];
    //         this.message.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
    //         }
    // );
    if((this.userLoginCreds['email']=='test@olympiadbox.com')&&(this.userLoginCreds['password']=='test123')){
      this.router.navigate(['account/dashboard'])
    }else{
      this.message=[]
      this.message.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'})
    }

  }

  signUp() {
    this.httpService.register(this.userRegCreds)
    .subscribe((data) => {
      this.message=[];
      this.message.push({severity:'success', summary:'Registration Successful', detail:'Please Login'});
      this.loginRegToggle = !this.loginRegToggle;},

      (error) => {
              this.message=[];
              this.message.push({severity:'info', summary:'Email Already Exists', detail:'Try Again'});
            }
    );
  }

  //temporary



  forgotPassword(){
  this.loginForgotToggle = true;
  this.emailVerified = false;
  this.mobileVerified = false;
  }

  dummyRegister(){
      this.message=[];
      this.message.push({severity:'info', summary:'Verify mobile and email', detail:''})
      this.regVerifyToggle = true;

  }

  dummyMobileVerify(){
    if(this.actualOTP==this.dummyOtp){
      var a = this.mode.indexOf('email')
      this.mode[a]=null;
      this.mobileVerified=true;
      this.check();
    }else{
      this.message=[];
      this.message.push({severity:'error', summary:'Incorrect OTP', detail:'Please try again'})
    }
  }

  dummyEmailVerify(){
    if(this.dummyCode==this.actualCode){
      var a = this.mode.indexOf('mobile')
      this.mode[a]=null;
      this.emailVerified=true; 
      this.check();
    }else{
      this.message=[];
      this.message.push({severity:'error', summary:'Incorrect Verification Code', detail:'Please try again'})
    }
  }

    check(){
    if(this.mobileVerified&&this.emailVerified){
      this.message=[]
      this.message.push({severity:'success', summary:'Registration Successful', detail:'Please login'})
      this.loginRegToggle=false;
      this.regVerifyToggle=false;
    }
  }
  
  reset(){
      this.dummyOtp=null;
      this.dummyMobile=null;
      this.dummySelectedClass=null;
      this.confirmPassword=null;
      this.confirmPassword=null;
      this.dummyPassword=null;
      this.dummyConfirmPassword=null;
      this.loginForgotToggle=false;
      this.regVerifyToggle=false;
      this.mobileVerified=false;
      this.emailVerified=false;
      this.verifyForgotToggle=false;
      this.registeredEmail=null;
      this.mode = [];
  }

  changePassword(){
    this.message = [];
    this.message.push({severity:"success",summary:"Password Changed",detail:"Please Login"})
    this.reset();
  }


  
}

   


