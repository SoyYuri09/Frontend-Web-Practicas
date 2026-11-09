# Práctica 17

## Ejercicio 1: partir por ruta y medir

**¿Cuánto se ahorró y por qué el ahorro es pequeño en esta aplicación?**

Al entrar a `/clases`, se difieren las otras cuatro páginas, cuyos archivos JavaScript suman 6.25 kB (aproximadamente 2.86 kB comprimidos con gzip). No se conservó el resultado del build anterior a `React.lazy`, así que no es posible confirmar una diferencia exacta entre ambos builds. El ahorro es pequeño porque las páginas contienen poco código y la mayor parte del bundle inicial corresponde a dependencias compartidas de la aplicación.

**¿Por qué falla la API si el preview corre en el puerto 4173?**

El navegador considera distintos orígenes a `localhost:4173` y `localhost:5173`, porque el puerto forma parte del origen. Si el backend solo permite el origen del servidor de desarrollo (`5173`), rechaza las solicitudes del preview (`4173`) por CORS. Se debe permitir también el origen del preview en la configuración CORS del backend o ejecutar el preview en un puerto permitido.

## Ejercicio 2: un store para las inscripciones

**¿Cuándo conviene un contexto y cuándo un store?**

Conviene usar Context para compartir información relativamente estable dentro de un árbol de componentes, como la sesión del usuario, sin pasarla manualmente por props. Un store como Zustand es más adecuado para estado compartido entre páginas o componentes alejados que cambia con frecuencia y necesita acciones centralizadas, como la lista de inscripciones. Zustand permite acceder a ese estado sin envolver la aplicación en un Provider.