import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FilmeController } from './filme.controller';
import { FilmeService } from './filme.service';
import { AtorModule } from 'src/ator/ator.module';
import { FilmeRepository } from './filme.respository';
import { GeneroModule } from 'src/genero/genero.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AtorModule), forwardRef(() => GeneroModule)],
  controllers: [FilmeController],
  providers: [FilmeService, FilmeRepository],
  exports: [FilmeRepository],
})
export class FilmeModule {}