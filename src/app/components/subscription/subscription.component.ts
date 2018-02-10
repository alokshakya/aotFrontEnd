import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Message, SelectItem } from 'primeng/primeng';

import { LoginRegisterService } from '../../services/loginRegister.service';
import { MasterHttpService } from '../../services/masterhttp.service';
import { Misc } from '../../services/data.service';
import { ComponentCanDeactivate } from '../account/account.guard';

import * as constants from '../../../config/constants';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubscriptionComponent implements OnInit, ComponentCanDeactivate {
	userRegCreds:any;
	isHuman:boolean;
	class:SelectItem[];
	sum:number = 0;
	gender:SelectItem[];
	confirmPassword:string;
	index:number;
	mobileOtp:string;
	emailOtp:string;
	feeArray:Array<any>;
	mobileVerified:boolean;
	emailVerified:boolean;
	discountApplied:boolean;
	discount:number;
	coupon:string;
	discountedAmount:number;
	msg:Message[];
	wrapper:object;
	emailSpinner:boolean;
	mobileSpinner:boolean;
	emailSpinner2:boolean;
    selectedPackage: Array<string> = [];
	mobileSpinner2:boolean;
	spinner:boolean;
	feeCols:Array<any>;
	appliedCoupon;
	@ViewChild('captcha') captcha;
	constructor(
		private http:LoginRegisterService,
		private masterhttp:MasterHttpService,
		private router:Router,
		private misc:Misc) {
		this.userRegCreds = { "firstname": "", "lastname": "", "email": "", "password": "", "class": "", "mobile": "" ,"gender":""};  	
    	this.class = [
    	{ label: "Select Class", value: null }, { label: "I", value: "I" },
    	{ label: "II", value: "II" }, { label: "III", value: "III" }, { label: "IV", value: "IV" }, { label: "V", value: "V" },
    	{ label: "VI", value: "VI" }, { label: "VII", value: "VII" }, { label: "VIII", value: "VIII" }
    	]
    	this.gender = [{label:'Select Gender',value:null},{label:'Male',value:'Male'},{label:'Female',value:'Female'}];
        this.feeCols = [{ "header": "Subject", "field": "subject_name" }, { "header": "Price", "field": "amount" }];

    	this.index = 0;
	}

	ngOnInit() {
	}

    pay() {
        this.spinner=true;
        let wrapper = {amount:0, fee_id:'',discount:0,email:this.userRegCreds.email};
        for(let i in this.selectedPackage){
            wrapper['amount'] += parseInt(this.selectedPackage[i]['amount']);
            wrapper['fee_id'] += this.selectedPackage[i]['fee_id']+',';
        }
        if(this.discountApplied){
            wrapper['discount']=this.discount;
        }
        this.masterhttp.subscribePre(wrapper).subscribe((data)=>{
            if(data['status']==200){
                this.redirect(data['url']);
            }
            else{
                this.growlDisplay('error','Could Not Process','Please Try Again');
                this.spinner=false;
            }
        },err=>{
                this.growlDisplay('error','Server Error','Please Try Again');
                this.spinner=false;
        })
    }

    redirect(url){
        let path = constants.PAYMENT_GATEWAY_URL+url;
        window.location.href = path;
        this.spinner = false;
    }

    updateAmount(){
        this.sum = 0;
        setTimeout(()=>{
            if(this.selectedPackage!=null){
                for(let i in this.selectedPackage){
                    this.sum += parseInt(this.selectedPackage[i]['amount'])
                }
            }
        },10);
    }

	signUp(){
		this.spinner = true;
		var wrapper = JSON.parse(JSON.stringify(this.userRegCreds));
		wrapper['email'] = wrapper['email'].toLowerCase();
		wrapper['firstname'] = wrapper['firstname'].toLowerCase();
		wrapper['lastname'] = wrapper['lastname'].toLowerCase();
		this.captcha.reset();
		this.http.register(wrapper).subscribe((data)=>{
			if(data['status']==200){
				this.sendOtp({email:this.userRegCreds.email,verify_mobile:true,verify_email:true});
				this.getFee();
			}
			else if(data['status']==701){
				this.growlDisplay('error','User Exists','Try Again With A Different Email Address');
				this.spinner = false;
			}
			else{
				this.growlDisplay('error','Server Error','Please Try Again');
				this.spinner = false;
			}
		},err=>{
			this.growlDisplay('error','Server Error','Please Try Again');
			this.spinner = false
		})
	}

    reset(){
        this.discountApplied = false;
        this.discount = null;
        this.coupon = null;
        this.discountedAmount = 0;
    }

	getFee(){
		var wrapper = {email:this.userRegCreds.email,class:this.userRegCreds.class}
		this.masterhttp.getFeePre(wrapper).subscribe((data)=>{
			if(data['status']==200){
				this.setFeeArray(data['message']);
			}
			else this.feeError();
		}, err=>{
			this.feeError();
		})
	}

	setFeeArray(data){
		this.feeArray = data;
	}

    applyCoupon(){
    	this.emailSpinner = true;
        var wrapper = {coupon_code:this.coupon,email:this.userRegCreds.email}
        this.reset();
        this.masterhttp.applyDiscountCouponPre(wrapper).subscribe((data)=>{
            if(data['status']===200){
                this.displayDiscount(parseInt(data['message']));
                this.appliedCoupon = wrapper['coupon_code'];
            }
            if(data['status']===710){
                this.growlDisplay('error','Invalid Coupon','Enter Valid Coupon Code');
            }
            this.emailSpinner = false;
        }, err=>{
        	this.growlDisplay('error','Server Error','Please Try Again');
        	this.emailSpinner = false;
        })
    }

    displayDiscount(val){
        this.discount = val;
        this.discountedAmount = this.sum - (this.sum*this.discount)/100;
        this.discountApplied = true;        
    }

	feeError(){
		this.growlDisplay('error','Something Went Wrong','Please Login');
		this.router.navigate(['login']);
		this.misc.setLocalRoute('account/subscribe');
	}

	setWrapper(mode){
		var wrapper = {verify_mobile:false,verify_email:false,email:this.userRegCreds.email};
		this.wrapper = wrapper;
		wrapper[mode] = true;
	}

	verifyCheck(){
		if(this.mobileVerified&&this.emailVerified){
			this.index = 2;
			this.reset();
			this.growlDisplay('success','Success','Verification Successful');
		}
	}

	verify(mode){
		var wrapper = {verify_mobile:false,verify_email:false,otp:null,email:this.userRegCreds.email};
		wrapper[mode] = true;
		if(mode==='verify_email'){
			wrapper['otp'] = this.emailOtp;
			this.emailSpinner = true;
		}
		if(mode==='verify_mobile'){
			wrapper['otp'] = this.mobileOtp;
			this.mobileSpinner = true;
		}
		this.masterhttp.verifyOtp(wrapper).subscribe((data)=>{
			if(data['status']==200){
				if(wrapper['verify_mobile']){
					this.mobileVerified = true;
					this.mobileSpinner = false;
				}
				if(wrapper['verify_email']){
					this.emailVerified = true;
					this.emailSpinner = false
				}
				this.verifyCheck();
			}
			else{
				this.growlDisplay('error','Invalid OTP','Please Try Again');
				if(wrapper['verify_mobile']){
					this.mobileSpinner = false;
				}
				if(wrapper['verify_email']){
					this.emailSpinner = false
				}
			}
		}, err=>{
			this.growlDisplay('error','Invalid OTP','Please Try Again');

			if(wrapper['verify_mobile']){
				this.mobileSpinner = false;
			}
			if(wrapper['verify_email']){
				this.emailSpinner = false
			}
		})
	}

	growlDisplay(sev,sum,det){
		this.msg = [];
		this.msg.push({severity:sev,summary:sum,detail:det});
	}

	sendOtp(wrapper=null){
		if(wrapper==null){
			wrapper = this.wrapper;
		}
		if(wrapper['verify_email']){
			wrapper['otp'] = this.emailOtp;
			this.emailSpinner2 = true;
		}
		if(wrapper['verify_mobile']){
			this.mobileSpinner2 = true;
			wrapper['otp'] = this.mobileOtp;
		}
		this.masterhttp.sendOtp(wrapper).subscribe((data)=>{
			if(data['status']!=200){
				this.growlDisplay('error','Server Error','Please Try Again');
			}
			if(wrapper['verify_email']){
				wrapper['otp'] = this.emailOtp;
				this.emailSpinner2 = false;
			}
			if(wrapper['verify_mobile']){
				this.mobileSpinner2 = false;
				wrapper['otp'] = this.mobileOtp;
			}
			if(this.index===0){
				this.index=1;
				this.growlDisplay('success','Success','Please Verify Your Email & Mobile');
				this.spinner = false;
			}
		},err =>{
			this.growlDisplay('error','Server Error','Please Try Again');
			if(wrapper['verify_email']){
				wrapper['otp'] = this.emailOtp;
				this.emailSpinner2 = false;
			}
			if(wrapper['verify_mobile']){
				this.mobileSpinner2 = false;
				wrapper['otp'] = this.mobileOtp;
			}
		})
	}

	skip(){
		this.index = 2;
		this.emailVerified = false;
		this.mobileVerified = false;
	}

	canDeactivate(){
		return false;
	}

	otpPattern(){
		let pattern = new RegExp('^[0-9]{6}$');
		let a = [false,false];
		if(!pattern.test(this.mobileOtp)){
			a[0]=true;
		}
		if(!pattern.test(this.emailOtp)){
			a[1]=true;
		}
		return a;
	}

	showResponse(event){
        let wrapper = {response:event.response};
        this.masterhttp.validateCaptcha(wrapper).subscribe((data)=>{
            if(data['status']==200){
                let status = JSON.parse(data['message']);
                if(status.success){
                    this.isHuman = true;
                }
                else this.isHuman = false;
            }
        })
    }

}
