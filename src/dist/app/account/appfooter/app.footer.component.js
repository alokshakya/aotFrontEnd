var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppFooter = (function () {
    function AppFooter() {
    }
    return AppFooter;
}());
AppFooter = __decorate([
    Component({
        selector: 'app-footer',
        template: "\n        <div><app-overlay></app-overlay></div>\n        \n        <div class=\"footer\">\n            <div class=\"card clearfix\" style=\"background-color:#2D353C\">\n                <span class=\"footer-text-right\" style=\"color:white\"> All Rights Reserved</span>\n                <span class=\"footer-text-right\" style=\"color:white;margin-right:5px\">Copyright <i class=\"fa fa-copyright\"></i> 2017 OlympiadBox. </span>\n            </div>\n        </div>\n    "
    })
], AppFooter);
export { AppFooter };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/appfooter/app.footer.component.js.map