import React, { useEffect, useState, useContext } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';
import { CartContext } from '../components/Context/CartContext';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../components/services/firebase/firebaseConfig';

const categorias = [
  'Sillas Gamers',
  'Auriculares',
  // Agrega más categorías luego
];

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    // Query para obtener todos los productos desde Firebase
    const collectionRef = collection(db, 'items');

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productsData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          productsData.push({ id: doc.id, ...data });
        });
        setProductos(productsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });
  }, []);

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
              <img src={producto.img} alt={producto.titulo} />
              <h2>{producto.titulo}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>Descripción: {producto.categoria}</p>
              <ItemCount
                stock={producto.stock}
                initial={1}
                onAdd={(quantity) => {
                  addItem(producto, quantity);
                  console.log(`Se agregarán ${quantity} unidades de ${producto.nombre} al carrito.`);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Productos;
