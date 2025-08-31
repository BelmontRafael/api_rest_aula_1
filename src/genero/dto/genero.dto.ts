import { Genero } from "../entities/genero.entity";

export class GeneroDto {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    static fromEntity(genero: Genero): GeneroDto {
        return new GeneroDto(genero.id, genero.nome);
    }
}