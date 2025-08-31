import { Module } from "@nestjs/common";
import { GeneroController } from "./genero.controller";
import { GeneroService } from "./genero.service";
import { GeneroRepository } from "./genero.repository";

@Module({
    controllers: [GeneroController],
    providers: [GeneroService, GeneroRepository],
    exports: [GeneroRepository]
})
export class GeneroModule {}