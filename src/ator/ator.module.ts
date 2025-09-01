import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AtorController } from './ator.controller';
import { AtorService } from './ator.service';
import { FilmeModule } from 'src/filme/filme.module';
import { AtorRepository } from './ator.respository';

@Module({
  imports: [DatabaseModule, forwardRef(() => FilmeModule)],
  controllers: [AtorController],
  providers: [AtorService, AtorRepository],
  exports: [AtorRepository, AtorService],
})
export class AtorModule {}