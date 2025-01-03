import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriarUsuarioDTO } from "./dto/criaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criarUsuario(@Body() dadosDoUsuario: CriarUsuarioDTO){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    };

    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listar();
    }

    
}