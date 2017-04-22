import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takedemotest',
  templateUrl: './takedemotest.component.html',
  styleUrls: ['./takedemotest.component.scss']
})
export class TakedemotestComponent implements OnInit {


    answers = {"question1":""};
    question1:boolean=true;
    question2:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
