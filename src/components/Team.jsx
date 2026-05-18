import React from 'react';
import { Camera, Clapperboard, NotebookPen, TimerReset } from 'lucide-react';
import { teamMembers } from '../constants';
import SectionHeading from './SectionHeading';

const roleIcons = [Camera, Clapperboard, NotebookPen, TimerReset];

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <SectionHeading
        eyebrow="Our Team"
        title="Calm hands behind every memory"
        copy="A focused crew for photography, cinematography, editing, and event flow so your celebration feels natural in front of the camera."
      />

      <div className="team-grid">
        {teamMembers.map((member, index) => {
          const Icon = roleIcons[index] ?? Camera;

          return (
            <article className="team-card" key={member.name} data-reveal style={{ '--delay': `${index * 80}ms` }}>
              <div className="team-photo">
                <img src={member.image} alt={member.alt} />
                <span aria-hidden="true">
                  <Icon size={22} />
                </span>
              </div>
              <div className="team-copy">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
