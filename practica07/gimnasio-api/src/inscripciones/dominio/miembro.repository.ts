import { ActualizarMiembroDto } from "../dto/actualizar-miembro.dto";
import { CrearMiembroDto } from "../dto/crear-miembro.dto";
import { Miembro } from "./entidades";

export interface MiembroRepository {
      listar(): Promise<Miembro[]>;
      buscarPorId(id: number): Promise<Miembro | null>;
      crear(datos: CrearMiembroDto): Promise<Miembro>;
      actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null>;
      eliminar(id: number): Promise<boolean>;
}