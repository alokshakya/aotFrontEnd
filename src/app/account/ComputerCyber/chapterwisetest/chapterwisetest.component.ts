import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import  { MessagesModule } from 'primeng/primeng';

import  { SubjectInfo, Result } from '../../../services/data.service';


@Component({
  selector: 'app-chapterwisetest',
  templateUrl: './chapterwisetest.component.html',
  styleUrls: ['./chapterwisetest.component.scss']
})
export class ChapterwisetestComponent implements OnInit {

  subscribed=false;  
  selectedChapter:string;
  generateMsg: Message [] = [];
  chapterwiseTestData:any;  //chart data  

  constructor(
      private router:Router, 
      private subjectInfo: SubjectInfo,
      private result: Result)
      {
    
    }

    redirect(){
      this.router.navigate(['account/accountsettings'])
    }

  ngOnInit() {
  
      this.chapterwiseTestData = {
          labels: ['Remaining','Completed','Generated'],
          datasets: [{data: [10, 10, 40],
          backgroundColor: ["#D9534F","#5CB85C","#F0AD4E"],
          hoverBackgroundColor: ["#D9534F","#5CB85C","#F0AD4E"]
        }]
      };

    }

    tabOpen(e){
        this.selectedChapter = this.subjectInfo.computerSyllabus[e.index]
        if(!this.check()){
        this.generateMsg = []
        this.generateMsg.push({severity:'info', summary:'Instructions:', detail:'Click "Generate" to create '+ this.selectedChapter + ' test.'});
      }
    }
      

    check(){
      if(this.result.generatedTest.some(chapter => chapter === this.selectedChapter)){
        this.generateMsg = []
        this.generateMsg.push({severity:'info', summary:this.selectedChapter, detail:'Test Already Generated'});
        this.selectedChapter = null;
        return true;
      }
    }
  

    tabClose(e){
      this.selectedChapter = null;
      this.generateMsg = []
    }

    generate(){
        this.result.generatedTest.push(this.selectedChapter);
        this.result.chapterwiseTestDetails[this.selectedChapter] = {"Test 1":"Start", "Test 2":"Start", "Test 3":"Start", "Test 4":"Start", "Test 5":"Start"}
        this.selectedChapter = null;
    }


  }


