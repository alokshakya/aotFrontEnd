import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletestMathComponent } from './sampletest/sampletest-math.component';
import { ResultMathComponent } from './result/result-math.component';
import { MocktestMathComponent } from './mocktest/mocktest-math.component';
import { DemotestMathComponent } from './demotest/demotest-math.component';
import { ChapterwisetestMathComponent } from './chapterwisetest/chapterwisetest-math.component';

const routes: Routes = [
  {path:'demotest', component: DemotestMathComponent},
  {path:'chapterwisetest', component: ChapterwisetestMathComponent},
  {path:'sampletest', component: SampletestMathComponent},
  {path:'mocktest', component: MocktestMathComponent},
  {path:'result', component: ResultMathComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }