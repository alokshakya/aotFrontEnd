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
import { SubjectInfo, Misc } from '../../services/data.service';
var AccountsettingsComponent = (function () {
    function AccountsettingsComponent(_router, subjectInfo, misc) {
        this._router = _router;
        this.subjectInfo = subjectInfo;
        this.misc = misc;
        this.selectedPackage = [];
        this.col = [{ "header": "Subject", "field": "Subject" }, { "header": "Price", "field": "Price" }];
        this.subPriceTable = [
            { "Subject": "Computer-Cyber", "Price": 500 },
            { "Subject": "Science", "Price": 500 },
            { "Subject": "Mathematics", "Price": 500 },
            { "Subject": "General-Knowledge", "Price": 500 },
            { "Subject": "English", "Price": 500 },
            { "Subject": "Reasoning", "Price": 500 }
        ];
        this.subscriptionTableData = [
            { "Order ID": "OB26DF", "Subject": "Science", "Subscription Date": "23 March 2017", "Valid Till": "23 September 2017", "Download Invoice": "Invoice .pdf" },
            { "Order ID": "OBTDZ2", "Subject": "Mathematics", "Subscription Date": "05 June 2017", "Valid Till": "05 December 2017", "Download Invoice": "Invoice .pdf" },
            { "Order ID": "OBDJJ4", "Subject": "English", "Subscription Date": "05 June 2017", "Valid Till": "05 January 2018", "Download Invoice": "Invoice .pdf" },
            { "Order ID": "OBSKD3", "Subject": "Reasoning", "Subscription Date": "05 March 2017", "Valid Till": "05 January 2018", "Download Invoice": "Invoice .pdf" },
            { "Order ID": "OBKG33", "Subject": "General-Knowledge", "Subscription Date": "05 April 2017", "Valid Till": "05 January 2018", "Download Invoice": "Invoice .pdf" },
            { "Order ID": "OBHT45", "Subject": "Computer-Cyber", "Subscription Date": "05 June 2017", "Valid Till": "05 January 2018", "Download Invoice": "Invoice .pdf" },
        ];
    }
    AccountsettingsComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["Account Settings"]);
        this.misc.setLocalRoute('account/accountsettings');
        // this.subjectsPrice = []
        // this.price.getSubjectPrice(1).subscribe((data: Response) => {
        //     data = data['resource'];
        //     for(let i in data){
        //         this.subjectsPrice.push(data[i]['amount']);
        //     }
        // })
        // this.subjects = [];
        // this.price.getSubjectSet(1).subscribe((data: Response) => {
        //     data = data['resource']
        //     for(let i in data){
        //         this.subjects.push(data[i]['subjects_by_subject_id']['name'])
        //     }
        // })
        //temporary service used
        //     this.dummyPrice = []
        //     this.masterhttp.getFee()
        //     .subscribe((data) => {
        //         data = data['fee']['records'];
        //         let a = [];
        //         for (let i in data){
        //         this.subPriceTable.push({"Subject":"Enn","Price":data[i][2]});
        //         }        
        // })
        //     //temporary service used
        //     this.dummySubjects=[]
        //     this.masterhttp.getSubjects()
        //     .subscribe((data) =>{
        //          for (let i in data['subjects']['records']){
        //         this.dummySubjects.push(data['subjects']['records'][i][1])
        //         }
        //     })
    };
    AccountsettingsComponent.prototype.pay = function () {
        for (var i in this.selectedPackage)
            console.log(this.selectedPackage[i]["Subject"]);
    };
    return AccountsettingsComponent;
}());
AccountsettingsComponent = __decorate([
    Component({
        selector: 'app-accountsettings',
        templateUrl: './accountsettings.component.html',
        styleUrls: ['./accountsettings.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        SubjectInfo,
        Misc])
], AccountsettingsComponent);
export { AccountsettingsComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/accountsettings/accountsettings.component.js.map