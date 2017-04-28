import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { Router } from '@angular/router';
import * as constants from '../../../config/constants';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent{


    testName:Array<any>;

    testSummary:Array<any>;

    resultSummary:any;

    noticeBoard:Array<any>;
    
    testimonials:Array<any>;

    testdata:Array<any>;

    constructor(private router: Router, ) {

        this.resultSummary = constants.result;   //json present in congfig/constants.ts

        this.noticeBoard = [
                            {"head":"Notice 1", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,"},
                            {"head":"Notice 2", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry,"},
                            {"head":"Notice 3", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,"}
                            ];

        this.testimonials = [
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"1 April 2017", "data":"I find the former much more readable."},
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"3 hours ago" , "data":"As you can see there's no more ng-repeat, it's ngFor now. You are probably thinking:. The answer to that is, it's syntactic sugar. What you're really doing is:I find the former much more readable."},
                             {"imgsrc":"assets/layout/images/testimonialAvatar.jpg", "time":"2 March 2017", "data":"I find the former much more readable."},
                        
                            ];            
    }

    redirect(){
        this.router.navigate(['account/computer/demotest']);
     }
}
    
    