import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/loginRegister.service';
import { Misc, PersonalInfo } from '../services/data.service';
import { MasterHttpService } from '../services/masterhttp.service';
import * as constants from '../../config/constants';
import { Message } from 'primeng/primeng';
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

    loginRegToggle: boolean;

    //login section
    userLoginCreds: any;

    //login-subsection  forgot password
    loginForgotToggle: boolean;
    mode: Array<string>;
    registeredEmail: string;
    registeredMobile;
    verifyForgotToggle: boolean;
    dummyPassword: string;

    dummyConfirmPassword: string;

    passwordObj: any;

    //register section
    userRegCreds: any;
    dummyClass: SelectItem[];
    dummySelectedClass: string;
    dummyMobile: number;
    confirmPassword: string;


    //register subsection  mobile verify
    regVerifyToggle: boolean;
    actualOTP: number;
    mobileOtp: number;
    mobileVerified: boolean;

    //register subsection  email verify
    actualCode: string;
    emailOtp: number;
    emailVerified: boolean;

    //misc
    message: Message[];
    token: string;
    spinner:boolean;
    spinner2:boolean;
    spinner3:boolean;
    wrapper:any;
    disappear:boolean;

    constructor(
        public httpService: LoginRegisterService,
        public masterhttp: MasterHttpService,
        public misc: Misc,
        public personalInfo: PersonalInfo,
        public router: Router) { }

    ngOnInit() {
        this.wrapper = { 'email':null,'verify_mobile':false,'verify_email':false };
        this.userLoginCreds = { "username": "", "password": "" };
        this.userRegCreds = { "firstname": "", "lastname": "", "email": "", "password": "", "class": "", "mobile": "" };
        this.passwordObj = { "new_password": "", "email": "" };
        //temporary
        this.dummyClass = []
        this.dummyClass.push({ label: "Select Class", value: null }, { label: "I", value: "I" },
            { label: "II", value: "II" }, { label: "III", value: "III" }, { label: "IV", value: "IV" }, { label: "V", value: "V" },
            { label: "VI", value: "VI" }, { label: "VII", value: "VII" }, { label: "VIII", value: "VIII" })
    }

    setWrapper(resend=false, mode=null){
        if(mode=='selective'&&!resend){
            this.wrapper['email'] = this.registeredEmail;
            if(this.mode.indexOf('verify_email') > -1){
                this.wrapper['verify_email'] = true;
                this.spinner2 = true;
            }
            if(this.mode.indexOf('verify_mobile') > -1){
                this.wrapper['verify_mobile'] = true;
                this.spinner = true;

            }
        }
        else if(mode=='forgotMobile'&&resend){
            this.wrapper['email'] = this.registeredEmail;
            this.wrapper['verify_mobile'] = true;
            this.wrapper['verify_email'] = false;
            this.spinner = true;
        }

        else if(mode=='forgotEmail'&&resend){
            this.wrapper['email'] = this.registeredEmail;
            this.wrapper['verify_mobile'] = false;
            this.wrapper['verify_email'] = true;
            this.spinner2 = true;
        }

        else if(mode=='mobile'&&resend){
            this.wrapper['email'] = this.userRegCreds['email'];
            this.wrapper['verify_mobile'] = true;
            this.wrapper['verify_email'] = false;
            this.spinner = true;
        }

        else if(mode=='email'&&resend){
            this.wrapper['email'] = this.userRegCreds['email'];
            this.wrapper['verify_mobile'] = false;
            this.wrapper['verify_email'] = true;
            this.spinner2 = true;
        }
    }

    generateResponse(data){
        if(this.wrapper['email']==this.registeredEmail&&!this.verifyForgotToggle){
            this.checkConditions(data);
            this.verifyForgotToggle = true;
            this.message = [];
            this.message.push({severity:'success', summary:'Reset Password', detail:'Please Verify To Reset Password'})
        }
        else if(this.wrapper['email']==this.registeredEmail&&this.verifyForgotToggle){
            this.checkConditions(data);
            // this.message = [];
            // this.message.push({severity:'success', summary:'Reset Password', detail:'Please Verify To Reset Password'})
        }
        else if(this.wrapper['email']==this.userRegCreds['email']&&!this.regVerifyToggle){
            this.checkConditions(data);
            this.regVerifyToggle = true;
            this.message = [];
            this.message.push({severity:'success', summary:'Registration Successful', detail:'Please Verify Your Email and Mobile'})
        }
        else if(this.wrapper['email']==this.userRegCreds['email']&&this.regVerifyToggle){
            this.checkConditions(data);
            // this.message = [];
            // this.message.push({severity:'success', summary:'OTP SENT', detail:'Please Verify Otp'})
        }
        this.wrapper = { 'email':null,'verify_mobile':false,'verify_email':false };
    }

    checkConditions(data){
        if(data['mobile']!=null && data['email']!=null){
            this.registeredMobile = data['mobile'];
            this.spinner2 = false;
            this.spinner = false;
        }
        if(data['mobile']==null && data['email']!=null){
            this.spinner2 = false;
        }
        if(data['mobile']!=null && data['email']==null){
            this.registeredMobile = data['mobile'];
            this.spinner = false;
        }
    }


    sendOtp() {
        this.masterhttp.sendOtp(this.wrapper)
            .subscribe((data: Response) => {
                if(data['status']==200){
                    this.generateResponse(data['message']);
                }
                else {
                    this.message = [];
                    this.message.push({severity:'error', summary:'Email Does Not Exists', detail:'Please Try Again With Different Email Address'})
                    this.spinner = false;
                    this.spinner2 = false;
                }
            },
            err=>{
                this.spinner = false;
                this.spinner2 = false
                this.message = [];
                this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
                // this.spinner = false;
                // this.spinner2 = false;
            });
        

        // if(mode=='verify_email'){
        //     this.spinner2 = true;
        // }
        // if(mode=='verify_mobile'){
        //     this.spinner = true;
        // }
        // if (resend) {
        //     wrapper['email'] = this.registeredEmail;
        //     wrapper[mode] = true;
        // }
        // else {
        //     if (mode == 'both') {
        //         wrapper = { email: this.userRegCreds['email'], verify_mobile: true, verify_email: true };
        //     }
        //     else if (mode == 'selective') {
        //         wrapper['email'] = this.registeredEmail;
        //         if (this.mode.indexOf('verify_email') > -1) {
        //             wrapper['verify_email'] = true;
        //             this.spinner2 = true;
        //         }
        //         if (this.mode.indexOf('verify_mobile') > -1) {
        //             wrapper['verify_mobile'] = true;
        //             this.spinner = true;
        //         }
        //     }
        //     else {
        //         wrapper[mode] = true;
        //     }
        // }
        // // this.emailVerified = false;
        // // this.mobileVerified = false;
        // this.masterhttp.sendOtp(wrapper)
        //     .subscribe((data: Response) => {
        //         this.spinner = false;
        //         this.spinner2 = false
        //         switch (data['status']) {

        //             case 200:
        //                 this.registeredMobile = data['message']['mobile'];
        //                 this.verifyForgotToggle = true;

        //                 //for login_forgetPassword
        //                 break;

        //             default:
        //                 this.message = [];
        //                 this.message.push({ severity: 'error', summary: 'Email Does Not Exist', detail: 'Please Try Again With Different Email Id' });
        //                 break;
        //         }
        //     },
        //     err=>{
        //         this.message = [];
        //         this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
        //         this.spinner = false;
        //         this.spinner2 = false;
        //     });
    }

    verifyResponse(wrapper){
        if(this.verifyForgotToggle||this.regVerifyToggle){
            if(wrapper['verify_mobile']){
                this.mobileVerified = true;
                this.message = [];
                this.message.push({severity:'success', summary:'Success', detail:'Mobile Verified Successfully'});
            }
            if(wrapper['verify_email']){
                this.message = [];
                this.message.push({severity:'success', summary:'Success', detail:'Email Verified Successfully'});
                this.emailVerified = true;
            }
        }
        if(this.regVerifyToggle){
            this.check();
        }
        this.spinner = false;
        this.spinner2 = false;
        this.disappear = true;
    }

    verifyOtp(mode, forgot = false) {
        let wrapper = {'otp':null, 'email':this.wrapper['email'], 'verify_mobile':this.wrapper['verify_mobile'], 'verify_email':this.wrapper['verify_email']}
        if(wrapper['verify_email']){
            wrapper['otp'] = this.emailOtp;
        }
        if(wrapper['verify_mobile']){
            wrapper['otp'] = this.mobileOtp;
        }
        this.masterhttp.verifyOtp(wrapper)
        .subscribe((data)=>{
            if(data['status']==200){
                this.verifyResponse(wrapper);
            }else if(data['status']==721){
                this.spinner = false;
                this.spinner2 = false;
                this.message = [];
                this.message.push({severity:'error', summary:'Incorrect Otp', detail:'Please Try Again'})
            }
            else{
                this.spinner = false;
                this.spinner2 = false;
                this.message = [];
                this.message.push({severity:'error', summary:'Server Error', detail:'Please Try Again'})
            }
        }, err=>{
                this.spinner = false;
                this.spinner2 = false;
                this.message = [];
                this.message.push({severity:'error', summary:'Server Error', detail:'Please Try Again'})
        })

        // if (forgot) {
        //     wrapper['email'] = this.registeredEmail;
        // }
        // wrapper[mode] = true;

        // let x;
        // if (mode == 'verify_email') {
        //     x = 'Email';
        //     wrapper['otp'] = this.emailOtp;
        //     this.spinner2 = true
        // }
        // if (mode == 'verify_mobile') {
        //     x = 'Mobile';
        //     wrapper['otp'] = this.mobileOtp;
        //     this.spinner = true;
        // }
        // this.masterhttp.verifyOtp(wrapper)
        //     .subscribe((data: Response) => {
        //         switch (data['status']) {

        //             case 721:
        //                 this.message = [];
        //                 this.message.push({ severity: 'error', summary: 'Incorrect OTP', detail: 'Please Try Again' });
        //                 break;

        //             case 200:
        //                 this.message = [];
        //                 this.message.push({ severity: 'success', summary: 'Success', detail: x + ' Verified' });
        //                 if (x == 'Mobile') {
        //                     this.mobileVerified = true;
        //                     if (!forgot) {
        //                         this.check();
        //                     }
        //                     else {
        //                         this.mode[this.mode.indexOf('verify_email')] = null;
        //                     }
        //                 }
        //                 if (x == 'Email') {
        //                     this.emailVerified = true;
        //                     if (!forgot) { this.check() }
        //                     else this.mode[this.mode.indexOf('verify_mobile')] = null;
        //                 }
        //                 break;

        //             default:
        //                 this.message = [];
        //                 this.message.push({ severity: 'error', summary: 'Incorrect OTP', detail: 'Could Not Verify Otp' });
        //                 break;
        //         }
        //         this.spinner = false;
        //         this.spinner2 = false;
        //     },
        //     err=>{
        //         this.message = [];
        //         this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
        //         this.spinner = false;
        //         this.spinner2 = false;
        //     });
    }

    setToken(token) {
        localStorage.setItem('session_token',token);
        this.masterhttp.setToken(token);
        localStorage.setItem('session_token', token);
        this.router.navigate(['loadout']);
    }

    signIn() {
        this.httpService.login(this.userLoginCreds)
            .subscribe((data: Response) => {
                if (data['Status'] == 200 || data['status'] == 200) {
                    this.setToken(data['session_token']);
                } else {
                    this.message = [];
                    this.message.push({ severity: 'error', summary: 'Invalid Credentials', detail: 'Sign Up with OlympiadBox' });
                }
            },
            err=>{
                this.message = [];
                this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
            })
    }

    signUp() {
        this.spinner = true;
        this.emailVerified = false;
        this.mobileVerified = false;
        this.wrapper = {'email':this.userRegCreds['email'],'verify_email':true,'verify_mobile':true}
        this.httpService.register(this.userRegCreds)
            .subscribe((data) => {
                if(data['status']==200){
                    this.sendOtp();
                }
                else{
                    this.spinner = false;
                    this.message = [];
                    this.message.push({ severity: 'info', summary: 'Email Already Exists', detail: 'Please Login' });
                }
            //     if (data['status'] == 200) {
            //         const wrapper = [{ 'email': this.userRegCreds['email'], 'verify_mobile': true, 'verify_email': true }]
            //         this.sendOtp('both');
            //         this.message = [];
            //         this.message.push({ severity: 'info', summary: 'Otp Verification', detail: 'Please Verify Your Mobile and Email' });
            //         this.spinner = false;
            //         this.regVerifyToggle = true;
            //     } else {
            //         this.spinner = false;
            //         this.message = [];
            //         this.message.push({ severity: 'info', summary: 'Email Already Exists', detail: 'Please Login' });
            //     }
            // },
            // err=>{
            //     this.message = [];
            //     this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
            //     this.spinner = false;
            }, err => {
                this.message = [];
                this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
                this.spinner = false;
                }
            )
    }

    //called when clicked on forgot password
    forgotPassword() {
        this.loginForgotToggle = true;
        this.emailVerified = false;
        this.mobileVerified = false;
    }

    //used to toggle loginRegister after successful registration
    check() {
        if (this.mobileVerified && this.emailVerified) {
            this.message = []
            this.message.push({ severity: 'success', summary: 'Registration Successful', detail: 'Please login' })
            this.loginRegToggle = false;
            this.regVerifyToggle = false;
        }
    }

    //reset flags
    reset() {
        // login
        this.userLoginCreds['email']=null;
        this.userLoginCreds['password']=null;        
        
        // register
        this.userRegCreds['email']=null;
        this.userRegCreds['firstname']=null;
        this.userRegCreds['mobile']=null;
        this.userRegCreds['lastname']=null;
        this.userRegCreds['class']=null;
        this.userRegCreds['password']=null;
        this.confirmPassword = null;

        // forgot password
        this.registeredEmail = null;
        this.mode = [];
        this.mobileOtp = null;
        this.emailOtp = null;
        this.passwordObj['new_password'] = null;
        this.dummyPassword = null;
        this.wrapper = { 'email':null,'verify_mobile':false,'verify_email':false };

        // verify
        this.loginForgotToggle = false;
        this.regVerifyToggle = false;
        this.mobileVerified = false;
        this.emailVerified = false;
        this.verifyForgotToggle = false;

        this.spinner = false;
        this.spinner2 = false;
        this.disappear = false;
    }

    //submit new password
    changePassword() {
        this.spinner3 = true;
        this.passwordObj['new_password'] = this.dummyPassword;
        this.passwordObj['email'] = this.registeredEmail;
        this.masterhttp.forgotPassword(this.passwordObj)
            .subscribe((data: Response) => {
                if (data['status'] == 200) {
                    this.message = [];
                    this.message.push({ severity: "success", summary: "Password Changed", detail: "Please Login" })
                    this.reset();
                }
                else {
                    this.message = [];
                    this.message.push({ severity: "error", summary: "Unable To Change Password", detail: "Please Try Again" });
                }
                this.spinner3 = false;
            }, 

            err=>{
                this.spinner3 = false;
                this.message = [];
                this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
            });
    }

}
