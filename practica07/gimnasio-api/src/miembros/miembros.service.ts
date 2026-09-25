import { Inject, Injectable } from '@nestjs/common';
import { MIEMBRO_REPOSITORY } from './miembros.token';
import type { MiembroRepository } from './dominio/miembro.repository';
import { Miembro } from 'src/inscripciones/dominio/entidades';
import { CrearMiembroDto } from './dto/crear-miembro.dto';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto';

@Injectable()
export class MiembrosService {
    constructor (
        @Inject(MIEMBRO_REPOSITORY)
        private readonly repo: MiembroRepository
    ) {}

    listar(): Promise<Miembro[]> {
        return this.repo.listar();
    }

    buscar(id: number): Promise<Miembro | null> {
        return this.repo.buscarPorId(id);
    }

    async crear(dto: CrearMiembroDto): Promise<Miembro> {
        return this.repo.crear(dto);
    }

    actualizar(id: number, dto: ActualizarMiembroDto): Promise<Miembro | null> {
        return this.repo.actualizar(id, dto);
    }

    eliminar(id: number): Promise<boolean> {
        return this.repo.eliminar(id);
    }
}