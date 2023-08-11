import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCompanyComponent } from './pages/dashboard-company/dashboard-company.component';
import { HomeCompanyComponent } from './pages/home-company/home-company.component';
import { ApplicantsCompanyComponent } from './pages/applicants-company/applicants-company.component';
import { MyOffersCompanyComponent } from './pages/my-offers-company/my-offers-company.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCompanyComponent,
    children: [
      { path: 'inicio', component: HomeCompanyComponent },
      { path: 'perfiles', component: ApplicantsCompanyComponent },
      { path: 'mis-ofertas', component: MyOffersCompanyComponent },
      { path: 'configuracion', component: MyOffersCompanyComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
