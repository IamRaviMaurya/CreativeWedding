import React from 'react';
import { BookOpen, Camera, Clapperboard, Heart, PartyPopper, Sparkles } from 'lucide-react';
import { services } from '../constants';
import SectionHeading from './SectionHeading';

const iconMap = {
  album: BookOpen,
  camera: Camera,
  film: Clapperboard,
  heart: Heart,
  party: PartyPopper,
  sparkles: Sparkles
};

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <SectionHeading
        eyebrow="Wedding Services"
        title="Everything your celebration needs"
        copy="Choose focused coverage for one event or build a complete wedding story across pre-wedding, rituals, reception, films, and albums."
      />

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Camera;

          return (
            <article className="service-card" key={service.title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
              <div className="service-image">
                <img src={service.image} alt={`${service.title} by CreativeWedding`} />
              </div>
              <div className="service-icon" aria-hidden="true">
                <Icon size={28} />
              </div>
              <p className="card-kicker">{service.kicker}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="service-footer">
                <span>Best for</span>
                <strong>{service.bestFor}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
