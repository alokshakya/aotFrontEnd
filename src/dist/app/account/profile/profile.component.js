var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { PersonalInfo, Misc } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';
var ProfileComponent = (function () {
    function ProfileComponent(
        //  private httpService: UserinfoService,
        // private classService: SubjectService,
        // private update: UpdateService,
        confirmservice, personalInfo, misc, masterhtttp) {
        this.confirmservice = confirmservice;
        this.personalInfo = personalInfo;
        this.misc = misc;
        this.masterhtttp = masterhtttp;
        this.actualOTP = 123456;
        this.city = [];
        this.state = [];
        this.country = [];
        this.storedPwd = 'qwe123';
        this.rating = 2;
        //add achievement tab
        this.classList = [];
        this.exam = [];
        //misc
        this.growlmsg = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.misc.setCurrentRoute(["Profile"]);
        this.misc.setLocalRoute('account/profile');
        this.dec = [];
        this.exam.push({ label: "Select Exam", value: "null" }, { label: "NCO 2016-17 - Level 2", value: "NCO-16-17" }, { label: "NSO-16-17 - Level 2", value: "NSO-16-17" }, { label: "IMO 2016-17 - Level 2", value: "NTSE" }, { label: "IMO 2016-17 - Level 2", value: "IMO 2016-17 - Level 2" }, { label: "ISKO 2016", value: "ISKO 2016" }, { label: "NCO 2016", value: "NCO 2016" }, { label: "NCO 2016 - Level 1", value: "NCO 2016 - Level 1" }, { label: "NSO 2016 - Level 1", value: "NSO 2016 - Level 1" }, { label: "IMO 2016 - Level 1", value: "IMO 2016 - Level 1" }, { label: "IEO 2016 - Level 1", value: "IEO 2016 - Level 1" }, { label: "IIO 2016 - Level 1", value: "IIO 2016 - Level 1" }, { label: "IOM 2016 - Level 1", value: "IOM 2016 - Level 1" }, { label: "IOS 2016 - Level 1", value: "IOS 2016 - Level 1" }, { label: "IOEL 2016 - Level 1", value: "IOEL 2016 - Level 1" });
        this.city.push({ label: "Select City", value: null }, { label: "Ghaziabad", value: "Ghaziabad" }, { label: "Delhi", value: "Delhi" }, { label: "Gurgaon", value: "Gurgaon" }, { label: "Bombay", value: "Bombay" }, { label: "Kolkata", value: "Kolkata" });
        this.state.push({ label: "Select State", value: null }, { label: "Uttar Pradesh", value: "Uttar Pradesh" }, { label: "West Bengal", value: "West Bengal" }, { label: "Maharashtra", value: "Maharashtra" }, { label: "Haryana", value: "Haryana" });
        this.country.push({ label: "Select Country", value: null }, { label: "India", value: "India" }, { label: "Sri Lanka", value: "Sri Lanka" }, { label: "Indonesia", value: "Indonesia" }, { label: "Nepal", value: "Nepal" });
        this.classList.push({ label: "Select Class", value: null }, { label: "I", value: "I" }, { label: "II", value: "II" }, { label: "III", value: "III" }, { label: "IV", value: "IV" }, { label: "V", value: "V" }, { label: "VI", value: "VI" }, { label: "VII", value: "VII" }, { label: "VIII", value: "VIII" });
        this.dummySchoolInfo = {
            code: "OBU232",
            schoolname: "St Thomas School",
            contactperson: "Dave",
            email: "dap@stschool.com",
            landline: 3543542,
            address: "pqr xyz, abc",
            state: "Uttar Pradesh",
            city: "Ghaziabad",
            country: "India",
            pincode: "21012",
            mobile: 9324567322
        };
        this.dummyEditSchoolInfo = {
            code: "OBU232",
            schoolname: "St Thomas School",
            contactperson: "Dave",
            email: "dap@stschool.com",
            landline: 3543452,
            address: "pqr xyz, abc",
            state: "Uttar Pradesh",
            city: "Ghaziabad",
            country: "India",
            pincode: "21012",
            mobile: 9324567322
        };
        // this.date = new Date();
        this.maxDate = new Date();
        this.maxDate.setFullYear(2013, 0, 1);
        // this.date.setFullYear(1998, 5, 14);
    };
    ProfileComponent.prototype.editBasicInfo = function () {
        this.dummyBasicInfo = JSON.parse(JSON.stringify(this.personalInfo.userInfo));
        this.editBasic = true;
    };
    ProfileComponent.prototype.cancelBasicInfo = function () {
        this.dummyBasicInfo = JSON.parse(JSON.stringify(this.personalInfo.userInfo));
        this.editBasic = false;
    };
    ProfileComponent.prototype.saveBasicInfo = function () {
        var _this = this;
        // this.spinner = true;
        var wrapper = {
            'firstname': this.dummyBasicInfo['firstname'],
            'lastname': this.dummyBasicInfo['lastname'],
            'country': this.dummyBasicInfo['country'],
            'address': this.dummyBasicInfo['address'],
            'state': this.dummyBasicInfo['state'],
            'city': this.dummyBasicInfo['city'],
            'birthdate': this.dummyBasicInfo['birthdate'],
            'pincode': this.dummyBasicInfo['pincode'],
            'mobile': this.dummyBasicInfo['mobile'],
            'gender': this.dummyBasicInfo['gender'],
            'school_id': this.personalInfo.studentInfo['school_id']
        };
        this.masterhtttp.updateProfile(wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.personalInfo.userInfo = _this.dummyBasicInfo;
                _this.editBasic = false;
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'success', summary: 'Success', detail: 'Profile Updated' });
                _this.spinner = false;
            }
            else {
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Updating Profile' });
            }
        }, function (err) {
            _this.spinner = false;
            _this.growlmsg = [];
            _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Updating Profile' });
        });
    };
    ProfileComponent.prototype.verifyMobile = function () {
        var _this = this;
        var wrapper = { 'email': this.personalInfo.userInfo['email'], 'verify_mobile': true, 'verify_email': false };
        this.masterhtttp.sendOtp(wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.otpDialog = true;
            }
        });
    };
    ProfileComponent.prototype.editSchoolInfo = function () {
        this.couponCode = this.personalInfo.schoolInfo['coupon_code'];
        this.editSchool = true;
    };
    ProfileComponent.prototype.cancelSchoolInfo = function () {
        this.couponCode = this.personalInfo.schoolInfo['coupon_code'];
        // if (this.personalInfo.schoolInfo == null) {
        //     this.personalInfo.schoolInfo = JSON.parse(JSON.stringify(this.personalInfo.dummySchoolInfo));
        // }
        this.editSchool = false;
    };
    ProfileComponent.prototype.updateSchool = function () {
        var _this = this;
        var wrapper = { 'school_id': this.personalInfo.schoolInfo['school_id'] };
        this.masterhtttp.updateProfile(wrapper).subscribe(function (data) {
            if (data['status'] == 200) {
                _this.masterhtttp.getPersonalInfo();
            }
        });
    };
    ProfileComponent.prototype.saveSchoolInfo = function () {
        var _this = this;
        var wrapper = { 'coupon_code': this.couponCode };
        // this.spinner = true;
        this.masterhtttp.getSchool(wrapper)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.personalInfo.setSchoolInfo(data['message']);
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'success', summary: 'Success', detail: 'School Info Saved' });
                _this.editSchool = false;
            }
            else {
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'error', summary: 'Invalid Coupon Code', detail: 'Try Again With A Different Coupon Code' });
            }
            _this.updateSchool();
            _this.spinner = false;
        }, function (err) {
            _this.spinner = false;
            _this.growlmsg = [];
            _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Updating School Info' });
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        var requestbody = { 'old_password': this.oldPassword, 'new_password': this.confirmNewPassword, 'user_info_id': this.personalInfo.userInfo['user_info_id'] };
        // this.spinner = true;
        if (this.confirmNewPassword != this.newPassword) {
            this.growlmsg.push({ severity: 'error', summary: "New Password doesn't match", detail: 'Please try again' });
        }
        else {
            this.masterhtttp.updatePassword(requestbody)
                .subscribe(function (data) {
                if (data['status'] == 200) {
                    _this.cancelPassword();
                    _this.growlmsg = [];
                    _this.growlmsg.push({ severity: 'success', summary: "Success", detail: 'Password Updated' });
                }
                else {
                    _this.growlmsg = [];
                    _this.growlmsg.push({ severity: 'error', summary: "Incorrect Old Password", detail: 'Please try again' });
                }
                _this.spinner = false;
            }, function (err) {
                _this.spinner = false;
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Updating Password' });
            });
        }
        //this.growlmsg.push({severity:'success', summary:"Password Changed", detail:'Please try again'});}
    };
    ProfileComponent.prototype.cancelPassword = function () {
        this.newPassword = null;
        this.confirmNewPassword = null;
        this.oldPassword = null;
        this.editPassword = false;
    };
    ProfileComponent.prototype.addTestimonial = function () {
        var _this = this;
        var requestBody = { 'text': this.testimonial, 'student_id': this.personalInfo.studentInfo['student_id'] };
        // this.spinner = true;
        this.masterhtttp.addTestimonial(requestBody)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.masterhtttp.getUserTestimonials(_this.personalInfo.studentInfo['student_id']);
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'success', summary: "Success", detail: 'Testimonial Added' });
                _this.testimonial = null;
            }
            else {
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'error', summary: 'Limt Reached', detail: 'You Cannot Add More Than 3 Testimonials' });
            }
            _this.spinner = false;
        }, function (err) {
            _this.spinner = false;
            _this.growlmsg = [];
            _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Adding Testimonial' });
        });
    };
    ProfileComponent.prototype.cancelTestimonial = function () {
        this.testimonial = "Enter Your Testimonial Here...";
    };
    ProfileComponent.prototype.addAchievement = function () {
        var _this = this;
        var requestBody = { 'text': this.achievement, 'student_id': this.personalInfo.studentInfo['student_id'] };
        this.masterhtttp.addAchievement(requestBody)
            .subscribe(function (data) {
            if (data['status'] == 200) {
                _this.achievement = null;
                _this.growlmsg = [];
                _this.growlmsg.push({ severity: 'success', summary: "Success", detail: 'Achievement Added' });
            }
        }, function (err) {
            _this.growlmsg = [];
            _this.growlmsg.push({ severity: 'error', summary: 'Error', detail: 'Error While Adding Achievement' });
        });
    };
    ProfileComponent.prototype.cancelAchievement = function () {
        this.achievement = null;
        this.dec = [];
    };
    //otp verification
    ProfileComponent.prototype.dummyVerify = function () {
        if (this.actualOTP == this.dummyOtp) {
            this.otpDialog = false;
        }
        this.dummyIncorrectOtp = true;
    };
    ProfileComponent.prototype.edit = function (a) {
        this.index = a;
        this.currentTestimonial = this.personalInfo.userTestimonials[a]['text'];
        this.editTestimonial = true;
    };
    ProfileComponent.prototype.saveTestimonial = function () {
        this.misc.userTestimonial[this.index] = this.currentTestimonial;
        this.editTestimonial = false;
    };
    ProfileComponent.prototype.cancel = function () {
        this.currentTestimonial = this.misc.userTestimonial[this.index];
        this.editTestimonial = false;
    };
    //tab change event
    ProfileComponent.prototype.onChange = function () {
        var _this = this;
        if (this.editBasic) {
            this.confirmservice.confirm({
                message: 'Save changes in Basic info ?',
                accept: function () {
                    _this.editBasic = false;
                },
                reject: function () {
                    _this.editBasic = false;
                }
            });
        }
        else if (this.editSchool) {
            this.confirmservice.confirm({
                message: 'Save changes in School Info ?',
                accept: function () {
                    _this.editSchool = false;
                },
                reject: function () {
                    _this.editSchool = false;
                }
            });
        }
        else if (this.editPassword) {
            this.confirmservice.confirm({
                message: 'Save changes ?',
                accept: function () {
                    _this.editPassword = false;
                },
                reject: function () {
                    _this.editPassword = false;
                }
            });
        }
    };
    ProfileComponent.prototype.quit = function () {
        if (this.editBasic || this.editPassword || this.editTestimonial || this.editSchool) {
            this.confirmservice.confirm({
                message: 'Please save changes before leaving',
                accept: function () { return false; },
                reject: function () { return false; }
            });
        }
        else
            return true;
    };
    ProfileComponent.prototype.canDeactivate = function () {
        return this.quit();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.editBasic = false;
        this.editSchool = false;
        this.editPassword = false;
        this.editTestimonial = false;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    }),
    __metadata("design:paramtypes", [ConfirmationService,
        PersonalInfo,
        Misc,
        MasterHttpService])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/profile/profile.component.js.map