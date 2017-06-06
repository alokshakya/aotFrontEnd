import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';
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
  
  constructor(
      private router: Router,
      private subjectSet: SubjectService ){
          this.topicNames = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5" ]
          this.dummyChapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10", ]

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


  takedemotest(){
      this.router.navigate(['/demotest']);
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

  tabOpen(e){
    this.currentTab = e.index;
  }

  tabClose(e){
      this.currentTab = null;
  }

}