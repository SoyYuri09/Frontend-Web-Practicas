import { kStringMaxLength } from 'buffer';
import type { Prestamo, EstadoPrestamo } from '../dominio/prestamo.entity.js';


// Respuesta
export interface PrestamoResponseDto {
  folio: string;
  libroId: string;
  ejemplares: number[];
  socioId: string;
  estado: EstadoPrestamo;
  creadoEn: string;
}

// Petición
export interface CrearPrestamoRequestDto {
    libroId: string;
    socioId: string;
    ejemplares: number[];
}

// Error
export interface ErrorResponseDto {
    error: String;
    mensaje: String;
    detalles?: string[];
}

// MAPPER entidad a DTO
export function aResponseDto(p: Prestamo): PrestamoResponseDto {
  return {
    folio: p.folio,
    libroId: p.libroId,
    ejemplares: p.ejemplares,
    socioId: p.socioId,
    estado: p.estado,
    creadoEn: p.creadoEn.toISOString(),
  }
}