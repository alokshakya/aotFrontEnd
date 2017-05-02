import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {


  resultData:any;
  
  constructor() {

    this.resultData = {
						"Computer/Cyber": {
							"Chapterwise Test": {
								"Chapter1": 42,
								"Chapter2": 45,
								"Chapter3": 12,
								"Chapter4": 45,
								"Chapter5": 67,
								"Chapter6": 45,
								"Chapter7": 23,
								"Chapter8": 11,
								"Chapter9": 87,
								"Chapter10": 34
							},
							"Sample Test": {
								"Sample Test 1": 34,
								"Sample Test 2": 23,
								"Sample Test 3": 33,
								"Sample Test 4": 77,
								"Sample test 5": 34,
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
								"Chapter1": 45,
								"Chapter2": 12,
								"Chapter3": 32,
								"Chapter4": 45,
								"Chapter5": 76,
								"Chapter6": 87,
								"Chapter7": 98,
								"Chapter8": 56,
								"Chapter9": 45,
								"Chapter10": 23
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
								"Chapter1": 46,
								"Chapter2": 56,
								"Chapter3": 88,
								"Chapter4": 56,
								"Chapter5": 23,
								"Chapter6": 45,
								"Chapter7": 76,
								"Chapter8": 99,
								"Chapter9": 0,
								"Chapter10": 45
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
								"Chapter1": 33,
								"Chapter2": 23,
								"Chapter3": 43,
								"Chapter4": 13,
								"Chapter5": 53,
								"Chapter6": 73,
								"Chapter7": 33,
								"Chapter8": 63,
								"Chapter9": 83,
								"Chapter10": 33
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
								"Chapter1": 13,
								"Chapter2": 33,
								"Chapter3": 43,
								"Chapter4": 63,
								"Chapter5": 83,
								"Chapter6": 93,
								"Chapter7": 23,
								"Chapter8": 34,
								"Chapter9": 53,
								"Chapter10": 43
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
								"Chapter1": 63,
								"Chapter2": 53,
								"Chapter3": 43,
								"Chapter4": 93,
								"Chapter5": 73,
								"Chapter6": 33,
								"Chapter7": 63,
								"Chapter8": 83,
								"Chapter9": 13,
								"Chapter10":53
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
  

  ngOnInit() {
  }
	
}




  

  
