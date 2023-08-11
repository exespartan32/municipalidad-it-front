import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Menu } from 'src/app/modules/admin/interfaces/menu.inteface';

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.css']
})
export class DashboardCompanyComponent {
  menu: Menu[];
  perfil: string = 'Empresa';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.menu = [
      { name: 'Inicio', icon: 'home', link: 'inicio' },
      { name: 'Profesionales TI', icon: 'code_blocks', link: 'perfiles' },
      { name: 'Mis Ofertas', icon: 'business_center', link: 'mis-ofertas' },
      { name: 'Perfil', icon: 'settings', link: 'configuracion' },
    ];
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


}
