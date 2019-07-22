import { OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
//this.route.params.subscribe((parametro:any) => {console.log("Parametro recebido ",parametro)},(error:any)=>{ console.log("ação com error - ", error)},()=> {console.log("a ação foi concluida")})
      //pegando o id com subscribeg


class ObservableExemplos implements OnInit{


    private tempoObservableSubscription:Subscription
    private meuObservableTesteSubscription:Subscription

    ngOnInit(){

        let tempo = new Observable((observer:Observer<string>)=>{
    
          observer.next('primro evento');
          observer.next('segundo  evento');
          observer.complete();
          observer.error('algum erro aconteceu');
          
       });
    
    
       tempo.subscribe((resultado)=>{console.log(resultado)},
                       (error)=>{ console.log(error)},
                       ()=>{ console.log('observable esta completo ')});



        //this.route.params.subscribe((parametro:any) => {console.log("Parametro recebido ",parametro)},(error:any)=>{ console.log("ação com error - ", error)},()=> {console.log("a ação foi concluida")})
      //pegando o id com subscribeg
      let x = new Observable((observer:Observer<string>)=>{

        observer.next('primro evento');
        observer.next('segundo  evento');
        observer.complete();
        observer.error('algum erro aconteceu');
        
     });

     
     this.tempoObservableSubscription = x.subscribe((tempo:string)=>{
       console.log(tempo)
     })

     x.subscribe((resultado:string)=>{console.log(resultado)},
                     (error)=>{ console.log(error)},
                     ()=>{ console.log('observable esta completo ')});
    }

}      