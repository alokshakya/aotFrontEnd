import {Component,AfterViewInit,OnInit,ElementRef,Renderer,ViewChild,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { UserinfoService } from '../../services/userinfo.service';
import { LoginRegisterService } from '../../services/loginRegister.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'


enum MenuOrientation {
    STATIC,
    OVERLAY,
    HORIZONTAL
};

declare var jQuery: any;

@Component({
  selector: 'main-account',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AccountMainComponent implements AfterViewInit {
    

    //student info to be displayed above menubar
    studentName: string;
    class: string;
    email: string; 
    
    layoutCompact: boolean = false;

    layoutMode: MenuOrientation = MenuOrientation.STATIC;
    
    darkMenu: boolean = false;
    
    profileMode: string = 'inline';

    rotateMenuButton: boolean;

    topbarMenuActive: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    layoutContainer: HTMLDivElement;

    layoutMenuScroller: HTMLDivElement;

    modal: HTMLDivElement;

    menuClick: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    documentClickListener: Function;

    resetMenu: boolean;

    viewed:boolean=false;

    userDetails //will be used in child components

    @ViewChild('layoutWrapper') layourContainerViewChild: ElementRef;

    @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ElementRef;

    constructor(public renderer: Renderer, private router: Router, private http: UserinfoService, private login: LoginRegisterService) {}

    ngOnInit() {
        var sessionToken = localStorage.getItem('session_token');
        if(sessionToken==''||sessionToken==null){
            this.router.navigate(['login'])
        }else if(!this.viewed){
            
        //hitting service to show Name etc.
        this.http.getUserInfo().subscribe((response: Response)=>{
                this.userDetails = response
                this.studentName = this.userDetails.user_info_by_user_info_id.firstname + ' ' + this.userDetails.user_info_by_user_info_id.lastname;
                this.class = this.userDetails.class_by_class_id.name;
                this.email = this.userDetails.user_info_by_user_info_id.email; 
                this.viewed=true;
        })
        }
        
        }        

    ngAfterViewInit() {
        this.layoutContainer = <HTMLDivElement> this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = <HTMLDivElement> this.layoutMenuScrollerViewChild.nativeElement;

        //hides the horizontal submenus or top menu if outside is clicked
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
            if(!this.topbarItemClick) {
                this.activeTopbarItem = null;
                this.topbarMenuActive = false;
            }

            if(!this.menuClick && this.isHorizontal()) {
                this.resetMenu = true;
            }

            this.topbarItemClick = false;
            this.menuClick = false;
        });




        
        setTimeout(() => {
            jQuery(this.layoutMenuScroller).nanoScroller({flash:true});
        }, 10);
    }

    onMenuButtonClick(event) {
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;

        if(this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if(this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                if(this.staticMenuMobileActive) {
                    this.staticMenuMobileActive = false;
                }
                else {
                    this.staticMenuMobileActive = true;
                }
            }
        }

        event.preventDefault();
    }

    onMenuClick($event) {
        this.menuClick = true;
        this.resetMenu = false;

        if(!this.isHorizontal()) {
            setTimeout(() => {
                jQuery(this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        
        if(this.overlayMenuActive || this.staticMenuMobileActive) {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        }
        
        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if(this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;

        event.preventDefault();
    }

    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isOverlay() {
        return this.layoutMode === MenuOrientation.OVERLAY;
    }

    isHorizontal() {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    }

    changeToStaticMenu() {
        this.layoutMode = MenuOrientation.STATIC;
    }

    changeToOverlayMenu() {
        this.layoutMode = MenuOrientation.OVERLAY;
    }

    changeToHorizontalMenu() {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    }

    ngOnDestroy() {
        localStorage.setItem('session_token',null);
        if(this.documentClickListener) {
            this.documentClickListener();
        }
      
        jQuery(this.layoutMenuScroller).nanoScroller({flash:true});
    }

}