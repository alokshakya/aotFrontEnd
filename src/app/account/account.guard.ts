import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MasterHttpService } from '../services/masterhttp.service';

@Injectable()
export class AccountGuard implements CanActivate{
	constructor(private masterhttp:MasterHttpService){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
		if(this.masterhttp.token === localStorage.getItem('session_token')){
			return true;
		}
		return false;
	}
}
