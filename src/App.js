import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Signin from './pages/Signin/Signin';
import Register from './pages/register/Register';
import Catalog from './pages/cycle_catalog/Catalog';
import Contactus from './pages/contactus/Contactus';
import Component_catalog from './pages/component_catalog/Component_catalog';
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
    <Route path="/contact" element={<Contactus/>}></Route>
    <Route path="/component_catalog" element={<Component_catalog/>}></Route>
    </Routes>
    </BrowserRouter>      
  );
}

export default App;
