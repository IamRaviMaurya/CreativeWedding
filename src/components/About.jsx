import React from 'react';
import { CheckCircle2, Flower2, HeartHandshake } from 'lucide-react';
import { images } from '../constants';
import SectionHeading from './SectionHeading';

const promises = ['Artistic wedding photography', 'Cinematic wedding films', 'Experienced and creative team'];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-layout">
        <div className="about-media" data-reveal>
          <img className="about-image-main" src={images.aboutOne} alt="Wedding couple captured by CreativeWedding" />
          <img className="about-image-secondary" src={images.aboutTwo} alt="CreativeWedding ceremony portrait" />
          {/* <div className="about-badge">
            <Flower2 size={22} aria-hidden="true" />
            <span>Story-led memories</span>
          </div> */}
        </div>

        <div className="about-copy">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Why choose us for your wedding memories?"
            copy="CreativeWedding is a photo and film team built around warmth, patience, and a love for real moments. From quiet glances to grand celebrations, we shape every frame around your story."
          />

          <div className="about-note" data-reveal>
            <HeartHandshake size={24} aria-hidden="true" />
            <p>
              We plan with you before the day, move gently through rituals and portraits, and deliver a visual story
              that feels elegant, emotional, and unmistakably yours.
            </p>
          </div>

          <ul className="check-list" data-reveal>
            {promises.map((promise) => (
              <li key={promise}>
                <CheckCircle2 size={19} aria-hidden="true" />
                {promise}
              </li>
            ))}
          </ul>

          <a className="button button-primary" href="#portfolio" data-reveal>
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
