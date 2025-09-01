import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { AtorService } from './ator.service';
import { CreateAtorDto } from './dto/create-ator.dto';
import { UpdateAtorDto } from './dto/update-ator.dto';
import { generateAtorLinks } from 'src/hateoaas/hateoas.helper';
import { HateoasInterceptor } from 'src/hateoaas/hateoas.interceptor';

@Controller('atores')
export class AtorController {
  constructor(private readonly atorService: AtorService) {}

  @Post()
  @UseInterceptors(new HateoasInterceptor(generateAtorLinks))
  create(@Body() createAtorDto: CreateAtorDto) {
    return this.atorService.create(createAtorDto);
  }

  @Get()
  @UseInterceptors(new HateoasInterceptor(generateAtorLinks))
  findAll() {
    return this.atorService.findAll();
  }

  @Get(':id')
  @UseInterceptors(new HateoasInterceptor(generateAtorLinks))
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atorService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(new HateoasInterceptor(generateAtorLinks))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAtorDto: UpdateAtorDto) {
    return this.atorService.update(id, updateAtorDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseInterceptors(new HateoasInterceptor(generateAtorLinks))
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atorService.remove(id);
  }
}