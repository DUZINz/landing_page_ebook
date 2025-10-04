import React from 'react';
import { Ebook } from '../types';

interface EbookCardProps {
  ebook?: Ebook;
  title?: string;
  description?: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ ebook, title, description }) => {
  const displayTitle = ebook?.title || title || 'Untitled';
  const displayDescription = ebook?.description || description || 'No description available';

  return (
    <div className="ebook-card">
      <img 
        src={ebook?.coverImage || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop&crop=center'} 
        alt={displayTitle} 
        className="ebook-image" 
      />
      <div className="ebook-content">
        <h3 className="ebook-title">{displayTitle}</h3>
        <p className="ebook-author">by {ebook?.author || 'Anonymous'}</p>
        <p className="ebook-description">{displayDescription}</p>
        {ebook?.price && (
          <div className="ebook-price">${ebook.price}</div>
        )}
        <button className="ebook-button">
          {ebook?.price ? 'Buy Now' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default EbookCard;