import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import * as constants from '../../config/constants';


@Injectable()
export class NotificationService {

  sessionToken:string;
  queryHeader:any;

  constructor(private http: Http) {
    this.sessionToken = localStorage.getItem('session_token');
    this.queryHeader = new Headers();
    this.queryHeader.append('Content-Type','Application/Json')
    this.queryHeader.append('X-DreamFactory-Api-Key',constants.DREAMFACTORY_API_KEY);
    this.queryHeader.append('X-DreamFactory-Session-Token',this.sessionToken)
  }

  getTestimonials(){
    return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/' + 'testimonials', {headers: this.queryHeader})
    .map((data: Response)=>data.json());
  }

  getNotices(){    
    return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/' + 'notice_board', {headers: this.queryHeader})
    .map((data:Response)=>data.json());
  }

}

