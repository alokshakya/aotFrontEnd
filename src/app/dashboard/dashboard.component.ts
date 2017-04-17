import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

    noticeBoard:Array<any>;
    
    testimonials:Array<any>;

    constructor() {
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
    
    ngOnInit() {
        
    }
}