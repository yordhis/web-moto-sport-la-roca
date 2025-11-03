import React from 'react';
import Carousel from './Carousel';
import Reveal from './Reveal';

const slides = [
  '/assets/store-1.svg',
  '/assets/store-2.svg',
  '/assets/store-3.svg',
];

export default function Stores() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h3 className="text-2xl font-bold uppercase">
            NUESTRAS TIENDAS
          </h3>
        </Reveal>
        <div className="mt-6">
          <Carousel items={slides} />
        </div>
      </div>
    </section>
  );
}
