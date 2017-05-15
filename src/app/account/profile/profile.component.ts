import { Component, OnInit } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import { UserinfoService } from '../../services/userinfo.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  testimonial:string;
  declare=[];

  //personal info
  studentName:string;
  studentId:string;
  fatherName:string = "Father";
  motherName:string = "Mother";
  email:string;
  mobile:number;
  dob:string;

  //parent/guardian info
  guardianName = "Guardian"
  relation:string = "Uncle";
  presentAddress:string;
  permanentAddress:string;
  guardianMobile:number = 8768957354;
  guardianEmail:string = "uncle@ad.com";

  //academic info
  class:string;
  session:string = "2017-18";
  school:string;
  department:string = "Science";
  section:string = "C";
  shift:string = "Morning";
  examVersion:string = "English";
  course:string = "Mathematics, Science";
  classes:SelectItem[];

  dialogHeader:string;
  dialogDisplay:boolean;


  userInfoObject:any;

  constructor(
    private httpService: UserinfoService,
    private classService: SubjectService
    ){}  

  edit(number){
    this.dialogHeader=number;
    this.dialogDisplay=true;
  }

  ngOnInit() {
    this.httpService.getUserInfo('gpantbiz@gmail.com')
    .subscribe((data: Response)=>{
      this.userInfoObject = data['resource'][0];
      this.studentName = this.userInfoObject.firstname +' '+ this.userInfoObject.lastname;
      this.email = this.userInfoObject.email;
      this.mobile = this.userInfoObject.mobile;
      this.presentAddress = this.userInfoObject.address + ', '  + this.userInfoObject.state + ', ' +this.userInfoObject.country + ', ' +this.userInfoObject.pincode 
      this.permanentAddress = this.presentAddress;
      this.dob = this.userInfoObject.birthday;
     })

     this.httpService.getAcademicInfo(2)
     .subscribe((data: Response) =>{
       this.class = data['class_by_class_id']['name'];
       this.school = data['school_by_school_id']['name'];
     } )

     this.classService.getClasses()
     .subscribe((data) => {
       data = data['resource'];
       for(let i in data){
         this.classes.push({label :data[i]['abbreviation'], value: data[i]['name']})
       }
     })

  }


  
}
