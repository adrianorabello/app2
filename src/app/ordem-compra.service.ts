import { Pedido } from './shared/pedido.model';


export class OrdemCompraService {

    public pedido:Pedido

    public efetivarCompra(peido:Pedido): void {
        console.log("Chegamos até aqui!")
        console.log(peido);
    }





}