import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';


@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    SubscribeRoutingModule,
  ],
  declarations: [
    SubscribeComponent
  ]
})
export class SubscribeModule { }
