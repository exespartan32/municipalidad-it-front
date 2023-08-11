import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { DetailsApplicantComponent } from './pages/details-applicant/details-applicant.component';
import { DetailsCompanyComponent } from './pages/details-company/details-company.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ChangeTheStatusPipe } from './pipes/change-the-status.pipe';
import { StatusPipe } from './pipes/status.pipe';



@NgModule({
  declarations: [
    DashboardAdminComponent,
    ApplicantsComponent,
    CompaniesComponent,
    StatisticsComponent,
    HomeComponent,
    TableComponent,
    DetailsApplicantComponent,
    DetailsCompanyComponent,
    ConfirmDialogComponent,
    ChangeTheStatusPipe,
    StatusPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class AdminModule { }
