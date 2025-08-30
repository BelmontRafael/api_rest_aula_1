import { Ator } from '../entities/ator.entity';

export class AtorSummaryDto {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    static fromEntity(ator: Ator): AtorSummaryDto {
        return new AtorSummaryDto(ator.id, ator.nome);
    }
}