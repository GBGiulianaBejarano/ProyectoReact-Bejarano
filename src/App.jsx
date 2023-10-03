import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import UncontrolledExample from './components/Carousel/Carousel';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola"}/>
      <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
      {/* <UncontrolledExample/> */}
    </div>
  );
}

export default App;
