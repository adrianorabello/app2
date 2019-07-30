import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public descricao:string;
  
  constructor(private route:ActivatedRoute,public ofertaService:OfertasService) { }

  ngOnInit() {
    //let id = this.route.parent.params['id']; // para poder pegar um id do component pai usamos o metodo parent
    //console.log(id);
    //this.ofertaService.getComoUsarById(id).then((resposta: any)=> {this.descricao = resposta.descricao})

    this.route.parent.params.subscribe((parametros:any)=>{
      this.ofertaService.getComoUsarById(parametros.id).then((resposta: any)=> {this.descricao = resposta.descricao})
    })
    

    
  }

}
