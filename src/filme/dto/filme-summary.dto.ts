import { Filme } from '../entities/filme.entity';

export class FilmeSummaryDto {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    static fromEntity(filme: Filme): FilmeSummaryDto {
        return new FilmeSummaryDto(filme.id, filme.nome);
    }
}