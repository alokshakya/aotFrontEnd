import { Injectable } from '@angular/core';

@Injectable()
export class ComponentInteractionService {

  userEmail:string
  academicInfo:any
  personalInfo:any
  constructor() { }

  setInfo(email){
    this.userEmail = email;
  }

  setAcademicInfo(object){
    this.academicInfo = object;
  }

  setPersonalInfo(object){
    this.personalInfo = object;
  }
}
