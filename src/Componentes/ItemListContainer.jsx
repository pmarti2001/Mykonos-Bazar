import { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/src/data/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h2>Catálogo de Productos</h2>

      <div className="productos-container">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;