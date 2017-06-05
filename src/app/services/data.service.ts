import { Injectable, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  userInfo:any;
  constructor(){}

  setUserInfo(data){
    this.userInfo=data;
  }

  getUserInfo(){
    return this.userInfo;
  }



}
