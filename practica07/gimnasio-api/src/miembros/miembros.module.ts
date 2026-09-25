import { Module } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { MiembrosController } from './miembros.controller';

@Module({
  providers: [MiembrosService],
  controllers: [MiembrosController]
})
export class MiembrosModule {}
