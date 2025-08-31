import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { GeneroService } from "./genero.service";
import { CreateGeneroDto } from "./dto/create-genero.dto";
import { UpdateGeneroDto } from "./dto/update-genero.dto";

@Controller('generos')
export class GeneroController {
    constructor(private readonly generoService: GeneroService) {}

    @Post()
    create(@Body() createGeneroDto: CreateGeneroDto) {
        return this.generoService.create(createGeneroDto);
    }

    @Get()
    findAll() {
        return this.generoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.generoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateGeneroDto: UpdateGeneroDto) {
        return this.generoService.update(id, updateGeneroDto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.generoService.remove(id);
    }
}