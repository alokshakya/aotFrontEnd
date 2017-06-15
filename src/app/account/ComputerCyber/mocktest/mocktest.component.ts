import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SubjectInfo } from '../../../services/data.service'

@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.component.html',
  styleUrls: ['./mocktest.component.scss']
})
export class MocktestComponent implements OnInit {

    date:number = Date.now();

    mockTestTableData:any;

    mockTestData:any;  //for chart

    examPattern: SelectItem[];


  constructor(
      private router:Router,
      private subjectInfo: SubjectInfo)
      {
          this.mockTestTableData =[ 
              {"Test":"Mock Test 1", "Slot 1":"95 Percentile", "Slot 2":"NA" },
              {"Test":"Mock Test 2", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" },
              {"Test":"Mock Test 3", "Slot 1":"DATE&TIME", "Slot 2":"DATE&TIME" }
              ];
              
          this.examPattern = [];
          this.examPattern.push({label:"SOF", value:"null"})
   }

   redirect(){
       this.router.navigate(['account/accountsettings'])
   }

  ngOnInit() {
      //for chart
      this.mockTestData = {
            labels: ['Completed','Remaining'],
            datasets: [{data: [1,2],backgroundColor: ["#5CB85C","#D9534F"],hoverBackgroundColor: ["#5CB85C","#D9534F",]}]    
        };

    //     //used temporary service
    //   this.dummyChapters=[]
    //   this.masterhttp.getChapters()
    //   .subscribe(data=>{
    //       data = data['chapters']['records'];
    //       for(let i in data){
    //           this.dummyChapters.push(data[i][1])
    //       }

    //     //used temporary service
    //   this.dummyTopics=[];
    //   this.masterhttp.getTopics()
    //   .subscribe(data=>{
    //       data = data['topics']['records'];
    //       for(let i in data){
    //           this.dummyTopics.push(data[i][1])
    //       }
    //   })
    //   })    

    
  }
  

}
