import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { SubjectService } from '../../../services/subject.service';
import {TreeModule,TreeNode} from 'primeng/primeng';


@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.scss']
})
export class SampletestComponent implements OnInit {

  examPattern: SelectItem[];

  testData:any;

  sampleTestData:any;

  subscribed=true;

  topics:Array<string>;

  dummyTree:TreeNode[]

  chapterNames:Array<string>;

  constructor(private subject: SubjectService) { 
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
      this.examPattern.push({label:"Select Exam Pattern", value:"null"})
      this.examPattern.push({label:"Exam Pattern 1", value:"null"})
      this.examPattern.push({label:"Exam Pattern 2", value:"null"})
      this.examPattern.push({label:"Exam Pattern 3", value:"null"})

      this.topics = ["Topic 1 CC", "Topic 2 CC", "Topic 3 CC", "Topic 4 CC", "Topic 5 CC" ]

      
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

  ngOnInit(){
      this.chapterNames = []
      this.sampleTestData = {
          labels: ['Completed','Remaining'],
          datasets: [{
              data: [4, 10],
              backgroundColor: ["#5CB85C", "#D9534F"],
              hoverBackgroundColor: ["#5CB85C", "#D9534F"]
            }]};
      this.subject.getChapters(1).subscribe((data: Response) =>{
          data = data['resource'];
          for(let i in data){
              this.chapterNames.push(data[i]['name']);
          }
      })

  }

}
