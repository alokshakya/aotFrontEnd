import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletestGkComponent } from './sampletest/sampletest-gk.component';
import { ResultGkComponent } from './result/result-gk.component';
import { MocktestGkComponent } from './mocktest/mocktest-gk.component';
import { DemotestGkComponent } from './demotest/demotest-gk.component';
import { ChapterwisetestGkComponent } from './chapterwisetest/chapterwisetest-gk.component';

const routes: Routes = [
  {path:'demotest', component: DemotestGkComponent},
  {path:'chapterwisetest', component: ChapterwisetestGkComponent},
  {path:'sampletest', component: SampletestGkComponent},
  {path:'mocktest', component: MocktestGkComponent},
  {path:'result', component: ResultGkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GkRoutingModule { }