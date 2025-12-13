import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { CartProvider } from "./component/CartContext";
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Cart from './component/Cart';
import Registeration from "./component/Registeration";
import "./App.css"
import Details from "./component/Details";
function App() {
  return (
    

     <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registeration" element={<Registeration />} />
          <Route path="/details/:id" element={<Details />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
