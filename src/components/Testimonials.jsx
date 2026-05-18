import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../constants';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section testimonials-section">
      <SectionHeading
        eyebrow="Testimonials"
        title="What couples say"
        copy="Couples choose us for the final memories, but they remember the calm, friendly experience just as much."
      />

      <div className="testimonial-layout" data-reveal>
        <div className="testimonial-image">
          <img src={current.image} alt={`${current.name} testimonial`} />
        </div>
        <article className="testimonial-card">
          <Quote size={38} aria-hidden="true" />
          <p>{current.review}</p>
          <strong>{current.name}</strong>
          <span>{current.event}</span>
        </article>
      </div>

      <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            className={active === index ? 'is-active' : ''}
            type="button"
            aria-label={`Show review from ${testimonial.name}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
