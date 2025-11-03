import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-[420px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/assets/hero.svg')"}} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 relative text-white py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase">La Roca</h1>
        <p className="inline-block bg-black/50 px-4 py-2 rounded mt-4 font-semibold">Seguridad que te hace rodar</p>
      </div>
    </section>

  )
}
