import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemotestComputersComponent } from './demotest/demotest-computers.component';
import { ChapterwisetestComputersComponent } from './chapterwisetest/chapterwisetest-computers.component';
import { SampletestComputersComponent } from './sampletest/sampletest-computers.component';
import { MocktestComputersComponent } from './mocktest/mocktest-computers.component';
import { ResultComputersComponent } from './result/result-computers.component';

const routes: Routes = [
  {path:'demotest', component: DemotestComputersComponent},
  {path:'chapterwisetest', component: ChapterwisetestComputersComponent},
  {path:'sampletest', component: SampletestComputersComponent},
  {path:'mocktest', component: MocktestComputersComponent},
  {path:'result', component: ResultComputersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputersRoutingModule { }