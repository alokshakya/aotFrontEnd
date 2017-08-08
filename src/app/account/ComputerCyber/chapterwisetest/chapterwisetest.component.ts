import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import  { MessagesModule } from 'primeng/primeng';

import  { SubjectInfo,PersonalInfo ,Result, Misc, chapterwiseTest } from '../../../services/data.service';
import  { MasterHttpService } from '../../../services/masterhttp.service';


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
  generatedFlag = true;
  wrapper:any;

  generatedTest:any;
  generatedChapters;
  generatedChapterIds;


  constructor(
      public router:Router, 
      public subjectInfo: SubjectInfo,
      public result: Result,
      public misc: Misc,
      public chapterwiseTest: chapterwiseTest,
      public personalInfo: PersonalInfo,
      public masterhttp: MasterHttpService)
      {}

    redirect(){
      this.router.navigate(['account/accountsettings'])
    }

    ngOnInit(){
      this.chapterwiseTestData = {
        labels: ['Remaining','Completed','Generated'],
            datasets:[{data: [30, 10, 40],
            backgroundColor: ["#D9534F","#5CB85C","#F0AD4E"],
            hoverBackgroundColor: ["#D9534F","#5CB85C","#F0AD4E"]
        }]
        };
        this.wrapper = {
          'chapter_id':null, 
          'student_id':this.personalInfo.studentInfo['student_id'],
          'class_id':this.personalInfo.studentInfo['class_id'],
          'topic_id':null
        }

        this.generatedPanel();
    }

    generatedPanel(){
      this.generatedChapters = [];
      this.generatedChapterIds = [];
      for(let i in this.chapterwiseTest.computers['chapters']){
          if(this.chapterwiseTest.computers['chapters'][i].hasOwnProperty('tests')){
            this.generatedChapters.push(this.chapterwiseTest.computers['chapters'][i]);
            this.generatedChapterIds.push(this.chapterwiseTest.computers['chapters'][i]['id'])
          }
      }
    }

    tabOpen(e){
      if(this.check(e)){
        this.selectedChapter = this.subjectInfo.computerChapters['chapters'][e.index]['id'];
        this.wrapper['chapter_id'] = this.selectedChapter;
        this.wrapper['topic_id'] = this.subjectInfo.computerChapters['chapters'][0]['topics'][0]['id'];

        this.generatedFlag = false;
        this.generateMsg = []
        this.generateMsg.push({severity:'info', summary:'Instruction', detail:'Click Generate To Create '+ this.subjectInfo.computerChapters['chapters'][e.index]['name'] +' Test'});
      }
      else{
        this.generateMsg = []
        this.generateMsg.push({severity:'danger', summary:'Instruction', detail:this.subjectInfo.computerChapters['chapters'][e.index]['name'] +' Test Is Already Generated'});
      }
    }
      

    check(e){
        if(this.generatedChapterIds.indexOf(this.subjectInfo.computerChapters['chapters'][e.index]['id']) == -1){
          return true;
        }
        return false;
    }
  
    tabClose(e){
      this.generatedFlag = true;
      this.generateMsg = [];
      this.selectedChapter = null;
    }

    updatePanel(){
      this.generateMsg = []
      this.masterhttp.getTestDetails();
      setTimeout(()=>{
        this.generatedPanel();
      },2000);
    }

    generate(){
      this.masterhttp.generateTest(this.wrapper)
      .subscribe((data)=>{
        if(data['status']==200){
          this.updatePanel();
        }
      })
    }

    startTest(testId,chapterId){
      let wrapper = {
        "student_id":this.personalInfo.studentInfo['student_id'],
        "chapter_id":chapterId,
        "test_id":testId}
      this.masterhttp.beginTest(wrapper)
    }


  }


