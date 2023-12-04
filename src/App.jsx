import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import UncontrolledExample from './components/Carousel/Carousel';
import Inicio from './pages/Inicio';
import Ofertas from './pages/Ofertas';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Ayuda from './pages/Ayuda';

import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart'


function App() {
  return (
    <div className='App'>
      <div>
        <img className='logo' src="https://i.ibb.co/vkndSCV/logo-removebg-preview.png" alt="Logo" />
      </div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/' element={<NavBar />} />
            <Route index element={<Inicio />} />
            <Route path='Ofertas' element={<Ofertas />} />
            <Route path='Productos' element={<Productos />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='Ayuda' element={<Ayuda />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            {/* <UncontrolledExample /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
