var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var CssIdPipe = (function () {
    function CssIdPipe() {
    }
    CssIdPipe.prototype.transform = function (value, args) {
        var a = value.slice(0, 3);
        return a;
    };
    return CssIdPipe;
}());
CssIdPipe = __decorate([
    Pipe({
        name: 'cssId'
    })
], CssIdPipe);
export { CssIdPipe };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/pipes/css-id.pipe.js.map