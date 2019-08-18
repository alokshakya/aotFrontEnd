import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewticketComponent } from './viewticket/viewticket.component';
import {CreateticketComponent } from './createticket/createticket.component';

const routes: Routes = [
  {path:'createticket', component: CreateticketComponent},
  {path:'viewticket', component:ViewticketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }