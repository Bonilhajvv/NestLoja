import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEmpty, IsNotEmpty, IsNumber, IsPositive, IsString, Max, MaxLength, Min, ValidateNested } from "class-validator";

export class CaracteristicaProdutoDTO {
    nome: string;
    descricao: string;
}

export class criaProdutoDto {
    @IsString()
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string;

    @IsNumber()
    @IsPositive({ message: 'Valor deve ser um número positivo' })
    @Max(999999.99, { message: 'Valor deve ter no máximo duas casas decimais' })
    valor: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade deve ser um número igual ou maior que zero' })
    quantidade: number;

    @IsString()
    @MaxLength(1000, { message: 'Descrição deve ter no máximo 1000 caracteres' })
    @IsNotEmpty({ message: 'Descrição é obrigatória' })
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3, { message: 'A lista de características deve ter pelo menos 3 itens' })
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];
    
    @IsNotEmpty({ message: 'Categoria é obrigatória' })
    categoria: string;
}