import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import Reveal from './Reveal';

export default function Footer() {
  const [openMap, setOpenMap] = useState(false);
  const closeBtnRef = useRef(null);
  // Coordenadas (ajusta a la ubicación exacta de la tienda)
  const LAT = 8.603882;
  const LNG = -70.224674;
  const ZOOM = 16;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${LAT},${LNG}&z=${ZOOM}&output=embed`;
  function handleNavClick(e, id) {
    if (
      e &&
      typeof e.preventDefault === 'function'
    )
      e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerEl =
      document.querySelector('header');
    const offset = headerEl
      ? headerEl.offsetHeight
      : 0;
    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset +
      2;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  // Modal mapa: ESC y bloqueo de scroll
  useEffect(() => {
    if (!openMap) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMap(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(
      () => closeBtnRef.current?.focus(),
      0
    );
    return () => {
      document.removeEventListener(
        'keydown',
        onKey
      );
      document.body.style.overflow = prev;
    };
  }, [openMap]);
  return (
    <footer
      id="contact"
      className="bg-black text-gray-300 py-12 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
        <Reveal>
          <div>
            <h5 className="text-white font-bold mb-3">
              UBICACIÓN
            </h5>
            <button
              type="button"
              onClick={() => setOpenMap(true)}
              className="relative w-full h-36 bg-gray-900 text-gray-200 hover:text-white transition-colors flex items-center justify-center rounded overflow-hidden text-center px-4 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label={`Abrir mapa en modal (coordenadas ${LAT}, ${LNG})`}
              title={`Abrir mapa (coordenadas ${LAT}, ${LNG})`}
            >
              {/* Vista previa del mapa (no interactivo) */}
              <span
                className="absolute inset-0"
                aria-hidden
              >
                <iframe
                  title="Vista previa del mapa"
                  src={mapsEmbedSrc}
                  className="w-full h-full border-0 pointer-events-none"
                />
              </span>
              {/* Overlay para legibilidad */}
              <span
                className="absolute inset-0 bg-black/25"
                aria-hidden
              />
              {/* Etiqueta */}
              <span className="relative inline-flex items-center gap-2">
                <span aria-hidden>📍</span>
                <span className="font-medium">
                  Ver ubicación en el mapa
                </span>
              </span>
            </button>
            <p className="text-[10px] mt-2">
              AV. NUEVA BARINAS CRUSE CON CALLE 3
              LOCA #1 EDIF. VALERIA / URB ROSA
              INES ALTO BARINAS - BARINAS, ESTADO
              BARINAS
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h5 className="text-white font-bold mb-3">
              SECCIONES
            </h5>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a
                  href="#top"
                  onClick={(e) =>
                    handleNavClick(e, 'top')
                  }
                  className="hover:text-white transition-colors"
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) =>
                    handleNavClick(e, 'about')
                  }
                  className="hover:text-white transition-colors"
                >
                  NOSOTROS
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  onClick={(e) =>
                    handleNavClick(e, 'history')
                  }
                  className="hover:text-white transition-colors"
                >
                  HISTORIA
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) =>
                    handleNavClick(e, 'events')
                  }
                  className="hover:text-white transition-colors"
                >
                  NOTICIAS
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  onClick={(e) =>
                    handleNavClick(e, 'brands')
                  }
                  className="hover:text-white transition-colors"
                >
                  MARCAS
                </a>
              </li>
              <li>
                <a
                  href="#stores"
                  onClick={(e) =>
                    handleNavClick(e, 'stores')
                  }
                  className="hover:text-white transition-colors"
                >
                  TIENDAS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) =>
                    handleNavClick(e, 'contact')
                  }
                  className="hover:text-white transition-colors"
                >
                  CONTACTOS
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h5 className="text-white font-bold mb-3">
              CONTACTOS
            </h5>
            <p className="text-gray-400">
              e-mail: ventas@motosportlaroca.com
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h5 className="text-white font-bold mb-3">
              REDES
            </h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/motosportlaroca"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="Abrir Instagram @motosportlaroca en una nueva pestaña"
                >
                  <span
                    className="text-pink-400"
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        ry="5"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                      />
                      <circle
                        cx="17"
                        cy="7"
                        r="1.5"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </span>
                  <span className="hover:text-white">
                    @motosportlaroca
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="max-w-6xl mx-auto mt-2 px-4">
        <hr className="border-white/10" />
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 MOTO SPORT LA ROCA
      </div>

      {openMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="map-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpenMap(false)}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-4xl">
            <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h4
                  id="map-modal-title"
                  className="text-lg font-semibold text-gray-900"
                >
                  Ubicación — Moto Sport La Roca
                </h4>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() =>
                    setOpenMap(false)
                  }
                  className="rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rocred/60"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-50">
                <div className="aspect-video w-full">
                  <iframe
                    title={`Mapa de ubicación (${LAT}, ${LNG})`}
                    src={mapsEmbedSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between text-sm">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`}
                    target="_blank"
                    rel="noopener"
                    className="text-rocred hover:underline"
                  >
                    Abrir en Google Maps
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMap(false)
                    }
                    className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-black"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
