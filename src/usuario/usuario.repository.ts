import { Injectable } from "@nestjs/common";

@Injectable() //serve para injetar a dependência do repositório no controller
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
  }
  async listar() {
    return this.usuarios;
  }
}