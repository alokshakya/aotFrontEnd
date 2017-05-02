import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{

    computerSubscribed=false;

    subjectSummary:any;

    testSummary:any;

    resultSummary:any;

    noticeBoard:any;
    
    testimonials:any;


    constructor(private router: Router, ) {

        this.subjectSummary = {
                                "Computer/Cyber":{"icon":"icon-cyber icon-4x"},
                                "Science":{"icon":"icon-science icon-4x"},
                                "Mathematics":{"icon":"icon-maths icon-4x"},
                                "General Knowledge":{"icon":"icon-gk icon-4x"},
                                "English":{"icon":"icon-english icon-4x"},
                                "Reasoning":{"icon":"icon-reasoning icon-4x"}
        }


        this.noticeBoard = {
                                "Notice 1":"text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
                                "Notice 2":"five centuries, but also the leap into electronic typesetting , remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
                                "Notice 3":"centuries later, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "
        }

        this.testimonials = {
                                "testimonial 1": {
                                    "imgsrc": "assets/layout/images/testimonialAvatar.jpg",
                                    "time": "03-03-2017",
                                    "data": "lorem ipsum is a dummy text"
                                },
                                "testimonial 2": {
                                    "imgsrc": "assets/layout/images/testimonialAvatar.jpg",
                                    "time": "15-03-2017",
                                    "data": "lorem ipsum is a dummy textlorem ipsum is a dummy textlorem ipsum is a dummy text"
                                },
                                "testimonial 3": {
                                    "imgsrc": "assets/layout/images/testimonialAvatar.jpg",
                                    "time": "25-05-2017",
                                    "data": ".lorem ipsum is a dummy text.lorem ipsum is a dummy text.lorem ipsum is a dummy text.lorem ipsum is a dummy text."
                                }
        }

        this.testSummary= {
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

        
        this.resultSummary = {
                                "Computer/Cyber": {
                                    "Chapterwise Test": {
                                        "right": 34,
                                        "review": 44,
                                        "wrong": 22
                                    },
                                    "Sample Test": {
                                        "right": 35,
                                        "review": 34,
                                        "wrong": 31
                                    },
                                    "Mock Test": {
                                        "right": 74,
                                        "review": 22,
                                        "wrong": 4
                                    },
                                    "Demo Test": {
                                        "right": 34,
                                        "review": 44,
                                        "wrong": 22
                                    }
                                },
                                "Science": {
                                    "Chapterwise Test": {
                                        "right": 74,
                                        "review": 13,
                                        "wrong": 13
                                    },
                                    "Sample Test": {
                                        "right": 60,
                                        "review": 34,
                                        "wrong": 6
                                    },
                                    "Mock Test": {
                                        "right": 34,
                                        "review": 32,
                                        "wrong": 34
                                    },
                                    "Demo Test": {
                                        "right": 67,
                                        "review": 23,
                                        "wrong": 10
                                    }
                                },
                                "Mathematics": {
                                    "Chapterwise Test": {
                                        "right": 44,
                                        "review": 36,
                                        "wrong": 20
                                    },
                                    "Sample Test": {
                                        "right": 42,
                                        "review": 42,
                                        "wrong": 14
                                    },
                                    "Mock Test": {
                                        "right": 69,
                                        "review": 9,
                                        "wrong": 22
                                    },
                                    "Demo Test": {
                                        "right": 100,
                                        "review": 0,
                                        "wrong": 0
                                    }
                                },
                                "General Knowledge": {
                                    "Chapterwise Test": {
                                        "right": 48,
                                        "review": 20,
                                        "wrong": 32
                                    },
                                    "Sample Test": {
                                        "right": 12,
                                        "review":5,
                                        "wrong": 83
                                    },
                                    "Mock Test": {
                                        "right": 45,
                                        "review": 15,
                                        "wrong": 40
                                    },
                                    "Demo Test": {
                                        "right": 100,
                                        "review": 0,
                                        "wrong": 0
                                    }
                                },
                                "English": {
                                    "Chapterwise Test": {
                                        "right": 85,
                                        "review": 15,
                                        "wrong": 0
                                    },
                                    "Sample Test": {
                                        "right": 45,
                                        "review": 25,
                                        "wrong": 30
                                    },
                                    "Mock Test": {
                                        "right": 13,
                                        "review": 2,
                                        "wrong": 85
                                    },
                                    "Demo Test": {
                                        "right": 0,
                                        "review": 100,
                                        "wrong": 0
                                    }
                                },
                                "Reasoning": {
                                    "Chapterwise Test": {
                                        "right": 0,
                                        "review": 0,
                                        "wrong": 100
                                    },
                                    "Sample Test": {
                                        "right": 0,
                                        "review": 100,
                                        "wrong": 0
                                    },
                                    "Mock Test": {
                                        "right": 54,
                                        "review": 21,
                                        "wrong": 25
                                    },
                                    "Demo Test": {
                                        "right": 34,
                                        "review": 44,
                                        "wrong": 22
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
    
    