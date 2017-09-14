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
import { SubjectInfo, Result, Misc } from '../../services/data.service';
var DashboardComponent = (function () {
    function DashboardComponent(router, subjectInfo, result, misc) {
        this.router = router;
        this.subjectInfo = subjectInfo;
        this.result = result;
        this.misc = misc;
        this.received = false;
        this.testSummary = this.result.testSummary;
        this.resultSummary = this.result.testSummary;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.misc.setLocalRoute('account/dashboard');
        this.misc.setCurrentRoute(["Dashboard"]);
        sessionStorage.setItem('route', 'account/dashboard');
    };
    DashboardComponent.prototype.startTest = function () {
        this.router.navigate(['account/computers/sampletest']);
    };
    DashboardComponent.prototype.redirect = function (sub, destination) {
        console.log(sub);
        console.log(destination);
        if (destination == 'settings') {
            this.router.navigate(['account/accountsettings']);
        }
        else if (destination == 'demo') {
            switch (sub) {
                case "Computer-Cyber":
                    this.router.navigate(['account/computers/demotest']);
                    break;
                case "General-Knowledge":
                    this.router.navigate(['account/gk/demotest']);
                    break;
                case "Science":
                    this.router.navigate(['account/science/demotest']);
                    break;
                case "English":
                    this.router.navigate(['account/english/demotest']);
                    break;
                case "Reasoning":
                    this.router.navigate(['account/reasoning/demotest']);
                    break;
                case "Mathematics":
                    this.router.navigate(['account/math/demotest']);
                    break;
            }
        }
        else if (destination == 'sample') {
            switch (sub) {
                case "Computer-Cyber":
                    this.router.navigate(['account/computers/sampletest']);
                    break;
                case "General-Knowledge":
                    this.router.navigate(['account/gk/sampletest']);
                    break;
                case "Science":
                    this.router.navigate(['account/science/sampletest']);
                    break;
                case "English":
                    this.router.navigate(['account/english/sampletest']);
                    break;
                case "Reasoning":
                    this.router.navigate(['account/reasoning/sampletest']);
                    break;
                case "Mathematics":
                    this.router.navigate(['account/math/sampletest']);
                    break;
            }
        }
    };
    DashboardComponent.prototype.redirectToTest = function (i, j) {
        // let a = i.toLowerCase()
        var b = j.toLowerCase().replace(/\s/g, "");
        // this.router.navigate(['account/'+a+'/'+b]);
        switch (i) {
            case "Computer-Cyber":
                this.router.navigate(['account/computers/' + b]);
                break;
            case "Science":
                this.router.navigate(['account/science/' + b]);
                break;
            case "English":
                this.router.navigate(['account/english/' + b]);
                break;
            case "General-Knowledge":
                this.router.navigate(['account/gk/' + b]);
                break;
            case "Reasoning":
                this.router.navigate(['account/reasoning/' + b]);
                break;
            case "Mathematics":
                this.router.navigate(['account/math/' + b]);
                break;
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    };
    DashboardComponent.prototype.redirectToResult = function (i) {
        switch (i) {
            case "Computer-Cyber":
                this.router.navigate(['account/computers/result']);
                break;
            case "Science":
                this.router.navigate(['account/science/result']);
                break;
            case "English":
                this.router.navigate(['account/english/result']);
                break;
            case "General-Knowledge":
                this.router.navigate(['account/gk/result']);
                break;
            case "Reasoning":
                this.router.navigate(['account/reasoning/result']);
                break;
            case "Mathematics":
                this.router.navigate(['account/math/result']);
                break;
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.css']
    }),
    __metadata("design:paramtypes", [Router,
        SubjectInfo,
        Result,
        Misc])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/dashboard/dashboard.component.js.map