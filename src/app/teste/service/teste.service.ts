
import { URL_API } from './../../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Oferta } from 'src/app/shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  public observable:Observable<Oferta[]>
 
  public url:string  = "http://localhost:3000/ofertas";

  constructor(private http:HttpClient) { }

  teste(){
    //console.log("rte");
    return  this.http.get<any>(this.url)
   
  }

  testeGet(){
    const head= new HttpHeaders() .append('accept', 'application/json') .append('content-type', 'application/json');
    return this.http.get<any>(URL_API+"/pedidos",{headers:head} ); /* .pipe(
        tap(return=> { this.log(`fetched Categorias`) }),  catchError(this.handleError('getCategorias', []))
    ); */
  }
}
