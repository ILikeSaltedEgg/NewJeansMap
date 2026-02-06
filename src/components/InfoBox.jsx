import React, { useState, useEffect } from 'react';
import CityDetails from './CityDetails';
import WelcomeMessage from './WelcomeMessage';

const InfoBox = ({ 
  selectedCity, 
  onClearSelection, 
  onShowSubmitForm, 
  totalCities,
  submissionsCount 
}) => {
  const [position, setPosition] = useState({ 
    x: window.innerWidth - 420, 
    y: 20 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('.drag-handle')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div 
      className="info-box" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="drag-handle">
        <div className="title">
          <span className="bunny-icon">🐰</span> NEWJEANS WORLD MAP <span className="bunny-icon">🎧</span>
        </div>
        <div className="drag-indicator">
          ↔️ Drag me!
        </div>
      </div>
      
      <div className="info-content">
        {selectedCity ? (
          <CityDetails 
            city={selectedCity} 
            onClose={onClearSelection} 
          />
        ) : (
          <WelcomeMessage totalCities={totalCities} />
        )}
        
        <button 
          className="submit-btn primary"
          onClick={onShowSubmitForm}
        >
          ➕ Submit Your City! 🎵
        </button>
        
        {submissionsCount > 0 && (
          <div className="submissions-badge">
            ✨ {submissionsCount} community submission(s)
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
