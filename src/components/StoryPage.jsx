import React, { useEffect } from 'react';

export default function StoryPage({ story, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Hide body scroll when page is active (optional since it covers viewport)
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!story) return null;

  return (
    <div className="story-full-page fade-in">
      <button className="story-back-btn" onClick={onBack}>
        &larr; Back to Portfolio
      </button>

      <div className="story-hero">
        <img src={story.featuredImage} alt={story.title} className="story-hero-img" />
        <div className="story-hero-overlay">
          <h1>{story.title} | {story.venue || 'Mumbai'}</h1>
        </div>
      </div>

      <div className="story-details-container">
        <div className="story-meta">
          {story.outfitsBride && <p><strong>Bride's Outfits:</strong> {story.outfitsBride}</p>}
          {story.outfitsGroom && <p><strong>Groom's Outfits:</strong> {story.outfitsGroom}</p>}
          {story.mua && <p><strong>MUA:</strong> {story.mua}</p>}
          {story.planners && <p><strong>Planners:</strong> {story.planners}</p>}
          {story.venue && <p><strong>Venue:</strong> {story.venue}</p>}
        </div>

        <div className="story-description">
          <p>{story.storyText}</p>
        </div>
      </div>

      <div className="story-gallery">
        {story.gallery.map((imgSrc, index) => (
          <figure className="story-gallery-item" key={index}>
            <img src={imgSrc} alt={`Gallery image ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}
