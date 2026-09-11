import assert from 'node:assert';
import { InMemoryPrestamoRepository } from '../infra/in-memory-prestamo.repository.js';
import { PrestamoService } from '../servicios/prestamo.service.js';
import { EjemplarPrestadoError } from '../errores/ejemplar-prestado.error.js';
// Clase de prueba para el service y poder escribir dor pruebas, camino feliz y ejemplar prestado
async function ejecutarPruebas() {
  const repo = new InMemoryPrestamoRepository();
  const service = new PrestamoService(repo);

  // 1. Camino feliz: préstamo exitoso
  const resultado = await service.crear({
    libroId: 'LIB-01',
    socioId: 'SOCIO-10',
    ejemplares: [1, 2]
  });

  assert.ok(resultado.folio, 'El préstamo debe tener un folio asignado');
  assert.strictEqual(resultado.estado, 'activo');
  assert.deepStrictEqual(resultado.ejemplares, [1, 2]);
  assert.strictEqual(
    (resultado as any).costoReposicion,
    undefined,
    'El costo de reposición no debe salir en el DTO'
  );
  console.log('Prueba 1 superada: Camino feliz');

  // 2. Ejemplar duplicado
  try {
    await service.crear({
      libroId: 'LIB-01',
      socioId: 'SOCIO-20',
      ejemplares: [1, 3]
    });
    assert.fail('Debió lanzar un error de ejemplar prestado');
  } catch (error) {
    assert.ok(
      error instanceof EjemplarPrestadoError,
      'El error debe ser de tipo EjemplarPrestadoError'
    );
    console.log('Prueba 2 superada: Ejemplar duplicado');
  }
}

ejecutarPruebas();