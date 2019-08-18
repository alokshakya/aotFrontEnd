import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { GkRoutingModule } from './gk-routing.module';

import { SampletestGkComponent } from './sampletest/sampletest-gk.component';
import { ResultGkComponent } from './result/result-gk.component';
import { MocktestGkComponent } from './mocktest/mocktest-gk.component';
import { DemotestGkComponent } from './demotest/demotest-gk.component';
import { ChapterwisetestGkComponent } from './chapterwisetest/chapterwisetest-gk.component';
@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    GkRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestGkComponent,
    ResultGkComponent,
    MocktestGkComponent,
    DemotestGkComponent,
    ChapterwisetestGkComponent
  ],
  providers: [
],
})
export class GkModule { }
