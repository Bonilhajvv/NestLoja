import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController{
    
    private usuarioRepository= new UsuarioRepository();
    
    @Post()
    async criarUsuario(@Body() dadosDoUsuario: any){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    };

    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listar();
    }

    
}