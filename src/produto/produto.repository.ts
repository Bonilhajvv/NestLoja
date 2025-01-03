import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository{
    private produtos = [];

    async salvarProduto(Produto){
        return this.produtos.push(Produto);
    }

    async listarProdutos(){
        return this.produtos;
    }
}