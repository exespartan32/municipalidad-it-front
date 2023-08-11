import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu.inteface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  menu: Menu[];
  perfil: string = 'municipalidad';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.menu = [
      { name: 'Inicio', icon: 'home', link: 'home' },
      { name: 'Profesionales TI', icon: 'code_blocks', link: 'applicants' },
      { name: 'Compañías', icon: 'apartment', link: 'companies' },
      { name: 'Estadísticas', icon: 'bar_chart_4_bars', link: 'statistics' },
    ];
  }
  
  ngOnInit(): void {
 

  }






}
