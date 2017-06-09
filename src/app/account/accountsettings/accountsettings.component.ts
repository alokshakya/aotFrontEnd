import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { Response } from '@angular/http';
import { MasterHttpService } from '../../services/masterhttp.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {

    //subscription details panel
    subscriptionTableData: any;
    subscriptionTableHeaders: any;
    
    //subscribe now panel
    selectAll:boolean;
    subjectsPrice:any;
    selectedPackage:Array<string>;
    subjects:Array<string>;
    coupon:string;
    subPriceTable:any;


    //temporary
    col:Array<any>;  //header for datatable
    dummySubjects:Array<string>;
    dummyPrice:Array<number>;
    
    constructor(
        private _router:Router,
        private masterhttp: MasterHttpService) 
        {
            this.selectedPackage = [];

            this.col=[{"header":"Subject","field":"Subject"},{"header":"Price","field":"Price"}]

            this.subPriceTable = [
                                    {"Subject":"Computer/Cyber","Price":500},
                                    {"Subject":"Science","Price":500},
                                    {"Subject":"Mathematics","Price":500},
                                    {"Subject":"General Knowledge","Price":500},
                                    {"Subject":"English","Price":500},
                                    {"Subject":"Reasoning","Price":500}
                                    ]

            this.subscriptionTableData = [
                {"Order ID":"OB26DF", "Subject":"Science", "Subscription Date":"23 March 2017", "Valid Till":"23 September 2017", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBTDZ2", "Subject":"Mathematics", "Subscription Date":"05 June 2017", "Valid Till":"05 December 2017", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBDJJ4", "Subject":"English", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBSKD3", "Subject":"Reasoning", "Subscription Date":"05 March 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBKG33", "Subject":"General Knowledge", "Subscription Date":"05 April 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
                {"Order ID":"OBHT45", "Subject":"Computer/Cyber", "Subscription Date":"05 June 2017", "Valid Till":"05 January 2018", "Download Invoice":"Invoice .pdf"},
            ];
        
    }

    ngOnInit(){
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
        this.dummyPrice = []
        this.masterhttp.getFee()
        .subscribe((data) => {
            data = data['fee']['records'];
            var a = [];
            for (let i in data){
            this.subPriceTable.push({"Subject":"Enn","Price":data[i][2]});
            }        
    })

        //temporary service used
        this.dummySubjects=[]
        this.masterhttp.getSubjects()
        .subscribe((data) =>{
             for (let i in data['subjects']['records']){
            this.dummySubjects.push(data['subjects']['records'][i][1])
            }
        })
    }

    pay(){
        for(let i in this.selectedPackage)
        console.log(this.selectedPackage[i]["Subject"])
    }
}



