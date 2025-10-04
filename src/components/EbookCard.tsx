import React from 'react';
import { Ebook } from '../types';

interface EbookCardProps {
  ebook: Ebook;
}

const EbookCard: React.FC<EbookCardProps> = ({ ebook }) => {
  return (
    <div className="ebook-card">
      <img 
        src={ebook.coverImage} 
        alt={ebook.title} 
        className="ebook-image" 
      />
      <h3 className="ebook-title">{ebook.title}</h3>
      <p className="ebook-author">by {ebook.author}</p>
      <p className="ebook-description">{ebook.description}</p>
      <div className="ebook-price">${ebook.price}</div>
      <button className="ebook-button">
        Buy Now
      </button>
    </div>
  );
};

export default EbookCard;