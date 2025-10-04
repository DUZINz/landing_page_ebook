import React from 'react';

const About: React.FC = () => {
  console.log('About page rendered');
  
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0f0f0f' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>About Us</h1>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
          <p style={{ marginBottom: '2rem' }}>
            Welcome to My Ebooks, your premier destination for high-quality digital books 
            that inspire, educate, and transform lives.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Founded with a passion for knowledge sharing, we curate the finest collection 
            of ebooks across technology, business, design, and personal development.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Our mission is to make premium educational content accessible to everyone, 
            anywhere, at any time. Whether you're a developer looking to learn new technologies, 
            an entrepreneur building your business, or someone on a journey of personal growth, 
            we have the perfect book for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;