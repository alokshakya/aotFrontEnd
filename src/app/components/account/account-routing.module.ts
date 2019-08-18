import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AccountGuard, TestAccountGuard, TestDeactivate} from './account.guard';

const routes: Routes = [

  {path:'', component: AccountMainComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, },
    { path: 'subscribe', loadChildren: './subscribe/subscribe.module#SubscribeModule' },

    {path:'computers', loadChildren:'./computers/computers.module#ComputersModule'},
    
    {path: 'english', loadChildren: './english/english.module#EnglishModule'},

    
    {path:'science', loadChildren:'./science/science.module#ScienceModule'},

    {path:'math', loadChildren:'./mathematics/math.module#MathModule'},

    {path:'gk', loadChildren:'./gk/gk.module#GkModule'},

    {path:'reasoning', loadChildren:'./reasoning/reasoning.module#ReasoningModule'},
    
    
    {path:'profile', loadChildren:'./profile/profile.module#ProfileModule'},

    {path:'support', loadChildren: '../support/support.module#SupportModule'},

    {path:'', redirectTo:'dashboard', pathMatch:'full'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }