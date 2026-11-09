# Práctica 17 

## Ejercicio 1: mis insccripciones, sólo con sesión

**¿La ruta protegida hace segura la aplicacióno? ¿Qué es lo que de verdad protege los datos?**
Porque el servidor ya conoce al usuario autenticado desde la sesión o el token. No hace falta enviarlo desde el frontend, ya que el backend lo obtiene de la identidad del usuario logueado.

## Ejercicio 2: inscribirse y el 401

**¿Por qué no se manda el miembroId al inscribirse?**
- `401`: no autenticado o token inválido/expirado.
- `403`: autenticado, pero sin permisos para esa acción.
