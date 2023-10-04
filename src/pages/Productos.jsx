import '../App.css'
import React, { useEffect, useState } from 'react';
import { getProductsByCategory } from '../asyncMock';
import ItemCount from '../components/ItemCount/ItemCount'; 
import ItemDetail from '../components/ItemDetail/ItemDetail';

const categorias = [
  'Sillas Gamers',
  'Auriculares',
  // Agrega más categorías luego
];

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState(categorias[0]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(selectedCategory)
      .then((result) => {
        setProductos(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos', error);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className='Productos'>
      <h1>Productos</h1>
      <div>
        <label htmlFor="category">Selecciona una categoría: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <img src={producto.img} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>Descripción: {producto.descripcion}</p>
              <ItemCount
                stock={producto.stock}
                initial={1} // valor inicial 
                onAdd={(quantity) => {
                  // se ejecutará cuando se agregue al carrito
                  console.log(`Se agregarán ${quantity} unidades de ${producto.nombre} al carrito.`);
                  // Puedes implementar la lógica para agregar al carrito aquí
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Productos;
