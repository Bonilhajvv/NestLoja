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

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo => usuarioSalvo.id === id
    );
    if (!possivelUsuario) {
      throw new Error('Usuário nao existe')
    }

    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === id) {
        return;
      }
      possivelUsuario[chave] = valor;

    });

    return possivelUsuario;
  }
}