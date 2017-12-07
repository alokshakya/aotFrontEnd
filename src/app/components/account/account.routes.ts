import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountMainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component'
import { SubscribeComponent } from './subscribe/subscribe.component'

//Computers
import { DemotestComputersComponent } from './computers/demotest/demotest-computers.component'
import { ChapterwisetestComputersComponent } from './computers/chapterwisetest/chapterwisetest-computers.component'
import { SampletestComputersComponent } from './computers/sampletest/sampletest-computers.component';
import { MocktestComputersComponent } from './computers/mocktest/mocktest-computers.component';
import { ResultComputersComponent } from './computers/result/result-computers.component';

import { DemotestEnglishComponent } from './english/demotest/demotest-english.component';
import { ChapterwisetestEnglishComponent } from './english/chapterwisetest/chapterwisetest-english.component';
import { SampletestEnglishComponent } from './english/sampletest/sampletest-english.component';
import { MocktestEnglishComponent } from './english/mocktest/mocktest-english.component';
import { ResultEnglishComponent } from './english/result/result-english.component';

import { ChapterwisetestScienceComponent } from './science/chapterwisetest/chapterwisetest-science.component';
import { DemotestScienceComponent } from './science/demotest/demotest-science.component';
import { MocktestScienceComponent } from './science/mocktest/mocktest-science.component';
import { SampletestScienceComponent } from './science/sampletest/sampletest-science.component';
import { ResultScienceComponent } from './science/result/result-science.component';

import { ChapterwisetestMathComponent } from './mathematics/chapterwisetest/chapterwisetest-math.component';
import { DemotestMathComponent } from './mathematics/demotest/demotest-math.component';
import { MocktestMathComponent } from './mathematics/mocktest/mocktest-math.component';
import { ResultMathComponent } from './mathematics/result/result-math.component';
import { SampletestMathComponent } from './mathematics/sampletest/sampletest-math.component';

import { ChapterwisetestGkComponent } from './gk/chapterwisetest/chapterwisetest-gk.component';
import { DemotestGkComponent } from './gk/demotest/demotest-gk.component';
import { MocktestGkComponent } from './gk/mocktest/mocktest-gk.component';
import { ResultGkComponent } from './gk/result/result-gk.component';
import { SampletestGkComponent } from './gk/sampletest/sampletest-gk.component';

import { ChapterwisetestReasoningComponent } from './reasoning/chapterwisetest/chapterwisetest-reasoning.component';
import { DemotestReasoningComponent } from './reasoning/demotest/demotest-reasoning.component';
import { MocktestReasoningComponent } from './reasoning/mocktest/mocktest-reasoning.component';
import { ResultReasoningComponent } from './reasoning/result/result-reasoning.component';
import { SampletestReasoningComponent } from './reasoning/sampletest/sampletest-reasoning.component';

import { TestComponent } from '../test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadoutComponent } from './loadout/loadout.component';

import { AccountGuard, TestAccountGuard, TestDeactivate, verifiedGuard } from './account.guard';

export const AccountRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'test', component: TestComponent, canDeactivate:[TestDeactivate] ,canActivate:[AccountGuard, TestAccountGuard]},
    { path: 'loadout', component: LoadoutComponent, canActivate: [AccountGuard]},
    {
        path: 'account', component: AccountMainComponent, canActivate:[AccountGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, },
            { path: 'subscribe', component: SubscribeComponent, canActivate:[verifiedGuard] },
            
            { path: 'computers/demotest', component: DemotestComputersComponent, canActivate:[verifiedGuard] },
            { path: 'computers/chapterwisetest', component: ChapterwisetestComputersComponent, canActivate:[verifiedGuard] },
            { path: 'computers/sampletest', component: SampletestComputersComponent, canActivate:[verifiedGuard] },
            { path: 'computers/mocktest', component: MocktestComputersComponent, canActivate:[verifiedGuard] },
            { path: 'computers/result', component: ResultComputersComponent, canActivate:[verifiedGuard] },
            
            { path: 'english/demotest', component: DemotestEnglishComponent, canActivate:[verifiedGuard] },
            { path: 'english/chapterwisetest', component: ChapterwisetestEnglishComponent, canActivate:[verifiedGuard] },
            { path: 'english/sampletest', component: SampletestEnglishComponent, canActivate:[verifiedGuard] },
            { path: 'english/mocktest', component: MocktestEnglishComponent, canActivate:[verifiedGuard] },
            { path: 'english/result', component: ResultEnglishComponent, canActivate:[verifiedGuard] },

            { path: 'science/demotest', component: DemotestScienceComponent, canActivate:[verifiedGuard] },
            { path: 'science/chapterwisetest', component: ChapterwisetestScienceComponent, canActivate:[verifiedGuard] },
            { path: 'science/sampletest', component: SampletestScienceComponent, canActivate:[verifiedGuard] },
            { path: 'science/mocktest', component: MocktestScienceComponent, canActivate:[verifiedGuard] },
            { path: 'science/result', component: ResultScienceComponent, canActivate:[verifiedGuard] },

            { path: 'math/demotest', component: DemotestMathComponent, canActivate:[verifiedGuard] },
            { path: 'math/chapterwisetest', component: ChapterwisetestMathComponent, canActivate:[verifiedGuard] },
            { path: 'math/sampletest', component: SampletestMathComponent, canActivate:[verifiedGuard] },
            { path: 'math/mocktest', component: MocktestMathComponent, canActivate:[verifiedGuard] },
            { path: 'math/result', component: ResultMathComponent, canActivate:[verifiedGuard] },

            { path: 'gk/demotest', component: DemotestGkComponent, canActivate:[verifiedGuard] },
            { path: 'gk/chapterwisetest', component: ChapterwisetestGkComponent, canActivate:[verifiedGuard] },
            { path: 'gk/sampletest', component: SampletestGkComponent, canActivate:[verifiedGuard] },
            { path: 'gk/mocktest', component: MocktestGkComponent, canActivate:[verifiedGuard] },
            { path: 'gk/result', component: ResultGkComponent, canActivate:[verifiedGuard] },

            { path: 'reasoning/demotest', component: DemotestReasoningComponent, canActivate:[verifiedGuard] },
            { path: 'reasoning/chapterwisetest', component: ChapterwisetestReasoningComponent, canActivate:[verifiedGuard] },
            { path: 'reasoning/sampletest', component: SampletestReasoningComponent, canActivate:[verifiedGuard] },
            { path: 'reasoning/mocktest', component: MocktestReasoningComponent, canActivate:[verifiedGuard] },
            { path: 'reasoning/result', component: ResultReasoningComponent, canActivate:[verifiedGuard] },
            
            { path: 'profile', component: ProfileComponent, canActivate:[verifiedGuard],canDeactivate:[TestDeactivate]}
        ],
    }
];





