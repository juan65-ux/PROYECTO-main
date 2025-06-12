import React from 'react';
import { useNavigate } from 'react-router-dom';
import gato2 from '../../../assets/mascotas/gato2.jpg'; // Asegúrate de que la ruta sea correcta

const VacunasMax = () => {
  const navigate = useNavigate();

  const handleGuardar = () => {
    // Lógica de guardado si es necesario...

    // Redirigir a otra página (ajusta la ruta según tu app)
    navigate('/confirmacion');
  };

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

      {/* Contenido principal */}
      <div className="flex justify-between items-start p-4">
        {/* Información de la vacuna */}
        <div className="w-2/3 space-y-4">
          <h2 className="text-xl font-semibold">Información de Vacuna</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Nombre de la vacuna</label>
              <input type="text" value="Antirrabica" className="border px-2 py-1 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium">Fecha de aplicación</label>
              <input type="text" value="15/04/2025" className="border px-2 py-1 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium">Veterinario responsable</label>
              <input type="text" value="Dr. Gonzalez" className="border px-2 py-1 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium">Lugar de aplicación</label>
              <input type="text" value="Clinica BioSys" className="border px-2 py-1 w-full" />
            </div>
          </div>

          {/* Botón Guardar y redirigir */}
          <div className="mt-6">
            <button
              onClick={() => navigate('/vacunas')}
            
              className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 px-4 rounded shadow-md transition"
            >
              Nueva Vacuna
            </button>
          </div>
        </div>

        {/* Imagen de la mascota */}
        <div className="w-1/3 flex justify-center">
          <img
            src={gato2}
            alt="Foto de la mascota"
            className="w-48 h-64 object-cover rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default VacunasMax;
