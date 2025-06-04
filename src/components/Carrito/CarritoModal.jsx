// src/components/Carrito/CarritoModal.jsx
import React from 'react';

const CarritoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 flex justify-end z-50">

      <div className="w-[300px] h-full bg-white p-4 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">🛒 Carrito de compras</h2>
        <p className="text-center text-gray-500">Tu carrito está vacío</p>
        <button
  onClick={onClose}
  className="mt-6 w-full text-white py-2 rounded bg-[#61dafb] hover:bg-teal-500 transition-colors duration-300"
>
  Elegir Productos
</button>


      </div>
    </div>
  );
};

export default CarritoModal;

