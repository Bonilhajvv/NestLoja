import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable() //serve para injetar a dependência do repositório no controller
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario:UsuarioEntity) {
    this.usuarios.push(usuario);
  }
  async listar() {
    return this.usuarios;
  }
  async existeEmail(email: string){
    const possivelUsuario = this.usuarios.find(
      usuarios => usuarios.email === email
    );

    return possivelUsuario != undefined;
  }
}