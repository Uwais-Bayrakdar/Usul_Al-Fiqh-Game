import React from 'react';

const Header = ({ title, subtitle, score }) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '5px' }}>{title}</h1>
      {subtitle && <p style={{ color: '#64748b', fontSize: '1.1rem' }}>{subtitle}</p>}
      {score !== undefined && (
        <div style={{ 
          marginTop: '15px', 
          display: 'inline-block', 
          background: '#3b82f6', 
          color: 'white', 
          padding: '8px 20px', 
          borderRadius: '20px',
          fontWeight: 'bold'
        }}>
          النقاط: {score} 🎫
        </div>
      )}
    </header>
  );
};

export default Header;