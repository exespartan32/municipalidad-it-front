import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { DashboardCompanyComponent } from './pages/dashboard-company/dashboard-company.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeCompanyComponent } from './pages/home-company/home-company.component';
import { ApplicantsCompanyComponent } from './pages/applicants-company/applicants-company.component';
import { MyProfileCompanyComponent } from './pages/my-profile-company/my-profile-company.component';
import { MyOffersCompanyComponent } from './pages/my-offers-company/my-offers-company.component';


@NgModule({
  declarations: [
    DashboardCompanyComponent,
    HomeCompanyComponent,
    ApplicantsCompanyComponent,
    MyProfileCompanyComponent,
    MyOffersCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class CompanyModule { }
