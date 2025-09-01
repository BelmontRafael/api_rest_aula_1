import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { AtorDto } from 'src/ator/dto/ator.dto';
import { AtorSummaryDto } from 'src/ator/dto/ator-summary.dto';
import { HateoasInterceptor } from 'src/hateoaas/hateoas.interceptor';
import { generateFilmeLinks } from 'src/hateoaas/hateoas.helper';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @UseInterceptors(new HateoasInterceptor(generateFilmeLinks))
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.create(createFilmeDto);
  }

  @Get()
  @UseInterceptors(new HateoasInterceptor(generateFilmeLinks))
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @UseInterceptors(new HateoasInterceptor(generateFilmeLinks))
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(new HateoasInterceptor(generateFilmeLinks))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.update(id, updateFilmeDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.remove(id);
  }

  @Get(':id/atores')
  @UseInterceptors(new HateoasInterceptor(generateFilmeLinks))
  findActors(@Param('id', ParseIntPipe) id: number): Promise<AtorSummaryDto[]> {
    return this.filmeService.findActors(id);
  }

    @Post(':filmeId/atores/:atorId')
    addAtor(
        @Param('filmeId', ParseIntPipe) filmeId: number,
        @Param('atorId', ParseIntPipe) atorId: number,
    ): Promise<AtorSummaryDto[]> {
        return this.filmeService.addAtorAoFilme(filmeId, atorId);
    }

}