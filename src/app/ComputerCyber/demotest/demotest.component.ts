import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.scss']
})
export class DemotestComponent implements OnInit {

  demoTestData:any;

  topicNames:Array<string>;

  chapterNames:Array<string>;
  
  constructor() { }

  ngOnInit() {

    this.topicNames = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"];

    this.chapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5" , "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10"]

    this.demoTestData = {
            labels: ['Completed','Remaining'],
            datasets: [
                {
                    data: [40, 20],
                    backgroundColor: [
                        "#5CB85C",
                        "#D9534F"
                    ],
                    hoverBackgroundColor: [
                        "#5CB85C",
                        "#D9534F"
                    ]
                }]    
  };

}
}