var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/loginRegister.service';
import { Misc, PersonalInfo } from '../services/data.service';
import { MasterHttpService } from '../services/masterhttp.service';
var LoginComponent = (function () {
    function LoginComponent(httpService, masterhttp, misc, personalInfo, router) {
        this.httpService = httpService;
        this.masterhttp = masterhttp;
        this.misc = misc;
        this.personalInfo = personalInfo;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loggedInCheck();
        this.wrapper = { 'email': null, 'verify_mobile': false, 'verify_email': false };
        this.userLoginCreds = { "username": "", "password": "" };
        this.userRegCreds = { "firstname": "", "lastname": "", "email": "", "password": "", "class": "", "mobile": "" };
        this.passwordObj = { "new_password": "", "email": "" };
        //temporary
        this.dummyClass = [];
        this.dummyClass.push({ label: "Select Class", value: null }, { label: "I", value: "I" }, { label: "II", value: "II" }, { label: "III", value: "III" }, { label: "IV", value: "IV" }, { label: "V", value: "V" }, { label: "VI", value: "VI" }, { label: "VII", value: "VII" }, { label: "VIII", value: "VIII" }, { label: "IX", value: "IX" }, { label: "X", value: "X" });
        this.reset();
    };
    LoginComponent.prototype.loggedInCheck = function () {
        var token = localStorage.getItem('session_token');
        var previousRoute = sessionStorage.getItem('route');
        if (token != null) {
            this.masterhttp.setToken(token);
            if (previousRoute != null) {
                this.router.navigate([previousRoute]);
            }
        }
    };
    LoginComponent.prototype.setWrapper = function (resend, mode) {
        if (resend === void 0) { resend = false; }
        if (mode === void 0) { mode = null; }
        if (mode == 'selective' && !resend) {
            this.wrapper['email'] = this.registeredEmail;
            if (this.mode.indexOf('verify_email') > -1) {
                this.wrapper['verify_email'] = true;
                this.spinner2 = true;
            }
            if (this.mode.indexOf('verify_mobile') > -1) {
                this.wrapper['verify_mobile'] = true;
                this.spinner = true;
            }
        }
        else if (mode == 'forgotMobile' && resend) {
            this.wrapper['email'] = this.registeredEmail;
            this.wrapper['verify_mobile'] = true;
            this.wrapper['verify_email'] = false;
            this.spinner = true;
        }
        else if (mode == 'forgotEmail' && resend) {
            this.wrapper['email'] = this.registeredEmail;
            this.wrapper['verify_mobile'] = false;
            this.wrapper['verify_email'] = true;
            this.spinner2 = true;
        }
        else if (mode == 'mobile' && resend) {
            this.wrapper['email'] = this.userRegCreds['email'];
            this.wrapper['verify_mobile'] = true;
            this.wrapper['verify_email'] = false;
            this.spinner = true;
        }
        else if (mode == 'email' && resend) {
            this.wrapper['email'] = this.userRegCreds['email'];
            this.wrapper['verify_mobile'] = false;
            this.wrapper['verify_email'] = true;
            this.spinner2 = true;
        }
    };
    LoginComponent.prototype.generateResponse = function (data) {
        if (!this.loginRegToggle && !this.verifyForgotToggle) {
            this.checkConditions(data);
            this.verifyForgotToggle = true;
            this.message = [];
            this.message.push({ severity: 'success', summary: 'Reset Password', detail: 'Please Verify To Reset Password' });
        }
        else if (this.wrapper['email'] == this.registeredEmail && this.verifyForgotToggle) {
            this.checkConditions(data);
        }
        else if (this.loginRegToggle && !this.regVerifyToggle) {
            this.checkConditions(data);
            this.regVerifyToggle = true;
            this.message = [];
            this.message.push({ severity: 'success', summary: 'Registration Successful', detail: 'Please Verify Your Email and Mobile' });
        }
        else if (this.loginRegToggle && this.regVerifyToggle) {
            this.checkConditions(data);
        }
        this.wrapper = { 'email': null, 'verify_mobile': false, 'verify_email': false };
    };
    LoginComponent.prototype.checkConditions = function (data) {
        if (data['mobile'] != null && data['email'] != null) {
            this.registeredMobile = data['mobile'];
            this.spinner2 = false;
            this.spinner = false;
        }
        if (data['mobile'] == null && data['email'] != null) {
            this.spinner2 = false;
        }
        if (data['mobile'] != null && data['email'] == null) {
            this.registeredMobile = data['mobile'];
            this.spinner = false;
        }
    };
    LoginComponent.prototype.sendOtp = function () {
        var _this = this;
        console.log(this.wrapper);
        this.masterhttp.sendOtp(this.wrapper)
            .subscribe(function (data) {
            console.log(data['message']);
            if (data['status'] == 200) {
                _this.generateResponse(data['message']);
            }
            else {
                _this.message = [];
                _this.message.push({ severity: 'error', summary: 'Email Does Not Exists', detail: 'Please Try Again With Different Email Address' });
                _this.spinner = false;
                _this.spinner2 = false;
            }
        }, function (err) {
            _this.spinner = false;
            _this.spinner2 = false;
            _this.message = [];
            _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
        });
    };
    LoginComponent.prototype.verifyResponse = function (wrapper) {
        if (this.verifyForgotToggle || this.regVerifyToggle) {
            if (wrapper['verify_mobile']) {
                this.mobileVerified = true;
                this.message = [];
                this.message.push({ severity: 'success', summary: 'Success', detail: 'Mobile Verified Successfully' });
            }
            if (wrapper['verify_email']) {
                this.message = [];
                this.message.push({ severity: 'success', summary: 'Success', detail: 'Email Verified Successfully' });
                this.emailVerified = true;
            }
        }
        if (this.regVerifyToggle) {
            this.check();
        }
        this.spinner = false;
        this.spinner2 = false;
        this.disappear = true;
    };
    LoginComponent.prototype.verifyOtp = function (mode, forgot) {
        var _this = this;
        if (forgot === void 0) { forgot = false; }
        var wrapper = { 'otp': null, 'email': this.wrapper['email'], 'verify_mobile': this.wrapper['verify_mobile'], 'verify_email': this.wrapper['verify_email'] };
        if (wrapper['verify_email']) {
            wrapper['otp'] = this.emailOtp;
        }
        if (wrapper['verify_mobile']) {
            wrapper['otp'] = this.mobileOtp;
        }
        this.masterhttp.verifyOtp(wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.verifyResponse(wrapper);
            }
            else if (data['status'] == 721) {
                _this.spinner = false;
                _this.spinner2 = false;
                _this.message = [];
                _this.message.push({ severity: 'error', summary: 'Incorrect Otp', detail: 'Please Try Again' });
            }
            else {
                _this.spinner = false;
                _this.spinner2 = false;
                _this.message = [];
                _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
            }
        }, function (err) {
            _this.spinner = false;
            _this.spinner2 = false;
            _this.message = [];
            _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
        });
    };
    LoginComponent.prototype.setToken = function (token) {
        localStorage.setItem('session_token', token);
        this.masterhttp.setToken(token);
        this.router.navigate(['loadout']);
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.httpService.login(this.userLoginCreds)
            .subscribe(function (data) {
            if (data['Status'] == 200 || data['status'] == 200) {
                _this.setToken(data['session_token']);
            }
            else {
                _this.message = [];
                _this.message.push({ severity: 'error', summary: 'Invalid Credentials', detail: 'Sign Up with OlympiadBox' });
            }
        }, function (err) {
            _this.message = [];
            _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.loginForgotToggle = false;
        this.spinner = true;
        this.emailVerified = false;
        this.mobileVerified = false;
        this.wrapper = { 'email': this.userRegCreds['email'], 'verify_email': true, 'verify_mobile': true };
        this.httpService.register(this.userRegCreds)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.sendOtp();
            }
            else {
                _this.spinner = false;
                _this.message = [];
                _this.message.push({ severity: 'info', summary: 'Email Already Exists', detail: 'Please Login' });
            }
        }, function (err) {
            _this.message = [];
            _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
            _this.spinner = false;
        });
    };
    //called when clicked on forgot password
    LoginComponent.prototype.forgotPassword = function () {
        this.reset();
        this.regVerifyToggle = false;
        this.loginForgotToggle = true;
    };
    //used to toggle loginRegister after successful registration
    LoginComponent.prototype.check = function () {
        if (this.mobileVerified && this.emailVerified) {
            this.message = [];
            this.message.push({ severity: 'success', summary: 'Registration Successful', detail: 'Please login' });
            this.reset();
            this.clearFlags();
            this.loginRegToggle = false;
        }
    };
    LoginComponent.prototype.reset = function () {
        this.disappear = false;
        // login
        this.userLoginCreds['email'] = null;
        this.userLoginCreds['password'] = null;
        // register
        this.userRegCreds['email'] = null;
        this.userRegCreds['firstname'] = null;
        this.userRegCreds['mobile'] = null;
        this.userRegCreds['lastname'] = null;
        this.userRegCreds['class'] = null;
        this.userRegCreds['password'] = null;
        this.confirmPassword = null;
        // forgot password
        this.registeredEmail = null;
        this.mode = [];
        this.mobileOtp = null;
        this.emailOtp = null;
        this.passwordObj['new_password'] = null;
        this.dummyPassword = null;
        this.wrapper = { 'email': null, 'verify_mobile': false, 'verify_email': false };
    };
    LoginComponent.prototype.clearFlags = function () {
        this.regVerifyToggle = false;
        this.loginForgotToggle = false;
        this.verifyForgotToggle = false;
        this.disappear = false;
        this.emailVerified = false;
        this.mobileVerified = false;
    };
    //submit new password
    LoginComponent.prototype.changePassword = function () {
        var _this = this;
        this.spinner3 = true;
        this.passwordObj['new_password'] = this.dummyPassword;
        this.passwordObj['email'] = this.registeredEmail;
        this.masterhttp.forgotPassword(this.passwordObj)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.message = [];
                _this.message.push({ severity: "success", summary: "Password Changed", detail: "Please Login" });
                _this.reset();
                _this.clearFlags();
                _this.loginRegToggle = false;
            }
            else {
                _this.message = [];
                _this.message.push({ severity: "error", summary: "Unable To Change Password", detail: "Please Try Again" });
            }
            _this.spinner3 = false;
        }, function (err) {
            _this.spinner3 = false;
            _this.message = [];
            _this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again' });
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.reset();
        this.clearFlags();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
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
            ])
        ],
    }),
    __metadata("design:paramtypes", [LoginRegisterService,
        MasterHttpService,
        Misc,
        PersonalInfo,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/login/login.component.js.map