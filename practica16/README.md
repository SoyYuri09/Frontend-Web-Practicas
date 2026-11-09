## **Preguntas de la práctica**

### **Paso 1.1: ¿Por qué se usa un contexto y no props para la sesión?**
#### Para que la información de la sesión no tenga que pasarse de hijo en hijo a través de todo el árbol de componentes; se crea un canal que se comparte con todos, para que aquellos que necesiten información de la sesión puedan acceder a él sin recibirlo por props.

### **Paso 1.2: ¿Qué pasa si un componente usa la sesión fuera del proveedor?**
#### El componente intenta leer la sesión, pero el proveedor no se la entrega; al estar fuera del contexto, la función useContext() devuelve null (el proyecto lanza un error al detectar esto y la página no se pinta).

### **Paso 2.1: ¿Dónde se guarda el token y qué riesgo tiene ese lugar?**
#### Se guarda en localStorage. Tiene el riesgo de ataques XSS (Cross-site scripting): un atacante puede acceder a localStorage mediante JavaScript y alterar la información almacenada ahí (por ejemplo, robar el token).