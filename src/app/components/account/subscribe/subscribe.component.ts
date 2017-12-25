import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { PersonalInfo ,SubjectInfo ,Misc } from '../../../services/data.service';
import { MasterHttpService } from '../../../services/masterhttp.service';
import { Message } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { CurrencyPipe } from '@angular/common';
import * as constants from '../../../../config/constants';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    //subscription details panel
    subscriptionTableData: any;
    subscriptionTableHeaders: any;

    //subscribe now panel
    selectAll: boolean;
    subjectsPrice: any;
    selectedPackage: Array<string>;
    subjects: Array<string>;
    coupon: string;
    subPriceTable: any;
    discount:number;
    discountApplied:boolean;
    discountedAmount:number;


    //temporary
    col: Array<any>;  //header for datatable
    col2: Array<any>;  //header for datatable
    dummySubjects: Array<string>;
    dummyPrice: Array<number>;
    growlMsg:Message[];
    spinner:boolean;
    sum = 0;
    confirmDialog:boolean
    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc,
        public http: MasterHttpService,
        private userInfo: PersonalInfo,
        private confirmationService: ConfirmationService) {
        this.selectedPackage = [];

        this.col = [{ "header": "Subject", "field": "subject_name" }, { "header": "Price", "field": "amount" }];
        this.col2 = [{ "header": "Order Id", "field": "gateway_order_id" }, { "header": "Transaction Id", "field": "transaction_id" },{"header":"Date","field":"paid_date"},{"header":"Invoice","field":"payments_id"}];
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["Subscribe"]);
        this.misc.setLocalRoute('account/subscribe');
    }

    redirect(url){
        let path = constants.PAYMENT_GATEWAY_URL+url;
        window.location.href = path;
        this.spinner = false;
    }

    growlDisplay(severity,summary,detail){
        this.growlMsg = [];
        this.growlMsg.push({'severity':severity,'summary':summary,'detail':detail});
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

    pay() {
        this.spinner=true;
        // if(
        //     this.userInfo.userInfo['address']==null||this.userInfo.userInfo['address']==''||
        //     this.userInfo.userInfo['state']==null||this.userInfo.userInfo['state']==''||
        //     this.userInfo.userInfo['country']==null||this.userInfo.userInfo['country']==''||
        //     this.userInfo.userInfo['pincode']==null||this.userInfo.userInfo['pincode']==0||
        //     this.userInfo.userInfo['state']==null||this.userInfo.userInfo['state']==''||
        //     this.userInfo.userInfo['city']==null||this.userInfo.userInfo['city']==''){
        //     this.confirm();
        //     this.spinner = false;
        //     return false
        // }
        let wrapper = {amount:0, fee_id:'',discount:0};
        for(let i in this.selectedPackage){
            wrapper['amount'] += parseInt(this.selectedPackage[i]['amount']);
            wrapper['fee_id'] += this.selectedPackage[i]['fee_id']+',';
        }
        if(this.discountApplied){
            wrapper['discount']=this.discount;
        }
        this.http.subscribe(wrapper).subscribe((data)=>{
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

    confirm(coupon=false) {
        var message = 'Please complete profile in order to continue.';
        var route = 'account/profile';
        if(coupon){
            message = 'Please Update school code to avail this coupon.';
            this.misc.profileTabIndex = 1;
        }
        this.confirmationService.confirm({
            message: message,
            accept: () => {
                this.router.navigate([route]);
            },
            reject: () =>{
                return false;
            }
        });
    }

    displayDiscount(val){
        this.discount = val;
        this.discountedAmount = this.sum - (this.sum*this.discount)/100;
        this.discountApplied = true;        
    }

    applyCoupon(){
        var wrapper = {coupon_code:this.coupon}
        this.reset();
        this.http.applyDicountCoupon(wrapper).subscribe((data)=>{
            if(data['status']===200){-
                this.displayDiscount(parseInt(data['message']));
            }
            if(data['status']===710){
                this.growlDisplay('error','Invalid Coupon','Enter Valid Coupon Code');
            }
            if(data['status']===711){
                this.confirm(true);
            }
        })
    }

    reset(){
        this.discountApplied = false;
        this.discount = null;
        this.coupon = null;
        this.discountedAmount = 0;
    }

    download(e){
    }
}



