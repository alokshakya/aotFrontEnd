import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
import {TreeModule,TreeNode} from 'primeng/primeng';


@Component({
  selector: 'app-chapterwisetest',
  templateUrl: './chapterwisetest.component.html',
  styleUrls: ['./chapterwisetest.component.scss']
})
export class ChapterwisetestComponent implements OnInit {

  a:boolean;

  target = '#2';

  subscribed=true;  

  chapterwiseTestData: any;

  chapterNames:Array<string>;

  cname:Array<string>

  testNumbers:Array<string>;

  topicNames:Array<string>;

  selectedChapter:string;

  chapterwiseTestDetails:any;

  dummyTree: TreeNode[];
  dummyTree1: TreeNode[];
  dummyChapters:any;
  dummyTopics:any;

  currentTab:number;
  closedTab:number;

  constructor(private sub:SubjectService, private router:Router, private masterhttp : MasterHttpService) {
      this.cname = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7', 'Chapter 8', 'Chapter 9', 'Chapter 10']
      this.topicNames = ["Topic 1 CC", "Topic 2 CC", "Topic 3 CC", "Topic 4 CC", "Topic 5 CC" ]
      this.dummyTree =  [
                        {
                        "label": "Chapter 1",
                        "data": "Chapter 1",
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
                        "data": "Chapter 2",
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
                        "data": "Chapter 3",
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
                        "data": "Chapter 4",
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
                        "data": "Chapter 5",
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
                        "data": "Chapter 6",
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
                        "data": "Chapter 7",
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
                        "data": "Chapter 8",
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
                        "data": "Chapter 9",
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
                        "data": "Chapter 10",
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
                        }
                        ]


      this.chapterwiseTestDetails = {
        "Chapter 1":
        {
          "Test 1":"13/15",
          "Test 2":"11/15", 
          "Test 3":"Start", 
          "Test 4":"Start", 
          "Test 5":"14/15"
        },
        "Chapter 2":
        {
          "Test 1":"10/15",
          "Test 2":"9/15", 
          "Test 3":"Start", 
          "Test 4":"13/15", 
          "Test 5":"Resume"
        },
        "Chapter 3":
        {
          "Test 1":"13/15",
          "Test 2":"11/15", 
          "Test 3":"Start", 
          "Test 4":"Start", 
          "Test 5":"Resume"
        },
         "Chapter 4":
        {
          "Test 1":"13/15",
          "Test 2":"11/15", 
          "Test 3":"Resume", 
          "Test 4":"Start", 
          "Test 5":"Start"
        },
        "Chapter 5":
        {
          "Test 1":"10/15",
          "Test 2":"9/15", 
          "Test 3":"Start", 
          "Test 4":"13/15", 
          "Test 5":"Resume"
        },
        "Chapter 6":
        {
          "Test 1":"13/15",
          "Test 2":"11/15", 
          "Test 3":"Start", 
          "Test 4":"Start", 
          "Test 5":"10/15"
        },
        "Chapter 7":
        {
          "Test 1":"10/15",
          "Test 2":"9/15", 
          "Test 3":"Start", 
          "Test 4":"13/15", 
          "Test 5":"Start"
        },
        "Chapter 8":
        {
          "Test 1":"Start", 
          "Test 2":"13/15",
          "Test 3":"11/15",  
          "Test 5":"Resume"
        },
        "Chapter 9":
        {
          "Test 1":"13/15",
          "Test 2":"11/15", 
          "Test 3":"Start", 
          "Test 4":"Start", 
          "Test 5":"Resume"
        },
        "Chapter 10":
        {
          "Test 1":"04/15",
          "Test 2":"15/15", 
          "Test 3":"Start", 
          "Test 4":"Resume",
        },
        }
    }

    redirect(){
      this.router.navigate(['account/accountsettings'])
    }

  ngOnInit() {
    //   this.chapterNames = []
    //   this.sub.getChapters(2).subscribe((data: Response) =>{
    //       data = data['resource'];
    //       for(let i in data){
    //           this.chapterNames.push(data[i]['name']);
    //       }
    //   } )

      //temporary
      this.dummyChapters =[]
      this.masterhttp.getChapters()
      .subscribe((data: Response) => {
          for (let i in data['chapters']['records']){
              this.dummyChapters.push(data['chapters']['records'][i][1])
            // this.dummyTree[i]['label'] = data['chapters']['records'][i][1]
              
          }
      })

      this.dummyTopics = []
      this.masterhttp.getTopics()
      .subscribe((data:Response) =>{
          for (let i in data['topics']['records']){
              this.dummyTopics.push(data['topics']['records'][i][1])
          }
      })

      
      this.testNumbers = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5" ];
      this.topicNames=["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]
      this.chapterwiseTestData = {
          labels: ['Remaining','Completed','Generated'],
          datasets: [{data: [163, 237, 400],
          backgroundColor: ["#D9534F","#5CB85C","#F0AD4E"],
          hoverBackgroundColor: ["#D9534F","#5CB85C","#F0AD4E"]
        }]
      };

    }

    tabOpen(e){
        this.currentTab=e.index
    }
    
    tabClose(e){
        this.currentTab=null;
    }
  }


