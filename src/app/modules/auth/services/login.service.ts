import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRecord } from 'src/app/models/jwt-record';
import { LoginUsuario } from 'src/app/models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //authURL = environment.URL + 'auth/';
  authURL = 'http://localHost:8081/auth/';
  constructor(private httpClient: HttpClient) { }

/*   login(user:any):void {
    console.log(user);
  } */

  public login(loginUsuario: LoginUsuario): Observable<JwtRecord>{
    //console.log("respuesta de la funcion de login")
    //console.log(JwtRecord)
    return this.httpClient.post<JwtRecord>(this.authURL + 'login', loginUsuario)
  }
}
