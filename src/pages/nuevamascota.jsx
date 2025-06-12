import React, { useState } from "react";

const CrearMascota = () => {
  const [imagenPreview, setImagenPreview] = useState(null);
  const [webpDataURL, setWebpDataURL] = useState(null);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Convertir a WebP
        const webpURL = canvas.toDataURL("image/webp", 0.8); // 0.8 = calidad (opcional)
        setImagenPreview(webpURL);
        setWebpDataURL(webpURL); // esto es útil si lo quieres enviar a backend más tarde
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input type="text" className="w-full rounded-full p-2 bg-gray-500 text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Estado</label>
              <input type="text" className="w-full rounded-full p-2 bg-gray-500 text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Raza</label>
              <input type="text" className="w-full rounded-full p-2 bg-gray-500 text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Edad</label>
              <input type="number" className="w-full rounded-full p-2 bg-gray-500 text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Género</label>
              <input type="text" className="w-full rounded-full p-2 bg-gray-500 text-white" />
            </div>
          </div>

          {/* Imagen con vista previa y conversión */}
          <div className="flex justify-center items-center">
            <label className="w-64 h-64 bg-gray-600 text-white flex flex-col justify-center items-center rounded-full cursor-pointer text-center overflow-hidden">
              {imagenPreview ? (
                <img src={imagenPreview} alt="preview" className="object-cover w-full h-full rounded-full" />
              ) : (
                <span>subir una imagen</span>
              )}
              <input type="file" accept="image/*" onChange={handleImagenChange} className="hidden" />
            </label>
          </div>
        </div>

        {/* Textareas */}
        <div className="mt-6">
          <label className="block text-sm font-semibold mb-1">Enfermedades</label>
          <textarea className="w-full h-24 rounded-xl p-2 bg-gray-500 text-white resize-none" />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold mb-1">Historial médico</label>
          <textarea className="w-full h-32 rounded-xl p-2 bg-gray-500 text-white resize-none" />
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button
            type="button"
    onClick={() => window.location.href = '/mis-mascotas'}
    className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition"
  >
    Crear mi mascota
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearMascota;
