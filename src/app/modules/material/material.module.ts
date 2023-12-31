import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],

  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule

  ]
})
export class MaterialModule { }
