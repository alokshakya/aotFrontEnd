import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/loginRegister.service';
import { Misc, PersonalInfo } from '../services/data.service';
import { MasterHttpService } from '../services/masterhttp.service';
import * as constants from '../../config/constants';
import { Message} from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';




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
  registeredMobile;
  verifyForgotToggle:boolean;
  dummyPassword:string;

  dummyConfirmPassword:string;

  passwordObj:any;

  //register section
  userRegCreds:any;
  dummyClass:SelectItem[];
  dummySelectedClass:string;
  dummyMobile:number;
  confirmPassword:string;

  
  //register subsection  mobile verify
  regVerifyToggle:boolean;
  actualOTP:number;
  mobileOtp:number;
  mobileVerified:boolean;

  //register subsection  email verify
  actualCode:string;
  emailOtp:number;
  emailVerified:boolean;

  //misc
  message: Message[];
  token:string;
  
  constructor(
    private httpService: LoginRegisterService,
    private masterhttp: MasterHttpService,
    private misc: Misc,
    private personalInfo: PersonalInfo, 
    private router: Router) {}

  ngOnInit(){
    this.userLoginCreds = {"username":"", "password":""};
    this.userRegCreds = {"firstname":"","lastname":"", "email":"","password":"","class":"","mobile":""};
    this.passwordObj = {"new_password":"","email":""};    
    //temporary
    this.dummyClass=[]
    this.dummyClass.push({label:"Select Class", value:null}, {label:"I", value:"I"}, 
    {label:"II", value:"II"}, {label:"III", value:"III"}, {label:"IV", value:"IV"}, {label:"V", value:"V"},
    {label:"VI", value:"VI"}, {label:"VII", value:"VII"}, {label:"VIII", value:"VIII"})
  }
  

  sendOtp(mode, resend=false){
    let wrapper = {email:this.userRegCreds['email'], verify_mobile:false, verify_email:false};
    if(resend){
      wrapper['email'] = this.registeredEmail;
      wrapper[mode] = true; 
    }
    else{
      if (mode=='both'){
        wrapper = {email:this.userRegCreds['email'], verify_mobile:true, verify_email:true};
      }
      else if(mode=='selective'){
        wrapper['email'] = this.registeredEmail;
        if(this.mode.indexOf('verify_email')>-1){
          wrapper['verify_email'] = true;
        }
        if(this.mode.indexOf('verify_mobile')>-1){
          wrapper['verify_mobile'] = true;
        }
      }
      else{
        wrapper[mode] = true;
      }  
    }
    this.masterhttp.sendOtp(wrapper)
    .subscribe((data: Response) =>{
      switch (data['status']) {
        
        case 200:
          this.registeredMobile = data['message']['mobile'];
          this.verifyForgotToggle = true;

          //for login_forgetPassword
          break;

        default:
          this.message = [];
          this.message.push({severity:'error', summary:'Email Does Not Exist', detail:'Please Try Again'});
          break;
      }
      });
    }

  verifyOtp(mode,forgot=false){
    let wrapper = {email:this.userRegCreds['email'], otp:null ,verify_email:false, verify_mobile:false};
    if(forgot){
      wrapper['email'] = this.registeredEmail;
    }
    wrapper[mode] = true;
    
    let x;
    if(mode=='verify_email'){
      x='Email';
      wrapper['otp'] = this.emailOtp;
    }
    if(mode=='verify_mobile'){
      x='Mobile';
      wrapper['otp'] = this.mobileOtp;
    }
    this.masterhttp.verifyOtp(wrapper)
    .subscribe((data: Response)=>{
      switch (data['status']) {
        
        case 721:
          this.message = [];
          this.message.push({severity:'error', summary:'Incorrect OTP', detail:'Please Try Again'});
          break;

        case 200:
          this.message = [];
          this.message.push({severity:'success', summary:'Success', detail:x+' Verified'});
          if(x=='Mobile'){
            this.mobileVerified = true;
            if(!forgot){
              this.check();}
            else {
              this.mode[this.mode.indexOf('verify_email')] = null;
            }
          }
          if(x=='Email'){
            this.emailVerified = true;
            if(!forgot){this.check()}
            else this.mode[this.mode.indexOf('verify_mobile')] = null;
          }
          break;

        default: 
          console.log(data);
          break;
      }
    });
  }

  setToken(token){
    this.masterhttp.setToken(token);
    localStorage.setItem('session_token',token);
    this.router.navigate(['loadout']);
  }

  signIn() {
    this.httpService.login(this.userLoginCreds)
    .subscribe((data:Response)=>{
      if(data['Status']==200 || data['status']==200){
        this.setToken(data['session_token']);
      }else {
        this.message = [];
        this.message.push({severity:'error', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
      }
      })
  }

  signUp() {
    this.httpService.register(this.userRegCreds)
    .subscribe((data) => {
      if(data['status']==200){
        const wrapper = [{'email':this.userRegCreds['email'], 'verify_mobile':true, 'verify_email':true}]
        this.sendOtp('both');
        this.message=[];
        this.message.push({severity:'info', summary:'Verify mobile and email', detail:''})
        this.regVerifyToggle = true;
      }else {
        this.message=[];
        this.message.push({severity:'info', summary:'Email Already Exists', detail:'Please Login'});
      }
    })
  }

  //called when clicked on forgot password
  forgotPassword(){
    this.loginForgotToggle = true;
    this.emailVerified = false;
    this.mobileVerified = false;
  }

    //used to toggle loginRegister after successful registration
  check(){
    if(this.mobileVerified && this.emailVerified){
      this.message=[]
      this.message.push({severity:'success', summary:'Registration Successful', detail:'Please login'})
      this.loginRegToggle=false;
      this.regVerifyToggle=false;
    }
  }
  
  //reset flags
  reset(){
      this.loginForgotToggle=false;
      this.regVerifyToggle=false;
      this.mobileVerified=false;
      this.emailVerified=false;
      this.verifyForgotToggle=false;
      this.registeredEmail=null;
      this.passwordObj['new_password'] = null;
      this.registeredEmail = null;
      this.emailOtp = null;
      this.mobileOtp = null;
      this.mode = [];
  }

  //submit new password
  changePassword(){
    this.passwordObj['new_password'] = this.dummyPassword;
    this.passwordObj['email'] = this.registeredEmail;
    this.masterhttp.forgotPassword(this.passwordObj)
    .subscribe((data: Response)=>{
      if(data['status']==200){
        this.message = [];
        this.message.push({severity:"success",summary:"Password Changed",detail:"Please Login"})
        this.reset();
      }
      else {
        this.message = [];
        this.message.push({severity:"error",summary:"Unable To Change Password",detail:"Please Try Again"})
      }
    })
  }


  
}

   


