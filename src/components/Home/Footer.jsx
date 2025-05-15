import { FaFacebookF, FaInstagram } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#00BFAF" }} className="text-black py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Nosotros */}
        <div>
          <h3 className="font-bold mb-3">Nosotros</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">¿Quiénes somos?</a></li>
            <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
            <li>
              <a href="#" className="hover:underline">
                Política de seguridad y salud en el trabajo
              </a>
            </li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h3 className="font-bold mb-3">Información</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
            <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:underline">Acerca de tus compras</a></li>
            <li><a href="#" className="hover:underline">Política de privacidad y manejo de datos personales</a></li>
            <li><a href="#" className="hover:underline">Métodos y política de envíos</a></li>
            <li><a href="#" className="hover:underline">Métodos de pago</a></li>
            <li><a href="#" className="hover:underline">Políticas de devoluciones y garantías</a></li>
          </ul>
        </div>

        {/* Contáctenos */}
        <div>
          <h3 className="font-bold mb-3">Contáctenos</h3>
          <ul className="space-y-2">
            <li>Ventas ——————</li>
            <li>Servicio al cliente ————</li>
          </ul>
        </div>

        {/* Síguenos */}
        <div>
          <h3 className="font-bold mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-blue-800 text-xl hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-900 text-xl hover:scale-110 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Pie inferior opcional */}
      <div className="mt-10 text-center text-xs text-black/70">
        &copy; {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.
      </div>
    </footer>
    );
  }
  