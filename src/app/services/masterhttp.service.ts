import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PersonalInfo, SubjectInfo } from './data.service';

@Injectable()
export class MasterHttpService {

  baseUrl = 'http://scripts.olympiadbox.com/services/api/api.php';
  constructor(
    private http: Http,
    private personalInfo: PersonalInfo,
    private subjectInfo: SubjectInfo)
    {}

  getUserInfo(){
    return this.http.get(this.baseUrl+'/user_info/2')
    .map((response: Response) => response.json());
  }

  getClass(){
    return this.http.get(this.baseUrl+'/class/1')
    .map((response: Response) => response.json());}

  getSubjects(){
    return this.http.get(this.baseUrl+'/subjects')
    .map((resp: Response)=>
      resp.json());
  }

  getTestimonials(){
    return this.http.get(this.baseUrl+'/testimonials')
    .map((response: Response) => 
      response.json())
  }

  getNotice(){
    return this.http.get(this.baseUrl+'/notice_board')
    .map((response: Response) => response.json())
  }

  getFee(){
    return this.http.get(this.baseUrl+'/fee')
    .map((response: Response) => response.json())
  }

  getChapters(){
    return this.http.get(this.baseUrl+'/chapters')
    .map((response: Response) => response.json())
  }

  getTopics(){
    return this.http.get(this.baseUrl+'/topics')
    .map((response: Response) => response.json())
  }
  

  //data implementation
  getPersonalInfo(){
    this.http.get(this.baseUrl+'/user_info/2').map((resp: Response) =>resp.json())
    .subscribe((data) =>{
      this.personalInfo.setInfo(data);
   })
  }

  getSyllabus(){
    this.http.get(this.baseUrl+'/chapters').map((resp: Response) => resp.json())
    .subscribe((data) =>{
      this.subjectInfo.setComputerChapters(data['chapters']['records']);
    })

    this.http.get(this.baseUrl+'/topics').map((resp: Response) => resp.json())
    .subscribe((data) => {
      this.subjectInfo.setComputerTopics(data['topics']['records']);
    })
  }


}
