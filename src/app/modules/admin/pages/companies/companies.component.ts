import { Component } from '@angular/core';
import { User } from '../../interfaces/user.intefaces';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { CompaniesService } from '../../services/companie.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  title: string [] = ['index', 'name', 'email', 'cuil','state', 'shares'];
  data!: MatTableDataSource<User>;
  totalElements!: number;
  pageSize!: number;
  pageIndex!: number;


  constructor(
    private companiesService: CompaniesService,
    private dialog: MatDialog
    ){
  }
  ngOnInit() {

    this.pageIndex = 0;
    this.pageSize = 5;
    this.loadData();
  }

  loadData() {
    this.companiesService.allCompanies(this.pageIndex, this.pageSize).subscribe(response => {
      this.data = new MatTableDataSource<User>(response.content);
      this.totalElements = response.totalElements;
    });
  }

  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  viewCompany(email: String) {


      const url = 'http://localhost:4200/admin/company/:name'; // Reemplaza con la URL correspondiente
      window.open(url, '_blank');
  }

  disableOrEnableCompany(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (user.state) {
          // Llamar al servicio correspondiente si el estado del usuario es verdadero
          this.companiesService.disableCompany(user.email).subscribe(result => {
            console.log(result);
            this.loadData();

          });
        } else {
          // Llamar al servicio correspondiente si el estado del usuario es falso
          this.companiesService.enableCompany(user.email).subscribe( result =>{
            console.log(result);
            this.loadData();
          })
        }
      }
    });
  }

  searchCompany(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }


}
