import { Module } from '@nestjs/common';
import { MiembrosService } from './miembros.service';

@Module({
  providers: [MiembrosService]
})
export class MiembrosModule {}
