import React from 'react';
import { Ebook } from '../types';

interface EbookCardProps {
  ebook?: Ebook;
  title?: string;
  description?: string;
}

const EbookCard: React.FC<EbookCardProps> = ({ ebook, title, description }) => {
  const displayTitle = ebook?.title || title || '';
  const displayDescription = ebook?.description || description || '';

  return (
    <div className="ebook-card">
      <img src={ebook?.coverImage} alt={displayTitle} className="ebook-image" />
      <h3 className="ebook-title">{displayTitle}</h3>
      <p className="ebook-author">Author Name</p>
      <p className="ebook-description">{displayDescription}</p>
    </div>
  );
};

export default EbookCard;