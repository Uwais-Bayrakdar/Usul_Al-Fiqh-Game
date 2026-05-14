import React, { useState } from 'react';
import MainMenu from './views/MainMenu';
import GameStage from './views/GameStage';
import TashjirView from './views/TashjirView'; // Import the new view
import { TOPICS } from './data/usulData';

function App() {
  // Views: 'menu', 'game', 'tashjir'
  const [view, setView] = useState('menu');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleStartGame = (topicId) => {
    const topic = TOPICS.find(t => t.id === topicId);
    setSelectedTopic(topic);
    setView('game');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f9ff' }}>
      {view === 'menu' && (
        <MainMenu 
          onSelect={handleStartGame} 
          onOpenTree={() => setView('tashjir')} // Pass a function to open the tree
        />
      )}

      {view === 'game' && (
        <GameStage 
          topic={selectedTopic} 
          onBack={() => setView('menu')} 
        />
      )}

      {view === 'tashjir' && (
        <TashjirView onBack={() => setView('menu')} />
      )}
    </div>
  );
}

export default App;