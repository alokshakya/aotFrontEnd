import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletestScienceComponent } from './sampletest/sampletest-science.component';
import { ResultScienceComponent } from './result/result-science.component';
import { MocktestScienceComponent } from './mocktest/mocktest-science.component';
import { DemotestScienceComponent } from './demotest/demotest-science.component';
import { ChapterwisetestScienceComponent } from './chapterwisetest/chapterwisetest-science.component';


const routes: Routes = [
  {path:'demotest', component: DemotestScienceComponent},
  {path:'chapterwisetest', component: ChapterwisetestScienceComponent},
  {path:'sampletest', component: SampletestScienceComponent},
  {path:'mocktest', component: MocktestScienceComponent},
  {path:'result', component: ResultScienceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScienceRoutingModule { }