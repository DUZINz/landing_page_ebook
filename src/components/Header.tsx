import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log('Header - Received props:', { currentPage, onNavigate: typeof onNavigate });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Header - Link clicked:', page);
    console.log('Header - onNavigate type:', typeof onNavigate);
    
    if (onNavigate && typeof onNavigate === 'function') {
      console.log('Header - Calling onNavigate with:', page);
      onNavigate(page);
    } else {
      console.error('Header - onNavigate is not available or not a function:', onNavigate);
    }
  };

  const handleLogoClick = () => {
    console.log('Header - Logo clicked');
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate('home');
    }
  };

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-content">
        <h1 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          My Ebooks
        </h1>
        <nav>
          <ul>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick(e, 'home')}
                style={{
                  color: currentPage === 'home' ? '#8b95ea' : '#ccc'
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick(e, 'ebooks')}
                style={{
                  color: currentPage === 'ebooks' ? '#8b95ea' : '#ccc'
                }}
              >
                Ebooks
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick(e, 'about')}
                style={{
                  color: currentPage === 'about' ? '#8b95ea' : '#ccc'
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#"
                onClick={(e) => handleLinkClick(e, 'contact')}
                style={{
                  color: currentPage === 'contact' ? '#8b95ea' : '#ccc'
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;