var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as constants from '../../config/constants';
import { Misc } from './data.service';
import 'rxjs/Rx';
var LoginRegisterService = (function () {
    function LoginRegisterService(http, misc) {
        this.http = http;
        this.misc = misc;
        this.queryHeaders = new Headers();
        this.queryHeaders.append('Content-Type', 'application/json');
        this.queryHeaders.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
        this.options = new RequestOptions({ headers: this.queryHeaders });
    }
    LoginRegisterService.prototype.login = function (loginCreds) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/login', loginCreds, this.options)
            .map(function (resp) { return resp.json(); });
        // var obj = JSON.parse(data['_body']);
        // if(obj['Status']==706){
        //   return false;
        // }else {
        //   this.misc.setToken(obj['session_token'])
        //   return true;
        // }
    };
    LoginRegisterService.prototype.register = function (registerCreds) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/register', registerCreds, this.options)
            .map(function (resp) { return resp.json(); });
    };
    return LoginRegisterService;
}());
LoginRegisterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Misc])
], LoginRegisterService);
export { LoginRegisterService };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/services/loginRegister.service.js.map