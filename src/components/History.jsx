import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import Reveal from './Reveal';
import bannerUrl from '/assets/img/historia.webp';

// Reemplaza esta URL con el enlace del post/reel de Instagram de @motosportlaroca
// Ejemplos válidos:
// - https://www.instagram.com/reel/XXXXXXXXXXX/
// - https://www.instagram.com/p/XXXXXXXXXXX/
const DEFAULT_INSTAGRAM_POST_URL =
  'https://www.instagram.com/reel/DPpQE88j3uq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==';

let instagramScriptAppended = false;

function ensureInstagramEmbed(onReady) {
  // Si ya está la API en la página, reprocesamos y salimos
  if (
    window.instgrm &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process ===
      'function'
  ) {
    try {
      window.instgrm.Embeds.process();
    } catch {}
    onReady && onReady();
    return;
  }
  // Si el script ya fue agregado previamente, no lo duplicamos
  if (instagramScriptAppended) return;
  instagramScriptAppended = true;
  const script = document.createElement('script');
  script.src =
    'https://www.instagram.com/embed.js';
  script.async = true;
  script.onload = () => {
    try {
      window.instgrm &&
        window.instgrm.Embeds &&
        window.instgrm.Embeds.process &&
        window.instgrm.Embeds.process();
    } catch {}
    onReady && onReady();
  };
  document.body.appendChild(script);
}

export default function History({
  postUrl = DEFAULT_INSTAGRAM_POST_URL,
  thumbnailUrl = bannerUrl,
}) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const isValid =
    typeof postUrl === 'string' &&
    /(instagram\.com\/(p|reel)\/)/.test(postUrl);

  // Procesar el embed solo cuando se abre el modal con una URL válida
  useEffect(() => {
    if (open && isValid) {
      ensureInstagramEmbed();
    }
  }, [open, isValid, postUrl]);

  // Bloquear scroll del body cuando el modal esté abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cerrar con ESC y enfocar el botón de cerrar al abrir
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    // Enfocar botón cerrar
    setTimeout(
      () => closeBtnRef.current?.focus(),
      0
    );
    return () =>
      window.removeEventListener(
        'keydown',
        onKey
      );
  }, [open]);

  return (
    <section className="scroll-mt-24">
      {/* Encabezado y texto dentro de un contenedor centrado */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-center">
            NUESTRA HISTORIA
          </h3>
        </Reveal>
      </div>

      {/* Thumbnail a todo el ancho */}
      <Reveal>
        <button
          id="history"
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-rocred/60"
          aria-label="Reproducir video de nuestra historia"
        >
          <div
            className="aspect-video w-full bg-gray-200"
            style={{
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay degradado rojo semi oscuro */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t  from-black/100  to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-rocred shadow-md ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </button>
      </Reveal>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-labelledby="history-modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          {/* Dialog */}
          <div className="relative z-10 w-full max-w-3xl">
            <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h4
                  id="history-modal-title"
                  className="text-lg font-semibold"
                >
                  Nuestra historia
                </h4>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rocred/60"
                  aria-label="Cerrar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-0">
                <div className="w-full">
                  <div
                    ref={ref}
                    className="w-full flex justify-center"
                  >
                    {isValid ? (
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={
                          postUrl
                        }
                        data-instgrm-version="14"
                        style={{
                          background: '#fff',
                          border: 0,
                          margin: 0,
                          padding: 0,
                          width: '100%',
                          maxWidth: 800,
                        }}
                      >
                        <a
                          href={postUrl}
                          rel="noopener"
                          target="_blank"
                        >
                          Ver en Instagram
                        </a>
                      </blockquote>
                    ) : (
                      <div className="p-6 text-center text-sm text-gray-600">
                        <p>
                          Agrega el enlace del
                          post o reel de Instagram
                          de @motosportlaroca para
                          embeber el video.
                        </p>
                        <p className="mt-2 break-all">
                          Ejemplo:
                          https://www.instagram.com/reel/XXXXXXXXXXX/
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
