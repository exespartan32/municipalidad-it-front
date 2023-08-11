import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', //TODO: localHost:4200/auth
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin', //TODO: localHost:4200/admin
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'company', //TODO: localHost:4200/company
    loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'applicant', //TODO: localHost:4200/applicant
    loadChildren: () => import('./modules/applicant/applicant.module').then(m => m.ApplicantModule)
  },
  {
    path: '**', //TODO: No existe te envio a la ruta arriba login
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
