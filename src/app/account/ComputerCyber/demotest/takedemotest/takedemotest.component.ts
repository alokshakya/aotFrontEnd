import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takedemotest',
  templateUrl: './takedemotest.component.html',
  styleUrls: ['./takedemotest.component.scss']
})
export class TakedemotestComponent implements OnInit {


  answers = {"question1":"","question2":"","question3":""};
  q1:boolean=true;
  q2:boolean=false;
  q3:boolean=false;
  
  constructor() { }

  select(number){
    if (this.answers['question'+number]!=''){
      return "#2BBF61";
    }
  }

  ngOnInit() {
  }

}
