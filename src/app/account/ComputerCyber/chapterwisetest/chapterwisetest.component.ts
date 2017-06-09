import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { MasterHttpService } from '../../../services/masterhttp.service';
import {TreeModule,TreeNode} from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import  { MessagesModule } from 'primeng/primeng'


@Component({
  selector: 'app-chapterwisetest',
  templateUrl: './chapterwisetest.component.html',
  styleUrls: ['./chapterwisetest.component.scss']
})
export class ChapterwisetestComponent implements OnInit {

  subscribed=false;  
  selectedChapter:string;
  chapterwiseTestDetails:any;
  dummyChapters:any;
  dummyTopics:any;
  generateMsg: Message [] = [];
  chapterwiseTestData:any;    

  constructor(
      private router:Router, 
      private masterhttp : MasterHttpService)
      {
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
                  "Test 2" :"9/15", 
                  "Test 3":"Start", 
                  "Test 4":"13/15", 
                  "Test 5":"Start"
                },
              "Chapter 8":
              {
                  "Test 1":"Start", 
                  "Test 2":"13/15",
                  "Test 3":"11/15",  
                  "Test 4":"Start",
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
                  "Test 5":"Resume"
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
  
      this.chapterwiseTestData = {
          labels: ['Remaining','Completed','Generated'],
          datasets: [{data: [10, 10, 40],
          backgroundColor: ["#D9534F","#5CB85C","#F0AD4E"],
          hoverBackgroundColor: ["#D9534F","#5CB85C","#F0AD4E"]
        }]
      };

    }

    tabOpen(e){
        this.selectedChapter = this.dummyChapters[e.index]
        this.generateMsg = []
        this.generateMsg.push({severity:'info', summary:'Instructions:', detail:'Click "Generate" to create '+ this.selectedChapter + ' test.'});
    }

    generate(){
      console.log(this.selectedChapter)
      this.chapterwiseTestDetails[this.selectedChapter]=this.selectedChapter;
      console.log(this.chapterwiseTestDetails);
    }
    
  }


