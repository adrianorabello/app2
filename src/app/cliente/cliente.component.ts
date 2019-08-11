import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClienteDTO } from './../shared/clienteDTO.model';
import { ClienteService } from './../clienteService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ ClienteService ]
})
export class ClienteComponent implements OnInit {

  nomeValidator:string ="Capo com menos de 3 letros ou mais de 50";
  

  public clienteDtoList:ClienteDTO[];

  public formulario:FormGroup = new FormGroup({

    'nome':           new FormControl('aasdasd',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    'email':          new FormControl(null,[Validators.required, Validators.minLength(10),Validators.maxLength(20)]) 
   

  });
  constructor(private clienteService:ClienteService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.getListaClientes()

    console.log(this.formulario);
   

    
  
  }

  cadastrarCliente():void{
    let clienteDto = new ClienteDTO(
      this.formulario.value.nome,
      this.formulario.value.email);

     


    if(this.formulario.status != "INVALID"){

      //console.log("imprimeindo o que estou recebendo do forumario o cliente ts ", clienteDto);
      this.clienteService.cadastrarCliente(clienteDto).subscribe((pedido)=>{
        
        console.log(pedido);

        this.formulario.value.nome = "";
        this.formulario.value.email = "";
       
      })
    }
     

      this.getListaClientes();
  }

  public getListaClientes(){
    this.clienteService.getClientes().subscribe((response) =>  {
      this.clienteDtoList = response; 
      //console.log(this.clienteDtoList); 
      //console.log(JSON.stringify(response));
    });
  }

  getCLienteById(){
    this.clienteService.clienteById(this.route.snapshot.params['id']).subscribe((response)=>console.log(response))
  }

 



}
