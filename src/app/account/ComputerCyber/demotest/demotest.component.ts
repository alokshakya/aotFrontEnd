import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
import { Response } from '@angular/http';
import {TreeModule,TreeNode} from 'primeng/primeng';


@Component({
  selector: 'app-demotest',
  templateUrl: './test.demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  demoTestData:any;

  currentTab:number;
  topicNames:Array<string>;

  chapterNames:Array<string>;

  dummyChapterNames:Array<string>;

  dummyTree:TreeNode[];

  //temporary
  dummyTopics:Array<string>;
  dummyChapters:Array<string>;
  
  constructor(
      private router: Router,
      private subjectSet: SubjectService,
      private masterhttp: MasterHttpService ){
          this.topicNames = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5" ]
          this.dummyChapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10", ]
}


  takedemotest(){
      this.router.navigate(['/demotest']);
  }

  ngOnInit() {
      this.demoTestData = {
          labels: ['Remaining'],
          datasets: [ {data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"]} ]
        };
        
    //   this.chapterNames = [];
    //   this.subjectSet.getChapters(1).subscribe((data: Response) => {
    //       data = data['resource'];
    //       for(let i in data){
    //           this.chapterNames.push(data[i]['name'])
    //     }
    // })

    //temporary
    this.dummyChapters = []
    this.masterhttp.getChapters()
    .subscribe(data=>{
        data = data['chapters']['records'];
        for(let i in data){
        this.dummyChapters.push(data[i][1])
        }
    })

    this.dummyTopics = [];
    this.masterhttp.getTopics()
    .subscribe(data => {
        data = data['topics']['records']
        for(let i in data){
            this.dummyTopics.push(data[i][1])
            console.log(this.dummyTopics)
        } 
    })
        


}

  tabOpen(e){
    this.currentTab = e.index;
  }

  tabClose(e){
      this.currentTab = null;
  }

}