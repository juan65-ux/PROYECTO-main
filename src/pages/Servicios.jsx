const Servicios = () => {
  const servicios = [
    {
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
      titulo: 'Servicios de estética y bienestar',
      icono: '🧼',
      detalles: [
        'Baños medicados y estéticos.',
        'Corte de pelo y uñas.',
        'Limpieza de oídos y glándulas anales.',
      ],
    },
    {
      titulo: 'Servicios a domicilio',
      icono: '🏡',
      detalles: [
        'Consultas veterinarias en casa.',
        'Vacunación y desparasitación a domicilio.',
        'Traslado de mascotas (emergencias o consultas programadas).',
      ],
    },
    {
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

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Estos son tus servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-5xl text-center mb-4">{servicio.icono}</div>
            <h2 className="text-xl font-semibold text-center mb-4">{servicio.titulo}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {servicio.detalles.map((detalle, i) => (
                <li key={i}>{detalle}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
