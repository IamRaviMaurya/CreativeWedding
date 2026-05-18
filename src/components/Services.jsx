import React from 'react';
import { Camera, Clapperboard, HeartHandshake } from 'lucide-react';
import { services } from '../constants';
import SectionHeading from './SectionHeading';

const iconMap = {
  camera: Camera,
  heart: HeartHandshake,
  film: Clapperboard
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <SectionHeading
        eyebrow="Services"
        title="Collections for every celebration"
        copy="Keep names, pricing, deliverables, and highlights editable from a single constants file."
      />

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Camera;

          return (
            <article
              key={service.title}
              className="service-card"
              data-reveal
              style={{ '--accent': service.accent, '--delay': `${index * 100}ms` }}
            >
              <div className="service-icon">
                <Icon size={28} aria-hidden="true" />
              </div>
              <span className="service-kicker">{service.kicker}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="service-footer">
                <span>Starting at</span>
                <strong>{service.price}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
