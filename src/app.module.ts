import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GeneroModule } from './genero/genero.module';
import { FilmeModule } from './filme/filme.module';
import { AtorModule } from './ator/ator.module';

@Module({
  imports: [DatabaseModule, FilmeModule, AtorModule, GeneroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
