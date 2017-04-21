import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapterwisetest',
  templateUrl: './chapterwisetest.component.html',
  styleUrls: ['./chapterwisetest.component.scss']
})
export class ChapterwisetestComponent implements OnInit {

  chapterwiseTestData: any;

  chapterNames:Array<string>;

  testNumbers:Array<string>;

  topicNames:Array<string>;


  constructor() { }

  ngOnInit() {

    this.chapterNames = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10" ];

    this.testNumbers = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5" ];

    this.topicNames=["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"]

    this.chapterwiseTestData = {
            labels: ['Remaining','Completed','Generated'],
            datasets: [
                {
                    data: [163, 237, 400],
                    backgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ],
                    hoverBackgroundColor: [
                        "#D9534F",
                        "#5CB85C",
                        "#F0AD4E"
                    ]
                }]    
            };
    }
    
  }


