import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as constants from '../../config/constants';

@Injectable()
export class UpdateService {

  queryHeader = new Headers();
  sessionToken = localStorage.getItem('session_token');
  constructor(
    private http: Http
  ) {
    this.queryHeader.append("Content-Type","Application/Json");
    this.queryHeader.append("X-DreamFactory-Api-Key",constants.DREAMFACTORY_API_KEY);
    this.queryHeader.append("X-DreamFactory-Session-Token",this.sessionToken);
  }

  updateUserInfo(data){
    var wrapper = {'resource':[]}
    wrapper['resource'].push(data)
    return this.http.put(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/user_info/', JSON.stringify(wrapper), {headers: this.queryHeader})
    .map((response: Response) => response.json());
  }

   updateStudent(studentId, classId){
     var wrapper = {'resource':[]}
     wrapper['resource'].push({'student_id':2, 'class_id':classId})
     return this.http.put(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/student/', JSON.stringify(wrapper), {headers: this.queryHeader})
     .map((response: Response) => response.json())
   }

   postTestimonial(data){
     var wrapper = {'resource':[]}
     wrapper['resource'].push({'text':data});
     return this.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table/testimonials/', JSON.stringify(wrapper), {headers: this.queryHeader})
     .map((response: Response) => response.json())
   }

}
