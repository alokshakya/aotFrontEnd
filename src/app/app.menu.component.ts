import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu clearfix" [reset]="reset" visible="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: MenuItem[];

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}
    
    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/dashboard']},
            {label: 'Account Settings', icon: 'fa fa-pencil-square-o', routerLink: ['/accountsettings']},
            {
                label: 'Computer/Cyber', icon: 'icon-cyber',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/computer/demotest']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/computer/chapterwisetest']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/computer/sampletest']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/computer/mocktest']},
                    {label: 'Result', icon: 'fa fa-calculator', routerLink:['/computer/result']},
                    ]
            },
            {
                label: 'Science', icon: 'icon-science',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Result', icon: 'fa fa-calculator', routerLink:['/']},
                    ]
            },
            {
                label: 'Mathematics', icon: 'icon-maths',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Result', icon: 'fa fa-calculator', routerLink:['/']},
                    ]
            },
            {
                label: 'General Knowledge', icon: 'icon-gk',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Result', icon: 'fa fa-calculator', routerLink:['/']},
                    ]
            },

            {
                label: 'English', icon: 'icon-english',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Result', icon: 'fa fa-calculaor', routerLink:['/']},
                    ]
            },

            {
                label: 'Reasoning', icon: 'icon-reasoning',
                items: [
                    {label: 'Demo Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Chapterwise Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Sample Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Mock Test', icon: 'fa fa-circle-o', routerLink:['/']},
                    {label: 'Result', icon: 'fa fa-calculator', routerLink:['/']}
                    ]
            }],


            
            
            
            
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation']};
    }

    
} 

@Component({
    selector: '[app-submenu]',
    template: `
        <template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" *ngIf="!child.routerLink" [attr.tabindex]="!visible ? '-1' : null">
                    <i [ngClass]="child.icon"></i>
                    <span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                </a>
                <a (click)="itemClick($event,child,i)" class="ripplelink" *ngIf="child.routerLink"
                    [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink" [routerLinkActiveOptions]="{exact: true}">
                    <i [ngClass]="child.icon"></i>
                    <span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                </a>
                <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" [visible]="isActive(i)" [reset]="reset"></ul>
            </li>
        </template>
    `,
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
})
export class AppSubMenu {

    @Input() item: MenuItem;
    
    @Input() root: boolean;
    
    @Input() visible: boolean;

    _reset: boolean;
        
    activeIndex: number;

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent, public router: Router, public location: Location) {}
        
    itemClick(event: Event, item: MenuItem, index: number) {
        //avoid processing disabled items
        if(item.disabled) {
            event.preventDefault();
            return true;
        }
        
        //activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
                
        //execute command
        if(item.command) {
            if(!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }

        //prevent hash change
        if(item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        
        //hide menu
        if(!item.items) {
            if(this.app.isHorizontal())
                this.app.resetMenu = true;
            else
                this.app.resetMenu = false;
                
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
        }
    }
    
    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val:boolean) {
        this._reset = val;

        if(this._reset && this.app.isHorizontal()) {
            this.activeIndex = null;
        }
    }
}
