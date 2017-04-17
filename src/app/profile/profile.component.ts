import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

import  { Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  //personal info
  studentName:string = "Rahul Sharma";
  studentId:any = "343437";
  fatherName:string = "R.P Sharma";
  motherName:string = "Pooja";
  email:string = "abc213@gmail.com";
  mobile:number = 8126761663;

  //parent/guardian info
  guardianName = "Rakesh Sharma"
  relation:string = "Uncle";
  presentAddress:string = "ABCD......, New Delhi";
  permanentAddress:string = "PQRS......, Uttar Pradesh";
  guardianMobile:number = 8768957354;
  guardianEmail:string = "uncleofrahul@ad.com";

  //academic info
  class:string = "Ninth";
  department:string = "Science";
  section:string = "C";
  shift:string = "Morning";
  session:any = 2017-18;
  examVersion:string = "English";
  course:string = "Mathematics, Science";
  rollNumber:number = 20;

  dialogBoxDisplay:boolean;
  clickListener:number = 0;

  

  constructor(private httpService: HttpService) {


   }

  receive() {
    this.httpService.getData()
      .subscribe(
        (data: Response)=>console.log(data)

      );
  }

}
