import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { PersonalInfo, SubjectInfo, Misc, chapterwiseTest } from '../../../../services/data.service';
import { MasterHttpService } from '../../../../services/masterhttp.service';
import * as language from '../../../../../config/language';

@Component({
    selector: 'app-sampletest-computers',
    templateUrl: './sampletest-computers.component.html',
    styleUrls: ['./sampletest-computers.component.scss']
})
export class SampletestComputersComponent implements OnInit {
    examPattern: SelectItem[];
    spinner2;
    testData: any;
    generateMsg:Message[];

    sampleTestData: any; //for chart

    //temporary service
    dummyChapters: Array<any>;
    dummyTopics: Array<any>;
    patternArray:Array<any>;
    patternCols:any;
    lang:any;

    constructor(
        private router: Router,
        private misc: Misc,
        private masterhttp:MasterHttpService,
        public subjectInfo: SubjectInfo,
        public test:chapterwiseTest,
        public personalInfo:PersonalInfo) {
        this.lang = language;

        this.testData = {
            "Sample Test 1": "35/50",
            "Sample Test 2": "Start",
            "Sample Test 3": "Start",
            "Sample Test 4": "Resume",
            "Sample Test 5": "45/50",
            "Sample Test 6": "20/50",
            "Sample Test 7": "Start",
            "Sample Test 8": "30/50",
            "Sample Test 9": "23/50",
            "Sample Test 10": "Start"
        }

        this.examPattern = [];
        this.examPattern.push({ label: "SOF", value: "null" }, { label: "SELECT EXAM", value: "null" })
        this.patternCols = [{header:'Section',field:'pattern'},{header:'No. Of Questions',field:'no_of_questions'},{header:'Marks/Ques.',field:'marks_per_question'},{header:'Total Marks',field:'total_marks'}]
    }

    shade(index){
        if(index%2==0){
            return 'dark';
        }
        return 'light';
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Computers","Sample Test"]);
        this.misc.setLocalRoute('account/computers/sampletest');
        this.makeGraph();
        this.setSofPattern();
    }
    setSofPattern(){
        this.patternArray = this.subjectInfo.patternObject['Computers'];
    }

    makeGraph(){

        this.sampleTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                // data: [this.test.computers['sample_test']['total_completed'],this.test.computers['sample_test']['total_attempted']-this.test.computers['sample_test']['total_completed']],
                data:[0,10],
                backgroundColor: ["#5CB85C", "#D9534F"],
                hoverBackgroundColor: ["#5CB85C", "#D9534F"]
            }]
        };
        if(this.test.computers.hasOwnProperty('sample_test')){
            let completed = parseInt(this.test.computers['sample_test']['total_completed']);
            this.sampleTestData.datasets[0]['data'] = [completed,10-completed];
        }
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
    this.test.activateTestRoute();
    this.test.setSubject('Computers',chapter);
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

    redirect() {
        this.router.navigate(['account/subscribe'])
    }

}
