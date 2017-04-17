import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  apiKey:string = "36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88";
  sessionToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsInVzZXJfaWQiOjIsImVtYWlsIjoiZ3BhbnRiaXpAZ21haWwuY29tIiwiZm9yZXZlciI6ZmFsc2UsImlzcyI6Imh0dHA6Ly8zNC4yMDguMTcyLjE1Mi9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNDkyNDAyMDA2LCJleHAiOjE0OTI0MDU2MDYsIm5iZiI6MTQ5MjQwMjAwNiwianRpIjoic2lMVE1oakJuTHRueUF1eCJ9.-PNeLDcQw4N8zTrx7XtlvcihMxArFyyT2KwZdHEfjUQ";

  constructor(private http: Http) { }

  getData(){

    const queryHeader = new Headers();
    queryHeader.append("Content-Type", "application/json");
    queryHeader.append("X-DreamFactory-Api-Key",this.apiKey);
    queryHeader.append("X-DreamFactory-Session-Token",this.sessionToken);

    return this.http.get("http://34.208.172.152/api/v2/olympiadbox/_table/user_info/2", {headers: queryHeader})
      .map((response: Response) =>response.json() );
  };
}
