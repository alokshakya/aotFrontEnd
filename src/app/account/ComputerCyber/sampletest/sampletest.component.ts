import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Response } from '@angular/http';
import { SubjectService } from '../../../services/subject.service';


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

  chapterNames:Array<string>;

  constructor(private subject: SubjectService) { 
      this.testData = {
          "Sample Test 1": "45/50",
          "Sample Test 2": "40/50",
          "Sample Test 3": "Start",
          "Sample Test 4": "30/40",
          "Sample Test 5": "45/50",
          "Sample Test 6": "40/50",
          "Sample Test 7": "Start",
          "Sample Test 8": "30/40",
          "Sample Test 9": "45/50",
          "Sample Test 10": "Start"
        }

      this.examPattern = [];
      this.examPattern.push({label:"Select Exam Pattern", value:"null"})
      this.examPattern.push({label:"Exam Pattern 1", value:"null"})
      this.examPattern.push({label:"Exam Pattern 2", value:"null"})
      this.examPattern.push({label:"Exam Pattern 3", value:"null"})

      this.topics = ["Topic 1 CC", "Topic 2 CC", "Topic 3 CC", "Topic 4 CC", "Topic 5 CC" ]
  }

  ngOnInit(){
      this.chapterNames = []
      this.sampleTestData = {
          labels: ['Remaining','Completed','Generated'],
          datasets: [{
              data: [50, 250, 300],
              backgroundColor: ["#D9534F", "#5CB85C","#F0AD4E"],
              hoverBackgroundColor: ["#D9534F", "#5CB85C", "#F0AD4E"]
            }]};
      this.subject.getChapters(1).subscribe((data: Response) =>{
          data = data['resource'];
          for(let i in data){
              this.chapterNames.push(data[i]['name']);
          }
      })

  }

}
