import { Injectable } from "@nestjs/common";
import { GeneroRepository } from "./genero.repository";
import { CreateGeneroDto } from "./dto/create-genero.dto";
import { GeneroDto } from "./dto/genero.dto";
import { UpdateGeneroDto } from "./dto/update-genero.dto";

@Injectable()
export class GeneroService {
    constructor(private readonly generoRepository: GeneroRepository) {}

    create(createGeneroDto: CreateGeneroDto): Promise<GeneroDto> {
        return this.generoRepository.create(createGeneroDto);
    }

    findAll(): Promise<GeneroDto[]> {
        return this.generoRepository.findAll();
    }

    findOne(id: number): Promise<GeneroDto> {
        return this.generoRepository.findOne(id);
    }

    update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<GeneroDto> {
        return this.generoRepository.update(id, updateGeneroDto);
    }

    remove(id: number): Promise<void> {
        return this.generoRepository.remove(id);
    }
}