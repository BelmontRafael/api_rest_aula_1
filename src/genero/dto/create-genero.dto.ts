import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateGeneroDto {
    @IsString({ message: 'O nome deve ser uma string.' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @MinLength(2, { message: 'O nome deve ter no mínimo 2 caracteres.' })
    @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
    nome: string;
}