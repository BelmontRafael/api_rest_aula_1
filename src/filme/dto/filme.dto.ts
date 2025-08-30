import { AtorDto } from 'src/ator/dto/ator.dto'; // Importe o DTO do Ator
import { Filme } from '../entities/filme.entity';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';

export class FilmeDto {
    id: number;
    nome: string;
    ano_lancamento: number;
    sinopse: string | null;
    atores: AtorSummaryDto[];

    constructor(id: number, nome: string, ano: number, sinopse: string | null, atores: AtorSummaryDto[]) {
        this.id = id;
        this.nome = nome;
        this.ano_lancamento = ano;
        this.sinopse = sinopse;
        this.atores = atores;
    }


    static fromEntity(filme: Filme): FilmeDto {
        const atoresDto = filme.atores 
            ? filme.atores.map(ator => AtorSummaryDto.fromEntity(ator)) 
            : [];

        return new FilmeDto(
            filme.id,
            filme.nome,
            filme.ano_lancamento,
            filme.sinopse,
            atoresDto,
        );
    }
}