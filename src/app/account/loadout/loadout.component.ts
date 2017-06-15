import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from '../../services/masterhttp.service';
import { PersonalInfo, SubjectInfo } from '../../services/data.service';

@Component({
  selector: 'app-loadout',
  templateUrl: './loadout.component.html',
  styleUrls: ['./loadout.component.scss']
})
export class LoadoutComponent implements OnInit {

  loaderActive:boolean

  constructor(
    private http: MasterHttpService,
    private personalInfo: PersonalInfo,
    private SubjectInfo: SubjectInfo,
    private router: Router
  ) { }

  ngOnInit() {
    let a = localStorage.getItem('session_token')
    if(a=='testuser'){
    this.http.getPersonalInfo();
    this.http.getSyllabus();  
    this.http.getTestimonials();
    this.http.getNotices();
    this.http.getSubjects();
    this.http.getFee();
    } else{this.router.navigate(['login'])}
  }
    

  ngOnDestroy(){
    this.http.updated = 0;
  }

  }

