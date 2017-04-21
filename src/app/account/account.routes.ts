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
import { ProfileComponent } from './profile/profile.component';


export const AccountRoutes: Routes = [
  { path : '', redirectTo : '/login', pathMatch : 'full'},
  { path : 'account', component : AccountMainComponent},
  { path: 'dashboard', component: DashboardComponent },
    { path: 'accountsettings', component: AccountsettingsComponent },
    { path: 'computer/demotest', component: DemotestComponent }, 
    { path: 'computer/chapterwisetest', component: ChapterwisetestComponent },           
    { path: 'computer/sampletest', component: SampletestComponent },
    { path: 'computer/mocktest', component: MocktestComponent },
    { path: 'computer/result', component: ResultComponent },
    { path: 'profile' , component: ProfileComponent }
    
  
];






   