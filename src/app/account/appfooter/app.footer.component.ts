import { Component, Inject, forwardRef } from '@angular/core';
import { AccountMainComponent } from '../main/main.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix" style="background-color:#2D353C;margin-bottom:0px">
                <span class="footer-text-right" style="color:white"> All Rights Reserved</span>
                <span class="footer-text-right" style="color:white;margin-right:5px">Copyright <i class="fa fa-copyright"></i> 2017 OlympiadBox. </span>
            </div>
        </div>
    `
})
export class AppFooter {

}