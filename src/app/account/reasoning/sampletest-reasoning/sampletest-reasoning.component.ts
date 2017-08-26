import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { Router } from '@angular/router';
import { SubjectInfo, Misc } from '../../../services/data.service';

@Component({
  selector: 'app-sampletest-reasoning',
  templateUrl: './sampletest-reasoning.component.html',
  styleUrls: ['./sampletest-reasoning.component.scss']
})
export class SampletestReasoningComponent implements OnInit {

examPattern: SelectItem[];

    testData: any;

    sampleTestData: any; //for chart

    //temporary service
    dummyChapters: Array<any>;
    dummyTopics: Array<any>;

    constructor(
        private router: Router,
        private misc: Misc,
        public subjectInfo: SubjectInfo) {

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

    ngOnInit() {
        this.misc.setCurrentRoute(["Reasoning","Sample Test"]);
        this.misc.setLocalRoute('account/reasoning/sampletest');


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

    redirect() {
        this.router.navigate(['account/accountsettings'])
    }

}
