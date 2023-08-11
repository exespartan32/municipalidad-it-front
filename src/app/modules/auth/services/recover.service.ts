import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

  constructor(private http: HttpClient) { }

  recover(email:string):Observable<any> {
    console.log(email)
    return this.http.post(`http://localhost:8081/api/`,email)
  }
}
