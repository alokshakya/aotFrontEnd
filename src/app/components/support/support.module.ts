import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../app-prime-ng/app-prime-ng.module';

import { SupportRoutingModule } from './support-routing.module';

import { ViewticketComponent } from './viewticket/viewticket.component';
import {CreateticketComponent } from './createticket/createticket.component';


@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    SupportRoutingModule,
  ],
  declarations: [
    ViewticketComponent,
    CreateticketComponent
  ]
})
export class SupportModule { }
