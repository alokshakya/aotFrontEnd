import { Component } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { BaseHttpService } from '../services/base-http.service';
import * as constants from '../../config/constants';
import {NgForm} from '@angular/forms';
import { Message} from 'primeng/primeng';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user:any={"email":"", "password":""};

  errorMesssage: Message[] = [];
 
  userform: FormGroup;

  
  constructor(private httpService: BaseHttpService, private _router: Router) {

    var token=localStorage.getItem('session_token');
    if (token!=''){
      this._router.navigate(['dashboard']);
    }
  }

   private storeToken(data){
     localStorage.setItem('session_token', data.session_token);
     this._router.navigate(['dashboard']);
   }

   showerror(){
      this.errorMesssage = [];
      this.errorMesssage.push({severity:'info', summary:'Invalid Credentials', detail:'Sign Up with OlympiadBox'});
    }

   postdata() {
        var queryHeaders = new Headers();
        queryHeaders.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: queryHeaders });
        this.httpService.http.post(constants.DREAMFACTORY_INSTANCE_URL + '/api/v2/user/session', this.user, options)
            .subscribe((data) => {
                this.storeToken(data.json());
            }, (error) => {
                      this.showerror();
            }
            );
    }

  

}
