export default function ProductList() {
    const productos = [
      {
        id: 1,
        nombre: 'Vacuna Triple Felina',
        descripcion: 'Protección contra rinotraqueítis, calicivirus y panleucopenia.',
        precio: '45.000 COP',
        imagen: '/images/vacuna1.jpg',
      },
      {
        id: 2,
        nombre: 'Desparasitación Canina',
        descripcion: 'Tratamiento completo contra parásitos internos.',
        precio: '30.000 COP',
        imagen: '/images/desparasitante.jpg',
      },
      {
        id: 3,
        nombre: 'Consulta General',
        descripcion: 'Evaluación médica completa para tu mascota.',
        precio: '50.000 COP',
        imagen: '/images/consulta.jpg',
      },
    ];
  
    return (
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Novedades</h2>
        <small className="text-gray-500">Pequeño comentario</small>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded-xl" />
              <h3 className="text-xl font-semibold mt-2">{producto.nombre}</h3>
              <p className="text-sm text-gray-600">{producto.descripcion}</p>
              <p className="text-lg font-bold mt-2">{producto.precio}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }