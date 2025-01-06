import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email.unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator] //serve para injetar a dependência do repositório no controller
})
export class UsuarioModule{}