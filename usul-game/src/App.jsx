import React, { useState } from 'react';
import MainMenu from './views/MainMenu';
import GameStage from './views/GameStage';
import { TOPICS } from './data/usulData';

function App() {
  // 'menu' is the starting view
  const [view, setView] = useState('menu');
  // Stores the specific Usul topic the user wants to play
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Function to switch from Menu to Game
  const handleStartGame = (topicId) => {
    const topic = TOPICS.find(t => t.id === topicId);
    setSelectedTopic(topic);
    setView('game');
  };

  // Function to return to the Main Menu
  const handleBackToMenu = () => {
    setView('menu');
    setSelectedTopic(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f9ff' }}>
      {view === 'menu' ? (
        <MainMenu onSelect={handleStartGame} />
      ) : (
        <GameStage 
          topic={selectedTopic} 
          onBack={handleBackToMenu} 
        />
      )}
    </div>
  );
}

export default App;