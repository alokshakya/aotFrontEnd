import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import  { Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //personal info
  studentName:string;
  studentId:string;
  // fatherName:string = "R.P Sharma";
  // motherName:string = "Pooja";
  email:string;
  mobile:number;

  //parent/guardian info
  // guardianName = "Rakesh Sharma"
  // relation:string = "Uncle";
  presentAddress:string;
  permanentAddress:string;
   // guardianMobile:number = 8768957354;
  // guardianEmail:string = "uncleofrahul@ad.com";

  //academic info
  class:string;
  session:string = "2017-18";
  school:string;
  // department:string = "Science";
  // section:string = "C";
  // shift:string = "Morning";
  // examVersion:string = "English";
  // course:string = "Mathematics, Science";


  dialogBoxDisplay:boolean;
  clickListener:number;
  dialogHeader:string;
  dialogPlaceholder:string;
  
  userInfoObject:any;

  constructor(private httpService: HttpService) {

  if(this.clickListener=1){
    this.dialogHeader = "Edit Student Name";
    this.dialogPlaceholder = "Enter Name";
  };
  
}

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Response)=>{
          this.userInfoObject = data;
          this.studentName = this.userInfoObject.user_info_by_user_info_id.firstname + " " +this.userInfoObject.user_info_by_user_info_id.lastname;
          this.email = this.userInfoObject.user_info_by_user_info_id.email;
          this.mobile = this.userInfoObject.user_info_by_user_info_id.mobile;
          this.class = this.userInfoObject.class_by_class_id.name;
          this.school = this.userInfoObject.school_by_school_id.name;
          this.studentId = this.userInfoObject.student_id;

          this.permanentAddress = this.userInfoObject.user_info_by_user_info_id.address + " , " +this.userInfoObject.user_info_by_user_info_id.state
                                  + " , " +this.userInfoObject.user_info_by_user_info_id.pincode;
          
          this.presentAddress = this.userInfoObject.user_info_by_user_info_id.address + " , " +this.userInfoObject.user_info_by_user_info_id.state
                                  + " , " +this.userInfoObject.user_info_by_user_info_id.pincode;

          

        }

      );
  }


  
}
