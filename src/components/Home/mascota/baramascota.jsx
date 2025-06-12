import React from 'react';
import { Link } from 'react-router-dom';

const MisMascotas = () => {
  return (
    <nav className="bg-gray-100">
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Mis mascotas</h1>
        <Link
          to="/nuevamascota"
          className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 px-4 rounded transition"
        >
          + Añadir
        </Link>
      </div>
    </nav>
  );
};

export default MisMascotas;
