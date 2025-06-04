// src/components/Productos/ProductoCard.jsx
import React from "react";

const ProductoCard = ({ nombre, descripcion, imagen, precio }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img src={imagen} alt={nombre} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-xl font-semibold">{nombre}</h3>
      <p className="text-sm text-gray-600">{descripcion}</p>
      <p className="text-lg font-bold text-green-600 mt-2">${precio}</p>
    </div>
  );
};

export default ProductoCard;
