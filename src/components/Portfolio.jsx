import React from 'react';
import { portfolioItems } from '../constants';
import SectionHeading from './SectionHeading';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Our wedding stories"
        copy="A responsive gallery of ceremonies, portraits, rituals, decor, and celebration moments from the CreativeWedding style."
      />

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <figure
            className={`portfolio-card portfolio-card-${item.size}`}
            key={item.title}
            data-reveal
            style={{ '--delay': `${index * 70}ms` }}
          >
            <img src={item.image} alt={item.alt} />
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
