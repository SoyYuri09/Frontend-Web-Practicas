import { Module } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { MiembrosController } from './miembros.controller';
import { MIEMBRO_REPOSITORY } from './miembros.token';
import { MiembroMemoriaRepository } from './infra/miembro-memoria.repository';

@Module({
  controllers: [MiembrosController],
  providers: [MiembrosService, {
    provide: MIEMBRO_REPOSITORY,
    useClass: MiembroMemoriaRepository,
  }],
})
export class MiembrosModule {}