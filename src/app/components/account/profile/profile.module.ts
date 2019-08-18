import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedComponentsModule } from '.././../../shared-components/shared-components.module';
import { AppPrimeNgModule } from '../../../app-prime-ng/app-prime-ng.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    CommonModule,
    AppPrimeNgModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
