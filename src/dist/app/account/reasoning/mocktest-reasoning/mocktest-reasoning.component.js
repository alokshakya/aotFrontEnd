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
import { SubjectInfo, Misc } from '../../../services/data.service';
var MocktestReasoningComponent = (function () {
    function MocktestReasoningComponent(router, subjectInfo, misc) {
        this.router = router;
        this.subjectInfo = subjectInfo;
        this.misc = misc;
        this.date = Date.now();
        this.mockTestTableData = [
            { "Test": "Mock Test 1", "Slot 1": "95 Percentile", "Slot 2": "NA" },
            { "Test": "Mock Test 2", "Slot 1": "DATE&TIME", "Slot 2": "DATE&TIME" },
            { "Test": "Mock Test 3", "Slot 1": "DATE&TIME", "Slot 2": "DATE&TIME" }
        ];
        this.examPattern = [];
        this.examPattern.push({ label: "SOF", value: "null" });
    }
    MocktestReasoningComponent.prototype.redirect = function () {
        this.router.navigate(['account/accountsettings']);
    };
    MocktestReasoningComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["Reasoning", "Mock Test"]);
        this.misc.setLocalRoute('account/reasoning/mocktest');
        //for chart
        this.mockTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{ data: [1, 2], backgroundColor: ["#5CB85C", "#D9534F"], hoverBackgroundColor: ["#5CB85C", "#D9534F",] }]
        };
        //     //used temporary service
        //   this.dummyChapters=[]
        //   this.masterhttp.getChapters()
        //   .subscribe(data=>{
        //       data = data['chapters']['records'];
        //       for(let i in data){
        //           this.dummyChapters.push(data[i][1])
        //       }
        //     //used temporary service
        //   this.dummyTopics=[];
        //   this.masterhttp.getTopics()
        //   .subscribe(data=>{
        //       data = data['topics']['records'];
        //       for(let i in data){
        //           this.dummyTopics.push(data[i][1])
        //       }
        //   })
        //   })    
    };
    return MocktestReasoningComponent;
}());
MocktestReasoningComponent = __decorate([
    Component({
        selector: 'app-mocktest-reasoning',
        templateUrl: './mocktest-reasoning.component.html',
        styleUrls: ['./mocktest-reasoning.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        SubjectInfo,
        Misc])
], MocktestReasoningComponent);
export { MocktestReasoningComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/reasoning/mocktest-reasoning/mocktest-reasoning.component.js.map