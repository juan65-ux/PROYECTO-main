
import './App.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MisMascotas from './pages/MisMascotas';
import ProductosyOfertas from './pages/ProductosyOfertas';



import Header from './components/Home/Header';
import Navbar from './components/Home/Navbar';
import Carousel from './components/Home/Carousel';
import WhatsAppButton from './components/Home/WhatsAppButton';
import Footer from './components/Home/Footer';
import ProductList from './components/Home/ProductList';
import Services from './components/Home/Services';
import ProductCard from './components/Home/ProductCard';
import AboutUs from './components/Home/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      {/* Puedes agregar enlaces de navegación temporales para prueba 
      <nav style={{ padding: '1rem' }}>
        <Link to="/">Inicio</Link> 
      </nav> */}

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
      </Routes>
      {/* Puedes agregar más rutas aquí */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;