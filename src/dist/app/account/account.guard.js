var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MasterHttpService } from '../services/masterhttp.service';
import { chapterwiseTest, Misc } from '../services/data.service';
var AccountGuard = (function () {
    function AccountGuard(masterhttp, misc, router) {
        this.masterhttp = masterhttp;
        this.misc = misc;
        this.router = router;
    }
    AccountGuard.prototype.canActivate = function (route, state) {
        if (this.masterhttp.token === localStorage.getItem('session_token')) {
            return true;
        }
        return false;
    };
    return AccountGuard;
}());
AccountGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MasterHttpService, Misc, Router])
], AccountGuard);
export { AccountGuard };
var TestAccountGuard = (function () {
    function TestAccountGuard(test) {
        this.test = test;
    }
    TestAccountGuard.prototype.canActivate = function (route, state) {
        if (this.test.activateRoute) {
            return true;
        }
        return false;
    };
    return TestAccountGuard;
}());
TestAccountGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [chapterwiseTest])
], TestAccountGuard);
export { TestAccountGuard };
var TestDeactivate = (function () {
    function TestDeactivate() {
    }
    TestDeactivate.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return TestDeactivate;
}());
export { TestDeactivate };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/account.guard.js.map