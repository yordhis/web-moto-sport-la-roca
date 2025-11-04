import React from 'react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative flex items-center h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('/assets/img/banner.webp')",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/45 to-transparent"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 relative text-white py-20">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
            La Roca
          </h1>
          <p className="inline-block bg-black/50 px-4 py-2 rounded mt-4 font-semibold">
            <span
              className={`opacity-100 w-2 h-2 rounded-full bg-rocred inline-block`}
              aria-hidden
            ></span>{' '}
            Seguridad que te hace rodar
          </p>
        </Reveal>
      </div>
    </section>
  );
}
