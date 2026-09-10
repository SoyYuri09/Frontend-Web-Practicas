import { Prestamo } from '../dominio/prestamo.entity.js';
import { PrestamoRepository } from '../dominio/prestamo.repository.js';

export class InMemoryPrestamoRepository implements PrestamoRepository {
  private prestamos = new Map<string, Prestamo>();

  async findById(folio: string): Promise<Prestamo | null> {
    const prestamo = this.prestamos.get(folio);
    return prestamo ?? null;
  }

  async findAll(): Promise<Prestamo[]> {
    return Array.from(this.prestamos.values());
  }

  async save(entity: Prestamo): Promise<Prestamo> {
    this.prestamos.set(entity.folio, entity);
    return entity;
  }

  async delete(folio: string): Promise<void> {
    this.prestamos.delete(folio);
  }

  async findByLibro(libroId: string): Promise<Prestamo[]> {
    const todos = await this.findAll();
    return todos.filter((p) => p.libroId === libroId);
  }
}