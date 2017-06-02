import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { UserinfoService } from '../../services/userinfo.service';
import { SubjectService } from '../../services/subject.service';
import { UpdateService } from '../../services/update.service';
import { MasterHttpService } from '../../services/masterhttp.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  maxDate: Date;
  rating:number = 2;

  editBasic:boolean;
  editSchool:boolean;
  editTestimony:boolean;

  showPassword:boolean;

  userBasicInfo:any;
  newBasicInfo:any;

  dummyBasicInfo:any;
  dummyEditBasicInfo:any;

  dummySchoolInfo:any;
  dummyEditSchoolInfo:any;

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

  exam:SelectItem[] = [];
  city:SelectItem[] = [];
  state:SelectItem[] = [];
  country:SelectItem[] =[];

  growlmsg: Message[] = [];

  date:Date;
  test:any;
  constructor(
    private httpService: UserinfoService,
    private classService: SubjectService,
    private update: UpdateService,
    private confirmservice: ConfirmationService,
    private masterhttp: MasterHttpService 
    ){
      this.exam.push({label:"Select Exam",value:"null"},{label:"SOF", value:"SOF"},{label:"ASSET", value:"ASSET"},{label:"NTSE", value:"NTSE"},{label:"SILVERZONE", value:"SILVERZONE"}, {label:"UCO", value:"UCO"})

      this.city.push({label:"Select City",value:"null"},{label:"Ghaziabad",value:"Ghaziabad"},{label:"Delhi", value:"Delhi"}, {label:"Gurgaon", value:"Gurgaon"}, {label:"Bombay", value:"Bombay"},{label:"Kolkata", value:"Kolkata"},)
 
      this.state.push({label:"Select State",value:"null"},{label:"Uttar Pradesh", value:"Uttar Pradesh"}, {label:"West Bengal", value:"West Bengal"}, {label:"Maharashtra", value:"Maharashtra"}, {label:"Haryana", value:"Haryana"})
      
      this.country.push({label:"Select Country",value:"null"},{label:"India", value:"India"}, {label:"Sri Lanka", value:"Sri Lanka"}, {label:"Indonesia", value:"Indonesia"}, {label:"Nepal", value:"Nepal"})

      this.dummyBasicInfo = {
        firstname: "",
        lastname: "", 
        email: "", 
        address: "", 
        mobile: "", 
        class: "V", 
        dob:"11/03/1998", 
        state:"", 
        city:"", 
        gender:"",
        country:"",
        pincode:"",
    }

    this.dummyEditBasicInfo = {
        firstname: "",
        lastname: "", 
        email:"", 
        address:"", 
        mobile: "", 
        class:"V", 
        dob:"11/03/1998", 
        state:"", 
        city:"", 
        gender:"",
        country:"",
        pincode:"",
    }

    this.dummySchoolInfo = {
      code:"OBU232",
      schoolname:"St Thomas School",
      contactperson:"Dave",
      email:"dap@stschool.com",
      landline:3543542,
      address:"pqr xyz, abc",
      state:"Uttar Pradesh",
      city:"Ghaziabad",
      country:"India",
      pincode:"21012",
      mobile:9324567322
    } 

    this.dummyEditSchoolInfo = {code:"OBU232",
      schoolname:"St Thomas School",
      contactperson:"Dave",
      email:"dap@stschool.com",
      landline:3543452,
      address:"pqr xyz, abc",
      state:"Uttar Pradesh",
      city:"Ghaziabad",
      country:"India",
      pincode:"21012",
      mobile:9324567322}


    this.date = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(2013,0,1); 
    this.date.setFullYear(1998,5,14);
      }  


  ngOnInit() {
    // this.httpService.getUserInfo('gpantbiz@gmail.com')
    // .subscribe((data: Response)=>{
    //   data = data['resource'][0];
    //   this.userBasicInfo = data;
    // });

    // this.httpService.getAcademicInfo(2)
    // .subscribe((data: Response) =>{
    //   this.class = data['class_by_class_id']['abbreviation'];
    //   this.school = data['school_by_school_id']['name'];
    // });

    // this.classList=[];
    // this.classService.getClasses()
    // .subscribe((data: Response) => {
    //   data = data['resource'];
    //   for(let i in data){
    //     this.classList.push({label:data[i]['abbreviation'], value:data[i]['abbreviation']})
    //   }
    // })

    //temporary
    this.masterhttp.getUserInfo()
    .subscribe((data: Response) =>{
      this.dummyBasicInfo['firstname'] = data['firstname']
      this.dummyBasicInfo['lastname'] = data['lastname']
      this.dummyBasicInfo['email'] = data['email']
      this.dummyBasicInfo['address'] = data['address']
      this.dummyBasicInfo['country'] = data['country']
      this.dummyBasicInfo['state'] = data['state']
      this.dummyBasicInfo['mobile'] = data['mobile']
      this.dummyBasicInfo['pincode'] = data['pincode']
      this.dummyBasicInfo['gender'] = data['gender']
      this.dummyBasicInfo['birthday'] = data['firstname']
    } )

  }

//for basic info
  save(){
    this.userBasicInfo = this.newBasicInfo;
    
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

  dummyEdit(){
    this.dummyEditBasicInfo = JSON.parse(JSON.stringify(this.dummyBasicInfo))
    // this.elem.nativeElement.focus();
    this.editBasic = true;
  }

  dummyCancel(){

  }

  dummySave(){
    this.dummyBasicInfo = this.dummyEditBasicInfo
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

  submitTestimonial(){
    this.editTestimony = false;
  }

  cancelTestimonial(){
    this.testimonial = "Enter Message here...."
    this.editTestimony = false;
  }

  changePassword(){
    if(this.stroredPwd!=this.oldPassword){
        this.growlmsg.push({severity:'error', summary:'Incorrect Old Password', detail:'Please try again'});

    }else if(this.confirmNewPassword!=this.newPassword){
    this.growlmsg.push({severity:'error', summary:"new password and confirm password doesn't match", detail:''});

    }
    else{    this.growlmsg.push({severity:'success', summary:"Password Changed", detail:''});}
  }


  onChange(){
    if (this.editBasic){
      this.confirmservice.confirm({
            message: 'Save changes in Basic info ?',
            accept: () => {
                this.editBasic=false;

            },
            reject: () =>{
              this.editBasic=false;
            }
        });
    }
    else if(this.editSchool){
      this.confirmservice.confirm({
        message: 'Save changes in School Info ?',
        accept:() => {
          this.editSchool = false;
        },
        reject:() => {
          this.editSchool = false;
        }
      })
    }
        else if(this.editTestimony){
      this.confirmservice.confirm({
        message: 'Save changes in Testimonial ?',
        accept:() => {
          this.editTestimony = false;
        },
        reject:() => {
          this.editTestimony = false;
        }
      })
    }
    else if(this.showPassword){
      this.confirmservice.confirm({
        message: 'Save changes ?',
        accept:() => {
          this.showPassword = false;
        },
        reject:() => {
          this.showPassword = false;
        }
      })
    }
  }


}
