import { Component, OnInit } from '@angular/core';

import {MenuModule,MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-sampletest1',
  templateUrl: './sampletest1.component.html',
  styleUrls: ['./sampletest1.component.scss']
})
export class Sampletest1Component {
    
    answers = {"question1":""};
    question1:boolean=true;
    question2:boolean=false;
    question3:boolean=false;

    ngOnInit() {
    }
}
