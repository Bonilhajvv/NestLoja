import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriarUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4 as uuid} from 'uuid'
@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private usuarioRepository: UsuarioRepository){}
    
    @Post()
    async criarUsuario(@Body() dadosDoUsuario: CriarUsuarioDTO){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {id: usuarioEntity.id, message: 'usuario criado com sucesso'};
    };

    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listar();
    }

    
}