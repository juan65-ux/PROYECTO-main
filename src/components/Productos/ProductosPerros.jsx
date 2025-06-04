import ProductoCard from "./ProductoCard"; // porque está en la misma carpeta

const productos = [
  {
    nombre: "Collar para perro",
    descripcion: "Collar ajustable resistente.",
    imagen: "/images/Perros/Collarperro.webp",
    precio: 25000,
  },
  {
    nombre: "Juguete para perro",
    descripcion: "Para liberar toda esa energia.",
    imagen: "/images/Perros/Juguete.jpg",
    precio: 10000,
  },
  {
    nombre: "Comida para perro",
    descripcion: "Saludable para tu mejor amigo.",
    imagen: "/images/Perros/Comida.webp",
    precio: 8000,
  },
  {
    nombre: "Bozal para perro",
    descripcion: "Evita conflictos.",
    imagen: "/images/Perros/Bozal.jpeg",
    precio: 15000,
  },
  {
    nombre: "Casa para perro",
    descripcion: "Comoda y segura.",
    imagen: "/images/Perros/Casa.jpg",
    precio: 50000,
  },
  {
    nombre: "Ropa para perro",
    descripcion: "Outfit perfecto.",
    imagen: "/images/Perros/Ropa.webp",
    precio: 20000,
  },
];

const ProductosPerros = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {productos.map((producto, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="text-lg font-semibold">{producto.nombre}</h3>
          <p className="text-gray-600">{producto.descripcion}</p>
          <p className="text-green-600 font-bold">${producto.precio}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductosPerros;

