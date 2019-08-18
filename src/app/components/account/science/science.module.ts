import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { ScienceRoutingModule } from './science-routing.module';

import { SampletestScienceComponent } from './sampletest/sampletest-science.component';
import { ResultScienceComponent } from './result/result-science.component';
import { MocktestScienceComponent } from './mocktest/mocktest-science.component';
import { DemotestScienceComponent } from './demotest/demotest-science.component';
import { ChapterwisetestScienceComponent } from './chapterwisetest/chapterwisetest-science.component';


@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    ScienceRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestScienceComponent,
    ResultScienceComponent,
    MocktestScienceComponent,
    DemotestScienceComponent,
    ChapterwisetestScienceComponent
  ],
  providers: [
],
})
export class ScienceModule { }
