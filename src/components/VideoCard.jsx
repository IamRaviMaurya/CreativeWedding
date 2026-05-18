import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-card" data-reveal>
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`${video.embedUrl}?autoplay=1&title=0&byline=0&portrait=0`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="video-poster" type="button" aria-label={`Play ${video.title}`} onClick={() => setPlaying(true)}>
            <img src={video.poster} alt="" aria-hidden="true" />
            <span className="play-button" aria-hidden="true">
              <Play size={18} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <div className="video-copy">
        <p className="card-kicker">{video.label}</p>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </article>
  );
}
