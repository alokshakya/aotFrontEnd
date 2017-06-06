import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { SubjectService } from '../../../services/subject.service';
import {TreeModule,TreeNode} from 'primeng/primeng';
import { Router } from '@angular/router';


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

    currentTab:number;

  constructor(private subject: SubjectService, private router: Router) { 
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

      this.topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5" ]

      this.chapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10" ]

      
        
  }

  ngOnInit(){
      this.sampleTestData = {
          labels: ['Completed','Remaining'],
          datasets: [{
              data: [4, 10],
              backgroundColor: ["#5CB85C", "#D9534F"],
              hoverBackgroundColor: ["#5CB85C", "#D9534F"]
            }]};
    //   this.chapterNames = []
    //   this.subject.getChapters(1).subscribe((data: Response) =>{
    //       data = data['resource'];
    //       for(let i in data){
    //           this.chapterNames.push(data[i]['name']);
    //       }
    //   })

  }

  redirect(){
      this.router.navigate(['account/accountsettings'])
  }

  
  tabOpen(e){
    this.currentTab = e.index;
  }

  tabClose(e){
      this.currentTab = null;
  }

}
