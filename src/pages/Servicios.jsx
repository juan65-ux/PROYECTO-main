import { useState } from 'react';

const Servicios = () => {
  const [servicioActivo, setServicioActivo] = useState(null);
   const [mostrarModal, setMostrarModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const servicios = [
    {
      id: 1,
      titulo: 'Consulta Veterinaria',
      icono: '🐶',
      detalles: [
        'Consultas médicas (revisiones generales, control de peso, chequeos de rutina).',
        'Vacunación (rabia, moquillo, parvovirus, leptospirosis, etc.).',
        'Desparasitación interna y externa.',
        'Control de enfermedades crónicas (diabetes, insuficiencia renal, etc.)',
        'Atención de emergencias',
        'Certificados de salud (viajes, adopciones, etc.).',
      ],
    },
    {
      id: 2,
      titulo: 'Diagnóstico',
      icono: '🧪',
      detalles: [
        'Laboratorio clínico (análisis de sangre, orina, heces).',
        'Radiografías y ecografías.',
        'Electrocardiogramas.',
        'Pruebas alérgicas y hormonales.', 
      ],
    },
    {
      id: 3,
      titulo: 'Cirugías',
      icono: '✂️',
      detalles: [
        'Esterilización y castración',
        'Cirugías generales (tumores, cesáreas, heridas, etc.).',
        'Cirugías ortopédicas.',
        'Odontología veterinaria (limpieza dental, extracciones).',
      ],
    },
    {
      id: 4,
      titulo: 'Servicios de estética y bienestar',
      icono: '🧼',
      detalles: [
        'Baños medicados y estéticos.',
        'Corte de pelo y uñas.',
        'Limpieza de oídos y glándulas anales.',
      ],
    },
    {
      id: 5,
      titulo: 'Servicios a domicilio',
      icono: '🏡',
      detalles: [
        'Consultas veterinarias en casa.',
        'Vacunación y desparasitación a domicilio.',
        'Traslado de mascotas (emergencias o consultas programadas).',
      ],
    },
    {
      id: 6,
      titulo: 'Otros servicios',
      icono: '🐾',
      detalles: [
        'Guardería y hospedaje para mascotas.',
        'Adiestramiento básico o conductual.',
        'Atención de emergencias 24/7.',
        'Microchip e identificación.',
      ],
    },
  ];

   const toggleServicio = (id) => {
    setServicioActivo(servicioActivo === id ? null : id);
  };
  // Función para abrir el modal 
  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setServicioSeleccionado(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicios.map((servicio) => {
          const abierto = servicioActivo === servicio.id;
          
          
          return (
            <div
              key={servicio.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => toggleServicio(servicio.id)}
            >
              <div className="text-5xl text-center mb-4">{servicio.icono}</div>
              <h2 className="text-xl font-semibold text-center mb-2">{servicio.titulo}</h2>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  abierto ? 'max-h-[800px] mt-4' : 'max-h-0'
                }`}
              >
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                  {servicio.detalles.map((detalle, i) => (
                    <li key={i}>{detalle}</li>
                  ))}
                </ul>
                
                
                
                {/* Botón que abre el modal */}
                <button
                 className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"

                  onClick={(e) => {
                    e.stopPropagation();
                    abrirModal(servicio);
                  }}
                >
                  Agendar cita
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">



          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Agendar cita - {servicioSeleccionado?.titulo}</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre del dueño"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Nombre de la mascota"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Raza y edad"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                className="w-full p-2 border rounded-md"
              />

              {/* 🕒 Campo para la hora de la cita */}
              <input
                type="time"
                className="w-full p-2 border rounded-md"
              />
              
              <textarea
                placeholder="Síntomas o motivo de la cita"
                className="w-full p-2 border rounded-md"
              ></textarea>

              <button
                type="submit"
                  className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
>
                  Confirmar cita
                      </button>

            </form>

            {/* Botón para cerrar */}
            <button
              onClick={cerrarModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicios;
