import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { ReasoningRoutingModule } from './reasoning-routing.module';

import { SampletestReasoningComponent } from './sampletest/sampletest-reasoning.component';
import { ResultReasoningComponent } from './result/result-reasoning.component';
import { MocktestReasoningComponent } from './mocktest/mocktest-reasoning.component';
import { DemotestReasoningComponent } from './demotest/demotest-reasoning.component';
import { ChapterwisetestReasoningComponent } from './chapterwisetest/chapterwisetest-reasoning.component';

@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    ReasoningRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestReasoningComponent,
    ResultReasoningComponent,
    MocktestReasoningComponent,
    DemotestReasoningComponent,
    ChapterwisetestReasoningComponent
  ],
  providers: [
],
})
export class ReasoningModule { }
