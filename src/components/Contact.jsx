import React from 'react';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import { contactDetails, socialLinks } from '../constants';
import SectionHeading from './SectionHeading';

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  message: MessageCircle,
  youtube: Youtube
};

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionHeading
        eyebrow="Contact"
        title="Let us be part of your love story"
        copy="Reach the CreativeWedding team for date availability, package details, pre-wedding concepts, or complete wedding coverage."
      />

      <div className="contact-grid">
        <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`} className="contact-card" data-reveal>
          <Phone size={24} aria-hidden="true" />
          <span>Call</span>
          <strong>{contactDetails.phone}</strong>
        </a>
        <a href={`mailto:${contactDetails.email}`} className="contact-card" data-reveal>
          <Mail size={24} aria-hidden="true" />
          <span>Email</span>
          <strong>{contactDetails.email}</strong>
        </a>
        <div className="contact-card" data-reveal>
          <MapPin size={24} aria-hidden="true" />
          <span>Studio</span>
          <strong>{contactDetails.location}</strong>
        </div>
        <div className="contact-card contact-social-card" data-reveal>
          <MessageCircle size={24} aria-hidden="true" />
          <span>Follow</span>
          <div className="contact-socials">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] ?? MessageCircle;
              return (
                <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
                  <Icon size={19} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
