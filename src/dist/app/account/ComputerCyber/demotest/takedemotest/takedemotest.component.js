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
import { Observable } from 'rxjs/Rx';
import { ConfirmationService } from 'primeng/primeng';
import { MasterHttpService } from '../../../../services/masterhttp.service';
import { SubjectInfo, Misc, chapterwiseTest, PersonalInfo } from '../../../../services/data.service';
var TakedemotestComponent = (function () {
    function TakedemotestComponent(router, confirmservice, masterhttp, subjectInfo, personalInfo, chapterwiseTest, misc) {
        this.router = router;
        this.confirmservice = confirmservice;
        this.masterhttp = masterhttp;
        this.subjectInfo = subjectInfo;
        this.personalInfo = personalInfo;
        this.chapterwiseTest = chapterwiseTest;
        this.misc = misc;
        this.attemptedQues = 0;
        this.counter = 0;
        this.clickListener = '';
        this.test = "Demo Test";
        this.subject = "Computer/Cyber";
        this.start = false;
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.hintDisplay = false;
        this.response = {};
        this.questionStatus = {};
        this.imageUrl = 'https://s3.ap-south-1.amazonaws.com/olympiadbox/oa-images/Data';
    }
    TakedemotestComponent.prototype.ngOnInit = function () {
        this.dummy = '$\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$';
        this.setResponse();
        this.startTest();
        this.displayQuestion(this.lastQuestion);
        this.wrapper = { 'student_test_id': this.chapterwiseTest.attemptDetails['students_test_id'], };
        this.totalQues = this.chapterwiseTest.qaSet.length;
        this.masterhttp.getTestDetails();
    };
    TakedemotestComponent.prototype.displayQuestion = function (index) {
        this.clickListener = index;
        this.selectedQuestion = this.chapterwiseTest.qaSet[index];
        this.render();
        this.answer = null;
        this.hintDisplay = false;
        this.history = false;
        this.setCorrectAnswer();
        this.showHint();
    };
    TakedemotestComponent.prototype.render = function () {
    };
    TakedemotestComponent.prototype.setResponse = function () {
        if (this.chapterwiseTest.attemptDetails['last_question'] == 0) {
            this.lastQuestion = 0;
        }
        for (var i in this.chapterwiseTest.qaSet) {
            if (this.chapterwiseTest.qaSet[i]['id'] == this.chapterwiseTest.attemptDetails['last_question']) {
                this.lastQuestion = parseInt(i);
            }
            switch (this.chapterwiseTest.qaSet[i]['state']) {
                case "correct":
                    this.questionStatus[i] = "Correct";
                    break;
                case "wrong":
                    this.questionStatus[i] = "Wrong";
                    break;
                case "marked":
                    this.questionStatus[i] = "Marked";
                    break;
            }
        }
    };
    TakedemotestComponent.prototype.setCorrectAnswer = function () {
        for (var i in this.selectedQuestion['answers']) {
            if (this.selectedQuestion['answers'][i]['id'] == this.selectedQuestion['correct_answer_id']) {
                this.correctAnswer = this.selectedQuestion['answers'][i];
                break;
            }
        }
    };
    TakedemotestComponent.prototype.validate = function () {
        var _this = this;
        this.response[this.clickListener] = this.selectedQuestion['answers'][this.answer];
        this.wrapper['mark_for_review'] = "0";
        this.wrapper['question_id'] = this.selectedQuestion['id'];
        this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
        this.wrapper['attempted_answer'] = this.selectedQuestion['answers'][this.answer]['id'];
        this.masterhttp.nextQuestion(this.wrapper).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.attemptedQues += 1;
                _this.counter = Math.ceil(_this.attemptedQues * 100 / _this.totalQues);
                // this.counter+=Math.ceil(100/this.totalQues);
                if (_this.selectedQuestion['correct_answer_id'] == _this.selectedQuestion['answers'][_this.answer]['id']) {
                    _this.questionStatus[_this.clickListener] = "Correct";
                    _this.correct = true;
                }
                else {
                    _this.correct = false;
                    _this.questionStatus[_this.clickListener] = "Wrong";
                }
                _this.showHint();
            }
            else {
                _this.errMsg = [];
                _this.errMsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Saving Response' });
            }
        }, function (err) {
            _this.errMsg = [];
            _this.errMsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Saving Response' });
        });
    };
    TakedemotestComponent.prototype.markForReview = function () {
        var _this = this;
        this.wrapper['mark_for_review'] = "1";
        this.wrapper['question_id'] = this.selectedQuestion['id'];
        this.wrapper['correct_answer'] = this.selectedQuestion['correct_answer_id'];
        this.wrapper['attempted_answer'] = "0";
        this.masterhttp.nextQuestion(this.wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.attemptedQues += 1;
                _this.counter = Math.ceil(_this.attemptedQues * 100 / _this.totalQues);
                _this.updateView();
                _this.answer = null;
                _this.correctAnswer = null;
            }
            else {
                _this.errMsg = [];
                _this.errMsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Saving Response' });
            }
        }, function (err) {
            _this.errMsg = [];
            _this.errMsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Saving Response' });
        });
    };
    TakedemotestComponent.prototype.nextQuestion = function () {
        if (parseInt(this.clickListener) == this.totalQues - 1) {
            this.displayQuestion(0);
        }
        else
            this.displayQuestion(this.clickListener + 1);
    };
    TakedemotestComponent.prototype.showHint = function () {
        if (this.validated()) {
            if (this.questionStatus[this.clickListener] == "Marked") {
                this.hintDisplay = false;
            }
            else if (this.questionStatus[this.clickListener] == "Correct") {
                this.correct = true;
                this.hintDisplay = true;
            }
            else if (this.questionStatus[this.clickListener] == "Wrong") {
                this.correct = false;
                this.hintDisplay = true;
            }
        }
    };
    TakedemotestComponent.prototype.mark = function () {
        var q = this.clickListener;
        this.questionStatus[q] = 'Marked';
    };
    TakedemotestComponent.prototype.updateView = function () {
        var q = this.clickListener;
        this.questionStatus[q] = 'Marked';
    };
    TakedemotestComponent.prototype.startTest = function () {
        var _this = this;
        if (this.start == false) {
            var timer = Observable.timer(0, 1000); //initiate timer
            this.help = false;
            timer.subscribe(function (t) {
                _this.sec += 1;
                if (_this.sec == 60) {
                    _this.sec = 0;
                    _this.min += 1;
                }
                if (_this.min == 60) {
                    _this.min = 0;
                    _this.hour += 1;
                }
                if (_this.hour == 24) {
                    _this.hour = 0;
                }
            });
        }
    };
    TakedemotestComponent.prototype.validated = function () {
        if (this.questionStatus[this.clickListener] == "Correct" || this.questionStatus[this.clickListener] == "Wrong" || this.questionStatus[this.clickListener] == "Marked") {
            return true;
        }
        return false;
    };
    TakedemotestComponent.prototype.subscribed = function (sub) {
        return true;
    };
    TakedemotestComponent.prototype.quit = function () {
        var _this = this;
        this.stopFlag = true;
        this.confirmservice.confirm({
            message: 'Are you sure you want to quit ?',
            accept: function () {
                _this.router.navigate([sessionStorage['route']]);
            },
            reject: function () {
                _this.stopFlag = false;
            }
        });
    };
    TakedemotestComponent.prototype.canDeactivate = function () {
        if (this.stopFlag) {
            return true;
        }
        return false;
    };
    TakedemotestComponent.prototype.ngOnDestroy = function () {
        this.stopFlag = false;
        this.chapterwiseTest.activateRoute = false;
    };
    return TakedemotestComponent;
}());
TakedemotestComponent = __decorate([
    Component({
        selector: 'app-takedemotest',
        templateUrl: './takedemotest.component.html',
        styleUrls: ['./takedemotest.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        ConfirmationService,
        MasterHttpService,
        SubjectInfo,
        PersonalInfo,
        chapterwiseTest,
        Misc])
], TakedemotestComponent);
export { TakedemotestComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/ComputerCyber/demotest/takedemotest/takedemotest.component.js.map