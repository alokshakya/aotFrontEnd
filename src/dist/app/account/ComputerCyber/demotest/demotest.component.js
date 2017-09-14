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
var DemotestComponent = (function () {
    function DemotestComponent(router, subjectInfo, misc) {
        this.router = router;
        this.subjectInfo = subjectInfo;
        this.misc = misc;
    }
    DemotestComponent.prototype.takedemotest = function () {
        this.router.navigate(['demotest']);
    };
    DemotestComponent.prototype.ngOnInit = function () {
        console.log(this.subjectInfo.computerChapters['chapters']);
        this.misc.setCurrentRoute(["Computer-Cyber", "Demo Test"]);
        this.misc.setLocalRoute('account/computers/demotest');
        // this.syllabus = this.misc.syllabus['class']['subjects'][0];
        // console.log(this.syllabus);
        this.demoTestData = {
            labels: ['Remaining'],
            datasets: [{ data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"] }]
        };
        if (this.subjectInfo.attemptedDemo['Computer/Cyber']) {
            this.demoTestData['labels'] = ['Completed'];
            this.demoTestData['datasets'] = [{ data: [1], backgroundColor: ['#5CB85C'], hoverBackgroundColor: ["#5CB85C"] }];
        }
        //   this.chapterNames = [];
        //   this.subjectSet.getChapters(1).subscribe((data: Response) => {
        //       data = data['resource'];
        //       for(let i in data){
        //           this.chapterNames.push(data[i]['name'])
        //     }
        // })
        //temporary service used
        // this.dummyChapters = []
        // this.masterhttp.getChapters()
        // .subscribe(data=>{
        //     data = data['chapters']['records'];
        //     for(let i in data){
        //     this.dummyChapters.push(data[i][1])
        //     }
        // })
        // this.dummyTopics = [];
        // this.masterhttp.getTopics()
        // .subscribe(data => {
        //     data = data['topics']['records']
        //     for(let i in data){
        //         this.dummyTopics.push(data[i][1])
        //     }
        // })
    };
    return DemotestComponent;
}());
DemotestComponent = __decorate([
    Component({
        selector: 'app-demotest',
        templateUrl: './demotest.component.html',
        styleUrls: ['./demotest.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        SubjectInfo,
        Misc])
], DemotestComponent);
export { DemotestComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/ComputerCyber/demotest/demotest.component.js.map