import React, { useEffect } from 'react';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import DecorativeFrame from './components/DecorativeFrame';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProofStrip from './components/ProofStrip';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import VideoShowcase from './components/VideoShowcase';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  useEffect(() => {
    function scrollToHash() {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.setTimeout(() => {
        document.getElementById(decodeURIComponent(id))?.scrollIntoView({ block: 'start' });
      }, 0);
    }

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <ProofStrip /> */}
        <DecorativeFrame />
        <Portfolio />
       
        <DecorativeFrame />
        {/* <Services /> */}
         
        <VideoShowcase />
        <About />
        {/* <Team /> */}
        
        <Testimonials />
        <Booking />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
