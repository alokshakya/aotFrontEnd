import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SubjectInfo, Result, Misc } from '../../services/data.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{


    subjectSummary:any;
    subjectLoader:boolean;

    noticeBoard:any;
    noticeLoader:boolean;
    
    testimonials:any;
    testimonialLoader:boolean;

    sessionToken:string;

    received=false;
    subscribedSubjects:any;

    dummySubjects:any;

    constructor(
        private router: Router, 
        private subjectInfo: SubjectInfo,
        private result: Result,
        private misc: Misc
        ) {
            

    }

    ngOnInit(){}
                        
    startTest(){
        this.router.navigate(['account/computers/sampletest'])
    }

    redirect(destination){
        if(destination=='demo'){
            this.router.navigate(['account/computers/demotest']);
        }else {this.router.navigate(['account/accountsettings'])}
    }
    
    redirectToTest(i,j){
        // let a = i.toLowerCase()
        let b = j.toLowerCase().replace(/\s/g, "");
        // this.router.navigate(['account/'+a+'/'+b]);
        this.router.navigate(['account/computers/'+b])
    }

    redirectToResult(i){
        let a = i.toLowerCase();
        this.router.navigate(['account/computers/result'])
    }

}