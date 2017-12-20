import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { Message } from 'primeng/primeng';

import { PersonalInfo, SubjectInfo, Misc, chapterwiseTest } from '../../../../services/data.service';
import { MasterHttpService } from '../../../../services/masterhttp.service';

import * as language from '../../../../../config/language';

@Component({
    selector: 'app-demotest-computers',
    templateUrl: './demotest-computers.component.html',
    styleUrls: ['./demotest-computers.component.scss']
})
export class DemotestComputersComponent implements OnInit {
    demoTestData: any;
    displayTest:boolean;
    dummyChapters: Array<string>;
    dummyTopics: Array<string>;
    growlMsg:Message[];
    lang:any;
    options: any;
    spinner2:string;
    syllabus: any;
    testCountObject:any;
    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc,
        public chapterwiseTest: chapterwiseTest,
        public personalInfo: PersonalInfo,
        public masterhttp: MasterHttpService) 
        {
            this.lang=language
        }

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
        this.chapterwiseTest.setSubject('Computers',chapter);
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
            chapterwiseTest:this.chapterwiseTest.computers['total_tests'],
            sampleTest:10,
            mockTest:3
        }
        this.growlMsg = [];
        this.growlMsg.push(language.growlResponse.warning);
        this.misc.setCurrentRoute(["Computers","Demo Test"]);
        this.misc.setLocalRoute('account/computers/demotest');
        this.demoTestData = {
            labels: ['Remaining'],
            datasets: [{ data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"] }]
        };
        if(this.chapterwiseTest.computers.hasOwnProperty('demo_test')){
            this.displayTest = true;
            if(this.chapterwiseTest.computers['demo_test']['total_completed']==1){
                this.makeGraph(['Completed'],[1],'#5CB85C')
            }
            else this.makeGraph(['Remaining'],[1],'#D9534F');
        }
    }
}
