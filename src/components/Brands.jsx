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
      className="py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="rounded-3xl bg-rocred text-white shadow-lg px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16">
          <div className="text-center">
            <h4 className="text-xl sm:text-2xl font-bold">
              MARCAS QUE TENEMOS EN STOCK
            </h4>
          </div>
          <div className="mt-6">
            <div
              className="grid gap-4 sm:gap-6 items-center justify-items-center"
              style={{
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(88px, 1fr))',
              }}
            >
              {logos.map((src, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-center p-1"
                >
                  <img
                    src={src}
                    alt={`Marca ${i + 1}`}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
