import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CalendarDays, Camera, Heart, Sparkles } from 'lucide-react';
import { images } from '../constants';
import logo from '../../img/logo.png';

export default function Hero() {
  const [sparkling, setSparkling] = useState(false);
  const sparkleTimer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(sparkleTimer.current);
  }, []);

  function triggerSparkle({ images }) {
    setSparkling(true);
    window.clearTimeout(sparkleTimer.current);
    sparkleTimer.current = window.setTimeout(() => setSparkling(false), 1200);
  }

  const heroImages = [
    images.aboutOne,
    images.aboutTwo,
    images.hero,
    images.carouselTwo,
    images.carouselThree,
    images.teamOne,
    images.teamTwo,
    images.teamThree,
    images.teamFour
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={sparkling ? 'hero is-sparkling' : 'hero'}
      aria-label="CreativeWedding"
      onPointerDown={triggerSparkle}
    >
      <img src={heroImages[currentImage]} alt="CreativeWedding" className="hero-fallback" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy-block" data-reveal>
          {/* <p className="eyebrow hero-eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            wedding photography and films
          </p> */}
          {/* <h1>CreativeWedding</h1>
          <p className="hero-copy">
            We preserve your wedding with graceful photography, cinematic films, family-first coverage, and albums made
            to be held for years.
          </p> */}
          {/* <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              Reserve Your Date
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-soft" href="#portfolio">
              View Wedding Stories
            </a>
          </div> */}

          {/* <div className="hero-actions">
            <img src={logo} alt="CreativeWedding logo" />
          </div> */}

        </div>
      </div>
    </section>
  );
}
