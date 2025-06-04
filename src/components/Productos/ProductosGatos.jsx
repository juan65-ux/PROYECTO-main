import ProductoCard from "./ProductoCard"; // porque está en la misma carpeta

const ProductosGatos = () => {
  const productos = [
    {
      nombre: "Collar para perro",
      descripcion: "Collar ajustable resistente.",
      imagen: "https://via.placeholder.com/150",
      precio: 25000,
    },
    // más productos...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {productos.map((prod, i) => (
        <ProductoCard key={i} {...prod} />
      ))}
    </div>
  );
};

export default ProductosGatos;
