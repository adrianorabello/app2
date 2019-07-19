




import { Oferta } from './shared/oferta.model';
import { promise } from 'protractor';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';  



import {InjectableDecorator} from '@angular/core'





/* para poder utilizar o toPormise*/
import '/rxjs/add/operator/toPromise' ;



export class OfertasService{

    constructor(private http:HttpClient){}

    //public ofertas:Oferta[];







      

    public getOfertas(): Promise<Oferta[]>{

       return this.http.get('http://localhost:300/ofertas/').toPromise().then((resposta: any) => resposta.json());
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


    criarOferta():Oferta
    {
       let flag = new Oferta();

       flag.id = 4,
       flag.categoria = "diversao",
       flag.titulo = "Estância das águas"
       flag.descricao_oferta = "Diversão garantida com piscinas, trilhas e muito mais."
       flag.anunciante = "Estância das águas"
       flag.valor = 31.90
       flag.destaque = true
       flag.imagens = [
           {url: "/assets/ofertas/3/img1.jpg"},
           {url: "/assets/ofertas/3/img2.jpg"},
           {url: "/assets/ofertas/3/img3.jpg"},
           {url: "/assets/ofertas/3/img4.jpg"},
           {url: "/assets/ofertas/3/img5.jpg"},
           {url: "/assets/ofertas/3/img6.jpg"}]

           return flag;
    }
}