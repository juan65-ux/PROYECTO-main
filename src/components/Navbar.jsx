const Navbar = () => {
    const links = [
      'MIS MASCOTAS', 'PRODUCTOS Y OFERTAS', 'SERVICIOS', 'CAMPAÑAS DE VACUNACION',
      
    ];
  
    return (
      <nav className="bg-teal-500 text-white shadow">
        <ul className="flex justify-center gap-6 py-3 text-sm font-semibold uppercase">
          {links.map((link) => (
            <li key={link} className="cursor-pointer hover:underline hover:text-gray-200">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  