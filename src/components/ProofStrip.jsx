import React from 'react';
import { proofItems } from '../constants';

export default function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="CreativeWedding highlights">
      {proofItems.map((item, index) => (
        <article key={item.value} className="proof-item" data-reveal style={{ '--delay': `${index * 90}ms` }}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}
