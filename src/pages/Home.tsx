import React from 'react';
import { Hero, EbookGrid, Footer } from '../components';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <EbookGrid />
      <Footer />
    </div>
  );
};

export default Home;