import { Injectable, BadRequestException } from '@nestjs/common';
import { AtorRepository } from './ator.respository';
import { FilmeRepository } from 'src/filme/filme.respository';
import { CreateAtorDto } from './dto/create-ator.dto';
import { UpdateAtorDto } from './dto/update-ator.dto';
import { AtorDto } from './dto/ator.dto';


@Injectable()
export class AtorService {
	constructor(private readonly atorRepository: AtorRepository) {}

    async create(createAtorDto: CreateAtorDto): Promise<AtorDto> {
        return this.atorRepository.create(createAtorDto);
    }

    async findAll(): Promise<AtorDto[]> {
        return this.atorRepository.findAll();
    }

    async findOne(id: number): Promise<AtorDto> {
        return this.atorRepository.findOne(id);
    }

    async update(id: number, updateAtorDto: UpdateAtorDto): Promise<AtorDto> {
        return this.atorRepository.update(id, updateAtorDto);
    }

    async remove(id: number): Promise<void> {
        return this.atorRepository.remove(id);
    }
}