import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public  ofertas:Oferta[];
  public  objetos:any[];

  constructor(private ofertasService:OfertasService) { }



  ngOnInit() {

    this.ofertasService.getOfertas()
                                    .then((ofertas: Oferta[]) => {
                                     //console.log('passou aqui', ofertas);
                                      this.ofertas = ofertas;
                                    }).catch((param:any)=>{ console.log('erro dno catch',param)});
            
    
   
  }

  public listar(){
    console.log(this.ofertasService.getOfertas());
    //this.ofertasService.getOfertas().subscribe(dados => this.ofertas = dados);
  }

}
