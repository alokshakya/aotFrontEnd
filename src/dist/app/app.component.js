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
import { Router } from '@angular/router';
import { MasterHttpService } from './services/masterhttp.service';
var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 2] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
;
var AppComponent = (function () {
    function AppComponent(router, masterhttp) {
        this.router = router;
        this.masterhttp = masterhttp;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('session_token');
        if (token != null) {
            this.masterhttp.setToken(token);
            this.router.navigate(['loadout']);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () { };
    AppComponent.prototype.ngOnDestroy = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [Router, MasterHttpService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/app.component.js.map