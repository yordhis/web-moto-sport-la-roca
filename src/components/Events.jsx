import React, {
  useEffect,
  useState,
} from 'react';
import Reveal from './Reveal';

export default function Events() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const IG_TOKEN = import.meta.env.VITE_IG_TOKEN;

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!IG_TOKEN) return; // Sin token, se mostrarán placeholders
      try {
        const fields =
          'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';
        const url = `https://graph.instagram.com/me/media?fields=${encodeURIComponent(
          fields
        )}&access_token=${encodeURIComponent(IG_TOKEN)}&limit=8`;
        const res = await fetch(url, {
          mode: 'cors',
        });
        if (!res.ok)
          throw new Error(
            `Instagram API: ${res.status}`
          );
        const data = await res.json();
        const items = Array.isArray(data?.data)
          ? data.data
          : [];
        items.sort(
          (a, b) =>
            new Date(b.timestamp) -
            new Date(a.timestamp)
        );
        const top4 = items.slice(0, 4);
        if (!cancelled) setPosts(top4);
      } catch (e) {
        if (!cancelled)
          setError(
            e?.message ||
              'No se pudo cargar Instagram'
          );
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [IG_TOKEN]);

  const hasPosts = posts && posts.length > 0;
  return (
    <section
      id="events"
      className="py-12"
      aria-label="Eventos y noticias"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h3 className="text-2xl font-bold uppercase">
            EVENTOS Y NOTICIAS
          </h3>
        </Reveal>

        {(!IG_TOKEN || error) && (
          <div className="mt-3 text-sm text-gray-500">
            {error
              ? 'No se pudo cargar el contenido de Instagram. Mostrando ejemplos.'
              : 'Configura VITE_IG_TOKEN para cargar las publicaciones de Instagram (se muestran ejemplos).'}
          </div>
        )}

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {hasPosts
            ? posts.map((p) => {
                const isVideo =
                  p.media_type === 'VIDEO';
                const img = isVideo
                  ? p.thumbnail_url || p.media_url
                  : p.media_url;
                const caption =
                  p.caption ||
                  'Publicación de Instagram';
                return (
                  <Reveal
                    key={p.id}
                    className="h-44"
                  >
                    <a
                      href={p.permalink}
                      target="_blank"
                      rel="noopener"
                      className="block h-44 rounded-lg overflow-hidden group"
                      aria-label={caption}
                      title={caption}
                    >
                      <div className="relative h-full w-full bg-gray-100">
                        {img ? (
                          <img
                            src={img}
                            alt={caption}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div
                            className="h-full w-full bg-gray-200"
                            aria-hidden
                          />
                        )}
                        {/* Overlay sutil */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                    </a>
                  </Reveal>
                );
              })
            : [1, 2, 3, 4].map((c) => (
                <Reveal key={c} className="h-44">
                  <article
                    className="h-44 bg-gray-100 rounded-lg"
                    aria-hidden
                  />
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
