import React from 'react';
import { motion } from 'framer-motion';

const DraggableCard = ({ card }) => {
  return (
    <motion.div
      draggable
      onDragStart={() => { window.draggedId = card.id; }}
      whileTap={{ scale: 0.9 }}
      style={{ 
        background: 'white', 
        padding: '10px 15px', 
        borderRadius: '12px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
        cursor: 'grab', 
        fontWeight: 'bold', 
        borderBottom: '3px solid #3b82f6', 
        color: '#1e40af',
        fontSize: '0.9rem', // Smaller text for mobile
        whiteSpace: 'nowrap'
      }}
    >
      {card.title}
    </motion.div>
  );
};

export default DraggableCard;