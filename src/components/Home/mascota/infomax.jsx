import React from 'react';
import { useNavigate } from 'react-router-dom';
import MisuImg from '../../../assets/mascotas/gato2.jpg'; // Asegúrate de que la ruta sea correcta

const MisuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-6 rounded-3xl">
      {/* Botones de pestañas */}
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => navigate('/infomax')}
          className="bg-gray-300 px-4 py-2 rounded-t-lg shadow text-black font-medium hover:bg-gray-400"
        >
          Información
        </button>
        <button
          onClick={() => navigate('/registro-vacunas')}
          className="bg-gray-300 px-4 py-2 rounded-t-lg shadow text-black font-medium hover:bg-gray-400"
        >
          Registro de vacunas
        </button>
      </div>

      {/* Información de la mascota */}
      <div className="bg-gray-200 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-4 w-full md:w-1/2">
          <div>
            <label className="block font-semibold mb-1">Nombre de la mascota</label>
            <input
              type="text"
              defaultValue="Misu"
              className="w-full p-2 border rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Especie</label>
            <input
              type="text"
              defaultValue="Felino"
              className="w-full p-2 border rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Sexo</label>
            <input
              type="text"
              defaultValue="Hembra"
              className="w-full p-2 border rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Raza</label>
            <input
              type="text"
              defaultValue="Ragdoll"
              className="w-full p-2 border rounded-md"
              readOnly
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={MisuImg}
            alt="Misu"
            className="rounded-full object-cover w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default MisuPage;

