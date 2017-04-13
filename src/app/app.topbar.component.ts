import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">            
                <div class="logo">
                    <img src="assets/layout/images/logo.png" alt="Logo">
                </div>
            </div>
            
            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i class="fa fa-angle-left"></i>
                </a>
                
                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="fa fa-bars"></i>
                </a>
                <ul class="topbar-items fadeInDown animated" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">
                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">                            
                            <img class="profile-image" src="assets/layout/images/Profile_picture.png">
                            <span class="topbar-item-name">Jane Williams</span>
                        </a>
                        
                        <ul class="poseidon-menu fadeInDown">
                            <li role="menuitem">
                                <a href="#/profile">
                                    <i class="fa fa-fw fa-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#">
                                    <i class="fa fa-fw fa-user-secret"></i>
                                    <span>Privacy</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#/accountsettings">
                                    <i class="fa fa-fw fa-cog"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="../assets/template-pages/login.html">
                                    <i class="fa fa-fw fa-sign-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
                        <a href="#/accountsettings"> <!--(click)="app.onTopbarItemClick($event,settings)">-->
                            <i class="topbar-icon fa fa-fw fa-cog"></i>
                            <span class="topbar-item-name">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopBar {

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}

}