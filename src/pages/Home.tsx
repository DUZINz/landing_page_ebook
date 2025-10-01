import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EbookGrid from '../components/EbookGrid';
import Footer from '../components/Footer';

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