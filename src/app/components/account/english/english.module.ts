import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { EnglishRoutingModule } from './english-routing.module';

import { SampletestEnglishComponent } from './sampletest/sampletest-english.component'
import { ResultEnglishComponent } from './result/result-english.component';
import { MocktestEnglishComponent } from './mocktest/mocktest-english.component';
import { DemotestEnglishComponent } from './demotest/demotest-english.component';
import { ChapterwisetestEnglishComponent } from './chapterwisetest/chapterwisetest-english.component';
@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    EnglishRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestEnglishComponent,
    ResultEnglishComponent,
    MocktestEnglishComponent,
    DemotestEnglishComponent,
    ChapterwisetestEnglishComponent
  ],
  providers: [
],
})
export class EnglishModule { }
