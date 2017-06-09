import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MasterHttpService } from '../../services/masterhttp.service';


@Component({
  selector: 'app-profile',
  templateUrl: './test.profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //otp verification
  otpDialog:boolean;
  dummyOtpSection:boolean;
  dummyIncorrectOtp:boolean;
  actualOTP=123456;
  dummyOtp:number;

  //basic info tab
  editBasic:boolean;
  dummyBasicInfo:any;
  dummyEditBasicInfo:any;
  city:SelectItem[] = [];
  state:SelectItem[] = [];
  country:SelectItem[] =[];
  maxDate: Date;
  //userBasicInfo:any;
  //newBasicInfo:any;

  //school info tab
  editSchool:boolean;
  dummySchoolInfo:any;
  dummyEditSchoolInfo:any;
  school:string;
  newSchool:string;

  //change password tab
  editPassword:boolean;
  storedPwd = 'qwe123'
  newPassword:string;
  confirmNewPassword:string;
  oldPassword:string;

  //add testimonial tab
  testimonial:string;
  rating:number = 2;

  //add achievement tab
  classList:SelectItem[]=[];
  selectedClass:string;
  exam:SelectItem[] = [];
  selectedExam:string;
  rollNumber:string;
  dec:Array<string>;

  //misc
  growlmsg: Message[] = [];
  date:Date;
  test:any;
  
  constructor(
  //  private httpService: UserinfoService,
   // private classService: SubjectService,
   // private update: UpdateService,
    private confirmservice: ConfirmationService,
    private masterhttp: MasterHttpService 
    ){
      this.exam.push({label:"Select Exam",value:"null"},{label:"NCO 2016-17 - Level 2", value:"NCO-16-17"},
      {label:"NSO-16-17 - Level 2", value:"NSO-16-17"},{label:"IMO 2016-17 - Level 2", value:"NTSE"},
      {label:"IMO 2016-17 - Level 2", value:"IMO 2016-17 - Level 2"},
      {label:"ISKO 2016", value:"ISKO 2016"},
      {label:"NCO 2016", value:"NCO 2016"},
      {label:"NCO 2016 - Level 1", value:"NCO 2016 - Level 1"},
      {label:"NSO 2016 - Level 1", value:"NSO 2016 - Level 1"},
      {label:"IMO 2016 - Level 1", value:"IMO 2016 - Level 1"},
      {label:"IEO 2016 - Level 1", value:"IEO 2016 - Level 1"},
      {label:"IIO 2016 - Level 1", value:"IIO 2016 - Level 1"},
      {label:"IOM 2016 - Level 1", value:"IOM 2016 - Level 1"},      
      {label:"IOS 2016 - Level 1", value:"IOS 2016 - Level 1"},
      {label:"IOEL 2016 - Level 1", value:"IOEL 2016 - Level 1"}, 
      )

      this.city.push({label:"Select City",value:"null"},{label:"Ghaziabad",value:"Ghaziabad"},{label:"Delhi", value:"Delhi"}, {label:"Gurgaon", value:"Gurgaon"}, {label:"Bombay", value:"Bombay"},{label:"Kolkata", value:"Kolkata"},)
 
      this.state.push({label:"Select State",value:"null"},{label:"Uttar Pradesh", value:"Uttar Pradesh"}, {label:"West Bengal", value:"West Bengal"}, {label:"Maharashtra", value:"Maharashtra"}, {label:"Haryana", value:"Haryana"})
      
      this.country.push({label:"Select Country",value:"null"},{label:"India", value:"India"}, {label:"Sri Lanka", value:"Sri Lanka"}, {label:"Indonesia", value:"Indonesia"}, {label:"Nepal", value:"Nepal"})

      this.classList.push({label: "Select Class", value:null}, {label: "I", value:"I"}, {label: "II", value:"II"},{label: "III", value:"III"},{label: "IV", value:"IV"},{label: "V", value:"V"},{label: "VI", value:"VI"},{label: "VII", value:"VII"},{label: "VIII", value:"VIII"},       )

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
  // save(){
  //   this.userBasicInfo = this.newBasicInfo;
    
  //   this.update.updateUserInfo(this.newBasicInfo)
  //   .subscribe((data: Response) => {
  //   });
    
  //   this.update.updateStudent(2,this.newClass)
  //   this.editBasic = false;
  // }

  // edit(){
  //   this.editBasic = true;
  //   this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
  // }

  dummyEdit(){
    this.dummyEditBasicInfo = JSON.parse(JSON.stringify(this.dummyBasicInfo))
    // this.elem.nativeElement.focus();
    this.editBasic = true;
  }

  dummySave(){
    this.dummyBasicInfo = this.dummyEditBasicInfo
  }


  // cancel(){
  //   this.newBasicInfo = JSON.parse(JSON.stringify(this.userBasicInfo));
  //   this.newClass = this.class;
  //   this.newSchool = this.school;
  //   this.editBasic = false;
  // }

  //testimonial submit
  // submit(){
  //   this.update.postTestimonial(this.testimonial)
  //   .subscribe((data: Response) =>{
  //   })
  // }

  changePassword(){
    if(this.storedPwd!=this.oldPassword){
        this.growlmsg.push({severity:'error', summary:'Incorrect Old Password', detail:'Please try again'});

    }else if(this.confirmNewPassword!=this.newPassword){
    this.growlmsg.push({severity:'error', summary:"Password doesn't match", detail:'Please try again'});

    }
    else{    this.growlmsg.push({severity:'success', summary:"Password Changed", detail:'Please try again'});}
  }

  //otp verification
  dummyVerify(){
    if(this.actualOTP==this.dummyOtp){
      this.otpDialog = false;
      console.log(true)
    }
    this.dummyIncorrectOtp = true;

  }

  //tab change event
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
    else if(this.editPassword){
      this.confirmservice.confirm({
        message: 'Save changes ?',
        accept:() => {
          this.editPassword = false;
        },
        reject:() => {
          this.editPassword = false;
        }
      })
    }
  }


}
