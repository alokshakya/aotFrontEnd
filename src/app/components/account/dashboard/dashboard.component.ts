import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SubjectInfo, chapterwiseTest, Result, Misc } from '../../../services/data.service';

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
        public misc: Misc,
        public chTest:chapterwiseTest
    ) {}

    ngOnInit() {
        this.misc.setLocalRoute('account/dashboard');
        this.misc.setCurrentRoute(["Dashboard"]);
        sessionStorage.setItem('route','account/dashboard');
    }

    startTest() {
        this.router.navigate(['account/computers/sampletest'])
    }

    redirect(sub,destination) {
        var routeObj = {
            partRoute:{
            'Computers':'account/computers',
            'General-Knowledge':'account/gk',
            'Science':'account/science',
            'Mathematics':'account/math',
            'Reasoning':'account/reasoning',
            'English':'account/english',
            },

            getRoute:(subject,test)=>{
                return routeObj.partRoute[subject]+'/'+test;
            }
        }
        var builtRoute = routeObj.getRoute(sub,destination);
        this.router.navigate([builtRoute])
    }

    ngAfterViewInit(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    chapterwiseTest(generated,total,completed){
        let remainingPerc = Math.round(100*(total-generated)/total);
        let generatedPerc = Math.round(100*(generated/total));
        let completedPerc = Math.round(100*(completed/total));
        let sum = remainingPerc+generatedPerc+completedPerc;
        if(sum!=100){
            let diff = 100-sum;
            remainingPerc+=diff;
        }
        return {
            data:[remainingPerc,generatedPerc,completedPerc],
            show:[remainingPerc,generatedPerc,completedPerc]
        }
    }

    chapterwiseResult(index){
        let correct = this.result.completeResult['generated']['subjects'][index]['total_correct']
        let incorrect = this.result.completeResult['generated']['subjects'][index]['total_incorrect']
        let marked = this.result.completeResult['generated']['subjects'][index]['total_marked']
        return[100*correct/(correct+incorrect+marked),100*incorrect/(correct+incorrect+marked),100*marked/(correct+incorrect+marked)]
    }

}