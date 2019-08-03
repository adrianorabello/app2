
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
        
        let itemCarrinho = new ItemCarrinho(oferta.id,oferta.imagens[0],oferta.titulo,oferta.descricao_oferta,oferta.valor,1);

        let itemCarrinhoEncontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrinho.id )

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1;
        }else{

            this.itens.push(itemCarrinho);
        }


        //console.log(this.itens);
    }

    public totalCarrinhoCompras():number{
        let total = 0;
        this.itens.map((item:ItemCarrinho) => total +=  item.valor * item.quantidade)

        return  total;


    }


    adicionaItemCarinho(itemCarrinho:ItemCarrinho){

        let itemCarrinhoEncontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrinho.id )

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1;
        }else{

            this.itens.push(itemCarrinho);
        }
    }


    removeItemCarinho(itemCarrinho:ItemCarrinho){

        let itemCarrinhoEncontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrinho.id )

        if(itemCarrinhoEncontrado){           
            
                itemCarrinhoEncontrado.quantidade -= 1;            

            if(itemCarrinhoEncontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1);
            }
            
        }else{

            this.itens.push(itemCarrinho);
        }
    }


    public removerItensCarrinho(){

        this.itens = [];
    }

}