import { HttpClient } from '@angular/common/http';

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
}
