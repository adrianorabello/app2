
import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';


export class CarrinhoService {

    public itens: ItemCarrinho[] = [];

    constructor(){

    }

    public exibirItens(): ItemCarrinho[]{

        return this.itens;
    }


    incluirItem(oferta:Oferta){
        
        this.itens.push(new ItemCarrinho(oferta.id,oferta.imagens[0],oferta.titulo,oferta.descricao_oferta,oferta.valor,1));

        //console.log(this.itens);
    }

}