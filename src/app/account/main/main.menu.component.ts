import { Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AccountMainComponent } from './main.component';
import { SubjectService } from '../../services/subject.service';
import { MasterHttpService } from '../../services/masterhttp.service';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="temporaryModel" root="true" class="layout-menu clearfix" [reset]="reset" visible="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    menuTabs:any;

    model: MenuItem[];

    //temporary
    temporaryModel: MenuItem[];

    constructor(
        @Inject(forwardRef(() => AccountMainComponent))
        public app:AccountMainComponent,
        private subjectSet: SubjectService,
        private masterhttp: MasterHttpService,
        )
        {

        this.menuTabs =[
                        {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['dashboard']},
                        {label: 'Account Settings',icon: 'fa fa-pencil-square-o',routerLink: ['accountsettings']},
                        {label: '',icon: 'icon-cyber',
                            items: [{
                                        label: 'Demo Test',
                                        icon: 'fa fa-circle',
                                        routerLink: ['computers/demotest']
                                    },
                                    {
                                        label: 'Chapterwise Test',
                                        icon: 'fa fa-circle',
                                        routerLink: ['computers/chapterwisetest']
                                    },
                                    {
                                        label: 'Sample Test',
                                        icon: 'fa fa-circle',
                                        routerLink: ['computers/sampletest']
                                    },
                                    {
                                        label: 'Mock Test',
                                        icon: 'fa fa-circle',
                                        routerLink: ['computers/mocktest']
                                    },
                                    {
                                        label: 'Result',
                                        icon: 'fa fa-calculator',
                                        routerLink: ['computers/result']
                                    }
                                    ]},
                        {label: '',icon: 'icon-science',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['science/demotest']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['science/chapterwisetest']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['science/sampletest']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['science/mocktest']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['science/result']
                                },
                            ]}, 
                        {label: '',icon: 'icon-maths',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['mathematics/demotest']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['mathematics/chapterwisetest']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['mathematics/sampletest']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['mathematics/mocktest']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['mathematics/result']
                                },
                            ]},
                        {label: '',icon: 'icon-gk',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['gk/demotest']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['gk/chapterwisetest']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['gk/sampletest']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['gk/mocktest']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['gk/result']
                                },
                            ]},
                        {label: '',icon: 'icon-english',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['english/demotest']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['english/chapterwisetest']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['english/sampletest']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['english/mocktest']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculaor',
                                    routerLink: ['english/result']
                                },
                            ]},
                        {label: '',icon: 'icon-reasoning',
                            items: [{
                                    label: 'Demo Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['reasoning/demotest']
                                },
                                {
                                    label: 'Chapterwise Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['reasoning/chapterwisetest']
                                },
                                {
                                    label: 'Sample Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['reasoning/sampletest']
                                },
                                {
                                    label: 'Mock Test',
                                    icon: 'fa fa-circle',
                                    routerLink: ['reasoning/mocktest']
                                },
                                {
                                    label: 'Result',
                                    icon: 'fa fa-calculator',
                                    routerLink: ['reasoning/result']
                                }
                            ]}
                       ]
    }
    
    ngOnInit() {
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
        this.temporaryModel = [];
        this.masterhttp.getSubjects().subscribe((data: Response) => {
            var l = 2;
            for(let i in data['subjects']['records']){
                this.menuTabs[l]['label'] = data['subjects']['records'][i][1];
                l++;
            }

            for (let m in this.menuTabs){
                this.temporaryModel.push(this.menuTabs[m])
            }
        })
        

        }           

    }    
 

@Component({
    selector: '[app-submenu]',
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
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
        </ng-template>
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
