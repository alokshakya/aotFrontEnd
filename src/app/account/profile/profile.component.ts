import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import  { Response } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { PersonalInfo,Misc } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
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
  schoolId:number;
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
  editTestimonial:boolean
  testimonial:string;
  index:number;
  rating:number = 2;
  currentTestimonial:string;

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
  
  couponCode:string;
  achievement;
  constructor(
    //  private httpService: UserinfoService,
    // private classService: SubjectService,
    // private update: UpdateService,
    public confirmservice: ConfirmationService,
    public personalInfo:PersonalInfo,
    public misc: Misc,
    public masterhtttp: MasterHttpService
    ){}  


  ngOnInit() {
    this.dec = [];

    this.exam.push(
        {label:"Select Exam",value:"null"},{label:"NCO 2016-17 - Level 2", value:"NCO-16-17"},
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

    this.city.push(
      {label:"Select City",value:"null"},
      {label:"Ghaziabad",value:"Ghaziabad"},
      {label:"Delhi", value:"Delhi"}, 
      {label:"Gurgaon", value:"Gurgaon"}, 
      {label:"Bombay", value:"Bombay"},
      {label:"Kolkata", value:"Kolkata"},
    )

    this.state.push(
      {label:"Select State",value:"null"},
      {label:"Uttar Pradesh", value:"Uttar Pradesh"}, 
      {label:"West Bengal", value:"West Bengal"}, 
      {label:"Maharashtra", value:"Maharashtra"}, 
      {label:"Haryana", value:"Haryana"}
    )
    
    this.country.push(
      {label:"Select Country",value:"null"},
      {label:"India", value:"India"},
      {label:"Sri Lanka", value:"Sri Lanka"},
      {label:"Indonesia", value:"Indonesia"},
      {label:"Nepal", value:"Nepal"}
    )

    this.classList.push(
      {label: "Select Class", value:null},
      {label: "I", value:"I"},
      {label: "II", value:"II"},
      {label: "III", value:"III"},
      {label: "IV", value:"IV"},
      {label: "V", value:"V"},
      {label: "VI", value:"VI"},
      {label: "VII", value:"VII"},
      {label: "VIII", value:"VIII"},
    )

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

    this.dummyEditSchoolInfo = {
      code:"OBU232",
      schoolname:"St Thomas School",
      contactperson:"Dave",
      email:"dap@stschool.com",
      landline:3543452,
      address:"pqr xyz, abc",
      state:"Uttar Pradesh",
      city:"Ghaziabad",
      country:"India",
      pincode:"21012",
      mobile:9324567322
    }

    this.date = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(2013,0,1); 
    this.date.setFullYear(1998,5,14);
     
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

    // //temporary
    // this.masterhttp.getUserInfo()
    // .subscribe((data: Response) =>{
    //   this.dummyBasicInfo['firstname'] = data['firstname']
    //   this.dummyBasicInfo['lastname'] = data['lastname']
    //   this.dummyBasicInfo['email'] = data['email']
    //   this.dummyBasicInfo['address'] = data['address']
    //   this.dummyBasicInfo['country'] = data['country']
    //   this.dummyBasicInfo['state'] = data['state']
    //   this.dummyBasicInfo['mobile'] = data['mobile']
    //   this.dummyBasicInfo['pincode'] = data['pincode']
    //   this.dummyBasicInfo['gender'] = data['gender']
    //   this.dummyBasicInfo['birthday'] = data['firstname']
    // } )

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

  editBasicInfo(){
    this.dummyBasicInfo = JSON.parse(JSON.stringify(this.personalInfo.userInfo));
    this.editBasic = true;
  }

  cancelBasicInfo(){
    this.dummyBasicInfo = JSON.parse(JSON.stringify(this.personalInfo.userInfo));
    this.editBasic = false;
  }

  saveBasicInfo(){
    let wrapper = {
      'firstname':this.dummyBasicInfo['firstname'],
      'lastname':this.dummyBasicInfo['lastname'],
      'country':this.dummyBasicInfo['country'],
      'address':this.dummyBasicInfo['address'],
      'state':this.dummyBasicInfo['state'],
      'city':this.dummyBasicInfo['city'],
      'birthdate':this.dummyBasicInfo['birthdate'],
      'pincode':this.dummyBasicInfo['pincode'],
      'mobile':this.dummyBasicInfo['mobile'],
      'school_id':this.schoolId
      }
    this.masterhtttp.updateProfile(wrapper)
    .subscribe((data: Response)=>{
       if(data['status']==200){
         this.personalInfo.userInfo = this.dummyBasicInfo;
         this.editBasic = false;
         this.growlmsg = [];
         this.growlmsg.push({severity:'success',summary:'Success',detail:'Profile Updated'})
       }
    })
  }

  verifyMobile(){
    let wrapper = {'email':this.personalInfo.userInfo['email'], 'verify_mobile':true, 'verify_email':false}
    this.masterhtttp.sendOtp(wrapper)
    .subscribe((data)=>{
      if(data['status']==200){
        this.otpDialog = true;
        console.log(data);
      }
      else console.log(data);
    })
  }



  editSchoolInfo(){
    this.couponCode = this.personalInfo.couponCode;
    this.editSchool = true;
  }

  cancelSchoolInfo(){
    this.couponCode = this.personalInfo.couponCode;
    if(this.personalInfo.schoolInfo==null){
      this.personalInfo.schoolInfo = JSON.parse(JSON.stringify(this.personalInfo.dummySchoolInfo));
    }
    this.editSchool = false;
  }

  updateSchool(){
    let wrapper = {'school_id':this.personalInfo.schoolInfo['school_id']}
    this.masterhtttp.updateProfile(wrapper)
    .subscribe((data:Response)=>{
      console.log(data);
    })
  }

  saveSchoolInfo(){
    this.personalInfo.couponCode = this.couponCode;
    let wrapper = {'coupon_code':this.personalInfo.couponCode}
    this.masterhtttp.getSchool(wrapper)
    .subscribe((data:Response)=>{
      if(data['status']==200){
        this.personalInfo.setSchoolInfo(data['message'])
        this.updateSchool();
        this.growlmsg = [];
        this.growlmsg.push({severity:'success',summary:'Success',detail:'School Info Saved'})
        this.editSchool = false;
        console.log(this.personalInfo.schoolInfo)
      }else {
        this.growlmsg = [];
        this.growlmsg.push({severity:'error',summary:'Invalid Coupon Code',detail:'Try Again With A Different Coupon Code'})
      }
    })
  }

  // dummySave(){
  //   this.dummyBasicInfo = this.dummyEditBasicInfo
  // }


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
    let requestbody = {'old_password':this.oldPassword,'new_password':this.confirmNewPassword,'user_info_id':this.personalInfo.userInfo['user_info_id']}
    if(this.confirmNewPassword!=this.newPassword){
    this.growlmsg.push({severity:'error', summary:"Password doesn't match", detail:'Please try again'});
    }
    else{
      this.masterhtttp.updatePassword(requestbody)
      .subscribe((data:Response) =>{
        if(data['status']==200){
          this.cancelPassword();
          this.growlmsg = [];
          this.growlmsg.push({severity:'success', summary:"Success", detail:'Password Updated'});
        }else {
          this.growlmsg = [];
          this.growlmsg.push({severity:'error', summary:"Incorrect Old Password", detail:'Please try again'});
        }
      })
    }
        //this.growlmsg.push({severity:'success', summary:"Password Changed", detail:'Please try again'});}
  }


  cancelPassword(){
    this.newPassword = null;
    this.confirmNewPassword = null;
    this.oldPassword = null;
    this.editPassword = false
  }

  addTestimonial(){
    let requestBody = {'text':this.testimonial, 'student_id':this.personalInfo.studentInfo['student_id']}
    this.masterhtttp.addTestimonial(requestBody)
    .subscribe((data:Response)=>{
      if(data['status']==200){
        this.growlmsg = [];
        this.growlmsg.push({severity:'success', summary:"Success", detail:'Testimonial Added'})
      }
    })
  }

  cancelTestimonial(){
    this.testimonial = "Enter Your Testimonial Here..."
  }

  addAchievement(){
    let requestBody = {'text':this.achievement, 'student_id':this.personalInfo.studentInfo['student_id']}
    this.masterhtttp.addAchievement(requestBody)
    .subscribe((data: Response)=>{
      console.log(data);
      if(data['status']==200){
        this.growlmsg = [];
        this.growlmsg.push({severity:'success', summary:"Success", detail:'Achievement Added'})
      }
    })
  }

  cancelAchievement(){
    this.achievement = 'Enter Your Message Here...'
    this.dec = [];
  }

  //otp verification
  dummyVerify(){
    if(this.actualOTP==this.dummyOtp){
      this.otpDialog = false;
    }
    this.dummyIncorrectOtp = true;

  }

  edit(a){
    this.index = a
    this.currentTestimonial = this.misc.userTestimonial[a];
    this.editTestimonial = true;
  }

  saveTestimonial(){
    this.misc.userTestimonial[this.index] = this.currentTestimonial;
    this.editTestimonial = false;
  }

  cancel(){
    this.currentTestimonial = this.misc.userTestimonial[this.index];
    this.editTestimonial = false;
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
