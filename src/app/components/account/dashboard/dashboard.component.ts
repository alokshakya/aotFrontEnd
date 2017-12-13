import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SubjectInfo, chapterwiseTest, Result, Misc } from '../../../services/data.service';
import * as constants from '../../../../config/constants';

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
    imagePath:string
    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public result: Result,
        public misc: Misc,
        public chTest:chapterwiseTest
    ) {
        this.imagePath = constants.OLYMPIADBOX_IMG_URL;
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
            this.router.navigate(['/account/subscribe']);
            return false;
        }
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
        // if(destination=='subscribe')
        this.router.navigate([builtRoute])
    }

    ngAfterViewInit(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

//Test summary-----------------------------------------------------------------------------
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

    mockSample(completed,sample=false){
        var total = 3;
        if(sample){
            total = 10;
            let comp = parseInt(completed)*10;
            let rem = (total-comp)*10;
            return [comp,rem];
        }
        if(!sample){
            let comp = Math.floor(parseInt(completed)*100/total);
            let rem = 100 - comp;
            return [comp,rem];
        }
    }
//test summary----------------------------------------------------------------------------


//result summary----------------------------------------------------------------------------

    chapterwiseResult(index){
        let correct = this.result.completeResult['generated']['subjects'][index]['total_correct']
        let incorrect = this.result.completeResult['generated']['subjects'][index]['total_incorrect']
        let marked = this.result.completeResult['generated']['subjects'][index]['total_marked']
        return[100*correct/(correct+incorrect+marked),100*incorrect/(correct+incorrect+marked),100*marked/(correct+incorrect+marked)]
    }

    mockDemoSampleResult(sub,test){
        if(sub.hasOwnProperty(test)){
            var test = sub[test];
            var correct = test['total_correct'];
            var incorrect = test['total_incorrect'];
            var marked = test['total_marked'];
            var total = marked+correct+incorrect;

            var markedPerc = (marked*100)/total;
            var correctPerc = (correct*100)/total;
            var incorrectPerc = (incorrect*100)/total;
            if(marked==0){
                markedPerc=0;
            }
            if(correct=0){
                correctPerc=0;
            }
            if(incorrect==0){
                incorrectPerc=0;
            }
            var actualArr = [correctPerc,markedPerc,incorrectPerc];

            markedPerc = Math.round(markedPerc);
            correctPerc = Math.round(correctPerc);
            incorrectPerc = Math.round(incorrectPerc);
            var sum = markedPerc+correctPerc+incorrectPerc;
            if(100-sum!=0){
                incorrectPerc+=(100-sum);
            }
            return [actualArr[0],actualArr[1],actualArr[2],correctPerc,markedPerc,incorrectPerc,];
        }
        return [0,0,0,0,0,0];
    }

//result summary-----------------------------------------------------------------------------------------
}