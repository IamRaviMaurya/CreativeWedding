import React from 'react';
import { videos } from '../constants';
import SectionHeading from './SectionHeading';
import VideoCard from './VideoCard';

export default function VideoShowcase() {
  return (
    <section id="films" className="section films">
      <SectionHeading
        eyebrow="Cinematic Films"
        title="Wedding films with heartbeat"
        copy="Short-form trailers and emotional long-form edits crafted with music, movement, and a documentarian eye."
      />

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}
