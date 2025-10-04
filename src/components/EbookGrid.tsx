import React from 'react';
import { EbookCard } from './';
import { ebooks } from '../data/ebooks';

const EbookGrid: React.FC = () => {
  const ebooksList = Array.isArray(ebooks) ? ebooks : [];

  return (
    <section>
      <h2 className="section-title">Featured Ebooks</h2>
      <div className="ebook-grid">
        {ebooksList.map((ebook) => (
          <EbookCard key={ebook.id} ebook={ebook} />
        ))}
      </div>
    </section>
  );
};

export default EbookGrid;