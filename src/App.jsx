import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Nike from "./Pages/Nike"
import Jorden from "./Pages/Jorden"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Adidas from "./Pages/Adidas"
import Favorites from "./Pages/Favorites";
import Login from "./Pages/Login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/nike" element={<Nike/>}/>
          <Route path="/jordan" element={<Jorden/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/adidas" element={<Adidas/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
