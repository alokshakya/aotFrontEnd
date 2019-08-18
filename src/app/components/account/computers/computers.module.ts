import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { ComputersRoutingModule } from './computers-routing.module';

import { SampletestComputersComponent } from './sampletest/sampletest-computers.component';
import { ResultComputersComponent } from './result/result-computers.component';
import { MocktestComputersComponent } from './mocktest/mocktest-computers.component';
import { DemotestComputersComponent } from './demotest/demotest-computers.component';
import { ChapterwisetestComputersComponent } from './chapterwisetest/chapterwisetest-computers.component';
@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    ComputersRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    SampletestComputersComponent,
    ResultComputersComponent,
    MocktestComputersComponent,
    DemotestComputersComponent,
    ChapterwisetestComputersComponent
  ],
  providers: [
],
})
export class ComputersModule { }
