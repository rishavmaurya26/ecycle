import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Signin from './pages/Signin/Signin';
import Register from './pages/register/Register';
import Catalog from './pages/cycle_catalog/Catalog';
import ContactUs from './pages/contactus/ContactUs';
import ComponentCatalog from './pages/component_catalog/ComponentCatalog';
import Bike from './components/Bike/Bike';
 import Part from './components/Part/Part';
import BlogsList from './pages/BlogsList/BlogsList';
import Storelocator from './pages/storelocator/storelocator';
import Finance from './pages/finance/finance';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/bike_catalog" element={<Catalog/>}></Route>
    <Route path="/bike_catalog/:id" element={<Bike/>}></Route>
    <Route path="/Part_catalog" element={<ComponentCatalog/>}></Route>
    <Route path="/Part_catalog/:id" element={<Part/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/bloglist" element={<BlogsList/>}></Route>
    <Route path="/storelocator" element={<Storelocator/>}></Route>
    <Route path="/finance" element={<Finance/>}></Route>
    </Routes>
    </BrowserRouter>      
  );
}

export default App;
