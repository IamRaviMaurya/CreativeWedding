import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="CreativeWedding hero">
      <img
        className="hero-media"
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90"
        alt="A newly married couple walking through a joyful wedding celebration"
      />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content" data-reveal>
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Premium wedding stories in photo and film
        </p>
        <h1>Love stories, painted in light.</h1>
        <p className="hero-copy">
          CreativeWedding captures the color, emotion, and quiet magic of your day with cinematic films and editorial-quality photography.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Book Now
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-glass" href="#portfolio">
            View Portfolio
          </a>
        </div>
      </div>
      <div className="hero-card" data-reveal>
        <span>2026 Signature Collection</span>
        <strong>Photography + Cinematic Film</strong>
      </div>
    </section>
  );
}
