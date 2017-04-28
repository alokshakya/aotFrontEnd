import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as constants from '../../config/constants';
import 'rxjs/Rx';

@Injectable()
export class LoginRegisterService {

  sessionToken:string = localStorage.getItem('session_token')

  constructor(private http: Http) { }

  login(loginCreds){
    var queryHeaders = new Headers();
    queryHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: queryHeaders });
    
    return this.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/session', loginCreds, options)
  }

  register(registerCreds){
    var queryHeaders = new Headers();
      queryHeaders.append('Content-Type','application/json');
      queryHeaders.append("DREAMFACTORY_API_KEY",constants.DREAMFACTORY_API_KEY);
      let options = new RequestOptions({headers: queryHeaders});
      
      return this.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/register', registerCreds, options)
  }

}