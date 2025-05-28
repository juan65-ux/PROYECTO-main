// src/components/Header.jsx
import { FaStore, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Logo */}
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" className="h-14" />
      </Link>

      {/* Barra de búsqueda */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-1/3">
        <button>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Hinted search text"
          className="bg-transparent w-full outline-none placeholder-gray-400"
        />
        <button>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
          </svg>
        </button>
      </div>

      {/* Iconos con navegación activa */}
      <div className="flex items-center gap-4 text-2xl">
        <NavLink
          to="/tienda"
          className={({ isActive }) => isActive ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500 transition-colors'}
        >
          <FaStore />
        </NavLink>
        <NavLink
          to="/perfil"
          className={({ isActive }) => isActive ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500 transition-colors'}
        >
          <FaUserCircle />
        </NavLink>
        <NavLink
          to="/carrito"
          className={({ isActive }) => isActive ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500 transition-colors'}
        >
          <FaShoppingCart />
        </NavLink>
        <Link to="/login">
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-1 rounded transition-colors">
            LOGIN
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

