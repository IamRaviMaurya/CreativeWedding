import React, { useState } from 'react';
import { featuredStories } from '../storyConstants';
import SectionHeading from './SectionHeading';
import StoryPage from './StoryPage';

export default function Portfolio() {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  const handleBack = () => {
    setSelectedStory(null);
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Our wedding stories"
        copy="A responsive gallery of ceremonies, portraits, rituals, decor, and celebration moments from the CreativeWedding style."
      />

      <div className="portfolio-grid">
        {featuredStories.map((story, index) => (
          <figure
            className={`portfolio-card portfolio-card-${story.size}`}
            key={story.id}
            data-reveal
            style={{ '--delay': `${index * 70}ms`, cursor: 'pointer' }}
            onClick={() => handleStorySelect(story)}
          >
            <img src={story.featuredImage} alt={story.title} />
            <figcaption className="portfolio-card-caption">
              <div className="caption-content">
                <span>{story.venue || 'Story'}</span>
                <strong>{story.title}</strong>
              </div>
              <button className="view-more-btn" onClick={(e) => { e.stopPropagation(); handleStorySelect(story); }}>View Story &rarr;</button>
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedStory && (
        <StoryPage story={selectedStory} onBack={handleBack} />
      )}
    </section>
  );
}
