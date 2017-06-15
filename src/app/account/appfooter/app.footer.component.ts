import {Component,Inject,forwardRef} from '@angular/core';
import {AccountMainComponent} from '../main/main.component';

@Component({
    selector: 'app-footer',
    template: `
        <div><app-overlay></app-overlay></div>
        
        <div class="footer">
            <div class="card clearfix" style="background-color:#2D353C">
                <span class="footer-text-right" style="color:white"> All Rights Reserved</span>
                <span class="footer-text-right" style="color:white;margin-right:5px">Copyright &copy; 2017 OlympiadBox. </span>
            </div>
        </div>
    `
})
export class AppFooter {

}