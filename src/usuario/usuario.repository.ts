import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { error } from "console";

@Injectable() //serve para injetar a dependência do repositório no controller
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }
  async listar() {
    return this.usuarios;
  }
  async existeEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      usuarios => usuarios.email === email
    );

    return possivelUsuario != undefined;
  }

  private buscarPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo => usuarioSalvo.id === id
    );
    if (!possivelUsuario) {
      throw new Error('Usuário nao existe')
    }
    return possivelUsuario;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscarPorId(id)

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === id) {
        return;
      }
      usuario[chave] = valor;

    });

    return usuario;
  }

  async remove(id: string) {
   const usuario = this.buscarPorId(id);
    this.usuarios = this.usuarios.filter(
      usuarioSalvo => usuarioSalvo.id != id
    );
    
   return usuario;
  }
}