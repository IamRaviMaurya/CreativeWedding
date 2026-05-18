import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CalendarDays, Camera, Heart, Sparkles } from 'lucide-react';
import { images } from '../constants';

export default function Hero() {
  const [sparkling, setSparkling] = useState(false);
  const sparkleTimer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(sparkleTimer.current);
  }, []);

  function triggerSparkle() {
    setSparkling(true);
    window.clearTimeout(sparkleTimer.current);
    sparkleTimer.current = window.setTimeout(() => setSparkling(false), 1200);
  }

  return (
    <section
      id="home"
      className={sparkling ? 'hero is-sparkling' : 'hero'}
      aria-label="CreativeWedding"
      onPointerDown={triggerSparkle}
    >
      <img className="hero-fallback" src={images.hero} alt="CreativeWedding couple portrait by the water" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy-block" data-reveal>
          <p className="eyebrow hero-eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            wedding photography and films
          </p>
          <h1>CreativeWedding</h1>
          <p className="hero-copy">
            We preserve your wedding with graceful photography, cinematic films, family-first coverage, and albums made
            to be held for years.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              Reserve Your Date
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-soft" href="#portfolio">
              View Wedding Stories
            </a>
          </div>

          {/* <div className="hero-highlights" data-reveal>
            <div>
              <Camera size={21} aria-hidden="true" />
              <span>Candid photography</span>
            </div>
            <div>
              <Heart size={21} aria-hidden="true" />
              <span>Pre-wedding stories</span>
            </div>
            <div>
              <CalendarDays size={21} aria-hidden="true" />
              <span>Full-day coverage</span>
            </div>
          </div> */}
        </div>

        {/* <div className={sparkling ? 'hero-visual is-sparkling' : 'hero-visual'} data-reveal>
          <div className="hero-feature-frame" onPointerDown={triggerSparkle}>
            <img className="hero-feature-image" src={images.heroDetail} alt="CreativeWedding groom portrait" />
          </div>
          <div className="hero-visual-strip" aria-label="Wedding story previews">
            <img src={images.carouselTwo} alt="Traditional wedding couple" />
            <img src={images.carouselThree} alt="Wedding reception portrait" />
            <img src={images.aboutTwo} alt="Creative couple portrait" />
          </div>
          <div className="hero-floating-note">
            <strong>Photo + Film</strong>
            <span>One team for every ritual, portrait, and celebration.</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
