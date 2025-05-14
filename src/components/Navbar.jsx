import { Link } from 'react-router-dom'; 



const Navbar = () => {
    const links = [
    
    { label: 'INICIO', path: '/' },
    { label: 'MIS MASCOTAS', path: '/mis-mascotas' },
    { label: 'PRODUCTOS Y OFERTAS', path: '/productos' },
    { label: 'SERVICIOS', path: '/servicios' },
    { label: 'CAMPAÑAS DE VACUNACION', path: '/campañas' },
      
    ];
  
    return (
      <nav className="bg-teal-500 text-white shadow">
        <ul className="flex justify-center gap-6 py-3 text-sm font-semibold uppercase">
          {links.map((link) => (
            <li key={link.label} className="cursor-pointer hover:underline hover:text-gray-200">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  