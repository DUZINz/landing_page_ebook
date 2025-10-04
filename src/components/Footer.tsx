import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="animate-on-scroll">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <p>&copy; {new Date().getFullYear()} My Ebooks. All rights reserved.</p>
        <p>Discover, Learn, Grow - Your journey starts here.</p>
        <div className="social-links">
          <a href="#" aria-label="Email">📧</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="GitHub">💻</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;