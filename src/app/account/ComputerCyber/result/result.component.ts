import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/primeng'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @ViewChild('piechart')chapterwisePie: UIChart; //chapterwise test
  @ViewChild('chart')otherPie: UIChart; //remaining tests
  testName:string;	  
  panelHead:string;
  resultData:any;
  
  //for chapterwise test result
  chapterwiseTestView=false;
  windowToggle=false;
  chapterwiseTestResultData:any;
  resultWindow:any;
  chapterwiseTestChart:any;

  //for sample/mock/demo test result
  otherTestView=false;
  otherTestResultData:any;
  otherTestChart:any;

  sub:string;
  chapter:string;
  test:string;
  

  detailedResult:any;

  constructor() {

	this.detailedResult = {
							"Computer/Cyber": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							},
							"Science": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 3": {
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
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							
							},
							"Mathematics": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 3": {
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
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							
							},
							"General Knowledge": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 3": {
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
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							
							},
							"English": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 3": {
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
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							
							},
							"Reasoning": {
								"Chapterwise Test": {
									"Chapter 1": {
										"Test 1": {
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
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Mock Test 3": {
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
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
									"Demo Test 2": {
										"Date": "12-4-2017",
										"Time Taken": "35 minutes",
										"Total Questions": 15,
										"Attempted": 13,
										"Correct": 9,
										"Wrong": 3,
										"Marked": 3,
										"Score": 8
									},
								},
							
							},
  	}

    this.resultData = {
						"Computer/Cyber": {
							"Chapterwise Test": {
								"Chapter 1": 42,
								"Chapter 2": 45,
								"Chapter 3": 12,
								"Chapter 4": 45,
								"Chapter 5": 67,
								"Chapter 6": 45,
								"Chapter 7": 23,
								"Chapter 8": 11,
								"Chapter 9": 87,
								"Chapter 10": 34
							},
							"Sample Test": {
								"Sample Test 1": 34,
								"Sample Test 2": 23,
								"Sample Test 3": 33,
								"Sample Test 4": 77,
								"Sample Test 5": 34,
								"Sample Test 6": 76,
								"Sample Test 7": 43,
								"Sample Test 8": 89,
								"Sample Test 9": 43,
								"Sample Test 10": 56
							},
							"Mock Test": {
								"Mock Test 1": 88,
								"Mock Test 2": 78,
								"Mock Test 3": 67
							},
							"Demo Test": {
								"Demo Test 1": 67,
								"Demo Test 2": 56
							}
						},
						"Science": {
							"Chapterwise Test": {
								"Chapter 1": 45,
								"Chapter 2": 12,
								"Chapter 3": 32,
								"Chapter 4": 45,
								"Chapter 5": 76,
								"Chapter 6": 87,
								"Chapter 7": 98,
								"Chapter 8": 56,
								"Chapter 9": 45,
								"Chapter 10": 23
							},
							"Sample Test": {
								"Sample Test 1": 66,
								"Sample Test 2": 53,
								"Sample Test 3": 43,
								"Sample Test 4": 54,
								"Sample test 5": 87,
								"Sample Test 6": 54,
								"Sample Test 7": 23,
								"Sample Test 8": 65,
								"Sample Test 9": 34,
								"Sample Test 10": 76
							},
							"Mock Test": {
								"Mock Test 1": 37,
								"Mock Test 2": 34,
								"Mock Test 3": 87
							},
							"Demo Test": {
								"Demo Test 1": 54,
								"Demo Test 2": 76
							}
						},
						"Mathematics": {
							"Chapterwise Test": {
								"Chapter 1": 46,
								"Chapter 2": 56,
								"Chapter 3": 88,
								"Chapter 4": 56,
								"Chapter 5": 23,
								"Chapter 6": 45,
								"Chapter 7": 76,
								"Chapter 8": 99,
								"Chapter 9": 0,
								"Chapter 10": 45
							},
							"Sample Test": {
								"Sample Test 1": 13,
								"Sample Test 2": 23,
								"Sample Test 3": 33,
								"Sample Test 4": 43,
								"Sample test 5": 53,
								"Sample Test 6": 63,
								"Sample Test 7": 73,
								"Sample Test 8": 83,
								"Sample Test 9": 93,
								"Sample Test 10": 42
							},
							"Mock Test": {
								"Mock Test 1": 44,
								"Mock Test 2": 64,
								"Mock Test 3": 94
							},
							"Demo Test": {
								"Demo Test 1": 34,
								"Demo Test 2": 44
							}
						},
						"General Knowledge": {
							"Chapterwise Test": {
								"Chapter 1": 33,
								"Chapter 2": 23,
								"Chapter 3": 43,
								"Chapter 4": 13,
								"Chapter 5": 53,
								"Chapter 6": 73,
								"Chapter 7": 33,
								"Chapter 8": 63,
								"Chapter 9": 83,
								"Chapter 10": 33
							},
							"Sample Test": {
								"Sample Test 1": 93,
								"Sample Test 2": 83,
								"Sample Test 3": 73,
								"Sample Test 4": 63,
								"Sample test 5": 53,
								"Sample Test 6": 43,
								"Sample Test 7": 33,
								"Sample Test 8": 23,
								"Sample Test 9": 43,
								"Sample Test 10": 13
							},
							"Mock Test": {
								"Mock Test 1": 54,
								"Mock Test 2": 74,
								"Mock Test 3": 94
							},
							"Demo Test": {
								"Demo Test 1": 14,
								"Demo Test 2": 54
							}
						},
						"English": {
							"Chapterwise Test": {
								"Chapter 1": 13,
								"Chapter 2": 33,
								"Chapter 3": 43,
								"Chapter 4": 63,
								"Chapter 5": 83,
								"Chapter 6": 93,
								"Chapter 7": 23,
								"Chapter 8": 34,
								"Chapter 9": 53,
								"Chapter 10": 43
							},
							"Sample Test": {
								"Sample Test 1": 13,
								"Sample Test 2": 33,
								"Sample Test 3": 63,
								"Sample Test 4": 73,
								"Sample test 5": 23,
								"Sample Test 6": 33,
								"Sample Test 7": 63,
								"Sample Test 8": 73,
								"Sample Test 9": 83,
								"Sample Test 10": 87
							},
							"Mock Test": {
								"Mock Test 1": 31,
								"Mock Test 2": 44,
								"Mock Test 3": 84
							},
							"Demo Test": {
								"Demo Test 1": 34,
								"Demo Test 2": 84
							}
						},
						"Reasoning": {
							"Chapterwise Test": {
								"Chapter 1": 63,
								"Chapter 2": 53,
								"Chapter 3": 43,
								"Chapter 4": 93,
								"Chapter 5": 73,
								"Chapter 6": 33,
								"Chapter 7": 63,
								"Chapter 8": 83,
								"Chapter 9": 13,
								"Chapter 10":53
							},
							"Sample Test": {
								"Sample Test 1": 53,
								"Sample Test 2": 83,
								"Sample Test 3": 33,
								"Sample Test 4": 63,
								"Sample test 5": 23,
								"Sample Test 6": 63,
								"Sample Test 7": 33,
								"Sample Test 8": 73,
								"Sample Test 9": 93,
								"Sample Test 10": 13
							},
							"Mock Test": {
								"Mock Test 1": 32,
								"Mock Test 2": 54,
								"Mock Test 3": 89
							},
							"Demo Test": {
								"Demo Test 1": 56,
								"Demo Test 2": 87
							}
						}
	}

	

}


  
  showSubPanel(a,b,c){
	  this.sub=a;
	  this.chapter=b;
	  this.test=c;
	  this.panelHead = c;
	  this.testName = c;
	  if(b=="Chapterwise Test"){
		  this.chapterwiseTestResultData = [];
		  this.chapterwiseTestResultData = this.detailedResult[a][b][c];
		  this.chapterwiseTestView = true;
		  this.windowToggle = false;
		  this.otherTestView = false;
		}else{
			this.chapterwiseTestView = false;
			this.otherTestResultData = [];
			this.otherTestResultData = this.detailedResult[a][b][c];
			this.otherTestView = true;
			this.windowToggle = false;
			//chart
			this.otherTestChart = {
									labels: ["Correct", "Marked", "Wrong"],
									datasets: [{
											data: [this.otherTestResultData["Correct"], this.otherTestResultData["Marked"], this.otherTestResultData["Wrong"]],
											backgroundColor: ["#5CB85C", "#F0AD4E","#D9534F"],
											hoverBackgroundColor: ["#5CB85C", "#F0AD4E", "#D9534F"],
									}]
								  }
			setTimeout(()=>this.otherPie.refresh(),100); //required to update chart after 100ms
		}
							
	}	

	  
  

  showWindow(a){
	  this.testName = a;
	  this.resultWindow = {};
	  this.resultWindow = this.detailedResult[this.sub][this.chapter][this.test][a];
	  this.windowToggle = true;
	  this.chapterwiseTestChart = {
									labels: ['Correct','Marked','Wrong'],
									datasets: [{
											data: [this.resultWindow["Correct"], this.resultWindow["Marked"], this.resultWindow["Wrong"]],
											backgroundColor: ["#5CB85C", "#F0AD4E","#D9534F"],
											hoverBackgroundColor: ["#5CB85C", "#F0AD4E", "#D9534F"],
									}]
										
								  };
								
	 setTimeout(()=>this.chapterwisePie.refresh(),100); //required to update chart after 100ms

  }
	  
	  

  reset(){
	  console.log('click')
  }

  ngOnInit() {
  }
	
}




  

  
