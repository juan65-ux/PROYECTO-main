import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const submenuRef = useRef(null);

  const links = [
    { label: 'INICIO', path: '/' },
    { label: 'MIS MASCOTAS', path: '/mis-mascotas' },
    { label: 'PRODUCTOS Y OFERTAS', path: '/productos' },
    { label: 'SERVICIOS', path: '/servicios' },
    
  ];

  const categorias = [
    { label: 'Perros', path: '/productos/perros' },
    { label: 'Gatos', path: '/productos/gatos' },
    { label: 'Conejos', path: '/productos/conejos' },
  ];

  useEffect(() => {
    const handleClickFuera = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setMostrarSubmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickFuera);
    return () => {
      document.removeEventListener('mousedown', handleClickFuera);
    };
  }, []);

  return (
    <nav className="bg-teal-500 text-white shadow z-40">

      {/* Botón hamburguesa */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <h1 className="text-lg font-bold">HUELLAVET</h1>
        <button onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú principal para desktop */}
      <ul className="hidden md:flex justify-center gap-6 py-3 text-sm font-semibold uppercase">
        {links.map((link) => (
          <li key={link.label} className="relative cursor-pointer">
            {link.label === 'PRODUCTOS Y OFERTAS' ? (
              <div ref={submenuRef}>
                <button
                  onClick={() => setMostrarSubmenu(!mostrarSubmenu)}
                  className="hover:underline hover:text-gray-200"
                >
                  {link.label}
                </button>
                {mostrarSubmenu && (
                  <ul className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md z-50">
                    {categorias.map((categoria) => (
                      <li key={categoria.label}>
                        <Link
                          to={categoria.path}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setMostrarSubmenu(false)}
                        >
                          {categoria.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={link.path} className="hover:underline hover:text-gray-200">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Menú para móviles */}
      {menuAbierto && (
       <ul className="flex flex-col items-center gap-4 px-4 pb-4 text-sm font-semibold uppercase md:hidden">
          {links.map((link) => (
            <li key={link.label} className="relative cursor-pointer">
              {link.label === 'PRODUCTOS Y OFERTAS' ? (
                <div ref={submenuRef}>
                  <button
                    onClick={() => setMostrarSubmenu(!mostrarSubmenu)}
                    className="hover:underline hover:text-gray-200 w-full text-left"
                  >
                    {link.label}
                  </button>
                  {mostrarSubmenu && (
                    <ul className="mt-1 bg-white text-black rounded shadow-md z-50 w-full text-center">

                      {categorias.map((categoria) => (
                        <li key={categoria.label}>
                          <Link
                            to={categoria.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              setMostrarSubmenu(false);
                              setMenuAbierto(false);
                            }}
                          >
                            {categoria.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="hover:underline hover:text-gray-200"
                  onClick={() => setMenuAbierto(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

  