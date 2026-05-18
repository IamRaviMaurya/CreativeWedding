import React, { useEffect, useState } from 'react';
import { Aperture, Facebook, Instagram, Menu, MessageCircle, X, Youtube } from 'lucide-react';
import { navLinks, socialLinks } from '../constants';

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  message: MessageCircle,
  youtube: Youtube
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header className={scrolled ? 'site-header site-header-scrolled' : 'site-header'}>
      <a className="brand" href="#home" aria-label="CreativeWedding home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">
          <Aperture size={22} strokeWidth={2.4} />
        </span>
        <span className="brand-copy">
          <strong>CreativeWedding</strong>
          <small>Photo and Film</small>
        </span>
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
      </nav>

      <div className="header-actions">
        <div className="header-socials" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon] ?? MessageCircle;
            return (
              <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
                <Icon size={17} aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <a className="nav-cta" href="#booking">
          Book Us
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
