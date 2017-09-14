var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
var MathJaxDirective = (function () {
    function MathJaxDirective(el) {
        this.el = el;
    }
    MathJaxDirective.prototype.ngAfterViewInit = function () {
        MathJax.Hub.Config({
            config: ["MMLorHTML.js"],
            jax: ["input/TeX", "input/MathML", "input/AsciiMath", "output/HTML-CSS", "output/NativeMML", "output/PreviewHTML"],
            extensions: ["tex2jax.js", "mml2jax.js", "asciimath2jax.js", "MathMenu.js", "MathZoom.js", "fast-preview.js", "AssistiveMML.js", "a11y/accessibility-menu.js"],
            TeX: {
                extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]
            }
        });
        // this.el.nativeElement.innerHTML = this.dummyText;
        // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    };
    return MathJaxDirective;
}());
__decorate([
    Input('MathJax'),
    __metadata("design:type", String)
], MathJaxDirective.prototype, "dummyText", void 0);
MathJaxDirective = __decorate([
    Directive({
        selector: '[MathJax]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], MathJaxDirective);
export { MathJaxDirective };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/directives/mathjax.directive.js.map