import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public descricao:any;
  constructor(private route: ActivatedRoute,public OfertasService: OfertasService) { }

  ngOnInit() {
    let id = this.route.snapshot.parent.params['id'];

    //this.OfertasService.getOndeFicaById(id).then((resposta:any) => {this.descricao = resposta.descricao});

    this.route.parent.params.subscribe((parametros:Params)=>{
      //this.OfertasService.getOndeFicaById(parametros.id).then((resposta:any)=>{this.descricao = resposta.descricao})
      this.OfertasService.getOndeFicaById(parametros.id).then((resposta:any) => {this.descricao = resposta.descricao});
    })

    //console.log(id);
  }

}
