import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email.unico.validator";


export class CriarUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, {message: 'Email inválido'})
    @EmailEhUnico({message: " Já existe usuario desse email"})
    email: string;
 
    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    senha: string;
}

