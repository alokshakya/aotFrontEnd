import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.component.html',
  styleUrls: ['./mocktest.component.scss']
})
export class MocktestComponent implements OnInit {

  tabledata:any = [
                    {"Testnumber":"Mock Test 1", "Slot 1":"95 Percentile", "Slot 2":"NA" },
                    {"Testnumber":"Mock Test 2", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" },
                    {"Testnumber":"Mock Test 3", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" }
  
                  ]
  data:any;

  exampattern: SelectItem[];
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
