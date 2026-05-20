import React from 'react';
import { Aperture, ArrowUpRight } from 'lucide-react';
import { contactDetails, navLinks, services } from '../constants';
import logo from '../../img/logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home" aria-label="CreativeWedding home">
            <span className="brand-mark" aria-hidden="true">
              <Aperture size={21} strokeWidth={2.4} />
            </span>
            <a className="brand" href="#home" aria-label="CreativeWedding home" onClick={() => setOpen(false)}>
              <span className="brand-mark" aria-hidden="true">
                <img src={logo} alt="CreativeWedding logo" />
              </span>
            </a>
          </a>
          <p>Wedding photography, cinematic films, and handcrafted albums for celebrations filled with heart.</p>
        </div>

        <div>
          <h3>Wedding Services</h3>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Studio Address</h3>
          <ul>
            <li>{contactDetails.location}</li>
            <li>{contactDetails.phone} / {contactDetails.alternatePhone}</li>
            <li>{contactDetails.email}</li>
          </ul>
          <a className="footer-cta" href="#booking">
            Check Availability
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 CreativeWedding. All Rights Reserved.</p>
        <p>Made with love by CreativeWedding Team</p>
      </div>
    </footer>
  );
}
