import React from 'react'

export default function Events(){
  const cards = [1,2,3,4]
  return (
    <section className="py-12" aria-label="Eventos y noticias">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold uppercase">EVENTOS Y NOTICIAS</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {cards.map((c)=> (
            <article key={c} className="h-44 bg-gray-100 rounded-lg" aria-hidden />
          ))}
        </div>
      </div>
    </section>
  )
}
