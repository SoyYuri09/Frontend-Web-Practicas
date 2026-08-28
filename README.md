# Práctica 1:

## Paso 2: Escribir el error de JavaScript

### Predicción antes de ejecutar
Según mis conocimientos sobre JavaScript, lo que imprimirá la consola al ejecutar la función es la concatenación del monto '350' con el cargo fijo que es de '50'

### Resultado obtenido
Cuando se ejecutó el archivo multas.js, efectivamente la consola imprimió la concatenación de '350' y '50' dando como resultado '35050'

**1.- ¿hubo algún error, alguna advertencia o algo en la consola que avisara?**
No, no hubo ningún error ni advertenia de ningún tipo al ejecutar el archivo, esto pasa porque en sí en JavaScript cuando el lenguaje ve un simbolo de '+' entre un valor de tipo string y uno de tipo number, lo que hace JS es convertir implicitamente los tipos, convirtiendo el tipo number a string y por eso lo concatena

## Paso 3: Anotar el tipo

**2.- si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?**
Primero esto pasa porque Node.js ejecuta archivos TypeScript eliminando todos los tipos durante ese proceso en donde se esta cargando el archivo para ejecutarlo, también Node.js lo que hace es ignora o quitar las anotaciones e interfaces de TypeScript para transformarlo en JavaScript.
En cuanto al comando que revisa es este 'npx tsc --noEmit' ya que ejecuta el compilador de TypeScript pero como le estamos indicando el '--noEmit' no generará archivos de salida.
Y el comando que ejecuta es el 'node multas.ts' que simplemente corre el archivo.