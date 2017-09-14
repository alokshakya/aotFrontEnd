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
import { Http, Headers } from '@angular/http';
import { PersonalInfo, SubjectInfo, Result, chapterwiseTest, Misc } from './data.service';
import { Router } from '@angular/router';
import * as constants from '../../config/constants';
var MasterHttpService = (function () {
    function MasterHttpService(http, router, personalInfo, subjectInfo, misc, chapterwiseTest, result) {
        this.http = http;
        this.router = router;
        this.personalInfo = personalInfo;
        this.subjectInfo = subjectInfo;
        this.misc = misc;
        this.chapterwiseTest = chapterwiseTest;
        this.result = result;
        this.updated = 0;
        this.baseUrl = 'http://scripts.olympiadbox.com/services/api/api.php';
        this.queryHeaders = new Headers();
        this.queryHeaders.append('Content-Type', 'application/json');
        this.queryHeaders.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
    }
    MasterHttpService.prototype.checkToken = function () {
        if (this.token != localStorage.getItem('session_token')) {
            return false;
        }
        else {
            return true;
        }
        ;
    };
    MasterHttpService.prototype.httpError = function () {
        this.router.navigate(['login']);
    };
    MasterHttpService.prototype.dataRetreived = function () {
        this.updated++;
        if (this.updated == 7) {
            var previousRoute = sessionStorage.getItem('route');
            if (previousRoute != null) {
                this.router.navigate([previousRoute]);
            }
            else
                this.router.navigate(['account']);
        }
    };
    MasterHttpService.prototype.setToken = function (token) {
        this.token = token;
        this.queryHeaders = new Headers();
        this.queryHeaders.append('Content-Type', 'application/json');
        this.queryHeaders.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
        this.queryHeaders.append('session_token', localStorage.getItem('session_token'));
        this.dataRetreived();
    };
    MasterHttpService.prototype.sendOtp = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/otp/generate', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
        // response status conditions
    };
    MasterHttpService.prototype.verifyOtp = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/otp/verify', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.updatePassword = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/updatepassword', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.forgotPassword = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/forgotpassword', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.addTestimonial = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/testimonial', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.addAchievement = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/achievement', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.logout = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/logout', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.updateProfile = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/update', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.getSchool = function (couponeCode) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/school', couponeCode, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.generateTest = function (requestbody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/test/generate', requestbody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    MasterHttpService.prototype.nextQuestion = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/test/nextquestion', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // data service implementation
    MasterHttpService.prototype.getPersonalInfo = function () {
        var _this = this;
        this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/user/profile', { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.personalInfo.setInfo(data['message'][0]);
                _this.dataRetreived();
            }
            else {
                _this.httpError();
            }
            ;
        }, function (err) { _this.httpError(); });
    };
    MasterHttpService.prototype.getSyllabus = function () {
        var _this = this;
        this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/classdata/topics', { headers: this.queryHeaders }).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            _this.subjectInfo.setSyllabus(data['class']['subjects']);
            _this.dataRetreived();
        });
    };
    MasterHttpService.prototype.getTestDetails = function () {
        var _this = this;
        this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/test/details', { headers: this.queryHeaders }).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            _this.chapterwiseTest.setTestDetails(data['message']);
            _this.dataRetreived();
        });
    };
    // -----------------------------------------------------------------------------------------------
    MasterHttpService.prototype.setQuestions = function (data) {
        this.chapterwiseTest.setQuesAnswerSet(data);
        this.router.navigate(['test']);
    };
    MasterHttpService.prototype.beginTest = function (requestBody) {
        return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/test/attempt', requestBody, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); });
    };
    // -------------------------------------------------------------------------------------------------
    MasterHttpService.prototype.getTestimonials = function () {
        var _this = this;
        this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/common/tablerecords/testimonial', { headers: this.queryHeaders }).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            _this.misc.setTestimonial(data['message']);
            _this.dataRetreived();
        });
    };
    MasterHttpService.prototype.getNotices = function () {
        var _this = this;
        this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/common/tablerecords/notice_board', { headers: this.queryHeaders }).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            _this.misc.setNotice(data['message']);
            _this.dataRetreived();
        });
    };
    MasterHttpService.prototype.getResult = function () {
        this.result.setResultSummary();
        this.result.setTestSummary();
        this.dataRetreived();
    };
    MasterHttpService.prototype.getUserTestimonials = function (studentId) {
        var _this = this;
        return this.http.get(constants.OLYMPIADBOX_INSTANCE_URL + '/common/relatedtable/testimonial/user_testimonial_set/testimonial_id/student_id/' + studentId, { headers: this.queryHeaders })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) { return _this.personalInfo.setUserTestimonials(data['message']); });
    };
    return MasterHttpService;
}());
MasterHttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Router,
        PersonalInfo,
        SubjectInfo,
        Misc,
        chapterwiseTest,
        Result])
], MasterHttpService);
export { MasterHttpService };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/services/masterhttp.service.js.map