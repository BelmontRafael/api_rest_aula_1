import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsInt,
    Min,
    Max,
    IsOptional,
    MinLength,
    MaxLength,
    IsArray,
    IsPositive,
} from 'class-validator';

export class CreateFilmeDto {
    @IsString({ message: 'O nome deve ser uma string.' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @MinLength(2, { message: 'O nome deve ter no mínimo 2 caracteres.' })
    @MaxLength(255, { message: 'O nome deve ter no máximo 255 caracteres.' })
    nome: string;

    @IsNumber({}, { message: 'O ano de lançamento deve ser um número.' })
    @IsInt({ message: 'O ano de lançamento deve ser um número inteiro.' })
    @Min(1888, { message: 'O ano de lançamento não pode ser anterior a 1888.' })
    @Max(new Date().getFullYear() + 5, { message: 'O ano de lançamento é inválido.' })
    ano_lancamento: number;

    @IsOptional()
    @IsString({ message: 'A sinopse deve ser uma string.' })
    @MaxLength(1000, { message: 'A sinopse não pode ter mais de 1000 caracteres.' })
    sinopse?: string;

    @IsOptional()
    @IsArray({ message: 'A lista de atores deve ser um array de IDs.' })
    @IsInt({ each: true, message: 'Cada ID de ator deve ser um número inteiro.' })
    @IsPositive({ each: true, message: 'Cada ID de ator deve ser um número positivo.' })
    atoresIds?: number[];
}