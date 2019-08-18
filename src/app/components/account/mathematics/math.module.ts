import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { MathRoutingModule } from './math-routing.module';

import { SampletestMathComponent } from './sampletest/sampletest-math.component';
import { ResultMathComponent } from './result/result-math.component';
import { MocktestMathComponent } from './mocktest/mocktest-math.component';
import { DemotestMathComponent } from './demotest/demotest-math.component';
import { ChapterwisetestMathComponent } from './chapterwisetest/chapterwisetest-math.component';

@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    MathRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestMathComponent,
    ResultMathComponent,
    MocktestMathComponent,
    DemotestMathComponent,
    ChapterwisetestMathComponent
  ],
  providers: [
],
})
export class MathModule { }
