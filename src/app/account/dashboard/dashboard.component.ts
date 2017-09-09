import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SubjectInfo, Result, Misc } from '../../services/data.service';

declare var MathJax:any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {


    subjectSummary: any;
    subjectLoader: boolean;

    noticeBoard: any;
    noticeLoader: boolean;

    testimonials: any;
    testimonialLoader: boolean;

    sessionToken: string;

    received = false;
    subscribedSubjects: any;

    dummySubjects: any;
    testSummary;
    resultSummary;
    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public result: Result,
        public misc: Misc
    ) {

        this.testSummary = this.result.testSummary;
        this.resultSummary = this.result.testSummary;

    }

    ngOnInit() {
        this.misc.setLocalRoute('account/dashboard');
        this.misc.setCurrentRoute(["Dashboard"]);
        sessionStorage.setItem('route','account/dashboard');
    }

    startTest() {
        this.router.navigate(['account/computers/sampletest'])
    }

    redirect(sub,destination) {
        if(destination=='settings'){
            this.router.navigate(['account/accountsettings'])
        }
        else if(destination=='demo'){
            switch (sub) {
                case "Computer-Cyber":
                    this.router.navigate(['account/computers/demotest'])
                    break;

                case "General-Knowledge":
                    this.router.navigate(['account/gk/demotest'])
                    break;
                
                case "Science":
                    this.router.navigate(['account/science/demotest'])
                    break;

                case "English":
                    this.router.navigate(['account/english/demotest'])
                    break;

                case "Reasoning":
                    this.router.navigate(['account/reasoning/demotest'])
                    break;

                case "Mathematics":
                    this.router.navigate(['account/math/demotest'])
                    break;
            }
        }
        else if(destination=='sample'){
            switch (sub) {
                case "Computer-Cyber":
                    this.router.navigate(['account/computers/sampletest'])
                    break;

                case "General-Knowledge":
                    this.router.navigate(['account/gk/sampletest'])
                    break;
                
                case "Science":
                    this.router.navigate(['account/science/sampletest'])
                    break;

                case "English":
                    this.router.navigate(['account/english/sampletest'])
                    break;

                case "Reasoning":
                    this.router.navigate(['account/reasoning/sampletest'])
                    break;

                case "Mathematics":
                    this.router.navigate(['account/math/sampletest'])
                    break;
            }
        }
    }

    redirectToTest(i, j) {
        // let a = i.toLowerCase()
        let b = j.toLowerCase().replace(/\s/g, "");
        // this.router.navigate(['account/'+a+'/'+b]);
        switch (i) {
            case "Computer-Cyber":
                this.router.navigate(['account/computers/' + b])
                break;
            
            case "Science":
                this.router.navigate(['account/science/' + b])
                break;
            
            case "English":
                this.router.navigate(['account/english/' + b])
                break;
            
            case "General-Knowledge":
                this.router.navigate(['account/gk/' + b])
                break;
            
            case "Reasoning":
                this.router.navigate(['account/reasoning/' + b])
                break;
            
            case "Mathematics":
                this.router.navigate(['account/math/' + b])
                break;
            
        }
    }
    ngAfterViewInit(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    redirectToResult(i) {
        switch (i) {
            case "Computer-Cyber":
                this.router.navigate(['account/computers/result'])
                break;
            
            case "Science":
                this.router.navigate(['account/science/result'])
                break;
            
            case "English":
                this.router.navigate(['account/english/result'])
                break;
            
            case "General-Knowledge":
                this.router.navigate(['account/gk/result'])
                break;
            
            case "Reasoning":
                this.router.navigate(['account/reasoning/result'])
                break;
            
            case "Mathematics":
                this.router.navigate(['account/math/result'])
                break;
            
        }
    }

}