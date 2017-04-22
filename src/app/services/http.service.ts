import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as constants from '../../config/constants';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  sessionToken:string = localStorage.getItem('session_token')
  constructor(private http: Http) { }

  getData(){

    const queryHeader = new Headers();
    queryHeader.append("Content-Type", "application/json");
    queryHeader.append("X-DreamFactory-Api-Key", constants.DREAMFACTORY_API_KEY);
    queryHeader.append("X-DreamFactory-Session-Token", this.sessionToken)

    return this.http.get(constants.DREAMFACTORY_INSTANCE_URL+ "/api/v2/olympiadbox/_table/student/2?related=class_by_class_id,school_by_school_id,user_info_by_user_info_id", {headers: queryHeader})
      .map((response: Response) =>response.json() );
  };
}
