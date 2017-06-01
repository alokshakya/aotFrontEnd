import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import {TreeModule,TreeNode} from 'primeng/primeng';
import { Router } from '@angular/router';


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

    dummyTree:TreeNode[];
  constructor(private router:Router) {

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


            this.dummyTree =  [
        {
            "label": "Chapter 1",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 2",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 3",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 4",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 5",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 6",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 7",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 8",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 9",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    },
    {
            "label": "Chapter 10",
            "children": [{
                    "label": "Topic 1"
                   },
                {
                    "label": "Topic 2"
                },
                                {
                    "label": "Topic 3"
                },
                                {
                    "label": "Topic 4"
                },
                                {
                    "label": "Topic 5"
                },]     
    }]


   }

   redirect(){
       this.router.navigate(['account/accountsettings'])
   }

  ngOnInit() {this.mockTestData = {
            labels: ['Completed','Remaining'],
            datasets: [
                {
                    data: [1,3],
                    backgroundColor: [
                        "#5CB85C",
                        "#D9534F",
                        
                    ],
                    hoverBackgroundColor: [
                        "#5CB85C",
                        "#D9534F",
                        
                    ]
                }]    
            };
  }

}
