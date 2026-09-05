# Práctica 2:

## Paso 2: El dominio, antes que el programa

**¿Por qué usar una unión de valores y no un enum?**
Porque la unión no le mete peso extra al archivo final de JavaScript, mientras que el enum sí crea código adicional que no se necesita.

## Paso 3: El dominio, antes que el programa

**¿Qué se gana con el tipo desconocido en lugar del que acepta todo?**
Con any TypeScript si deja llamar propiedades que no existen, lo que provoca que el programa truene al correr y el otro, el unknown el compilador obliga a revisar y validar los datos antes de tocarlos, evitando errores en tiempo de ejecución.