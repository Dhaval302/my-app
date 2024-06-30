import React, { useState } from 'react';
import './Body.css';
import Tile from './Tile';

const tiles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Tile ${i + 1}`,
  content: 'This is some content for the tile.',
  imgSrc: `https://via.placeholder.com/300x150?text=${i + 1}`
}));

const Body: React.FC = () => {
  const [hits, setHits] = useState<number>(0);

  const increaseHits = () => {
    setHits(prevHits => prevHits + 1);
  };

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="Body">
      <img src="./eventzo.png" alt="Banner" className="banner-img" />
      <div className="scroll-container" ref={scrollContainerRef}>
        {tiles.map(tile => (
          <Tile key={tile.id} imgSrc={tile.imgSrc} title={tile.title} content={tile.content} />
        ))}
      </div>
      <button className="scroll-button left" onClick={() => scroll('left')}>‹</button>
      <button className="scroll-button right" onClick={() => scroll('right')}>›</button>
      <div className="hits-counter">
        Website Hits: {hits}
        <button onClick={increaseHits}>Increase Hits</button>
      </div>
    </div>
  );
};

export default Body;
