import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  demoTestData:any;

  topicNames:Array<string>;

  chapterNames:Array<string>;
  
  constructor(
      private router: Router,
      private subjectSet: SubjectService ){
          this.topicNames = ["Topic 1 CC", "Topic 2 CC", "Topic 3 CC", "Topic 4 CC", "Topic 5 CC" ]
      }


  takedemotest(){
      this.router.navigate(['takedemotest']);
  }

  ngOnInit() {
      this.chapterNames = [];
      this.demoTestData = {
          labels: ['Remaining'],
          datasets: [ {data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"]} ]
        };
      this.subjectSet.getChapters(1).subscribe((data: Response) => {
          data = data['resource'];
          for(let i in data){
              this.chapterNames.push(data[i]['name'])
        }
    })
    }
}