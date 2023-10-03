import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import UncontrolledExample from './components/Carousel/Carousel';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/Item/:ItemId' element={<ItemDetailContainer/>} /> */}
          <Route path="../pages/Inicio" component={Inicio} />
          <Route path="/Ofertas" component={Ofertas} />
          <Route path="/Productos" component={Productos} />
          <Route path="/Ayuda" component={Ayuda} />
          <Route path="/Contacto" component={Contacto} />
          <Route path='*' element={<h1> 404 NOT FOUND </h1>} />
          {/* <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/> */}
          {/* <UncontrolledExample/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
