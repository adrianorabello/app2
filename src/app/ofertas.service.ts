


import { Oferta } from './shared/oferta.model';
import { HttpClient  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import {Injectable} from '@angular/core'



@Injectable()
export class OfertasService{

    private url:string = 'http://localhost:3000/ofertas/';
    constructor(private http:HttpClient,private http2:HttpClientModule){}

    public ofertas:Oferta[];

      

   public getOfertas(): Promise<Oferta[]>{

       return this.http.get('http://localhost:3000/ofertas/')
                                                            .toPromise()
                                                            .then((resposta:any) => resposta );     
   }
    

 

    public getOfertasPorCategoria(categoria:string): Promise<Oferta[]>{

        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: any)=> resposta);

    }










    /*public getOfertas2():Promise<Oferta[]>{

        return new Promise((resolve,reject) =>{

            let deuCerto = true;

            if(deuCerto){

                setTimeout(() => {
                    resolve(this.ofertas);
                    console.log("responsta depous de 3 segundos ")
                }, 3000);
               
            }else[

                reject({codigo:404,menssagem: "servidor nao encontrado"})
            ]
           
        })

    }*/


   
}