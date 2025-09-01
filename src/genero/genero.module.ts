import { forwardRef, Module } from "@nestjs/common";
import { GeneroController } from "./genero.controller";
import { GeneroService } from "./genero.service";
import { GeneroRepository } from "./genero.repository";
import { FilmeModule } from "src/filme/filme.module";

@Module({
    imports: [forwardRef(() => FilmeModule)],
    controllers: [GeneroController],
    providers: [GeneroService, GeneroRepository],
    exports: [GeneroRepository]
})
export class GeneroModule {}