import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import {TreeModule,TreeNode} from 'primeng/primeng';
import { SubjectInfo } from '../../../services/data.service';


@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  //for donut chart
  demoTestData:any;
  options:any;

  //temporary
  dummyTopics:Array<string>;
  dummyChapters:Array<string>;
  
  constructor(
      private router: Router,
      private subjectInfo: SubjectInfo ){}


  takedemotest(){
      this.router.navigate(['demotest']);
  }

  ngOnInit() {

      this.demoTestData = {
          labels: ['Remaining'],
          datasets: [ {data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"]} ]
        };
        
      if(this.subjectInfo.attemptedDemo['Computer/Cyber']){
          this.demoTestData['labels']=['Completed'];
          this.demoTestData['datasets']=[{data:[1], backgroundColor:['#5CB85C'], hoverBackgroundColor: ["#5CB85C"]}]
      }
    //   this.chapterNames = [];
    //   this.subjectSet.getChapters(1).subscribe((data: Response) => {
    //       data = data['resource'];
    //       for(let i in data){
    //           this.chapterNames.push(data[i]['name'])
    //     }
    // })

    //temporary service used
    // this.dummyChapters = []
    // this.masterhttp.getChapters()
    // .subscribe(data=>{
    //     data = data['chapters']['records'];
    //     for(let i in data){
    //     this.dummyChapters.push(data[i][1])
    //     }
    // })

    // this.dummyTopics = [];
    // this.masterhttp.getTopics()
    // .subscribe(data => {
    //     data = data['topics']['records']
    //     for(let i in data){
    //         this.dummyTopics.push(data[i][1])
    //     }
    // })
  }
}