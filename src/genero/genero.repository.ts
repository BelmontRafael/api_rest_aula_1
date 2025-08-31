import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateGeneroDto } from "./dto/create-genero.dto";
import { GeneroDto } from "./dto/genero.dto";
import { Genero } from "./entities/genero.entity";
import { UpdateGeneroDto } from "./dto/update-genero.dto";

@Injectable()
export class GeneroRepository {

    async create(createGeneroDto: CreateGeneroDto): Promise<GeneroDto> {
        try {
            const genero = await Genero.create({ nome: createGeneroDto.nome });
            return GeneroDto.fromEntity(genero);
        } catch (error) {
            // Trata o erro de nome único
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new BadRequestException(`Gênero com nome '${createGeneroDto.nome}' já existe.`);
            }
            throw new BadRequestException('Erro ao criar o gênero.', error.message);
        }
    }

    async findAll(): Promise<GeneroDto[]> {
        const generos = await Genero.findAll({ order: [['nome', 'ASC']] });
        return generos.map(g => GeneroDto.fromEntity(g));
    }

    async findEntityById(id: number): Promise<Genero> {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            throw new NotFoundException(`Gênero com ID ${id} não encontrado.`);
        }
        return genero;
    }

    async findOne(id: number): Promise<GeneroDto> {
        const genero = await this.findEntityById(id);
        return GeneroDto.fromEntity(genero);
    }

    async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<GeneroDto> {
        const genero = await this.findEntityById(id);
        try {
            await genero.update({ nome: updateGeneroDto.nome });
            return GeneroDto.fromEntity(genero);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new BadRequestException(`Gênero com nome '${updateGeneroDto.nome}' já existe.`);
            }
            throw new BadRequestException('Erro ao atualizar o gênero.', error.message);
        }
    }

    async remove(id: number): Promise<void> {
        const genero = await this.findEntityById(id);
        await genero.destroy();
    }

    async countByIds(ids: number[]): Promise<number> {
        if (!ids || ids.length === 0) {
            return 0;
        }
        return Genero.count({ where: { id: ids } });
    }
}