# Práctica 16

## Ejercicio 1: el contexto de sesión

**¿Por qué se usa un contexto y no props para la sesión?**

La sesión la necesitan componentes distintos, como el encabezado y las páginas de entrar y registro. El contexto permite compartirla desde un proveedor común, sin pasarla como props por todos los componentes intermedios (prop drilling). Así, cada componente puede consultar o actualizar el estado de sesión cuando lo necesita.

**¿Qué pasa si un componente usa la sesión fuera del proveedor?**

`useSesion()` recibe `null` porque no hay un proveedor que le dé el valor del contexto. El hook detecta esa situación y lanza un error explícito (`useSesion() tiene que usarse dentro de <ProveedorSesion>`); por eso la aplicación falla en vez de continuar con una sesión indefinida. En esta aplicación, `ProveedorSesion` envuelve las rutas desde `main.tsx`.

## Ejercicio 2: entrar y mandar el token

**¿Dónde se guarda el token y qué riesgo tiene ese lugar?**

Se guarda en `localStorage`, bajo la clave `token` (el usuario se guarda por separado en `usuario`). El interceptor de Axios agrega el token como bearer en la cabecera `Authorization` de las solicitudes. El riesgo es que cualquier JavaScript que se ejecute en el mismo origen —por ejemplo, debido a una vulnerabilidad XSS— puede leerlo y robarlo; además, permanece guardado hasta cerrar sesión o borrarlo. Para una aplicación real se debe evaluar una estrategia más segura, como cookies `HttpOnly`, con los cambios correspondientes en el backend.