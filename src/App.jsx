import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProofStrip from './components/ProofStrip';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import VideoShowcase from './components/VideoShowcase';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Portfolio />
        <VideoShowcase />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
