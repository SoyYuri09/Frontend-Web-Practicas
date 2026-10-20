import { useState } from "react";
import { productos, type Producto } from "./datos.ts";
import { Layout }  from "./Layout.tsx";
import { Encabezado } from "./Encabezado.tsx";
import { PiePagina } from "./PiePagina.tsx";
import { Catalogo }  from "./Catalogo.tsx";
import { Filtro } from "./Filtro.tsx";


const categorias = ['todas', ...new Set(productos.map((p) => p.categoria))];

export default function App() {

  const [categoria, setCategoria] = useState('todas');
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const visibles = categoria === 'todas' ? productos : productos.filter((p) => p.categoria === categoria);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  return (
    <Layout encabezado={<Encabezado piezas={carrito.length} />} pie={<PiePagina piezas={carrito.length} total={total} />}>
      <section className="portada">
        <h1>Catalogo de temporada</h1>
        <p>{visibles.length} productos disponibles</p>
      </section>
      <Filtro categoria={categorias} activa={categoria} onCambiar={setCategoria} />
      <Catalogo productos={visibles} onAgregar={(producto) => setCarrito([...carrito, producto])} />
    </Layout>
  )
}