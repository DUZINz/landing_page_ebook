import React from 'react';
import { EbookCard } from './';
import { ebooks } from '../data/ebooks';

const EbookGrid: React.FC = () => {
  return (
    <section className="animate-on-scroll">
      <h2 className="section-title">Featured Ebooks</h2>
      <div className="ebook-grid">
        {ebooks.map((ebook, index) => (
          <div 
            key={ebook.id} 
            className="animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <EbookCard ebook={ebook} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EbookGrid;