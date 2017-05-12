import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { Response } from '@angular/http';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {
    subscriptionTableData: any;
    subscriptionTableHeaders: any;
    subjectsPrice:any;
    selectedPackage:Array<string>;
    subjects:Array<string>;
    coupon:string;
    test:Array<string>;
    
    constructor(
        private _router:Router,
        private price: SubjectService) {

            this.selectedPackage = [];

            this.subscriptionTableData = [
                {"Order ID":"OB26DF", "Subject":"Science", "Subscription Date":"23 March 2017", "Valid Till":"23 September 2017", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBTDZ2", "Subject":"Mathematics", "Subscription Date":"05 June 2017", "Valid Till":"05 December 2017", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBDJJ4", "Subject":"English", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBSKD3", "Subject":"Reasoning", "Subscription Date":"05 March 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBKG33", "Subject":"General Knowledge", "Subscription Date":"05 April 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBHT45", "Subject":"Computer/Cyber", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
            ];
        
            this.subscriptionTableHeaders =  [
                {field: 'Order ID', header: 'Order ID'},
                {field: 'Subject', header: 'Subject'},
                {field: 'Subscription Date', header: 'Subscription Date'},
                {field: 'Valid Till', header: 'Valid Till'},
                {field: "Download Invoice", header: "Download Invoice"}
            ]
    }

    ngOnInit(){
        this.subjectsPrice = []
        this.price.getSubjectPrice(1).subscribe((data: Response) => {
            data = data['resource'];
            for(let i in data){
                this.subjectsPrice.push(data[i]['amount']);
            }
        })
        this.subjects = [];
        this.price.getSubjectSet(1).subscribe((data: Response) => {
            data = data['resource']
            for(let i in data){
                this.subjects.push(data[i]['subjects_by_subject_id']['name'])
            }
        })
    }

    pay(){
        alert('Selected Packages: ' + this.selectedPackage)
    }
}

