# Práctica 15

## Ejercicio 1: el router y el catálogo

**¿Por qué el 404 sí tiene encabezado y pie?**
La ruta comodín (`*`) está definida como hija de la ruta que renderiza `<Layout />`. Por eso, cuando no coincide ninguna ruta, `NoEncontrado` se muestra dentro del `<Outlet />` del layout y se mantienen visibles el encabezado y el pie de página.

**¿Qué cambia en la pestaña Red si usas `<a href>` en lugar de `Link`?**
`Link` de React Router intercepta la navegación y cambia la ruta sin volver a cargar el documento completo; en la pestaña Red normalmente no aparece una nueva solicitud de tipo documento al navegar entre páginas. En cambio, `<a href>` provoca una navegación del navegador y una recarga completa de la aplicación, por lo que aparece una nueva solicitud del documento HTML y se vuelven a cargar los recursos que correspondan.

## Ejercicio 2: el detalle de una clase

**¿En qué tipo de dato llega el `id` de la URL y qué pasa si no lo conviertes?**
`useParams` entrega los parámetros de la ruta como cadenas de texto (`string`; pueden ser `undefined` si el parámetro no existe). Por eso se convierte con `Number(id)` antes de pasarlo a `useClase`, que espera un número.

**¿Qué pasa al ir de `/clases/1` a `/clases/2` si el `id` no está en las dependencias del efecto?**
React Router puede reutilizar el mismo componente de detalle al cambiar el parámetro. Si el efecto no depende de `id`, no se vuelve a ejecutar al pasar de `/clases/1` a `/clases/2`, así que no se solicita la segunda clase y puede seguir mostrándose la información de la primera. Incluir `id` en las dependencias hace que el efecto solicite los datos correspondientes a la nueva ruta.