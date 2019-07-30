import { TesteService } from './service/teste.service';
import { Oferta } from './../shared/oferta.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable, Output, Input } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

@Injectable()
export class TesteComponent implements OnInit {

  
  @Output() public ofertas:Oferta[];
 
  public observable:Observable<Oferta[]>
  public url:string  = "http://localhost:3000/ofertas";
  public msg:string = "";
  


  constructor(private http:HttpClient,private testeService:TesteService) { }

  ngOnInit() {

  }

  getPosts(){
    
    this.observable = this.http.get<Oferta[]>(this.url)
    this.observable.subscribe((arg) => {
      this.ofertas = arg;
      console.log(this.ofertas);

      this.ofertas.forEach(element => {
        console.log(element)
      });

      
    });
    

   
  }

 
}
