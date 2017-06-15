import { Component,OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { SubjectInfo, Result, Misc } from '../../services/data.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit{


    subjectSummary:any;
    subjectLoader:boolean;

    noticeBoard:any;
    noticeLoader:boolean;
    
    testimonials:any;
    testimonialLoader:boolean;

    sessionToken:string;

    received=false;
    subscribedSubjects:any;

    dummySubjects:any;

    constructor(
        private router: Router, 
        private subjectInfo: SubjectInfo,
        private result: Result,
        private misc: Misc
        ) {
            

    }

    ngOnInit(){
        // this.sessionToken = localStorage.getItem('session_token');
        // this.isLogin(this.sessionToken) 


        //temporary
        // this.testimonials = []
        // this.masterhttp.getTestimonials()
        // .subscribe((data) => {
        //     for (let i in data['testimonials']['records']){
        //         this.testimonials.push(data['testimonials']['records'][i][1])
        //     }
        //     this.testimonialLoader=true; //loader
        // })

        // this.noticeBoard = []
        // this.masterhttp.getNotice()
        // .subscribe((data) => {
        //     for(let i in data['notice_board']['records']){
        //         this.noticeBoard.push(data['notice_board']['records'][i])
        //     }
        //     this.noticeLoader=true;
        // })
        // this.dummySubjects = []
        // this.masterhttp.getSubjects()
        // .subscribe((data)=>{
        //     for (let i in data['subjects']['records']){
        //         this.dummySubjects.push(data['subjects']['records'][i][1])
        //     }
        //     this.subjectLoader=true;
        // })
    }
                        
    startTest(){
        this.router.navigate(['account/computers/sampletest'])
    }

    redirect(destination){
        if(destination=='demo'){
            this.router.navigate(['account/computers/demotest']);
        }else {this.router.navigate(['account/accountsettings'])}
    }

    // getData(){
    //     //retreive notice data
    //     this.noticeBoard = [];
    //     this.notification.getNotices().subscribe((data: Response)=>{
    //         for(let i in data['resource']){
    //             this.noticeBoard.push(data['resource'][i]);
    //         }
    //     });
    //     //retreive testimonials
    //     this.testimonials = [];
    //     this.notification.getTestimonials().subscribe((data: Response)=>{
    //         for(let i in data['resource']){
    //             this.testimonials.push(data['resource'][i]);
    //         }
    //     });

    //     this.sub.getSubjectSet(1).subscribe((data: Response) => {
    //         data = data['resource']
    //         this.subjectSummary =[];
    //         for(let i in data){
    //             this.subjectSummary.push(data[i]['subjects_by_subject_id']['name']);
    //         }
    //         this.received=true;
    //     }),
    //     (error)=>{
    //     }
    // } 

    isLogin(token){
        // if(token==null||token==''){
        //     this.router.navigate(['login'])
        // }else{ 
        //     this.getData(); }
        // this.getData();
    } 

    redirectToTest(i,j){
        // let a = i.toLowerCase()
        let b = j.toLowerCase().replace(/\s/g, "");
        // this.router.navigate(['account/'+a+'/'+b]);
        this.router.navigate(['account/computers/'+b])
    }

    redirectToResult(i){
        let a = i.toLowerCase();
        this.router.navigate(['account/computers/result'])
    }

}