import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import UncontrolledExample from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola"}/>
      {/* <UncontrolledExample/> */}
    </div>
  );
}

export default App;
