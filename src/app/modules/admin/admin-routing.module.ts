import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsApplicantComponent } from './pages/details-applicant/details-applicant.component';
import { DetailsCompanyComponent } from './pages/details-company/details-company.component';

const routes: Routes = [{
  path: '',
  component: DashboardAdminComponent,
  
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'applicants', component: ApplicantsComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ],
},
{ path: 'applicants/:name', component: DetailsApplicantComponent },
{ path: 'company/:name', component: DetailsCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
