import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../interfaces/user.intefaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() dataSource!: MatTableDataSource<User>;
  @Input() title: string[] = [];
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() totalElements!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() searchUser = new EventEmitter<string>();
  @Output() viewUser = new EventEmitter<string>();
  @Output() disableOrEnableUser = new EventEmitter<User>();


  getCurrentIndex(indexOnPage: number): number {
    return this.pageIndex * this.pageSize + indexOnPage + 1;
  }
  onPageChanged(event: PageEvent) {
    this.page.emit(event);
  }

  verUsuario(email: string) {
    this.viewUser.emit(email);
  }

  DeshabilitarOHabilitar(user: User) {
    this.disableOrEnableUser.emit(user);
  }

  BuscarUsuario(event: any) {
    this.searchUser.emit(event.target.value);
  }

}

