import { Component,  OnInit, Inject, forwardRef } from '@angular/core';
import { AccountMainComponent } from '../main/main.component';
import { Router } from '@angular/router';
import { PersonalInfo,Misc } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service'


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBar implements OnInit {

    currentPage:Array<string>;
    constructor(@Inject(forwardRef(() => AccountMainComponent))  public app:AccountMainComponent,
    private router:Router,
    private misc:Misc,
    private personalInfo:PersonalInfo,
    private masterhttp:MasterHttpService) { }


    logout(){
        let userInfoId = this.personalInfo.userInfo['user_info_id']
        this.masterhttp.logout(userInfoId)
        .subscribe((data:Response)=>{
            if (data['status']==200){
                console.log(data)
                this.masterhttp.setToken(null);
                this.router.navigate(['login']);
            }
        })
    };

    ngOnInit(){
        this.router.events.subscribe(event =>{
        let a = event['url'];
        this.currentPage = a.split('/');
        this.currentPage.shift();
        this.currentPage.shift();
        })
    }

    redirect(target){
        this.router.navigate([target]);
    }

}


