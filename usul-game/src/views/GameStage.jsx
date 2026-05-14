import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ALL_CARDS } from '../data/usulData';
import Header from '../components/Header';
import DropSlot from '../components/DropSlot';
import DraggableCard from '../components/DraggableCard';

const GameStage = ({ topic, onBack }) => {
  const [slots, setSlots] = useState(Array(topic.slotsCount).fill(null));
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3); // 3 Hearts system
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    setDeck([...ALL_CARDS].sort(() => Math.random() - 0.5));
  }, [topic]);

  const handleLogic = (cardId, slotIndex) => {
    if (lives <= 0) return; // Stop if game over

    const card = ALL_CARDS.find(c => c.id === cardId);
    const alreadyPlaced = slots.some(s => s?.id === cardId);

    // Correct Match
    if (card.type === topic.targetType && !alreadyPlaced && !slots[slotIndex]) {
      const newSlots = [...slots];
      newSlots[slotIndex] = card;
      setSlots(newSlots);
      setDeck(prev => prev.filter(c => c.id !== cardId));
      setScore(prev => prev + 25);
      setSelectedCardId(null);
    } else {
      // Wrong Match - Lose a heart
      setLives(prev => prev - 1);
      setSelectedCardId(null);
    }
  };

  const handleDrop = (cardId, index) => handleLogic(cardId, index);
  const handleSlotClick = (index) => selectedCardId && handleLogic(selectedCardId, index);

  const isLevelComplete = slots.every(slot => slot !== null);

  return (
    <div style={{ padding: '20px 10px', direction: 'rtl', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onBack} style={{ background: '#e2e8f0', border: 'none', padding: '8px 20px', borderRadius: '10px' }}>
          ⬅️ عودة
        </button>
        
        {/* Hearts Display */}
        <div style={{ fontSize: '1.5rem' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} style={{ opacity: i < lives ? 1 : 0.2, transition: '0.3s' }}>❤️</span>
          ))}
        </div>
      </div>

      <Header title={topic.title} subtitle="احذر! خسارة القلوب تعني إعادة المرحلة" score={score} />

      {lives > 0 ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', margin: '30px 0' }}>
            {slots.map((item, i) => (
              <div key={i} onClick={() => handleSlotClick(i)}>
                <DropSlot index={i} item={item} onDrop={handleDrop} />
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <AnimatePresence>
              {!isLevelComplete && deck.map(card => (
                <div 
                  key={card.id} 
                  onClick={() => setSelectedCardId(card.id === selectedCardId ? null : card.id)}
                  style={{ outline: selectedCardId === card.id ? '3px solid #3b82f6' : 'none', borderRadius: '12px' }}
                >
                  <DraggableCard card={card} />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2 style={{ color: '#ef4444', fontSize: '2.5rem' }}>انتهت المحاولات! 💔</h2>
          <button 
            onClick={() => window.location.reload()} 
            style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '30px', marginTop: '20px', fontSize: '1.2rem' }}
          >
            حاول مرة أخرى
          </button>
        </motion.div>
      )}

      {isLevelComplete && lives > 0 && (
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} style={{ textAlign: 'center', marginTop: '20px', background: '#22c55e', color: 'white', padding: '20px', borderRadius: '20px' }}>
          <h3>أحسنت! أتقنت مبحث {topic.title} بنجاح 🎉</h3>
        </motion.div>
      )}
    </div>
  );
};

export default GameStage;