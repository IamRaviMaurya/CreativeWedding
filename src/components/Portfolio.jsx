import React from 'react';
import { galleryImages } from '../constants';
import SectionHeading from './SectionHeading';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <SectionHeading
        eyebrow="Portfolio"
        title="A gallery that feels alive"
        copy="Color-rich frames, tender pauses, and festival energy arranged in a responsive masonry wall."
      />

      <div className="masonry-gallery">
        {galleryImages.map((image, index) => (
          <figure
            key={image.title}
            className={`gallery-card gallery-card-${image.size}`}
            data-reveal
            style={{ '--delay': `${index * 80}ms` }}
          >
            <img src={image.src} alt={image.alt} />
            <figcaption>
              <span>{image.category}</span>
              <strong>{image.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
