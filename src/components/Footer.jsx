import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h5 className="text-white font-bold mb-3">UBICACIÓN</h5>
          <div className="h-36 bg-gray-900 text-gray-500 flex items-center justify-center rounded">[Mapa aquí]</div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-3">PÁGINAS</h5>
          <ul className="space-y-1 text-gray-400">
            <li>INICIO</li>
            <li>NOSOTROS</li>
            <li>EVENTOS</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-3">CONTACTOS</h5>
          <p className="text-gray-400">e-mail: ventas@ms-laroca.com</p>
          <p className="text-gray-400">teléfono: +58 412-000-0000</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">© 2025 MOTO SPORT LA ROCA</div>
    </footer>
  )
}
