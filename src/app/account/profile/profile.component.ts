import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { UserinfoService } from '../../services/userinfo.service';
import { SubjectService } from '../../services/subject.service';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './test.profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Output() emit: EventEmitter<boolean> = new EventEmitter<boolean>();

  editBasic:boolean;
  editSchool:boolean;
  editTestimony:boolean;

  userBasicInfo:any;
  newBasicInfo:any;
  dec:Array<string>;
  selectedExam:string;
  class:string;
  newClass:string;
  school:string;
  newSchool:string;
  testimonial:string;
  rollNumber:string;

  stroredPwd = 'qwe123'

  newPassword:string;
  confirmNewPassword:string;
  oldPassword:string;

  classList:SelectItem[];
  exam:SelectItem[];

  growlmsg: Message[] = [];

  test:any;
  constructor(
    private httpService: UserinfoService,
    private classService: SubjectService,
    private update: UpdateService
    ){
      this.exam = [];
      this.exam.push({label:'EXAM 1', value:1});
      this.exam.push({label:'EXAM 2', value:2});
      this.exam.push({label:'EXAM 3', value:3});
    }  


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
    this.emit.next(true);
    this.editBasic = false;
  }

  edit(){
    this.editBasic = true;
    this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
  }

  dummyEdit(){
    this.editBasic = true;
  }

  dummyCancel(){
    console.log('dummycancel')
  }

  dummySave(){
    console.log('dummysave')
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

  changePassword(){
    if(this.stroredPwd!=this.oldPassword){
        this.growlmsg.push({severity:'error', summary:'Incorrect Old Password', detail:'Please try again'});

    }else if(this.confirmNewPassword!=this.newPassword){
    this.growlmsg.push({severity:'error', summary:"new password and confirm password doesn't match", detail:''});

    }
    else{    this.growlmsg.push({severity:'success', summary:"Password Changed", detail:''});}
  }


}
