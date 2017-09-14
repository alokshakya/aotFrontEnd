var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { PersonalInfo } from '../../services/data.service';
import { MasterHttpService } from '../../services/masterhttp.service';
import { Misc } from '../../services/data.service';
var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 2] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
;
var AccountMainComponent = (function () {
    function AccountMainComponent(renderer, router, personalInfo, misc, masterhttp) {
        this.renderer = renderer;
        this.router = router;
        this.personalInfo = personalInfo;
        this.misc = misc;
        this.masterhttp = masterhttp;
        this.layoutCompact = false;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        this.profileMode = 'inline';
    }
    AccountMainComponent.prototype.ngOnInit = function () {
        this.email = this.personalInfo.userInfo.email;
        this.shownEmail = this.email;
        this.class = this.personalInfo.classInfo.abbreviation;
        if (this.email.length > 24) {
            this.shownEmail = this.email.slice(24);
        }
    };
    AccountMainComponent.prototype.change = function (changed) {
    };
    AccountMainComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = this.layoutMenuScrollerViewChild.nativeElement;
        //hides the horizontal submenus or top menu if outside is clicked
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function (event) {
            if (!_this.topbarItemClick) {
                _this.activeTopbarItem = null;
                _this.topbarMenuActive = false;
            }
            if (!_this.menuClick && _this.isHorizontal()) {
                _this.resetMenu = true;
            }
            _this.topbarItemClick = false;
            _this.menuClick = false;
        });
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    AccountMainComponent.prototype.onMenuButtonClick = function (event) {
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
    };
    AccountMainComponent.prototype.onMenuClick = function ($event) {
        var _this = this;
        this.menuClick = true;
        this.resetMenu = false;
        if (!this.isHorizontal()) {
            setTimeout(function () {
                jQuery(_this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    };
    AccountMainComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        if (this.overlayMenuActive || this.staticMenuMobileActive) {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        }
        event.preventDefault();
    };
    AccountMainComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;
        event.preventDefault();
    };
    AccountMainComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AccountMainComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    AccountMainComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    AccountMainComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    AccountMainComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    AccountMainComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    AccountMainComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    AccountMainComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    AccountMainComponent.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
        this.masterhttp.updated = 0;
    };
    return AccountMainComponent;
}());
__decorate([
    ViewChild('layoutWrapper'),
    __metadata("design:type", ElementRef)
], AccountMainComponent.prototype, "layourContainerViewChild", void 0);
__decorate([
    ViewChild('layoutMenuScroller'),
    __metadata("design:type", ElementRef)
], AccountMainComponent.prototype, "layoutMenuScrollerViewChild", void 0);
AccountMainComponent = __decorate([
    Component({
        selector: 'main-account',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss']
    }),
    __metadata("design:paramtypes", [Renderer,
        Router,
        PersonalInfo,
        Misc,
        MasterHttpService])
], AccountMainComponent);
export { AccountMainComponent };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/main/main.component.js.map