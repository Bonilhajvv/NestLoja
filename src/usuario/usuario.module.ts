import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository] //serve para injetar a dependência do repositório no controller
})
export class UsuarioModule{}