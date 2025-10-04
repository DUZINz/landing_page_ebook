import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Home, About, Ebooks, Contact } from './pages';
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  console.log('App - Current page:', currentPage);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    console.log('App - Navigating to:', page);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    console.log('App - Rendering page:', currentPage);
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'ebooks':
        return <Ebooks />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;