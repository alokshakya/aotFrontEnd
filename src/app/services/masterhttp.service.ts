import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PersonalInfo, SubjectInfo, Misc } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Injectable()
export class MasterHttpService {

  baseUrl = 'http://scripts.olympiadbox.com/services/api/api.php';
  updated = 0;
  constructor(
    private http: Http,
    private router: Router,
    private personalInfo: PersonalInfo,
    private subjectInfo: SubjectInfo,
    private misc: Misc)
    {}

  dataRetreived(){
    if(this.updated==7){
      this.router.navigate(['account'])
    }
  }

  //data service implementation
  getPersonalInfo(){
    this.http.get(this.baseUrl+'/user_info/2').map((resp: Response) =>resp.json())
    .subscribe((data) =>{
      this.personalInfo.setInfo(data);
      this.updated++;
      this.dataRetreived();
   })
  }

  getSyllabus(){
    this.http.get(this.baseUrl+'/chapters').map((resp: Response) => resp.json())
    .subscribe((data) =>{
      this.subjectInfo.setComputerChapters(data['chapters']['records']);
      this.updated++;
      this.dataRetreived();
    })

    this.http.get(this.baseUrl+'/topics').map((resp: Response) => resp.json())
    .subscribe((data) => {
      this.subjectInfo.setComputerTopics(data['topics']['records']);
      this.updated++;
      this.dataRetreived();
    })
  }

  getTestimonials(){
    this.http.get(this.baseUrl+'/testimonials').map((resp) => resp.json())
    .subscribe((data) => {
      this.misc.setTestimonial(data['testimonials']['records']);
      this.updated++;
      this.dataRetreived()
    })
  }

  getNotices(){
    this.http.get(this.baseUrl+'/notice_board').map((resp: Response)=> resp.json())
    .subscribe((data) => {
      this.misc.setNotice(data['notice_board']['records']);
      this.updated++;
      this.dataRetreived();
    })
  }

  getSubjects(){
    this.http.get(this.baseUrl+'/subjects').map((resp) => resp.json())
    .subscribe((data) =>{
      this.subjectInfo.setSubjects(data['subjects']['records']);
      this.updated++;
      this.dataRetreived();
    })
  }

  getFee(){
    this.http.get(this.baseUrl+'/fee').map((resp:Response) => resp.json())
    .subscribe((data) =>{
      this.misc.setFee(data['fee']['records']);
      this.updated++;
      this.dataRetreived();
    })
  }


}
