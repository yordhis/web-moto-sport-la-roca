import React, { useEffect, useRef } from 'react';
import Reveal from './Reveal';

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
}) {
  const ref = useRef(null);
  const isValid =
    typeof postUrl === 'string' &&
    /(instagram\.com\/(p|reel)\/)/.test(postUrl);

  useEffect(() => {
    if (!isValid) return;
    ensureInstagramEmbed();
  }, [isValid, postUrl]);

  return (
    <section
      id="history"
      className="py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-center">
            NUESTRA HISTORIA
          </h3>
        </Reveal>
        <div className="mt-6 grid md:grid-cols-1 gap-6 items-start">
          <Reveal>
            <p className="text-gray-600 leading-relaxed">
              Conoce cómo nació Moto Sport La Roca
              y cómo hemos crecido junto a la
              comunidad motociclista en Barinas.
              Te compartimos un video desde
              nuestro Instagram.
            </p>
          </Reveal>
          <Reveal>
            <div
              ref={ref}
              className="w-full flex justify-center"
            >
              {isValid ? (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#fff',
                    border: 0,
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    maxWidth: 540,
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
                <div className="text-center text-sm text-gray-500">
                  <p>
                    Pega aquí el enlace del post o
                    reel de Instagram de
                    @motosportlaroca para embeber
                    el video.
                  </p>
                  <p className="mt-2">
                    Ejemplo:
                    https://www.instagram.com/reel/XXXXXXXXXXX/
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
