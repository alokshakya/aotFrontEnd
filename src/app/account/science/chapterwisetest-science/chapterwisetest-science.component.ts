import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';

import { SubjectInfo, PersonalInfo, Result, Misc, chapterwiseTest } from '../../../services/data.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
@Component({
  selector: 'app-chapterwisetest-science',
  templateUrl: './chapterwisetest-science.component.html',
  styleUrls: ['./chapterwisetest-science.component.scss']
})
export class ChapterwisetestScienceComponent implements OnInit {
    subscribed = false;
    selectedChapter: string;
    generateMsg: Message[] = [];
    chapterwiseTestData: any;  //chart data
    generatedFlag = true;
    wrapper: any;

    generatedTest: any;
    generatedChapters;
    generatedChapterIds;

    spinner:boolean;
    spinner2:string;

    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public result: Result,
        public misc: Misc,
        public chapterwiseTest: chapterwiseTest,
        public personalInfo: PersonalInfo,
        public masterhttp: MasterHttpService)
    { }

    redirect() {
        this.router.navigate(['account/accountsettings'])
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Science","Chapterwise Test"]);
        this.misc.setLocalRoute('account/science/chapterwisetest');

        this.chapterwiseTestData = {
            labels: ['Remaining', 'Completed', 'Generated'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"],
                hoverBackgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"]
            }]
        };
        this.wrapper = {
            'chapter_id': null,
            'student_id': this.personalInfo.studentInfo['student_id'],
            'class_id': this.personalInfo.studentInfo['class_id'],
            'topic_id': null
        }
        this.generatedPanel();
    }

    makeGraph(){
        let chapters = 0;
        let remaining = 0;
        let generated = 0;
        let array = this.chapterwiseTest.science['chapters'];
        for(let i in array){
            chapters++;
            if(array[i].hasOwnProperty('tests')){
                generated = generated + 5;
            }
        }
        remaining = chapters*5-generated;
        this.chapterwiseTestData = {
            labels: ['Remaining', 'Completed', 'Generated'],
            datasets: [{
                data: [remaining, 0, generated],
                backgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"],
                hoverBackgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"]
            }]
        };
    }

    generatedPanel() {
        this.generatedChapters = [];
        this.generatedChapterIds = [];
        for (let i in this.chapterwiseTest.science['chapters']) {
            if (this.chapterwiseTest.science['chapters'][i].hasOwnProperty('tests')) {
                this.generatedChapters.push(this.chapterwiseTest.science['chapters'][i]);
                this.generatedChapterIds.push(this.chapterwiseTest.science['chapters'][i]['id'])
            }
        }
        this.makeGraph();
    }

    tabOpen(e) {
        if (this.check(e)) {
            this.selectedChapter = this.subjectInfo.scienceChapters['chapters'][e.index]['id'];
            this.wrapper['chapter_id'] = this.selectedChapter;
            this.wrapper['topic_id'] = this.subjectInfo.scienceChapters['chapters'][0]['topics'][0]['id'];

            this.generatedFlag = false;
            this.generateMsg = []
            this.generateMsg.push({ severity: 'info', summary: 'Instruction', detail: 'Click Generate To Create ' + this.subjectInfo.scienceChapters['chapters'][e.index]['name'] + ' Test' });
        }
        else {
            this.generateMsg = []
            this.generateMsg.push({ severity: 'info', summary: 'Instruction', detail: this.subjectInfo.scienceChapters['chapters'][e.index]['name'] + ' Test Is Already Generated' });
        }
    }


    check(e) {
        if (this.generatedChapterIds.indexOf(this.subjectInfo.scienceChapters['chapters'][e.index]['id']) == -1) {
            return true;
        }
        return false;
    }

    tabClose(e) {
        this.generatedFlag = true;
        this.generateMsg = [];
        this.selectedChapter = null;
    }

    updatePanel() {
        this.generateMsg = []
        this.masterhttp.getTestDetails()
        this.chapterwiseTest.testEvent.subscribe((data)=>{
            if(data){
                this.generatedPanel();
                this.generatedFlag = false;
                this.selectedChapter = null;
                this.spinner = false;
            }
        })
    }

    generate() {
        this.spinner = true;
        this.masterhttp.generateTest(this.wrapper)
            .subscribe((data) => {
                if (data['status'] == 200) {
                    this.chapterwiseTestData['datasets'][0]['data'][2] = this.chapterwiseTestData['datasets'][0]['data'][2]+5;
                    this.chapterwiseTestData['datasets'][0]['data'][0] = this.chapterwiseTestData['datasets'][0]['data'][0]-5;
                    this.updatePanel();
                    this.generatedFlag = false;
                }else{
                    this.generateMsg=[];
                    this.generateMsg.push({ severity: 'info', summary: 'Could Not Generate Test', detail: 'Please Try Again'});
                    this.spinner = false;
                }
            },
            err => {
                    this.generateMsg=[];
                    this.generateMsg.push({ severity: 'info', summary: 'Could Not Generate Test', detail: 'Please Try Again'});
                    this.spinner = false;
            })
    }

    startTest(testId, chapterId) {
        this.spinner2 = testId;
        let wrapper = {
            "student_id": this.personalInfo.studentInfo['student_id'],
            "chapter_id": chapterId,
            "test_id": testId
        }
        this.chapterwiseTest.activateTestRoute();
        this.chapterwiseTest.setSubject('Science');
        this.masterhttp.beginTest(wrapper)
        .subscribe((data) => {
                if (data['status'] == 200){
                    this.chapterwiseTest.setQuesAnswerSet(data['message']);
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

    checkGeneratedTest() {
        if (this.chapterwiseTest.qaSet.length == 15) {
            return true;
        }
        return false;
    }
}
