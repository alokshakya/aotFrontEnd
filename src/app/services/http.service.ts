import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  apiKey:string = "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88";
  sessionToken:string = localStorage.getItem('session_token')
  constructor(private http: Http) { }

  getData(){

    const queryHeader = new Headers();
    queryHeader.append("Content-Type", "application/json");
    queryHeader.append("X-DreamFactory-Api-Key",this.apiKey);
    queryHeader.append("X-DreamFactory-Session-Token",this.sessionToken);

    return this.http.get("http://34.208.172.152/api/v2/olympiadbox/_table/student/2?related=class_by_class_id,school_by_school_id,user_info_by_user_info_id", {headers: queryHeader})
      .map((response: Response) =>response.json() );
  };
}
