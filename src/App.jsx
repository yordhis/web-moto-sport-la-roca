import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stores from "./components/Stores";
import Events from "./components/Events";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
