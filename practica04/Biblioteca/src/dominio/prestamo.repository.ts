import { Prestamo } from './prestamo.entity.js';
import { Repository } from './repository.js';

export interface PrestamoRepository extends Repository<Prestamo> {
  findByLibro(isbn: string): Promise<Prestamo[]>;
}