import {Component,OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

    // testName:Array<string> = ["Chapterwise Test", "Sample Test", "Mock Test", "Demo Test"];
    // subjectName:Array<string> = ["Computer/Cyber", "Science", "Mathematics", "General Knowledge", "English" , "Reasoning"];
    // subdata:any = [
    //             {"completed": 45, "generated":40, "notCompleted":15},
    //             {"completed": 55, "generated":34, "notCompleted":11},
    //             {"completed": 75, "generated":20, "notCompleted":5},
    //             {"completed": 15, "generated":70, "notCompleted":15},
    //             {"completed": 25, "generated":25, "notCompleted":50},
    //             {"completed": 40, "generated":37, "notCompleted":23}
                
    //             ];                      

    notice:any = [
                    {"head":"Notice 1", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,"},
                    {"head":"Notice 2", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry,"},
                    {"head":"Notice 3", "value":"Lorem Ipsum is simply dummy text of the printing and typesetting industry,"}

                    ];
    

    
    testimonial:any = [
                        {"imgsrc":"./assets/layout/images/testimonialAvatar.jpg", "time":"1 April 2017", "data":"I find the former much more readable."},
                        {"imgsrc":"./assets/layout/images/testimonialAvatar.jpg", "time":"3 hours ago" , "data":"As you can see there's no more ng-repeat, it's ngFor now. You are probably thinking:. The answer to that is, it's syntactic sugar. What you're really doing is:I find the former much more readable."},
                        {"imgsrc":"./../assets/layout/images/testimonialAvatar.jpg", "time":"2 March 2017", "data":"I find the former much more readable."},
                        
                        ];

    constructor() { }
    
    ngOnInit() {
        
    }
}