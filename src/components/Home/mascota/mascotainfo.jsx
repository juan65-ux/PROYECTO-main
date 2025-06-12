import React from "react";
import { useNavigate } from "react-router-dom";
import gato2 from '../../../assets/mascotas/gato2.jpg';

const MisMascotas = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/infomax");
  };

  return (





  
    <nav className="bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          <img
            src={gato2}
            alt="Gato 1"
            className="w-full sm:w-1/2 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
          />
          <div className="p-4 text-gray-800">
            <p><strong>Nombre:</strong> Misu</p>
            <p><strong>Edad:</strong> 2 años</p>
            <p><strong>Género:</strong> Hembra</p>
            <p><strong>Raza:</strong> Ragdoll</p>
            <p><strong>Estado:</strong> Adoptable</p>
          </div>
        </div>

        <div
        className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}>
          <img src={gato2} alt="Perro" className="w-full sm:w-1/2 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" />
          <div className="p-4 text-gray-800">
            <p><strong>Nombre:</strong> Lobo</p>
            <p><strong>Edad:</strong> 1 año</p>
            <p><strong>Género:</strong> Macho</p>
            <p><strong>Raza:</strong> Husky</p>
            <p><strong>Estado:</strong> Adoptado</p>
          </div>
        </div>

        <div 
        className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}>
          <img src={gato2} alt="Gato con cuchillo" className="w-full sm:w-1/2 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" />
          <div className="p-4 text-gray-800">
            <p><strong>Nombre:</strong> Ninja</p>
            <p><strong>Edad:</strong> 3 años</p>
            <p><strong>Género:</strong> Macho</p>
            <p><strong>Raza:</strong> Siamés</p>
            <p><strong>Estado:</strong> En revisión</p>
          </div>
        </div>

        <div 
        className="bg-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          <img src={gato2} alt="Pingüino" className="w-full sm:w-1/2 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none" />
          <div className="p-4 text-gray-800">
            <p><strong>Nombre:</strong> Pingo</p>
            <p><strong>Edad:</strong> 6 meses</p>
            <p><strong>Género:</strong> Desconocido</p>
            <p><strong>Raza:</strong> Pingüino Emperador</p>
            <p><strong>Estado:</strong> Adoptable</p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default MisMascotas;
