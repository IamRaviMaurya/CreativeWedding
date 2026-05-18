import React from 'react';

export default function SectionHeading({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={`section-heading section-heading-${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
