import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{

    computerSubscribed=true;

    testName:Array<any>;

    testSummary:Array<any>;

    resultSummary:any;

    noticeBoard:any;
    
    testimonials:Array<any>;


    constructor(private router: Router, ) {


        this.noticeBoard = {
                            "Notice 1":"text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
                            "Notice 2":"five centuries, but also the leap into electronic typesetting , remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
                            "Notice 3":"centuries later, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "
                            }

        this.testimonials = [
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"15-03-2017", "data":"I find the former much more readable."},
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"03-05-2017" , "data":"As you can see there's no more ng-repeat, it's ngFor now. You are probably thinking:. The answer to that is, it's syntactic sugar. What you're really doing is:I find the former much more readable."},
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"02-04-2017", "data":"I find the former much more readable."},
                            ];  

        this.resultSummary={
                                "Chapterwise Test": {
                                    "Computer/Cyber": {
                                        "completed": 45,
                                        "generated": 45,
                                        "notcompleted": 10
                                    },
                                    "Science": {
                                        "completed": 25,
                                        "generated": 45,
                                        "notcompleted":30
                                    },
                                    "Mathematics": {
                                        "completed": 15,
                                        "generated": 35,
                                        "notcompleted": 50
                                    },
                                    "General Knowledge": {
                                        "completed": 45,
                                        "generated": 45,
                                        "notcompleted": 10
                                    },
                                    "English": {
                                        "completed": 15,
                                        "generated": 25,
                                        "notcompleted": 60
                                    },
                                    "Reasoning": {
                                        "completed": 41,
                                        "generated": 43,
                                        "notcompleted": 14
                                    }
                                    },
                                "Sample Test": {
                                    "Computer/Cyber": {
                                        "completed": 15,
                                        "generated": 5,
                                        "notcompleted": 80
                                    },
                                    "Science": {
                                        "completed": 70,
                                        "generated": 25,
                                        "notcompleted": 5
                                    },
                                    "Mathematics": {
                                        "completed": 20,
                                        "generated": 50,
                                        "notcompleted": 30
                                    },
                                    "General Knowledge": {
                                        "completed": 15,
                                        "generated": 35,
                                        "notcompleted": 50
                                    },
                                    "English": {
                                        "completed": 48,
                                        "generated": 22,
                                        "notcompleted": 30
                                    },
                                    "Reasoning": {
                                        "completed": 45,
                                        "generated": 15,
                                        "notcompleted": 40
                                    }
                                    },
                                    "Mock Test": {
                                        "Computer/Cyber": {
                                            "completed": 41,
                                            "generated": 41,
                                            "notcompleted": 18
                                        },
                                        "Science": {
                                            "completed": 45,
                                            "generated": 25,
                                            "notcompleted": 30
                                        },
                                        "Mathematics": {
                                            "completed": 45,
                                            "generated": 45,
                                            "notcompleted": 10
                                        },
                                        "General Knowledge": {
                                            "completed": 15,
                                            "generated": 55,
                                            "notcompleted": 30
                                        },
                                        "English": {
                                            "completed": 45,
                                            "generated": 45,
                                            "notcompleted": 10
                                        },
                                        "Reasoning": {
                                            "completed": 44,
                                            "generated": 41,
                                            "notcompleted": 15
                                        }
                                    },
                                    "Demo Test": {
                                        "Computer/Cyber": {
                                            "completed": 45,
                                            "generated": 45,
                                            "notcompleted": 10
                                        },
                                        "Science": {
                                            "completed": 35,
                                            "generated": 35,
                                            "notcompleted": 30
                                        },
                                        "Mathematics": {
                                            "completed": 40,
                                            "generated": 48,
                                            "notcompleted": 12
                                        },
                                        "General Knowledge": {
                                            "completed": 15,
                                            "generated": 30,
                                            "notcompleted": 55
                                        },
                                        "English": {
                                            "completed": 48,
                                            "generated": 48,
                                            "notcompleted": 4
                                        },
                                        "Reasoning": {
                                            "completed": 50,
                                            "generated": 45,
                                            "notcompleted": 5
                                        }
                                    }
                                 }
        
    }
                        
    startTest(){
        this.router.navigate(['account/computer/sampletest'])
    }

    redirect(){
        this.router.navigate(['account/computer/demotest']);
     }

    ngOnInit(){
        var token=localStorage.getItem("session_token");
        if (token==''||token==null){
            this.router.navigate(['login'])
        }
    }
}
    
    