import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AccountMainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component'
import { AccountsettingsComponent } from './accountsettings/accountsettings.component'
import { DemotestComponent } from './ComputerCyber/demotest/demotest.component'
import { ChapterwisetestComponent } from './ComputerCyber/chapterwisetest/chapterwisetest.component'
import { SampletestComponent } from './ComputerCyber/sampletest/sampletest.component';
import { MocktestComponent } from './ComputerCyber/mocktest/mocktest.component';
import { ResultComponent } from './ComputerCyber/result/result.component';
import { TakedemotestComponent } from './ComputerCyber/demotest/takedemotest/takedemotest.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadoutComponent } from './loadout/loadout.component'

import { AccountGuard, TestAccountGuard, TestDeactivate } from './account.guard';

export const AccountRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'test', component: TakedemotestComponent, canDeactivate:[TestDeactivate] ,canActivate:[AccountGuard, TestAccountGuard]},
    { path: 'loadout', component: LoadoutComponent, canActivate: [AccountGuard]},
    {
        path: 'account', component: AccountMainComponent, canActivate:[AccountGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, },
            { path: 'accountsettings', component: AccountsettingsComponent },
            { path: 'computers/demotest', component: DemotestComponent },
            { path: 'computers/chapterwisetest', component: ChapterwisetestComponent },
            { path: 'computers/sampletest', component: SampletestComponent },
            { path: 'computers/mocktest', component: MocktestComponent },
            { path: 'computers/result', component: ResultComponent },
            { path: 'profile', component: ProfileComponent, canDeactivate:[TestDeactivate]}
        ],
    }
];





