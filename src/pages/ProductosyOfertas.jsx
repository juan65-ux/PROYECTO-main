import React from 'react';
//
import { useState } from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Collar Antipulgas',
    precio: 25000,
    imagen: '/images/productos/collar.jpg',
  },
  {
    id: 2,
    nombre: 'Alimento para Perros',
    precio: 85000,
    imagen: '/images/productos/comida-perro.jpg',
  },
  {
    id: 3,
    nombre: 'Juguete para Gatos',
    precio: 18000,
    imagen: '/images/productos/juguete-gato.jpg',
  },
  {
    id: 4,
    nombre: 'Shampoo para Mascotas',
    precio: 30000,
    imagen: '/images/productos/shampoo.jpg',
  },
];

const ProductosyOfertas = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">Productos y Ofertas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow rounded-lg p-4">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="h-40 w-full object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600">${producto.precio.toLocaleString('es-CO')}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="mt-3 w-full bg-teal-500 hover:bg-teal-600 text-white py-1.5 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {carrito.length > 0 && (
        <div className="mt-10 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-teal-700 mb-2">Carrito:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio.toLocaleString('es-CO')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductosyOfertas;
