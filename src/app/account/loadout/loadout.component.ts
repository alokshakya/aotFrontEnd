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
    public http: MasterHttpService,
    public personalInfo: PersonalInfo,
    public SubjectInfo: SubjectInfo,
    public misc:Misc,
    public router: Router
  ) { }

  ngOnInit() {
    if(this.http.checkToken()){
      this.http.getPersonalInfo();
      this.http.getSyllabus();  
      this.http.getNotices();
      // this.http.getSubjects();
      this.http.getFee();
      this.http.getTestDetails();
      this.http.getTestimonials(); 
    }
    else this.router.navigate(['login']);
  }

  ngOnDestroy(){
    this.http.updated = 0;
    // this.misc.setToken(null);
  }

  }

