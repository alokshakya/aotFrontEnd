import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  apiKey:string = "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88";
  sessionToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsInVzZXJfaWQiOjIsImVtYWlsIjoiZ3BhbnRiaXpAZ21haWwuY29tIiwiZm9yZXZlciI6ZmFsc2UsImlzcyI6Imh0dHA6Ly8zNC4yMDguMTcyLjE1Mi9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNDkyMDc2NzQ5LCJleHAiOjE0OTIwODAzNDksIm5iZiI6MTQ5MjA3Njc0OSwianRpIjoiU1pjSVNSSEdhS2w0VXMyZyJ9.x9TftD8mX8kRx9a_P8OkO2Jvm0l72Dz0XgMAhcazCUk";

  constructor(private http: Http) { }

  getData(){

    const headers = new Headers();
    headers.append("X-DreamFactory-Api-Key",this.apiKey);
    headers.append("X-DreamFactory-Session-Token",this.sessionToken);

    return this.http.get("http://34.208.172.152/api/v2/olympiadbox/_table/user_info/2", {headers: headers})
      .map((response: Response) =>response.json() );
  };
}
