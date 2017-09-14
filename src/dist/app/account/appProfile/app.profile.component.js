var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { PersonalInfo } from '../../services/data.service';
var InlineProfileComponent = (function () {
    function InlineProfileComponent(personalInfo) {
        this.personalInfo = personalInfo;
    }
    InlineProfileComponent.prototype.onClick = function (event) {
        this.active = !this.active;
        event.preventDefault();
    };
    return InlineProfileComponent;
}());
InlineProfileComponent = __decorate([
    Component({
        selector: 'inline-profile',
        templateUrl: './app.profile.component.html',
        animations: [
            trigger('menu', [
                state('hidden', style({
                    height: '0px'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [PersonalInfo])
], InlineProfileComponent);
export { InlineProfileComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/appProfile/app.profile.component.js.map