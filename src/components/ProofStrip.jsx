import React from 'react';
import { socialProof } from '../constants';

export default function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="CreativeWedding highlights">
      {socialProof.map((item) => (
        <div key={item.label} className="proof-item" data-reveal>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
