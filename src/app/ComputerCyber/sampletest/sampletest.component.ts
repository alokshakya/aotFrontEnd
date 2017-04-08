import { Component, OnInit } from '@angular/core';
import {SelectItem } from 'primeng/primeng'

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.scss']
})
export class SampletestComponent implements OnInit {

  exampattern: SelectItem[];
  data:any;
  constructor() { 
      this.exampattern = [];
      this.exampattern.push({label:"Select Exam Pattern", value:"null"})
      this.exampattern.push({label:"Exam Pattern 1", value:"null"})
      this.exampattern.push({label:"Exam Pattern 2", value:"null"})
      this.exampattern.push({label:"Exam Pattern 3", value:"null"})
  }

  ngOnInit() {this.data = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [50, 150, 200],
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
