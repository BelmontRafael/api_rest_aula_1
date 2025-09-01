import { FilmeSummaryDto } from 'src/filme/dto/filme-summary.dto';
import { Ator } from '../entities/ator.entity';

export class AtorDto {
    id: number;
    nome: string;
    data_nascimento: string | null;
    filmes: FilmeSummaryDto[];

    constructor(id: number, nome: string, data_nascimento: string | null, filmes: FilmeSummaryDto[]) {
        this.id = id;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.filmes = filmes
    }

    static fromEntity(ator: Ator): AtorDto {
        const dataFormatada = ator.data_nascimento 
            ? ator.data_nascimento.toISOString().split('T')[0] 
            : null;

        const filmesDto = ator.filmes
            ? ator.filmes.map(filme => FilmeSummaryDto.fromEntity(filme))
            : [];

        return new AtorDto(ator.id, ator.nome, dataFormatada, filmesDto);
    }
}