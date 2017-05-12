import { Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AccountMainComponent } from './main.component';
import { SubjectService } from '../../services/subject.service';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu clearfix" [reset]="reset" visible="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    menuTabs:any;

    model: MenuItem[];

    constructor(
        @Inject(forwardRef(() => AccountMainComponent))
        public app:AccountMainComponent,
        private subjectSet: SubjectService 
        )
        {

        this.menuTabs =[
                        {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['dashboard']},
                        {label: 'Account Settings',icon: 'fa fa-pencil-square-o',routerLink: ['accountsettings']},
                        {label: '',icon: 'icon-cyber',
                            items: [{
                                        label: 'Demo Test',
                                        icon: 'fa fa-circle-o',
                                        routerLink: ['computer/demotest']
                                    },
                                    {
                                        label: 'Chapterwise Test',
                                        icon: 'fa fa-circle-o',
                                        routerLink: ['computer/chapterwisetest']
                                    },
                                    {
                                        label: 'Sample Test',
                                        icon: 'fa fa-circle-o',
                                        routerLink: ['computer/sampletest']
                                    },
                                    {
                                        label: 'Mock Test',
                                        icon: 'fa fa-circle-o',
                                        routerLink: ['computer/mocktest']
                                    },
                                    {
                                        label: 'Result',
                                        icon: 'fa fa-calculator',
                                        routerLink: ['computer/result']
                                    }
                                    ]},
                        {label: '',icon: 'icon-science',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['/']
                                },
                            ]}, 
                        {label: '',icon: 'icon-maths',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['/']
                                },
                            ]},
                        {label: '',icon: 'icon-gk',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['/']
                                },
                            ]},
                        {label: '',icon: 'icon-english',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculaor',
                                    routerLink: ['/']
                                },
                            ]},
                        {label: '',icon: 'icon-reasoning',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle-o',
                                    routerLink: ['/']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['/']
                                }
                            ]}
                       ]
    }
    
    ngOnInit() {
        this.model = []
        this.subjectSet.getSubjectSet(1).subscribe((data:Response) =>{
            data = data['resource'];
            var k = 2;
            for(let i in data){
                this.menuTabs[k]['label'] = data[i]['subjects_by_subject_id']['name'];
                k++;
            }
            for (let j in this.menuTabs){
                this.model.push(this.menuTabs[j])
            }
        })
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

    constructor(@Inject(forwardRef(() => AccountMainComponent)) public app:AccountMainComponent, public router: Router, public location: Location) {}
        
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
