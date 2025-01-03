import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{

    constructor(private readonly produtoRepository: ProdutoRepository){}
    
    @Post()
    async criarProduto(@Body() Produto: any){
        return this.produtoRepository.salvarProduto(Produto);
        return Produto;
    }

    @Get()
    async listarProdutos(){
        return this.produtoRepository.listarProdutos();
    }
}