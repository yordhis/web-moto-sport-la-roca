import React from 'react'
import Carousel from './Carousel'

const slides = [
  '/assets/store-1.svg',
  '/assets/store-2.svg',
  '/assets/store-3.svg'
]

export default function Stores() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold uppercase">NUESTRAS TIENDAS</h3>
        <div className="mt-6">
          <Carousel items={slides} />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4" aria-live="polite">
          <div className="h-36 bg-gray-100 rounded" />
          <div className="h-36 bg-gray-100 rounded" />
          <div className="h-36 bg-gray-100 rounded" />
          <div className="h-36 bg-gray-100 rounded" />
        </div>
      </div>
    </section>
  )
}
