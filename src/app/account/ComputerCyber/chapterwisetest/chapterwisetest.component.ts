import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { SubjectService } from '../../../services/subject.service';

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

  chapterwiseTestDetails:any;


  constructor(private sub:SubjectService, private router:Router) {
      this.cname = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7', 'Chapter 8', 'Chapter 9', 'Chapter 10']
      this.topicNames = ["Topic 1 CC", "Topic 2 CC", "Topic 3 CC", "Topic 4 CC", "Topic 5 CC" ]

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
      this.chapterNames = []
      this.sub.getChapters(2).subscribe((data: Response) =>{
          data = data['resource'];
          for(let i in data){
              this.chapterNames.push(data[i]['name']);
          }
      } )
      
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
    
  }


