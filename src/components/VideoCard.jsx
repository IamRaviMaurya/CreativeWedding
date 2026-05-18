import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <article className="video-card" data-reveal>
      <div className="video-frame">
        <a className="video-poster" href={video.link} target="_blank" rel="noreferrer" aria-label={`Open ${video.title}`}>
          <img src={video.poster} alt="" aria-hidden="true" />
          <span className="play-button" aria-hidden="true">
            <Play size={18} fill="currentColor" />
          </span>
        </a>
      </div>
      <div className="video-copy">
        <p className="card-kicker">{video.label}</p>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <a className="video-link" href={video.link} target="_blank" rel="noreferrer">
          Watch on YouTube
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
