import React from 'react';
import { ArrowRight, CalendarDays, Camera, Heart, Sparkles } from 'lucide-react';
import { images } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="CreativeWedding">
      <img className="hero-fallback" src={images.hero} alt="CreativeWedding couple portrait" />
      {/* <div className="hero-video" aria-hidden="true">
        <iframe
          src="https://player.vimeo.com/video/1103511061?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
          title="CreativeWedding showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div> */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content" data-reveal>
        <p className="eyebrow hero-eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Nagpur wedding photography and films
        </p>
        <h1>CreativeWedding</h1>
        <p className="hero-copy">
          We preserve your wedding with graceful photography, cinematic films, family-first coverage, and albums made to
          be held for years.
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
      </div>

      <div className="hero-highlights" data-reveal>
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
      </div>
    </section>
  );
}
