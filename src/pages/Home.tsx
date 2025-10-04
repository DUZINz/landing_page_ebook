import React from 'react';
import { Header, Hero, EbookGrid, Footer } from '../components';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <EbookGrid />
      <Footer />
    </div>
  );
};

export default Home;