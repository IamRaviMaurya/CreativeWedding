import React from 'react';
import { Aperture, CalendarDays } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand-mark">
          <Aperture size={20} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <span>CreativeWedding</span>
      </a>
      <p>Wedding photography and films for color-loving couples.</p>
      <a href="#contact">
        <CalendarDays size={18} aria-hidden="true" />
        Check Availability
      </a>
    </footer>
  );
}
