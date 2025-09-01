import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { FilmeRepository } from './filme.respository';
import { AtorRepository } from 'src/ator/ator.respository';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmeDto } from './dto/filme.dto';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';
import { GeneroRepository } from 'src/genero/genero.repository';

@Injectable()
export class FilmeService {
    constructor(
        private readonly filmeRepository: FilmeRepository,
        private readonly atorRepository: AtorRepository, 
    ) {}

    async create(createFilmeDto: CreateFilmeDto): Promise<FilmeDto> {
        return this.filmeRepository.create(createFilmeDto);
    }

    async findAll(): Promise<FilmeDto[]> {
        return this.filmeRepository.findAll();
    }


    async findOne(id: number): Promise<FilmeDto> {
        return this.filmeRepository.findOne(id);
    }

    async update(id: number, updateFilmeDto: UpdateFilmeDto): Promise<FilmeDto> {
        return this.filmeRepository.update(id, updateFilmeDto);
    }

    async remove(id: number): Promise<void> {
        return this.filmeRepository.remove(id);
    }

    async findActors(filmeId: number): Promise<AtorSummaryDto[]> {
        return this.filmeRepository.findActors(filmeId);
  }

    async addAtorAoFilme(filmeId: number, atorId: number): Promise<AtorSummaryDto[]> {

        const filme = await this.filmeRepository.findEntityById(filmeId);
        const ator = await this.atorRepository.findEntityById(atorId);

        const atorJaExiste = filme.atores.some(atorExistente => atorExistente.id === ator.id);
        if (atorJaExiste) {
            throw new BadRequestException(`O ator '${ator.nome}' já faz parte do elenco do filme '${filme.nome}'.`);
        }

        const filmeAtualizado = await this.filmeRepository.associarAtor(filme, ator);

        return filmeAtualizado.atores.map(a => AtorSummaryDto.fromEntity(a));
    }

}