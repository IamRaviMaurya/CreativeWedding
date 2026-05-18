import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="video-card" data-reveal>
      <div className="video-frame">
        {isPlaying ? (
          <iframe
            src={`${video.embedUrl}?autoplay=1&title=0&byline=0&portrait=0`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-poster"
            type="button"
            aria-label={`Play ${video.title}`}
            onClick={() => setIsPlaying(true)}
          >
            <img src={video.poster} alt="" aria-hidden="true" />
            <span className="play-pill" aria-hidden="true">
              <Play size={15} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <div className="video-copy">
        <span>{video.length}</span>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}
