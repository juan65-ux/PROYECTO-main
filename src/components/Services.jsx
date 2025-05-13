import React from "react";
import { Truck, Storefront, CreditCard, ClipboardText } from "phosphor-react";

const Servicios = () => {
  return (
    <div className="flex justify-around items-center flex-wrap py-8 bg-white">
      <div className="flex flex-col items-center text-center w-40 mb-6">
        <Truck size={40} weight="fill" color="#00A884" />
        <h3 className="mt-2 font-medium text-lg text-gray-800">Envío gratis</h3>
        <small className="text-gray-500">Pequeño comentario</small>
      </div>

      <div className="flex flex-col items-center text-center w-40 mb-6">
        <Storefront size={40} weight="fill" color="#00A884" />
        <h3 className="mt-2 font-medium text-lg text-gray-800">Recoger en tienda</h3>
        <small className="text-gray-500">Pequeño comentario</small>
      </div>

      <div className="flex flex-col items-center text-center w-40 mb-6">
        <CreditCard size={40} weight="fill" color="#00A884" />
        <h3 className="mt-2 font-medium text-lg text-gray-800">Métodos de pago</h3>
        <small className="text-gray-500">pequeño comentario</small>
      </div>

      <div className="flex flex-col items-center text-center w-40 mb-6">
        <ClipboardText size={40} weight="fill" color="#00A884" />
        <h3 className="mt-2 font-medium text-lg text-gray-800">Pasos para comprar</h3>
        <small className="text-gray-500">Pasos para comprar pequeño comentario</small>
      </div>
    </div>
  );
};

export default Servicios;
