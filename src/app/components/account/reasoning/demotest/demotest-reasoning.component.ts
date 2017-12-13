import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { PersonalInfo, SubjectInfo, Misc, chapterwiseTest } from '../../../../services/data.service';
import { MasterHttpService } from '../../../../services/masterhttp.service';
import { Message } from 'primeng/primeng';
import * as language from '../../../../../config/language';

@Component({
  selector: 'app-demotest-reasoning',
  templateUrl: './demotest-reasoning.component.html',
  styleUrls: ['./demotest-reasoning.component.scss']
})
export class DemotestReasoningComponent implements OnInit {
   spinner2:string;
    //for donut chart
    demoTestData: any;
    options: any;

    //temporary
    dummyTopics: Array<string>;
    dummyChapters: Array<string>;
    growlMsg:Message[];
    displayTest:boolean;
    testCountObject:any;

    syllabus: any;

    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc,
        public chapterwiseTest: chapterwiseTest,
        public personalInfo: PersonalInfo,
        public masterhttp: MasterHttpService) { }

    startTest(testId, chapterId, attempted, completed, chapter) {
        this.spinner2 = testId;
        let wrapper = {
            "student_id": this.personalInfo.studentInfo['student_id'],
            "chapter_id": chapterId,
            "test_id": testId,
            "attempt":attempted,
            "completed":completed.toString()
        }
        this.chapterwiseTest.activateTestRoute();
        this.chapterwiseTest.setSubject('Reasoning',chapter);
        this.masterhttp.beginTest(wrapper)
        .subscribe((data) => {
                if (data['status'] == 200){
                    this.chapterwiseTest.setQuesAnswerSet(data['message']);
                    this.router.navigate(['test']);
                }else{
                    this.growlMsg = [];
                    this.growlMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again'});
                }
                this.spinner2 = null;
            },
            err => {
                    this.growlMsg = [];
                    this.growlMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again'});
                    this.spinner2 = null;
            });
    }

    takedemotest() {
        this.router.navigate(['demotest']);
    }

    makeGraph(label,data,color){
        this.demoTestData.labels = label;
        this.demoTestData.datasets[0]['data'] = data;
        this.demoTestData.datasets[0]['backgroundColor'] = color;
        this.demoTestData.datasets[0]['hoverBackgroundColor'] = color;
    }

    ngOnInit() {
        this.testCountObject = {
            chapterwiseTest:this.chapterwiseTest.reasoning['total_tests'],
            sampleTest:10,
            mockTest:3
        }
        this.growlMsg = [];
        this.growlMsg.push(language.growlResponse.warning);
        this.misc.setCurrentRoute(["Reasoning","Demo Test"]);
        this.misc.setLocalRoute('account/reasoning/demotest');
        this.demoTestData = {
            labels: ['Remaining'],
            datasets: [{ data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"] }]
        };
        if(this.chapterwiseTest.reasoning.hasOwnProperty('demo_test')){
            this.displayTest = true;
            if(this.chapterwiseTest.reasoning['demo_test']['total_completed']==1){
                this.makeGraph(['Completed'],[1],'#5CB85C')
            }
            else this.makeGraph(['Remaining'],[1],'#D9534F');
        }
    }
}
