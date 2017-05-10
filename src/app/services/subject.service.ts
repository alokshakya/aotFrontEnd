import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import * as constants from '../../config/constants';

@Injectable()
export class SubjectService {

  sessionToken = localStorage.getItem('session_token');
  queryHeader = new Headers()

  constructor(
    private http: Http,
 
  ) {
    this.queryHeader.append('Content-Type', 'Application/json');
    this.queryHeader.append('X-DreamFactory-Api-Key',constants.DREAMFACTORY_API_KEY);
    this.queryHeader.append('X-DreamFactory-Session-Token', this.sessionToken);
   }

   getSubjectSet(classId){
     return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table' + '/class_subject_set/?filter=class_id=1&related=class_by_class_id,subjects_by_subject_id', { headers:this. queryHeader } )
     .map((response: Response) => response.json())
   }

   getChapters(classSubId){
     return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox/_table' + '/chapters/?filter=class_subject_id=1', { headers: this.queryHeader})
     .map((response: Response) => response.json());
   }

   getQuestionsSet(){
     return this.http.get(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/olympiadbox' + '/_table/question_answers_set?related=questions_by_question_id', { headers: this.queryHeader})
     .map((response: Response)=>response.json());
   }




}
