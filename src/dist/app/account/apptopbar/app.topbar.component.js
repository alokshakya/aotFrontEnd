var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, forwardRef } from '@angular/core';
import { AccountMainComponent } from '../main/main.component';
import { Router } from '@angular/router';
import { PersonalInfo, Misc } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';
var AppTopBar = (function () {
    function AppTopBar(app, router, misc, personalInfo, masterhttp) {
        this.app = app;
        this.router = router;
        this.misc = misc;
        this.personalInfo = personalInfo;
        this.masterhttp = masterhttp;
    }
    AppTopBar.prototype.logout = function () {
        localStorage.removeItem('session_token');
        sessionStorage.removeItem('route');
        var wrapper = { 'user_info_id': this.personalInfo.userInfo['user_info_id'] };
        this.masterhttp.logout(wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                localStorage.removeItem('session_token');
                sessionStorage.removeItem('route');
            }
        });
    };
    ;
    AppTopBar.prototype.activeComponent = function () {
        var _this = this;
        this.misc.currentRoute.subscribe(function (data) {
            _this.currentComponent = data;
        });
    };
    AppTopBar.prototype.ngOnInit = function () {
        var _this = this;
        this.activeComponent();
        this.router.events.subscribe(function (event) {
            var a = event['url'];
            _this.currentPage = a.split('/');
            _this.currentPage.shift();
            _this.currentPage.shift();
        });
    };
    AppTopBar.prototype.redirect = function (target) {
        this.router.navigate([target]);
    };
    return AppTopBar;
}());
AppTopBar = __decorate([
    Component({
        selector: 'app-topbar',
        templateUrl: './app.topbar.component.html',
    }),
    __param(0, Inject(forwardRef(function () { return AccountMainComponent; }))),
    __metadata("design:paramtypes", [AccountMainComponent,
        Router,
        Misc,
        PersonalInfo,
        MasterHttpService])
], AppTopBar);
export { AppTopBar };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/apptopbar/app.topbar.component.js.map