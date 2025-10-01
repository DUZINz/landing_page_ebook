import React from 'react';
import EbookCard from './EbookCard';
import { Ebook } from '../types';

interface EbookGridProps {
  ebooks: Ebook[];
}

const EbookGrid: React.FC<EbookGridProps> = ({ ebooks }) => {
  return (
    <div className="ebook-grid">
      {ebooks.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  );
};

export default EbookGrid;