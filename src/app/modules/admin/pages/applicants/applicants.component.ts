import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantsService } from '../../services/applicant.service';
import { User } from '../../interfaces/user.intefaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent   implements OnInit{
  title: string[] = ['index', 'name', 'email', 'cuil', 'state', 'shares'];
  applicanst!: MatTableDataSource<User>;
  totalElements!: number;
  pageSize!: number;
  pageIndex!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private applicantsService: ApplicantsService,
    private dialog: MatDialog) {}

    ngOnInit() {
    this.pageIndex = 0;
    this.pageSize = 5;
    this.loadData();
  }

  loadData() {
    this.applicantsService.allDevelopers(this.pageIndex, this.pageSize).subscribe(response => {
      this.applicanst = new MatTableDataSource<User>(response.content);
      this.totalElements = response.totalElements;
      this.applicanst.paginator = this.paginator; // Agrega esta línea para asociar el paginador al dataSource
    });
  }


  onPageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  viewDevelop(email: string) {
    this.applicantsService.editarUsuario(email).subscribe(updatedUsuario => {
      // Realiza acciones adicionales después de editar el usuario si es necesario
    });

    const url = 'http://localhost:4200/admin/applicants/:name'; // Reemplaza con la URL correspondiente
    window.open(url, '_blank');
  }

  disableOrEnableDevelop(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        if (user.state) {
          // Llamar al servicio correspondiente si el estado del usuario es verdadero
          this.applicantsService.disableDevelop(user.email).subscribe(result => {
            console.log(result);

            this.loadData();
          });
        } else {
          // Llamar al servicio correspondiente si el estado del usuario es falso
          this.applicantsService.enableDevelop(user.email).subscribe( result =>{
            console.log(result);
            this.loadData();
          })
        }
      }
      // this.loadData();
    });
  }

  searchDevelop(value: string) {
    // Lógica para la función de búsqueda
    console.log('Buscar', value);
  }

}
