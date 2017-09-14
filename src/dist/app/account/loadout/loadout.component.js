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
import { Router } from '@angular/router';
import { MasterHttpService } from '../../services/masterhttp.service';
import { PersonalInfo, SubjectInfo, Misc } from '../../services/data.service';
var LoadoutComponent = (function () {
    function LoadoutComponent(http, personalInfo, SubjectInfo, misc, router) {
        this.http = http;
        this.personalInfo = personalInfo;
        this.SubjectInfo = SubjectInfo;
        this.misc = misc;
        this.router = router;
    }
    LoadoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.updated = 0;
        this.http.setToken(localStorage.getItem('session_token'));
        this.http.getPersonalInfo();
        this.http.getSyllabus();
        this.http.getNotices();
        this.http.getTestDetails();
        this.http.getTestimonials();
        this.personalInfo.userInfoEvent.subscribe(function (data) {
            if (data) {
                _this.http.getUserTestimonials(_this.personalInfo.studentInfo['student_id']);
            }
        });
        this.http.getResult();
        this.misc.logIn();
    };
    LoadoutComponent.prototype.ngOnDestroy = function () {
        this.http.updated = 0;
    };
    return LoadoutComponent;
}());
LoadoutComponent = __decorate([
    Component({
        selector: 'app-loadout',
        templateUrl: './loadout.component.html',
        styleUrls: ['./loadout.component.scss']
    }),
    __metadata("design:paramtypes", [MasterHttpService,
        PersonalInfo,
        SubjectInfo,
        Misc,
        Router])
], LoadoutComponent);
export { LoadoutComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/loadout/loadout.component.js.map