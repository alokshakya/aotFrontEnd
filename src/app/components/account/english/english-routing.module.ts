import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampletestEnglishComponent } from './sampletest/sampletest-english.component'
import { ResultEnglishComponent } from './result/result-english.component';
import { MocktestEnglishComponent } from './mocktest/mocktest-english.component';
import { DemotestEnglishComponent } from './demotest/demotest-english.component';
import { ChapterwisetestEnglishComponent } from './chapterwisetest/chapterwisetest-english.component';

const routes: Routes = [
  {path:'demotest', component: DemotestEnglishComponent},
  {path:'chapterwisetest', component: ChapterwisetestEnglishComponent},
  {path:'sampletest', component: SampletestEnglishComponent},
  {path:'mocktest', component: MocktestEnglishComponent},
  {path:'result', component: ResultEnglishComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }