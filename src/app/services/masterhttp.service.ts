import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PersonalInfo, SubjectInfo, chapterwiseTest,Misc } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as constants from '../../config/constants';

@Injectable()
export class MasterHttpService {

  token:string;
  updated = 0;
  queryHeaders;
  baseUrl = 'http://scripts.olympiadbox.com/services/api/api.php';    
  constructor(
    private http: Http,
    private router: Router,
    private personalInfo: PersonalInfo,
    private subjectInfo: SubjectInfo,
    private misc: Misc,
    private chapterwiseTest: chapterwiseTest)
    {}

  checkToken(){
    if(this.token!=localStorage.getItem('session_token')){
      this.router.navigate(['login']);
    }
  }

  dataRetreived(){
    if(this.updated==7){
      this.router.navigate(['account'])
    }
  }

  setToken(token){
    this.token = token;
    localStorage.setItem('session_token',token);
    this.queryHeaders = new Headers();
    this.queryHeaders.append('Content-Type', 'application/json');
    this.queryHeaders.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
    this.queryHeaders.append('session_token',localStorage.getItem('session_token'));
    this.updated++;
    this.dataRetreived();
  }

  sendOtp(requestBody){
  return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/otp/generate',requestBody ,{headers:this.queryHeaders})
  .map((resp: Response) => resp.json())          
      //response status conditions
  }

  verifyOtp(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/otp/verify',requestBody, {headers:this.queryHeaders})
    .map((resp: Response)=>resp.json());
  }

  updatePassword(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/updatepassword', requestBody, {headers:this.queryHeaders})
    .map((resp: Response)=>resp.json());
  }  

  forgotPassword(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/forgotpassword', requestBody, {headers:this.queryHeaders})
    .map((resp: Response)=>resp.json());
  }

  addTestimonial(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/testimonial', requestBody, {headers:this.queryHeaders})
    .map((resp:Response)=>resp.json())
  }

  addAchievement(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/achievement', requestBody, {headers:this.queryHeaders})
    .map((resp:Response)=>resp.json())
  }

  logout(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/logout', requestBody, {headers:this.queryHeaders})
    .map((resp:Response)=>resp.json())
  }

  updateProfile(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/update', requestBody, {headers:this.queryHeaders})
    .map((resp:Response) => resp.json())

  }

  getSchool(couponeCode){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/user/school', couponeCode, {headers:this.queryHeaders})
    .map((resp:Response)=>resp.json())
  }

  generateTest(requestbody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/test/generate', requestbody, {headers:this.queryHeaders})
    .map((resp:Response) => resp.json())
  }

  nextQuestion(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/test/nextquestion', requestBody, {headers:this.queryHeaders})
    .map((resp:Response) => resp.json())
  }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //data service implementation
  getPersonalInfo(){
    this.http.get(constants.OLYMPIADBOX_INSTANCE_URL+ '/user/profile', {headers:this.queryHeaders})
    .map((resp:Response)=>resp.json())
    .subscribe((data) =>{
      if(data['status']==200){
        this.personalInfo.setInfo(data['message'][0]);
        this.updated++;
        this.dataRetreived();
      }
   })
  }

  getSyllabus(){
    this.http.get(constants.OLYMPIADBOX_INSTANCE_URL+'/classdata/topics', {headers:this.queryHeaders}).map((resp: Response) => resp.json())
    .subscribe((data) =>{
      this.subjectInfo.setSyllabus(data['class']['subjects']);
      this.updated++;
      this.dataRetreived();
    })
  }

  getTestDetails(){
    this.http.get(constants.OLYMPIADBOX_INSTANCE_URL+'/test/details', {headers:this.queryHeaders}).map((resp:Response) => resp.json())
    .subscribe((data)=>{
      this.chapterwiseTest.setTestDetails(data['message']);
      this.updated++;
      this.dataRetreived();

    })
  }
//-----------------------------------------------------------------------------------------------
  setQuestions(data){
    this.chapterwiseTest.setQuesAnswerSet(data);
    this.router.navigate(['demotest']);
  }
  beginTest(requestBody){
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL+'/test/attempt', requestBody, {headers:this.queryHeaders}).map((resp: Response) => resp.json())
    .subscribe((data)=>{
      if(data['status']==200)
        this.setQuestions(data['message'])
    })
  }
//-------------------------------------------------------------------------------------------------

    // this.http.get(this.baseUrl+'/topics').map((resp: Response) => resp.json())
    // .subscribe((data) => {
    //   this.subjectInfo.setComputerTopics(data['topics']['records']);
    //   this.updated++;
    //   this.dataRetreived();
    // })
  // }

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

  // getSubjects(){
  //   this.http.get(this.baseUrl+'/subjects').map((resp) => resp.json())
  //   .subscribe((data) =>{
  //     this.subjectInfo.setSubjects(data['subjects']['records']);
  //     this.updated++;
  //     this.dataRetreived();
  //   })
  // }

  getFee(){
    this.http.get(this.baseUrl+'/fee').map((resp:Response) => resp.json())
    .subscribe((data) =>{
      this.misc.setFee(data['fee']['records']);
      this.updated++;
      this.dataRetreived();
    })
  }


}
