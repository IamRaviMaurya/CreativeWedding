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
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Couples still talking about the edit"
        copy="A colorful review slider that rotates automatically and remains easy to control."
      />

      <div className="testimonial-shell" data-reveal>
        <button
          className="slider-button"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)}
        >
          &lsaquo;
        </button>

        <article className="testimonial-card">
          <Quote size={42} aria-hidden="true" />
          <p>&ldquo;{current.review}&rdquo;</p>
          <div>
            <strong>{current.name}</strong>
            <span>{current.event}</span>
          </div>
        </article>

        <button
          className="slider-button"
          type="button"
          aria-label="Next testimonial"
          onClick={() => setActive((value) => (value + 1) % testimonials.length)}
        >
          &rsaquo;
        </button>
      </div>

      <div className="slider-dots" role="tablist" aria-label="Choose testimonial">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            className={active === index ? 'is-active' : ''}
            aria-label={`Show review from ${testimonial.name}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
