import React, { useEffect, useState } from 'react';
import { Aperture, Menu, X } from 'lucide-react';
import { navLinks } from '../constants';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CreativeWedding home">
        <span className="brand-mark">
          <Aperture size={22} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <span>CreativeWedding</span>
      </a>

      <nav
        id="primary-navigation"
        className={open ? 'nav-links nav-links-open' : 'nav-links'}
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Book Now
        </a>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
