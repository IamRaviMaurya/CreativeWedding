import React, { useState, useEffect } from 'react';
import { featuredStories } from '../storyConstants';
import SectionHeading from './SectionHeading';
import StoryPage from './StoryPage';

const INITIAL_COUNT = 6; // Homepage shows 6 stories

export default function Portfolio() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showAllStoriesPage, setShowAllStoriesPage] = useState(false);

  // Homepage stories
  const homepageStories = featuredStories.slice(0, INITIAL_COUNT);

  // When a story opens, push a history entry so the phone back button
  // fires a popstate event instead of leaving the page.
  const handleStorySelect = (story) => {
    setSelectedStory(story);
    window.history.pushState({ storyOpen: true }, '');
  };

  // Called when clicking "More Stories" to open the full collection page
  const handleOpenAllStories = () => {
    setShowAllStoriesPage(true);
    window.history.pushState({ allStories: true }, '');
  };

  // Called by the in-app back button inside StoryPage
  const handleStoryBack = () => {
    if (window.history.state?.storyOpen) {
      window.history.back(); // popstate listener will update state
    } else {
      setSelectedStory(null);
    }
  };

  // Called by the in-app back button inside AllStoriesPage
  const handleAllStoriesBack = () => {
    if (window.history.state?.allStories) {
      window.history.back(); // popstate listener will update state
    } else {
      setShowAllStoriesPage(false);
    }
  };

  // Listen for the phone / browser back button
  useEffect(() => {
    const onPopState = (e) => {
      const state = e.state;
      if (!state) {
        // Returned to Homepage
        setSelectedStory(null);
        setShowAllStoriesPage(false);
      } else if (state.allStories) {
        // Returned to All Stories list
        setSelectedStory(null);
        setShowAllStoriesPage(true);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Prevent background scroll when overlays are active
  useEffect(() => {
    if (showAllStoriesPage || selectedStory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAllStoriesPage, selectedStory]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Our wedding stories"
        copy="A responsive gallery of ceremonies, portraits, rituals, decor, and celebration moments from the CreativeWedding style."
      />

      {/* Featured stories grid on homepage */}
      <div className="portfolio-grid">
        {homepageStories.map((story, index) => (
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

      {/* "View More Stories" Button */}
      {featuredStories.length > INITIAL_COUNT && (
        <div className="portfolio-more-wrap">
          <button
            className="portfolio-more-btn"
            onClick={handleOpenAllStories}
          >
            View More Stories &rarr;
          </button>
        </div>
      )}

      {/* Full-Page Overlay: All Stories Page */}
      {showAllStoriesPage && (
        <div className="all-stories-page fade-in">
          <button className="story-back-btn" onClick={handleAllStoriesBack}>
            &larr; Back to Home
          </button>

          <SectionHeading
            eyebrow="Collection"
            title="All Wedding Stories"
            copy="Explore our complete collection of beautiful ceremonies and celebration moments."
          />

          <div className="portfolio-grid" style={{ marginTop: '40px' }}>
            {featuredStories.map((story, index) => (
              <figure
                className={`portfolio-card portfolio-card-${story.size}`}
                key={story.id}
                style={{ cursor: 'pointer' }}
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
        </div>
      )}

      {/* Full-Page Overlay: Individual Story Detail */}
      {selectedStory && (
        <StoryPage story={selectedStory} onBack={handleStoryBack} />
      )}
    </section>
  );
}
