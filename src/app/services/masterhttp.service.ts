import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class MasterHttpService {

  baseUrl = 'http://scripts.olympiadbox.com/services/api/api.php';
  

  data: DataService;

  constructor(
    private http: Http, 
    private dataservice: DataService) {
    }

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
  getInfo(){
    // this.http.get(this.url).map((resp: Response) =>resp.json())
    // .subscribe((data) =>{
    //   this.data.userInfo = data;
//    })
  return true;
  }
}
