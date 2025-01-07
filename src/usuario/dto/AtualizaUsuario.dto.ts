import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email.unico.validator";


export class AtualizaUsuarioDTO{
    @IsString()
    @IsOptional()
    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, {message: 'Email inválido'})
    @EmailEhUnico({message: " Já existe usuario desse email"})
    @IsOptional()
    email: string;
 
    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    @IsOptional()
    senha: string;
}

