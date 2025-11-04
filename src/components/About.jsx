import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 grid xs:grid-cols-12 gap-8 items-center">
        <Reveal className="md:col-span-6">
          <div
            className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                "url('/assets/img/equipo.png')",
            }}
            aria-hidden
          />
        </Reveal>

        <Reveal className="md:col-span-6">
          <h2 className="text-2xl sm:text-5xl font-bold uppercase">
            ¿QUIENES SOMOS?
          </h2>
          <p className="text-1xl sm:text-2xl text-gray-600 mt-4 leading-relaxed">
            Moto Sport La Roca es la principal
            empresa de repuestos y accesorios para
            motocicletas en Barinas, Venezuela,
            dedicada a mantener la flota de dos
            ruedas de la región en movimiento.
            Nacimos de la pasión por el
            motociclismo y la comprensión de que,
            en nuestro país, la moto es mucho más
            que un vehículo: es una herramienta
            esencial de trabajo, movilidad y
            sustento.
          </p>

          <div className="flex gap-4 mt-6 sm:flex-row flex-col">
            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">
                  <img
                    src="/assets/img/mision.png"
                    alt="Misión"
                    className="h-20"
                  />
                </div>
                <h4 className="text-2xl sm:text-4xl my-3 font-semibold ">
                  MISIÓN
                </h4>
                <p className="text-1xl sm:text-2xl text-sm text-gray-600">
                  Ser el pilar de confianza y el
                  principal proveedor de
                  soluciones de repuestos y
                  accesorios en Barinas,
                  garantizando la disponibilidad
                  inmediata, la calidad
                  certificada y el soporte técnico
                  necesario para que cada
                  motorizado mantenga su medio de
                  trabajo, movilidad y sustento
                  activo, seguro y eficiente.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">
                  <img
                    src="/assets/img/vision.png"
                    alt="Visión"
                    className="h-20"
                  />
                </div>
                <h4 className="text-2xl sm:text-4xl my-3 font-semibold">
                  VISIÓN
                </h4>
                <p className="text-1xl sm:text-2xl text-sm text-gray-600">
                  Consolidarnos como el referente
                  indiscutible y líder en la
                  comercialización de moto
                  repuestos en todo el país.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex-1">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-2xl">
                  <img
                    src="/assets/img/principios.png"
                    alt="Principios"
                    className="h-20"
                  />
                </div>
                <h4 className="text-2xl sm:text-4xl my-3 font-semibold">
                  PRINCIPIOS
                </h4>
                <p className="text-1xl sm:text-2xl text-sm text-gray-600">
                  <ul>
                    <li>
                      <b>Confianza:</b> Por la
                      calidad de las piezas.
                    </li>
                    <li>
                      <b>Agilidad:</b> Por la
                      rapidez del servicio.
                    </li>
                    <li>
                      <b>Compromiso:</b> Por
                      entender la moto como
                      herramienta de sustento.
                    </li>
                    <li>
                      <b>Liderazgo:</b> Por la
                      meta de expansión regional.
                    </li>
                  </ul>
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
