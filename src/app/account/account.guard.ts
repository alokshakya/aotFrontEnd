import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MasterHttpService } from '../services/masterhttp.service';
import { chapterwiseTest, Misc } from '../services/data.service';
import { DashboardComponent } from './dashboard/dashboard.component'


@Injectable()
export class AccountGuard implements CanActivate {
    constructor(private masterhttp: MasterHttpService, private misc:Misc, private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.masterhttp.token === localStorage.getItem('session_token')) {
            return true;
        }
        return false;
        
    }
}

@Injectable()
export class TestAccountGuard implements CanActivate{
	constructor(private test:chapterwiseTest){}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		if(this.test.activateRoute){
			return true;
		}
		return false;
	}
}


export interface ComponentCanDeactivate{
	canDeactivate: () => Observable<boolean> | boolean;
}

export class TestDeactivate implements CanDeactivate<ComponentCanDeactivate> {
	canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
		return component.canDeactivate ? component.canDeactivate(): true;
	}
}
