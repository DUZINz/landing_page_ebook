import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover <span className="gradient-text">Amazing</span> Ebooks
        </h1>
        <p>
          Unlock your potential with our curated collection of premium ebooks. 
          From technology and business to design and personal development.
        </p>
        <button className="cta-button">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;