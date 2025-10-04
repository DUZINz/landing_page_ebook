import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1>Welcome to My Ebooks</h1>
      <p>Discover a world of knowledge at your fingertips.</p>
      <button className="cta-button">Browse Ebooks</button>
      <img src="/path/to/your/image.jpg" alt="Ebooks" />
    </div>
  );
};

export default Hero;