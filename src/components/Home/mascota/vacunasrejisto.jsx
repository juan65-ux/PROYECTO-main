import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioVacuna = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();

  const handleImagen = (e) => {
    const archivo = e.target.files[0];

    if (archivo && archivo.type === 'image/jpeg') {
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function () {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const dataUrl = canvas.toDataURL('image/png'); // Convierte a PNG
          setImagen(dataUrl);
        };
      };

      reader.readAsDataURL(archivo);
    } else {
      alert('Por favor, sube una imagen JPEG.');
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    // Aquí podrías guardar los datos si quieres

    console.log('Nombre:', nombre);
    console.log('Fecha:', fecha);
    console.log('Imagen PNG:', imagen);

    // Redirige a la ruta que desees
    navigate('/vacunas');
  };

  return (
    <form onSubmit={handleGuardar} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Registrar Vacuna</h2>

      <div>
        <label className="block text-sm font-medium">Nombre de la vacuna</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Fecha de aplicación</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Subir imagen (JPEG)</label>
        <input type="file" accept="image/jpeg" onChange={handleImagen} className="mt-1" required />
      </div>

      {imagen && (
        <div className="text-center">
          <p className="text-sm text-gray-600">Imagen convertida a PNG:</p>
          <img src={imagen} alt="Imagen convertida" className="w-32 h-32 object-cover rounded mx-auto mt-2" />
        </div>
      )}

      <div className="text-center">
        <button
           onClick={() => navigate('/registro-vacunas')}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
        >
          Guardar y volver
        </button>
      </div>
    </form>
  );
};

export default FormularioVacuna;
