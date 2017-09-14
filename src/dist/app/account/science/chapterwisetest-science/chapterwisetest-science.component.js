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
import { SubjectInfo, PersonalInfo, Result, Misc, chapterwiseTest } from '../../../services/data.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
var ChapterwisetestScienceComponent = (function () {
    function ChapterwisetestScienceComponent(router, subjectInfo, result, misc, chapterwiseTest, personalInfo, masterhttp) {
        this.router = router;
        this.subjectInfo = subjectInfo;
        this.result = result;
        this.misc = misc;
        this.chapterwiseTest = chapterwiseTest;
        this.personalInfo = personalInfo;
        this.masterhttp = masterhttp;
        this.subscribed = false;
        this.generateMsg = [];
        this.generatedFlag = true;
    }
    ChapterwisetestScienceComponent.prototype.redirect = function () {
        this.router.navigate(['account/accountsettings']);
    };
    ChapterwisetestScienceComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["Science", "Chapterwise Test"]);
        this.misc.setLocalRoute('account/science/chapterwisetest');
        this.chapterwiseTestData = {
            labels: ['Remaining', 'Completed', 'Generated'],
            datasets: [{
                    data: [30, 10, 40],
                    backgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"],
                    hoverBackgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"]
                }]
        };
        this.wrapper = {
            'chapter_id': null,
            'student_id': this.personalInfo.studentInfo['student_id'],
            'class_id': this.personalInfo.studentInfo['class_id'],
            'topic_id': null
        };
        this.generatedPanel();
    };
    ChapterwisetestScienceComponent.prototype.generatedPanel = function () {
        this.generatedChapters = [];
        this.generatedChapterIds = [];
        for (var i in this.chapterwiseTest.science['chapters']) {
            if (this.chapterwiseTest.science['chapters'][i].hasOwnProperty('tests')) {
                this.generatedChapters.push(this.chapterwiseTest.science['chapters'][i]);
                this.generatedChapterIds.push(this.chapterwiseTest.science['chapters'][i]['id']);
            }
        }
    };
    ChapterwisetestScienceComponent.prototype.tabOpen = function (e) {
        if (this.check(e)) {
            this.selectedChapter = this.subjectInfo.scienceChapters['chapters'][e.index]['id'];
            this.wrapper['chapter_id'] = this.selectedChapter;
            this.wrapper['topic_id'] = this.subjectInfo.scienceChapters['chapters'][0]['topics'][0]['id'];
            this.generatedFlag = false;
            this.generateMsg = [];
            this.generateMsg.push({ severity: 'info', summary: 'Instruction', detail: 'Click Generate To Create ' + this.subjectInfo.scienceChapters['chapters'][e.index]['name'] + ' Test' });
        }
        else {
            this.generateMsg = [];
            this.generateMsg.push({ severity: 'info', summary: 'Instruction', detail: this.subjectInfo.scienceChapters['chapters'][e.index]['name'] + ' Test Is Already Generated' });
        }
    };
    ChapterwisetestScienceComponent.prototype.check = function (e) {
        if (this.generatedChapterIds.indexOf(this.subjectInfo.scienceChapters['chapters'][e.index]['id']) == -1) {
            return true;
        }
        return false;
    };
    ChapterwisetestScienceComponent.prototype.tabClose = function (e) {
        this.generatedFlag = true;
        this.generateMsg = [];
        this.selectedChapter = null;
    };
    ChapterwisetestScienceComponent.prototype.updatePanel = function () {
        var _this = this;
        this.generateMsg = [];
        this.masterhttp.getTestDetails();
        this.chapterwiseTest.testEvent.subscribe(function (data) {
            if (data) {
                _this.generatedPanel();
                _this.generatedFlag = false;
                _this.selectedChapter = null;
                _this.spinner = false;
            }
        });
        // setTimeout(() => {
        //     this.generatedPanel();
        // }, 2000);
    };
    ChapterwisetestScienceComponent.prototype.generate = function () {
        var _this = this;
        this.spinner = true;
        this.masterhttp.generateTest(this.wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.updatePanel();
                _this.generatedFlag = false;
            }
            else {
                _this.generateMsg = [];
                _this.generateMsg.push({ severity: 'info', summary: 'Could Not Generate Test', detail: 'Please Try Again' });
                _this.spinner = false;
            }
        }, function (err) {
            _this.generateMsg = [];
            _this.generateMsg.push({ severity: 'info', summary: 'Could Not Generate Test', detail: 'Please Try Again' });
            _this.spinner = false;
        });
    };
    ChapterwisetestScienceComponent.prototype.startTest = function (testId, chapterId) {
        var _this = this;
        this.spinner2 = testId;
        var wrapper = {
            "student_id": this.personalInfo.studentInfo['student_id'],
            "chapter_id": chapterId,
            "test_id": testId
        };
        this.chapterwiseTest.activateTestRoute();
        this.chapterwiseTest.setSubject('Science');
        this.masterhttp.beginTest(wrapper)
            .subscribe(function (data) {
            console.log(data);
            if (data['status'] == 200) {
                _this.chapterwiseTest.setQuesAnswerSet(data['message']);
                _this.router.navigate(['test']);
            }
            else {
                _this.generateMsg = [];
                _this.generateMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again' });
            }
            _this.spinner2 = null;
        }, function (err) {
            _this.generateMsg = [];
            _this.generateMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again' });
            _this.spinner2 = null;
        });
    };
    ChapterwisetestScienceComponent.prototype.checkGeneratedTest = function () {
        if (this.chapterwiseTest.qaSet.length == 15) {
            return true;
        }
        return false;
    };
    return ChapterwisetestScienceComponent;
}());
ChapterwisetestScienceComponent = __decorate([
    Component({
        selector: 'app-chapterwisetest-science',
        templateUrl: './chapterwisetest-science.component.html',
        styleUrls: ['./chapterwisetest-science.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        SubjectInfo,
        Result,
        Misc,
        chapterwiseTest,
        PersonalInfo,
        MasterHttpService])
], ChapterwisetestScienceComponent);
export { ChapterwisetestScienceComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/science/chapterwisetest-science/chapterwisetest-science.component.js.map