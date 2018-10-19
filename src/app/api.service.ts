import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    console.log('hola')
    this.http.get('https://bq-node-ybxlkxbnpf.now.sh/users').subscribe(() => {
      console.log('response')
  
    });
  }
  
}
