import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AccountMainComponent } from '../main/main.component';
import { Router } from '@angular/router';
import { PersonalInfo, Misc } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';
import { Observable } from 'rxjs/Rx';
import * as handle from '../../services/data.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBar implements OnInit {

    currentPage: Array<string>;
    constructor( @Inject(forwardRef(() => AccountMainComponent)) public app: AccountMainComponent,
        public router: Router,
        public misc: Misc,
        public personalInfo: PersonalInfo,
        public masterhttp: MasterHttpService) { }

    currentComponent:string;

    logout() {
        localStorage.removeItem('session_token');
        sessionStorage.removeItem('route');
        let wrapper = {'user_info_id':this.personalInfo.userInfo['user_info_id']};
        this.masterhttp.logout(wrapper)
            .subscribe((data: Response) => {
                if (data['status'] == 200) {
                    localStorage.removeItem('session_token');
                    sessionStorage.removeItem('route');
                }
            })
    };

    activeComponent(){
        this.misc.currentRoute.subscribe((data)=>{
            this.currentComponent = data;
        })
    }

    ngOnInit() {
        this.activeComponent();

        this.router.events.subscribe(event => {
            let a = event['url'];
            this.currentPage = a.split('/');
            this.currentPage.shift();
            this.currentPage.shift();
        })
    }

    redirect(target) {
        this.router.navigate([target]);
    }

}


