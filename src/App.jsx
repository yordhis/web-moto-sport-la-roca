import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stores from './components/Stores';
import Events from './components/Events';
import Brands from './components/Brands';
import Footer from './components/Footer';
import History from './components/History';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopMoto from './components/ScrollToTopMoto';

export default function App() {
  return (
    <div className="app" id="top">
      <Header />
      <main>
        <Hero />
        <About />
        <History />
        <Events />
        <Brands />
        <Stores />
      </main>
      <WhatsAppButton />
      <ScrollToTopMoto />
      <Footer />
    </div>
  );
}
