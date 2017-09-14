import { AccountMainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
//computer-cyber
import { DemotestComponent } from './ComputerCyber/demotest/demotest.component';
import { ChapterwisetestComponent } from './ComputerCyber/chapterwisetest/chapterwisetest.component';
import { SampletestComponent } from './ComputerCyber/sampletest/sampletest.component';
import { MocktestComponent } from './ComputerCyber/mocktest/mocktest.component';
import { ResultComponent } from './ComputerCyber/result/result.component';
import { DemotestEnglishComponent } from './english/demotest-english/demotest-english.component';
import { ChapterwisetestEnglishComponent } from './english/chapterwisetest-english/chapterwisetest-english.component';
import { SampletestEnglishComponent } from './english/sampletest-english/sampletest-english.component';
import { MocktestEnglishComponent } from './english/mocktest-english/mocktest-english.component';
import { ResultEnglishComponent } from './english/result-english/result-english.component';
import { ChapterwisetestScienceComponent } from './science/chapterwisetest-science/chapterwisetest-science.component';
import { DemotestScienceComponent } from './science/demotest-science/demotest-science.component';
import { MocktestScienceComponent } from './science/mocktest-science/mocktest-science.component';
import { SampletestScienceComponent } from './science/sampletest-science/sampletest-science.component';
import { ResultScienceComponent } from './science/result-science/result-science.component';
import { ChapterwisetestMathComponent } from './mathematics/chapterwisetest-math/chapterwisetest-math.component';
import { DemotestMathComponent } from './mathematics/demotest-math/demotest-math.component';
import { MocktestMathComponent } from './mathematics/mocktest-math/mocktest-math.component';
import { ResultMathComponent } from './mathematics/result-math/result-math.component';
import { SampletestMathComponent } from './mathematics/sampletest-math/sampletest-math.component';
import { ChapterwisetestGkComponent } from './gk/chapterwisetest-gk/chapterwisetest-gk.component';
import { DemotestGkComponent } from './gk/demotest-gk/demotest-gk.component';
import { MocktestGkComponent } from './gk/mocktest-gk/mocktest-gk.component';
import { ResultGkComponent } from './gk/result-gk/result-gk.component';
import { SampletestGkComponent } from './gk/sampletest-gk/sampletest-gk.component';
import { ChapterwisetestReasoningComponent } from './reasoning/chapterwisetest-reasoning/chapterwisetest-reasoning.component';
import { DemotestReasoningComponent } from './reasoning/demotest-reasoning/demotest-reasoning.component';
import { MocktestReasoningComponent } from './reasoning/mocktest-reasoning/mocktest-reasoning.component';
import { ResultReasoningComponent } from './reasoning/result-reasoning/result-reasoning.component';
import { SampletestReasoningComponent } from './reasoning/sampletest-reasoning/sampletest-reasoning.component';
import { TakedemotestComponent } from './ComputerCyber/demotest/takedemotest/takedemotest.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadoutComponent } from './loadout/loadout.component';
import { AccountGuard, TestAccountGuard, TestDeactivate } from './account.guard';
export var AccountRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'test', component: TakedemotestComponent, canDeactivate: [TestDeactivate], canActivate: [AccountGuard, TestAccountGuard] },
    { path: 'loadout', component: LoadoutComponent, canActivate: [AccountGuard] },
    {
        path: 'account', component: AccountMainComponent, canActivate: [AccountGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, },
            { path: 'accountsettings', component: AccountsettingsComponent },
            { path: 'computers/demotest', component: DemotestComponent },
            { path: 'computers/chapterwisetest', component: ChapterwisetestComponent },
            { path: 'computers/sampletest', component: SampletestComponent },
            { path: 'computers/mocktest', component: MocktestComponent },
            { path: 'computers/result', component: ResultComponent },
            { path: 'english/demotest', component: DemotestEnglishComponent },
            { path: 'english/chapterwisetest', component: ChapterwisetestEnglishComponent },
            { path: 'english/sampletest', component: SampletestEnglishComponent },
            { path: 'english/mocktest', component: MocktestEnglishComponent },
            { path: 'english/result', component: ResultEnglishComponent },
            { path: 'science/demotest', component: DemotestScienceComponent },
            { path: 'science/chapterwisetest', component: ChapterwisetestScienceComponent },
            { path: 'science/sampletest', component: SampletestScienceComponent },
            { path: 'science/mocktest', component: MocktestScienceComponent },
            { path: 'science/result', component: ResultScienceComponent },
            { path: 'math/demotest', component: DemotestMathComponent },
            { path: 'math/chapterwisetest', component: ChapterwisetestMathComponent },
            { path: 'math/sampletest', component: SampletestMathComponent },
            { path: 'math/mocktest', component: MocktestMathComponent },
            { path: 'math/result', component: ResultMathComponent },
            { path: 'gk/demotest', component: DemotestGkComponent },
            { path: 'gk/chapterwisetest', component: ChapterwisetestGkComponent },
            { path: 'gk/sampletest', component: SampletestGkComponent },
            { path: 'gk/mocktest', component: MocktestGkComponent },
            { path: 'gk/result', component: ResultGkComponent },
            { path: 'reasoning/demotest', component: DemotestReasoningComponent },
            { path: 'reasoning/chapterwisetest', component: ChapterwisetestReasoningComponent },
            { path: 'reasoning/sampletest', component: SampletestReasoningComponent },
            { path: 'reasoning/mocktest', component: MocktestReasoningComponent },
            { path: 'reasoning/result', component: ResultReasoningComponent },
            { path: 'profile', component: ProfileComponent, canDeactivate: [TestDeactivate] }
        ],
    }
];
//# sourceMappingURL=C:/Users/Gaurav/Desktop/ob-development/fronty/src/app/account/account.routes.js.map