import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FilmeController } from './filme.controller';
import { FilmeService } from './filme.service';
import { AtorModule } from 'src/ator/ator.module';
import { FilmeRepository } from './filme.respository';

@Module({
  imports: [DatabaseModule],
  controllers: [FilmeController],
  providers: [FilmeService, FilmeRepository],
})
export class FilmeModule {}