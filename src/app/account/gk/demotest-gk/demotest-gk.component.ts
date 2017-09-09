import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { TreeModule, TreeNode } from 'primeng/primeng';
import { SubjectInfo, Misc } from '../../../services/data.service';

@Component({
  selector: 'app-demotest-gk',
  templateUrl: './demotest-gk.component.html',
  styleUrls: ['./demotest-gk.component.scss']
})
export class DemotestGkComponent implements OnInit {


    //for donut chart
    demoTestData: any;
    options: any;

    //temporary
    dummyTopics: Array<string>;
    dummyChapters: Array<string>;

    syllabus: any;

    constructor(
        public router: Router,
        public subjectInfo: SubjectInfo,
        public misc: Misc) { }


    takedemotest() {
        this.router.navigate(['demotest']);
    }

    ngOnInit() {
        this.misc.setCurrentRoute(["General-Knowledge","Demo Test"]);
        this.misc.setLocalRoute('account/gk/demotest');
        this.demoTestData = {
            labels: ['Remaining'],
            datasets: [{ data: [1], backgroundColor: ["#D9534F"], hoverBackgroundColor: ["#D9534F"] }]
        };

        if (this.subjectInfo.attemptedDemo['gk']) {
            this.demoTestData['labels'] = ['Completed'];
            this.demoTestData['datasets'] = [{ data: [1], backgroundColor: ['#5CB85C'], hoverBackgroundColor: ["#5CB85C"] }]
        }
    }
}
