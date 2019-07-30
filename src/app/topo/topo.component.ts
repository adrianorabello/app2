import { Observable, Subject } from 'rxjs';

import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {


  public ofertas:Observable<Oferta[]>;
  public ofertas2:Oferta[];
  public teste:string = "teste"

  private subjectPesquisa:Subject<string> = new Subject();
 
    constructor(public ofertasService: OfertasService) { }

    ngOnInit() {

      //this.ofertas2.length
     
    

    }

  public pesquisa(termoDaBusca:string){
    
    //this.termoDapesquisa = (<HTMLInputElement>event.target).value;

    


    this.ofertas = this.ofertasService.pesquisaOferta(termoDaBusca);
    

    //console.log(this.ofertas);

    this.ofertas.subscribe((ofertas:Oferta[]) => {this.ofertas2 = ofertas, console.log(ofertas)},
                            (erro) => console.log(erro),
                            () => console.log("etapa compcluida com sucesso "));    
                      
                           
                           

    //console.log(termoDaBusca);
  }

}
