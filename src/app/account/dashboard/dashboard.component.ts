import { Component,OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { NotificationService } from '../../services/notification.service';
import { SubjectService } from '../../services/subject.service';
import { SharedService } from '../../services/shared.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{

    computersSubscribed=false;

    subjectSummary:any;

    testSummary:any;

    resultSummary:any;

    noticeBoard:any;
    
    testimonials:any;

    sessionToken:string;

    received=false;
    subscribedSubjects:any;

    constructor(
        private router: Router, 
        private notification: NotificationService,
        private sub: SubjectService,
        ) {
        
        this.testSummary = {
                                "Computers": {
                                    "Chapterwise Test": {
                                        "completed": 34,
                                        "generated": 44,
                                        "notcompleted": 22
                                    },
                                    "Sample Test": {
                                        "completed": 35,
                                        "notcompleted": 65
                                    },
                                    "Mock Test": {
                                        "completed": 74,
                                        "notcompleted": 26
                                    },
                                    "Demo Test":{
                                        "completed":100,
                                        "notcompleted":0,
                                    }
                                },
                                "Science": {
                                    "Chapterwise Test": {
                                        "completed": 74,
                                        "generated": 13,
                                        "notcompleted": 13
                                    },
                                    "Sample Test": {
                                        "completed": 60,
                                        "notcompleted": 40
                                    },
                                    "Mock Test": {
                                        "completed": 34,
                                        "notcompleted": 66
                                    },
                                    "Demo Test":{
                                        "completed":0,
                                        "notcompleted":100,
                                    }
                                },
                                "Mathematics": {
                                    "Chapterwise Test": {
                                        "completed": 44,
                                        "generated": 36,
                                        "notcompleted": 20
                                    },
                                    "Sample Test": {
                                        "completed": 42,
                                        "notcompleted": 58
                                    },
                                    "Mock Test": {
                                        "completed": 69,
                                        "notcompleted": 31
                                    },
                                    "Demo Test":{
                                        "completed":0,
                                        "notcompleted":100,
                                    }
                                },
                                "General Knowledge": {
                                    "Chapterwise Test": {
                                        "completed": 48,
                                        "generated": 20,
                                        "notcompleted": 32
                                    },
                                    "Sample Test": {
                                        "completed": 12,
                                        "notcompleted": 88
                                    },
                                    "Mock Test": {
                                        "completed": 45,
                                        "notcompleted": 55
                                    },
                                    "Demo Test":{
                                        "completed":0,
                                        "notcompleted":100,
                                    }
                                },
                                "English": {
                                    "Chapterwise Test": {
                                        "completed": 85,
                                        "generated": 15,
                                        "notcompleted": 0
                                    },
                                    "Sample Test": {
                                        "completed": 45,
                                        "notcompleted": 55
                                    },
                                    "Mock Test": {
                                        "completed": 13,
                                        "notcompleted": 87
                                    },
                                    "Demo Test":{
                                        "completed":0,
                                        "notcompleted":100,
                                    }

                                },
                                "Reasoning": {
                                    "Chapterwise Test": {
                                        "completed": 0,
                                        "generated": 0,
                                        "notcompleted": 100
                                    },
                                    "Sample Test": {
                                        "completed": 0,
                                        "notcompleted": 100
                                    },
                                    "Mock Test": {
                                        "completed": 54,
                                        "notcompleted": 46
                                    },
                                    "Demo Test":{
                                        "completed":100,
                                        "notcompleted":0,
                                    }
                                }
        }

        this.resultSummary = {
                                "Computers": {
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

        this.subscribedSubjects = {"Computers":true, "Science":true, "Mathematics":false, "General Knowledge":true, 
                                    "English":false, "Reasoning":false}

    }

    ngOnInit(){
        this.sessionToken = localStorage.getItem('session_token');
        this.isLogin(this.sessionToken) 
    }
                        
    startTest(){
        this.router.navigate(['account/computers/sampletest'])
    }

    redirect(destination){
        if(destination=='demo'){
            this.router.navigate(['account/computers/demotest']);
        }else {this.router.navigate(['account/accountsettings'])}
    }

    getData(){
        //retreive notice data
        this.noticeBoard = [];
        this.notification.getNotices().subscribe((data: Response)=>{
            for(let i in data['resource']){
                this.noticeBoard.push(data['resource'][i]);
            }
        });
        //retreive testimonials
        this.testimonials = [];
        this.notification.getTestimonials().subscribe((data: Response)=>{
            for(let i in data['resource']){
                this.testimonials.push(data['resource'][i]);
            }
        });

        this.sub.getSubjectSet(1).subscribe((data: Response) => {
            data = data['resource']
            this.subjectSummary =[];
            for(let i in data){
                this.subjectSummary.push(data[i]['subjects_by_subject_id']['name']);
            }
            this.received=true;
        }),
        (error)=>{
        }
    } 

    isLogin(token){
        // if(token==null||token==''){
        //     this.router.navigate(['login'])
        // }else{ 
        //     this.getData(); }
        this.getData();
    } 

    redirectToTest(i,j){
        var a = i.toLowerCase()
        var b = j.toLowerCase().replace(/\s/g, "");
        this.router.navigate(['account/'+a+'/'+b]);
    }

    redirectToResult(i){
        var a = i.toLowerCase();
        this.router.navigate(['account/'+a+'/result'])
    }

    check(e){
        console.log(e.index);
    }

    subs(a){
        return true
    }
}