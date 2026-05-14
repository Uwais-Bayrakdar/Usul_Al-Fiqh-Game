import React from 'react';
import { motion } from 'framer-motion';

const DropSlot = ({ item, onDrop, index }) => {
  const filled = !!item;
  return (
    <div 
      onDragOver={e => e.preventDefault()}
      onDrop={() => onDrop(window.draggedId, index)}
      style={{
        width: '100%', // Fluid width
        maxWidth: '160px', // Prevents it from getting too big on PC
        aspectRatio: '1/1', // Keeps it a perfect square
        borderRadius: '18px', 
        border: filled ? '2px solid #22c55e' : '2px dashed #bfdbfe',
        background: filled ? '#f0fdf4' : 'white',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '10px'
      }}
    >
      {filled ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#15803d' }}>{item.title}</div>
        </div>
      ) : (
        <span style={{ color: '#bfdbfe', fontSize: '1.5rem' }}>؟</span>
      )}
    </div>
  );
};

export default DropSlot;