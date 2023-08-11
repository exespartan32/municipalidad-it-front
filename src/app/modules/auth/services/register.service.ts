import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //authURL = environment.URL + 'auth/';
  authURL = 'http://localHost:8081/auth/';
  constructor(private httpClient: HttpClient) { }

  public register(nuevoUsuario: NuevoUsuario): Observable<any>{
    console.log("this.nuevoUsuario")
    console.log(nuevoUsuario)
    return this.httpClient.post<any>(this.authURL + 'register' , nuevoUsuario);
  }

/*   register(user:any):Observable<any> {

   return this.http.post(`http://localhost:8081/api/registro/usuario`,user)
   
  } */



}
