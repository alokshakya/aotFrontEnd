import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { SelectItem, Message } from 'primeng/primeng';

import { SubjectInfo, Misc, chapterwiseTest, PersonalInfo, Result } from '../../../../services/data.service';
import { MasterHttpService } from '../../../../services/masterhttp.service';

import * as language from '../../../../../config/language';

@Component({
  selector: 'app-mocktest-english',
  templateUrl: './mocktest-english.component.html',
  styleUrls: ['./mocktest-english.component.scss']
})
export class MocktestEnglishComponent implements OnInit {
    date: number = Date.now();
    dateNow;
    examPattern: SelectItem[];
    generateMsg:Message[];
    lang:any;
    mockTestTableData: any;
    mockTestData: any;
    spinner2:string;
    patternCols:any;
    patternArray:Array<any>;

    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc,
        public test:chapterwiseTest,
        public personalInfo:PersonalInfo,
        public result:Result,
        private masterhttp:MasterHttpService) {
        this.mockTestTableData = [];
        this.lang = language; 
        this.examPattern = [{ label: "SOF", value: "null" },{ label: "Select Pattern", value: "null" }];
        this.patternCols = [{header:'Section',field:'pattern'},{header:'No. Of Questions',field:'no_of_questions'},{header:'Marks/Ques.',field:'marks_per_question'},{header:'Total Marks',field:'total_marks'}]
    }

    redirect() {
        this.misc.selectedSub = "English";
        this.router.navigate(['account/subscribe']);
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["English","Mock Test"]);
        this.misc.setLocalRoute('account/english/mocktest');
        this.dateNow = new Date()
        this.mockTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{ data: [0,3], backgroundColor: ["#5CB85C", "#D9534F"], hoverBackgroundColor: ["#5CB85C", "#D9534F",] }]
        };
        this.setMockTest();
        this.setSofPattern();
    }

    setSofPattern(){
        this.patternArray = this.subjectInfo.patternObject['English'];
    }

    setMockTest(){
        if(this.test.english.hasOwnProperty('mock_test')){
            var completed = this.test.english['mock_test']['total_completed'];
            this.mockTestData.datasets[0]['data'] = [completed,(3-completed)]
        }

    }

    startTest(testId, chapterId, attempted, completed, chapter, index) {
    this.spinner2 = testId;
    let wrapper = {
        "student_id": this.personalInfo.studentInfo['student_id'],
        "chapter_id": chapterId,
        "test_id": testId,
        "attempt":attempted,
        "completed":completed.toString()
    }
    this.test.setTestIndex(index+1);
    this.test.activateTestRoute();
    this.test.setSubject('English',chapter);
    this.masterhttp.beginTest(wrapper)
    .subscribe((data) => {
            if (data['status'] == 200){
                this.test.setQuesAnswerSet(data['message']);
                this.router.navigate(['test']);
            }else{
                this.generateMsg = [];
                this.generateMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again'});
            }
            this.spinner2 = null;

        },
        err => {
                this.generateMsg = [];
                this.generateMsg.push({ severity: 'info', summary: 'Could Not Start Test', detail: 'Please Try Again'});
                this.spinner2 = null;
        });
    }

    shade(index){
        if(index%2==0){
            return 'dark';
        }
        return 'light';
    }
}
