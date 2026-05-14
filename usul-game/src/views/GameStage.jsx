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
  // NEW: State to track which card is selected via click
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    setDeck([...ALL_CARDS].sort(() => Math.random() - 0.5));
  }, [topic]);

  const handleLogic = (cardId, slotIndex) => {
    const card = ALL_CARDS.find(c => c.id === cardId);
    const alreadyPlaced = slots.some(s => s?.id === cardId);

    if (card.type === topic.targetType && !alreadyPlaced && !slots[slotIndex]) {
      const newSlots = [...slots];
      newSlots[slotIndex] = card;
      setSlots(newSlots);
      setDeck(prev => prev.filter(c => c.id !== cardId));
      setScore(prev => prev + 25);
      setSelectedCardId(null); // Reset selection after successful placement
      return true;
    }
    return false;
  };

  // PC: Drag and Drop Handler
  const handleDrop = (cardId, index) => {
    handleLogic(cardId, index);
  };

  // Mobile/PC: Click Handler
  const handleSlotClick = (index) => {
    if (selectedCardId) {
      handleLogic(selectedCardId, index);
    }
  };

  const isLevelComplete = slots.every(slot => slot !== null);

  return (
    <div style={{ padding: '20px 10px', direction: 'rtl', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
      <button onClick={onBack} style={{ alignSelf: 'flex-start', background: '#e2e8f0', border: 'none', padding: '8px 20px', borderRadius: '10px' }}>
        ⬅️ عودة
      </button>

      <Header title={topic.title} subtitle="اضغط على البطاقة ثم على المربع لوضعها" score={score} />

      {/* Grid of Slots */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', margin: '30px 0' }}>
        {slots.map((item, i) => (
          <div key={i} onClick={() => handleSlotClick(i)} style={{ cursor: selectedCardId ? 'pointer' : 'default' }}>
            <DropSlot index={i} item={item} onDrop={handleDrop} />
          </div>
        ))}
      </div>

      {/* Card Pool */}
      <div style={{ background: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        <AnimatePresence>
          {!isLevelComplete && deck.map(card => (
            <div 
              key={card.id} 
              onClick={() => setSelectedCardId(card.id === selectedCardId ? null : card.id)}
              style={{
                outline: selectedCardId === card.id ? '3px solid #3b82f6' : 'none',
                borderRadius: '12px',
                transition: '0.2s'
              }}
            >
              <DraggableCard card={card} />
            </div>
          ))}
        </AnimatePresence>
      </div>

      {isLevelComplete && (
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={{ textAlign: 'center', marginTop: '20px', background: '#22c55e', color: 'white', padding: '20px', borderRadius: '20px' }}>
          <h3>أحسنت! أتقنت مبحث {topic.title} 🎉</h3>
        </motion.div>
      )}
    </div>
  );
};

export default GameStage;