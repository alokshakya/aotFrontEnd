import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { PersonalInfo, SubjectInfo, Misc, chapterwiseTest } from '../../../../services/data.service';
import { MasterHttpService } from '../../../../services/masterhttp.service'

@Component({
  selector: 'app-sampletest-math',
  templateUrl: './sampletest-math.component.html',
  styleUrls: ['./sampletest-math.component.scss']
})
export class SampletestMathComponent implements OnInit {
    examPattern: SelectItem[];
    spinner2;
    testData: any;
    generateMsg:Message[];

    sampleTestData: any; //for chart

    //temporary service
    dummyChapters: Array<any>;
    dummyTopics: Array<any>;

    constructor(
        private router: Router,
        private misc: Misc,
        private masterhttp:MasterHttpService,
        public subjectInfo: SubjectInfo,
        public test:chapterwiseTest,
        public personalInfo:PersonalInfo) {

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
        this.examPattern.push({ label: "SOF", value: "null" }, { label: "SELECT EXAM", value: "null" }, )

    }
    shade(index){
        if(index==0||index==2||index==4){
            return 'dark';
        }
        return 'light';
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Mathematics","Sample Test"]);
        this.misc.setLocalRoute('account/math/sampletest');


        //for chart
        this.sampleTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [4, 10],
                backgroundColor: ["#5CB85C", "#D9534F"],
                hoverBackgroundColor: ["#5CB85C", "#D9534F"]
            }]
        };
        //   this.chapterNames = []
        //   this.subject.getChapters(1).subscribe((data: Response) =>{
        //       data = data['resource'];
        //       for(let i in data){
        //           this.chapterNames.push(data[i]['name']);
        //       }
        //   })

        //temporary service used
        // this.dummyChapters=[]
        // this.masterhttp.getChapters()
        // .subscribe(data=>{
        //   data = data['chapters']['records'];
        //   for(let i in data){
        //     this.dummyChapters.push(data[i][1])
        //   }
        // })

        // //temporary service used
        // this.dummyTopics = [];
        // this.masterhttp.getTopics()
        // .subscribe(data=>{
        //   data = data['topics']['records'];
        //   for(let i in data){
        //     this.dummyTopics.push(data[i][1])
        //   }
        // })

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
    this.test.setSubject('Mathematics',chapter);
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
        this.router.navigate(['account/accountsettings'])
    }

}
