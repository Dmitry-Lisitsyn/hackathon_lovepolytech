import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }


   getXuy(){
    return this.http.get('http://localhost:3000/cum')
  }


  getToken(){
    
    return this.http.get('http://localhost:3000/oauth')
  }
  
}
