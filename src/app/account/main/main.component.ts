import { Router } from '@angular/router';
import { Component, AfterViewInit, OnInit, ElementRef, Renderer, ViewChild, OnDestroy } from '@angular/core';
import { PersonalInfo } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Misc } from '../../services/data.service';


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

    changeImg: boolean;

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

    userEvent: any

    //profile data
    shownEmail: string;
    email: string;
    class: string;
    name: string;
    @ViewChild('layoutWrapper') layourContainerViewChild: ElementRef;

    @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ElementRef;

    loader: boolean;
    constructor(
        public renderer: Renderer,
        public router: Router,
        public personalInfo: PersonalInfo,
        public misc: Misc,
        public masterhttp: MasterHttpService,
    )
    { }

    ngOnInit() {
        this.email = this.personalInfo.userInfo.email;
        this.shownEmail = this.email;
        this.class = this.personalInfo.classInfo.abbreviation;
        if (this.email.length > 24) {
            this.shownEmail = this.email.slice(24, );
        }
    }

    change(changed: boolean) {
    }

    ngAfterViewInit() {
        this.layoutContainer = <HTMLDivElement>this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = <HTMLDivElement>this.layoutMenuScrollerViewChild.nativeElement;

        //hides the horizontal submenus or top menu if outside is clicked
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
            if (!this.topbarItemClick) {
                this.activeTopbarItem = null;
                this.topbarMenuActive = false;
            }

            if (!this.menuClick && this.isHorizontal()) {
                this.resetMenu = true;
            }

            this.topbarItemClick = false;
            this.menuClick = false;
        });


        setTimeout(() => {
            jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    }

    onMenuButtonClick(event) {
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;

        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                if (this.staticMenuMobileActive) {
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

        if (!this.isHorizontal()) {
            setTimeout(() => {
                jQuery(this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        if (this.overlayMenuActive || this.staticMenuMobileActive) {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        }

        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item)
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
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
        this.masterhttp.updated = 0;
    }

}