import React from 'react';
import { EbookCard } from './';
import { ebooks } from '../data/ebooks';

const EbookGrid: React.FC = () => {
  // Verifica se ebooks existe e é um array, senão usa array vazio
  const ebooksList = Array.isArray(ebooks) ? ebooks : [];

  return (
    <div className="ebook-grid">
      {ebooksList.map((ebook) => (
        <EbookCard key={ebook.id} ebook={ebook} />
      ))}
    </div>
  );
};

export default EbookGrid;