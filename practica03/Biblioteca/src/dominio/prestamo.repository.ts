import type { Repository } from './repository.js';
import type { Prestamo } from './prestamo.entity.js';

export interface PrestamoRepository {
  findByLibro(libroId: string): Promise<Prestamo[]>;
}
