import {Component,Inject,forwardRef} from '@angular/core';
import {AccountMainComponent} from '../main/main.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix" style="background-color:#2D353C">
                <span class="footer-text-left" style="color:white">Copyright &copy; 2017 OlympiadBox</span>
                <span class="footer-text-right" style="color:white">All Rights Reserved.</span>
            </div>
        </div>
    `
})
export class AppFooter {

}