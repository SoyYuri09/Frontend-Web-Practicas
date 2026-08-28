// declarar una constante e intentar reasignarla
const valor = 100;
valor = 250;

// declarar con let, reasignarla y asignarle un texto
let total = 20;
total = 20;
total = "veinte";

// declarar un objeto con const, cambiar una propiedad y reasignar el objeto
const videojuego = { 
    titulo: "Geometry Dash",
    logros: 547,
};
videojuego.logros = 320;
videojuego = { titulo: "Nine Sols", logros: 35 };