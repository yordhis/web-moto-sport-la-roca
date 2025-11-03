import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid xs:grid-cols-12 gap-8 items-center">
        <Reveal className="md:col-span-6">
          <div
            className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                "url('/assets/store-1.svg')",
            }}
            aria-hidden
          />
        </Reveal>

        <Reveal>
          <h2 className="text-2xl font-bold uppercase">
            ¿QUIENES SOMOS?
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Moto Sport La Roca es la principal
            empresa de repuestos y accesorios para
            motocicletas en Barinas, Venezuela,
            dedicada a mantener la flota de dos
            ruedas de la región en movimiento.
          </p>

          <div className="flex gap-4 mt-6 sm:flex-row flex-col">
            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">🎯</div>
                <h4 className="mt-2 font-semibold">
                  MISIÓN
                </h4>
                <p className="text-sm text-gray-600">
                  Ser el pilar de soluciones y
                  repuestos para el motociclista
                  local.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">🔭</div>
                <h4 className="mt-2 font-semibold">
                  VISIÓN
                </h4>
                <p className="text-sm text-gray-600">
                  Consolidarnos como distribuidor
                  líder en la región.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">⚖️</div>
                <h4 className="mt-2 font-semibold">
                  PRINCIPIOS
                </h4>
                <p className="text-sm text-gray-600">
                  Compromiso, calidad y servicio
                  al cliente.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
