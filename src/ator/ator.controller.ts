import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AtorService } from './ator.service';
import { CreateAtorDto } from './dto/create-ator.dto';
import { UpdateAtorDto } from './dto/update-ator.dto';

@Controller('atores')
export class AtorController {
  constructor(private readonly atorService: AtorService) {}

  @Post()
  create(@Body() createAtorDto: CreateAtorDto) {
    return this.atorService.create(createAtorDto);
  }

  @Get()
  findAll() {
    return this.atorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { // MUDANÇA 2: Usando ParseIntPipe
    return this.atorService.findOne(id);
  }

  @Patch(':id') // MUDANÇA 3: Usando PATCH para atualização parcial
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAtorDto: UpdateAtorDto) {
    return this.atorService.update(id, updateAtorDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT) // MUDANÇA 4: Código de status explícito
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atorService.remove(id);
  }
}