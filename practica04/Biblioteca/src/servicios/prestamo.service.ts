import type { PrestamoRepository } from '../dominio/prestamo.repository.js';
import type { Prestamo } from '../dominio/prestamo.entity.js';
import { nuevoFolio } from '../dominio/prestamo.entity.js';
import type { CrearPrestamoDto } from '../dto/crear-prestamo.dto.js';
import { EjemplarPrestadoError } from '../errores/ejemplar-prestado.error.js';

export class PrestamoService {
  constructor(private readonly repo: PrestamoRepository) {}

  async crear(dto: CrearPrestamoDto): Promise<Prestamo> {
    const delLibro = await this.repo.findByLibro(dto.libroId);

    const fuera = delLibro
      .filter((p) => p.estado === 'activo' || p.estado === 'vencido')
      .flatMap((p) => p.ejemplares);

    const choque = dto.ejemplares.find((e) => fuera.includes(e));
    if (choque !== undefined) {
      throw new EjemplarPrestadoError(choque);
    }

    const nuevoPrestamo: Prestamo = {
      folio: nuevoFolio(),
      creadoEn: new Date(),
      libroId: dto.libroId,
      ejemplares: dto.ejemplares,
      socioId: dto.socioId,
      estado: 'activo',
      costoReposicion: 350,
    };

    return this.repo.save(nuevoPrestamo);
  }

  async listarPorLibro(libroId: string): Promise<Prestamo[]>{
    return this.repo.findByLibro(libroId);
  }
}
