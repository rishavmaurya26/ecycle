import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Signin from './pages/Signin/Signin';
import Register from './pages/register/Register';
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
    </Routes>
    </BrowserRouter>      
  );
}

export default App;
