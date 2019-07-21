import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})


export class OfertaComponent implements OnInit {

  public oferta: Oferta;
 
  constructor( private route: ActivatedRoute,public ofertaService: OfertasService) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    //console.log(id);

    //pegando o id com subscribe. Com subscribe odemos recuperar o objeto em si com propriedade e valor, com snapshot retorna apenas os valores
    //this.route.params.subscribe((oferta:any)=>{this.oferta = oferta; console.log(oferta)});




    this.ofertaService.getOferta(id).then((oferta:Oferta)=>{ 
                                                            this.oferta = oferta; 
                                                            //console.log("console log de this.oferta",this.oferta)
                                                          });

    //pegando o id com subscribe
    
  }



}
