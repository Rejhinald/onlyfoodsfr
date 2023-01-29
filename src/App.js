import { Row, Container, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from './Screen/ProductScreen';
import Registerscreen from './Screen/Registerscreen';
import DirectorProductsScreen from './Screen/DirectorProductsScreen';
import Slider from './Components/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './bootstrap.min.css';
import './App.css';
import AddProduct from './Screen/AddProduct';

function App() {
  return (
  <Router>
    <Header/>
    {/* <Slider /> */}
    <main>
      <Routes>
      <Route path='/' element={<HomeScreen />} exact/>
      <Route path='/products/:id' element={<ProductScreen />} />
      <Route path='/directorproducts/:id' element={<DirectorProductsScreen />} />
      <Route path='/signup' element={<Registerscreen />} />
      <Route path='/addmovie' element={<AddProduct />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  );
}

export default App;
