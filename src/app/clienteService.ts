import { map } from 'rxjs/operators';



import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SPRING } from './app.api';
import { Observable } from 'rxjs';
import { ClienteDTO } from './shared/clienteDTO.model';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ClienteService{

    public clienteDto:ClienteDTO;
    

    constructor(private http: HttpClient){

    }

    public cadastrarCliente(clienteDto:ClienteDTO):Observable<any>{

        let headears= new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');      


        return  this.http.post(`${URL_SPRING}/clientes`,JSON.stringify(clienteDto),{headers:headears});

    }




    public getClientes():Observable<any>{
        let headers= new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');      


         return this.http.get(`${URL_SPRING}/clientes`,{
            headers: headers
          });
          
    }



    //testando map pois não queria funcionar
    public clienteById(id: string){
        return this.http.get(`${URL_SPRING}/clientes/${id}`).pipe(map(response => JSON.stringify(response)))
       
        

              
    }


}