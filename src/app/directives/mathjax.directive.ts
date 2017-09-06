import {Directive, ElementRef, Input} from '@angular/core';
declare var MathJax:any;
@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input('MathJax') question: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
       this.el.nativeElement.innerHTML = this.question;
       MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}