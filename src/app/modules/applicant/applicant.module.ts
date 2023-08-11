import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { DashboardApplicantComponent } from './pages/dashboard-applicant/dashboard-applicant.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { HomeApplicantComponent } from './pages/home-applicant/home-applicant.component';
import { OffersApplicantComponent } from './pages/offers-applicant/offers-applicant.component';
import { MyProfileApplicantComponent } from './pages/my-profile-applicant/my-profile-applicant.component';


@NgModule({
  declarations: [
    DashboardApplicantComponent,
    HomeApplicantComponent,
    OffersApplicantComponent,
    MyProfileApplicantComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ApplicantModule { }
