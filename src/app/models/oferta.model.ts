import { ImagemModel } from './imagem.model';



export class OfertaModel{

    public id:string;
    public titulo:string;
    public descricao_oferta:string;
    public anuciante:string;
    public valor:number;
    public destaque:boolean;    
    public imagens:ImagemModel[]; 
 

}

