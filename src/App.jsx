
import './App.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MisMascotas from './pages/MisMascotas';



import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Services from './components/Services';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';

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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;