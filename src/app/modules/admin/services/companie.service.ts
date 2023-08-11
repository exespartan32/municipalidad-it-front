import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiUrl = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) { }

  //Funcion para optener todos las empresas.
  allCompanies(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}listar/empresa?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const companies = response.content.map((develop: any) => ({
          id: develop.id,
          name: develop.nombre,
          email: develop.email,
          cuil: develop.cuil,
          state: develop.habilitado
        }));

        return {
          content: companies,
          totalElements: response.totalElements
        };
      })
    );
  }

  disableCompany(email: string): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}deshabilitar/${email}`, {});
  }

  enableCompany(email: string): Observable<any>{

    return this.http.put<any>(`${this.apiUrl}habilitar/${email}`, {});
  }
}
