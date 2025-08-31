import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { FilmeRepository } from './filme.respository';
import { AtorRepository } from 'src/ator/ator.respository';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmeDto } from './dto/filme.dto';
import { AtorDto } from 'src/ator/dto/ator.dto';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';

@Injectable()
export class FilmeService {
    constructor(private readonly filmeRepository: FilmeRepository) {}

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

      // New method: Get all actors for a film
    async findActors(filmeId: number): Promise<AtorSummaryDto[]> {
        return this.filmeRepository.findActors(filmeId);
  }

}