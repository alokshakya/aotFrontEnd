import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  currentPage:string;
  constructor() {}

  setCurrentPage(page){
    this.currentPage = page;
  }

  getCurrentPage(){
    return this.currentPage;
  }

}
