import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../services/loginRegister.service';
import { Misc, PersonalInfo } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';

declare var $:any;
import { EventService } from '../../services/event.service'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit, AfterViewChecked {

  constructor(
    public httpService: LoginRegisterService,
    public masterhttp: MasterHttpService,
    public misc: Misc,
    public personalInfo: PersonalInfo,
    public router: Router,
    public event: EventService) { }
  userLoginCreds: any;
  spinner:boolean;
  ngOnInit() {
    this.userLoginCreds = { "username": null, "password": null };
  }

  ngAfterViewChecked (){
    $(".tabs a").on("click", function(){
      var id = $(this).attr("id");
      if(id == 2){
        $("#register").css("display","flex");
        $("#login").css("display","none");
        $("#forgetP").css("display","none");
      }
      else{
        $("#register").css("display","none");
        $("#forgetP").css("display","none");
        $("#login").css("display","flex");
      }
    });
    $(".reset").on("click", function(){
      $("#login").css("display","flex");
      $("#forgetP").css("display","none");
    });
    $(".forget-password").on("click", function(){
      $("#register").css("display","none");
      $("#login").css("display","none");
      $("#forgetP").css("display","flex");
    });
    $("#1").on("click", function(){
      $("#loginTab").addClass("active");
      $("#registerTab").removeClass("active");
    });
    $("#2").on("click", function(){
      $("#loginTab").removeClass("active");
      $("#registerTab").addClass("active");
    });
    function animationHover(element, animation){
      element = $(element);
      element.hover(
        function() {
          element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
      }
      );
    };
    animationHover("input[type=button]", "shake");
  }
  signIn() {
    this.spinner = true;
    this.httpService.login(this.userLoginCreds)
        .subscribe((data: Response) => {
            if (data['Status'] == 200 || data['status'] == 200) {
                this.setToken(data['session_token']);
                this.spinner = false;
            } else {
                //this.message = [];
                //this.message.push({ severity: 'error', summary: 'Invalid Credentials', detail: 'Sign Up with OlympiadBox' });
                this.spinner = false;
            }
        },
        err=>{
            //this.message = [];
            //this.message.push({ severity: 'error', summary: 'Server Error', detail: 'Please Try Again'});
            this.spinner = false;
        })
  }
  setToken(token) {
    localStorage.setItem('session_token',token);
    this.masterhttp.setToken(token);
    this.router.navigate(['loadout']);
}
}
