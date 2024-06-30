import React from 'react';
import './Tile.css';

interface TileProps {
  imgSrc: string;
  title: string;
  content: string;
}

const Tile: React.FC<TileProps> = ({ imgSrc, title, content }) => {
  return (
    <div className="tile">
      <img src={imgSrc} alt={title} className="tile-img" />
      <div className="tile-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="tile-button">Read more</button>
      </div>
    </div>
  );
};

export default Tile;
