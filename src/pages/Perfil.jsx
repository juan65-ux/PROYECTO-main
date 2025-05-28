import { useState } from 'react';

const Perfil = () => {
  const [nombre, setNombre] = useState('Verónica Vidal');
  const [email, setEmail] = useState('veronica@email.com');
  const [editando, setEditando] = useState(false);

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevoEmail, setNuevoEmail] = useState(email);

  const guardarCambios = () => {
    setNombre(nuevoNombre);
    setEmail(nuevoEmail);
    setEditando(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-teal-600">Mi Perfil</h1>

      {editando ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Nombre:</label>
            <input
              type="text"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-600">Correo:</label>
            <input
              type="email"
              value={nuevoEmail}
              onChange={(e) => setNuevoEmail(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={guardarCambios}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
            <button
              onClick={() => setEditando(false)}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p><strong className="text-gray-700">Nombre:</strong> {nombre}</p>
          <p><strong className="text-gray-700">Correo:</strong> {email}</p>
          <button
            onClick={() => setEditando(true)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
          >
            Editar Perfil
          </button>
        </div>
      )}
    </div>
  );
};

export default Perfil;
