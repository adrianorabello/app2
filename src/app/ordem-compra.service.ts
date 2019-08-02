import { HttpClient,HttpRequest, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';



@Injectable()
export class OrdemCompraService {

    public pedido:Pedido

    constructor(private http: HttpClient){

    }

    public efetivarCompra(pedido:Pedido): Observable<any> {
        //console.log("detro da requisiçã odeo serviço ")

        let headears= new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');      


        return  this.http.post(`${URL_API}/pedidos`,JSON.stringify(pedido),{headers:headears});

        //console.log(pedido);

 
    }

    




}