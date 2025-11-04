import React from 'react';
import Reveal from './Reveal';

// Auto-import all images from src/assets/brands using Vite's glob.
// Note: this only works if your logos are placed in `src/assets/brands` (not `public`).
// If they are in `public/assets/brands`, move them to `src/assets/brands` or maintain a manual list.
let logos = [
  '/assets/brands/LOGO-EK.png',
  '/assets/brands/LOGO-AMMARK-BLANCO.png',
  '/assets/brands/LOGO-AUTOASIA-BLANCO.png',
  '/assets/brands/LOGO-BERA-BLANCO.png',
  '/assets/brands/LOGO-KAWASAKI-BLANCO.png',
  '/assets/brands/LOGO-PALMIMOTOS-BLANCO.png',
  '/assets/brands/LOGO-SPEEDWAY-BLANCO.png',
  '/assets/brands/LOGO-MONAY-BLANCO.png',
  '/assets/brands/LOGO-LIJIANG-BLANCO.png',
  '/assets/brands/LOGO-CHYZU-BLANCO.png',
  '/assets/brands/LOGO-EDGE.png',
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="py-16 scroll-mt-24 relative overflow-visible"
    >
      {/* Full-bleed rounded hexagon background */}
      <Reveal className="absolute left-0 right-0 mx-auto w-full overflow-hidden">
        <div
          className="w-full h-80 bg-rocred"
          aria-hidden
        />
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center py-12">
          <h4 className="text-white text-xl font-bold">
            MARCAS QUE TENEMOS EN STOCK
          </h4>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {logos.map((src, i) => (
              <div key={i} className="p-2">
                <img
                  src={src}
                  alt={`Marca ${i + 1}`}
                  className="h-10 object-contain grayscale opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
