import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {





  public formulario:FormGroup = new FormGroup({

    'endereco':        new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)]),
    'numero':          new FormControl(null,[Validators.required, Validators.minLength(1),Validators.maxLength(20)]),   
    'complemento':     new FormControl(null),
    'formaPagamento':  new FormControl(null,[Validators.required])

  });

  public idPedidoCompra:number

  constructor(private ordemCompraService: OrdemCompraService,private carrinhoService:CarrinhoService) { }

  ngOnInit() {
    
    //console.log(this.idPedidoCompra);
    console.log(" carrinho de itens ", this.carrinhoService.exibirItens())
  }



  public confirmarCompra(): void {

    if(this.formulario.status == "INVALID"){
     /*  console.log(this.formulario.status); */

     // para marcar os campos como touched e com isso no css tem uma classe que coloca uma borda para alterar a cor dos campos  
     this.formulario.get("endereco").markAsTouched();
     this.formulario.get("numero").markAsTouched();
     this.formulario.get("formaPagamento").markAsTouched();
   
    }else{

      let pedido = new Pedido(this.formulario.value.endereco,
                              this.formulario.value.numero,
                              this.formulario.value.complemento,
                              this.formulario.value.formaPagamento)

      console.log(pedido);

      this.ordemCompraService.efetivarCompra(pedido).subscribe((pedido)=>{
        this.idPedidoCompra = pedido.id;
        //console.log("id do pediudo" , pedido.id );
      })
    }
    
  }


}
