import React from 'react';
import { videos } from '../constants';
import SectionHeading from './SectionHeading';
import VideoCard from './VideoCard';

export default function VideoShowcase() {
  return (
    <section id="films" className="section films-section">
      <SectionHeading
        eyebrow="Cinematic Films"
        title="Wedding films with emotion and rhythm"
        copy="From teaser reels to full ceremony edits, our films carry the sound, movement, and feeling of the day."
      />

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}
