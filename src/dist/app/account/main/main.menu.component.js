var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, trigger, state, transition, style, animate, Inject, forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AccountMainComponent } from './main.component';
var AppMenuComponent = (function () {
    //temporary
    function AppMenuComponent(app) {
        this.app = app;
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['dashboard'] },
            { label: 'Account Settings', icon: 'fa fa-pencil-square-o', routerLink: ['accountsettings'] },
            {
                label: 'Computer-Cyber', icon: 'icon-cyber',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['computers/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['computers/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['computers/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['computers/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['computers/result']
                    }
                ]
            },
            {
                label: 'Science', icon: 'icon-science',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['science/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['science/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['science/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['science/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['science/result']
                    },
                ]
            },
            {
                label: 'Mathematics', icon: 'icon-maths',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['math/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['math/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['math/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['math/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['math/result']
                    },
                ]
            },
            {
                label: 'General-Knowledge', icon: 'icon-gk',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['gk/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['gk/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['gk/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['gk/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['gk/result']
                    },
                ]
            },
            {
                label: 'English', icon: 'icon-english',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['english/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['english/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['english/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['english/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['english/result']
                    },
                ]
            },
            {
                label: 'Reasoning', icon: 'icon-reasoning',
                items: [{
                        label: 'Demo Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['reasoning/demotest']
                    },
                    {
                        label: 'Chapterwise Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['reasoning/chapterwisetest']
                    },
                    {
                        label: 'Sample Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['reasoning/sampletest']
                    },
                    {
                        label: 'Mock Test',
                        icon: 'fa fa-circle-o',
                        routerLink: ['reasoning/mocktest']
                    },
                    {
                        label: 'Result',
                        icon: 'fa fa-circle-o',
                        routerLink: ['reasoning/result']
                    }
                ]
            }
        ];
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        // this.model = []
        // this.subjectSet.getSubjectSet(1).subscribe((data:Response) =>{
        //     data = data['resource'];
        //     var k = 2;
        //     for(let i in data){
        //         this.menuTabs[k]['label'] = data[i]['subjects_by_subject_id']['name'];
        //         k++;
        //     }
        //     for (let j in this.menuTabs){
        //         this.model.push(this.menuTabs[j])
        //     }
        // })
        //temporary
        // this.temporaryModel = [];
        // this.masterhttp.getSubjects().subscribe((data: Response) => {
        //     var l = 2;
        //     for(let i in data['subjects']['records']){
        //         this.menuTabs[l]['label'] = data['subjects']['records'][i][1];
        //         l++;
        //     }
        //     for (let m in this.menuTabs){
        //         this.temporaryModel.push(this.menuTabs[m])
        //     }
        // })
    };
    return AppMenuComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppMenuComponent.prototype, "reset", void 0);
AppMenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        styleUrls: ['./main.component.scss'],
        template: "<div>\n        <app-overlay></app-overlay>\n    </div>\n        <ul app-submenu [item]=\"model\" root=\"true\" class=\"layout-menu clearfix\" [reset]=\"reset\" visible=\"true\"></ul>\n    "
    }),
    __param(0, Inject(forwardRef(function () { return AccountMainComponent; }))),
    __metadata("design:paramtypes", [AccountMainComponent])
], AppMenuComponent);
export { AppMenuComponent };
var AppSubMenu = (function () {
    function AppSubMenu(app, router, location) {
        this.app = app;
        this.router = router;
        this.location = location;
    }
    AppSubMenu.prototype.itemClick = function (event, item, index) {
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        //activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        //prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        //hide menu
        if (!item.items) {
            if (this.app.isHorizontal())
                this.app.resetMenu = true;
            else
                this.app.resetMenu = false;
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
        }
    };
    AppSubMenu.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenu.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && this.app.isHorizontal()) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppSubMenu;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSubMenu.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppSubMenu.prototype, "root", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppSubMenu.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AppSubMenu.prototype, "reset", null);
AppSubMenu = __decorate([
    Component({
        selector: '[app-submenu]',
        template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" *ngIf=\"!child.routerLink\" [attr.tabindex]=\"!visible ? '-1' : null\">\n                    <i [ngClass]=\"child.icon\"></i>\n                    <span>{{child.label}}</span>\n                    <i class=\"fa fa-fw fa-angle-down\" *ngIf=\"child.items\"></i>\n                </a>\n                <a (click)=\"itemClick($event,child,i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <i [ngClass]=\"child.icon\"></i>\n                    <span>{{child.label}}</span>\n                    <i class=\"fa fa-fw fa-angle-down\" *ngIf=\"child.items\"></i>\n                </a>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [@children]=\"isActive(i) ? 'visible' : 'hidden'\" [visible]=\"isActive(i)\" [reset]=\"reset\"></ul>\n            </li>\n        </ng-template>\n    ",
        animations: [
            trigger('children', [
                state('hidden', style({
                    height: '0px'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __param(0, Inject(forwardRef(function () { return AccountMainComponent; }))),
    __metadata("design:paramtypes", [AccountMainComponent, Router, Location])
], AppSubMenu);
export { AppSubMenu };
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/main/main.menu.component.js.map