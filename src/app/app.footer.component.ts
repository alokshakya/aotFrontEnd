import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix" style="background-color:#2D353C">
                <span class="footer-text-left" style="color:white">Copyright &copy; 2017 OlympiadBox. All Rights Reserved </span>
            </div>
        </div>
    `
})
export class AppFooter {

}