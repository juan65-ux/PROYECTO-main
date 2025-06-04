const productosSimulados = [
  {
    id: 1,
    nombre: 'Collar Antipulgas',
    precio: 25000,
    cantidad: 1,
    imagen: '/images/productos/collar.jpg',
  },
  {
    id: 2,
    nombre: 'Juguete para Gatos',
    precio: 18000,
    cantidad: 2,
    imagen: '/images/productos/juguete-gato.jpg',
  },
];

const Carrito = () => {
  const total = productosSimulados.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">Carrito de Compras</h1>

      {productosSimulados.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {productosSimulados.map((producto) => (
            <div
              key={producto.id}
              className="flex items-center bg-white shadow rounded-lg p-4"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{producto.nombre}</h2>
                <p className="text-gray-600">Precio: ${producto.precio.toLocaleString('es-CO')}</p>
                <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
              </div>
              <div className="text-right font-semibold text-teal-600">
                ${producto.precio * producto.cantidad}
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold text-teal-700">
            Total: ${total.toLocaleString('es-CO')}
          </div>

          <div className="text-center mt-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded shadow">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
