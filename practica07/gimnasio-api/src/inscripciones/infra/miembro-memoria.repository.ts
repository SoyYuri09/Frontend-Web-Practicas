import { Injectable } from '@nestjs/common';
import { MiembroRepository } from '../dominio/miembro.repository';
import { Miembro } from '../dominio/entidades';
import { CrearMiembroDto } from '../dto/crear-miembro.dto';
import { ActualizarMiembroDto } from '../dto/actualizar-miembro.dto';

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
  private miembros: Miembro[] = [];
  private siguienteId = 4;

  async listar(): Promise<Miembro[]> {
    return this.miembros;
  }

  async buscarPorId(id: number): Promise<Miembro | null> {
    return this.miembros.find((m) => m.id === id) ?? null;
  }

  async crear(datos: CrearMiembroDto): Promise<Miembro>{
    const nuevo: Miembro = {
        id: this.siguienteId++,
        nombre: datos.nombre,
        correo: datos.correo,
        membresia: datos.membresia,
        activo: true, // por defecto se puso activo porque al crear un miembro nuevo se asume que debe estar activo para existir
    };
    this.miembros.push(nuevo);
    return nuevo;
  }

  async actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null> {
      const miembro = this.miembros.find((m) => m.id === id);
      if (!miembro) return null;

      if(datos.nombre !== undefined){
        miembro.nombre = datos.nombre;
      }

      if(datos.correo !== undefined){
        miembro.correo = datos.correo;
      }

      if(datos.membresia !== undefined){
        miembro.membresia = datos.membresia;
      }

      if(datos.activo !== undefined){
        miembro.activo = datos.activo;
      }
      return miembro;
  }

  async eliminar(id: number): Promise<boolean> {
      const miembro = this.miembros.find((m) => m.id === id);
      if(!miembro) return false;

      this.miembros = this.miembros.filter((m) => m.id !== id);
      return true;
  }
}