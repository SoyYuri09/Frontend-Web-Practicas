// Declarar un tipo que define los estados del préstamo
type EstadoPrestamo = 'activo' | 'vencido' | 'devuelto';

// Declarar interfaz que define la estructura del préstamo
interface Prestamo{
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string;
}

// Función para sumar el cargo fijo a la multa del préstamo
function calcularMulta(prestamo: Prestamo){
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

// Función para generar el texto del recibo según si existe o no el socio
function reciboDe(prestamo: Prestamo): string {
    if (prestamo.socio === undefined){
        return `Recibo de socio no registrado | Total: $${calcularMulta(prestamo)}`;
    }
    return `Recibo de ${prestamo.socio} | Total: $${calcularMulta(prestamo)}`;
}

// Objeto de prueba tipado con la interfaz Prestamo
const prestamo: Prestamo = { 
    folio: "F001",
    multa: 350, 
    ejemplar: 14,
    estado: 'vencido',
    socio: "Juan Pérez"
};

// Ejecución y mostrar el recibo en consola
console.log(reciboDe(prestamo));