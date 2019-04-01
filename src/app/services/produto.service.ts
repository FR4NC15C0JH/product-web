import { URL_APP } from './uri.api';
import { Produto } from './../model/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  createOrUpdate(produto: Produto){
    if(produto.id != null && produto.id != ''){
      return this.http.put(`${URL_APP}/api/produto`, produto);
    }else {
      produto.id = null;
      return this.http.post(`${URL_APP}/api/produto/create`, produto);
    }
  }

  // findAll(page:number,count:number){
  //   return this.http.get(`${URL_APP}/api/cliente/${page}/${count}`);
  // }

  findAll(){
    return this.http.get(`${URL_APP}/api/produto/findAll`);
  }

  findById(id:string){
    return this.http.get(`${URL_APP}/api/produto/${id}`);
  }
  
  delete(id:string){
    return this.http.delete(`${URL_APP}/api/produto/${id}`);
  }
}
