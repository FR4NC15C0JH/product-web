import { HttpHeaders } from '@angular/common/http';
import { Cliente } from './../model/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_APP } from './uri.api';
//add cabeçalho no header
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'responseType': 'text'
//     // 'Authorization': 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor(private http: HttpClient) { }

  // login(cliente: Cliente){
  //   return this.http.post(`${URL_APP}/api/auth`, cliente);
  // }

  createOrUpdate(cliente: Cliente){
    if(cliente.id != null && cliente.id != ''){
      return this.http.put(`${URL_APP}/api/cliente`, cliente);
    }else {
      cliente.id = null;
      return this.http.post(`${URL_APP}/api/cliente/create`, cliente);
    }
  }

  // findAll(page:number,count:number){
  //   return this.http.get(`${URL_APP}/api/cliente/${page}/${count}`);
  // }
  findAll(){
    return this.http.get(`${URL_APP}/api/cliente/findAll`);
  }

  findById(id:string){
    return this.http.get(`${URL_APP}/api/cliente/${id}`);
  }
  
  delete(id:string){
    return this.http.delete(`${URL_APP}/api/cliente/${id}`);
  }
}
