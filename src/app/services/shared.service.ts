import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as constants from '../../config/constants'

@Injectable()
export class SharedService {
  
  email:string;
  userInfoObject:any;
  academicInfoObject:any;
  sessionToken:string;
  queryHeader =  new Headers();

  currentPage:string;
  
  constructor(
    private httpService: Http) {
      this.queryHeader.append('Content-Type','Application/Json');
      this.queryHeader.append('X-DreamFactory-Api-Key', constants.DREAMFACTORY_API_KEY);
      this.queryHeader.append('X-DreamFactory-Session-Token', this.sessionToken)

     }

     page(){
       return this.currentPage
     }

     setPage(current){
       this.currentPage = current
     }

    login(loginCreds){
      this.email = loginCreds['email']
      var option = new RequestOptions();
      this.httpService.post(constants.DREAMFACTORY_INSTANCE_URL + 'api/v2/user/session', loginCreds, {headers: this.queryHeader})
      .map((resp:Response) => resp.json())
      .subscribe((data)=>{
        this.sessionToken = data['session_token']
        return true
      }, (error)=>{
        return false
      })
    }

    getUserDetails(){
      this.httpService.get(constants.DREAMFACTORY_INSTANCE_URL + 'api/v2/olympiadbox/_table/user_info/filter=email='+this.email , {headers: this.queryHeader})
      .map((resp: Response) => resp.json())
      .subscribe((data: Response) => {
        this.userInfoObject = data['resource'];
      })
    }

    getAcademicDetails(){
      this.httpService.get(constants.DREAMFACTORY_INSTANCE_URL + 'api/v2/olympiadbox/_table/filter=user_info_id=' +this.userInfoObject['user_info_id'], {headers: this.queryHeader})
      .map((resp: Response) => resp.json())
      .subscribe((data: Response) => {
        this.academicInfoObject = data['resource']
      })
    }

    showUserDetails(){
      var a = [];
      for (let i in this.userInfoObject){
        a.push
      }
    }




}
