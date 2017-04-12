import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  testNames:Array<string>;

  chapterNames:Array<string>;
  

  

  constructor() {


    this.testNames = ["Chapterwise Test", "Sample Test", "Mock Test", "Demo Test"]
    this.chapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10"]




   }

  ngOnInit() {
  }

}
