import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from '../../services/masterhttp.service';
import { PersonalInfo, SubjectInfo, Misc } from '../../services/data.service';

@Component({
    selector: 'app-loadout',
    templateUrl: './loadout.component.html',
    styleUrls: ['./loadout.component.scss']
})
export class LoadoutComponent implements OnInit {

    loaderActive: boolean

    constructor(
        public http: MasterHttpService,
        public personalInfo: PersonalInfo,
        public SubjectInfo: SubjectInfo,
        public misc: Misc,
        public router: Router
    ) { }

    ngOnInit() {
        this.http.updated = 0;
        this.http.setToken(localStorage.getItem('session_token'));
        this.http.getPersonalInfo();
        this.http.getSyllabus();
        this.http.getNotices();
        this.http.getTestDetails();
        this.http.getTestimonials();
        this.personalInfo.userInfoEvent.subscribe((data)=>{
            if(data){
                this.http.getUserTestimonials(this.personalInfo.studentInfo['student_id']);
            }
        })
        this.http.getResult();
        this.misc.logIn();
    }

    ngOnDestroy() {
        this.http.updated = 0;
    }

}

