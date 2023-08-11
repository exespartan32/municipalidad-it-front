import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  private apiUrl = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) { }

  //Funcion para optener todos las empresas.
  allDevelopers(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}listar/desarrollador?page=${page}&size=${size}`;

    return this.http.get<any>(url).pipe(
      map((response: any) => {
        const developers = response.content.map((develop: any) => ({
          id: develop.id,
          name: develop.nombre,
          email: develop.email,
          cuil: develop.cuil,
          state:develop.habilitado
        }));

        return {
          content: developers,
          totalElements: response.totalElements
        };
      })
    );
  }

  editarUsuario(email: String): Observable<any> {
    // Aquí puedes implementar la lógica para editar el usuario en la API
    return of(email);
  }



  disableDevelop(email: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}deshabilitar/${email}`, null);
  }

  enableDevelop(email: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}habilitar/${email}`, null).pipe(
      tap(response => {
        console.log(response);
        return response; // Devuelve la respuesta sin cambios
      })
    );
  }

}
