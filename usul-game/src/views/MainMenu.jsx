import React from 'react';
import { motion } from 'framer-motion';
import { TOPICS } from '../data/usulData';

const MainMenu = ({ onSelect }) => {
  const styles = {
    container: { 
      padding: '5vw 20px', 
      textAlign: 'center', 
      direction: 'rtl',
      minHeight: '100vh'
    },
    title: { 
      color: '#1d4ed8', 
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', // Scalable font for PC/Mobile
      marginBottom: '20px' 
    },
    grid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px', 
      maxWidth: '1200px', 
      margin: '40px auto' 
    },
    topicCard: { 
      background: 'white', 
      padding: '20px', 
      borderRadius: '24px', 
      cursor: 'pointer', 
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
      borderBottom: '6px solid #3b82f6',
      
      // Key Fixes:
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between', // Pushes button to bottom
      minHeight: '320px', // Ensures a consistent minimum size
      height: 'auto', // Allows it to grow if text is long
      overflow: 'hidden' // Keeps everything tidy
    },
    descriptionText: {
      fontSize: '0.9rem', 
      color: '#64748b', 
      lineHeight: '1.4',
      marginBottom: '20px',
      flexGrow: 1, // This pushes the button down
      display: 'flex',
      alignItems: 'center'
    },
    playButton: {
      width: '100%', // Makes the button easy to tap on phone
      background: '#3b82f6', 
      color: 'white', 
      border: 'none', 
      padding: '12px', 
      borderRadius: '50px', 
      fontWeight: 'bold',
      marginTop: 'auto' // Final insurance to stay at bottom
    }
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={onOpenTree}
        style={{
          background: '#1e40af',
          color: 'white',
          padding: '12px 25px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        🌳 عرض التشجير الكامل (خارطة العلم)
      </button>
      
      <header>
        <h1 style={styles.title}>جزيرة أصول الفقه 🏝️</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#64748b' }}>
          اختر المبحث الذي تود إتقانه وانطلق في مغامرات الأصول
        </p>
      </header>

      <div style={styles.grid}>
        {TOPICS.map(topic => (
          <motion.div 
            key={topic.id}
            whileHover={{ y: -10 }}
            onClick={() => onSelect(topic.id)}
            style={styles.topicCard}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{topic.icon}</div>
              <h2 style={{ color: '#1e3a8a', fontSize: '1.2rem', marginBottom: '10px' }}>{topic.title}</h2>
              <p style={styles.descriptionText}>{topic.description}</p>
            </div>
            <button style={styles.playButton}>
              العب الآن
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;