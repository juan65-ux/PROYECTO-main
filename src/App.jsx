import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MisMascotas from './pages/MisMascotas';
import ProductosyOfertas from './pages/ProductosyOfertas';
import ServiciosPage from './pages/Servicios'; // ✅ Renombrado para evitar conflicto
import CampañasdeVacunacion from './pages/CampañasdeVacunacion';

import ProductosPerros from './components/Productos/ProductosPerros';
import ProductosGatos from './components/Productos/ProductosGatos';
import ProductosConejos from './components/Productos/ProductosConejos';

import CarritoModal from "./components/Carrito/CarritoModal";
import LoginModal from './components/LoginSection/LoginSection';
import Header from './components/Home/Header';
import Navbar from './components/Home/Navbar';
import Carousel from './components/Home/Carousel';
import WhatsAppButton from './components/Home/WhatsAppButton';
import Footer from './components/Home/Footer';
import ProductList from './components/Home/ProductList';
import ProductCard from './components/Home/ProductCard';
import AboutUs from './components/Home/AboutUs';
import Mapa from './components/Home/Mapa';
import Services from './components/Home/Services'; // ✅ Componente del Home

import Tienda from './pages/Tienda';
import Perfil from './pages/Perfil';
import Carrito from './pages/Carrito';
import Login from './pages/Login';

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const abrirCarrito = () => setModalAbierto(true);
  const cerrarCarrito = () => setModalAbierto(false);

  const [modalLoginAbierto, setModalLoginAbierto] = useState(false);
  const abrirLogin = () => setModalLoginAbierto(true);
  const cerrarLogin = () => setModalLoginAbierto(false);

  return (
    <BrowserRouter>
      {/* Contenedor sticky para Header + Navbar */}
      <div className="sticky top-0 z-50">
        <Header abrirCarrito={abrirCarrito} abrirLogin={abrirLogin} />
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Services />
              <Carousel />
              <WhatsAppButton />
              <ProductList />
              <ProductCard />
              <AboutUs />
            </>
          }
        />
        <Route path="/mis-mascotas" element={<MisMascotas />} />
        <Route path="/productos" element={<ProductosyOfertas />} />
        <Route path="/servicios" element={<ServiciosPage />} /> {/* ✅ cambiado */}
        <Route path="/campañas" element={<CampañasdeVacunacion />} />
        <Route path="/productos/perros" element={<ProductosPerros />} />
        <Route path="/productos/gatos" element={<ProductosGatos />} />
        <Route path="/productos/conejos" element={<ProductosConejos />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <CarritoModal isOpen={modalAbierto} onClose={cerrarCarrito} />
      <LoginModal isOpen={modalLoginAbierto} onClose={cerrarLogin} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
