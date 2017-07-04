import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from '../../services/masterhttp.service';
import { PersonalInfo, SubjectInfo, Misc } from '../../services/data.service';

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
    private misc:Misc,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    if(this.misc.token==null||this.misc.token==''){
      this.router.navigate(['login']);
    }
    else{
      this.http.getPersonalInfo();
      this.http.getSyllabus();  
      this.http.getTestimonials();
      this.http.getNotices();
      this.http.getSubjects();
      this.http.getFee();
    }
  }
    

  ngOnDestroy(){
    this.http.updated = 0;
    // this.misc.setToken(null);
  }

  }

