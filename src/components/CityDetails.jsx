import React from 'react';

const CityDetails = ({ city, onClose }) => {
  return (
    <div className="city-info">
      <div className="song-card">
        <div className="city-name">
          <span>📍</span>
          <span className="city-text">{city.name}</span>
        </div>
        
        <div className="song-title">
          <span>🎵</span>
          <span>{city.song}</span>
        </div>
        
        <div className="album-info">
          <span>💿</span>
          <span>Album: {city.album}</span>
        </div>
        
        <div className="reason-box">
          <div className="reason-label">💭 Why?</div>
          <div className="reason-text">{city.reason}</div>
        </div>
      </div>
      
      <button 
        className="submit-btn secondary"
        onClick={onClose}
      >
        ✕ Close
      </button>
    </div>
  );
};

export default CityDetails;
