import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import * as constants from '../../config/constants';
import 'rxjs/Rx';

@Injectable()
export class UserinfoService {

  queryHeader = new Headers();
  sessionToken:string = localStorage.getItem("session_token");
  constructor(private http: Http) {
    this.queryHeader.append("Content-Type","Application/Json");
    this.queryHeader.append("X-DreamFactory-Api-Key",constants.DREAMFACTORY_API_KEY);
    this.queryHeader.append("X-DreamFactory-Session-Token",this.sessionToken);
  
  }
  
  getUserInfo(email){  
    return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/user_info/?filter=email=gpantbiz@gmail.com&related=user_info_by_user_info_id,class_by_class_id', {headers : this.queryHeader}) 
    .map((data:Response) => data.json());
  };

  getAcademicInfo(id){
    id = '2';

    return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/student/2?related=class_by_class_id,school_by_school_id', {headers: this.queryHeader} )
    .map((data) => data.json());
}


}
