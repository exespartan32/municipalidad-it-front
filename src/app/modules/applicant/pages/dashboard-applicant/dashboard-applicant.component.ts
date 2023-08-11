import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Menu } from 'src/app/modules/admin/interfaces/menu.inteface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-applicant',
  templateUrl: './dashboard-applicant.component.html',
  styleUrls: ['./dashboard-applicant.component.css']
})
export class DashboardApplicantComponent {
  menu: Menu[];
  perfil: string = 'Profesional TI';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.menu = [
      { name: 'Inicio', icon: 'home', link: 'inicio' },
      { name: 'Ver Ofertas', icon: 'business_center', link: 'ofertas' },
      { name: 'Perfil', icon: 'settings', link: 'configuracion' },
    ];
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   

}
