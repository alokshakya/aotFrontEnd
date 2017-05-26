import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/primeng'
@Component({
  selector: 'app-result',
  templateUrl: './test.result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  detailedResult:any;
  resultSummary:any;
  chapterwiseSummary:any;

  overview:any;
  showDemo:boolean;
  showMock:boolean;
  showChapter:boolean;

  demo:any;
  mock:any;
  chapter:any;

  constructor() {

	this.detailedResult =	{
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "22-5-2017",
											"Time Taken": "24 minutes",
											"Total Questions": 15,
											"Attempted": 15,
											"Correct": 9,
											"Wrong": 6,
											"Marked": 0,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "15-01-2017",
											"Time Taken": "50 minutes",
											"Total Questions": 15,
											"Attempted": 12,
											"Correct": 6,
											"Wrong": 6,
											"Marked": 6,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "02-04-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 10,
											"Correct": 6,
											"Wrong": 4,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 2": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 3": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 4": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 5": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 6": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "22-5-2017",
											"Time Taken": "24 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "15-01-2017",
											"Time Taken": "50 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "02-04-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 7": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 8": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 9": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									},
									"Chapter 10": {
										"Test 1": {
											"Test":1,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 2": {
											"Test":2,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 3": {
											"Test":3,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 4": {
											"Test":4,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										},
										"Test 5": {
											"Test":5,
											"Date": "12-4-2017",
											"Time Taken": "35 minutes",
											"Total Questions": 15,
											"Attempted": 13,
											"Correct": 9,
											"Wrong": 3,
											"Marked": 3,
											"Score": 8
										}
									}
								},

								"Sample Test": {
									"Sample Test 1": {
										"Test":1,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 2": {
										"Test":2,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 3": {
										"Test":3,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 4": {
										"Test":4,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 5": {
										"Test":5,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 6": {
										"Test":6,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 7": {
										"Test":7,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 8": {
										"Test":8,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 9": {
										"Test":9,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Sample Test 10": {
										"Test":10,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									}
								},

								"Mock Test": {
									"Mock Test 1": {
										"Test":1,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 10,
										"Wrong": 1,
										"Marked": 4,
										"Score": 10
									},
									"Mock Test 2": {
										"Test":2,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 15,
										"Correct": 0,
										"Wrong": 15,
										"Marked": 0,
										"Score": 8
									},
									"Mock Test 3": {
										"Test":3,
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									}
								},

								"Demo Test": {
									"Demo Test 1": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 15,
										"Correct": 7,
										"Wrong": 3,
										"Marked": 5,
										"Score": 8
									}
								}
	}
	
	this.resultSummary = {
		"Chapterwise Test":{
			"Chapter 1":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 2":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 3":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 4":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 5":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 6":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 7":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 8":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 9":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
			"Chapter 10":{
				"Test 1":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 2":{"Correct":34,"Review":45,"Wrong":21},
				"Test 3":{"Correct":34,"Review":45,"Wrong":21},
				"Test 4":{"Correct":34,"Review":45,"Wrong":21}, 
				"Test 5":{"Correct":34,"Review":45,"Wrong":21}
			},
		}
	}
	
	this.overview = {
						"Chapter 1": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 2": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 3": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 4": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 5": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 6": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 7": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 8": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 9": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						},
						"Chapter 10": {
							"Correct": 25,
							"Review": 25,
							"Wrong": 50
						}
	}	

  }
  
  show(i,j){
	  this.chapter = {}
	  this.chapter = this.detailedResult['Chapterwise Test'][i][j]
	  this.showChapter = true;
  }			

  demoResult(){
	  this.demo={};
	  this.demo = this.detailedResult['Demo Test']['Demo Test 1']
	  this.showDemo = true;
	  console.log(this.demo)
  }	

  mockResult(number){
	  var a = number+1
	  this.mock = {};
	  this.mock = this.detailedResult['Mock Test']['Mock Test '+a]
	  this.showMock = true
	  console.log(this.showMock)
  }

  close(){
	  this.showDemo=false;
	  this.showMock=false;
  }
  ngOnInit(){

  }

}