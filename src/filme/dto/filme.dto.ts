import { AtorDto } from 'src/ator/dto/ator.dto'; // Importe o DTO do Ator
import { Filme } from '../entities/filme.entity';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';
import { GeneroDto } from 'src/genero/dto/genero.dto';

export class FilmeDto {
    id: number;
    nome: string;
    ano_lancamento: number;
    sinopse: string | null;
    atores: AtorSummaryDto[];
    generos: GeneroDto[];

    constructor(id: number, nome: string, ano: number, sinopse: string | null, atores: AtorSummaryDto[], generos: GeneroDto[]) {
        this.id = id;
        this.nome = nome;
        this.ano_lancamento = ano;
        this.sinopse = sinopse;
        this.atores = atores;
        this.generos = generos;
    }


    static fromEntity(filme: Filme): FilmeDto {
        const atoresDto = filme.atores 
            ? filme.atores.map(ator => AtorSummaryDto.fromEntity(ator)) 
            : [];

        const generosDto = filme.generos
            ? filme.generos.map(genero => GeneroDto.fromEntity(genero))
            : [];

        return new FilmeDto(
            filme.id,
            filme.nome,
            filme.ano_lancamento,
            filme.sinopse,
            atoresDto,
            generosDto,
        );
    }
}