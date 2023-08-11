import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardApplicantComponent } from './pages/dashboard-applicant/dashboard-applicant.component';
import { HomeApplicantComponent } from './pages/home-applicant/home-applicant.component';
import { OffersApplicantComponent } from './pages/offers-applicant/offers-applicant.component';
import { MyProfileApplicantComponent } from './pages/my-profile-applicant/my-profile-applicant.component';

const routes: Routes = [
  {
  path: '',
  component: DashboardApplicantComponent,
  
  children: [
    { path: 'inicio', component: HomeApplicantComponent },
    { path: 'ofertas', component: OffersApplicantComponent },
    { path: 'configuracion', component: MyProfileApplicantComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
