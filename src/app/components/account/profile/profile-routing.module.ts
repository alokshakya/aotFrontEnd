import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

import { TestDeactivate } from '../account.guard';

const routes: Routes = [
  {path:'', component: ProfileComponent, canDeactivate: [TestDeactivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }