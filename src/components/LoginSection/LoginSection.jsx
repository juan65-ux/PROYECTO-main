import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div className="w-[90%] max-w-[400px] h-full bg-white p-4 shadow-lg relative border-2 border-gray-300 rounded-md">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4 text-center">Registrarse</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full border border-gray-300 p-2 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded bg-[#61dafb] hover:bg-teal-500 transition-colors duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

