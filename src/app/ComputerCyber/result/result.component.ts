import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  ch1result:boolean = false;
  ch2result:boolean = false;
  ch3result:boolean = false;
  

  

  constructor() { }

  ngOnInit() {
  }

}
