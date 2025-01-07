import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { CriarUsuarioDTO } from "./dto/criaUsuario.dto"
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDto } from "./dto/ListaUsuario.dto";
@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: CriarUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return { usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome), message: 'usuario criado com sucesso' };
    };

    @Get()
    async listarUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDto(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'usuario atualiazdo com sucesso',
        }
    }
    @Delete('/:id')
    async removeusuaraio(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);
        return{
            usuario: usuarioRemovido,
            message: 'usuario removido'
        }
    }
}