// src/pages/Tienda.jsx
import { FaStore } from 'react-icons/fa';

export default function Tienda() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-teal-500 text-5xl">
          <FaStore />
        </div>
        <h1 className="text-3xl font-bold mb-2">Nuestra Tienda</h1>
        <p className="text-gray-600 mb-6">
          Explora nuestra variedad de productos para mascotas. Desde alimentos hasta accesorios, tenemos todo lo que necesitas para el cuidado y bienestar de tu compañero peludo.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg"></div>
              <h2 className="text-lg font-semibold">Producto {item}</h2>
              <p className="text-gray-500">Descripción breve del producto {item}.</p>
              <button className="mt-3 bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600">
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
