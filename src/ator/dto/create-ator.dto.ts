import {
    IsString,
    IsNotEmpty,
    IsOptional,
    MinLength,
    MaxLength,
    IsDateString,
    IsArray,
    IsInt,
    IsPositive
} from 'class-validator';

export class CreateAtorDto {
    @IsString({ message: 'O nome deve ser uma string.' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @MinLength(2, { message: 'O nome deve ter no mínimo 2 caracteres.' })
    @MaxLength(255, { message: 'O nome deve ter no máximo 255 caracteres.' })
    nome: string;

    @IsOptional()
    @IsDateString({}, { message: 'A data de nascimento deve estar no formato de data válido (ISO 8601). Ex: YYYY-MM-DD' })
    data_nascimento?: Date;

    @IsOptional()
    @IsArray({ message: 'A lista de filmes deve ser um array de IDs.' })
    @IsInt({ each: true, message: 'Cada ID de filme deve ser um número inteiro.' })
    @IsPositive({ each: true, message: 'Cada ID de filme deve ser um número positivo.' })
    filmesIds?: number[];
}