import React from 'react';
import Reveal from './Reveal';

const logos = [
  '/assets/logo-1.svg',
  '/assets/logo-2.svg',
  '/assets/logo-3.svg',
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="py-16 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 relative">
        <Reveal className="relative overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-rocred"
            style={{
              clipPath:
                'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
            }}
            aria-hidden
          />
          <div className="relative z-10 text-center py-12">
            <h4 className="text-white text-xl font-bold">
              MARCAS
            </h4>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {logos.map((src, i) => (
                <div key={i} className="p-2">
                  <img
                    src={src}
                    alt={`Marca ${i + 1}`}
                    className="h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center px-4">
          <h3 className="text-xl font-bold">
            ¿Quieres ser mayorista?
          </h3>
          <p className="text-gray-600 mt-2">
            Si tienes pasión por las dos ruedas y
            experiencia en ventas de repuestos,
            contáctanos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
