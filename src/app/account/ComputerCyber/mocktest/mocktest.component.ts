import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.component.html',
  styleUrls: ['./mocktest.component.scss']
})
export class MocktestComponent implements OnInit {

    subscribed="true";

    mockTestTableData:any;

    mockTestTableHeader:any;

    mockTestData:any;

    examPattern: SelectItem[];


  constructor() {

      this.mockTestTableData =[ 
                            {"Test":"Mock Test 1", "Slot 1":"95 Percentile", "Slot 2":"NA" },
                            {"Test":"Mock Test 2", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" },
                            {"Test":"Mock Test 3", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" }
                            ];

     this.mockTestTableHeader = [
                                {header:"Test", field:"Test"},
                                {header:"Slot 1", field:"Slot 1"},
                                {header:"Slot 2", field:"Slot 2"},                                
                                 ]

    



      this.examPattern = [];
      this.examPattern.push({label:"Select Exam Pattern", value:"null"})
      this.examPattern.push({label:"Exam Pattern 1", value:"null"})
      this.examPattern.push({label:"Exam Pattern 2", value:"null"})
      this.examPattern.push({label:"Exam Pattern 3", value:"null"})
   }

  ngOnInit() {this.mockTestData = {
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
