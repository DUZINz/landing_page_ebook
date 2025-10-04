import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EbookStore. All rights reserved.</p>
        <p>Discover, Learn, Grow - Your journey to knowledge starts here.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">📧</a>
          <a href="#" target="_blank" rel="noopener noreferrer">📱</a>
          <a href="#" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="#" target="_blank" rel="noopener noreferrer">💼</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;