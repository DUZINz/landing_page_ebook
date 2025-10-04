import React from 'react';
import { EbookGrid } from '../components';

const Ebooks: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0f0f0f' }}>
      <div style={{ padding: '2rem 0' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          color: '#fff', 
          marginBottom: '1rem' 
        }}>
          Our Ebook Collection
        </h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#ccc', 
          fontSize: '1.2rem', 
          maxWidth: '600px', 
          margin: '0 auto 3rem',
          padding: '0 2rem'
        }}>
          Discover our complete library of premium ebooks.
        </p>
        <EbookGrid />
      </div>
    </div>
  );
};

export default Ebooks;