import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriarUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, {message: 'Email inválido'})
    email: string;
 
    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    senha: string;
}