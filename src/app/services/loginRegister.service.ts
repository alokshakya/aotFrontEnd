import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as constants from '../../config/constants';
import { Misc } from './data.service';
import 'rxjs/Rx';


@Injectable()
export class LoginRegisterService {

  queryHeaders;
  options;
  
  constructor(
    public http: Http,
    public misc: Misc
    ) {
    this.queryHeaders = new Headers()
    this.queryHeaders.append('Content-Type', 'application/json');
    this.queryHeaders.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
    this.options = new RequestOptions({ headers: this.queryHeaders })
   }

  login(loginCreds){ 
    return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/login', loginCreds, this.options)
    .map((resp: Response) => resp.json());
      // var obj = JSON.parse(data['_body']);
      // if(obj['Status']==706){
      //   return false;
      // }else {
      //   this.misc.setToken(obj['session_token'])
      //   return true;
      // }
  }

  register(registerCreds){
      return this.http.post(constants.OLYMPIADBOX_INSTANCE_URL + '/user/register', registerCreds, this.options)
      .map((resp: Response) =>resp.json());
  }

}
