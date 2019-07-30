import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = "";
  public numero: string= "" ;
  public complemento:string ="" ; 
  public formaPagamento: string;
  constructor() { 

    //console.log(this.formaPagamento)
  }

  ngOnInit() {
  }

}
