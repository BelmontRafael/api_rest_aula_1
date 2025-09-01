import { AtorDto } from "src/ator/dto/ator.dto";
import { FilmeDto } from "src/filme/dto/filme.dto";
import { GeneroDto } from "src/genero/dto/genero.dto";

export interface Link {
    href: string;
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

export type HateoasLinks = {
    [key: string]: Link;
};

export class HateoasResponse<T> {
    data: T;
    _links: HateoasLinks;

    constructor(data: T, links: HateoasLinks) {
        this.data = data;
        this._links = links;
    }
}


export function generateFilmeLinks(filme: FilmeDto, baseUrl: string): HateoasLinks {
    return {
        self: { href: `${baseUrl}/filmes/${filme.id}`, method: 'GET' },
        update: { href: `${baseUrl}/filmes/${filme.id}`, method: 'PATCH' },
        delete: { href: `${baseUrl}/filmes/${filme.id}`, method: 'DELETE' },
        atores: { href: `${baseUrl}/filmes/${filme.id}/atores`, method: 'GET' },
    };
}

export function generateAtorLinks(ator: AtorDto, baseUrl: string): HateoasLinks {
    return {
        self: { href: `${baseUrl}/atores/${ator.id}`, method: 'GET' },
        update: { href: `${baseUrl}/atores/${ator.id}`, method: 'PATCH' },
        delete: { href: `${baseUrl}/atores/${ator.id}`, method: 'DELETE' },
    };
}

export function generateGeneroLinks(genero: GeneroDto, baseUrl: string): HateoasLinks {
    return {
        self: { href: `${baseUrl}/generos/${genero.id}`, method: 'GET' },
        update: { href: `${baseUrl}/generos/${genero.id}`, method: 'PATCH' },
        delete: { href: `${baseUrl}/generos/${genero.id}`, method: 'DELETE' },
    };
}