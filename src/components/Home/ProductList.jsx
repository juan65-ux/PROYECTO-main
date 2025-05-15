import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'ANTIPARASITARIO',
      description: 'Antiparasitario interno para perros y gatos. Contra cestodos, giardia y nematodos.',
      price: 10.00,
      image: '/images/productdesparasitante.png',
    },
    {
      id: 2,
      name: 'BAÑO SECO',
      description: 'Espuma de limpieza en seco para mascotas. Ideal para cuando no pueden bañarse con agua.',
      price: 10.00,
      image: '/images/spray.png',
    },
    {
      id: 3,
      name: 'PURINA ALPO',
      description: 'Alimento balanceado para perros adultos con proteínas, fibras, cereales y vegetales.',
      price: 10.00,
      image: '/images/alimento.png',
    },
    // Puedes agregar más productos según sea necesario
  ];

  const productsPerPage = 3; // Muestra 3 productos a la vez
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <p className="text-gray-600 mb-6">"una pequeña descripcion"</p>
      
      <div className="relative">
        <button 
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex justify-between gap-4 mx-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center w-1/3">
              <div className="mb-4 h-64 w-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="text-center w-full">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="font-semibold mb-1">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-12 text-center border border-gray-300 py-1"
                  />
                  <button className="bg-teal-500 text-white px-4 py-1 text-sm">
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductList;