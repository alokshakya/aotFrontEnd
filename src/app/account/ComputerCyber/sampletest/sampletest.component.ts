import { Component, OnInit } from '@angular/core';
import {SelectItem } from 'primeng/primeng'

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.scss']
})
export class SampletestComponent implements OnInit {

  examPattern: SelectItem[];

  sampleTestNumbers: Array<string>;

  sampleTestData:any;


  constructor() { 

      this.sampleTestNumbers = ["Sample Test 1", "Sample Test 2", "Sample Test 3", "Sample Test 4", "Sample Test 5", "Sample Test 6", "Sample Test 7", "Sample Test 8", "Sample Test 9", "Sample Test 10", ]


      this.examPattern = [];
      this.examPattern.push({label:"Select Exam Pattern", value:"null"})
      this.examPattern.push({label:"Exam Pattern 1", value:"null"})
      this.examPattern.push({label:"Exam Pattern 2", value:"null"})
      this.examPattern.push({label:"Exam Pattern 3", value:"null"})
  }

  ngOnInit() {this.sampleTestData = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [50, 250, 300],
                    backgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ],
                    hoverBackgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ]
                }]    
            };
  }

}
