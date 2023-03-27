import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from './Screen/ProductScreen';
import Registerscreen from './Screen/Registerscreen';
import GenresScreen from './Screen/GenresScreen';
import LoginScreen from './Screen/LoginScreen';
import PlanScreen from './Screen/PlanScreen';
import GenreProductsScreen from './Screen/GenreProductsScreen';
import AddGenreScreen from './Screen/AddGenreScreen';
import './bootstrap.min.css';
import './App.css';
import AddProductScreen from './Screen/AddProductScreen';
import UserProfileScreen from './Screen/UserProfileScreen';
import ProductListScreen from './Screen/ProductListScreen';
import DeletedProductScreen from './Screen/DeletedProductScreen';
import UpdateUserProfileScreen from './Screen/UpdateUserProfileScreen';
import EditProductScreen from './Screen/EditProductScreen';
import UserListScreen from './Screen/UserListScreen';
import UpdateUserScreen from './Screen/UpdateUserScreen';
import AddThemeScreen from './Screen/AddThemeScreen';
import EditThemeScreen from './Screen/EditThemeScreen';
import DeletedThemeScreen from './Screen/DeletedThemeScreen';
import ThemeListScreen from './Screen/ThemeListScreen';
import FAQ from './Screen/FAQScreen'

function App() {
  return (
  <Router>
    <Header/>
    {/* <Slider /> */}
    <main>
      <Routes>
      <Route path='/' element={<HomeScreen />} exact/>
      <Route path='/products/:id' element={<ProductScreen />} />
      <Route path='/signup' element={<Registerscreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/plans' element={<PlanScreen />} />
      <Route path='/userprofile' element={<UserProfileScreen />} />
      <Route path='/userlist' element={<UserListScreen />} />
      <Route path='/updateuserprofile' element={<UpdateUserProfileScreen />} />
      <Route path='/updateuserinfo/:id' element={<UpdateUserScreen />} />
      <Route path='/addproduct' element={<AddProductScreen />} />
      <Route path='/editproduct/:id' element={<EditProductScreen />} />
      <Route path='/addcategory' element={<AddGenreScreen />} />
      <Route path='/category' element={<GenresScreen />} />
      <Route path='/categoryproducts/:id' element={<GenreProductsScreen />} />
      <Route path='/menulist' element={<ProductListScreen />} />
      <Route path='/deleted' element={<DeletedProductScreen/>} />
      <Route path='/addtheme' element={<AddThemeScreen/>} />
      <Route path='/deleted2' element={<DeletedThemeScreen/>} />
      <Route path='/edittheme/:id' element={<EditThemeScreen />} />
      <Route path='/themelist' element={<ThemeListScreen />} />
      <Route path='/faq' element={<FAQ />} />
      {/* <Route path='/paypal' element={<SubscriptionForm/>} /> */}
      {/* <Route path='/plandetails' element={<PlanDetailsScreen/>} /> */}
      </Routes>
    </main>
    <Footer fixed="bottom"/>
  </Router>
  );
}

export default App;
