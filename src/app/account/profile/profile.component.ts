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
  editAcademia:boolean;

  userBasicInfo:any;
  newBasicInfo:any;

  class:string;
  school:string;
  newClass:any;
  newSchool:string;

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

    this.newClass=[];
    this.newClass.push({label:'I', value:'first'});
    this.newClass.push({label:'II', value:'second'});
    this.newClass.push({label:'III', value:'third'});
    this.newClass.push({label:'IV', value:'fourth'});
    this.newClass.push({label:'V', value:'fifth'});
    this.newClass.push({label:'VII', value:'sixth'});
  }

//for basic info
  save(){
    this.userBasicInfo = this.newBasicInfo;
    this.update.updateUserInfo(this.newBasicInfo)
    .subscribe((data: Response) => {
    });
    this.editBasic = false;
  }

  edit(){
    this.editBasic = true;
    this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
  }
  cancel(){
    this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
    this.editBasic = false;
  }


  saveAcademic(){
  return true
  }
}
