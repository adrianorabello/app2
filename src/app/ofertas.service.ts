import { URL_API } from './app.api';



import { Oferta } from './shared/oferta.model';
import { HttpClient  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import {Injectable} from '@angular/core'



@Injectable()
export class OfertasService{

    
    
    constructor(private http:HttpClient){}

    public ofertas:Oferta[];

      

   public getOfertas(): Promise<Oferta[]>{

       return this.http.get(`${URL_API}/ofertas`)
                                        .toPromise()
                                        .then((resposta:any) => resposta );     
   }
    

 

    public getOfertasPorCategoria(categoria:string): Promise<Oferta[]>{

        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: any)=> resposta);

    }


    public getOferta(id:number): Promise<Oferta>{

        return this.http.get(`${URL_API}/ofertas?id=${id}`)
                        .toPromise()
                        .then((oferta: any)=> oferta[0]); // essa função extrai o primeiro elemento do array
                        //.then((resposta: any)=> resposta[0]);// para poder retornar o que esta apenas no indice[0] do array

    }

    public getComoUsarById(id:number):Promise<string>{

        return this.http.get(`${URL_API}/como-usar?id=${id}`)
                                                            .toPromise()
                                                            .then((resposta:any) => resposta[0]);
    }


    public getOndeFicaById(id:number):Promise<any>{

        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
                                                            .toPromise()
                                                            .then((resposta:any) => resposta[0]);
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