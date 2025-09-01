import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { GeneroService } from "./genero.service";
import { CreateGeneroDto } from "./dto/create-genero.dto";
import { UpdateGeneroDto } from "./dto/update-genero.dto";
import { HateoasInterceptor } from "src/hateoaas/hateoas.interceptor";
import { generateGeneroLinks } from "src/hateoaas/hateoas.helper";

@Controller('generos')
export class GeneroController {
    constructor(private readonly generoService: GeneroService) {}

    @Post()
    @UseInterceptors(new HateoasInterceptor(generateGeneroLinks))
    create(@Body() createGeneroDto: CreateGeneroDto) {
        return this.generoService.create(createGeneroDto);
    }

    @Get()
    @UseInterceptors(new HateoasInterceptor(generateGeneroLinks))
    findAll() {
        return this.generoService.findAll();
    }

    @Get(':id')
    @UseInterceptors(new HateoasInterceptor(generateGeneroLinks))
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.generoService.findOne(id);
    }

    @Patch(':id')
    @UseInterceptors(new HateoasInterceptor(generateGeneroLinks))
    update(@Param('id', ParseIntPipe) id: number, @Body() updateGeneroDto: UpdateGeneroDto) {
        return this.generoService.update(id, updateGeneroDto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.generoService.remove(id);
    }
}