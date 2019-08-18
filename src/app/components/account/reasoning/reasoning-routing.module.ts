import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletestReasoningComponent } from './sampletest/sampletest-reasoning.component';
import { ResultReasoningComponent } from './result/result-reasoning.component';
import { MocktestReasoningComponent } from './mocktest/mocktest-reasoning.component';
import { DemotestReasoningComponent } from './demotest/demotest-reasoning.component';
import { ChapterwisetestReasoningComponent } from './chapterwisetest/chapterwisetest-reasoning.component';

const routes: Routes = [
  {path:'demotest', component: DemotestReasoningComponent},
  {path:'chapterwisetest', component: ChapterwisetestReasoningComponent},
  {path:'sampletest', component: SampletestReasoningComponent},
  {path:'mocktest', component: MocktestReasoningComponent},
  {path:'result', component: ResultReasoningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasoningRoutingModule { }