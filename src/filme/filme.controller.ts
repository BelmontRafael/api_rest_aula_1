import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { AtorDto } from 'src/ator/dto/ator.dto';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.create(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.findOne(id);
  }

  @Patch(':id') // MUDANÇA 2: Usando PATCH para atualização parcial
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.update(id, updateFilmeDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT) // MUDANÇA 3: Código de status explícito
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.remove(id);
  }

  @Get(':id/atores')
  findActors(@Param('id', ParseIntPipe) id: number): Promise<AtorSummaryDto[]> {
    return this.filmeService.findActors(id);
  }

    // NOVO ENDPOINT DE ASSOCIAÇÃO
    @Post(':filmeId/atores/:atorId')
    addAtor(
        @Param('filmeId', ParseIntPipe) filmeId: number,
        @Param('atorId', ParseIntPipe) atorId: number,
    ): Promise<AtorSummaryDto[]> {
        return this.filmeService.addAtorAoFilme(filmeId, atorId);
    }

}