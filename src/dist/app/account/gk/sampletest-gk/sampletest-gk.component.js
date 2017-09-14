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
var SampletestGkComponent = (function () {
    function SampletestGkComponent(router, misc, subjectInfo) {
        this.router = router;
        this.misc = misc;
        this.subjectInfo = subjectInfo;
        this.testData = {
            "Sample Test 1": "35/50",
            "Sample Test 2": "Start",
            "Sample Test 3": "Start",
            "Sample Test 4": "Resume",
            "Sample Test 5": "45/50",
            "Sample Test 6": "20/50",
            "Sample Test 7": "Start",
            "Sample Test 8": "30/50",
            "Sample Test 9": "23/50",
            "Sample Test 10": "Start"
        };
        this.examPattern = [];
        this.examPattern.push({ label: "SOF", value: "null" }, { label: "SELECT EXAM", value: "null" });
    }
    SampletestGkComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["English", "Sample Test"]);
        this.misc.setLocalRoute('account/english/sampletest');
        //for chart
        this.sampleTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                    data: [4, 10],
                    backgroundColor: ["#5CB85C", "#D9534F"],
                    hoverBackgroundColor: ["#5CB85C", "#D9534F"]
                }]
        };
        //   this.chapterNames = []
        //   this.subject.getChapters(1).subscribe((data: Response) =>{
        //       data = data['resource'];
        //       for(let i in data){
        //           this.chapterNames.push(data[i]['name']);
        //       }
        //   })
        //temporary service used
        // this.dummyChapters=[]
        // this.masterhttp.getChapters()
        // .subscribe(data=>{
        //   data = data['chapters']['records'];
        //   for(let i in data){
        //     this.dummyChapters.push(data[i][1])
        //   }
        // })
        // //temporary service used
        // this.dummyTopics = [];
        // this.masterhttp.getTopics()
        // .subscribe(data=>{
        //   data = data['topics']['records'];
        //   for(let i in data){
        //     this.dummyTopics.push(data[i][1])
        //   }
        // })
    };
    SampletestGkComponent.prototype.redirect = function () {
        this.router.navigate(['account/accountsettings']);
    };
    return SampletestGkComponent;
}());
SampletestGkComponent = __decorate([
    Component({
        selector: 'app-sampletest-gk',
        templateUrl: './sampletest-gk.component.html',
        styleUrls: ['./sampletest-gk.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        Misc,
        SubjectInfo])
], SampletestGkComponent);
export { SampletestGkComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/gk/sampletest-gk/sampletest-gk.component.js.map