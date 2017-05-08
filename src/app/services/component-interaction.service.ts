import { Injectable } from '@angular/core';

@Injectable()
export class ComponentInteractionService {

  userName:string;
  userEmail:string;
  userMobile:string;
  constructor() { }

  saveUserInfo(firstname, lastname, email, mobile){
    this.userName = firstname  + ' ' + lastname;
    this.userEmail = email;
    this.userMobile = mobile;
  }

}
