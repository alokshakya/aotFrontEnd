import { Component, OnInit } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import { UserinfoService } from '../../services/userinfo.service';
import { SubjectService } from '../../services/subject.service';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editBasic:boolean;
  userBasicInfo:any;
  newBasicInfo:any;

  class:string;
  newClass:string;
  school:string;
  newSchool:string;
  testimonial:string;

  classList:SelectItem[];

  test:any;
  constructor(
    private httpService: UserinfoService,
    private classService: SubjectService,
    private update: UpdateService
    ){}  


  ngOnInit() {
    this.httpService.getUserInfo('gpantbiz@gmail.com')
    .subscribe((data: Response)=>{
      data = data['resource'][0];
      this.userBasicInfo = data;
    });

    this.httpService.getAcademicInfo(2)
    .subscribe((data: Response) =>{
      this.class = data['class_by_class_id']['abbreviation'];
      this.school = data['school_by_school_id']['name'];
    });

    this.classList=[];
    this.classService.getClasses()
    .subscribe((data: Response) => {
      data = data['resource'];
      for(let i in data){
        this.classList.push({label:data[i]['abbreviation'], value:data[i]['abbreviation']})
      }
      console.log(this.newClass)
    })
  }

//for basic info
  save(){
    this.userBasicInfo = this.newBasicInfo;
    this.class = this.newClass
    
    this.update.updateUserInfo(this.newBasicInfo)
    .subscribe((data: Response) => {
    });
    
    //this.update.updateStudent(2,this.newClass)
    this.editBasic = false;
  }

  edit(){
    this.editBasic = true;
    this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
  }
  cancel(){
    this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
    this.newClass = this.class;
    this.newSchool = this.school;
    this.editBasic = false;
  }

  //testimonial submit
  submit(){
    this.update.postTestimonial(this.testimonial)
    .subscribe((data: Response) =>{
    })
  }

}
