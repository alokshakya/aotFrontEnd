import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SubjectInfo, Misc } from '../../../../services/data.service'

@Component({
  selector: 'app-mocktest-math',
  templateUrl: './mocktest-math.component.html',
  styleUrls: ['./mocktest-math.component.scss']
})
export class MocktestMathComponent implements OnInit {

date: number = Date.now();

    mockTestTableData: any;

    mockTestData: any;  //for chart

    examPattern: SelectItem[];


    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc) {
        this.mockTestTableData = [
            { "Test": "Mock Test 1", "Slot 1": "95 Percentile", "Slot 2": "NA" },
            { "Test": "Mock Test 2", "Slot 1": "DATE&TIME", "Slot 2": "DATE&TIME" },
            { "Test": "Mock Test 3", "Slot 1": "DATE&TIME", "Slot 2": "DATE&TIME" }
        ];

        this.examPattern = [];
        this.examPattern.push({ label: "SOF", value: "null" })
    }

    redirect() {
        this.router.navigate(['account/accountsettings'])
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Mathematics","Mock Test"]);
        this.misc.setLocalRoute('account/math/mocktest');

        //for chart
        this.mockTestData = {
            labels: ['Completed', 'Remaining'],
            datasets: [{ data: [1, 2], backgroundColor: ["#5CB85C", "#D9534F"], hoverBackgroundColor: ["#5CB85C", "#D9534F",] }]
        };

        //     //used temporary service
        //   this.dummyChapters=[]
        //   this.masterhttp.getChapters()
        //   .subscribe(data=>{
        //       data = data['chapters']['records'];
        //       for(let i in data){
        //           this.dummyChapters.push(data[i][1])
        //       }

        //     //used temporary service
        //   this.dummyTopics=[];
        //   this.masterhttp.getTopics()
        //   .subscribe(data=>{
        //       data = data['topics']['records'];
        //       for(let i in data){
        //           this.dummyTopics.push(data[i][1])
        //       }
        //   })
        //   })    


    }


}
