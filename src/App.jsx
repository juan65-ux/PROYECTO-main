
import { useState } from 'react'
import './App.css'



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
    <>
      <Header />
      <Navbar />
      <Services />
      <Carousel />
      <WhatsAppButton />
      <ProductList />
      <ProductCard />
      <AboutUs />
      <Footer />
      
    </>
  );
}

export default App;