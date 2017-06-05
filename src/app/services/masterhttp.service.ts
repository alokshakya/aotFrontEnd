import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class MasterHttpService {

  url = 'http://scripts.olympiadbox.com/services/api/api.php/user_info/2'
  constructor(private http: Http, private dataservice: DataService) {}

  getUserInfo(){
    return this.http.get(this.url).map((response: Response) => response.json());
  }

  getClass(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/class/1').map((response: Response) => response.json());}

  getSubjects(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/subjects')
    .map((resp: Response)=>
      resp.json());
  }

  getTestimonials(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/testimonials')
    .map((response: Response) => 
      response.json())
  }

  getNotice(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/notice_board')
    .map((response: Response) => response.json())
  }

  getFee(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/fee')
    .map((response: Response) => response.json())
  }

  getChapters(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/chapters')
    .map((response: Response) => response.json())
  }

  getTopics(){
    return this.http.get('http://scripts.olympiadbox.com/services/api/api.php/topics')
    .map((response: Response) => response.json())
  }
  

  //data implementation
  getInfo(){
    this.http.get(this.url).map((resp: Response) =>resp.json())
    .subscribe((data) =>{
      this.dataservice.setUserInfo(data)
    })
  }
}
